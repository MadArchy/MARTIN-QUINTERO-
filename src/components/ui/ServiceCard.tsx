"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Factory, Flame, Scissors, Wrench } from "lucide-react";
import type { ServiceItem } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  flame: Flame,
  factory: Factory,
  wrench: Wrench,
  scissors: Scissors,
};

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = icons[service.icon];

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cyan/20 bg-surface/80 shadow-[0_0_0_1px_rgba(0,200,248,0.05)] backdrop-blur-sm transition-all duration-400 hover:-translate-y-2 hover:border-cyan/55 hover:shadow-[0_0_30px_rgba(0,200,248,0.18)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/35 to-transparent" />
          <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan/40 bg-ink-950/70 text-cyan backdrop-blur-md">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
            {service.title}
          </h3>
          <p className="flex-1 text-sm leading-relaxed text-steel">{service.description}</p>
          <div className="flex justify-end pt-1">
            <Link
              href={`#contacto`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan/40 text-cyan transition-all duration-300 hover:bg-cyan hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              aria-label={`Cotizar ${service.title}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
