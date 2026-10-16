import {
  Crosshair,
  Gem,
  Handshake,
  Shield,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/config/business";
import { whyChooseItems } from "@/data/why-choose";

const icons = {
  experience: Shield,
  quality: Gem,
  precision: Crosshair,
  support: Handshake,
  custom: Sparkles,
};

export function WhyChooseUs() {
  return (
    <section
      id="nosotros"
      className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 metal-texture opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent-pink/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              ¿Por qué elegir
              <br />
              <span className="text-cyan">Martín?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-steel sm:text-lg">
              Más que un taller, buscamos ser un aliado para cada proyecto,
              ofreciendo soluciones metálicas funcionales, resistentes y
              adaptadas a las necesidades de nuestros clientes.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="hidden lg:block">
            <p className="rotate-[-6deg] font-script text-3xl text-white/80 xl:text-4xl">
              {business.whyScript}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseItems.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <article className="group h-full rounded-2xl border border-cyan/15 bg-surface/70 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/45 hover:shadow-[0_0_24px_rgba(0,200,248,0.12)]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/30 bg-ink-950/60 text-cyan transition-colors group-hover:bg-cyan group-hover:text-ink-950">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
