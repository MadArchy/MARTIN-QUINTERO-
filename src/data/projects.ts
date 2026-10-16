export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  /** Categorías visuales de ejemplo — no se declaran como proyectos ejecutados */
  isCategoryExample: true;
};

export const projects: ProjectItem[] = [
  {
    id: "estructuras-industriales",
    title: "Estructuras industriales",
    description: "Soluciones estructurales para entornos de producción y carga.",
    image: "/images/projects/estructuras-industriales.jpg",
    imageAlt: "Estructura metálica industrial de gran escala",
    isCategoryExample: true,
  },
  {
    id: "barandales-pasamanos",
    title: "Barandales y pasamanos",
    description: "Acabados metálicos funcionales con precisión y seguridad.",
    image: "/images/projects/barandales.jpg",
    imageAlt: "Barandal metálico moderno en espacio arquitectónico",
    isCategoryExample: true,
  },
  {
    id: "componentes-especiales",
    title: "Componentes metálicos especiales",
    description: "Piezas y ensambles a medida para necesidades específicas.",
    image: "/images/projects/componentes.jpg",
    imageAlt: "Componentes metálicos mecanizados y ensamblados",
    isCategoryExample: true,
  },
  {
    id: "estructuras-comerciales",
    title: "Estructuras comerciales",
    description: "Fabricación metálica aplicada a espacios comerciales.",
    image: "/images/projects/estructuras-comerciales.jpg",
    imageAlt: "Estructura metálica comercial contemporánea",
    isCategoryExample: true,
  },
];
