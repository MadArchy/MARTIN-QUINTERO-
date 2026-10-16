import Image from "next/image";
import Link from "next/link";
import { business, isConfigured } from "@/config/business";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M14 13.5h2.5l.5-3H14V8.5c0-.8.2-1.3 1.4-1.3H17V4.1C16.3 4 15.5 4 14.7 4 12.5 4 11 5.3 11 7.8V10.5H8.5v3H11V20h3v-6.5Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 2.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.3a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.2 8.2 0 0 0 4.76 1.52V6.84a4.84 4.84 0 0 1-1-.15Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M23 12.2s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18.5 5.2 12 5.2 12 5.2s-6.5 0-8.8.5c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8 2.3.5 8.8.5 8.8.5s6.5 0 8.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7ZM9.8 15.5v-6.6l5.7 3.3-5.7 3.3Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "Facebook", href: business.social.facebook, icon: FacebookIcon },
    { label: "Instagram", href: business.social.instagram, icon: InstagramIcon },
    { label: "TikTok", href: business.social.tiktok, icon: TikTokIcon },
    { label: "YouTube", href: business.social.youtube, icon: YouTubeIcon },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-pink to-transparent opacity-80" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="#inicio" className="inline-flex items-center gap-3">
            <Image
              src="/images/branding/logo-martin.png"
              alt={business.name}
              width={64}
              height={72}
              className="h-14 w-auto object-contain"
            />
            <span className="font-display text-sm font-bold uppercase leading-tight tracking-wide text-white">
              Martín
              <br />
              Soldadura Especializada
            </span>
          </Link>
          <p className="mt-5 max-w-sm font-script text-2xl text-cyan/90">
            {business.tagline}
          </p>
        </div>

        <nav aria-label="Pie de página">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-steel">
            Navegación
          </p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/80 transition-colors hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-steel">
            Redes sociales
          </p>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              if (!isConfigured(social.href)) {
                return (
                  <span
                    key={social.label}
                    title={`${social.label} pendiente de configuración`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/30"
                    aria-label={`${social.label} pendiente de configuración`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                );
              }

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan/30 text-cyan transition-colors hover:bg-cyan hover:text-ink-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <p className="mt-4 text-xs text-steel">
            Enlaces de redes pendientes de configuración en{" "}
            <code className="text-cyan/80">src/config/business.ts</code>
          </p>
        </div>
      </div>

      <div className="border-t border-white/5 py-5 text-center text-xs text-steel">
        © {year} {business.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
