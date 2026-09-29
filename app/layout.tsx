import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://site-personal-trainer-lime.vercel.app"),
  title: {
    default: "Erick Personal Trainer | Treino Personalizado",
    template: "%s | Erick Personal Trainer",
  },
  description: "Treinamento personalizado presencial e online com Erick Personal Trainer. Acompanhamento para emagrecimento, hipertrofia, condicionamento físico e qualidade de vida.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Erick Personal Trainer",
    title: "Erick Personal Trainer | Treino Personalizado",
    description: "Treinamento personalizado presencial e online para evoluir com segurança e constância.",
    images: [{ url: "/images/about-erick-flex.png", width: 980, height: 865, alt: "Erick Personal Trainer" }],
  },
  twitter: { card: "summary_large_image", title: "Erick Personal Trainer | Treino Personalizado", description: "Treino personalizado presencial e online." },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased"><Analytics />{children}</body>
    </html>
  );
}
