export const business = {
  name: "Martín Soldadura Especializada",
  shortName: "Martín",
  tagline: "Metal que construye un mejor mañana.",
  heroScript: "Unimos ideas en metal",
  whyScript: "Calidad en cada unión",

  /** Pendiente de configuración — no inventar datos comerciales */
  whatsapp: null as string | null,
  phone: null as string | null,
  email: null as string | null,
  address: null as string | null,
  city: null as string | null,

  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    tiktok: null as string | null,
    youtube: null as string | null,
  },

  whatsappPrefill:
    "Hola, me gustaría solicitar una cotización para un trabajo de soldadura especializada.",

  serviceOptions: [
    "Soldadura especializada",
    "Fabricación metálica",
    "Reparación y refuerzo",
    "Corte y ensamble",
    "Otro / personalizado",
  ] as const,
} as const;

export type BusinessConfig = typeof business;

export function isConfigured(value: string | null | undefined): value is string {
  return Boolean(value && value.trim().length > 0);
}

export function getWhatsAppUrl(message?: string): string | null {
  if (!isConfigured(business.whatsapp)) return null;
  const digits = business.whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  const text = encodeURIComponent(message ?? business.whatsappPrefill);
  return `https://wa.me/${digits}?text=${text}`;
}

export function getTelHref(): string | null {
  if (!isConfigured(business.phone)) return null;
  const digits = business.phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : null;
}
