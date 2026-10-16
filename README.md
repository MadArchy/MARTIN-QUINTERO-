# Martín Soldadura Especializada

Sitio web comercial premium en Next.js (App Router) + TypeScript + Tailwind CSS.

## Requisitos

- Node.js 20+
- npm / yarn / pnpm

## Instalación

```bash
npm install
```

> Si `npm install` falla por SSL en tu entorno, instala las dependencias de `package.json` con tu gestor habitual. El proyecto usa Next.js 16, React 19, Tailwind 4 y Lucide React.

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm start
```

## Editar contenido

| Qué | Dónde |
|---|---|
| WhatsApp, teléfono, dirección, redes | `src/config/business.ts` |
| Servicios | `src/data/services.ts` |
| Proyectos / categorías | `src/data/projects.ts` |
| Ventajas | `src/data/why-choose.ts` |
| Imágenes | `public/images/**` |
| Logo | `public/images/branding/logo-martin.png` |

No inventes datos comerciales: deja `null` hasta confirmarlos.

## Referencias de diseño

Carpeta `martin_cursor_referencias/` con el mockup aprobado y logos originales.
