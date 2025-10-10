// app/sitemap.ts
import { MetadataRoute } from "next";

/**
 * Sitemap dla Osiedle Dębowy Park
 *
 * Automatycznie generowany przez Next.js 15
 * Dostępny pod: /sitemap.xml
 *
 * Google użyje tego do indeksacji strony.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Domena produkcyjna
  const baseUrl = "https://debowypark-ostrzeszow.pl";

  // Ostatnia modyfikacja (używamy bieżącej daty)
  const lastModified = new Date();

  return [
    // ===== STRONA GŁÓWNA =====
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: "weekly", // Jak często strona się zmienia
      priority: 1.0, // Najwyższy priorytet (0.0 - 1.0)
    },

    // ===== SEKCJA: O INWESTYCJI =====
    {
      url: `${baseUrl}#dlaczego-warto`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ===== SEKCJA: GALERIA =====
    {
      url: `${baseUrl}#galeria`,
      lastModified: lastModified,
      changeFrequency: "weekly", // Często dodawane nowe zdjęcia
      priority: 0.9, // Bardzo ważna sekcja (visual content)
    },

    // ===== SEKCJA: DOMY I PLANY =====
    {
      url: `${baseUrl}#domy`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9, // Bardzo ważna (główna oferta)
    },

    // ===== SEKCJA: KALKULATOR =====
    {
      url: `${baseUrl}#kalkulator`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.7, // Średni priorytet (narzędzie pomocnicze)
    },

    // ===== SEKCJA: OPINIE =====
    {
      url: `${baseUrl}#opinie`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // ===== SEKCJA: KONTAKT =====
    {
      url: `${baseUrl}#kontakt`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9, // Wysoki priorytet (conversion point)
    },

    // ===== PRZYSZŁE PODSTRONY =====
    // Odkomentuj gdy stworzysz te strony:

    // {
    //   url: `${baseUrl}/polityka-prywatnosci`,
    //   lastModified: lastModified,
    //   changeFrequency: "yearly",
    //   priority: 0.3,
    // },
    // {
    //   url: `${baseUrl}/regulamin`,
    //   lastModified: lastModified,
    //   changeFrequency: "yearly",
    //   priority: 0.3,
    // },
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: lastModified,
    //   changeFrequency: "weekly",
    //   priority: 0.7,
    // },
  ];
}
