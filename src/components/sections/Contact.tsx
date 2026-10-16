"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import { Check, Copy, MapPin, MessageCircle, Phone } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { Reveal } from "@/components/ui/Reveal";
import {
  business,
  getTelHref,
  getWhatsAppUrl,
  isConfigured,
} from "@/config/business";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  service: string;
  description: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  phone: "",
  service: "",
  description: "",
};

function buildMessage(form: FormState) {
  return [
    "Hola, me gustaría solicitar una cotización para un trabajo de soldadura especializada.",
    "",
    `Nombre: ${form.name}`,
    `Teléfono: ${form.phone}`,
    `Tipo de servicio: ${form.service}`,
    `Descripción del proyecto: ${form.description}`,
  ].join("\n");
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const whatsappConfigured = isConfigured(business.whatsapp);
  const phoneConfigured = isConfigured(business.phone);
  const addressConfigured = isConfigured(business.address);
  const telHref = getTelHref();
  const whatsappUrl = useMemo(() => getWhatsAppUrl(), []);

  const validate = (values: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      next.name = "Ingresa tu nombre completo.";
    }
    if (!values.phone.trim() || values.phone.replace(/\D/g, "").length < 7) {
      next.phone = "Ingresa un teléfono válido.";
    }
    if (!values.service) {
      next.service = "Selecciona un tipo de servicio.";
    }
    if (!values.description.trim() || values.description.trim().length < 10) {
      next.description = "Describe el proyecto con al menos 10 caracteres.";
    }
    return next;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCopied(false);
    setStatus(null);

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const message = buildMessage(form);
    const url = getWhatsAppUrl(message);

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("Se abrió WhatsApp con tu solicitud preparada.");
      return;
    }

    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setStatus(
        "WhatsApp aún no está configurado. La solicitud se copió al portapapeles para que puedas enviarla cuando el canal esté listo.",
      );
    } catch {
      setStatus(
        "WhatsApp pendiente de configuración. Copia manualmente el mensaje generado abajo.",
      );
    }
  };

  const contactBlocks = [
    {
      id: "whatsapp",
      title: "WhatsApp",
      text: whatsappConfigured
        ? "Escríbenos directamente."
        : "Canal pendiente de configuración.",
      icon: MessageCircle,
      href: whatsappUrl,
      enabled: Boolean(whatsappUrl),
    },
    {
      id: "phone",
      title: "Llámanos",
      text: phoneConfigured
        ? business.phone!
        : "Número telefónico pendiente de configuración.",
      icon: Phone,
      href: telHref,
      enabled: Boolean(telHref),
    },
    {
      id: "visit",
      title: "Visítanos",
      text: addressConfigured
        ? business.address!
        : "Dirección pendiente de configuración.",
      icon: MapPin,
      href: null,
      enabled: false,
    },
  ];

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-ink-950 py-20 lg:py-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/contact/workshop.jpg"
          alt="Taller industrial de soldadura con atmósfera oscura"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/92 to-ink-950" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-3xl font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hagamos
            <br />
            <span className="text-cyan">realidad tu idea</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-steel sm:text-lg">
            Cuéntanos qué necesitas y recibe atención personalizada para evaluar
            tu proyecto.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactBlocks.map((block, index) => {
            const Icon = block.icon;
            const content = (
              <>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan/35 bg-ink-950/50 text-cyan">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm text-steel">{block.text}</p>
              </>
            );

            return (
              <Reveal key={block.id} delay={index * 0.06}>
                {block.enabled && block.href ? (
                  <a
                    href={block.href}
                    target={block.id === "whatsapp" ? "_blank" : undefined}
                    rel={block.id === "whatsapp" ? "noopener noreferrer" : undefined}
                    className="block h-full rounded-2xl border border-cyan/20 bg-surface/70 p-5 backdrop-blur-md transition-all hover:border-cyan/50 hover:shadow-[0_0_24px_rgba(0,200,248,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="h-full rounded-2xl border border-white/10 bg-surface/50 p-5 backdrop-blur-md">
                    {content}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          {whatsappUrl ? (
            <GlowButton
              href={whatsappUrl}
              external
              variant="pink"
              className="uppercase tracking-[0.08em]"
            >
              Cotizar ahora por WhatsApp
            </GlowButton>
          ) : (
            <GlowButton
              variant="pink"
              className="uppercase tracking-[0.08em]"
              onClick={() =>
                setStatus(
                  "WhatsApp pendiente de configuración. Completa el formulario para copiar tu solicitud.",
                )
              }
            >
              Cotizar ahora por WhatsApp
            </GlowButton>
          )}
          {!whatsappConfigured ? (
            <p className="text-sm text-accent-pink/90">
              Número de WhatsApp pendiente de configuración.
            </p>
          ) : null}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-cyan/20 bg-surface/75 p-6 backdrop-blur-xl sm:p-8"
            noValidate
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
              Solicitud de cotización
            </h3>
            <p className="mt-2 text-sm text-steel">
              Completa los campos. Si WhatsApp está configurado, abriremos el
              mensaje listo para enviar. Si no, podrás copiar la solicitud.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field
                label="Nombre"
                error={errors.name}
                htmlFor="name"
              >
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={fieldClass(Boolean(errors.name))}
                  placeholder="Tu nombre"
                />
              </Field>

              <Field label="Teléfono" error={errors.phone} htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={fieldClass(Boolean(errors.phone))}
                  placeholder="Tu teléfono"
                />
              </Field>

              <Field
                label="Tipo de servicio"
                error={errors.service}
                htmlFor="service"
                className="md:col-span-2"
              >
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, service: e.target.value }))
                  }
                  className={fieldClass(Boolean(errors.service))}
                >
                  <option value="">Selecciona una opción</option>
                  {business.serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Descripción del proyecto"
                error={errors.description}
                htmlFor="description"
                className="md:col-span-2"
              >
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={form.description}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, description: e.target.value }))
                  }
                  className={cn(fieldClass(Boolean(errors.description)), "resize-y")}
                  placeholder="Cuéntanos dimensiones, materiales, plazos u otros detalles relevantes."
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <GlowButton type="submit" className="uppercase tracking-[0.08em]">
                {whatsappConfigured
                  ? "Enviar por WhatsApp"
                  : "Preparar y copiar solicitud"}
              </GlowButton>
              {copied ? (
                <span className="inline-flex items-center gap-2 text-sm text-cyan">
                  <Check className="h-4 w-4" aria-hidden />
                  Copiado al portapapeles
                </span>
              ) : null}
            </div>

            {status ? (
              <p
                role="status"
                className="mt-4 rounded-xl border border-cyan/20 bg-ink-950/60 px-4 py-3 text-sm text-steel"
              >
                {status}
              </p>
            ) : null}

            {!whatsappConfigured ? (
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-sm text-cyan underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                onClick={async () => {
                  const nextErrors = validate(form);
                  setErrors(nextErrors);
                  if (Object.keys(nextErrors).length > 0) return;
                  const message = buildMessage(form);
                  try {
                    await navigator.clipboard.writeText(message);
                    setCopied(true);
                    setStatus("Solicitud copiada al portapapeles.");
                  } catch {
                    setStatus(message);
                  }
                }}
              >
                <Copy className="h-4 w-4" aria-hidden />
                Copiar solicitud nuevamente
              </button>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-white">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 text-xs text-accent-pink" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function fieldClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-ink-950/70 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-steel/60 focus:border-cyan focus:ring-2 focus:ring-cyan/30",
    hasError ? "border-accent-pink/70" : "border-white/15",
  );
}
