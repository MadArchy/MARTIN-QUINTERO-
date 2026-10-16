"use client";

import { useRef } from "react";
import { GlowButton } from "@/components/ui/GlowButton";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="proyectos" className="relative scroll-mt-24 bg-ink-900 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proyectos destacados"
          title={
            <>
              Trabajos que hablan
              <br />
              por <span className="text-cyan">sí solos</span>
            </>
          }
          description="Conoce las soluciones y proyectos desarrollados en el área de fabricación y trabajo metálico."
          action={
            <GlowButton
              variant="ghost"
              className="uppercase tracking-[0.1em]"
              onClick={scrollGallery}
            >
              Ver todos los proyectos
            </GlowButton>
          }
        />

        <div
          ref={galleryRef}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {projects.map((project, index) => (
            <div key={project.id} id={`proyecto-${project.id}`} className="scroll-mt-28">
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-steel/80">
          Categorías visuales de referencia. Sustituye las fotografías en{" "}
          <code className="text-cyan/80">src/data/projects.ts</code> cuando
          existan imágenes reales de trabajos.
        </p>
      </div>
    </section>
  );
}
