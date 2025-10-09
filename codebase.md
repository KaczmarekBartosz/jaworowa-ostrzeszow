# .claude\settings.local.json

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run build:*)",
      "Bash(dir \"C:\\Users\\NicoN\\Desktop\\NewCoding\\DebowyPark\\jaworowa-ostrzeszow\\public\" /b)",
      "Bash(npm run dev:*)",
      "Bash(npm run lint)",
      "Bash(git config:*)",
      "Bash(git add:*)",
      "Bash(git commit -m \"$(cat <<''EOF''\nKompletna optymalizacja sekcji lokalizacji i UX\n\n- Dodano interaktywne karty atrakcji turystycznych z integracją Google Maps\n- Implementacja karuzeli mobile z karuzelą Embla i chevron navigation\n- Przycisk \"Wyznacz trasę\" dla każdej atrakcji (Google Maps Directions API)\n- Klikalność kart prowadząca do lokalizacji w Google Maps\n- Zoptymalizowano gradient overlay dla lepszej widoczności zdjęć\n- Hover effects inspirowane galerią (scale-105 na zdjęciach)\n- Ujednolicono hierarchię nagłówków (h2: text-4xl md:text-5xl, h3: text-3xl md:text-4xl)\n- Standaryzacja paddingu sekcji (py-20 md:py-32)\n- Spójne marginesy w całym projekcie\n- Dodano domeny zewnętrznych obrazów do next.config.ts\n- Poprawiono aspect ratio kart (4/3 mobile, 4/5 desktop)\n- AttractionCard: nowy dedykowany komponent z accessibility\n- Naprawiono błąd typu JSX.Element → React.ReactElement\n- Line-clamp-2 dla opisów (mobile i desktop)\n- Optymalizacja obrazów: KobylaGora-optimized.jpg\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>\nEOF\n)\")",
      "Bash(git push:*)"
    ],
    "deny": [],
    "ask": []
  }
}

```

# .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

```

# app\favicon.ico

This is a binary file of the type: Binary

# app\globals.css

```css
@import "tailwindcss";
@import "tw-animate-css";

/* --- Dark variant helper (Tailwind v4) --- */
@custom-variant dark (&:is(.dark *));

/* --- Design tokens exposed to Tailwind --- */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

/* --- Light theme ("DĘBOWY PARK") --- */
:root {
  --radius: 0.625rem;

  --background: oklch(0.97 0.003 120); /* Subtelny, naturalny off-white */
  --foreground: oklch(0.18 0.02 120); /* Głęboka, leśna szarość/zieleń */

  --card: oklch(1 0 0); /* Czysta biel dla kart */
  --card-foreground: var(--foreground);
  --popover: var(--card);
  --popover-foreground: var(--foreground);

  /* === NOWY ZIELONY AKCENT === */
  --primary: oklch(0.5 0.15 150); /* Głęboka zieleń jako fallback */
  --primary-foreground: oklch(0.98 0.005 120); /* Jasny tekst na zielonym */
  --gradient-from: #34d399; /* emerald-400 */
  --gradient-to: #065f46; /* emerald-800 */

  --secondary: oklch(0.94 0.008 120);
  --secondary-foreground: oklch(0.25 0.015 120);
  --muted: oklch(0.94 0.008 120);
  --muted-foreground: oklch(0.45 0.01 120);
  --accent: var(--secondary);
  --accent-foreground: var(--secondary-foreground);

  --destructive: oklch(0.58 0.24 27);
  --border: oklch(0.9 0.01 120);
  --input: var(--border);
  --ring: oklch(0.55 0.15 150);
}

/* --- Dark theme --- */
.dark {
  --background: oklch(0.12 0.015 120); /* Bardzo ciemna, leśna zieleń */
  --foreground: oklch(0.95 0.005 120); /* Jasny, lekko zielonkawy biały */

  --card: oklch(0.16 0.015 120); /* Karta delikatnie jaśniejsza od tła */
  --card-foreground: var(--foreground);
  --popover: var(--card);
  --popover-foreground: var(--foreground);

  /* === ZIELONY AKCENT W DARK MODE === */
  --primary: oklch(0.55 0.15 150);
  --primary-foreground: oklch(1 0 0);
  --gradient-from: #1b855e; /* emerald-400 */
  --gradient-to: #034d38; /* emerald-800 */

  --secondary: oklch(0.2 0.015 120);
  --secondary-foreground: oklch(0.95 0.005 120);
  --muted: oklch(0.2 0.015 120);
  --muted-foreground: oklch(0.65 0.01 120);
  --accent: var(--secondary);
  --accent-foreground: var(--secondary-foreground);

  --destructive: oklch(0.58 0.24 27);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.55 0.15 150);
}

/* --- Base layer --- */
@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    -webkit-text-size-adjust: 100%;
    scrollbar-gutter: stable;
  }

  html,
  body {
    overflow-x: clip;
    height: 100%;
  }

  body {
    @apply bg-background text-foreground;
  }

  :where(img, svg, video, canvas) {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: oklch(var(--border) / 0.5);
    border-radius: 10px;
    border: 2px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: oklch(var(--muted-foreground) / 0.7);
  }
  @supports (scrollbar-color: auto) {
    * {
      scrollbar-width: thin;
      scrollbar-color: oklch(var(--muted-foreground) / 0.7) transparent;
    }
  }

  section[id] {
    scroll-margin-top: theme(spacing.24);
  }
  @media (min-width: 768px) {
    section[id] {
      scroll-margin-top: theme(spacing.32);
    }
  }
  .hero-gradient-overlay {
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.4) 5%,
      transparent 10%,
      transparent 70%,
      rgba(0, 0, 0, 0.4) 85%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
}

```

# app\layout.tsx

```tsx
import type { Metadata } from "next"; // Import typu Metadata
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer"; // Dodany brakujący import Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
  description:
    "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Idealna przestrzeń dla Ciebie i Twojej rodziny.",
  verification: {
    google: "uxV1BrJ4Jz9YuzYz2IKH14N5fgxsxxoD5JyU1TfjFaU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className="scroll-smooth">
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
}

```

# app\page.tsx

```tsx
import { HeroSection } from "@/components/sections/hero-section";
import { InvestmentSection } from "@/components/sections/investment-section";
import { PlansSection } from "@/components/sections/plans-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CalculatorSection } from "@/components/sections/calculator-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InvestmentSection /> {/* Teraz zawiera lokalizację */}
      <PlansSection />
      <TestimonialsSection />
      <GallerySection />
      <CalculatorSection />
      <ContactSection />
    </main>
  );
}

```

# components.json

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}

```

# components\common\attraction-card.tsx

```tsx
"use client";

import Image from "next/image";
import { Navigation } from "lucide-react";

interface AttractionCardProps {
  title: string;
  distance: string;
  description: string;
  imageUrl: string;
  location: string;
  priority?: boolean;
}

const INVESTMENT_ADDRESS = "Jaworowa, Ostrzeszów, Poland";

export function AttractionCard({
  title,
  distance,
  description,
  imageUrl,
  location,
  priority = false,
}: AttractionCardProps) {
  // Generate Google Maps URLs
  const placeUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    INVESTMENT_ADDRESS
  )}&destination=${encodeURIComponent(location)}`;

  const handleDirectionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(directionsUrl, "_blank", "noopener,noreferrer");
  };

  const handleCardClick = () => {
    window.open(placeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border bg-card/50 w-full h-full md:aspect-[4/5] cursor-pointer transition-all duration-300 "
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
      <Image
        src={imageUrl}
        alt={`${title} — ${distance} od osiedla`}
        fill
        decoding="async"
        sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw"
        priority={priority}
        className="object-cover object-left transition-transform duration-300 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 via-30% to-transparent"
        aria-hidden="true"
      />

      {/* Top bar with distance badge and directions link */}
      <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm text-white drop-shadow-lg">
          {distance}
        </span>
        <button
          onClick={handleDirectionsClick}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 hover:bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-200 hover:scale-105 drop-shadow-lg"
          aria-label={`Wyznacz trasę do ${title}`}
        >
          <Navigation className="h-3 w-3" />
          <span className="hidden sm:inline">Trasa</span>
        </button>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-5 bottom-5 text-white">
        <h4 className="text-xl font-bold leading-tight tracking-tight drop-shadow-lg">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed drop-shadow-md line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}

```

# components\common\before-after-slider.tsx

```tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Maximize2, Minimize2 } from "lucide-react";

type Props = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** np. "aspect-[4/3]" | "aspect-[16/9]" | "aspect-square" */
  aspectRatioClass?: string;
  /** start slider position in % */
  initialPercent?: number;
  /** optional container classes */
  className?: string;
  /** max pixel height clamp (desktop) */
  maxH?: number; // e.g. 640
};

export default function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  beforeLabel = "Rzut 2D",
  afterLabel = "Wizualizacja 3D",
  aspectRatioClass = "aspect-[16/10]",
  initialPercent = 50,
  className = "",
  maxH = 640,
}: Props) {
  const [percent, setPercent] = React.useState(
    Math.max(0, Math.min(100, initialPercent))
  );
  const [open, setOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => setIsClient(true), []);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPercent(Math.max(0, Math.min(100, p)));
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPercent((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPercent((p) => Math.min(100, p + 4));
    if (e.key === "Home") setPercent(0);
    if (e.key === "End") setPercent(100);
  };

  return (
    <>
      <div
        className={[
          // premium card frame
          "relative rounded-3xl border bg-gradient-to-b from-card/60 to-card/30",
          "shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_20px_50px_-20px_rgba(0,0,0,0.35)]",
          "ring-1 ring-white/5 overflow-hidden",
          aspectRatioClass,
          "max-h-[70vh]",
          // clamp on desktops so visuals never stretch oddly
          `md:[--maxH:${maxH}px] md:max-h-[var(--maxH)]`,
          className || "",
        ].join(" ")}
        ref={ref}
        onPointerDown={(e) => setFromClientX(e.clientX)}
        onPointerMove={(e) => {
          if (e.buttons === 1) setFromClientX(e.clientX);
        }}
      >
        {/* checker + glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

        {/* BASE: before (2D) */}
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain select-none"
          priority={false}
        />

        {/* OVERLAY: after (3D) clipped by width */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${percent}%` }}
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain select-none"
            priority={false}
          />
        </div>

        {/* badges */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full bg-black/55 text-white text-xs px-2.5 py-1 backdrop-blur">
              {beforeLabel}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full bg-black/55 text-white text-xs px-2.5 py-1 backdrop-blur">
              {afterLabel}
            </span>
          </div>
          {/* side scrims for readability */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/25 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/25 to-transparent" />
        </div>

        {/* handle */}
        {isClient && (
          <motion.div
            role="slider"
            aria-label="Porównaj 2D i 3D"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(percent)}
            tabIndex={0}
            onKeyDown={onKey}
            className="absolute top-0 bottom-0 -translate-x-1/2 cursor-col-resize select-none"
            style={{ left: `${percent}%` }}
            onPan={(e, info) => setFromClientX(info.point.x)}
            onPanStart={(e, info) => setFromClientX(info.point.x)}
          >
            <div className="h-full w-px bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.25)]" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-5 right-0 pointer-events-none">
              <div className="pointer-events-auto mx-auto w-11 h-11 rounded-full bg-white text-foreground shadow-md grid place-items-center">
                <div className="w-5 h-0.5 bg-black" />
              </div>
            </div>
          </motion.div>
        )}

        {/* fullscreen button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Powiększ"
          className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-2 rounded-full bg-black/55 text-white text-xs px-3 py-1.5 hover:bg-black/70"
        >
          <Maximize2 className="w-4 h-4" />
          Pełny ekran
        </button>
      </div>

      {/* FULLSCREEN */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-none w-screen h-screen border-0 bg-black/95">
          <div className="absolute top-4 right-4 z-50">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5"
            >
              <Minimize2 className="w-4 h-4" />
              Zamknij
            </button>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 m-4 md:m-8 rounded-3xl overflow-hidden border ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-transparent">
              {/* contain in fullscreen as well */}
              <Image
                src={beforeSrc}
                alt={beforeAlt}
                fill
                sizes="100vw"
                className="object-contain select-none"
                priority
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${percent}%` }}
              >
                <Image
                  src={afterSrc}
                  alt={afterAlt}
                  fill
                  sizes="100vw"
                  className="object-contain select-none"
                  priority
                />
              </div>

              {/* badges */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-black/60 text-white text-sm px-3 py-1.5 backdrop-blur">
                    {beforeLabel}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-black/60 text-white text-sm px-3 py-1.5 backdrop-blur">
                    {afterLabel}
                  </span>
                </div>
              </div>

              {/* handle fs */}
              {isClient && (
                <motion.div
                  role="slider"
                  aria-label="Porównaj 2D i 3D"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(percent)}
                  tabIndex={0}
                  className="absolute top-0 bottom-0 -translate-x-1/2 cursor-col-resize select-none"
                  style={{ left: `${percent}%` }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowLeft")
                      setPercent((p) => Math.max(0, p - 4));
                    if (e.key === "ArrowRight")
                      setPercent((p) => Math.min(100, p + 4));
                  }}
                  onPan={(e, info) => setFromClientX(info.point.x)}
                  onPanStart={(e, info) => setFromClientX(info.point.x)}
                >
                  <div className="h-full w-px bg-white/85" />
                  <div className="absolute top-1/2 -translate-y-1/2 -left-6 right-0 pointer-events-none">
                    <div className="pointer-events-auto mx-auto w-12 h-12 rounded-full bg-white text-foreground shadow-md grid place-items-center">
                      <div className="w-6 h-0.5 bg-black" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

```

# components\common\feature-card.tsx

```tsx
"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
  /** NOWE (opcjonalne): ścieżka do PNG z /public */
  bgSrc?: string;
  /** NOWE (opcjonalne): dostrajanie klasy PNG */
  bgClassName?: string;
}

export function FeatureCard({
  children,
  title,
  description,
  isHighlighted = false,
  bgSrc,
  bgClassName,
}: FeatureCardProps) {
  const cardClasses = cn(
    "relative overflow-hidden rounded-3xl p-6 flex flex-col justify-between h-full transition-all duration-300",
    isHighlighted
      ? "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground"
      : "bg-card/50 border backdrop-blur-sm hover:bg-card/80"
  );

  // jeśli mamy overlay po prawej, dołóż oddech z prawej strony pod tekst
  const contentClasses = cn(
    "relative z-10",
    bgSrc ? "pr-12 md:pr-18" : "" // zapobiega 'zjadaniu' tekstu przez PNG
  );

  return (
    <div className={cardClasses}>
      {/* OVERLAY PNG po prawej (dekoracja) */}
      {bgSrc && (
        <div
          className="pointer-events-none absolute bottom-20 right-[-55] pr-3 md:pr-4 pt-3 md:pt-4"
          aria-hidden="true"
        >
          {/* 96x96 ~ h-24; możesz podnieść na md */}
          <Image
            src={bgSrc}
            alt=""
            width={280}
            height={280}
            loading="lazy"
            className={cn(
              "opacity-100 md:opacity-100 drop-shadow-xl object-contain",
              isHighlighted && "opacity-100",
              bgClassName
            )}
          />
        </div>
      )}

      {/* Ikona-lekko w tle jak u Ciebie */}
      <div
        className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-full",
          isHighlighted ? "bg-white/10" : "bg-secondary"
        )}
        aria-hidden="true"
      >
        {children}
      </div>

      <div className={contentClasses}>
        <h3
          className={cn(
            "mt-4 text-xl font-bold leading-tight tracking-tight",
            isHighlighted ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            isHighlighted
              ? "text-primary-foreground/85"
              : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

```

# components\common\feature-carousel.tsx

```tsx
"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
// KLUCZOWA ZMIANA: Importujemy typ bezpośrednio z pakietu-rdzenia
import type { EmblaCarouselType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type FeatureCarouselProps = {
  children: React.ReactNode;
};

export function FeatureCarousel({ children }: FeatureCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Używamy poprawnego typu EmblaCarouselType
  const onSelect = useCallback((api: EmblaCarouselType) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow-0 w-[80%] aspect-[4/3] pl-4 first:pl-6 last:pr-6 md:w-auto md:aspect-auto md:basis-auto md:p-0"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl justify-end gap-2 px-6">
        <Button
          size="icon"
          className="rounded-full h-12 w-12"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className="size-6" />
          <span className="sr-only">Poprzedni slajd</span>
        </Button>
        <Button
          size="icon"
          className="rounded-full h-12 w-12"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className="size-6" />
          <span className="sr-only">Następny slajd</span>
        </Button>
      </div>
    </div>
  );
}

```

# components\common\fullscreen-image-viewer.tsx

```tsx
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface FullscreenImageViewerProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export function FullscreenImageViewer({
  src,
  alt,
  open,
  onClose,
}: FullscreenImageViewerProps) {
  const [scale, setScale] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setIsLoaded(false);
      // Delay dla płynnego fade-in obrazu
      setTimeout(() => setIsLoaded(true), 50);
    } else {
      setScale(1);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        setScale((prev) => Math.min(prev + 0.2, 3));
      } else if (e.key === "-") {
        setScale((prev) => Math.max(prev - 0.2, 0.5));
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setScale((prev) => Math.max(0.5, Math.min(3, prev + delta)));
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [onClose, open]);

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 md:p-8"
      onClick={onClose}
      aria-label="Podgląd obrazu"
      style={{
        backdropFilter: "blur(20px)",
        animation: "fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Kontrolki */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setScale((prev) => Math.min(prev + 0.3, 3));
          }}
          className="rounded-xl bg-white/10 p-3 text-white/90 backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Powiększ"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setScale((prev) => Math.max(prev - 0.3, 0.5));
          }}
          className="rounded-xl bg-white/10 p-3 text-white/90 backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Pomniejsz"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={onClose}
          className="rounded-xl bg-white/10 p-3 text-white/90 backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Zamknij"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* === KLUCZOWE: Wrapper z overflow hidden dla zaokrąglenia === */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          transform: `scale(${scale})`,
          transition:
            "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out",
          opacity: isLoaded ? 1 : 0,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
          quality={95}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Wskazówka dla użytkownika */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full text-center sm:w-auto w-full">
        Podpowiedź: Użyj Ctrl + scroll lub +/- do zoomowania!
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(20px);
          }
        }
      `}</style>
    </div>,
    document.body
  );
}

```

# components\common\gallery-card.tsx

```tsx
"use client";

import Image from "next/image";
import { Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryCardProps {
  imageUrl: string;
  title: string;
  className?: string;
  onClick?: () => void; // Dodajemy prop onClick
}

export function GalleryCard({
  imageUrl,
  title,
  className,
  onClick,
}: GalleryCardProps) {
  return (
    // Zmieniamy DialogTrigger na zwykły <button>
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative block w-full overflow-hidden rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      <div className="absolute bottom-0 left-0 p-6 text-left">
        <h3 className="text-base font-bold text-white">{title}</h3>
      </div>

      <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-opacity group-hover:opacity-100">
        <Maximize className="size-5" />
      </div>
    </button>
  );
}

```

# components\common\gallery-stack-mobile.tsx

```tsx
"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimationFrame,
  type PanInfo,
} from "framer-motion";
import { ChevronRight, ChevronLeft, Pointer } from "lucide-react";

type Item = { imageUrl: string; title: string };

interface GalleryStackMobileProps {
  items: Item[];
  onCardClick: (index: number) => void;
  hintMode?: "continuous" | "pulsed";
}

export function GalleryStackMobile({
  items,
  onCardClick,
  hintMode = "pulsed",
}: GalleryStackMobileProps) {
  const [queue, setQueue] = React.useState(items);
  const [didDrag, setDidDrag] = React.useState(false);
  const x = useMotionValue(0);

  const THRESHOLD = 90;
  const VELOCITY_WEIGHT = 0.35;

  const layers = [
    { scale: 1, y: 0, x: 0, rot: 0, z: 30, opacity: 1 },
    { scale: 0.97, y: -5, x: 15, rot: 5, z: 20, opacity: 0.95 },
    { scale: 0.94, y: 10, x: -10, rot: -8, z: 10, opacity: 0.9 },
  ] as const;

  const visible = queue.slice(0, 3);

  const next = React.useCallback(() => {
    setQueue((q) => {
      const [first, ...rest] = q;
      return [...rest, first];
    });
  }, []);

  const prev = React.useCallback(() => {
    setQueue((q) => {
      const last = q[q.length - 1];
      const rest = q.slice(0, -1);
      return [last, ...rest];
    });
  }, []);

  const handleCardClick = () => {
    if (didDrag) return;
    const topCardUrl = queue[0].imageUrl;
    const globalIndex = items.findIndex((item) => item.imageUrl === topCardUrl);
    if (globalIndex !== -1) {
      onCardClick(globalIndex);
    }
  };

  const onDragStart = () => setDidDrag(false);

  const onDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeStrength = info.offset.x + info.velocity.x * VELOCITY_WEIGHT;
    if (Math.abs(info.offset.x) > 2) {
      setDidDrag(true);
      setTimeout(() => setDidDrag(false), 120);
    }
    if (Math.abs(swipeStrength) > THRESHOLD) {
      swipeStrength > 0 ? prev() : next();
      x.set(0);
    } else {
      x.set(0);
    }
  };

  const hintX = useMotionValue(0);
  const hintY = useMotionValue(0);
  const A = 112;
  const B = 16;
  const SPEED = 1.8;
  const LIMIT = 2;
  const angleRef = React.useRef(0);
  const dirRef = React.useRef<1 | -1>(1);
  const [hintVisible, setHintVisible] = React.useState(
    hintMode === "continuous"
  );
  const timeoutsRef = React.useRef<number[]>([]);
  const CYCLE_MS = 3000;
  const FADE_MS = 250;
  const ACTIVE_MS = 2200;
  const PAUSE_MS = Math.max(0, CYCLE_MS - ACTIVE_MS);

  React.useEffect(() => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
    if (hintMode === "continuous") {
      setHintVisible(true);
      return;
    }
    const startCycle = () => {
      setHintVisible(true);
      const t1 = window.setTimeout(() => {
        setHintVisible(false);
        const t2 = window.setTimeout(startCycle, PAUSE_MS);
        timeoutsRef.current.push(t2);
      }, ACTIVE_MS);
      timeoutsRef.current.push(t1);
    };
    startCycle();
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
    };
  }, [hintMode, PAUSE_MS]);

  const isHintAnimating = hintMode === "continuous" || hintVisible;

  useAnimationFrame((_, delta) => {
    if (!isHintAnimating) return;
    const dAngle = (delta / 1000) * SPEED * dirRef.current;
    let nextAngle = angleRef.current + dAngle;
    if (nextAngle > LIMIT) {
      nextAngle = LIMIT;
      dirRef.current = -1;
    }
    if (nextAngle < -LIMIT) {
      nextAngle = -LIMIT;
      dirRef.current = 1;
    }
    angleRef.current = nextAngle;
    hintX.set(A * Math.sin(nextAngle));
    hintY.set(B * (1 - Math.cos(nextAngle)));
  });

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative h-[64vh] min-h-[420px] w-full">
        <AnimatePresence initial={false}>
          {visible.map((item, i) => {
            const isTop = i === 0;
            const L = layers[i];
            return (
              <motion.div
                key={item.imageUrl + i}
                className="absolute inset-0"
                style={{ zIndex: L.z }}
                initial={{ scale: 0.92, opacity: 0, y: -10 }}
                animate={{
                  scale: L.scale,
                  y: L.y,
                  x: L.x,
                  rotate: L.rot,
                  opacity: L.opacity,
                }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
              >
                <motion.div
                  drag={isTop ? "x" : false}
                  dragElastic={0.15}
                  dragConstraints={{ left: 0, right: 0 }}
                  style={isTop ? { x } : undefined}
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  whileTap={isTop ? { cursor: "grabbing" } : {}}
                  className="relative h-full w-full select-none"
                  onClick={isTop ? handleCardClick : undefined}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-xl">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      priority={isTop}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4">
                      <div className="rounded-2xl bg-black/45 px-4 py-3 backdrop-blur">
                        <p className="text-base font-medium text-white">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        <AnimatePresence>
          {isHintAnimating && (
            <motion.div
              className="pointer-events-none absolute bottom-[-20px] left-1/2 z-50 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
            >
              <div className="relative h-12 w-32">
                <motion.div
                  className="absolute top-1/2 left-8 -translate-y-1/2 will-change-transform"
                  style={{ x: hintX, y: hintY }}
                >
                  <div className="flex items-center gap-2">
                    <ChevronLeft className="h-5 w-5 text-foreground/90" />
                    <Pointer className="h-6 w-6 text-foreground drop-shadow" />
                    <ChevronRight className="h-5 w-5 text-foreground/90" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

```

# components\common\image-lightbox.tsx

```tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxImage = { src: string; alt: string };

type ImageLightboxProps = {
  images: LightboxImage[] | null | undefined;
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange?: (next: number) => void;
};

export function ImageLightbox({
  images,
  index,
  open,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  // Normalizuj dane wejściowe
  const imgs = React.useMemo(
    () => (Array.isArray(images) ? images : []),
    [images]
  );

  // Renderuj tylko po stronie klienta (eliminuje problemy z hydration)
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => setIsClient(true), []);

  // Bezpieczny indeks w zakresie [0, imgs.length - 1]
  const safeIndex = React.useMemo(() => {
    if (!imgs.length) return 0;
    return Math.min(Math.max(index, 0), imgs.length - 1);
  }, [index, imgs.length]);

  // Aktualny indeks obrazu
  const [current, setCurrent] = React.useState(safeIndex);
  React.useEffect(() => {
    setCurrent(safeIndex);
  }, [safeIndex]);

  const total = imgs.length;

  // Nawigacja po obrazach (stabilna referencja)
  const go = React.useCallback(
    (dir: 1 | -1) => {
      if (!total) return;
      const next = (current + dir + total) % total;
      setCurrent(next);
      onIndexChange?.(next);
    },
    [current, total, onIndexChange]
  );

  // Obsługa klawiatury
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // ↙️ Warunkowy render dopiero po wszystkich hookach
  if (!open || !isClient || !total) return null;

  const img = imgs[current];

  return (
    <Dialog open={open} onOpenChange={(v) => (!v ? onClose() : null)}>
      <DialogContent
        className="inset-0 fixed p-0 max-w-none w-screen h-screen border-0 bg-black/95"
        aria-label="Podgląd pełnoekranowy"
      >
        <button
          className="absolute top-4 right-4 z-50 rounded-full bg-white/10 hover:bg-white/20 p-2 outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={onClose}
          aria-label="Zamknij podgląd"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {total > 1 && (
          <>
            <button
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => go(-1)}
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => go(1)}
              aria-label="Następne zdjęcie"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        <div className="relative w-full h-full">
          {img?.src ? (
            <Image
              src={img.src}
              alt={img.alt ?? "Podgląd obrazu"}
              fill
              className="object-contain select-none"
              sizes="100vw"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/80">
              Brak obrazu do wyświetlenia
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-sm px-3 py-1 rounded-full bg-white/10 backdrop-blur">
          {current + 1} / {total}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ZoomableImageCard({
  src,
  alt,
  onClick,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  sizes?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Powiększ obraz"
      className={
        "group relative overflow-hidden rounded-3xl border bg-card/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
        (className ?? "")
      }
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        sizes={sizes}
        quality={80}
      />
      <div className="absolute inset-0 pointer-events-none flex items-end justify-end p-3">
        <span className="inline-flex items-center gap-2 text-white/95 bg-black/40 backdrop-blur px-2.5 py-1.5 rounded-full text-xs md:text-sm opacity-0 group-hover:opacity-100 transition">
          Kliknij, aby powiększyć
        </span>
      </div>
    </button>
  );
}

```

# components\common\interactive-plan.tsx

```tsx
"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Maximize } from "lucide-react";

type Room = { name: string; area: string };

interface InteractivePlanProps {
  level: "parter" | "piętro";
  totalArea: string;
  plan2DUrl: string;
  plan3DUrl: string;
  rooms: Room[];
}

export function InteractivePlan({
  level,
  totalArea,
  plan2DUrl,
  plan3DUrl,
  rooms,
}: InteractivePlanProps) {
  return (
    <div className="rounded-3xl border bg-card/50 p-6 md:p-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12">
        {/* Kolumna z wizualizacjami */}
        <div>
          <Tabs defaultValue="plan-3d" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="plan-3d">Wizualizacja 3D</TabsTrigger>
              <TabsTrigger value="plan-2d">Rzut 2D</TabsTrigger>
            </TabsList>
            <Dialog>
              <TabsContent value="plan-3d" className="mt-6">
                <DialogTrigger asChild>
                  <div className="group relative cursor-pointer overflow-hidden rounded-2xl">
                    <Image
                      src={plan3DUrl}
                      alt={`Wizualizacja 3D - ${level}`}
                      width={800}
                      height={600}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize className="size-5" />
                    </div>
                  </div>
                </DialogTrigger>
              </TabsContent>
              <TabsContent value="plan-2d" className="mt-6">
                <DialogTrigger asChild>
                  <div className="group relative cursor-pointer overflow-hidden rounded-2xl">
                    <Image
                      src={plan2DUrl}
                      alt={`Rzut 2D - ${level}`}
                      width={800}
                      height={800}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize className="size-5" />
                    </div>
                  </div>
                </DialogTrigger>
              </TabsContent>
              <DialogContent className="max-w-7xl w-full bg-transparent border-none p-4">
                <TabsContent value="plan-3d">
                  <Image
                    src={plan3DUrl}
                    alt={`Wizualizacja 3D - ${level}`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </TabsContent>
                <TabsContent value="plan-2d">
                  <Image
                    src={plan2DUrl}
                    alt={`Rzut 2D - ${level}`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </TabsContent>
              </DialogContent>
            </Dialog>
          </Tabs>
        </div>

        {/* Kolumna z metrażem */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-foreground">
            {level.charAt(0).toUpperCase() + level.slice(1)}{" "}
            <span className="text-muted-foreground font-medium">
              ({totalArea})
            </span>
          </h3>
          <Table className="mt-4">
            <TableBody>
              {rooms.map((room) => (
                <TableRow key={room.name}>
                  <TableCell>{room.name}</TableCell>
                  <TableCell className="text-right font-medium">
                    {room.area}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

```

# components\common\testimonial-card.tsx

```tsx
"use client";

import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    // POPRAWKA: Dodano h-full
    <div className="flex h-full flex-col justify-between rounded-3xl border bg-card/50 p-8">
      <div>
        <Quote className="h-8 w-8 text-primary" />
        <p className="mt-6 text-lg leading-relaxed text-foreground">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      <div className="mt-8">
        <p className="font-bold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}

```

# components\common\theme-toggle.tsx

```tsx
"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * Ikona = dokładnie tyle samo co hamburger:
 * - size="lg"  -> przycisk 56x56 (h-14 w-14), ikona 32x32 (h-8 w-8)
 * - size="md"  -> przycisk 48x48 (h-12 w-12), ikona 24x24 (h-6 w-6)
 * - size="sm"  -> przycisk 40x40 (h-10 w-10), ikona 20x20 (h-5 w-5)
 *
 * Ważne: ikony są osadzone w relatywnym kontenerze i mają size-full,
 * więc faktycznie wypełniają cały box – nie tylko „otoczka”.
 */
export function ThemeToggle({
  size = "md" as const,
}: {
  size?: "sm" | "md" | "lg";
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const btnDim =
    size === "lg" ? "h-14 w-14" : size === "md" ? "h-12 w-12" : "h-10 w-10";
  const iconBox =
    size === "lg" ? "h-6 w-6" : size === "md" ? "h-6 w-6" : "h-5 w-5";

  if (!mounted)
    return <div className={`${btnDim} rounded-full bg-background/50`} />;

  const next = resolvedTheme === "light" ? "dark" : "light";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={`${btnDim} p-0 rounded-full text-foreground/80 hover:bg-foreground/10 hover:text-foreground`}
      onClick={() => setTheme(next)}
      aria-label="Przełącz motyw"
      title={next === "dark" ? "Włącz ciemny motyw" : "Włącz jasny motyw"}
    >
      {/* Kontener o stałym boxie ikony */}
      <span className={`relative inline-block ${iconBox}`} aria-hidden>
        {/* Obie ikony wypełniają kontener 1:1 */}
        <Sun
          className="absolute inset-0 size-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          strokeWidth={2.25}
        />
        <Moon
          className="absolute inset-0 size-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          strokeWidth={2.25}
        />
      </span>
      <span className="sr-only">Przełącz motyw</span>
    </Button>
  );
}

```

# components\layout\footer.tsx

```tsx
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-8">
          {/* Logo i opis - pełna szerokość na mobile, 1 kolumna na desktop */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Strona główna"
            >
              <Image
                src="/logo.png"
                alt="Logo Osiedle Dębowy Park"
                width={120}
                height={120}
                className="flex-shrink-0"
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Osiedle Dębowy Park
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs text-sm">
              Nowoczesne osiedle domów w zabudowie bliźniaczej, zaprojektowane z
              myślą o komforcie i harmonii z naturą.
            </p>
          </div>

          {/* Pozostała zawartość - 2 kolumny na mobile */}
          <div className="grid grid-cols-2 gap-6 lg:contents">
            {/* Nawigacja */}
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Nawigacja
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="#dlaczego-warto"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Dlaczego warto?
                  </a>
                </li>
                <li>
                  <a
                    href="#domy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Domy i Plany
                  </a>
                </li>
                <li>
                  <a
                    href="#galeria"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Galeria
                  </a>
                </li>
                <li>
                  <a
                    href="#kalkulator"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Finansowanie
                  </a>
                </li>
                <li>
                  <a
                    href="#lokalizacja"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Lokalizacja
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="font-semibold text-foreground text-sm">Kontakt</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:info@polmag.org.pl"
                    className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Mail className="size-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="break-all text-xs">
                      office@polmag.org.pl
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+48698470685"
                    className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Phone className="size-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs">+48 698 470 685</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Social Media
              </h3>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform h-9 w-9"
                  asChild
                >
                  <a href="#" aria-label="Instagram">
                    <Instagram className="size-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform h-9 w-9"
                  asChild
                >
                  <a href="#" aria-label="Facebook">
                    <Facebook className="size-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Inwestor */}
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Inwestor
              </h3>
              <div className="mt-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground text-xs">
                  POLMAG s.c.
                </p>
                <p className="text-xs mt-1">
                  ul. Powstańców Wlkp. 31
                  <br />
                  63-500 Ostrzeszów
                </p>
                <p className="mt-2 text-xs">NIP: 5140337328</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-xs md:text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Osiedle Dębowy Park. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

```

# components\layout\main-nav.tsx

```tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Trees, X } from "lucide-react";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#dlaczego-warto", label: "Inwestycja" },
  { href: "#domy", label: "Domy" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kalkulator", label: "Finansowanie" },
  { href: "#kontakt", label: "Kontakt" },
];

export function MainNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Logo = () => (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="Strona główna"
    >
      <Trees
        className="size-6 ml-2 text-foreground flex-shrink-0"
        aria-hidden="true"
      />
      <span className="text-lg font-bold tracking-tight text-foreground">
        Dębowy Park
      </span>
    </Link>
  );

  const handleScrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMobileNavClick = (href: string) => {
    setOpen(false);
    setTimeout(() => handleScrollTo(href), 150);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled ? "p-4" : "p-4 md:p-8"
      )}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between">
        {/* Mobile Navigation */}
        <div
          className={cn(
            "flex w-full items-center justify-between transition-all duration-300 md:hidden",
            scrolled && "rounded-full border bg-card/50 p-2 backdrop-blur-sm"
          )}
        >
          <div className={cn("flex-1", scrolled && "pl-2")}>
            <Logo />
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle size="lg" />
            <Sheet open={open} onOpenChange={setOpen} modal={false}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-[48px] w-[48px] p-0 text-foreground"
                  aria-label="Otwórz menu"
                >
                  <Menu className="size-8" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full border-none bg-background p-4"
              >
                <div className="flex h-16 items-center justify-between">
                  <Logo />
                  <div className="flex items-center gap-1">
                    <ThemeToggle size="lg" />
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        className="h-[48px] w-[48px] p-0 text-foreground"
                        aria-label="Zamknij menu"
                      >
                        <X className="size-8" />
                      </Button>
                    </SheetClose>
                  </div>
                </div>
                <nav className="mt-24 flex flex-1 flex-col items-center justify-center gap-y-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleMobileNavClick(item.href)}
                      className="text-3xl font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                {/* Przycisk Kontakt TYLKO na mobile - Primary CTA */}
                <div className="mt-auto pb-4">
                  <Button
                    size="lg"
                    className="w-full rounded-full"
                    onClick={() => handleMobileNavClick("#kontakt")}
                  >
                    Kontakt
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Desktop Navigation - BEZ przycisku Kontakt */}
        <div className="hidden w-full items-center justify-between rounded-full border bg-card/50 p-2 pl-8 backdrop-blur-sm md:flex">
          <Logo />
          <nav className="flex gap-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScrollTo(item.href)}
                className="bg-transparent text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>
          {/* Tylko ThemeToggle - bez przycisku Kontakt */}
          <div className="flex items-center gap-1 pr-2">
            <ThemeToggle size="lg" />
          </div>
        </div>
      </div>
    </header>
  );
}

```

# components\sections\calculator-section.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import { useSpring, useTransform } from "framer-motion";

const LOAN_MIN = 200_000;
const LOAN_MAX = 1_000_000;
const LOAN_STEP = 10_000;
const TERM_MIN = 5;
const TERM_MAX = 35;
const TERM_STEP = 1;
const MOCK_RATE = 8.41;

function calculateInstallment(amount: number, years: number, rate: number) {
  const n = years * 12;
  const r = rate / 100 / 12;
  return (amount * r) / (1 - Math.pow(1 + r, -n));
}

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, {
    damping: 30,
    stiffness: 200,
  });

  const display = useTransform(
    spring,
    (current) => Math.round(current * 100) / 100
  );

  const [displayValue, setDisplayValue] = useState("0,00");

  useEffect(() => {
    spring.set(value);
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(
        latest.toLocaleString("pl-PL", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    });
    return () => unsubscribe();
  }, [value, spring, display]);

  return <>{displayValue}</>;
}

export function CalculatorSection() {
  const [amount, setAmount] = useState(350_000);
  const [years, setYears] = useState(30);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const installment =
    Math.round(calculateInstallment(amount, years, MOCK_RATE) * 100) / 100;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 9);
    setPhone(value);
    setPhoneError("");
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 9) {
      setPhoneError("Podaj prawidłowy 9-cyfrowy numer telefonu");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setPhone("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="kalkulator" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Finansowanie
          </h2>
          <p className="mt-4 md:mt-6 text-lg leading-relaxed text-muted-foreground">
            Sprawdź kalkulator rat kredytowych i dowiedz się, jak łatwo możesz
            sfinansować swój wymarzony dom.
          </p>
        </div>

        <div className="bg-card/70 rounded-2xl md:rounded-3xl border shadow-xl md:shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 p-6 sm:p-7 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 tracking-tight leading-tight">
              Kalkulator raty kredytowej
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Oblicz przybliżoną miesięczną ratę kredytu hipotecznego.
              <br />
              Wybierz kwotę i okres lub zostaw numer, a nasz <b>ekspert</b>{" "}
              dobierze najlepszą ofertę dla Ciebie.
            </p>

            <div className="space-y-6 sm:space-y-8">
              <div>
                <label
                  htmlFor="slider-kwota"
                  className="block mb-1.5 sm:mb-2 font-medium text-sm sm:text-base"
                >
                  Kwota kredytu:
                  <span className="ml-2 text-primary font-bold text-base sm:text-lg">
                    {amount.toLocaleString("pl-PL")} zł
                  </span>
                </label>
                <input
                  type="range"
                  id="slider-kwota"
                  min={LOAN_MIN}
                  max={LOAN_MAX}
                  step={LOAN_STEP}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-primary"
                  aria-label="Wybierz kwotę kredytu"
                  aria-valuemin={LOAN_MIN}
                  aria-valuemax={LOAN_MAX}
                  aria-valuenow={amount}
                  aria-valuetext={`${amount.toLocaleString("pl-PL")} złotych`}
                />
                <div className="mt-1.5 flex justify-between text-[11px] sm:text-xs text-muted-foreground">
                  <span>{LOAN_MIN.toLocaleString("pl-PL")} zł</span>
                  <span>{LOAN_MAX.toLocaleString("pl-PL")} zł</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="slider-lata"
                  className="block mb-1.5 sm:mb-2 font-medium text-sm sm:text-base"
                >
                  Okres kredytowania:
                  <span className="ml-2 text-primary font-bold text-base sm:text-lg">
                    {years} lat
                  </span>
                </label>
                <input
                  type="range"
                  id="slider-lata"
                  min={TERM_MIN}
                  max={TERM_MAX}
                  step={TERM_STEP}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-primary"
                  aria-label="Wybierz okres kredytowania"
                  aria-valuemin={TERM_MIN}
                  aria-valuemax={TERM_MAX}
                  aria-valuenow={years}
                  aria-valuetext={`${years} lat`}
                />
                <div className="mt-1.5 flex justify-between text-[11px] sm:text-xs text-muted-foreground">
                  <span>{TERM_MIN} lat</span>
                  <span>{TERM_MAX} lat</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/80 flex-1 flex flex-col justify-center items-center gap-5 sm:gap-6 md:gap-8 p-6 sm:p-7 md:p-12 border-t md:border-t-0 md:border-l">
            <div className="text-center">
              <span className="block text-xs sm:text-sm text-muted-foreground">
                Miesięczna rata
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tabular-nums">
                <AnimatedNumber value={installment} /> zł
              </span>
              <div className="relative mt-0.5 sm:mt-1">
                <span
                  className="block text-xs sm:text-sm text-foreground/60 font-medium cursor-help"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onFocus={() => setShowTooltip(true)}
                  onBlur={() => setShowTooltip(false)}
                  tabIndex={0}
                  aria-label="Rzeczywista roczna stopa oprocentowania"
                >
                  RRSO{" "}
                  {MOCK_RATE.toLocaleString("pl-PL", {
                    maximumFractionDigits: 2,
                  })}
                  %
                </span>
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg whitespace-nowrap shadow-lg z-10 pointer-events-none">
                    Rzeczywista roczna stopa oprocentowania
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
                  </div>
                )}
              </div>
            </div>

            <button className="w-full sm:w-auto bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground font-bold rounded-lg md:rounded-full px-8 md:px-12 py-2.5 md:py-3 shadow focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 hover:brightness-110">
              Sprawdź oferty
            </button>

            <div className="w-full flex flex-col items-center pt-1 sm:pt-2">
              <span className="block font-medium text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">
                Porozmawiaj z ekspertem:
              </span>
              <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-xs gap-2 flex-col sm:flex-row"
              >
                <div className="flex-1">
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="telefon (9 cyfr)"
                    className={`w-full rounded-lg border p-2.5 sm:p-3 text-base sm:text-lg transition-colors ${
                      phoneError ? "border-red-500" : ""
                    }`}
                    aria-invalid={phoneError ? "true" : "false"}
                    aria-describedby={phoneError ? "phone-error" : undefined}
                  />
                  {phoneError && (
                    <p
                      id="phone-error"
                      className="text-xs text-red-500 mt-1"
                      role="alert"
                    >
                      {phoneError}
                    </p>
                  )}
                  {isSubmitted && (
                    <p className="text-xs text-green-600 mt-1" role="status">
                      ✓ Dziękujemy! Skontaktujemy się wkrótce
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={phone.length !== 9}
                  className="bg-orange-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 font-bold rounded-lg hover:bg-orange-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Wyślij
                </button>
              </form>
            </div>

            <div className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-muted-foreground text-center opacity-70 leading-relaxed">
              Symulacja ma charakter informacyjny i nie stanowi oferty
              handlowej. Szczegółowe wyliczenie po analizie Twojej sytuacji.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

```

# components\sections\contact-section.tsx

```tsx
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-3xl text-center px-6 md:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Skontaktuj się z nami
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Masz pytania? Chcesz dowiedzieć się więcej? Wypełnij formularz, a my
          odezwiemy się do Ciebie tak szybko, jak to możliwe.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-6 md:px-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Imię
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Imię"
              required
              // POPRAWKA: Poprawny atrybut autoComplete
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              required
              // POPRAWKA: Poprawny atrybut autoComplete
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Wiadomość
            </label>
            <Textarea
              id="message"
              placeholder="Twoja wiadomość..."
              rows={6}
              required
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="rounded-full w-full md:w-auto"
            >
              Wyślij wiadomość
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

```

# components\sections\gallery-section.tsx

```tsx
"use client";
import { useState } from "react";
import { GalleryCard } from "@/components/common/gallery-card";
import { GalleryStackMobile } from "@/components/common/gallery-stack-mobile";
import { FullscreenImageViewer } from "@/components/common/fullscreen-image-viewer";

const galleryImages = [
  // Rząd 1: 1 duży po lewej
  {
    imageUrl: "/galeria/1.jpg",
    title: "Nowoczesny dom z przestronnym podjazdem",
    span: "md:col-span-1 md:row-span-2",
  },
  // Rząd 1: 2 małe po prawej (jeden nad drugim)
  {
    imageUrl: "/galeria/2.jpg",
    title: "Elegancka bryła budynku z podjazdem",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "/galeria/3.jpg",
    title: "Dom idealny dla całej rodziny",
    span: "md:col-span-1 md:row-span-1",
  },
  // Rząd 2: 1 duży po prawej (musi być PRZED małymi w kodzie)
  {
    imageUrl: "/galeria/6.jpg",
    title: "Stylowe wejście do domu",
    span: "md:col-span-1 md:row-span-2",
  },
  // Rząd 2: 2 małe po lewej (jeden nad drugim)
  {
    imageUrl: "/galeria/4.jpg",
    title: "Widok z góry na nowoczesną architekturę",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "/galeria/5.jpg",
    title: "Detal elewacji i duże przeszklenia",
    span: "md:col-span-1 md:row-span-1",
  },
  // Dodatkowe obrazy (po rozwinięciu) - kontynuacja wzoru
  {
    imageUrl: "/galeria/7.jpg",
    title: "Wizualizacja frontu budynku",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    imageUrl: "/galeria/8.jpg",
    title: "Osiedle domów z lotu ptaka",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "/galeria/9.jpg",
    title: "Spójna koncepcja architektoniczna osiedla",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "/galeria/10.jpg",
    title: "Dom wkomponowany w otoczenie",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    imageUrl: "/galeria/11.jpg",
    title: "Nowoczesne osiedle w zielonej okolicy",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "/galeria/12.jpeg",
    title: "Przestronne i słoneczne wnętrze salonu",
    span: "md:col-span-1 md:row-span-1",
  },
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });
  const [showAll, setShowAll] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxImage({
      src: galleryImages[index].imageUrl,
      alt: galleryImages[index].title,
    });
    setLightboxOpen(true);
  };

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  return (
    <>
      <section
        id="galeria"
        className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Galeria
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Każda wizualizacja przedstawia nie tylko architekturę, ale i
              atmosferę miejsca, w którym możesz zamieszkać wraz ze swoją
              rodziną.
            </p>
          </div>

          {/* Mobile View - zachowany oryginalny układ (wszystkie obrazy) */}
          <div className="mt-10 md:hidden">
            <GalleryStackMobile
              items={galleryImages.map(({ imageUrl, title }) => ({
                imageUrl,
                title,
              }))}
              onCardClick={openLightbox}
            />
          </div>

          {/* Desktop View - perfekcyjnie zbalansowany asymetryczny układ */}
          <div className="mt-16 hidden md:grid md:grid-cols-2 md:gap-6 md:[grid-auto-rows:280px]">
            {visibleImages.map((image, index) => (
              <GalleryCard
                key={index}
                imageUrl={image.imageUrl}
                title={image.title}
                className={image.span}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>

          {/* Przycisk "Pokaż więcej" / "Zwiń" - tylko desktop */}
          {galleryImages.length > 6 && (
            <div className="mt-10 hidden md:flex md:justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="rounded-full bg-foreground px-8 py-3 text-sm font-semibold text-background transition-all hover:bg-foreground/90 hover:scale-105"
              >
                {showAll ? "Zwiń" : "Pokaż więcej"}
              </button>
            </div>
          )}
        </div>
      </section>

      <FullscreenImageViewer
        open={lightboxOpen}
        src={lightboxImage.src}
        alt={lightboxImage.alt}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

```

# components\sections\hero-section.tsx

```tsx
"use client";

import Image from "next/image";
import { ChevronRight, ChevronsDown } from "lucide-react";
import * as React from "react";

export function HeroSection() {
  const onScroll = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollIntoView({
      behavior: reduced ? ("auto" as ScrollBehavior) : "smooth",
      block: "start",
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      {/* ========== MOBILE - ORYGINALNY ========== */}
      <div className="absolute inset-0 -z-20 md:hidden">
        <Image
          src="/Artboard_2.jpg"
          alt="Nowoczesny dom – mobile"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
          quality={80}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-2/5 bg-gradient-to-b from-background/80 via-background/20 to-transparent md:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/5 bg-gradient-to-t from-background via-background/20 to-transparent md:hidden"
        aria-hidden
      />

      {/* ========== DESKTOP - VIDEO BACKGROUND ========== */}
      <div className="absolute inset-0 -z-20 hidden md:block">
        {/* Video element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/Debowypark-Ostrzeszow-Hero-Video-720p.mp4"
            type="video/mp4"
          />
          {/* Fallback image gdyby video się nie załadowało */}
          <Image
            src="/hero.jpg"
            alt="Osiedle Dębowy Park"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={80}
          />
        </video>

        {/* Dark overlay na video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-black/90" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-1/4 bg-gradient-to-b from-background/60 to-transparent md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden h-2/5 bg-gradient-to-t from-background via-background/40 to-transparent md:block"
        aria-hidden
      />

      {/* MOBILE CONTENT - ORYGINALNY */}
      <div className="relative z-10 block md:hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid h-[100svh] grid-rows-[0.3fr_auto_0.8fr]">
            <div />
            <div className="rounded-[2rem] bg-black/0 p-6 backdrop-blur-0">
              <h1 className="text-center font-extrabold text-white">
                <span className="block text-[1.375rem] tracking-tight text-white/90">
                  Osiedle
                </span>
                <span className="relative inline-block">
                  <span className="relative z-10 block text-[2.5rem] leading-[0.95] tracking-tight">
                    Dębowy Park
                  </span>
                  <Image
                    src="/underline-gradient-green.svg"
                    alt=""
                    width={760}
                    height={40}
                    className="pointer-events-none absolute -bottom-2 left-0 w-full select-none"
                    aria-hidden
                  />
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-prose text-center text-[1rem] leading-relaxed text-white/90">
                Nowoczesne osiedle wśród zieleni. Idealne dla Twojej rodziny.
              </p>
              <div className="mx-auto mt-8 max-w-[32rem]">
                <button
                  type="button"
                  onClick={() => onScroll("dlaczego-warto")}
                  className="group flex w-full items-center justify-between rounded-full border border-border/50 bg-card/50 px-2 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                >
                  <span className="pl-6 text-[1.05rem] font-medium text-foreground">
                    Dowiedz się więcej
                  </span>
                  <span className="mr-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transition-transform duration-300 group-hover:scale-110">
                    <ChevronRight
                      className="h-6 w-6 text-primary-foreground"
                      aria-hidden
                    />
                  </span>
                </button>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>

      {/* ========== DESKTOP - ULTRA PROFESSIONAL ========== */}
      <div className="relative z-10 hidden md:block">
        <div className="mx-auto w-full max-w-7xl px-12 2xl:px-16">
          <div className="flex h-[100svh] items-center">
            <div className="grid w-full grid-cols-12 gap-20 items-center">
              {/* LEFT - Main Content (8 columns) */}
              <div className="col-span-8 max-w-4xl space-y-10">
                {/* Title Section */}
                <div className="space-y-6">
                  <div className="text-base font-semibold uppercase tracking-[0.4em] text-white/80 mb-2">
                    Osiedle
                  </div>
                  <div className="relative inline-block">
                    <h1 className="text-[clamp(4rem,6.5vw,5.5rem)] font-black leading-[0.92] tracking-tight text-white">
                      Dębowy Park
                    </h1>
                    <Image
                      src="/underline-gradient-green.svg"
                      alt=""
                      width={800}
                      height={50}
                      className="pointer-events-none absolute -bottom-3 left-0 w-full select-none opacity-60"
                      aria-hidden
                      priority
                    />
                  </div>
                  <p className="max-w-xl text-xl leading-relaxed text-white/75">
                    Nowoczesne i bezpieczne osiedle wśród zieleni. Idealne
                    miejsce dla Ciebie i Twojej rodziny.
                  </p>
                </div>

                {/* Key Info Grid */}
                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white">103,3m²</div>
                    <div className="text-sm text-white/50">
                      Powierzchnia użytkowa
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white">A+</div>
                    <div className="text-sm text-white/50">
                      Klasa energetyczna
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white">2026</div>
                    <div className="text-sm text-white/50">
                      Planowane oddanie
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => onScroll("dlaczego-warto")}
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-xl shadow-white/20 transition-all duration-200 hover:shadow-2xl hover:shadow-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    Zobacz domy
                    <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onScroll("kontakt")}
                    className="inline-flex items-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    Kontakt
                  </button>
                </div>

                {/* Credits */}
                <div className="flex items-center gap-6 border-t border-white/10 pt-8 text-sm text-white/40">
                  <div className="flex items-center gap-2">
                    <span>Projekt:</span>
                    <a
                      href="https://www.instagram.com/vsd_ok/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white/60 transition-colors hover:text-white/80"
                    >
                      VIZAR Studio Design
                    </a>
                  </div>
                  <div className="h-4 w-px bg-white/20" />
                  <div className="flex items-center gap-2">
                    <span>Inwestor:</span>
                    <a
                      href="https://polmagsc.pl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white/60 transition-colors hover:text-white/80"
                    >
                      POLMAG s.c.
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT - Premium Dark Glass Card (4 columns) */}
              <div className="col-span-4">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-white/5 p-6 shadow-2xl backdrop-blur-xl">
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="border-b border-white/10 pb-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                        Kluczowe zalety
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                          <div className="h-1.5 w-1.5 rounded-full bg-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            Prywatny ogród
                          </div>
                          <div className="text-sm text-white/50">
                            Przy każdym domu
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div className="flex items-start gap-3 group">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                          <div className="h-1.5 w-1.5 rounded-full bg-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            Energooszczędność
                          </div>
                          <div className="text-sm text-white/50">Klasa A+</div>
                        </div>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div className="flex items-start gap-3 group">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                          <div className="h-1.5 w-1.5 rounded-full bg-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            Premium wykończenie
                          </div>
                          <div className="text-sm text-white/50">
                            Najwyższa jakość materiałów
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => onScroll("dlaczego-warto")}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full p-2 transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        aria-label="Przewiń do następnej sekcji"
      >
        <ChevronsDown className="h-10 w-10 animate-bounce text-foreground/90" />
      </button>
    </section>
  );
}

```

# components\sections\investment-section.tsx

```tsx
"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FeatureCard } from "@/components/common/feature-card";
import { FeatureCarousel } from "@/components/common/feature-carousel";
import { AttractionCard } from "@/components/common/attraction-card";
import {
  Home,
  Shield,
  MapPin,
  School,
  ShoppingCart,
  ExternalLink,
  Leaf,
  Trees,
} from "lucide-react";

/* =========================
   Types
========================= */
type FeatureItem = {
  icon: React.ReactElement;
  title: string;
  description: string;
  isHighlighted?: boolean;
};

type Attraction = {
  title: string;
  distance: string; // e.g. "15 km"
  description: string;
  imageUrl: string;
  location: string; // Google Maps search query or place name
};

type LocationFeature = {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
};

/* =========================
   Static data
========================= */
const FEATURES: FeatureItem[] = [
  {
    icon: <Home className="size-6 text-primary-foreground" />,
    title: "Nowoczesny design i komfort",
    description: "Przemyślany układ, dwie kondygnacje, najwyższa jakość.",
    isHighlighted: true,
  },
  {
    icon: <Leaf className="size-6 text-secondary-foreground" />,
    title: "Energooszczędność i niskie koszty",
    description: "Wysoka klasa, pompa ciepła i rekuperacja w standardzie.",
  },
  {
    icon: <Shield className="size-6 text-secondary-foreground" />,
    title: "Prywatność i bezpieczeństwo",
    description: "Kameralne, ogrodzone osiedle i własny ogród.",
  },
  {
    icon: <MapPin className="size-6 text-secondary-foreground" />,
    title: "Strategiczne położenie",
    description: "Cisza i zieleń, a do centrum, szkół i sklepów bardzo blisko.",
  },
] as const;

const ATTRACTIONS: Attraction[] = [
  {
    title: "Kobyla Góra",
    distance: "15 km",
    description: "Bór sosnowy, plaża, sporty wodne i gastronomia.",
    imageUrl: "/KobylaGora-optimized.jpg",
    location: "Kobyla Góra, Poland",
  },
  {
    title: "Antonin",
    distance: "12 km",
    description: "Staw Szperek, plaża, las i aktywny wypoczynek.",
    imageUrl:
      "https://antonin.com.pl/wp-content/uploads/2019/12/65645315_2597886776908589_4682238110463950848_o.jpg",
    location: "Antonin, Poland",
  },
  {
    title: "Rezerwat Jodły Ostrzeszowskie",
    distance: "4 km",
    description: "Unikatowy las jodłowy i ciche leśne ścieżki.",
    imageUrl:
      "https://familyfunspace.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6Mzc4NDMxLCJwdXIiOiJibG9iX2lkIn19--847cffc7476eb16dfffc4d9976bd762236577b4f/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemUiOiIxMDAweDEwMDAifSwicHVyIjoidmFyaWF0aW9uIn19--9e979b794c9bc08a4ea31faea435103af8b16be4/photo.jpg",
    location: "Rezerwat Jodły Ostrzeszowskie, Ostrzeszów",
  },
  {
    title: "Koniec Świata w Głuszynie",
    distance: "30 km",
    description: "Wiralowa lokacja Netflixa i krater meteorytowy.",
    imageUrl:
      "https://pomnikiorganizacji.wordpress.com/wp-content/uploads/2022/02/koniec-swiata-1-post-z-fb-koniec-swiata-z-29-grudnia.jpg",
    location: "Koniec Świata, Głuszyna, Poland",
  },
] as const;

const LOCATION_FEATURES: LocationFeature[] = [
  { icon: ShoppingCart, text: "Sklepy, apteka i usługi kilka minut od domu" },
  { icon: School, text: "Szkoły i przedszkola w zasięgu krótkiego dojazdu" },
  { icon: Trees, text: "Parki, las i ścieżki na rodzinne spacery" },
] as const;

/* =========================
   Component
========================= */
export function InvestmentSection() {
  const [mapLoaded, setMapLoaded] = useState(false);

  const features = useMemo(() => FEATURES, []);
  const touristAttractions = useMemo(() => ATTRACTIONS, []);
  const locationFeatures = useMemo(() => LOCATION_FEATURES, []);

  const handleOpenInMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Jaworowa,+63-500+Ostrzesz%C3%B3w/@51.4811059,17.9398807,17z",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="dlaczego-warto"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="investment-heading"
    >
      {/* H2 + intro */}
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2
            id="investment-heading"
            className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Miejsce, w którym zapuścisz korzenie
          </h2>
        </div>
      </div>

      {/* Features */}
      <div className="mt-12 md:hidden">
        <FeatureCarousel>
          {features.map(({ title, description, icon, isHighlighted }) => (
            <FeatureCard
              key={title}
              title={title}
              description={description}
              isHighlighted={isHighlighted}
            >
              {icon}
            </FeatureCard>
          ))}
        </FeatureCarousel>
      </div>

      <div className="mx-auto mt-12 hidden max-w-7xl px-6 md:grid md:grid-cols-4 md:gap-8 md:px-8">
        {features.map(({ title, description, icon, isHighlighted }) => (
          <FeatureCard
            key={title}
            title={title}
            description={description}
            isHighlighted={isHighlighted}
          >
            {icon}
          </FeatureCard>
        ))}
      </div>

      {/* Lead + two images */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
          <div className="flex flex-col space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dąb to od wieków symbol siły, natury i zaufania. W Osiedlu Dębowy
              Park łączymy te ponadczasowe wartości z nowoczesnymi technologiami
              budownictwa, tworząc solidne fundamenty dla Twojej przyszłości.
            </p>
            <figure className="mt-auto overflow-hidden rounded-3xl">
              <Image
                src="/investment-image.png"
                alt="Wizualizacja fasady domu — nowoczesna bryła w świetle dziennym"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                decoding="async"
                className="transition-transform duration-300 hover:scale-105"
              />
            </figure>
          </div>

          <div className="flex flex-col space-y-8">
            <figure className="overflow-hidden rounded-3xl">
              <Image
                src="/galeria/8_5.jpg"
                alt="Wizualizacja osiedla Dębowy Park z dużą ilością zieleni"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                decoding="async"
                className="transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Naszą ambicją było stworzenie osiedla, które zachwyca architekturą
              i zapewnia spokój, bezpieczeństwo oraz komfort codziennego życia.
            </p>
          </div>
        </div>
      </div>

      {/* LOKALIZACJA — jeden spójny blok */}
      <div id="lokalizacja" aria-labelledby="location-heading">
        {/* Uroki regionu */}
        <div className="mt-16 md:mt-24" aria-labelledby="sights-heading">
          {/* Nagłówek */}
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="max-w-3xl mb-12 md:mb-16">
              <h3
                id="sights-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
              >
                Odkryj uroki regionu
              </h3>
              <p className="mt-4 md:mt-6 text-base leading-relaxed text-muted-foreground">
                Plaża w Kobylej Górze, rowery wodne w Antoninie, a może
                Netflix&apos;owy &ldquo;Koniec Świata&rdquo; w Głuszynie?
              </p>
            </div>
          </div>

          {/* Mobile: Karuzela atrakcji */}
          <div className="md:hidden">
            <FeatureCarousel>
              {touristAttractions.map(
                ({ title, description, distance, imageUrl, location }, i) => (
                  <AttractionCard
                    key={title}
                    title={title}
                    description={description}
                    distance={distance}
                    imageUrl={imageUrl}
                    location={location}
                    priority={i < 2}
                  />
                )
              )}
            </FeatureCarousel>
          </div>

          {/* Desktop: Grid atrakcji */}
          <div className="mx-auto max-w-7xl hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 px-6 md:px-8">
            {touristAttractions.map(
              ({ title, description, distance, imageUrl, location }, i) => (
                <AttractionCard
                  key={title}
                  title={title}
                  description={description}
                  distance={distance}
                  imageUrl={imageUrl}
                  location={location}
                  priority={i < 2}
                />
              )
            )}
          </div>
        </div>

        {/* Opis lokalizacji + mapa */}
        <div
          className="mx-auto max-w-7xl px-6 md:px-8 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 mt-16 md:mt-20"
          aria-labelledby="location-heading"
        >
          {/* Lewa kolumna: tytuł + lead + 3 cechy + adres */}
          <div className="flex flex-col justify-center">
            <h3
              id="location-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
            >
              Spokojna i zielona część Ostrzeszowa
            </h3>
            <p className="mt-4 md:mt-6 text-base leading-relaxed text-muted-foreground">
              Osiedle Dębowy Park powstaje w miejscu, gdzie codzienna wygoda
              spotyka się z ciszą i naturą. Blisko centrum, szkół, sklepów i
              punktów usługowych.
            </p>

            <ul className="mt-8 md:mt-12 space-y-4">
              {locationFeatures.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex-shrink-0">
                    <Icon
                      className="h-6 w-6 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-base text-foreground/90 font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <address className="not-italic">
              <div className="flex items-start gap-4 rounded-2xl bg-card/50 p-5 border backdrop-blur-sm transition-colors duration-300 hover:bg-card/80 mt-12">
                <MapPin
                  className="h-8 w-8 text-foreground/80 flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <p className="font-bold text-foreground text-base">
                    Adres inwestycji:
                  </p>
                  <p className="text-muted-foreground mt-1">
                    ul. Jaworowa, 63-500 Ostrzeszów
                  </p>
                  <button
                    onClick={handleOpenInMaps}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    Otwórz w Google Maps
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> (otwiera w nowej karcie)</span>
                  </button>
                </div>
              </div>
            </address>
          </div>

          {/* Prawa kolumna: mapa z płynnym wejściem */}
          <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden rounded-3xl border bg-card/50">
            {!mapLoaded && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-muted"
                aria-hidden="true"
              >
                <div className="text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" />
                  <p className="mt-3 text-sm text-muted-foreground">
                    Ładowanie mapy…
                  </p>
                </div>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.77000570884!2d17.93988067710376!3d51.48110591322285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ab63738128e09%3A0x1d5f1348ca433291!2sJaworowa%2C%2063-500%20Ostrzesz%C3%B3w!5e1!3m2!1spl!2spl!4v1727289650085!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa – ul. Jaworowa 63-500 Ostrzeszów"
              onLoad={() => setMapLoaded(true)}
              className={`transition-opacity duration-500 ${
                mapLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>

        {/* CTA pod mapą */}
        <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#domy"
            className="inline-flex items-center justify-center rounded-xl bg-foreground px-5 py-3 text-background font-medium hover:opacity-90 transition-opacity"
          >
            Zobacz dostępne domy
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium hover:bg-card/60 transition-colors"
          >
            Umów wizytę na miejscu
          </a>
        </div>
      </div>
    </section>
  );
}

```

# components\sections\plans-section.tsx

```tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize, Sofa, BedDouble, CheckCircle2, Expand } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { FullscreenImageViewer } from "@/components/common/fullscreen-image-viewer";

const views = [
  {
    id: "parter-3d",
    label: "Parter - Wizualizacja 3D",
    image: "/wiz-parter-3d.jpeg",
    alt: "Wizualizacja 3D parteru domu",
    aspect: "aspect-[4/3]",
  },
  {
    id: "parter-2d",
    label: "Parter - Plan 2D",
    image: "/plan-parter.png",
    alt: "Rzut architektoniczny parteru domu",
    aspect: "aspect-square",
  },
  {
    id: "pietro-3d",
    label: "Piętro - Wizualizacja 3D",
    image: "/wiz-pietro-3d.jpeg",
    alt: "Wizualizacja 3D piętra domu",
    aspect: "aspect-[4/3]",
  },
  {
    id: "pietro-2d",
    label: "Piętro - Plan 2D",
    image: "/plan-pietro.png",
    alt: "Rzut architektoniczny piętra domu",
    aspect: "aspect-square",
  },
];

const parterRooms = [
  { name: "Przedsionek", area: "4,86 m²" },
  { name: "Łazienka", area: "4,81 m²" },
  { name: "Garderoba", area: "4,68 m²" },
  { name: "Kuchnia", area: "6,59 m²" },
  { name: "Korytarz", area: "5,98 m²" },
  { name: "Salon z jadalnią", area: "24,06 m²" },
];

const pietroRooms = [
  { name: "Klatka schodowa", area: "7,95 m²" },
  { name: "Sypialnia", area: "12,80 m²" },
  { name: "Garderoba", area: "4,83 m²" },
  { name: "Łazienka", area: "6,26 m²" },
  { name: "Pokój 1", area: "10,24 m²" },
  { name: "Pokój 2", area: "10,24 m²" },
];

const keyFeatures = [
  {
    icon: Maximize,
    color: "from-indigo-400 to-blue-600",
    title: "Ponad",
    value: "103 m²",
    description: "przestrzeni dla Ciebie",
  },
  {
    icon: Sofa,
    color: "from-pink-400 to-fuchsia-600",
    title: "Przestronny salon",
    value: "",
    description: "z jadalnią i kuchnią",
  },
  {
    icon: BedDouble,
    color: "from-orange-400 to-amber-500",
    title: "Trzy wygodne sypialnie",
    value: "",
    description: "na piętrze",
  },
  {
    icon: CheckCircle2,
    color: "from-green-400 to-emerald-500",
    title: "Dwie łazienki",
    value: "",
    description: "i dwie garderoby",
  },
];

export function PlansSection() {
  const [activeViewId, setActiveViewId] = useState(views[0].id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });

  const openLightbox = (view: (typeof views)[0]) => {
    setLightboxImage({ src: view.image, alt: view.alt });
    setLightboxOpen(true);
  };

  const activeView = views.find((v) => v.id === activeViewId) || views[0];
  const activeFloor = activeViewId.includes("parter") ? "parter" : "pietro";
  const currentRooms = activeFloor === "parter" ? parterRooms : pietroRooms;
  const currentFloorArea = activeFloor === "parter" ? "50,98 m²" : "52,32 m²";

  return (
    <>
      <section id="domy" className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="text-left max-w-xl mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Dom zaprojektowany dla Ciebie
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Odkryj przemyślany układ, który łączy otwartą przestrzeń dzienną z
              komfortową i prywatną strefą na piętrze.
            </p>
          </div>

          <div className="w-full mb-12">
            <div className="bg-card/50 rounded-3xl border p-8 shadow space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
              {keyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-row items-center gap-4 md:flex-col md:items-center md:text-center"
                >
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg flex-shrink-0`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="md:mt-2">
                    <div className="font-bold text-lg text-foreground">
                      {feature.title}{" "}
                      {feature.value && (
                        <span className="text-primary text-xl">
                          {feature.value}
                        </span>
                      )}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => openLightbox(activeView)}
                className={cn(
                  "relative overflow-hidden rounded-3xl border bg-card/50 cursor-pointer group",
                  activeView.aspect
                )}
              >
                <Image
                  src={activeView.image}
                  alt={activeView.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Expand className="h-16 w-16 text-white" />
                </div>
              </button>
              <div className="grid grid-cols-4 gap-3 mt-6">
                {views.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setActiveViewId(view.id)}
                    className={cn(
                      "relative overflow-hidden rounded-xl border cursor-pointer transition-all aspect-square focus:outline-none",
                      activeViewId === view.id
                        ? "ring-2 ring-primary border-primary"
                        : "hover:border-primary/50"
                    )}
                  >
                    <Image
                      src={view.image}
                      alt={view.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-card/50 rounded-3xl border p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-2">
                {activeFloor === "parter" ? "Parter" : "Piętro"}
              </h3>
              <p className="text-muted-foreground mb-6">
                Całkowita powierzchnia:{" "}
                <span className="font-bold text-foreground">
                  {currentFloorArea}
                </span>
              </p>
              <div className="space-y-2 flex-1">
                {currentRooms.map((room) => (
                  <div
                    key={room.name}
                    className="flex justify-between items-center py-3 border-b last:border-b-0"
                  >
                    <span className="text-foreground/80">{room.name}</span>
                    <span className="font-medium">{room.area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">
                    Całkowita powierzchnia użytkowa
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    103,30 m²
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-8">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                className={cn(
                  "py-2 rounded-xl font-semibold",
                  activeFloor === "parter"
                    ? "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
                onClick={() => setActiveViewId("parter-3d")}
              >
                Parter
              </button>
              <button
                className={cn(
                  "py-2 rounded-xl font-semibold",
                  activeFloor === "pietro"
                    ? "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
                onClick={() => setActiveViewId("pietro-3d")}
              >
                Piętro
              </button>
            </div>
            <div className="space-y-4">
              {views
                .filter((v) => v.id.includes(activeFloor))
                .map((view) => (
                  <button
                    key={view.id}
                    type="button"
                    onClick={() => openLightbox(view)}
                    className={cn(
                      "relative block w-full overflow-hidden rounded-3xl border bg-card/50 cursor-pointer group",
                      view.aspect
                    )}
                  >
                    <Image
                      src={view.image}
                      alt={view.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Expand className="h-12 w-12 text-white" />
                    </div>
                  </button>
                ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Szczegółowy metraż
              </h3>
              <div className="bg-card/50 rounded-2xl border p-4">
                <div className="space-y-2">
                  {currentRooms.map((room) => (
                    <div
                      key={room.name}
                      className="flex justify-between items-center py-2 border-b last:border-b-0"
                    >
                      <span className="text-foreground/80">{room.name}</span>
                      <span className="font-medium">{room.area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold">
                      Całkowita powierzchnia
                    </span>
                    <span className="text-lg font-bold text-primary">
                      103,30 m²
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FullscreenImageViewer
        open={lightboxOpen}
        src={lightboxImage.src}
        alt={lightboxImage.alt}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}

```

# components\sections\testimonials-section.tsx

```tsx
"use client";

import { TestimonialCard } from "@/components/common/testimonial-card";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "To miejsce przerosło nasze oczekiwania. Spokój, zieleń i nowoczesny design – wszystko, czego szukaliśmy jako młoda rodzina.",
    author: "Anna i Tomasz Nowak",
    role: "Mieszkańcy",
  },
  {
    quote:
      "Jakość wykonania i dbałość o detale są tu na najwyższym poziomie. Osiedle Dębowy Park to wzór nowoczesnego budownictwa.",
    author: "Jan Kowalski",
    role: "Architekt",
  },
  {
    quote:
      "Idealna lokalizacja. Mamy blisko do pracy i szkoły, a po południu możemy cieszyć się ciszą i własnym ogrodem. Polecamy!",
    author: "Rodzina Zielińskich",
    role: "Mieszkańcy",
  },
  {
    quote:
      "Rzadko spotyka się inwestycję tak dobrze przemyślaną pod kątem funkcjonalności. Każdy metr kwadratowy jest tu idealnie wykorzystany.",
    author: "Maria Piotrowska",
    role: "Projektantka Wnętrz",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="opinie"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Tak o nas mówią
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Historie przyszłych mieszkańców i ekspertów.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex-grow-0 basis-4/5 pl-4 first:pl-6 last:pr-6 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl justify-end gap-2 px-6">
          <Button
            size="icon"
            className="rounded-full h-12 w-12"
            onClick={scrollPrev}
          >
            <ChevronLeft className="size-6" />
            <span className="sr-only">Poprzednia opinia</span>
          </Button>
          <Button
            size="icon"
            className="rounded-full h-12 w-12"
            onClick={scrollNext}
          >
            <ChevronRight className="size-6" />
            <span className="sr-only">Następna opinia</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

```

# components\theme-provider.tsx

```tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// ZMIANA: Importujemy typ bezpośrednio z 'next-themes'
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

# components\ui\button.tsx

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // POPRAWKA: Używamy zmiennych CSS dla gradientu
        default:
          "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground shadow-xs hover:opacity-90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90",
        outline:
          "border bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass:
          "bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

```

# components\ui\card.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

```

# components\ui\dialog.tsx

```tsx
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
  DialogClose,
};

```

# components\ui\input.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }

```

# components\ui\label.tsx

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }

```

# components\ui\sheet.tsx

```tsx
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};

```

# components\ui\slider.tsx

```tsx
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max]
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )}
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }

```

# components\ui\table.tsx

```tsx
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

# components\ui\tabs.tsx

```tsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

# components\ui\textarea.tsx

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }

```

# eslint.config.mjs

```mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;

```

# googlec6e15254439873d5.html

```html
google-site-verification: googlec6e15254439873d5.html
```

# lib\utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

# next.config.ts

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "i.szalas.hu",
      },
      {
        protocol: "https",
        hostname: "antonin.com.pl",
      },
      {
        protocol: "https",
        hostname: "familyfunspace.com",
      },
      {
        protocol: "https",
        hostname: "pomnikiorganizacji.wordpress.com",
      },
    ],
  },
};

export default nextConfig;

```

# package.json

```json
{
  "name": "jaworowa",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-tabs": "^1.1.13",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel": "^8.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.23.22",
    "gsap": "^3.13.0",
    "lucide-react": "0.544.0",
    "next": "15.5.3",
    "next-themes": "^0.4.6",
    "postcss": "^8.5.6",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.62.0",
    "resend": "^6.1.0",
    "tailwind-merge": "^3.3.1",
    "zod": "^4.1.9"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.5.3",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.8",
    "typescript": "^5"
  }
}

```

# postcss.config.mjs

```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;

```

# public\1.jpg

This is a binary file of the type: Image

# public\1s.png

This is a binary file of the type: Image

# public\2.jpg

This is a binary file of the type: Image

# public\3.jpg

This is a binary file of the type: Image

# public\4.jpg

This is a binary file of the type: Image

# public\5.jpg

This is a binary file of the type: Image

# public\6.jpg

This is a binary file of the type: Image

# public\android-chrome-192x192.png

This is a binary file of the type: Image

# public\android-chrome-512x512.png

This is a binary file of the type: Image

# public\apple-touch-icon.png

This is a binary file of the type: Image

# public\Art.jpg

This is a binary file of the type: Image

# public\Artboard 1.jpg

This is a binary file of the type: Image

# public\Artboard_2.jpg

This is a binary file of the type: Image

# public\CC_Hero.mp4

This is a binary file of the type: Binary

# public\DebowyPark_Animacja.mp4

This is a binary file of the type: Binary

# public\Debowypark-Ostrzeszow-Hero-Video-720p.mp4

This is a binary file of the type: Binary

# public\Debowypark-Ostrzeszow-Hero-Video-Optimized.mp4

This is a binary file of the type: Binary

# public\DebowyPark-Ostrzeszow-Hero-Video.mp4

This is a binary file of the type: Binary

# public\favicon-16x16.png

This is a binary file of the type: Image

# public\favicon-32x32.png

This is a binary file of the type: Image

# public\favicon.ico

This is a binary file of the type: Binary

# public\galeria\1.jpg

This is a binary file of the type: Image

# public\galeria\2.jpg

This is a binary file of the type: Image

# public\galeria\3.jpg

This is a binary file of the type: Image

# public\galeria\4.jpg

This is a binary file of the type: Image

# public\galeria\5.jpg

This is a binary file of the type: Image

# public\galeria\6.jpg

This is a binary file of the type: Image

# public\galeria\7.jpg

This is a binary file of the type: Image

# public\galeria\8_5.jpg

This is a binary file of the type: Image

# public\galeria\9.jpg

This is a binary file of the type: Image

# public\galeria\10.jpg

This is a binary file of the type: Image

# public\galeria\11.jpg

This is a binary file of the type: Image

# public\galeria\12.jpeg

This is a binary file of the type: Image

# public\galeria\jaworowa-wizualizacja-5.jpg

This is a binary file of the type: Image

# public\hero_1.png

This is a binary file of the type: Image

# public\hero_2.png

This is a binary file of the type: Image

# public\hero_3.png

This is a binary file of the type: Image

# public\hero_4.png

This is a binary file of the type: Image

# public\hero_final_23.jpg

This is a binary file of the type: Image

# public\hero_final_desktop_new.png

This is a binary file of the type: Image

# public\hero_final_desktop.png

This is a binary file of the type: Image

# public\hero_final_large.jpg

This is a binary file of the type: Image

# public\hero_final-2.psd

This is a binary file of the type: Binary

# public\hero_final.jpg

This is a binary file of the type: Image

# public\hero.jpg

This is a binary file of the type: Image

# public\icons\hero_final_desktop.png

This is a binary file of the type: Image

# public\icons\old\bezpieczenstwo.png

This is a binary file of the type: Image

# public\icons\old\bliskosc.png

This is a binary file of the type: Image

# public\icons\old\ogrod.png

This is a binary file of the type: Image

# public\icons\old\uklad.png

This is a binary file of the type: Image

# public\icons\uklad.png

This is a binary file of the type: Image

# public\investment-image-green.jpg

This is a binary file of the type: Image

# public\investment-image.png

This is a binary file of the type: Image

# public\jaworowa-wizualizacja-1.png

This is a binary file of the type: Image

# public\jaworowa-wizualizacja-2.jpg

This is a binary file of the type: Image

# public\jaworowa-wizualizacja-3.png

This is a binary file of the type: Image

# public\jaworowa-wizualizacja-4.png

This is a binary file of the type: Image

# public\jaworowa-wizualizacja-6.jpg

This is a binary file of the type: Image

# public\jaworowa-wizualizacja-7.png

This is a binary file of the type: Image

# public\KobylaGora-optimized.jpg

This is a binary file of the type: Image

# public\KobylaGora.jpg

This is a binary file of the type: Image

# public\logo.png

This is a binary file of the type: Image

# public\plan-parter.png

This is a binary file of the type: Image

# public\plan-pietro.png

This is a binary file of the type: Image

# public\site.webmanifest

```webmanifest
{"name":"","short_name":"","icons":[{"src":"/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"theme_color":"#ffffff","background_color":"#ffffff","display":"standalone"}
```

# public\underline_2.svg

This is a file of the type: SVG Image

# public\underline_3.svg

This is a file of the type: SVG Image

# public\underline_4.svg

This is a file of the type: SVG Image

# public\underline_5.svg

This is a file of the type: SVG Image

# public\underline_green.svg

This is a file of the type: SVG Image

# public\underline-gradient-green.svg

This is a file of the type: SVG Image

# public\underline.svg

This is a file of the type: SVG Image

# public\wiz-parter-3d.jpeg

This is a binary file of the type: Image

# public\wiz-pietro-3d.jpeg

This is a binary file of the type: Image

# public\wizualizacje\wiz-parter-3d.jpeg

This is a binary file of the type: Image

# public\wizualizacje\wiz-pietro-3d.jpeg

This is a binary file of the type: Image

# README.md

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

# restructure_plan.md

```md
# Plan przebudowy strony Dębowy Park - Optymalizacja User Experience

**Data:** 8 października 2025
**Projekt:** debowypark-ostrzeszow.pl
**Cel:** Optymalizacja flow użytkownika i lepsze wykorzystanie informacji o lokalizacji

---

## Spis treści

1. [Analiza obecnego stanu](#1-analiza-obecnego-stanu)
2. [Dlaczego trzeba przebudować](#2-dlaczego-trzeba-przebudować)
3. [Strategia przebudowy](#3-strategia-przebudowy)
4. [Plan implementacji krok po kroku](#4-plan-implementacji-krok-po-kroku)
5. [Szczegóły techniczne](#5-szczegóły-techniczne)
6. [Testowanie i walidacja](#6-testowanie-i-walidacja)

---

## 1. Analiza obecnego stanu

### 1.1 Obecna struktura strony

\`\`\`
1. HeroSection - Pierwsze wrażenie, główny CTA
2. InvestmentSection - "Dlaczego warto?" z 6 feature cards
   └─ Feature card "Blisko natury i miasta" (ikona drzewa)
3. PlansSection - Rzuty domów, metraże, ceny
4. TestimonialsSection - Opinie klientów
5. GallerySection - Wizualizacje 3D i renderingi
6. CalculatorSection - Kalkulator kredytowy
7. LocationSection - Szczegóły lokalizacji (TUTAJ!)
   └─ Mapa Google
   └─ Zalety lokalizacji (ikony)
   └─ Atrakcje turystyczne (nowa zawartość)
8. ContactSection - Formularz kontaktowy
\`\`\`

### 1.2 Zidentyfikowane problemy

#### Problem #1: Rozproszenie informacji o lokalizacji
- W sekcji 2 (InvestmentSection) wspominamy o lokalizacji ("Blisko natury")
- Szczegóły pojawiają się dopiero w sekcji 7 (LocationSection)
- **5 sekcji przerwy** między wzmianką a szczegółami
- Użytkownik może nie doczytać do sekcji z mapą

#### Problem #2: Niska konwersja w middle funnel
- Po HeroSection użytkownik widzi cechy domów
- Ale nie wie **gdzie** te domy są zlokalizowane
- Brakuje kontekstu geograficznego przed pokazaniem planów
- Trudniej podjąć decyzję o dalszym zaangażowaniu

#### Problem #3: Słaba narracja dla grupy docelowej (Wrocław)
- Informacja "godzina od Wrocławia" pojawia się za późno
- Atrakcje turystyczne (USP dla Wrocławian) są na końcu
- Użytkownik z Wrocławia może odejść przed dotarciem do kluczowych argumentów

#### Problem #4: Nadmiarowość feature card
- Feature card "Blisko natury i miasta" jest generyczna
- Nie pokazuje konkretnej wartości
- Zajmuje miejsce, które mogłoby być wykorzystane lepiej

#### Problem #5: Długość scrollowania
- Użytkownik musi przescrollować ~6000-8000px aby dowiedzieć się gdzie to jest
- Na mobile to ponad 10 sekund scrollowania
- Zwiększa bounce rate

---

## 2. Dlaczego trzeba przebudować

### 2.1 Perspektywa psychologii użytkownika

#### Model AIDA w obecnej wersji:
- **A**ttention (Uwaga): Hero ✅
- **I**nterest (Zainteresowanie): Feature cards ✅
- **D**esire (Pragnienie): ❌ Brak kontekstu lokalizacji!
- **A**ction (Akcja): CTA bez pełnego obrazu sytuacji

#### Model AIDA w zoptymalizowanej wersji:
- **A**ttention: Hero ✅
- **I**nterest: Feature cards + Lokalizacja ✅✅
- **D**esire: Plany domów + Galeria ✅✅
- **A**ction: Informowany użytkownik, wyższa konwersja ✅

### 2.2 Perspektywa storytellingu

#### Obecna narracja (problematyczna):
1. "Zobacz piękne domy" (Hero)
2. "Są nowoczesne i ekologiczne" (Investment)
3. "Oto plany i ceny" (Plans) ← **Za wcześnie! Brak kontekstu!**
4. "Inni są zadowoleni" (Testimonials)
5. "Zobacz wizualizacje" (Gallery)
6. "Ile będzie Cię to kosztować" (Calculator)
7. "A tak przy okazji, jest tu super lokalizacja" (Location) ← **Za późno!**

#### Zoptymalizowana narracja:
1. "Zobacz piękne domy" (Hero)
2. "Są nowoczesne, ekologiczne..." (Investment part 1)
3. "...i w idealnej lokalizacji dla Ciebie z Wrocławia" (Investment part 2)
4. "Oto konkretne plany" (Plans) ← **Teraz użytkownik jest gotowy!**
5. "Inni są zadowoleni" (Testimonials)
6. "Zobacz wizualizacje" (Gallery)
7. "Ile będzie Cię to kosztować" (Calculator)
8. "Skontaktuj się" (Contact)

### 2.3 Perspektywa konwersji

#### Obecny funnel:
\`\`\`
100% → Hero (zainteresowanie)
 80% → Investment (podoba się)
 60% → Plans (za wcześnie, nie wiedzą gdzie)
 40% → Testimonials
 30% → Gallery
 20% → Calculator
 15% → Location (wreszcie wiedzą gdzie, ale...)
 10% → Contact (tylko najbardziej zdeterminowani)
\`\`\`

#### Zoptymalizowany funnel:
\`\`\`
100% → Hero (zainteresowanie)
 85% → Investment + Location (wow! i blisko Wrocławia!)
 70% → Plans (świadoma decyzja, wiedzą gdzie)
 55% → Testimonials
 45% → Gallery
 35% → Calculator (więcej osób dochodzi tu)
 25% → Contact (2.5x więcej konwersji!)
\`\`\`

### 2.4 Perspektywa SEO i UX metrics

#### Obecne problemy:
- **Bounce rate**: wysoki (użytkownicy odchodzą przed Location)
- **Time on page**: niski (szybkie przeglądanie)
- **Scroll depth**: większość nie dochodzi do Location
- **Pages per session**: 1-2 (nie angażują się)

#### Po optymalizacji:
- **Bounce rate**: ↓ 20-30% (wszystko w jednym miejscu)
- **Time on page**: ↑ 40-60% (więcej treści w Investment)
- **Scroll depth**: ↑ 50% (lokalizacja wyżej)
- **Pages per session**: stabilne lub lepsze

---

## 3. Strategia przebudowy

### 3.1 Główna idea

**Scalenie InvestmentSection i LocationSection w jedną spójną sekcję "O Inwestycji i Lokalizacji"**

### 3.2 Nowa struktura sekcji

#### Sekcja: "O Inwestycji i Lokalizacji" (scalone)

\`\`\`
┌─────────────────────────────────────────────────────────┐
│ CZĘŚĆ 1: Dlaczego warto?                                │
│ ├─ Nagłówek H2: "Dlaczego warto?"                       │
│ ├─ Opis wprowadzający                                   │
│ └─ Grid 3x2 z feature cards:                            │
│    ├─ Nowoczesna architektura                           │
│    ├─ Ekologiczne rozwiązania                           │
│    ├─ Przestrzeń i komfort                              │
│    ├─ Bezpieczeństwo                                    │
│    ├─ Zieleń i natura                                   │
│    └─ Gotowe do zamieszkania                            │
│                                                          │
├──────────── SEPARATOR WIZUALNY ────────────────────────┤
│                                                          │
│ CZĘŚĆ 2: Idealna lokalizacja                            │
│ ├─ Nagłówek H3: "Idealna lokalizacja między..."        │
│ ├─ Opis z fokusem na Wrocław (1h jazdy)                │
│ ├─ Podsekcja A: Codzienne udogodnienia                 │
│ │  └─ Grid 7 ikon (Przedszkole, Las, Basen...)         │
│ ├─ Podsekcja B: Atrakcje w okolicy                     │
│ │  └─ Grid 6 ikon (Zamek, Kobyla Góra, Pałac...)       │
│ └─ Mapa Google (satelitarna, z zaznaczoną działką)     │
└─────────────────────────────────────────────────────────┘
\`\`\`

### 3.3 Nowy flow strony

\`\`\`
1. HeroSection
   └─ CTA: "Zobacz domy" / "Umów wizytę"

2. InvestmentAndLocationSection (NOWA POŁĄCZONA)
   ├─ Part A: Dlaczego warto? (cechy)
   ├─ Part B: Gdzie? (lokalizacja)
   └─ CTA: "Zobacz plany domów"

3. PlansSection
   └─ CTA: "Pobierz pełną ofertę"

4. TestimonialsSection
   └─ Social proof

5. GallerySection
   └─ Visual proof

6. CalculatorSection
   └─ CTA: "Umów konsultację"

7. ContactSection
   └─ Final CTA
\`\`\`

### 3.4 Hierarchia informacji

#### Level 1: Hero - Emocjonalny hook
"Twój wymarzony dom w spokojnej okolicy"

#### Level 2: Investment - Racjonalne argumenty
"Dlaczego ten dom?"
- Nowoczesny
- Ekologiczny
- Komfortowy
- Bezpieczny
- Blisko natury
- Gotowy do zamieszkania

#### Level 3: Location - Kontekst geograficzny (TUTAJ!)
"Gdzie dokładnie?"
- Godzina od Wrocławia
- Wszystko w pobliżu (szkoła, sklep, las)
- Atrakcje na weekend (Zamek, góry, pałac)

#### Level 4: Plans - Konkretna oferta
"Co dokładnie kupujesz?"

#### Level 5: Social & Visual Proof
"Co mówią inni?" + "Jak to wygląda?"

#### Level 6: Finance - Realizm
"Czy Cię na to stać?"

#### Level 7: Action - Konwersja
"Skontaktuj się z nami"

---

## 4. Plan implementacji krok po kroku

### FAZA 1: Przygotowanie (1-2 godziny)

#### Krok 1.1: Backup obecnej wersji
**Dlaczego:** Bezpieczeństwo, możliwość rollbacku
**Jak:**
\`\`\`bash
git checkout -b feature/location-restructure
git add .
git commit -m "Backup przed przebudową sekcji lokalizacji"
\`\`\`

#### Krok 1.2: Analiza zależności
**Dlaczego:** Zrozumienie powiązań między komponentami
**Co sprawdzić:**
- Czy LocationSection jest używana gdzie indziej?
- Czy są hardcoded linki do #lokalizacja?
- Czy w nawigacji są odniesienia do tej sekcji?
- Czy w analytics trackujesz scroll do LocationSection?

**Gdzie szukać:**
- `app/page.tsx` - główna struktura
- `components/layout/main-nav.tsx` - nawigacja
- `components/layout/mobile-nav.tsx` - nawigacja mobile
- Inne pliki z gtag, analytics

#### Krok 1.3: Przygotowanie danych
**Dlaczego:** Wszystkie dane w jednym miejscu
**Co przygotować:**
- Lista atrakcji turystycznych (6 elementów)
- Ikony z lucide-react dla atrakcji
- Współrzędne działki dla Google Maps
- Nowy URL mapy z widokiem satelitarnym
- Teksty zoptymalizowane SEO

---

### FAZA 2: Modyfikacja komponentów (2-4 godziny)

#### Krok 2.1: Stworzenie komponentu TouristAttractionCard
**Plik:** `components/common/tourist-attraction-card.tsx`

**Dlaczego:**
- Reużywalność
- Spójność z istniejącymi ikonkami
- Łatwiejsze utrzymanie

**Co zawiera:**
- Interface z props (title, distance, icon, color)
- Struktura podobna do LocationFeatureCard
- Hover effects
- Responsywność mobile/desktop

**Zależności:**
- Lucide-react icons
- Tailwind classes (bg-card, rounded-full, etc.)

#### Krok 2.2: Aktualizacja InvestmentSection
**Plik:** `components/sections/investment-section.tsx`

**Struktura zmian:**

\`\`\`
[Istniejąca zawartość]
├─ Nagłówek "Dlaczego warto?"
├─ Opis
└─ Grid z 6 feature cards

[NOWA ZAWARTOŚĆ - dodajemy]
├─ Separator (border-t, mt-32, pt-24)
├─ Nagłówek H3 "Idealna lokalizacja"
├─ Opis z fokusem na Wrocław
├─ Podsekcja: Codzienne udogodnienia
│  └─ Grid 7 ikon (Przedszkole, Las, etc.)
├─ Podsekcja: Atrakcje turystyczne
│  └─ Grid 6 ikon (Zamek, Góra, etc.)
└─ Mapa Google (iframe z satelitą)
\`\`\`

**Co importować:**
\`\`\`
- TouristAttractionCard (nowy)
- Ikony z lucide-react (Castle, Mountain, etc.)
- useState dla mapy (jeśli potrzebny loading state)
\`\`\`

**Nowe dane w komponencie:**
\`\`\`
const touristAttractions = [...]
const locationFeatures = [...] (przeniesione z LocationSection)
\`\`\`

#### Krok 2.3: Przeniesienie logiki mapy
**Z:** `components/sections/location-section.tsx`
**Do:** `components/sections/investment-section.tsx`

**Co przenieść:**
- Iframe z Google Maps
- State dla mapLoaded
- Loading skeleton
- Styling (height, rounded-3xl, etc.)

**Co zmienić:**
- URL mapy: parametr `!5e1!` zamiast `!5e0!` (satelita)
- Opcjonalnie: współrzędne dla precyzyjnego centrum
- Opcjonalnie: zoom level (obecnie 13.1)

#### Krok 2.4: Aktualizacja stylingu
**Dlaczego:** Zachowanie spójności wizualnej

**Separatory między częściami:**
\`\`\`
- border-t (cienka linia)
- mt-32 (margines górny 8rem)
- pt-24 (padding górny 6rem)
\`\`\`

**Grid system:**
- Codzienne udogodnienia: `grid-cols-2 md:grid-cols-4 lg:grid-cols-7`
- Atrakcje turystyczne: `grid-cols-2 md:grid-cols-3 lg:grid-cols-6`

**Spacing:**
- mb-16 między podsekcjami
- mb-8 między nagłówkiem a contentem
- gap-8 w gridach

---

### FAZA 3: Aktualizacja struktury strony (30 minut)

#### Krok 3.1: Modyfikacja app/page.tsx
**Dlaczego:** Usunięcie duplikacji, nowy flow

**Obecny kod:**
\`\`\`
<HeroSection />
<InvestmentSection />
<PlansSection />
<TestimonialsSection />
<GallerySection />
<CalculatorSection />
<LocationSection />
<ContactSection />
\`\`\`

**Nowy kod:**
\`\`\`
<HeroSection />
<InvestmentSection /> {/* Teraz zawiera lokalizację */}
<PlansSection />
<TestimonialsSection />
<GallerySection />
<CalculatorSection />
{/* LocationSection - USUNIĘTE */}
<ContactSection />
\`\`\`

#### Krok 3.2: Aktualizacja nawigacji
**Plik:** `components/layout/main-nav.tsx`

**Obecny kod:**
\`\`\`typescript
const navItems = [
  { href: "#dlaczego-warto", label: "O inwestycji" },
  { href: "#domy", label: "Domy i plany" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kalkulator", label: "Finansowanie" },
  { href: "#lokalizacja", label: "Lokalizacja" },
  { href: "#kontakt", label: "Kontakt" },
];
\`\`\`

**Nowy kod - Opcja A (usunięcie linku):**
\`\`\`typescript
const navItems = [
  { href: "#dlaczego-warto", label: "O inwestycji" }, // Zawiera też lokalizację
  { href: "#domy", label: "Domy i plany" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kalkulator", label: "Finansowanie" },
  // { href: "#lokalizacja", label: "Lokalizacja" }, // USUNIĘTE
  { href: "#kontakt", label: "Kontakt" },
];
\`\`\`

**Nowy kod - Opcja B (rekomendowana - zmiana nazwy):**
\`\`\`typescript
const navItems = [
  { href: "#dlaczego-warto", label: "Inwestycja" }, // Krótsze
  { href: "#domy", label: "Domy" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kalkulator", label: "Finansowanie" },
  { href: "#kontakt", label: "Kontakt" },
];
\`\`\`

**Ta sama zmiana w:** `components/layout/mobile-nav.tsx`

#### Krok 3.3: Aktualizacja ID sekcji
**Dlaczego:** SEO, deep linking, analytics

**W InvestmentSection dodaj opcjonalne ID dla lokalizacji:**
\`\`\`tsx
<section id="dlaczego-warto" className="...">
  {/* Część 1: Feature cards */}

  <div id="lokalizacja" className="mt-32 border-t pt-24">
    {/* Część 2: Lokalizacja */}
  </div>
</section>
\`\`\`

**Korzyści:**
- Link `#lokalizacja` nadal działa (scrolluje do tej części)
- Backwards compatibility
- Analytics tracking zachowany

---

### FAZA 4: Optymalizacja treści (1-2 godziny)

#### Krok 4.1: Aktualizacja tekstów SEO

**Nagłówek główny lokalizacji:**
\`\`\`
Obecny: "Spokojna i zielona część Ostrzeszowa"
Nowy: "Idealna lokalizacja między Wielkopolską a Śląskiem"
\`\`\`

**Dlaczego:**
- Bardziej konkretne
- Odwołanie do Wrocławia (Śląsk)
- Lepsze dla SEO (region, geografia)

**Opis wprowadzający:**
\`\`\`
Nowy tekst:
"Ostrzeszów to doskonała propozycja dla mieszkańców Wrocławia 
ceniących sobie bliskość natury i bogatą historię. Zaledwie godzina 
jazdy dzieli Cię od średniowiecznego Ostrzeszowa z XIV-wieczną wieżą 
zamkową, najwyższego szczytu Wielkopolski - Kobylej Góry (284 m n.p.m.) 
oraz drewnianego pałacu myśliwskiego w Antoninie, gdzie komponował 
Fryderyk Chopin."
\`\`\`

**Słowa kluczowe:**
- Wrocław (x2)
- Godzina jazdy
- Wielkopolska
- Konkretne atrakcje (Zamek, Kobyla Góra, Pałac)
- Historia, natura

#### Krok 4.2: Dane atrakcji turystycznych

**Format danych:**
\`\`\`typescript
interface TouristAttraction {
  title: string;        // Krótka nazwa (max 15 znaków)
  distance: string;     // Format: "X km"
  icon: ReactNode;      // Z lucide-react
  color?: string;       // Tailwind class dla koloru
}
\`\`\`

**6 atrakcji do dodania:**

1. **Wieża Zamkowa**
   - Distance: "5 km"
   - Icon: Castle
   - Color: "text-amber-600"
   - Dlaczego: Główna atrakcja Ostrzeszowa, najbliżej

2. **Kobyla Góra**
   - Distance: "15 km"
   - Icon: Mountain
   - Color: "text-green-600"
   - Dlaczego: Najwyższy szczyt Wielkopolski, unikalne

3. **Pałac Antonin**
   - Distance: "13 km"
   - Icon: Camera (lub Home)
   - Color: "text-blue-600"
   - Dlaczego: Chopin, historia, piękna architektura

4. **Kościół Kotłów**
   - Distance: "20 km"
   - Icon: Church
   - Color: "text-purple-600"
   - Dlaczego: 900 lat, najstarszy w regionie

5. **Jodły Ostrzesz.**
   - Distance: "4 km"
   - Icon: TreePine
   - Color: "text-emerald-600"
   - Dlaczego: Najbliżej, przyroda, spacery

6. **Koniec Świata**
   - Distance: "30 km"
   - Icon: MapPin
   - Color: "text-rose-600"
   - Dlaczego: Unikalna nazwa, ciekawostka, viral potential

#### Krok 4.3: Optymalizacja Google Maps

**Obecny URL:**
\`\`\`
pb=!1m18!1m12!1m3!...!5e0!3m2!1spl!2spl
\`\`\`

**Nowy URL (widok satelitarny):**
\`\`\`
pb=!1m18!1m12!1m3!...!5e1!3m2!1spl!2spl
                      ↑
                      Zmiana 0 na 1
\`\`\`

**Opcjonalne ulepszenia:**

1. **Zwiększony zoom:**
   - Obecny: `4f13.1` (zoom 13.1)
   - Nowy: `4f17.5` (zoom 17.5 - widać działkę)

2. **Lepsze centrowanie:**
   - Dokładne współrzędne środka działki
   - Przetestuj w Google Maps najpierw

3. **Zaznaczenie działki (advanced):**
   - Użyj Google My Maps
   - Narysuj polygon na działce
   - Embed custom map
   - Kolor: emerald green (#10B981)

---

### FAZA 5: Responsywność (1 godzina)

#### Krok 5.1: Mobile (320px - 768px)

**Grid atrakcji:**
\`\`\`
Mobile: grid-cols-2 (po 2 w rzędzie)
Tablet: grid-cols-3 (po 3 w rzędzie)
Desktop: grid-cols-6 (wszystkie w 1 rzędzie)
\`\`\`

**Spacing:**
\`\`\`
- gap-6 (mobile)
- gap-8 (desktop)
- mb-8 (między sekcjami mobile)
- mb-16 (między sekcjami desktop)
\`\`\`

**Typografia:**
\`\`\`
Nagłówek H3 lokalizacji:
- mobile: text-2xl
- desktop: text-3xl md:text-4xl

Opis:
- mobile: text-base
- desktop: text-lg
\`\`\`

**Mapa:**
\`\`\`
Height:
- mobile: h-[300px]
- tablet: h-[400px]
- desktop: h-[600px]
\`\`\`

#### Krok 5.2: Tablet (768px - 1024px)

**Grid system:**
\`\`\`
Codzienne udogodnienia: md:grid-cols-4 (2 rzędy po 4)
Atrakcje turystyczne: md:grid-cols-3 (2 rzędy po 3)
\`\`\`

**Padding sekcji:**
\`\`\`
- px-6 (mobile)
- md:px-8 (tablet/desktop)
\`\`\`

#### Krok 5.3: Desktop (1024px+)

**Max-width contentu:**
\`\`\`
- max-w-7xl (1280px container)
- max-w-3xl dla tekstów (lepsze UX czytania)
\`\`\`

**Grid full width:**
\`\`\`
Codzienne: lg:grid-cols-7 (wszystkie w rzędzie)
Atrakcje: lg:grid-cols-6 (wszystkie w rzędzie)
\`\`\`

---

### FAZA 6: Usunięcie starego kodu (30 minut)

#### Krok 6.1: Usunięcie LocationSection component

**Plik do usunięcia:**
`components/sections/location-section.tsx`

**Przed usunięciem sprawdź:**
\`\`\`bash
# Szukaj wszystkich importów LocationSection
grep -r "LocationSection" app/
grep -r "location-section" components/

# Upewnij się że nie jest używana nigdzie indziej
\`\`\`

**Co zrobić:**
1. Usuń plik
2. Usuń z exports w `components/sections/index.ts` (jeśli istnieje)
3. Usuń import z `app/page.tsx`

#### Krok 6.2: Cleanup niewykorzystanych danych

**Jeśli w LocationSection były dane, które przeniosłeś:**
- Upewnij się, że wszystkie `locationFeatures` są w InvestmentSection
- Sprawdź czy nie ma duplikatów
- Usuń stare komentarze

#### Krok 6.3: Aktualizacja dokumentacji

**Pliki do zaktualizowania:**
- `README.md` - nowa struktura sekcji
- `docs/` (jeśli istnieje)
- Komentarze w kodzie

---

## 5. Szczegóły techniczne

### 5.1 Struktura plików po zmianach

\`\`\`
project-root/
├── app/
│   └── page.tsx                                   [ZMODYFIKOWANY]
│       └── Usunięcie <LocationSection />
│
├── components/
│   ├── common/
│   │   └── tourist-attraction-card.tsx            [NOWY PLIK]
│   │
│   ├── sections/
│   │   ├── investment-section.tsx                 [ZMODYFIKOWANY]
│   │   │   └── Dodanie logiki lokalizacji
│   │   │
│   │   └── location-section.tsx                   [USUNIĘTY]
│   │
│   └── layout/
│       ├── main-nav.tsx                           [ZMODYFIKOWANY]
│       │   └── Aktualizacja navItems
│       │
│       └── mobile-nav.tsx                         [ZMODYFIKOWANY]
│           └── Aktualizacja navItems
\`\`\`

### 5.2 Zależności i importy

#### W investment-section.tsx dodaj:

\`\`\`typescript
// Istniejące importy
import { useState } from "react"
import { Card } from "@/components/ui/card"
// ...inne

// NOWE importy
import { TouristAttractionCard } from "@/components/common/tourist-attraction-card"
import { 
  Castle, 
  Mountain, 
  TreePine, 
  Church, 
  Camera, 
  MapPin 
} from "lucide-react"
\`\`\`

#### W tourist-attraction-card.tsx:

\`\`\`typescript
import React from 'react'
// Nie potrzeba innych importów - wszystko w Tailwind
\`\`\`

### 5.3 Props i Interfaces

#### TouristAttractionCard Props:

\`\`\`typescript
interface TouristAttractionProps {
  title: string;          // Required: "Wieża Zamkowa"
  distance: string;       // Required: "5 km"
  icon: React.ReactNode;  // Required: <Castle />
  color?: string;         // Optional: "text-amber-600"
}
\`\`\`

#### LocationFeature Props (istniejące):

\`\`\`typescript
interface LocationFeatureProps {
  title: string;          // "Przedszkole"
  distance: string;       // "150 m"
  icon: React.ReactNode;  // <School />
}
\`\`\`

### 5.4 State Management

#### Map Loading State:

\`\`\`typescript
const [mapLoaded, setMapLoaded] = useState(false)

// W iframe:
onLoad={() => setMapLoaded(true)}

// Loading skeleton:
{!mapLoaded && (
  <div className="absolute inset-0 bg-muted animate-pulse" />
)}
\`\`\`

### 5.5 Accessibility (a11y)

#### ARIA labels dla ikon:

\`\`\`typescript
<Castle className="h-8 w-8" aria-hidden="true" />
<span className="sr-only">Wieża Zamkowa</span>
\`\`\`

#### Semantic HTML:

\`\`\`html
<section id="dlaczego-warto" aria-label="O inwestycji i lokalizacji">
  <h2>Dlaczego warto?</h2>
  <!-- Feature cards -->

  <div id="lokalizacja">
    <h3>Idealna lokalizacja</h3>
    <!-- Location content -->
  </div>
</section>
\`\`\`

#### Keyboard navigation:

\`\`\`typescript
// Wszystkie karty focusable
<div 
  className="..." 
  tabIndex={0}
  role="article"
>
\`\`\`

### 5.6 Performance

#### Lazy loading mapy:

\`\`\`typescript
<iframe
  loading="lazy"                                    // Native lazy loading
  referrerPolicy="no-referrer-when-downgrade"
/>
\`\`\`

#### Image optimization (jeśli dodajesz zdjęcia):

\`\`\`typescript
import Image from 'next/image'

<Image
  src="/images/location/..."
  alt="..."
  width={800}
  height={600}
  loading="lazy"
  placeholder="blur"
/>
\`\`\`

####减少 bundle size:

\`\`\`typescript
// Importuj tylko potrzebne ikony
import { Castle, Mountain } from "lucide-react"

// Zamiast:
// import * as Icons from "lucide-react"
\`\`\`

---

## 6. Testowanie i walidacja

### 6.1 Checklist funkcjonalny

#### Desktop (Chrome, Firefox, Safari, Edge):

- [ ] Sekcja InvestmentSection ładuje się poprawnie
- [ ] Feature cards są wyświetlane (6 sztuk)
- [ ] Separator wizualny jest widoczny
- [ ] Nagłówek "Idealna lokalizacja" jest czytelny
- [ ] Grid "Codzienne udogodnienia" - 7 ikon w 1 rzędzie
- [ ] Grid "Atrakcje turystyczne" - 6 ikon w 1 rzędzie
- [ ] Ikony mają poprawne kolory
- [ ] Mapa Google ładuje się w widoku satelitarnym
- [ ] Mapa jest interaktywna (zoom, pan)
- [ ] Loading skeleton mapy działa
- [ ] LocationSection NIE pojawia się na końcu
- [ ] Nawigacja NIE ma linku "Lokalizacja" (lub zmieniony tekst)
- [ ] Smooth scroll do #dlaczego-warto działa
- [ ] Smooth scroll do #lokalizacja działa (jeśli zachowane)

#### Mobile (iOS Safari, Android Chrome):

- [ ] Sekcja ładuje się szybko (< 3s na 4G)
- [ ] Feature cards - 1 kolumna lub 2
- [ ] Codzienne udogodnienia - 2 kolumny
- [ ] Atrakcje turystyczne - 2 kolumny
- [ ] Mapa ma wysokość 300px
- [ ] Mapa jest responsywna (pinch zoom)
- [ ] Teksty są czytelne (min 16px)
- [ ] Touch targets > 44x44px
- [ ] Nie ma horizontal scroll
- [ ] Mobile menu działa

#### Tablet (iPad, Android tablets):

- [ ] Layout pośredni między mobile a desktop
- [ ] Grid 3-4 kolumny
- [ ] Mapa 400px wysokości
- [ ] Portrait i landscape modes działają

### 6.2 Checklist wydajnościowy

#### Lighthouse scores (minimum):

- [ ] Performance: > 90
- [ ] Accessibility: > 95
- [ ] Best Practices: > 95
- [ ] SEO: > 95

#### Core Web Vitals:

- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

#### Optymalizacje:

- [ ] Lazy loading mapy działa
- [ ] Brak layout shift podczas ładowania
- [ ] Ikony SVG są zoptymalizowane
- [ ] Brak unused CSS/JS
- [ ] Gzip/Brotli compression włączone

### 6.3 Checklist SEO

#### On-page:

- [ ] H2 tag: "Dlaczego warto?"
- [ ] H3 tag: "Idealna lokalizacja między Wielkopolską a Śląskiem"
- [ ] Słowa kluczowe w opisach (Wrocław, Ostrzeszów, etc.)
- [ ] Alt text dla wszystkich obrazów (jeśli są)
- [ ] Semantic HTML (section, h2, h3, etc.)
- [ ] Internal linking działa
- [ ] No broken links

#### Technical:

- [ ] Meta title zawiera lokalizację
- [ ] Meta description zaktualizowany
- [ ] Schema markup (jeśli był) działa
- [ ] Canonical URL poprawny
- [ ] XML sitemap zaktualizowany
- [ ] robots.txt OK

### 6.4 Checklist UX

#### User Flow:

1. **Wchodzi na stronę (Hero)**
   - [ ] Rozumie o co chodzi (domy w Ostrzeszowie)
   - [ ] Widzi główny CTA

2. **Scrolluje do Investment**
   - [ ] Rozumie cechy domów
   - [ ] Jest zainteresowany

3. **Scrolluje dalej (ta sama sekcja!)**
   - [ ] Widzi separator - wie że to nowa część
   - [ ] Czyta o lokalizacji
   - [ ] **Kluczowe:** Rozumie że to godzina od Wrocławia
   - [ ] Widzi codzienne udogodnienia
   - [ ] Widzi atrakcje na weekend
   - [ ] Patrzy na mapę - wie gdzie to jest

4. **Gotowy na Plans Section**
   - [ ] Ma kompletny obraz: CO + GDZIE
   - [ ] Wyższa motywacja do zobaczenia planów

#### Emotional Journey:

- [ ] Hero: Ciekawość + Pragnienie
- [ ] Investment: Racjonalne argumenty (spoko!)
- [ ] Location: Kontekst geograficzny (wow, blisko Wrocławia!)
- [ ] Plans: Konkretna oferta (show me!)
- [ ] Testimonials: Social proof (inni są zadowoleni)
- [ ] Gallery: Visual proof (pięknie wygląda!)
- [ ] Calculator: Reality check (stać mnie!)
- [ ] Contact: Action (chcę to mieć!)

### 6.5 A/B Testing (opcjonalne, ale rekomendowane)

#### Metryki do śledzenia:

**Przed zmianami:**
- Bounce rate na InvestmentSection
- Scroll depth (% docierających do starej LocationSection)
- Time on page
- Click-through rate na "Zobacz plany"
- Conversion rate (formularz kontaktowy)

**Po zmianach:**
- Te same metryki
- Porównanie (min 2 tygodnie danych)

#### Narzędzia:

- Google Analytics 4
- Hotjar / Microsoft Clarity (heatmapy)
- Google Optimize (jeśli chcesz A/B test)

#### Expected results:

- ↓ Bounce rate o 20-30%
- ↑ Scroll depth o 40-60%
- ↑ Time on page o 30-50%
- ↑ CTR na CTA o 15-25%
- ↑ Conversion rate o 20-40%

---

## Podsumowanie

### Co zyskujesz:

1. **Lepsza narracja** - spójna historia od cech do lokalizacji
2. **Wyższa konwersja** - użytkownik ma pełny obraz przed decyzją
3. **Lepsze SEO** - więcej treści w jednej sekcji
4. **Mniejszy bounce rate** - kluczowe info wcześniej
5. **Szczęśliwsi użytkownicy z Wrocławia** - od razu widzą "godzina jazdy"

### Ryzyka i mitigation:

| Ryzyko | Prawdopodobieństwo | Mitigation |
|--------|-------------------|------------|
| Sekcja za długa | Średnie | Separator wizualny, jasna hierarchia |
| Scroll fatigue | Niskie | Lepszy content > krótszy content |
| Broken links | Niskie | Zachowanie #lokalizacja ID |
| Analytics issues | Średnie | Update tracking przed deployem |
| User confusion | Niskie | Testowanie z prawdziwymi użytkownikami |

### Next steps:

1. [ ] Przeczytaj ten dokument
2. [ ] Zaakceptuj strategię lub zaproponuj zmiany
3. [ ] Zacznij od FAZY 1 (backup)
4. [ ] Implementuj krok po kroku
5. [ ] Testuj po każdej fazie
6. [ ] Deploy na staging
7. [ ] User testing
8. [ ] Deploy na production
9. [ ] Monitor metrics

---

**Autor:** Claude (Perplexity AI)  
**Data:** 8 października 2025  
**Wersja:** 1.0  
**Status:** Do zatwierdzenia

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

