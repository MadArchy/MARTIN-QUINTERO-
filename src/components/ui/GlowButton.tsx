"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type GlowButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "pink" | "ghost";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  external?: boolean;
  ariaLabel?: string;
};

const variants = {
  primary:
    "bg-cyan text-ink-950 hover:bg-cyan-bright shadow-[0_0_24px_rgba(0,200,248,0.35)] hover:shadow-[0_0_32px_rgba(0,229,255,0.45)]",
  secondary:
    "bg-transparent text-white border border-white/25 hover:border-cyan/60 hover:bg-white/5",
  pink: "bg-accent-pink text-white hover:brightness-110 shadow-[0_0_28px_rgba(255,59,134,0.35)]",
  ghost:
    "bg-transparent text-cyan border border-cyan/40 hover:border-cyan hover:bg-cyan/10",
};

export function GlowButton({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  showArrow = true,
  type = "button",
  external = false,
  ariaLabel,
}: GlowButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      ) : null}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
