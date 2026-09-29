import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Erick Personal Trainer | Treino Personalizado",
  description: "Treinamento personalizado presencial e online com Erick Personal Trainer. Acompanhamento para emagrecimento, hipertrofia, condicionamento físico e qualidade de vida.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
