export type WhyChooseItem = {
  id: string;
  title: string;
  description: string;
  icon: "experience" | "quality" | "precision" | "support" | "custom";
};

/**
 * Sin años, certificaciones ni estadísticas inventadas.
 * Actualizar cuando la empresa confirme datos reales.
 */
export const whyChooseItems: WhyChooseItem[] = [
  {
    id: "experiencia",
    title: "Experiencia en trabajos metálicos",
    description: "Conocimiento aplicado en fabricación y soldadura especializada.",
    icon: "experience",
  },
  {
    id: "calidad",
    title: "Compromiso con la calidad",
    description: "Procesos cuidadosos orientados a uniones resistentes y duraderas.",
    icon: "quality",
  },
  {
    id: "precision",
    title: "Precisión en cada detalle",
    description: "Atención técnica en medidas, acabados y ensambles.",
    icon: "precision",
  },
  {
    id: "seguimiento",
    title: "Atención y seguimiento",
    description: "Acompañamiento claro desde la evaluación hasta la entrega.",
    icon: "support",
  },
  {
    id: "personalizado",
    title: "Soluciones personalizadas",
    description: "Propuestas adaptadas a cada proyecto y necesidad.",
    icon: "custom",
  },
];
