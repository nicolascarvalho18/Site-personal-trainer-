"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
    fbq?: PixelQueue;
  }
}

type PixelQueue = ((...args: unknown[]) => void) & { queue: unknown[][] };

export function Analytics() {
  useEffect(() => {
    if (siteConfig.googleAnalyticsId) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
      window.gtag("js", new Date());
      window.gtag("config", siteConfig.googleAnalyticsId, { anonymize_ip: true });
    }

    if (siteConfig.metaPixelId) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(script);
      const fbq = window.fbq ?? Object.assign(
        (...args: unknown[]) => { fbq.queue.push(args); },
        { queue: [] as unknown[][] },
      );
      window.fbq = fbq;
      fbq("init", siteConfig.metaPixelId);
      fbq("track", "PageView");
    }
  }, []);

  return null;
}
