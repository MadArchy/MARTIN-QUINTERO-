export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: "flame" | "factory" | "wrench" | "scissors";
};

export const services: ServiceItem[] = [
  {
    id: "soldadura-especializada",
    title: "Soldadura especializada",
    description:
      "Procesos de soldadura de precisión para estructuras, equipos y piezas especiales.",
    image: "/images/services/soldadura.jpg",
    imageAlt: "Soldador profesional trabajando con chispas en ambiente industrial",
    icon: "flame",
  },
  {
    id: "fabricacion-metalica",
    title: "Fabricación metálica",
    description:
      "Diseño y fabricación de estructuras, componentes y soluciones a medida.",
    image: "/images/services/fabricacion.jpg",
    imageAlt: "Estructura metálica industrial en proceso de fabricación",
    icon: "factory",
  },
  {
    id: "reparacion-refuerzo",
    title: "Reparación y refuerzo",
    description:
      "Reparación de piezas, refuerzos estructurales y mantenimiento especializado.",
    image: "/images/services/reparacion.jpg",
    imageAlt: "Técnico realizando reparación sobre componente metálico",
    icon: "wrench",
  },
  {
    id: "corte-ensamble",
    title: "Corte y ensamble",
    description:
      "Corte y ensamble de componentes para proyectos industriales y personalizados.",
    image: "/images/services/corte.jpg",
    imageAlt: "Corte industrial de metal con chispas",
    icon: "scissors",
  },
];
