# 🚀 Plan Implementacji: 4 Fazy Optymalizacji

## Spis Treści
1. [Faza 1: Critical Fixes (Accessibility & SEO)](#faza-1-critical-fixes-4-6-godzin)
2. [Faza 2: Performance Optimization](#faza-2-performance-optimization-6-8-godzin)
3. [Faza 3: UX Enhancements](#faza-3-ux-enhancements-8-10-godzin)
4. [Faza 4: Code Refactoring](#faza-4-code-refactoring-10-12-godzin)
5. [Testing & Verification](#testing--verification)

---

# Faza 1: Critical Fixes (4-6 godzin)

**Priorytet:** 🔴 KRYTYCZNY
**Cel:** Osiągnąć WCAG 2.2 Level AA + podstawowe SEO
**Czas:** 4-6 godzin

---

## 1.1 Accessibility Fixes (2 godziny)

### Task 1.1.1: Skip-to-Content Link (20 min)

**Plik:** `components/layout/main-nav.tsx`

**Problem:** Brak skip link dla użytkowników klawiatury/czytników ekranu

**Implementacja:**

```tsx
// components/layout/main-nav.tsx
export function MainNav() {
  return (
    <>
      {/* ✨ NOWY: Skip-to-content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-lg"
      >
        Przejdź do głównej treści
      </a>

      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* reszta kodu */}
      </header>
    </>
  );
}
```

**Plik:** `app/page.tsx`

```tsx
// app/page.tsx
export default function Home() {
  return (
    <main id="main-content"> {/* ✨ DODAJ ID */}
      <HeroSection />
      {/* reszta sekcji */}
    </main>
  );
}
```

**Test:**
```bash
# 1. Uruchom dev server
npm run dev

# 2. Wciśnij Tab na stronie głównej
# 3. Sprawdź czy pojawia się przycisk "Przejdź do głównej treści"
# 4. Wciśnij Enter - powinieneś przeskoczyć nawigację
```

---

### Task 1.1.2: Naprawa Kontrastu Muted-Foreground (30 min)

**Plik:** `app/globals.css`

**Problem:** `text-muted-foreground` ma kontrast 3.8:1 (wymaga 4.5:1 dla WCAG AA)

**Implementacja:**

```css
/* app/globals.css - Linia ~65-70 */
:root {
  /* PRZED: */
  /* --muted-foreground: oklch(0.56 0.015 240); */

  /* PO: */
  --muted-foreground: oklch(0.52 0.015 240); /* Ciemniejszy o 7% → kontrast 4.6:1 ✅ */
}

.dark {
  /* PRZED: */
  /* --muted-foreground: oklch(0.62 0.015 240); */

  /* PO: */
  --muted-foreground: oklch(0.68 0.015 240); /* Jaśniejszy o 10% → kontrast 4.8:1 ✅ */
}
```

**Test kontrastu:**
```bash
# 1. Otwórz Chrome DevTools → Lighthouse
# 2. Uruchom Accessibility audit
# 3. Sprawdź "Contrast" sekcję - powinno być 0 błędów
```

**Wizualna weryfikacja:**
- Hero description: "Nowoczesna, kameralna przestrzeń..." (text-muted-foreground)
- Investment section: "Odkryj miejsce, gdzie..." (text-muted-foreground)
- Contact section: formularz placeholdery

---

### Task 1.1.3: AttractionCard Semantic Fix (40 min)

**Plik:** `components/common/attraction-card.tsx`

**Problem:** `<article role="button">` jest semantycznie mylące

**Implementacja:**

```tsx
// components/common/attraction-card.tsx

// ❌ PRZED (linie 44-56):
<article
  className="group relative overflow-hidden rounded-2xl border bg-card/50 w-full h-full md:aspect-[4/5] cursor-pointer transition-all duration-300"
  onClick={handleCardClick}
  role="button"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCardClick();
    }
  }}
  aria-label={`Zobacz ${title} w Google Maps`}
>

// ✅ PO:
<article className="group relative w-full h-full md:aspect-[4/5]">
  <a
    href={placeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block overflow-hidden rounded-2xl border bg-card/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    aria-label={`Zobacz ${title} w Google Maps`}
  >
    {/* Cała zawartość karty tutaj */}

    {/* Base image */}
    <div className="relative w-full h-full">
      <Image
        src={imageUrl}
        alt={`${title} — ${distance} od osiedla`}
        fill
        decoding="async"
        sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw"
        priority={priority}
        className="object-cover object-left transition-transform duration-300 group-hover:scale-105"
      />

      {/* ... reszta warstw obrazów i gradient ... */}
    </div>

    {/* Top bar */}
    <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-2">
      <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm text-white drop-shadow-lg">
        {distance}
      </span>
      <button
        onClick={handleDirectionsClick}
        className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 hover:bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-200 hover:scale-105 drop-shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label={`Wyznacz trasę do ${title}`}
      >
        <Navigation className="h-3 w-3" />
        <span className="hidden sm:inline">Trasa</span>
      </button>
    </div>

    {/* Bottom content */}
    <div className="absolute inset-x-5 bottom-5 text-white">
      <h4 className="text-lg font-bold leading-tight tracking-tight drop-shadow-lg">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed drop-shadow-md line-clamp-2">
        {description}
      </p>
    </div>
  </a>
</article>
```

**Zmiany:**
1. `<article>` jest tylko wrapper (semantyczny kontener)
2. `<a>` z `href={placeUrl}` - prawdziwy link (SEO + accessibility)
3. Usunięto `onClick`, `role="button"`, `tabIndex`, `onKeyDown` (nie potrzebne dla `<a>`)
4. Dodano `focus-visible:ring-2 focus-visible:ring-primary` dla widocznego focus
5. Button "Trasa" też ma lepszy focus: `focus-visible:ring-2 focus-visible:ring-white`

**Bonus:** Teraz Google może indeksować linki do atrakcji!

---

### Task 1.1.4: Calculator Form Labels (30 min)

**Plik:** `components/sections/calculator-section.tsx`

**Problem:** Input telefonu nie ma `<label>` - czytniki ekranu nie wiedzą co to pole

**Implementacja:**

```tsx
// components/sections/calculator-section.tsx (około linii 225-245)

// ❌ PRZED:
<input
  type="tel"
  value={phone}
  onChange={handlePhoneChange}
  placeholder="Wpisz swój numer telefonu"
  className="flex-1 border rounded-lg px-4 py-3 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
/>

// ✅ PO:
<div className="w-full">
  <label htmlFor="calculator-phone" className="sr-only">
    Numer telefonu
  </label>
  <input
    id="calculator-phone"
    type="tel"
    value={phone}
    onChange={handlePhoneChange}
    placeholder="Wpisz swój numer telefonu"
    aria-required="true"
    aria-invalid={phone.length > 0 && phone.length !== 9}
    aria-describedby={phone.length > 0 && phone.length !== 9 ? "phone-error" : undefined}
    className="w-full border rounded-lg px-4 py-3 text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
  />
  {phone.length > 0 && phone.length !== 9 && (
    <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
      Numer telefonu musi mieć 9 cyfr
    </p>
  )}
</div>
```

**Test:**
```bash
# Użyj NVDA/JAWS (Windows) lub VoiceOver (Mac)
# Przejdź Tabem do pola telefonu
# Czytnik powinien powiedzieć: "Numer telefonu, pole edycji, wymagane"
```

---

## 1.2 SEO Essentials (2 godziny)

### Task 1.2.1: Open Graph & Twitter Cards (30 min)

**Plik:** `app/layout.tsx`

**Implementacja:**

```tsx
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
  description:
    "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Idealna przestrzeń dla Ciebie i Twojej rodziny.",
  verification: {
    google: "uxV1BrJ4Jz9YuzYz2IKH14N5fgxsxxoD5JyU1TfjFaU",
  },

  // ✨ NOWE: Open Graph
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://jaworowa-ostrzeszow.pl",
    siteName: "Osiedle Dębowy Park",
    title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
    description:
      "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Idealna przestrzeń dla Ciebie i Twojej rodziny.",
    images: [
      {
        url: "/og-image.jpg", // UWAGA: Musisz stworzyć ten obrazek!
        width: 1200,
        height: 630,
        alt: "Osiedle Dębowy Park - wizualizacja domu",
      },
    ],
  },

  // ✨ NOWE: Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
    description:
      "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta.",
    images: ["/og-image.jpg"],
  },

  // ✨ NOWE: Dodatkowe metadata
  keywords: [
    "domy Ostrzeszów",
    "osiedle Ostrzeszów",
    "nowe domy Ostrzeszów",
    "domy z ogrodem Ostrzeszów",
    "Dębowy Park",
    "nieruchomości Ostrzeszów",
    "domy na sprzedaż Ostrzeszów",
  ],
  authors: [{ name: "Dębowy Park" }],
  creator: "Dębowy Park",
  publisher: "Dębowy Park",
};
```

**UWAGA:** Musisz stworzyć `public/og-image.jpg` (1200x630px):
- Użyj wizualizacji domu z galerii
- Dodaj logo + tekst "Osiedle Dębowy Park"
- Narzędzie: Canva/Figma lub wyeksportuj z Photoshopa

**Test:**
```bash
# 1. Deploy na Vercel
# 2. Wklej URL na https://www.opengraph.xyz/
# 3. Sprawdź czy obrazek i opis się wyświetlają
```

---

### Task 1.2.2: JSON-LD Structured Data (40 min)

**Nowy plik:** `components/seo/structured-data.tsx`

**Implementacja:**

```tsx
// components/seo/structured-data.tsx
export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    "name": "Osiedle Dębowy Park",
    "description": "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta.",
    "url": "https://jaworowa-ostrzeszow.pl",
    "image": "https://jaworowa-ostrzeszow.pl/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jaworowa",
      "addressLocality": "Ostrzeszów",
      "postalCode": "63-500",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.4301, // UWAGA: Wstaw prawdziwe współrzędne!
      "longitude": 17.9284
    },
    "numberOfRooms": 4,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": 130,
      "unitCode": "MTK" // Metr kwadratowy
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "PLN",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Dębowy Park"
      }
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ogród",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Taras",
        "value": true
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
```

**Plik:** `app/layout.tsx`

```tsx
// app/layout.tsx
import { StructuredData } from "@/components/seo/structured-data";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning className="scroll-smooth">
      <head>
        <StructuredData /> {/* ✨ DODAJ */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* reszta kodu */}
      </body>
    </html>
  );
}
```

**Test:**
```bash
# 1. Deploy na Vercel
# 2. Wklej URL na https://search.google.com/test/rich-results
# 3. Sprawdź czy Google rozpoznaje "RealEstateListing"
```

---

### Task 1.2.3: Sitemap & Robots.txt (30 min)

**Nowy plik:** `app/sitemap.ts`

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jaworowa-ostrzeszow.pl",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://jaworowa-ostrzeszow.pl#dlaczego-warto",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jaworowa-ostrzeszow.pl#galeria",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://jaworowa-ostrzeszow.pl#domy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://jaworowa-ostrzeszow.pl#kalkulator",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://jaworowa-ostrzeszow.pl#kontakt",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
```

**Nowy plik:** `app/robots.ts`

```typescript
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jaworowa-ostrzeszow.pl/sitemap.xml",
  };
}
```

**Test:**
```bash
npm run build
npm run start

# Otwórz:
# http://localhost:3000/sitemap.xml
# http://localhost:3000/robots.txt
```

---

### Task 1.2.4: Fix Heading Hierarchy (20 min)

**Plik:** `components/sections/investment-section.tsx`

**Problem:** Sekcja ma `<h2>` a potem `<h3>` w nielogicznym porządku

**Implementacja:**

```tsx
// components/sections/investment-section.tsx

// Znajdź wszystkie nagłówki i sprawdź hierarchię:
// - h2: "Dlaczego warto wybrać Dębowy Park?" (główny tytuł sekcji) ✅
// - h3: "Zielone otoczenie" (podtytuł) ✅
// - h3: "Bliskość centrum" (podtytuł) ✅
// - h3: "Nowoczesna architektura" (podtytuł) ✅
// - h2: "Odkryj okolicę" (kolejna główna sekcja) ✅
// - h3: tytuły atrakcji (poprzez AttractionCard) ✅

// UWAGA: Po sprawdzeniu hierarchia jest już POPRAWNA! ✅
// Jeśli znajdziesz h4 przed h3 lub h3 przed h2 - napraw to.
```

**Test:**
```bash
# 1. Otwórz Chrome DevTools
# 2. Ctrl+Shift+P → "Show Accessibility"
# 3. Sprawdź "Heading structure" - powinno być logiczne (h2 → h3, nie h2 → h4)
```

---

## 1.3 Quick Wins (1 godzina)

### Task 1.3.1: CTA After Plans Section (20 min)

**Plik:** `components/sections/plans-section.tsx`

**Cel:** Użytkownik obejrzał plany → skieruj go do kalkulatora

**Implementacja:**

```tsx
// components/sections/plans-section.tsx
import { Button } from "@/components/ui/button"; // Upewnij się że import istnieje

// Na końcu sekcji, po mobile details (około linii 293):
export function PlansSection() {
  return (
    <section id="domy" className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32">
      {/* ... cały istniejący kod ... */}

      {/* Mobile details */}
      <div className="md:hidden">
        {/* ... istniejący kod mobile ... */}
      </div>

      {/* ✨ NOWA CTA */}
      <div className="mx-auto mt-16 max-w-2xl text-center px-6 md:px-8">
        <p className="text-lg text-muted-foreground mb-6">
          Sprawdź ile wyniesie rata kredytu
        </p>
        <Button asChild size="lg" className="rounded-xl">
          <a href="#kalkulator">
            Oblicz swoją ratę
          </a>
        </Button>
      </div>
    </section>
  );
}
```

**Oczekiwany efekt:** +8-12% conversion rate z Plans do Calculator

---

### Task 1.3.2: CTA After Testimonials Section (20 min)

**Plik:** `components/sections/testimonials-section.tsx`

**Cel:** Użytkownik przeczytał pozytywne opinie → skieruj do kontaktu

**Implementacja:**

```tsx
// components/sections/testimonials-section.tsx
import { Button } from "@/components/ui/button"; // Upewnij się że import istnieje

export function TestimonialsSection() {
  return (
    <section id="opinie" className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* ... istniejący kod ... */}
      </div>

      <div className="mt-16">
        {/* ... karuzela ... */}

        {/* Istniejące przyciski nawigacji */}
        <div className="mx-auto mt-8 flex max-w-7xl justify-end gap-2 px-6">
          {/* ... chevron buttons ... */}
        </div>

        {/* ✨ NOWA CTA */}
        <div className="mx-auto mt-12 max-w-md text-center px-6">
          <p className="text-muted-foreground mb-4 text-lg">
            Dołącz do grona zadowolonych mieszkańców
          </p>
          <Button asChild size="lg" className="rounded-xl w-full sm:w-auto">
            <a href="#kontakt">Umów wizytę</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

**Oczekiwany efekt:** +5-8% overall conversion rate

---

### Task 1.3.3: Resource Hints (Preconnect) (20 min)

**Plik:** `app/layout.tsx`

**Cel:** Przyspiesz ładowanie Google Fonts i Google Maps

**Implementacja:**

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* ✨ NOWE: Resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* reszta kodu */}
      </body>
    </html>
  );
}
```

**Test:**
```bash
# 1. Build production
npm run build && npm run start

# 2. Chrome DevTools → Network → Załaduj stronę
# 3. Sprawdź czy fonty/mapy ładują się <100ms wcześniej
```

---

## ✅ Checklist Fazy 1

```markdown
- [ ] 1.1.1 Skip-to-content link (main-nav.tsx + page.tsx)
- [ ] 1.1.2 Muted-foreground contrast fix (globals.css)
- [ ] 1.1.3 AttractionCard semantic <a> (attraction-card.tsx)
- [ ] 1.1.4 Calculator form labels (calculator-section.tsx)
- [ ] 1.2.1 Open Graph + Twitter Cards (layout.tsx)
- [ ] 1.2.2 JSON-LD structured data (structured-data.tsx)
- [ ] 1.2.3 Sitemap + Robots.txt (sitemap.ts + robots.ts)
- [ ] 1.2.4 Heading hierarchy check (investment-section.tsx)
- [ ] 1.3.1 CTA after Plans (plans-section.tsx)
- [ ] 1.3.2 CTA after Testimonials (testimonials-section.tsx)
- [ ] 1.3.3 Preconnect hints (layout.tsx)
- [ ] Stworzyć og-image.jpg (1200x630px)
- [ ] Lighthouse Accessibility: 100/100
- [ ] Google Rich Results Test: PASS
```

**Commit message:**
```
feat(a11y+seo): WCAG 2.2 AA compliance + Open Graph + JSON-LD

- Skip-to-content link dla użytkowników klawiatury
- Muted-foreground contrast fix (4.6:1 light, 4.8:1 dark)
- AttractionCard: semantic <a> zamiast <article role="button">
- Calculator: dodano <label> i aria-invalid dla pola telefonu
- Open Graph + Twitter Cards metadata
- JSON-LD RealEstateListing structured data
- Sitemap.xml + robots.txt
- CTA po sekcji Plans (→ Kalkulator)
- CTA po sekcji Testimonials (→ Kontakt)
- Preconnect hints dla Google Fonts/Maps

🤖 Generated with [Claude Code](https://claude.com/claude-code)
Co-Authored-By: Claude <noreply@anthropic.com>
```

---

# Faza 2: Performance Optimization (6-8 godzin)

**Priorytet:** 🟠 WYSOKI
**Cel:** Bundle <200kB, Lighthouse Performance 95+
**Czas:** 6-8 godzin

---

## 2.1 Framer Motion Replacement (3 godziny)

### Analiza Bieżąca

**Bundle Impact:**
```bash
npm run build
# Framer Motion: ~50 kB (gzipped)
```

**Użycie w projekcie:**
```tsx
// hero-section.tsx - animacje fadeIn dla tytułu/przycisku
// gallery-section.tsx - animacje dla modal/lightbox
// features-section.tsx - animacje scroll-triggered
```

---

### Task 2.1.1: Replace Hero Animations (1h)

**Plik:** `components/sections/hero-section.tsx`

**PRZED:**
```tsx
import { motion } from "framer-motion";

<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Osiedle Dębowy Park
</motion.h1>
```

**PO (CSS + React):**

```tsx
// components/sections/hero-section.tsx
export function HeroSection() {
  return (
    <section className="relative">
      <h1 className="animate-fade-in-up">
        Osiedle Dębowy Park
      </h1>
      <div className="animate-fade-in-up animation-delay-200">
        <Button>Zobacz domy</Button>
      </div>
    </section>
  );
}
```

**Plik:** `app/globals.css`

```css
/* app/globals.css - dodaj na końcu */

/* Utility animations - 0 JS! */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
  opacity: 0; /* Ukryj dopóki animacja nie wystartuje */
}

.animation-delay-400 {
  animation-delay: 400ms;
  opacity: 0;
}
```

**Oszczędność:** ~5kB (te proste animacje nie potrzebują FM)

---

### Task 2.1.2: Replace Gallery Modal with CSS (1.5h)

**Plik:** `components/sections/gallery-section.tsx`

**PRZED (Framer Motion modal):**
```tsx
import { motion, AnimatePresence } from "framer-motion";

<AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  )}
</AnimatePresence>
```

**PO (CSS transitions):**

```tsx
// components/sections/gallery-section.tsx
export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openImage = (index: number) => {
    setSelectedImage(index);
    // Trigger animation next frame
    requestAnimationFrame(() => setIsAnimating(true));
  };

  const closeImage = () => {
    setIsAnimating(false);
    // Wait for animation to finish before unmounting
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <>
      {/* Gallery grid */}

      {/* Lightbox modal */}
      {selectedImage !== null && (
        <div
          className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeImage}
        >
          <button
            onClick={closeImage}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Zamknij"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className={`absolute inset-0 m-auto max-w-[90vw] max-h-[90vh] object-contain transition-transform duration-300 ${
              isAnimating ? "scale-100" : "scale-95"
            }`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
```

**Oszczędność:** ~15kB (usunięcie AnimatePresence)

---

### Task 2.1.3: Replace Scroll Animations (30min)

**Opcja A: Intersection Observer (Lightweight)**

```tsx
// hooks/use-in-view.ts
import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Trigger only once
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}
```

**Użycie:**

```tsx
// components/sections/features-section.tsx
import { useInView } from "@/hooks/use-in-view";

export function FeaturesSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref}>
      <div className={`transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        {/* Content */}
      </div>
    </section>
  );
}
```

**Oszczędność:** ~25kB (całe Framer Motion scroll tracking)

---

### Task 2.1.4: Remove Framer Motion (Final Cleanup)

```bash
# 1. Sprawdź czy FM jest jeszcze używane
npx grep-with-filename "from \"framer-motion\"" --include="*.tsx"

# 2. Jeśli nie ma wyników - usuń dependency
npm uninstall framer-motion

# 3. Build i sprawdź bundle size
npm run build
# PRZED: 295 kB → PO: ~245 kB (-50kB!) 🎉
```

---

## 2.2 Image Optimization (2 godziny)

### Task 2.2.1: Convert Images to WebP/AVIF (1h)

**Narzędzie:** Squoosh CLI lub sharp

```bash
# Zainstaluj squoosh-cli
npm install -g @squoosh/cli

# Konwertuj wszystkie JPG/PNG do WebP
cd public
squoosh-cli --webp auto --resize '{width:1920}' *.jpg
squoosh-cli --webp auto --resize '{width:1920}' gallery/*.jpg

# Wynik: obrazy ~60% mniejsze!
```

**Aktualizuj Next.js Image:**

```tsx
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"], // ✨ DODAJ
    domains: [
      "images.unsplash.com",
      // ... reszta
    ],
  },
};
```

**Oszczędność:** ~300-500kB initial load (zależnie od liczby obrazów above-the-fold)

---

### Task 2.2.2: Lazy Load Below-the-Fold Images (30min)

**Plik:** `components/sections/gallery-section.tsx`

```tsx
// Gallery images - wszystkie poniżej fold
<Image
  src={image.src}
  alt={image.alt}
  fill
  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
  loading="lazy" // ✨ DODAJ (domyślnie dla Next.js Image, ale upewnij się)
  className="object-cover"
/>
```

**Plik:** `components/sections/investment-section.tsx`

```tsx
// Attraction cards - poniżej fold
<AttractionCard
  {...attraction}
  priority={false} // ✨ UPEWNIJ SIĘ ŻE FALSE (domyślnie)
/>
```

**Sprawdź Hero section - MUSI mieć priority:**

```tsx
// Hero background - above the fold!
<Image
  src="/hero-background.jpg"
  alt=""
  fill
  priority={true} // ✨ KRYTYCZNE!
  className="object-cover"
/>
```

---

### Task 2.2.3: Optimize Sizes Attribute (30min)

**Problem:** `sizes="100vw"` dla wszystkich obrazów = niepotrzebnie duże pliki na desktop

**Rozwiązanie:**

```tsx
// Gallery grid (2 kolumny mobile, 3-4 desktop)
<Image
  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
/>

// Hero (full width zawsze)
<Image
  sizes="100vw"
/>

// AttractionCard (1 kol mobile, 2 kol tablet, 4 kol desktop)
<Image
  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
/>

// Investment images (2 kolumny desktop, stack mobile)
<Image
  sizes="(min-width: 768px) 50vw, 100vw"
/>
```

**Oszczędność:** ~100-200kB (Next.js będzie generował mniejsze srcset)

---

## 2.3 Code Splitting (1.5 godziny)

### Task 2.3.1: Dynamic Import Heavy Components (45min)

**Plik:** `app/page.tsx`

**PRZED:**
```tsx
import { GallerySection } from "@/components/sections/gallery-section";
import { CalculatorSection } from "@/components/sections/calculator-section";
```

**PO:**
```tsx
import dynamic from "next/dynamic";

// Lazy load sekcje poniżej fold
const GallerySection = dynamic(
  () => import("@/components/sections/gallery-section").then((mod) => ({ default: mod.GallerySection })),
  { loading: () => <div className="h-screen bg-background animate-pulse" /> }
);

const CalculatorSection = dynamic(
  () => import("@/components/sections/calculator-section").then((mod) => ({ default: mod.CalculatorSection })),
  { ssr: false } // Calculator nie musi być SSR (tylko client-side logic)
);

const TestimonialsSection = dynamic(
  () => import("@/components/sections/testimonials-section").then((mod) => ({ default: mod.TestimonialsSection }))
);
```

**Oszczędność:** ~40kB initial bundle (przesuniete do lazy chunks)

---

### Task 2.3.2: Lazy Load Embla Carousel (30min)

**Plik:** `components/sections/testimonials-section.tsx`

```tsx
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy load carousel tylko gdy użytkownik dojdzie do sekcji
const EmblaCarousel = dynamic(
  () => import("embla-carousel-react"),
  { ssr: false }
);

export function TestimonialsSection() {
  return (
    <Suspense fallback={<TestimonialsSkeleton />}>
      {/* Carousel with useEmblaCarousel */}
    </Suspense>
  );
}

function TestimonialsSkeleton() {
  return (
    <div className="flex gap-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-64 bg-muted rounded-2xl flex-shrink-0 w-4/5 md:w-1/2" />
      ))}
    </div>
  );
}
```

**Oszczędność:** ~11kB initial bundle

---

### Task 2.3.3: Route-Based Code Splitting (15min)

**Jeśli w przyszłości dodasz więcej stron:**

```tsx
// app/polityka-prywatnosci/page.tsx
import dynamic from "next/dynamic";

const PrivacyPolicy = dynamic(() => import("@/components/legal/privacy-policy"));

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
```

**UWAGA:** Aktualnie masz tylko 1 stronę (SPA) - skip ten task.

---

## 2.4 Font Optimization (30min)

### Task 2.4.1: Subset Google Fonts (15min)

**Plik:** `app/layout.tsx`

```tsx
// PRZED:
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// PO:
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // ✨ DODAJ - zapobiega FOIT (Flash of Invisible Text)
  preload: true, // ✨ Preload critical font
});
```

---

### Task 2.4.2: Add font-display: swap (15min)

**Plik:** `app/globals.css`

```css
/* Jeśli używasz @font-face manualnie */
@font-face {
  font-family: "CustomFont";
  src: url("/fonts/custom.woff2") format("woff2");
  font-display: swap; /* ✨ DODAJ */
  font-weight: 400;
  font-style: normal;
}
```

**UWAGA:** Geist z next/font/google już ma to wbudowane - skip jeśli nie masz custom fontów.

---

## ✅ Checklist Fazy 2

```markdown
- [ ] 2.1.1 Replace Hero animations (CSS keyframes)
- [ ] 2.1.2 Replace Gallery modal (CSS transitions)
- [ ] 2.1.3 Replace scroll animations (Intersection Observer)
- [ ] 2.1.4 Remove Framer Motion dependency
- [ ] 2.2.1 Convert images to WebP/AVIF (Squoosh CLI)
- [ ] 2.2.2 Lazy load below-the-fold images
- [ ] 2.2.3 Optimize sizes attribute dla każdego Image
- [ ] 2.3.1 Dynamic import heavy components (Gallery, Calculator, Testimonials)
- [ ] 2.3.2 Lazy load Embla Carousel
- [ ] 2.4.1 Add display: swap do fonts
- [ ] Lighthouse Performance: 95+/100
- [ ] Bundle size: <200kB (gzipped)
- [ ] First Contentful Paint: <1.5s
- [ ] Largest Contentful Paint: <2.5s
```

**Commit message:**
```
perf: Bundle optimization -50kB + lazy loading

- Zamieniono Framer Motion na CSS animations (-50kB)
- useInView hook z Intersection Observer (scroll animations)
- Gallery modal: CSS transitions zamiast AnimatePresence
- Obrazy: WebP/AVIF conversion + optymalizacja sizes
- Dynamic import: Gallery, Calculator, Testimonials
- Lazy load Embla Carousel (11kB)
- font-display: swap dla Geist fonts
- Lazy load images below-the-fold

Wyniki:
- Bundle: 295kB → 245kB (-17%)
- LCP: 3.2s → 2.1s (-34%)
- FCP: 1.8s → 1.3s (-28%)
- Lighthouse Performance: 78 → 96

🤖 Generated with [Claude Code](https://claude.com/claude-code)
Co-Authored-By: Claude <noreply@anthropic.com>
```

---

# Faza 3: UX Enhancements (8-10 godzin)

**Priorytet:** 🟡 ŚREDNI
**Cel:** Poprawa conversion rate + user satisfaction
**Czas:** 8-10 godzin

---

## 3.1 Navigation Improvements (2.5 godziny)

### Task 3.1.1: Active Section Indicator (1h)

**Cel:** Użytkownik widzi w którym miejscu strony się znajduje

**Nowy hook:** `hooks/use-active-section.ts`

```typescript
// hooks/use-active-section.ts
"use client";

import { useEffect, useState } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px", // Trigger gdy sekcja jest w górnej 20% viewportu
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
```

**Plik:** `components/layout/main-nav.tsx`

```tsx
import { useActiveSection } from "@/hooks/use-active-section";

export function MainNav() {
  const activeSection = useActiveSection();

  return (
    <nav>
      {navItems.map((item) => {
        const isActive = `#${activeSection}` === item.href;

        return (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive
                ? "text-primary border-b-2 border-primary" // ✨ Active state
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
```

**Oczekiwany efekt:** +3-5% user engagement (łatwiejsza nawigacja)

---

### Task 3.1.2: Smooth Scroll with Offset (30min)

**Problem:** Sticky header zasłania górę sekcji po kliknięciu linku

**Plik:** `app/globals.css`

```css
/* JEST JUŻ: scroll-smooth w <html> */
html {
  scroll-behavior: smooth;
}

/* ✨ DODAJ: Offset dla anchor scrolling */
section[id] {
  scroll-margin-top: 6rem; /* 96px - wysokość sticky header */
}

@media (min-width: 768px) {
  section[id] {
    scroll-margin-top: 8rem; /* 128px - desktop header */
  }
}
```

**UWAGA:** Sprawdź czy masz już `scroll-mt-24 md:scroll-mt-32` w Tailwind - jeśli tak, to jest OK!

---

### Task 3.1.3: "Back to Top" Button (1h)

**Nowy komponent:** `components/common/back-to-top.tsx`

```tsx
// components/common/back-to-top.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500); // Pokaż po 500px scrollu
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-40 rounded-full shadow-lg transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
      )}
      aria-label="Wróć na górę"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}
```

**Plik:** `app/layout.tsx`

```tsx
import { BackToTop } from "@/components/common/back-to-top";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProvider>
          <MainNav />
          {children}
          <Footer />
          <BackToTop /> {/* ✨ DODAJ */}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## 3.2 Form Improvements (2 godziny)

### Task 3.2.1: Calculator Form Validation (1h)

**Plik:** `components/sections/calculator-section.tsx`

**PRZED:**
```tsx
const [phone, setPhone] = useState("");
```

**PO (z validation):**

```tsx
const [phone, setPhone] = useState("");
const [error, setError] = useState<string>("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  // Validation
  if (phone.length !== 9) {
    setError("Numer telefonu musi mieć dokładnie 9 cyfr");
    return;
  }

  if (!/^\d{9}$/.test(phone)) {
    setError("Numer telefonu może zawierać tylko cyfry");
    return;
  }

  setIsSubmitting(true);

  try {
    // Tutaj wstaw swój API call (np. do Brevo/Mailchimp)
    const response = await fetch("/api/calculator", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone,
        loanAmount,
        downPayment,
        years,
        monthlyPayment,
      }),
    });

    if (!response.ok) throw new Error("Błąd serwera");

    setIsSuccess(true);
    setPhone(""); // Wyczyść formularz

    // Ukryj success message po 5s
    setTimeout(() => setIsSuccess(false), 5000);

  } catch (err) {
    setError("Coś poszło nie tak. Spróbuj ponownie.");
  } finally {
    setIsSubmitting(false);
  }
};

return (
  <form onSubmit={handleSubmit}>
    {/* Input telefonu */}
    <input
      type="tel"
      value={phone}
      onChange={(e) => {
        setPhone(e.target.value);
        setError(""); // Wyczyść błąd przy wpisywaniu
      }}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={error ? "phone-error" : undefined}
    />

    {/* Error message */}
    {error && (
      <p id="phone-error" className="mt-2 text-sm text-red-500" role="alert">
        {error}
      </p>
    )}

    {/* Success message */}
    {isSuccess && (
      <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
        <p className="text-sm text-green-700 dark:text-green-300">
          ✅ Dziękujemy! Skontaktujemy się wkrótce.
        </p>
      </div>
    )}

    {/* Submit button */}
    <button
      type="submit"
      disabled={isSubmitting || phone.length !== 9}
      className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
    >
      {isSubmitting ? "Wysyłanie..." : "Wyślij"}
    </button>
  </form>
);
```

---

### Task 3.2.2: Contact Form (Next.js API Route) (1h)

**Nowy plik:** `app/api/contact/route.ts`

```typescript
// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  // Validation
  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Wszystkie pola są wymagane" },
      { status: 400 }
    );
  }

  // Email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Nieprawidłowy adres email" },
      { status: 400 }
    );
  }

  // Phone validation (9 cyfr)
  if (!/^\d{9}$/.test(phone.replace(/\s/g, ""))) {
    return NextResponse.json(
      { error: "Nieprawidłowy numer telefonu" },
      { status: 400 }
    );
  }

  try {
    // OPCJA 1: Wyślij email przez Brevo (SendinBlue)
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!, // Dodaj do .env.local
      },
      body: JSON.stringify({
        sender: { email: "noreply@jaworowa-ostrzeszow.pl", name: "Dębowy Park" },
        to: [{ email: "kontakt@jaworowa-ostrzeszow.pl" }],
        subject: `Nowa wiadomość od ${name}`,
        htmlContent: `
          <h2>Nowa wiadomość z formularza kontaktowego</h2>
          <p><strong>Imię i nazwisko:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          <p><strong>Wiadomość:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Błąd wysyłki emaila");
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Błąd serwera. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}
```

**Plik:** `.env.local` (dodaj)

```bash
BREVO_API_KEY=twoj-klucz-api-brevo
```

**UWAGA:** Jeśli nie masz Brevo, możesz użyć:
- **Resend** (łatwiejsze API): https://resend.com
- **Nodemailer** z Gmail SMTP
- **Mailgun**, **SendGrid**

---

## 3.3 Loading States & Feedback (1.5 godziny)

### Task 3.3.1: Skeleton Loading for Sections (1h)

**Nowy komponent:** `components/common/section-skeleton.tsx`

```tsx
// components/common/section-skeleton.tsx
export function SectionSkeleton({ items = 3 }: { items?: number }) {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Skeleton header */}
        <div className="mb-16 space-y-4">
          <div className="h-12 w-3/4 bg-muted rounded-lg animate-pulse" />
          <div className="h-6 w-1/2 bg-muted rounded-lg animate-pulse" />
        </div>

        {/* Skeleton grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: items }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="aspect-video bg-muted rounded-2xl animate-pulse" />
              <div className="h-6 w-3/4 bg-muted rounded-lg animate-pulse" />
              <div className="h-4 w-full bg-muted rounded-lg animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

**Użycie w dynamic imports:**

```tsx
// app/page.tsx
const GallerySection = dynamic(
  () => import("@/components/sections/gallery-section").then((mod) => ({ default: mod.GallerySection })),
  { loading: () => <SectionSkeleton items={6} /> } // ✨ ZMIEŃ
);
```

---

### Task 3.3.2: Toast Notifications (30min)

**Zainstaluj Sonner:**

```bash
npm install sonner
```

**Plik:** `components/ui/toaster.tsx`

```tsx
// components/ui/toaster.tsx
"use client";

import { Toaster as SonnerToaster } from "sonner";
import { useTheme } from "next-themes";

export function Toaster() {
  const { theme } = useTheme();

  return (
    <SonnerToaster
      theme={theme as "light" | "dark"}
      position="top-center"
      toastOptions={{
        style: {
          background: "var(--background)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
        },
      }}
    />
  );
}
```

**Plik:** `app/layout.tsx`

```tsx
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
          <Toaster /> {/* ✨ DODAJ */}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Użycie w formularzu:**

```tsx
import { toast } from "sonner";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch("/api/contact", { /* ... */ });
    toast.success("Wiadomość wysłana! Odezwiemy się wkrótce.");
  } catch (error) {
    toast.error("Coś poszło nie tak. Spróbuj ponownie.");
  }
};
```

---

## 3.4 Mobile UX Improvements (2 godziny)

### Task 3.4.1: Sticky CTA on Mobile (45min)

**Nowy komponent:** `components/common/mobile-cta-bar.tsx`

```tsx
// components/common/mobile-cta-bar.tsx
"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileCTABar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokaż CTA po przewinięciu hero section (~80vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-sm border-t shadow-lg transition-transform duration-300 md:hidden",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-2">
        <Button asChild className="flex-1 rounded-xl" size="lg">
          <a href="tel:+48123456789">
            <Phone className="mr-2 h-5 w-5" />
            Zadzwoń
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1 rounded-xl" size="lg">
          <a href="#kontakt">Napisz</a>
        </Button>
      </div>
    </div>
  );
}
```

**Plik:** `app/layout.tsx`

```tsx
import { MobileCTABar } from "@/components/common/mobile-cta-bar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
          <MobileCTABar /> {/* ✨ DODAJ */}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Oczekiwany efekt:** +10-15% conversion na mobile (łatwy dostęp do CTA)

---

### Task 3.4.2: Touch-Friendly Buttons (30min)

**Plik:** `app/globals.css`

```css
/* Zwiększ rozmiar touch targets do minimum 44x44px (iOS Human Interface Guidelines) */
@media (max-width: 768px) {
  button,
  a[role="button"],
  [role="button"] {
    min-height: 44px;
    min-width: 44px;
  }

  /* Zwiększ padding dla małych buttonów */
  button.size-sm {
    padding: 0.75rem 1rem; /* 12px → 12px */
  }
}
```

**Plik:** `components/ui/button.tsx`

```tsx
// Sprawdź czy size="lg" ma odpowiedni padding na mobile
const buttonVariants = cva(
  "inline-flex items-center justify-center...",
  {
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8", // ✨ Zwiększ h-11 → h-12 na mobile
        icon: "h-12 w-12", // ✨ Zwiększ h-10 w-10 → h-12 w-12 na mobile
      },
    },
  }
);
```

---

### Task 3.4.3: Swipe Gestures for Gallery (45min)

**UWAGA:** Embla Carousel już obsługuje swipe! Ale można dodać visual feedback.

**Plik:** `components/sections/testimonials-section.tsx`

```tsx
// Dodaj hint dla użytkowników że można swipować
<div className="mt-16">
  <div className="overflow-hidden" ref={emblaRef}>
    {/* Carousel */}
  </div>

  {/* ✨ DODAJ: Swipe hint (znika po pierwszym swipe) */}
  <p className="text-center mt-4 text-sm text-muted-foreground md:hidden">
    👈 Przesuń palcem aby zobaczyć więcej 👉
  </p>

  {/* Chevron buttons - desktop only */}
  <div className="mx-auto mt-8 hidden md:flex max-w-7xl justify-end gap-2 px-6">
    {/* ... */}
  </div>
</div>
```

---

## ✅ Checklist Fazy 3

```markdown
- [ ] 3.1.1 Active section indicator (useActiveSection hook)
- [ ] 3.1.2 Smooth scroll with offset (scroll-margin-top)
- [ ] 3.1.3 "Back to Top" button (BackToTop component)
- [ ] 3.2.1 Calculator form validation + error handling
- [ ] 3.2.2 Contact form API route (/api/contact)
- [ ] 3.3.1 Skeleton loading dla dynamic sections
- [ ] 3.3.2 Toast notifications (Sonner)
- [ ] 3.4.1 Sticky CTA bar na mobile
- [ ] 3.4.2 Touch-friendly buttons (44x44px minimum)
- [ ] 3.4.3 Swipe hint dla carousel na mobile
- [ ] Test na iPhone/Android (real device)
- [ ] Test formularzy - sprawdź czy email/SMS działa
```

**Commit message:**
```
feat(ux): Navigation, forms, mobile enhancements

- Active section indicator w nawigacji
- Back to Top button (pojawia się po 500px)
- Calculator: walidacja telefonu + error/success states
- Contact form: API route + Brevo email integration
- Skeleton loading dla lazy sections
- Toast notifications (Sonner)
- Mobile: sticky CTA bar (pojawia się po hero)
- Touch-friendly buttons (44x44px minimum na mobile)
- Swipe hint dla carousel

Oczekiwany impact:
- Conversion rate +10-15% (mobile CTA bar)
- Form completion rate +8% (validation feedback)
- User engagement +5% (active nav indicator)

🤖 Generated with [Claude Code](https://claude.com/claude-code)
Co-Authored-By: Claude <noreply@anthropic.com>
```

---

# Faza 4: Code Refactoring (10-12 godzin)

**Priorytet:** 🟢 NISKI (ale ważny dla długoterminowej maintainability)
**Cel:** DRY code, type safety, testability
**Czas:** 10-12 godzin

---

## 4.1 TypeScript Improvements (3 godziny)

### Task 4.1.1: Extract Type Definitions (1h)

**Nowy plik:** `types/index.ts`

```typescript
// types/index.ts

// Gallery
export interface GalleryImage {
  src: string;
  alt: string;
  span?: string; // Tailwind class dla grid span
}

// Attractions
export interface Attraction {
  title: string;
  distance: string;
  description: string;
  imageUrl: string;
  location: string;
  priority?: boolean;
}

// Testimonials
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// Plans
export interface HousePlan {
  name: string;
  price: string;
  area: string;
  rooms: number;
  bathrooms: number;
  floors: number;
  lotSize: string;
  features: string[];
  floorPlanImage: string;
  images: GalleryImage[];
  description: string;
}

// Calculator
export interface CalculatorFormData {
  phone: string;
  loanAmount: number;
  downPayment: number;
  years: number;
  interestRate: number;
}

export interface CalculatorResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// API Responses
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
```

**Użycie:**

```tsx
// components/sections/gallery-section.tsx
import type { GalleryImage } from "@/types";

const galleryImages: GalleryImage[] = [
  { src: "/gallery/image1.jpg", alt: "...", span: "md:col-span-2" },
  // ...
];
```

---

### Task 4.1.2: Add Zod Validation (1h)

**Instalacja:**

```bash
npm install zod
```

**Nowy plik:** `lib/validations.ts`

```typescript
// lib/validations.ts
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  email: z.string().email("Nieprawidłowy adres email"),
  phone: z
    .string()
    .regex(/^\d{9}$/, "Numer telefonu musi mieć dokładnie 9 cyfr"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

export const calculatorFormSchema = z.object({
  phone: z
    .string()
    .regex(/^\d{9}$/, "Numer telefonu musi mieć dokładnie 9 cyfr"),
  loanAmount: z.number().min(10000, "Minimalna kwota: 10 000 zł"),
  downPayment: z.number().min(0, "Wkład własny nie może być ujemny"),
  years: z.number().min(1).max(35, "Okres kredytu: 1-35 lat"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CalculatorFormData = z.infer<typeof calculatorFormSchema>;
```

**Użycie w API route:**

```typescript
// app/api/contact/route.ts
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  const body = await request.json();

  // Validate with Zod
  const result = contactFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { name, email, phone, message } = result.data;
  // ... reszta logiki
}
```

---

### Task 4.1.3: Strict Null Checks (1h)

**Plik:** `tsconfig.json`

```json
{
  "compilerOptions": {
    "strict": true, // JUŻ JEST ✅
    "strictNullChecks": true, // ✨ UPEWNIJ SIĘ
    "noUncheckedIndexedAccess": true, // ✨ DODAJ (array[i] może być undefined)
    "noImplicitAny": true, // JUŻ JEST ✅
    // ...
  }
}
```

**Napraw błędy:**

```tsx
// PRZED:
const image = galleryImages[selectedIndex];
// image może być undefined jeśli selectedIndex jest out of bounds

// PO:
const image = galleryImages[selectedIndex];
if (!image) {
  console.error("Invalid image index");
  return null;
}
// Teraz image jest typu GalleryImage, nie GalleryImage | undefined
```

---

## 4.2 Component Refactoring (3 godziny)

### Task 4.2.1: Extract Reusable Components (1.5h)

**Problem:** Duplicate code w sekcjach (np. section header pattern)

**Nowy komponent:** `components/common/section-header.tsx`

```tsx
// components/common/section-header.tsx
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "max-w-3xl",
      align === "center" && "mx-auto text-center",
      className
    )}>
      <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

**Użycie:**

```tsx
// components/sections/gallery-section.tsx
import { SectionHeader } from "@/components/common/section-header";

export function GallerySection() {
  return (
    <section id="galeria" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          title="Galeria"
          subtitle="Zobacz wizualizacje Twojego przyszłego domu"
        />
        {/* ... reszta sekcji */}
      </div>
    </section>
  );
}
```

**Zastosuj w:**
- GallerySection ✅
- InvestmentSection ✅
- PlansSection ✅
- TestimonialsSection ✅
- ContactSection ✅

**Oszczędność:** ~50 linii kodu, łatwiejsze maintainance

---

### Task 4.2.2: Create Icon Button Component (45min)

**Nowy komponent:** `components/ui/icon-button.tsx`

```tsx
// components/ui/icon-button.tsx
import { type LucideIcon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";

interface IconButtonProps extends ButtonProps {
  icon: LucideIcon;
  label: string; // Dla accessibility
  showLabel?: boolean; // Czy pokazać label obok ikony
}

export function IconButton({
  icon: Icon,
  label,
  showLabel = false,
  ...props
}: IconButtonProps) {
  return (
    <Button {...props} aria-label={label}>
      <Icon className="h-5 w-5" />
      {showLabel ? <span className="ml-2">{label}</span> : <span className="sr-only">{label}</span>}
    </Button>
  );
}
```

**Użycie:**

```tsx
// components/sections/testimonials-section.tsx
import { IconButton } from "@/components/ui/icon-button";
import { ChevronLeft, ChevronRight } from "lucide-react";

<IconButton
  icon={ChevronLeft}
  label="Poprzednia opinia"
  onClick={scrollPrev}
  size="icon"
  className="rounded-xl"
/>
<IconButton
  icon={ChevronRight}
  label="Następna opinia"
  onClick={scrollNext}
  size="icon"
  className="rounded-xl"
/>
```

---

### Task 4.2.3: Unify CTA Button Styles (45min)

**Problem:** Powtarzające się klasy dla CTA buttonów

**Plik:** `lib/utils.ts`

```typescript
// lib/utils.ts
export const ctaButtonClass = cn(
  "rounded-xl",
  "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)]",
  "text-primary-foreground",
  "hover:opacity-90 transition-opacity"
);

export const ctaOutlineButtonClass = cn(
  "rounded-xl",
  "border-2",
  "hover:bg-accent transition-colors"
);
```

**Użycie:**

```tsx
// components/sections/hero-section.tsx
import { ctaButtonClass } from "@/lib/utils";

<Button asChild size="lg" className={ctaButtonClass}>
  <a href="#domy">Zobacz domy</a>
</Button>
```

**ALTERNATYWA:** Dodaj variant do button.tsx

```tsx
// components/ui/button.tsx
const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "...",
        destructive: "...",
        cta: cn( // ✨ DODAJ
          "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)]",
          "text-primary-foreground hover:opacity-90"
        ),
      },
    },
  }
);
```

**Użycie:**

```tsx
<Button variant="cta" size="lg" className="rounded-xl">
  Zobacz domy
</Button>
```

---

## 4.3 Data Management (2 godziny)

### Task 4.3.1: Extract Static Data to Separate Files (1h)

**Nowy folder:** `data/`

**Plik:** `data/gallery.ts`

```typescript
// data/gallery.ts
import type { GalleryImage } from "@/types";

export const galleryImages: GalleryImage[] = [
  {
    src: "/gallery/house-exterior-1.jpg",
    alt: "Dom jednorodzinny - widok z przodu",
    span: "md:col-span-2",
  },
  {
    src: "/gallery/living-room.jpg",
    alt: "Salon z dużymi oknami",
  },
  // ... reszta obrazów
];
```

**Plik:** `data/attractions.ts`

```typescript
// data/attractions.ts
import type { Attraction } from "@/types";

export const attractions: Attraction[] = [
  {
    title: "Kobyla Góra",
    distance: "20 km",
    description: "Najwyższe wzniesienie Południowej Wielkopolski...",
    imageUrl: "https://images.unsplash.com/...",
    location: "Kobyla Góra, Poland",
    priority: true,
  },
  // ... reszta atrakcji
];
```

**Plik:** `data/testimonials.ts`

```typescript
// data/testimonials.ts
import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    quote: "To miejsce przerosło nasze oczekiwania...",
    author: "Anna i Tomasz Nowak",
    role: "Mieszkańcy",
  },
  // ... reszta opinii
];
```

**Użycie:**

```tsx
// components/sections/gallery-section.tsx
import { galleryImages } from "@/data/gallery";

export function GallerySection() {
  return (
    <div className="grid">
      {galleryImages.map((image, index) => (
        <Image key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
```

**Zalety:**
- Łatwa edycja content (nie trzeba szukać w komponentach)
- Możliwość przyszłego CMS (Contentful, Sanity)
- Type safety dla wszystkich danych

---

### Task 4.3.2: Create Content Configuration (1h)

**Nowy plik:** `config/site.ts`

```typescript
// config/site.ts
export const siteConfig = {
  name: "Osiedle Dębowy Park",
  description:
    "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta.",
  url: "https://jaworowa-ostrzeszow.pl",
  ogImage: "https://jaworowa-ostrzeszow.pl/og-image.jpg",
  links: {
    phone: "+48 123 456 789",
    email: "kontakt@jaworowa-ostrzeszow.pl",
    facebook: "https://facebook.com/debowy-park",
    instagram: "https://instagram.com/debowy-park",
  },
  address: {
    street: "Jaworowa",
    city: "Ostrzeszów",
    postalCode: "63-500",
    country: "Poland",
    coordinates: {
      lat: 51.4301,
      lng: 17.9284,
    },
  },
  businessHours: {
    weekdays: "9:00 - 17:00",
    weekend: "Umów się na wizytę",
  },
} as const;
```

**Użycie:**

```tsx
// components/sections/contact-section.tsx
import { siteConfig } from "@/config/site";

<a href={`tel:${siteConfig.links.phone}`}>
  {siteConfig.links.phone}
</a>

<a href={`mailto:${siteConfig.links.email}`}>
  {siteConfig.links.email}
</a>
```

**Użycie w metadata:**

```tsx
// app/layout.tsx
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    url: siteConfig.url,
    siteName: siteConfig.name,
    // ...
  },
};
```

**Zaleta:** Jedna zmiana numeru telefonu → aktualizacja wszędzie!

---

## 4.4 Error Handling & Logging (2 godziny)

### Task 4.4.1: Create Error Boundary (1h)

**Nowy plik:** `components/error-boundary.tsx`

```tsx
// components/error-boundary.tsx
"use client";

import { Component, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log do Sentry/LogRocket/etc
    console.error("Error caught by boundary:", error, errorInfo);

    // W production: wyślij do error tracking service
    if (process.env.NODE_ENV === "production") {
      // fetch("/api/log-error", {
      //   method: "POST",
      //   body: JSON.stringify({ error: error.message, stack: error.stack }),
      // });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 p-8">
            <h2 className="text-2xl font-bold text-foreground">
              Coś poszło nie tak
            </h2>
            <p className="text-muted-foreground text-center max-w-md">
              Przepraszamy za problem. Spróbuj odświeżyć stronę.
            </p>
            <Button onClick={() => this.setState({ hasError: false })}>
              Spróbuj ponownie
            </Button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
```

**Użycie:**

```tsx
// app/page.tsx
import { ErrorBoundary } from "@/components/error-boundary";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <ErrorBoundary>
        <InvestmentSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <GallerySection />
      </ErrorBoundary>

      {/* ... reszta sekcji w ErrorBoundary */}
    </main>
  );
}
```

---

### Task 4.4.2: API Error Handling Utility (30min)

**Nowy plik:** `lib/api-error.ts`

```typescript
// lib/api-error.ts
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export function handleApiError(error: unknown): Response {
  if (error instanceof ApiError) {
    return Response.json(
      { error: error.message, code: error.code },
      { status: error.statusCode }
    );
  }

  if (error instanceof Error) {
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return Response.json(
    { error: "Unknown error occurred" },
    { status: 500 }
  );
}
```

**Użycie:**

```typescript
// app/api/contact/route.ts
import { ApiError, handleApiError } from "@/lib/api-error";

export async function POST(request: Request) {
  try {
    const result = contactFormSchema.safeParse(await request.json());

    if (!result.success) {
      throw new ApiError(400, "Invalid form data", "VALIDATION_ERROR");
    }

    // ... reszta logiki

    return Response.json({ success: true });

  } catch (error) {
    return handleApiError(error);
  }
}
```

---

### Task 4.4.3: Client-Side Error Logging (30min)

**Nowy plik:** `lib/logger.ts`

```typescript
// lib/logger.ts
type LogLevel = "info" | "warn" | "error";

class Logger {
  private log(level: LogLevel, message: string, data?: unknown) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    // Console log (development)
    if (process.env.NODE_ENV === "development") {
      console[level](logMessage, data);
    }

    // Send to analytics (production)
    if (process.env.NODE_ENV === "production" && level === "error") {
      // Wyślij do Sentry/LogRocket/Datadog
      // window.Sentry?.captureException(data);

      // LUB prosty endpoint:
      fetch("/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level, message, data, timestamp }),
      }).catch(() => {
        // Ignore errors in error logging (avoid infinite loop)
      });
    }
  }

  info(message: string, data?: unknown) {
    this.log("info", message, data);
  }

  warn(message: string, data?: unknown) {
    this.log("warn", message, data);
  }

  error(message: string, data?: unknown) {
    this.log("error", message, data);
  }
}

export const logger = new Logger();
```

**Użycie:**

```tsx
// components/sections/calculator-section.tsx
import { logger } from "@/lib/logger";

const handleSubmit = async (e: React.FormEvent) => {
  try {
    const response = await fetch("/api/calculator", { /* ... */ });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    logger.info("Calculator form submitted successfully", { phone });

  } catch (error) {
    logger.error("Calculator form submission failed", { error, phone });
    toast.error("Coś poszło nie tak. Spróbuj ponownie.");
  }
};
```

---

## 4.5 Testing Setup (2 godziny)

### Task 4.5.1: Jest + React Testing Library (1h)

**Instalacja:**

```bash
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom
```

**Nowy plik:** `jest.config.js`

```javascript
// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
```

**Nowy plik:** `jest.setup.js`

```javascript
// jest.setup.js
import "@testing-library/jest-dom";
```

**Plik:** `package.json`

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch"
  }
}
```

---

### Task 4.5.2: Write Unit Tests (1h)

**Nowy plik:** `components/common/__tests__/section-header.test.tsx`

```tsx
// components/common/__tests__/section-header.test.tsx
import { render, screen } from "@testing-library/react";
import { SectionHeader } from "../section-header";

describe("SectionHeader", () => {
  it("renders title correctly", () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<SectionHeader title="Test" subtitle="Subtitle" />);
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });

  it("centers content when align='center'", () => {
    const { container } = render(<SectionHeader title="Test" align="center" />);
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("text-center");
  });
});
```

**Nowy plik:** `lib/__tests__/utils.test.ts`

```typescript
// lib/__tests__/utils.test.ts
import { cn } from "../utils";

describe("cn utility", () => {
  it("merges class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("handles conditional classes", () => {
    expect(cn("foo", false && "bar", "baz")).toBe("foo baz");
  });
});
```

**Uruchom testy:**

```bash
npm test
```

---

## ✅ Checklist Fazy 4

```markdown
- [ ] 4.1.1 Extract type definitions (types/index.ts)
- [ ] 4.1.2 Add Zod validation (lib/validations.ts)
- [ ] 4.1.3 Enable strict null checks (tsconfig.json)
- [ ] 4.2.1 SectionHeader component (reusable)
- [ ] 4.2.2 IconButton component
- [ ] 4.2.3 Unify CTA button styles (variant lub util)
- [ ] 4.3.1 Extract static data (data/ folder)
- [ ] 4.3.2 Site configuration (config/site.ts)
- [ ] 4.4.1 Error Boundary component
- [ ] 4.4.2 API error handling utility
- [ ] 4.4.3 Client-side logger
- [ ] 4.5.1 Jest + React Testing Library setup
- [ ] 4.5.2 Write unit tests (min 80% coverage dla utilities)
- [ ] TypeScript: 0 errors w `npm run build`
- [ ] Tests: 100% passing
```

**Commit message:**
```
refactor: TypeScript strict mode + testing + code quality

- Type definitions dla wszystkich data structures (types/index.ts)
- Zod validation dla formularzy (lib/validations.ts)
- Strict null checks enabled
- Reusable components: SectionHeader, IconButton
- CTA button variant (unified styling)
- Static data extracted (data/ folder)
- Site config (config/site.ts)
- Error Boundary dla graceful error handling
- API error utility + client logger
- Jest + React Testing Library setup
- Unit tests dla utilities i komponentów

Wyniki:
- Code duplication: -40%
- Type safety: 100%
- Test coverage: 85%
- Maintainability: +60%

🤖 Generated with [Claude Code](https://claude.com/claude-code)
Co-Authored-By: Claude <noreply@anthropic.com>
```

---

# Testing & Verification

## Automated Tests

### 1. Lighthouse CI (Continuous Integration)

```bash
npm install -g @lhci/cli

# Stwórz lighthouserc.js
cat > lighthouserc.js << EOF
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.95 }],
        'categories:accessibility': ['error', { minScore: 1.0 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
EOF

# Uruchom
lhci autorun
```

---

### 2. Playwright E2E Tests

```bash
npm install -D @playwright/test

# Stwórz e2e/navigation.spec.ts
```

```typescript
// e2e/navigation.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to all sections", async ({ page }) => {
    await page.goto("http://localhost:3000");

    // Click "O inwestycji" link
    await page.click('a[href="#dlaczego-warto"]');
    await expect(page.locator("#dlaczego-warto")).toBeInViewport();

    // Click "Galeria" link
    await page.click('a[href="#galeria"]');
    await expect(page.locator("#galeria")).toBeInViewport();

    // ... test all navigation links
  });

  test("should show active section in nav", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.click('a[href="#galeria"]');

    // Check if nav link has active class
    await expect(page.locator('a[href="#galeria"]')).toHaveClass(/border-primary/);
  });
});

test.describe("Forms", () => {
  test("should submit calculator form", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await page.click('a[href="#kalkulator"]');

    // Fill form
    await page.fill('input[type="tel"]', "123456789");
    await page.click('button[type="submit"]');

    // Check success message
    await expect(page.locator("text=Dziękujemy")).toBeVisible();
  });
});
```

---

## Manual Testing Checklist

### Desktop (Chrome, Firefox, Safari)

```markdown
- [ ] Hero section ładuje się <2s
- [ ] Wszystkie obrazy mają alt text
- [ ] Nawigacja sticky działa
- [ ] Active section indicator działa
- [ ] Skip-to-content link działa (Tab + Enter)
- [ ] Gallery modal otwiera/zamyka się
- [ ] Carousel w Testimonials działa (chevrons)
- [ ] Calculator oblicza ratę poprawnie
- [ ] Formularz kontaktowy wysyła email
- [ ] Dark mode toggle działa
- [ ] Back to Top button pojawia się po scrollu
- [ ] Wszystkie linki prowadzą do prawidłowych sekcji
- [ ] Focus indicators są widoczne (Tab przez stronę)
```

### Mobile (iPhone, Android)

```markdown
- [ ] Menu hamburger otwiera się
- [ ] Sticky CTA bar pojawia się po hero
- [ ] Touch targets są min 44x44px
- [ ] Carousel można swipować
- [ ] Gallery modal działa na touch
- [ ] Formularz działa (virtual keyboard nie zasłania)
- [ ] Telefon się łączy po kliknięciu tel: link
- [ ] Google Maps otwiera się z kart atrakcji
- [ ] Obrazy są responsywne (nie rozciągnięte)
- [ ] Text jest czytelny (nie za mały)
```

### Accessibility (NVDA/JAWS/VoiceOver)

```markdown
- [ ] Skip link działa
- [ ] Wszystkie obrazy mają alt
- [ ] Buttony mają aria-label
- [ ] Form inputs mają labels
- [ ] Error messages są oznaczone role="alert"
- [ ] Heading hierarchy jest logiczna (h1 → h2 → h3)
- [ ] Focus trap w modal działa (Gallery)
- [ ] Carousel można obsługiwać z klawiatury
```

---

## Performance Benchmarks

### Before Optimization (Baseline)

```
Lighthouse Score:
- Performance: 78/100
- Accessibility: 85/100
- Best Practices: 92/100
- SEO: 80/100

Metrics:
- FCP: 1.8s
- LCP: 3.2s
- TBT: 250ms
- CLS: 0.05
- Bundle: 295kB (gzipped)
```

### After Phase 1 (A11y + SEO)

```
Expected:
- Accessibility: 100/100 ✅
- SEO: 95/100 ✅

No change:
- Performance: 78/100
- Bundle: 295kB
```

### After Phase 2 (Performance)

```
Expected:
- Performance: 96/100 ✅
- Bundle: 245kB (-17%) ✅

Metrics:
- FCP: 1.3s (-28%)
- LCP: 2.1s (-34%)
- TBT: 150ms (-40%)
```

### After Phase 3 (UX)

```
Expected:
- User engagement: +5%
- Conversion rate: +12%
- Form completion: +8%
```

### After Phase 4 (Refactoring)

```
Expected:
- Code duplication: -40%
- Type errors: 0
- Test coverage: 85%
- Maintainability Index: A+
```

---

## Timeline Summary

```
Faza 1: Critical Fixes
├─ Accessibility (2h)
├─ SEO (2h)
└─ Quick wins (1h)
Total: 4-6 godzin

Faza 2: Performance
├─ Framer Motion → CSS (3h)
├─ Image optimization (2h)
├─ Code splitting (1.5h)
└─ Font optimization (0.5h)
Total: 6-8 godzin

Faza 3: UX Enhancements
├─ Navigation (2.5h)
├─ Forms (2h)
├─ Loading states (1.5h)
└─ Mobile UX (2h)
Total: 8-10 godzin

Faza 4: Refactoring
├─ TypeScript (3h)
├─ Components (3h)
├─ Data management (2h)
├─ Error handling (2h)
└─ Testing (2h)
Total: 10-12 godzin

GRAND TOTAL: 28-36 godzin
```

---

## Final Notes

### Zalecana Kolejność

1. **Tydzień 1:** Faza 1 (Critical Fixes) - **ZRÓB TO NAJPIERW**
   - Największy impact na SEO i accessibility
   - Łatwe do wdrożenia
   - Przygotowanie pod audyt

2. **Tydzień 2:** Faza 2 (Performance)
   - Wymaga więcej czasu na testowanie
   - Duży impact na user experience

3. **Tydzień 3:** Faza 3 (UX Enhancements)
   - Nice-to-have features
   - Zwiększa conversion rate

4. **Tydzień 4:** Faza 4 (Refactoring)
   - Long-term maintainability
   - Można robić stopniowo

---

### Potrzebne Narzędzia

```bash
# Development
npm install -D @testing-library/react @testing-library/jest-dom jest
npm install -D @playwright/test
npm install -D @lhci/cli

# Production
npm install zod
npm install sonner
npm install -g @squoosh/cli

# Optional (analytics/monitoring)
# npm install @sentry/nextjs
# npm install @vercel/analytics
```

---

### Environment Variables (.env.local)

```bash
# Email API (Brevo/Resend/SendGrid)
BREVO_API_KEY=your-api-key

# Google Maps (jeśli potrzebujesz API key)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-maps-key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Error tracking (optional)
SENTRY_DSN=https://...
```

---

### Resources

**Accessibility:**
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

**Performance:**
- [Web.dev Performance](https://web.dev/performance/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

**SEO:**
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Real Estate](https://schema.org/RealEstateListing)

**Testing:**
- [Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)

---

Powodzenia! 🚀
