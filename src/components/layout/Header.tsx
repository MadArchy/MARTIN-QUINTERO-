"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-ink-950/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-ink-950/35 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[84px] lg:px-8">
        <Link
          href="#inicio"
          className="relative z-50 flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-md"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/branding/logo-martin.png"
            alt={business.name}
            width={56}
            height={64}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
          <span className="hidden max-w-[9.5rem] font-display text-[11px] font-bold uppercase leading-tight tracking-wide text-white sm:block lg:max-w-[11rem] lg:text-xs">
            Martín Soldadura Especializada
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan",
                active === item.href
                  ? "text-cyan"
                  : "text-steel hover:text-white",
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-cyan transition-transform duration-300",
                  active === item.href ? "scale-x-100" : "scale-x-0",
                )}
                aria-hidden
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <GlowButton href="#contacto" className="px-5 py-2.5 text-xs uppercase tracking-[0.14em]">
            Cotizar ahora
          </GlowButton>
        </div>

        <button
          type="button"
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-ink-950/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav
          className="flex h-full flex-col items-center justify-center gap-6 px-6"
          aria-label="Móvil"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-display text-3xl font-bold uppercase tracking-wide transition-colors",
                active === item.href ? "text-cyan" : "text-white hover:text-cyan",
              )}
            >
              {item.label}
            </Link>
          ))}
          <GlowButton
            href="#contacto"
            className="mt-4"
            onClick={() => setOpen(false)}
          >
            Cotizar ahora
          </GlowButton>
        </nav>
      </div>
    </header>
  );
}
