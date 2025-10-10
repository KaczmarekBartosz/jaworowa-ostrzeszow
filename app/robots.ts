// app/robots.ts
import { MetadataRoute } from "next";

/**
 * Robots.txt dla Osiedle Dębowy Park
 *
 * Automatycznie generowany przez Next.js 15
 * Dostępny pod: /robots.txt
 *
 * Instrukcje dla crawlerów (Google, Bing, etc.) co mogą indeksować.
 */
export default function robots(): MetadataRoute.Robots {
  // Domena produkcyjna
  const baseUrl = "https://debowypark-ostrzeszow.pl";

  return {
    rules: [
      // ===== REGUŁY DLA WSZYSTKICH BOTÓW =====
      {
        userAgent: "*", // Wszystkie crawlery
        allow: "/", // Indeksuj całą stronę
        disallow: [
          "/api/", // NIE indeksuj API endpoints (zbędne w wynikach)
          "/admin/", // NIE indeksuj panel admina (jeśli będzie)
          "/*?*", // NIE indeksuj URL z query params (opcjonalne)
        ],
      },

      // ===== REGUŁY DLA GOOGLEBOT =====
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ===== REGUŁY DLA BING =====
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },

      // ===== BLOKADA AI SCRAPERS (opcjonalne) =====
      // Blokuje boty AI które trenują modele na treści stron
      // Odkomentuj jeśli chcesz zablokować:
      // {
      //   userAgent: [
      //     "GPTBot", // OpenAI
      //     "ChatGPT-User", // OpenAI Chat
      //     "CCBot", // Common Crawl
      //     "anthropic-ai", // Anthropic Claude
      //     "Claude-Web", // Anthropic Claude
      //     "Google-Extended", // Google Bard training
      //   ],
      //   disallow: "/", // Zablokuj całą stronę
      // },

      // ===== BLOKADA ZŁYCH BOTÓW =====
      // Spam crawlers i scrapers
      {
        userAgent: [
          "AhrefsBot", // SEO crawler (zużywa bandwidth)
          "SemrushBot", // SEO crawler
          "DotBot", // SEO crawler
          "MJ12bot", // SEO crawler
          "BLEXBot", // SEO crawler
        ],
        disallow: "/", // Zablokuj całkowicie
      },
    ],

    // ===== SITEMAP =====
    sitemap: `${baseUrl}/sitemap.xml`,

    // ===== PREFEROWANA DOMENA =====
    host: baseUrl,
  };
}
