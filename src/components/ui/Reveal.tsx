"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduce = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getServerSnapshot,
  );

  useEffect(() => {
    if (reduce) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, reduce]);

  const shown = reduce || visible;

  return (
    <div
      ref={ref}
      className={cn("reveal", shown && "reveal-visible", reduce && "reveal-reduce", className)}
      style={{ transitionDelay: reduce ? "0ms" : `${Math.round(delay * 1000)}ms` }}
    >
      {children}
    </div>
  );
}
