# 🎯 SEO Essentials - Szczegółowy Plan Implementacji (Faza 1)

## 📊 Audyt Obecnego Stanu

### ✅ Co już mamy:
- ✅ **Metadata podstawowe** (`app/layout.tsx`):
  - `title`: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie"
  - `description`: 140 znaków (DOBRA długość dla snippet)
  - `lang="pl"` w HTML
  - Google Search Console verification
- ✅ **Favicons** (public/):
  - favicon.ico
  - favicon-16x16.png, favicon-32x32.png
  - apple-touch-icon.png
  - android-chrome-192x192.png, android-chrome-512x512.png
  - site.webmanifest
- ✅ **Semantic HTML**:
  - Sekcje z `id` (dla anchor links)
  - Main tag w page.tsx

### ❌ Co brakuje (DO ZROBIENIA):
- ❌ **Open Graph** (Facebook, LinkedIn share preview)
- ❌ **Twitter Cards** (Twitter/X share preview)
- ❌ **JSON-LD structured data** (Google Rich Results)
- ❌ **Sitemap.xml** (indeksacja przez Google)
- ❌ **Robots.txt** (crawler directives)
- ❌ **Canonical URL** (unikanie duplicate content)
- ❌ **Keywords meta** (mniej ważne, ale pomocne)
- ❌ **Open Graph Image** (1200x630px dla social media)

### 🔍 Prawdopodobna domena:
Na podstawie struktury: **`jaworowa-ostrzeszow.pl`** (lub podobna)
**UWAGA:** Upewnij się o dokładnej domenie przed wdrożeniem!

---

## 🚀 PLAN WDROŻENIA - 4 Zadania

---

# ZADANIE 1: Stworzenie Open Graph Image (30 min)

## Cel:
Obrazek 1200x630px wyświetlany gdy ktoś udostępni stronę na Facebook/LinkedIn/Slack/WhatsApp.

## Wymagania techniczne:
- **Rozmiar:** 1200x630px (ratio 1.91:1)
- **Format:** JPG lub PNG (max 8MB, ale cel: <300KB)
- **Nazwa pliku:** `og-image.jpg`
- **Lokalizacja:** `public/og-image.jpg`

## Zawartość obrazka:

### Wariant A: Prosty (10 min w Canva)
```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [LOGO Dębowy Park]                             │
│                                                 │
│         Osiedle Dębowy Park                     │
│      Nowe domy w Ostrzeszowie                   │
│                                                 │
│  [Zdjęcie domu z wizualizacji]                  │
│                                                 │
│  ✓ Domy z ogrodem  ✓ Blisko natury              │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Wariant B: Zaawansowany (30 min w Figma/Photoshop)
```
┌─────────────────────────────────────────────────┐
│  [Tło: wizualizacja domu z blur/overlay]        │
│                                                 │
│  [LOGO]  Osiedle Dębowy Park                    │
│                                                 │
│  Nowoczesne domy z ogrodem                      │
│  w Ostrzeszowie                                 │
│                                                 │
│  [3 mini ikony z tekstem:]                      │
│  🏡 130m²  🌳 Ogród  📍 Ostrzeszów              │
│                                                 │
│  jaworowa-ostrzeszow.pl                         │
└─────────────────────────────────────────────────┘
```

## Kroki wykonania:

### Opcja 1: Canva (najszybsza)
1. Wejdź na: https://www.canva.com
2. Utwórz "Custom Size" → 1200 x 630 px
3. Wybierz template "Facebook Post" lub "LinkedIn Post"
4. Dodaj:
   - Tło: gradient emerald (zgodny z projektem) LUB wizualizację domu
   - Tekst: "Osiedle Dębowy Park" (Geist/Inter, bold, 72px)
   - Podtytuł: "Nowe domy w Ostrzeszowie" (48px)
   - Logo (jeśli masz)
   - Mini features: "130m² • Ogród • 4 pokoje"
5. Export → JPG → Quality: 90% → Download

### Opcja 2: Figma (jeśli masz doświadczenie)
1. Nowy frame: 1200x630px
2. Background: użyj `/public/jaworowa-wizualizacja-1.png` z overlay
3. Typography: zgodna z projektem (Geist Sans)
4. Export: JPG 90% quality

### Opcja 3: Photoshop/GIMP
1. New file: 1200x630px, 72dpi
2. Użyj `/public/hero_final_desktop.png` jako base
3. Dodaj text layers
4. Save for Web → JPEG High quality

## Weryfikacja:
```bash
# Sprawdź rozmiar pliku
dir "C:\Users\NicoN\Desktop\NewCoding\DebowyPark\jaworowa-ostrzeszow\public\og-image.jpg"

# Powinno być: ~100-300KB, NIE więcej niż 1MB
```

## Przykładowe źródła obrazków:
- Użyj istniejące: `/public/jaworowa-wizualizacja-1.png`
- Lub: `/public/hero_final_desktop.png`
- Dodaj blur + overlay dla czytelności tekstu

---

# ZADANIE 2: Open Graph + Twitter Cards + Metadata (30 min)

## Cel:
Dodać kompleksowe metadata do `app/layout.tsx` dla:
- Facebook/LinkedIn sharing
- Twitter/X sharing
- Google Search Console
- General SEO

## Plik do edycji:
`app/layout.tsx` (linie 18-25)

## Implementacja:

### KROK 2.1: Przygotuj dane

**UWAGA KRYTYCZNA:** Zamień `https://jaworowa-ostrzeszow.pl` na **PRAWDZIWĄ DOMENĘ**!

```typescript
// Zdefiniuj zmienne na górze pliku (po importach)
const SITE_URL = "https://jaworowa-ostrzeszow.pl"; // ⚠️ ZMIEŃ NA PRAWDZIWĄ!
const SITE_NAME = "Osiedle Dębowy Park";
const SITE_DESCRIPTION = "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Idealna przestrzeń dla Ciebie i Twojej rodziny.";
```

### KROK 2.2: Rozszerz metadata

**PRZED (obecny kod - linie 18-25):**
```typescript
export const metadata: Metadata = {
  title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
  description:
    "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Idealna przestrzeń dla Ciebie i Twojej rodziny.",
  verification: {
    google: "uxV1BrJ4Jz9YuzYz2IKH14N5fgxsxxoD5JyU1TfjFaU",
  },
};
```

**PO (nowy kod - 60+ linii):**
```typescript
export const metadata: Metadata = {
  // ===== PODSTAWOWE =====
  title: {
    default: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
    template: "%s | Osiedle Dębowy Park", // Dla podstron w przyszłości
  },
  description: SITE_DESCRIPTION,

  // ===== KEYWORDS (pomocnicze dla SEO) =====
  keywords: [
    "domy Ostrzeszów",
    "osiedle Ostrzeszów",
    "nowe domy Ostrzeszów",
    "domy z ogrodem Ostrzeszów",
    "Dębowy Park Ostrzeszów",
    "nieruchomości Ostrzeszów",
    "domy na sprzedaż Ostrzeszów",
    "kameralne osiedle",
    "dom jednorodzinny Ostrzeszów",
    "mieszkania Ostrzeszów",
    "deweloper Ostrzeszów",
    "inwestycja mieszkaniowa Ostrzeszów",
  ],

  // ===== AUTHORSHIP =====
  authors: [{ name: "Dębowy Park" }],
  creator: "Dębowy Park",
  publisher: "Dębowy Park",

  // ===== VERIFICATION =====
  verification: {
    google: "uxV1BrJ4Jz9YuzYz2IKH14N5fgxsxxoD5JyU1TfjFaU",
    // Dodaj w przyszłości:
    // yandex: "...",
    // bing: "...",
  },

  // ===== ROBOTS =====
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ===== OPEN GRAPH (Facebook, LinkedIn, Slack, WhatsApp) =====
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`, // ← Użyje pliku z ZADANIA 1
        width: 1200,
        height: 630,
        alt: "Osiedle Dębowy Park - wizualizacja nowoczesnego domu jednorodzinnego w Ostrzeszowie",
        type: "image/jpeg",
      },
    ],
  },

  // ===== TWITTER CARDS (Twitter/X) =====
  twitter: {
    card: "summary_large_image", // Duży obrazek (1200x630)
    site: "@debowypark", // ⚠️ Zmień jeśli masz Twitter
    creator: "@debowypark",
    title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-image.jpg`],
  },

  // ===== ALTERNATE LANGUAGES (jeśli planujesz wersje językowe) =====
  // alternates: {
  //   canonical: SITE_URL,
  //   languages: {
  //     "pl-PL": `${SITE_URL}`,
  //     "en-US": `${SITE_URL}/en`,
  //   },
  // },

  // ===== ICONS (już są w public/, ale doprecyzujmy) =====
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },

  // ===== MANIFEST (PWA) =====
  manifest: "/site.webmanifest",

  // ===== CATEGORY =====
  category: "Real Estate",
};
```

## KROK 2.3: Dodaj zmienne na górze pliku

**Edytuj `app/layout.tsx` - dodaj PO importach (linia ~7):**

```typescript
import { Footer } from "@/components/layout/footer";

// ===== SEO CONFIGURATION ===== ← DODAJ TO
const SITE_URL = "https://jaworowa-ostrzeszow.pl"; // ⚠️ ZMIEŃ!
const SITE_NAME = "Osiedle Dębowy Park";
const SITE_DESCRIPTION =
  "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Idealna przestrzeń dla Ciebie i Twojej rodziny.";
// ===== END CONFIG =====

const geistSans = Geist({
  // ... reszta kodu
```

## KROK 2.4: Weryfikacja składni

```bash
# Sprawdź czy nie ma błędów TypeScript
npm run build

# Powinno przejść bez błędów
```

---

# ZADANIE 3: JSON-LD Structured Data (40 min)

## Cel:
Dodać schema.org markup dla Google Rich Results (Rich Snippets w wyszukiwarce).

## Co osiągniemy:
- Google pokaże dodatkowe informacje w wynikach wyszukiwania:
  - ⭐ Rating (jeśli dodamy opinie)
  - 📍 Adres i mapę
  - 💰 Cenę (jeśli podamy)
  - 🏠 Typ nieruchomości
  - 📐 Metraż

## Implementacja:

### KROK 3.1: Stwórz komponent StructuredData

**Nowy plik:** `components/seo/structured-data.tsx`

```typescript
// components/seo/structured-data.tsx
export function StructuredData() {
  // ===== REAL ESTATE LISTING SCHEMA =====
  const realEstateListing = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Osiedle Dębowy Park",
    "description": "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Oferujemy komfortowe domy jednorodzinne 130m² z 4 pokojami.",
    "url": "https://jaworowa-ostrzeszow.pl", // ⚠️ ZMIEŃ!
    "image": [
      "https://jaworowa-ostrzeszow.pl/og-image.jpg", // ⚠️ ZMIEŃ!
      "https://jaworowa-ostrzeszow.pl/jaworowa-wizualizacja-1.png",
      "https://jaworowa-ostrzeszow.pl/hero_final_desktop.png",
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jaworowa",
      "addressLocality": "Ostrzeszów",
      "addressRegion": "Wielkopolskie",
      "postalCode": "63-500",
      "addressCountry": "PL",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4301, // ⚠️ ZMIEŃ na prawdziwe współrzędne!
      "longitude": 17.9284,
    },
    // Średnia cena (opcjonalne, jeśli chcesz pokazywać)
    // "offers": {
    //   "@type": "Offer",
    //   "price": "650000",
    //   "priceCurrency": "PLN",
    //   "availability": "https://schema.org/InStock",
    //   "priceValidUntil": "2025-12-31",
    //   "seller": {
    //     "@type": "Organization",
    //     "name": "Dębowy Park"
    //   }
    // },
    "numberOfRooms": 4,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 130,
      "unitCode": "MTK", // Metr kwadratowy (ISO 4217)
    },
    "numberOfBathroomsTotal": 2,
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ogród prywatny",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Taras",
        "value": true,
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parter + Piętro",
        "value": true,
      },
    ],
  };

  // ===== ORGANIZATION SCHEMA =====
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Osiedle Dębowy Park",
    "url": "https://jaworowa-ostrzeszow.pl", // ⚠️ ZMIEŃ!
    "logo": "https://jaworowa-ostrzeszow.pl/logo.png", // ⚠️ Sprawdź czy istnieje!
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48-123-456-789", // ⚠️ ZMIEŃ na prawdziwy!
      "contactType": "Sales",
      "areaServed": "PL",
      "availableLanguage": ["Polish"],
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jaworowa",
      "addressLocality": "Ostrzeszów",
      "postalCode": "63-500",
      "addressCountry": "PL",
    },
    "sameAs": [
      // ⚠️ Dodaj jeśli masz:
      // "https://www.facebook.com/debowypark",
      // "https://www.instagram.com/debowypark",
    ],
  };

  // ===== BREADCRUMB (dla podstron w przyszłości) =====
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://jaworowa-ostrzeszow.pl", // ⚠️ ZMIEŃ!
      },
      // Dodasz więcej gdy będą podstrony (np. /galeria, /kontakt)
    ],
  };

  return (
    <>
      {/* Real Estate Listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateListing) }}
      />

      {/* Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />

      {/* Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
```

### KROK 3.2: Dodaj komponent do Layout

**Edytuj:** `app/layout.tsx`

**DODAJ import (linia ~6):**
```typescript
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data"; // ← DODAJ
```

**ZMIEŃ return (linie 32-50):**
```typescript
return (
  <html lang="pl" suppressHydrationWarning className="scroll-smooth">
    <head>
      <StructuredData /> {/* ← DODAJ TU */}
    </head>
    <body
      className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <MainNav />
        {children}
        <Footer />
      </ThemeProvider>
    </body>
  </html>
);
```

### KROK 3.3: Znajdź prawdziwe współrzędne

**Opcja 1: Google Maps**
1. Otwórz: https://www.google.com/maps
2. Wyszukaj: "Jaworowa, Ostrzeszów"
3. Kliknij prawym na lokalizację → "Co tu jest?"
4. Skopiuj współrzędne (np. `51.4301, 17.9284`)

**Opcja 2: Automatycznie**
```bash
# Użyj Nominatim API (OpenStreetMap)
curl "https://nominatim.openstreetmap.org/search?q=Jaworowa+Ostrzeszow+Poland&format=json&limit=1"

# Wynik: "lat": "...", "lon": "..."
```

**Wklej do `structured-data.tsx` (linia ~15):**
```typescript
"geo": {
  "@type": "GeoCoordinates",
  "latitude": 51.XXXXX, // ← TWOJE WSPÓŁRZĘDNE
  "longitude": 17.XXXXX,
},
```

---

# ZADANIE 4: Sitemap.xml + Robots.txt (20 min)

## Cel:
- **Sitemap:** Lista wszystkich URL do indeksacji przez Google
- **Robots.txt:** Instrukcje dla crawlerów (co indeksować, co pomijać)

## Next.js 15 ma wbudowane API dla obu!

### KROK 4.1: Stwórz sitemap.ts

**Nowy plik:** `app/sitemap.ts`

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jaworowa-ostrzeszow.pl"; // ⚠️ ZMIEŃ!

  // Ostatnia modyfikacja (dzisiejsza data)
  const lastModified = new Date();

  return [
    // ===== STRONA GŁÓWNA =====
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: "weekly", // Jak często się zmienia
      priority: 1.0, // Najwyższy priorytet (0.0 - 1.0)
    },

    // ===== SEKCJE (jako anchor links) =====
    // Google indeksuje je jako oddzielne "podstrony"
    {
      url: `${baseUrl}#dlaczego-warto`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#galeria`,
      lastModified: lastModified,
      changeFrequency: "weekly", // Częste zmiany (nowe zdjęcia)
      priority: 0.9,
    },
    {
      url: `${baseUrl}#domy`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9, // Ważna sekcja (plany domów)
    },
    {
      url: `${baseUrl}#kalkulator`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}#opinie`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}#kontakt`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.9, // Wysoki priorytet (conversion)
    },

    // ===== PRZYSZŁE PODSTRONY (zakomentowane) =====
    // Odkomentuj gdy dodasz te strony
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
  ];
}
```

**Wyjaśnienie parametrów:**
- **changeFrequency:** `always`, `hourly`, `daily`, `weekly`, `monthly`, `yearly`, `never`
  - Strona główna: `weekly` (często aktualizowana)
  - Galeria: `weekly` (nowe zdjęcia)
  - Plany/Kontakt: `monthly` (rzadziej się zmienia)
- **priority:** 0.0 - 1.0
  - 1.0 = najważniejsza strona (homepage)
  - 0.9 = bardzo ważna (galeria, plany, kontakt)
  - 0.5 = średni priorytet
  - 0.3 = niski (regulamin, polityka prywatności)

### KROK 4.2: Stwórz robots.ts

**Nowy plik:** `app/robots.ts`

```typescript
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://jaworowa-ostrzeszow.pl"; // ⚠️ ZMIEŃ!

  return {
    rules: [
      {
        userAgent: "*", // Wszystkie boty
        allow: "/", // Indeksuj wszystko
        disallow: [
          "/api/", // Nie indeksuj API routes
          // "/admin/", // Jeśli będziesz mieć panel admina
          // "/*.json", // Nie indeksuj plików JSON
        ],
      },
      // Specyficzne reguły dla Google Bot
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: "/api/",
      },
      // Dla botów które nie szanują robots.txt (spam crawlers)
      {
        userAgent: [
          "GPTBot", // OpenAI
          "CCBot", // Common Crawl
          "anthropic-ai", // Anthropic
        ],
        disallow: "/", // Zablokuj AI scrapers (opcjonalne)
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`, // Link do sitemap
    host: baseUrl, // Preferowana domena (jeśli masz www i non-www)
  };
}
```

**Wyjaśnienie:**
- `userAgent: "*"` = wszystkie boty (Google, Bing, DuckDuckGo, etc.)
- `allow: "/"` = indeksuj całą stronę
- `disallow: "/api/"` = NIE indeksuj API endpoints (zbędne w Google)
- `sitemap: ...` = wskazuje Google gdzie jest sitemap

### KROK 4.3: Testowanie lokalnie

```bash
# 1. Build projektu (sitemap/robots generują się przy build)
npm run build

# 2. Uruchom production server
npm run start

# 3. Otwórz w przeglądarce:
# http://localhost:3000/sitemap.xml
# http://localhost:3000/robots.txt

# Powinieneś zobaczyć wygenerowane pliki XML i TXT
```

**Oczekiwany wynik:**

**`/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jaworowa-ostrzeszow.pl</loc>
    <lastmod>2025-10-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://jaworowa-ostrzeszow.pl#galeria</loc>
    <lastmod>2025-10-09</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- ... reszta URL -->
</urlset>
```

**`/robots.txt`:**
```
User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Allow: /
Disallow: /api/

User-agent: GPTBot
Disallow: /

Sitemap: https://jaworowa-ostrzeszow.pl/sitemap.xml
Host: https://jaworowa-ostrzeszow.pl
```

---

# ZADANIE 5: Resource Hints (Preconnect) - BONUS (10 min)

## Cel:
Przyspieszyć ładowanie zewnętrznych zasobów (Google Fonts, Google Maps).

## Implementacja:

**Edytuj:** `app/layout.tsx`

**W sekcji `<head>` (po `<StructuredData />`), DODAJ:**

```typescript
<head>
  <StructuredData />

  {/* ===== RESOURCE HINTS ===== */}
  {/* Preconnect do Google Fonts (przyspiesza o ~100ms) */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossOrigin="anonymous"
  />

  {/* Preconnect do Google Maps (jeśli używasz) */}
  <link rel="preconnect" href="https://maps.googleapis.com" />
  <link rel="preconnect" href="https://maps.gstatic.com" />

  {/* DNS-prefetch jako fallback dla starszych przeglądarek */}
  <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
  <link rel="dns-prefetch" href="https://maps.googleapis.com" />

  {/* Jeśli używasz Google Analytics */}
  {/* <link rel="dns-prefetch" href="https://www.google-analytics.com" /> */}
</head>
```

**Wyjaśnienie:**
- **preconnect:** Nawiązuje połączenie DNS + TCP + TLS z wyprzedzeniem
- **dns-prefetch:** Tylko DNS lookup (lżejsze, fallback dla IE11)
- **crossOrigin="anonymous":** Wymagane dla fontów z CORS

**Impact:** FCP (First Contentful Paint) szybszy o ~50-150ms

---

# 📋 CHECKLIST IMPLEMENTACJI

## Przed wdrożeniem - PRZYGOTOWANIE

```markdown
- [ ] Ustal **DOKŁADNĄ DOMENĘ** (np. jaworowa-ostrzeszow.pl)
- [ ] Ustal **PRAWDZIWY NUMER TELEFONU** (do structured data)
- [ ] Znajdź **PRAWDZIWE WSPÓŁRZĘDNE GPS** (Google Maps)
- [ ] Przygotuj **LOGO** (jeśli masz) w wysokiej rozdzielczości
- [ ] Wybierz **NAJLEPSZE ZDJĘCIE DOMU** do OG image
```

## ZADANIE 1: Open Graph Image

```markdown
- [ ] Stwórz obrazek 1200x630px w Canva/Figma/Photoshop
- [ ] Dodaj: tytuł + podtytuł + features + logo (opcjonalnie)
- [ ] Export jako JPG (90% quality, <300KB)
- [ ] Zapisz jako: `public/og-image.jpg`
- [ ] Zweryfikuj rozmiar pliku (<500KB)
```

## ZADANIE 2: Open Graph + Twitter Cards

```markdown
- [ ] Edytuj `app/layout.tsx`
- [ ] Dodaj zmienne: SITE_URL, SITE_NAME, SITE_DESCRIPTION (po importach)
- [ ] Rozszerz `metadata` object (dodaj ~50 linii)
  - [ ] keywords
  - [ ] authors, creator, publisher
  - [ ] robots configuration
  - [ ] openGraph (Facebook/LinkedIn)
  - [ ] twitter (Twitter/X)
  - [ ] icons (doprecyzowanie)
- [ ] **ZMIEŃ wszystkie `jaworowa-ostrzeszow.pl` na PRAWDZIWĄ domenę**
- [ ] **ZMIEŃ `@debowypark` na prawdziwy Twitter handle (jeśli masz)**
- [ ] Uruchom: `npm run build` (sprawdź błędy TypeScript)
```

## ZADANIE 3: JSON-LD Structured Data

```markdown
- [ ] Stwórz folder: `components/seo/`
- [ ] Stwórz plik: `components/seo/structured-data.tsx`
- [ ] Wklej kod z 3 schematami:
  - [ ] RealEstateListing (główny)
  - [ ] Organization (firma)
  - [ ] BreadcrumbList (nawigacja)
- [ ] **ZMIEŃ współrzędne GPS** (latitude, longitude)
- [ ] **ZMIEŃ numer telefonu** w Organization
- [ ] **ZMIEŃ URL** na prawdziwą domenę (3 miejsca)
- [ ] Dodaj import do `app/layout.tsx`
- [ ] Dodaj `<StructuredData />` w sekcji `<head>`
- [ ] Uruchom: `npm run build`
```

## ZADANIE 4: Sitemap + Robots

```markdown
- [ ] Stwórz plik: `app/sitemap.ts`
- [ ] Wklej kod sitemap (7 URL: homepage + 6 sekcji)
- [ ] **ZMIEŃ `baseUrl`** na prawdziwą domenę
- [ ] Stwórz plik: `app/robots.ts`
- [ ] Wklej kod robots.txt
- [ ] **ZMIEŃ `baseUrl`** na prawdziwą domenę
- [ ] Uruchom: `npm run build && npm run start`
- [ ] Otwórz: `http://localhost:3000/sitemap.xml` (sprawdź XML)
- [ ] Otwórz: `http://localhost:3000/robots.txt` (sprawdź TXT)
```

## ZADANIE 5: Resource Hints (BONUS)

```markdown
- [ ] Edytuj `app/layout.tsx`
- [ ] Dodaj `<link rel="preconnect">` w sekcji `<head>`
- [ ] 4 linki: fonts.googleapis.com, fonts.gstatic.com, maps.googleapis.com, maps.gstatic.com
- [ ] Uruchom: `npm run build`
```

---

# 🧪 TESTOWANIE PO WDROŻENIU

## 1. Lokalne testy (PRZED deploy)

```bash
# Build projektu
npm run build

# Uruchom production mode
npm run start

# Sprawdź w przeglądarce:
# ✓ http://localhost:3000 - strona działa
# ✓ http://localhost:3000/sitemap.xml - XML się generuje
# ✓ http://localhost:3000/robots.txt - TXT się generuje

# Sprawdź DevTools:
# 1. Ctrl+Shift+I → Elements → <head>
# 2. Znajdź: <script type="application/ld+json">
# 3. Powinno być 3 takie skrypty (RealEstate, Organization, Breadcrumb)
```

## 2. Deploy na Vercel/Netlify

```bash
# Commit + push
git add .
git commit -m "feat(seo): Complete SEO essentials implementation"
git push origin main

# Poczekaj na deploy (~2-3 min)
```

## 3. Online Validation Tools (po deploy)

### Test 1: Open Graph (Facebook)
```
1. Otwórz: https://developers.facebook.com/tools/debug/
2. Wklej URL: https://TWOJA-DOMENA.pl
3. Kliknij: "Debug"
4. Sprawdź:
   ✓ Title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie"
   ✓ Description: widoczny pełny opis
   ✓ Image: og-image.jpg (1200x630)
   ✓ Type: "website"
   ✓ Locale: "pl_PL"

5. Jeśli NIE MA obrazka: kliknij "Scrape Again" (cache)
```

### Test 2: Twitter Card
```
1. Otwórz: https://cards-dev.twitter.com/validator
2. Wklej URL: https://TWOJA-DOMENA.pl
3. Sprawdź preview:
   ✓ Card type: "summary_large_image"
   ✓ Image: og-image.jpg widoczny
   ✓ Title i description poprawne
```

### Test 3: JSON-LD (Google Rich Results)
```
1. Otwórz: https://search.google.com/test/rich-results
2. Wklej URL: https://TWOJA-DOMENA.pl
3. Kliknij: "Test URL"
4. Poczekaj ~30s
5. Sprawdź wyniki:
   ✓ "Page is eligible for rich results" (zielony check)
   ✓ "RealEstateListing" wykryte
   ✓ "Organization" wykryte
   ✓ 0 błędów, 0 ostrzeżeń

6. Jeśli BŁĘDY: kliknij "View tested page" → sprawdź JSON w kodzie
```

### Test 4: Sitemap
```
1. Otwórz: https://TWOJA-DOMENA.pl/sitemap.xml
2. Sprawdź:
   ✓ XML się renderuje (nie 404)
   ✓ 7 URL w liście (homepage + 6 sekcji)
   ✓ Wszystkie URL są HTTPS (nie HTTP)
   ✓ lastmod = dzisiejsza data
```

### Test 5: Robots.txt
```
1. Otwórz: https://TWOJA-DOMENA.pl/robots.txt
2. Sprawdź:
   ✓ "User-agent: *" widoczne
   ✓ "Allow: /"
   ✓ "Disallow: /api/"
   ✓ "Sitemap: https://TWOJA-DOMENA.pl/sitemap.xml"
```

### Test 6: Schema Markup Validator
```
1. Otwórz: https://validator.schema.org/
2. Wklej URL: https://TWOJA-DOMENA.pl
3. Kliknij: "Run Test"
4. Sprawdź:
   ✓ 0 błędów
   ✓ 3 schematy wykryte:
     - RealEstateListing
     - Organization
     - BreadcrumbList
```

### Test 7: Google Search Console (po 24-48h)

```
1. Zaloguj się: https://search.google.com/search-console
2. Dodaj property (jeśli nie masz): https://TWOJA-DOMENA.pl
3. Sidebar → "Sitemaps"
4. Dodaj sitemap URL: https://TWOJA-DOMENA.pl/sitemap.xml
5. Kliknij: "Submit"
6. Status powinien być: "Success" (zielony)

7. Sidebar → "URL Inspection"
8. Wklej: https://TWOJA-DOMENA.pl
9. Kliknij: "Test live URL"
10. Sprawdź:
    ✓ "URL is on Google" (po 2-7 dniach)
    ✓ "Coverage" → "Submitted and indexed"
    ✓ "Enhancements" → "Structured data" (RealEstateListing)
```

---

# 🐛 TROUBLESHOOTING

## Problem 1: Open Graph image nie wyświetla się

**Przyczyna:** Cache Facebooka (stary obrazek lub brak)

**Rozwiązanie:**
```
1. Otwórz: https://developers.facebook.com/tools/debug/
2. Wklej URL
3. Kliknij: "Scrape Again" (2-3 razy)
4. Sprawdź "See exactly what our scraper sees" → powinien być og-image.jpg
```

**Jeśli nadal nie działa:**
- Sprawdź czy plik istnieje: `https://TWOJA-DOMENA.pl/og-image.jpg` (w przeglądarce)
- Sprawdź rozmiar: musi być <8MB (idealnie <300KB)
- Sprawdź format: JPG lub PNG (nie WEBP!)

## Problem 2: JSON-LD ma błędy w Google Rich Results Test

**Typowe błędy:**
- **"Missing field 'image'"** → Sprawdź czy URL do obrazka jest HTTPS (nie HTTP)
- **"Invalid latitude/longitude"** → Współrzędne muszą być liczby (nie string)
- **"Invalid postalCode"** → Kod pocztowy jako string: `"63-500"` (nie 63500)

**Rozwiązanie:**
```typescript
// ✅ POPRAWNIE:
"latitude": 51.4301, // liczba
"postalCode": "63-500", // string

// ❌ ŹLE:
"latitude": "51.4301", // string (błąd!)
"postalCode": 63500, // liczba (błąd!)
```

## Problem 3: Sitemap zwraca 404

**Przyczyna:** Plik `app/sitemap.ts` nie został zbudowany

**Rozwiązanie:**
```bash
# 1. Sprawdź czy plik istnieje
dir app\sitemap.ts

# 2. Jeśli istnieje - rebuild
npm run build

# 3. Uruchom production
npm run start

# 4. Test
curl http://localhost:3000/sitemap.xml
```

## Problem 4: TypeScript errors po dodaniu metadata

**Typowy błąd:**
```
Type '{ openGraph: { ... } }' is not assignable to type 'Metadata'
```

**Rozwiązanie:**
- Sprawdź czy import jest: `import type { Metadata } from "next"`
- Sprawdź czy używasz Next.js 14+ (w `package.json`)
- Uruchom: `npm install` (może brakować typów)

## Problem 5: Robots.txt blokuje Google

**Objaw:** Google Search Console pokazuje "Blocked by robots.txt"

**Rozwiązanie:**
```typescript
// app/robots.ts - upewnij się że masz:
{
  userAgent: "Googlebot",
  allow: "/", // ← MUSI BYĆ!
  disallow: "/api/",
}
```

---

# 📊 METRYKI SUKCESU (po 7-14 dniach)

## Google Search Console

```
✓ Sitemap status: "Success"
✓ Indexed pages: 1 (homepage)
✓ Coverage: "Valid"
✓ Structured data: RealEstateListing wykryte
✓ Mobile usability: 0 błędów
```

## Social Media Sharing

```
✓ Facebook: og-image wyświetla się poprawnie
✓ LinkedIn: preview działa
✓ Twitter: card type "summary_large_image"
✓ WhatsApp: preview z obrazkiem
```

## Lighthouse SEO Score

```bash
# Przed: ~80/100
# Po: ~95/100

# Sprawdź:
npm run build
npx lighthouse http://localhost:3000 --only-categories=seo --view
```

**Oczekiwane poprawki:**
- ✅ Document has a valid hreflang
- ✅ Document has a meta description
- ✅ Links have descriptive text
- ✅ Structured data is valid
- ✅ robots.txt is valid

---

# 🎯 PODSUMOWANIE - CZEGO POTRZEBUJESZ

## Przed implementacją - MUSISZ ZNAĆ:

1. **DOKŁADNA DOMENA**
   - Przykład: `jaworowa-ostrzeszow.pl`
   - Sprawdź czy to `www.` czy bez `www.`
   - Sprawdź czy to `.pl` czy `.com`

2. **NUMER TELEFONU**
   - Format: `+48-123-456-789`
   - Do structured data (Organization schema)

3. **WSPÓŁRZĘDNE GPS**
   - Znajdź na Google Maps
   - Format: `51.4301, 17.9284` (liczby, nie string)

4. **TWITTER HANDLE** (opcjonalnie)
   - Jeśli masz: `@debowypark`
   - Jeśli nie - usuń linię z twitter.site

5. **LOGO** (opcjonalnie, ale zalecane)
   - Wysokiej rozdzielczości (min 512x512px)
   - PNG z przezroczystym tłem
   - Zapisz jako: `public/logo.png`

## Pliki do stworzenia:

```
public/
  └─ og-image.jpg (1200x630px, <300KB) ← ZADANIE 1

components/
  └─ seo/
      └─ structured-data.tsx (nowy folder + plik) ← ZADANIE 3

app/
  ├─ layout.tsx (edycja - ZADANIE 2, 3, 5)
  ├─ sitemap.ts (nowy plik - ZADANIE 4)
  └─ robots.ts (nowy plik - ZADANIE 4)
```

## Edycje w istniejących plikach:

```
app/layout.tsx:
  - Dodaj import StructuredData (linia ~6)
  - Dodaj zmienne SITE_URL, SITE_NAME, SITE_DESCRIPTION (linia ~8)
  - Rozszerz metadata object (linia 18-25 → 18-90)
  - Dodaj <StructuredData /> w <head> (linia ~34)
  - Dodaj <link rel="preconnect"> w <head> (linia ~35-42)
```

## Czas implementacji:

```
ZADANIE 1: Open Graph Image          30 min
ZADANIE 2: Metadata (OG + Twitter)   30 min
ZADANIE 3: JSON-LD                   40 min
ZADANIE 4: Sitemap + Robots          20 min
ZADANIE 5: Resource Hints            10 min
──────────────────────────────────────────
TOTAL:                              ~2h 10min

+ Testing (po deploy):               30 min
──────────────────────────────────────────
GRAND TOTAL:                        ~2h 40min
```

---

# ✅ NASTĘPNE KROKI

1. **Zbierz wymagane dane** (domena, telefon, GPS)
2. **Stwórz OG image** w Canva (20 min)
3. **Implementuj kod** (kopiuj-wklej + edytuj URL/dane)
4. **Test lokalnie** (`npm run build && npm run start`)
5. **Deploy** (git push)
6. **Walidacja online** (Facebook debugger, Rich Results Test)
7. **Dodaj sitemap do Google Search Console**
8. **Czekaj 7-14 dni** (Google indeksuje)

---

**Powodzenia! 🚀**

Jeśli masz jakiekolwiek pytania podczas implementacji - pytaj!
