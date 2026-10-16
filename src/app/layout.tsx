import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter, Great_Vibes } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { business } from "@/config/business";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Precisión, resistencia e innovación`,
    template: `%s | ${business.name}`,
  },
  description:
    "Soluciones en soldadura especializada y fabricación metálica para proyectos industriales, comerciales y personalizados.",
  applicationName: business.name,
  keywords: [
    "soldadura especializada",
    "fabricación metálica",
    "estructuras metálicas",
    "reparación metálica",
    "corte y ensamble",
    "Martín Soldadura",
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: business.name,
    title: `${business.name} | Soldadura especializada`,
    description:
      "Metal que impulsa grandes ideas. Soldadura, fabricación y soluciones metálicas a medida.",
    images: [
      {
        url: "/images/branding/logo-martin-full.png",
        width: 512,
        height: 512,
        alt: business.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description:
      "Soldadura especializada con precisión, resistencia e innovación.",
    images: ["/images/branding/logo-martin-full.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/branding/logo-martin.png",
    apple: "/images/branding/logo-martin.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050B10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${barlow.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink-950 text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
