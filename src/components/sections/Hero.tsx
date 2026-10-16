"use client";

import Image from "next/image";
import { CheckCircle2, Play } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { business } from "@/config/business";

const trustItems = [
  "Compromiso con la calidad",
  "Atención personalizada",
  "Soluciones a medida",
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink-950 pt-[72px] lg:pt-[84px]"
    >
      <div className="absolute inset-0">
        <div className="hero-image-drift absolute inset-0 scale-105">
          <Image
            src="/images/hero/welder.jpg"
            alt="Soldador profesional trabajando sobre estructura metálica con chispas e iluminación industrial"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/88 to-ink-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
        <div className="absolute inset-y-[28%] right-[18%] hidden h-40 w-40 rounded-full bg-cyan/25 blur-3xl lg:block" />
        <div
          className="hero-spark pointer-events-none absolute right-[22%] top-[42%] hidden h-3 w-3 rounded-full bg-cyan-bright shadow-[0_0_40px_12px_rgba(0,229,255,0.55)] lg:block"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 lg:min-h-[calc(100svh-84px)] lg:grid-cols-[0.45fr_0.55fr] lg:px-8 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <p className="hero-fade hero-delay-1 mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan sm:text-xs">
            <span className="h-px w-8 bg-cyan" aria-hidden />
            Metal que impulsa grandes ideas
          </p>

          <h1 className="font-display text-[2.65rem] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
            <span className="hero-fade hero-delay-2 block text-white">Soldadura</span>
            <span className="hero-fade hero-delay-3 block text-metal">Especializada</span>
            <span className="hero-fade hero-delay-4 mt-2 block text-white">Con precisión,</span>
            <span className="hero-fade hero-delay-5 block text-cyan">Resistencia</span>
            <span className="hero-fade hero-delay-6 block text-cyan">e Innovación</span>
          </h1>

          <p className="hero-fade hero-delay-7 mt-6 max-w-md text-base leading-relaxed text-steel sm:text-lg">
            Soluciones en soldadura y fabricación metálica para proyectos
            industriales, comerciales y personalizados. Calidad, precisión y
            soluciones adaptadas a cada necesidad.
          </p>

          <div className="hero-fade hero-delay-8 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GlowButton href="#contacto" className="uppercase tracking-[0.08em]">
              Cotiza tu proyecto ahora
            </GlowButton>
            <GlowButton
              href="#proyectos"
              variant="secondary"
              showArrow={false}
              className="gap-3"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/5">
                <Play className="h-3.5 w-3.5 fill-current" aria-hidden />
              </span>
              Ver nuestro trabajo
            </GlowButton>
          </div>

          <ul className="hero-fade hero-delay-9 mt-10 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 rounded-xl border border-white/8 bg-ink-950/40 px-3 py-3 backdrop-blur-sm"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden />
                <span className="text-xs font-medium leading-snug text-white/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden min-h-[420px] lg:block" aria-hidden>
          <p className="absolute bottom-[18%] right-[8%] max-w-[220px] rotate-[-8deg] font-script text-4xl leading-tight text-white/90 drop-shadow-[0_8px_24px_rgba(0,0,0,0.65)] xl:text-5xl">
            {business.heroScript}
          </p>
        </div>
      </div>

      <p className="relative z-10 px-4 pb-8 text-center font-script text-3xl text-white/85 lg:hidden">
        {business.heroScript}
      </p>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-ink-950"
        aria-hidden
      />
    </section>
  );
}
