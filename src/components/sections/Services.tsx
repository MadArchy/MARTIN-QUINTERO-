import { GlowButton } from "@/components/ui/GlowButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-24 bg-ink-900 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 metal-texture opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nuestros servicios"
          title={
            <>
              Soluciones en metal
              <br />
              para cada <span className="text-cyan">necesidad</span>
            </>
          }
          description="Procesos especializados para fabricación, reparación y ensamble metálico con enfoque industrial."
          action={
            <GlowButton href="#contacto" variant="ghost" className="uppercase tracking-[0.1em]">
              Ver todos los servicios
            </GlowButton>
          }
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
