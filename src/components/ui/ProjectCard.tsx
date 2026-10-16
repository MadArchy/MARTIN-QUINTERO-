"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

type ProjectCardProps = {
  project: ProjectItem;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="group relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-cyan/15 bg-surface">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/10 transition-opacity duration-300 group-hover:via-ink-950/70" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-steel">{project.description}</p>
          </div>
          <Link
            href={`#proyecto-${project.id}`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cyan/50 bg-ink-950/50 text-cyan backdrop-blur-sm transition-all duration-300 hover:bg-cyan hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            aria-label={`Ver categoría ${project.title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
