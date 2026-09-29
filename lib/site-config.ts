const rawWhatsAppNumber = import.meta.env.VITE_WHATSAPP_NUMBER ?? "";

export const siteConfig = {
  name: "Erick Personal Trainer",
  url: import.meta.env.VITE_SITE_URL ?? "https://site-personal-trainer-lime.vercel.app",
  whatsappNumber: rawWhatsAppNumber.replace(/\D/g, ""),
  googleAnalyticsId: import.meta.env.VITE_GA_MEASUREMENT_ID ?? "",
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID ?? "",
} as const;

export function whatsappUrl(message: string) {
  if (!siteConfig.whatsappNumber) return "#contato";
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
