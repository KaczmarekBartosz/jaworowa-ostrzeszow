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
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/layout/main-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// === NOWE, POPRAWNE METADANE ===
export const metadata = {
  title: "Osiedle Dębowy Park – Nowe domy w Ostrzeszowie",
  description:
    "Nowoczesne, kameralne osiedle w Ostrzeszowie. Domy z ogrodem, blisko natury i miasta. Idealna przestrzeń dla Ciebie i Twojej rodziny.",
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
import { TestimonialsSection } from "@/components/sections/testimonials-section"; // 1. Import
import { GallerySection } from "@/components/sections/gallery-section";
import { LocationSection } from "@/components/sections/location-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer"; // Poprawiony import

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InvestmentSection />
      <PlansSection />
      <TestimonialsSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
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
        <p
          className={cn(
            "mt-4 text-sm",
            isHighlighted
              ? "text-primary-foreground/80"
              : "text-muted-foreground"
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "text-xl font-bold",
            isHighlighted ? "" : "text-foreground"
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
              className="flex-shrink-0 flex-grow-0 basis-4/5 pl-4 first:pl-6 last:pr-6 md:basis-auto md:p-0"
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

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  // Niezawodne blokowanie scrolla
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  // Obsługa klawisza Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!open) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="relative w-[min(92vw,1200px)] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>
          <motion.button
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-black/70 p-2 text-white/90 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Zamknij"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

```

# components\common\gallery-card.tsx

```tsx
"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryCardProps {
  imageUrl: string;
  title: string;
  className?: string;
}

export function GalleryCard({ imageUrl, title, className }: GalleryCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
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
      </DialogTrigger>
      {/* === OSTATECZNA POPRAWKA: Dodajemy onOpenAutoFocus === */}
      <DialogContent
        className="max-w-7xl w-full bg-transparent border-none shadow-none p-4"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={1920}
          height={1080}
          className="w-full h-auto object-contain rounded-2xl"
        />
      </DialogContent>
    </Dialog>
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
import { X, ChevronRight, ChevronLeft, Pointer } from "lucide-react";

type Item = { imageUrl: string; title: string };

type GalleryStackMobileProps = {
  items: Item[];
  hintMode?: "continuous" | "pulsed";
};

export function GalleryStackMobile({
  items,
  hintMode = "pulsed",
}: GalleryStackMobileProps) {
  const [queue, setQueue] = React.useState(items);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
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

  // === POPRAWKA: Poprawiono składnię spread '...rest' ===
  const next = React.useCallback(() => {
    setQueue((q) => {
      const [first, ...rest] = q;
      return [...rest, first];
    });
    setActiveIndex(0);
  }, []);

  const prev = React.useCallback(() => {
    setQueue((q) => {
      const last = q[q.length - 1];
      const rest = q.slice(0, -1);
      return [last, ...rest];
    });
    setActiveIndex(0);
  }, []);

  const openLightbox = () => {
    if (didDrag) return;
    setActiveIndex(0);
    setIsOpen(true);
  };
  const closeLightbox = () => setIsOpen(false);

  const onDragStart = () => {
    setDidDrag(false);
  };

  const onDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeStrength = info.offset.x + info.velocity.x * VELOCITY_WEIGHT;

    if (Math.abs(info.offset.x) > 2 || Math.abs(info.velocity.x) > 50) {
      setDidDrag(true);
      setTimeout(() => setDidDrag(false), 120);
    }

    if (Math.abs(swipeStrength) > THRESHOLD) {
      if (swipeStrength > 0) {
        prev();
      } else {
        next();
      }
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

    if (isOpen) {
      setHintVisible(false);
      return;
    }

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
      timeoutsRef.current = [];
    };
  }, [hintMode, isOpen, PAUSE_MS]); // Dodano brakującą zależność

  const isHintAnimating = !isOpen && (hintMode === "continuous" || hintVisible);

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
    <>
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
                    onDragStart={isTop ? onDragStart : undefined}
                    onDragEnd={isTop ? onDragEnd : undefined}
                    whileTap={isTop ? { cursor: "grabbing" } : {}}
                    className="relative h-full w-full select-none"
                  >
                    <button
                      type="button"
                      onClick={openLightbox}
                      className="absolute inset-0 overflow-hidden rounded-3xl shadow-xl"
                      aria-label={`Otwórz „${item.title}” w pełnym ekranie`}
                    >
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
                    </button>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                className="pointer-events-none absolute bottom-[-20px] left-1/2 z-50 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hintMode === "continuous" ? 1 : hintVisible ? 1 : 0,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: hintMode === "continuous" ? 0.25 : FADE_MS / 1000,
                  ease: "easeInOut",
                }}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            onClick={closeLightbox}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-4"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/2] w-full max-w-[92vw] max-h-[80vh]">
                <Image
                  src={queue[activeIndex].imageUrl}
                  alt={queue[activeIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="pointer-events-auto rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/15"
                >
                  Poprzednie
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="pointer-events-auto rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/15"
                >
                  Następne
                </button>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
                aria-label="Zamknij podgląd"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
  const mounted = React.useRef(false);
  const imgs = Array.isArray(images) ? images : [];

  // renderuj tylko w przeglądarce (eliminuje błędy hydration)
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => setIsClient(true), []);

  // bezpieczny index
  const safeIndex = React.useMemo(() => {
    if (!imgs.length) return 0;
    return Math.min(Math.max(index, 0), imgs.length - 1);
  }, [index, imgs.length]);

  const [current, setCurrent] = React.useState(safeIndex);
  React.useEffect(() => {
    setCurrent(safeIndex);
  }, [safeIndex, imgs.length, open]);

  // jeśli zamknięte lub brak zdjęć albo SSR – nie renderuj
  if (!open || !imgs.length || !isClient) return null;

  const total = imgs.length;
  const go = (dir: 1 | -1) => {
    if (!total) return;
    const next = (current + dir + total) % total;
    setCurrent(next);
    onIndexChange?.(next);
  };

  React.useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, total, onClose]);

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
          {/* Podwójny guard – nawet gdyby coś było nie tak, nie wywali projektu */}
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
import { Trees, Mail, Phone, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Strona główna"
            >
              <Trees
                className="size-7 text-foreground flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Osiedle Dębowy Park
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Nowoczesne osiedle domów w zabudowie bliźniaczej, zaprojektowane z
              myślą o komforcie i harmonii z naturą.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Nawigacja</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  {/* POPRAWKA: Poprawiono 'href' na działający */}
                  <a
                    href="#dlaczego-warto"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    O Inwestycji
                  </a>
                </li>
                <li>
                  <a
                    href="#domy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Domy i Plany
                  </a>
                </li>
                <li>
                  <a
                    href="#galeria"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Galeria
                  </a>
                </li>
                <li>
                  <a
                    href="#lokalizacja"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Lokalizacja
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Kontakt</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    email@przykład.pl
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">+48 123 456 789</span>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-foreground">Social Media</h3>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="size-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="size-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Osiedle Dębowy Park. Wszelkie prawa
          zastrzeżone.
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
  { href: "#dlaczego-warto", label: "Dlaczego Warto?" },
  { href: "#domy", label: "Domy i Plany" },
  { href: "#galeria", label: "Galeria" },
  { href: "#lokalizacja", label: "Lokalizacja" },
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
      <span className="text-xl font-bold tracking-tight text-foreground">
        Osiedle Dębowy Park
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
            {/* POPRAWKA: Dodajemy prop 'modal={false}' */}
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
          <div className="flex items-center gap-1">
            <ThemeToggle size="lg" />
            <Button
              className="rounded-full"
              onClick={() => handleScrollTo("#kontakt")}
            >
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </header>
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
    // POPRAWKA: Zmieniono tło na bg-background dla spójności
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
            <Input id="name" type="text" placeholder="Imię" required />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <Input id="email" type="email" placeholder="E-mail" required />
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

import { GalleryCard } from "@/components/common/gallery-card";
import { GalleryStackMobile } from "@/components/common/gallery-stack-mobile";

const galleryImages = [
  {
    imageUrl: "/galeria/1.jpg",
    title: "Nowoczesny dom z przestronnym podjazdem",
    span: "row-span-1",
  },
  {
    imageUrl: "/galeria/2.jpg",
    title: "Elegancka bryła budynku z podjazdem",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/3.jpg",
    title: "Dom idealny dla całej rodziny",
    span: "row-span-1",
  },
  {
    imageUrl: "/galeria/4.jpg",
    title: "Widok z góry na nowoczesną architekturę",
    span: "row-span-1",
  },
  {
    imageUrl: "/galeria/5.jpg",
    title: "Detal elewacji i duże przeszklenia",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/6.jpg",
    title: "Stylowe wejście do domu",
    span: "row-span-1",
  },
  {
    imageUrl: "/galeria/7.jpg",
    title: "Wizualizacja frontu budynku",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/8.jpg",
    title: "Osiedle domów z lotu ptaka",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/9.jpg",
    title: "Spójna koncepcja architektoniczna osiedla",
    span: "row-span-1",
  },
  {
    imageUrl: "/galeria/10.jpg",
    title: "Dom wkomponowany w otoczenie",
    span: "row-span-1",
  },
  {
    imageUrl: "/galeria/11.jpg",
    title: "Nowoczesne osiedle w zielonej okolicy",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/12.jpeg",
    title: "Przestronne i słoneczne wnętrze salonu",
    span: "row-span-1",
  },
  {
    imageUrl: "/galeria/jaworowa-wizualizacja-5.jpg",
    title: "Nastrojowe oświetlenie domu po zmroku",
    span: "row-span-1",
  },
];

export function GallerySection() {
  return (
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
            atmosferę miejsca, w którym możesz zamieszkać wraz ze swoją rodziną.
          </p>
        </div>

        {/* MOBILE: stos kart z gestem swipe */}
        <div className="mt-10 md:hidden">
          <GalleryStackMobile
            items={galleryImages.map(({ imageUrl, title }) => ({
              imageUrl,
              title,
            }))}
          />
        </div>

        {/* DESKTOP: Twoja siatka bez zmian */}
        <div className="mt-16 hidden grid-flow-dense grid-cols-2 gap-4 [grid-auto-rows:150px] md:grid md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={index}
              imageUrl={image.imageUrl}
              title={image.title}
              className={image.span}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

```

# components\sections\hero-section copy.tsx

```tsx
"use client";

import Image from "next/image";
import { ChevronRight, ChevronsDown } from "lucide-react";
import * as React from "react";

/**
 * Alt Hero v2
 * - MOBILE: odtwarza układ ze screena (centrowanie, duże CTA-pill, ten sam rytm pionowy)
 * - DESKTOP: pełnoekranowe tło + pływający panel "glass" wyrównany do lewej krawędzi kontenera (jak nawigacja)
 * - "Dębowy Park" w jednej linii na md+
 */
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
      className="relative isolate flex min-h-[100svh] w-full items-stretch overflow-hidden"
    >
      {/* FULL-BLEED BG */}
      <Image
        src="/Artboard_2.jpg"
        alt="Nowoczesny dom w otoczeniu zieleni – Osiedle Dębowy Park"
        fill
        priority
        className="-z-10 object-cover object-bottom"
        sizes="100vw"
        quality={80}
      />
      {/* Readability helpers */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.45),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        aria-hidden
      />

      {/* CONTENT CONTAINER — aligns with site nav */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center">
        <div className="container mx-auto grid w-full grid-cols-1 px-4 sm:px-6 md:px-8 lg:px-12 md:grid-cols-12 md:gap-8">
          {/* FLOATING GLASS PANEL (desktop), mobile stays transparent */}
          <div className="md:col-span-7 lg:col-span-6">
            <div className="mb-50 rounded-[2rem] bg-black/0 p-[clamp(2.5rem,3vw,1.5rem)] backdrop-blur-0 md:bg-black/35 md:p-8 md:shadow-[0_20px_70px_rgba(0,0,0,0.45)] md:backdrop-blur-md">
              {/* Heading */}
              <h1 className="text-center font-extrabold text-white md:text-left">
                <span className="block text-[clamp(1.375rem,2.5vw,1.875rem)] tracking-tight text-white/90">
                  Osiedle
                </span>
                <span className="relative inline-block md:whitespace-nowrap">
                  <span className="relative z-10 block text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] tracking-tight">
                    Dębowy Park
                  </span>
                  <Image
                    src="/underline-gradient-green.svg"
                    alt=""
                    width={760}
                    height={40}
                    className="pointer-events-none absolute -bottom-2 left-0 w-full select-none md:-bottom-3"
                    aria-hidden
                  />
                </span>
              </h1>

              {/* Lead */}
              <p className="mx-auto mt-6 max-w-prose text-center text-[clamp(1rem,1.6vw,1.25rem)] leading-relaxed text-white/90 md:text-left">
                Poznaj wyjątkowe miejsce dla Ciebie i Twojej rodziny.
              </p>

              {/* CTA pill (faithful to mobile look) */}
              <div className="mx-auto mt-8 max-w-[32rem] md:mx-0">
                <button
                  type="button"
                  onClick={() => onScroll("dlaczego-warto")}
                  className="group flex w-full items-center justify-between rounded-full border border-white/15 bg-white/10 px-2 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span className="pl-6 text-[clamp(1.05rem,1.6vw,1.25rem)] font-medium text-white">
                    Dowiedz się więcej
                  </span>
                  <span className="mr-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transition-transform duration-300 group-hover:scale-110">
                    <ChevronRight className="h-6 w-6 text-white" aria-hidden />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:col-span-5 lg:col-span-6 md:block" />
        </div>
      </div>

      {/* Mobile-only extra spacer to keep dolna część zdjęcia widoczna jak na screenie */}
      <div className="h-[12vh] md:hidden" aria-hidden />

      {/* Scroll cue */}
      <div
        className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2"
        aria-hidden
      >
        <ChevronsDown className="h-10 w-10 animate-bounce text-white/90" />
      </div>
    </section>
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
      <div className="absolute inset-0 -z-20 hidden md:block">
        <Image
          src="/hero.jpg"
          alt="Nowoczesny dom – desktop"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          quality={100}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-2/5 bg-gradient-to-b from-background/80 via-background/20 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/5 bg-gradient-to-t from-background via-background/20 to-transparent"
        aria-hidden
      />
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
                {/* POPRAWKA: Ujednolicono styl "glass" do bg-card/50 */}
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
      <div className="relative z-10 hidden md:block">
        <div className="mx-auto w-full max-w-7xl">
          <div className="container mx-auto grid h-[100svh] grid-rows-[1fr_auto_1.6fr] grid-cols-12 gap-8 px-8 lg:px-12">
            <div className="col-span-12" />
            <div className="col-span-7 lg:col-span-6">
              <div className="rounded-[2rem] bg-black/35 p-[clamp(1.5rem,3vw,2.5rem)] shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <h1 className="text-left font-extrabold text-white">
                  <span className="block text-3xl tracking-tight text-white/90">
                    Osiedle
                  </span>
                  <span className="relative mt-1 inline-block whitespace-nowrap">
                    <span className="relative z-10 block text-[clamp(3rem,6vw,4rem)] leading-[0.95] tracking-tight">
                      Dębowy Park
                    </span>
                    <Image
                      src="/underline-gradient-green.svg"
                      alt=""
                      width={760}
                      height={40}
                      className="pointer-events-none absolute -bottom-3 left-0 w-full select-none"
                      aria-hidden
                    />
                  </span>
                </h1>
                <p className="mt-6 max-w-prose text-left text-xl leading-relaxed text-white/90">
                  Poznaj wyjątkowe miejsce dla Ciebie i Twojej rodziny.
                </p>
                <div className="mt-8 max-w-[32rem]">
                  {/* POPRAWKA: Ujednolicono styl "glass" do bg-card/50 */}
                  <button
                    type="button"
                    onClick={() => onScroll("dlaczego-warto")}
                    className="group inline-flex w-full items-center justify-between rounded-full border border-border/50 bg-card/50 px-2 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                  >
                    <span className="pl-6 text-lg font-medium text-foreground">
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
            </div>
            <div className="col-span-5 lg:col-span-6" />
            <div className="col-span-12" />
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onScroll("dlaczego-warto")}
        className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full p-2 transition-transform duration-200 ease-in-out hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        aria-label="Przewiń do następnej sekcji"
      >
        <ChevronsDown className="h-10 w-10 animate-bounce text-foreground/90 motion-reduce:animate-none" />
      </button>
    </section>
  );
}

```

# components\sections\investment-section.tsx

```tsx
"use client";

import Image from "next/image";
import { FeatureCard } from "@/components/common/feature-card";
import { FeatureCarousel } from "@/components/common/feature-carousel";
import { Home, Trees, Shield, MapPin } from "lucide-react";

const features = [
  {
    icon: <Trees className="size-6 text-primary-foreground" />,
    title: "Harmonia z Naturą",
    description: "Prywatne ogrody i zieleń",
    isHighlighted: true,
  },
  {
    icon: <Home className="size-6 text-secondary-foreground" />,
    title: "Dla Twojej Wygody",
    description: "Przemyślany układ",
  },
  {
    icon: <Shield className="size-6 text-secondary-foreground" />,
    title: "Dla Twojego Spokoju",
    description: "Kameralne osiedle",
  },
  {
    icon: <MapPin className="size-6 text-secondary-foreground" />,
    title: "Dla Twojego Czasu",
    description: "Blisko miasta",
  },
];

export function InvestmentSection() {
  return (
    <section
      id="dlaczego-warto" // POPRAWKA: Ustawiono poprawne ID
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Miejsce, w którym zapuścisz korzenie.
          </h2>
        </div>
      </div>

      <div className="mt-12 md:hidden">
        <FeatureCarousel>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              isHighlighted={feature.isHighlighted}
            >
              {feature.icon}
            </FeatureCard>
          ))}
        </FeatureCarousel>
      </div>

      <div className="mx-auto mt-12 hidden max-w-7xl px-6 md:grid md:grid-cols-4 md:gap-8 md:px-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            isHighlighted={feature.isHighlighted}
          >
            {feature.icon}
          </FeatureCard>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
          <div className="space-y-8 flex flex-col">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dąb to od wieków symbol siły, natury i zaufania. W Osiedlu Dębowy
              Park łączymy te ponadczasowe wartości z nowoczesnymi technologiami
              budownictwa, tworząc solidne fundamenty dla Twojej przyszłości.
            </p>
            <div className="overflow-hidden rounded-3xl mt-auto">
              <Image
                src="/investment-image.png"
                alt="Wizualizacja nowoczesnej fasady domu w ciągu dnia"
                width={1200}
                height={800}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-8 flex flex-col">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/investment-image-green.jpg"
                alt="Wizualizacja osiedla Domy z Przyszłością z dużą ilością zieleni"
                width={1200}
                height={800}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Naszą ambicją jest stworzenie osiedla, które nie tylko zachwyca
              architekturą, ale przede wszystkim zapewnia spokój, bezpieczeństwo
              i komfort codziennego życia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

```

# components\sections\location-section.tsx

```tsx
import { MapPin, School, ShoppingCart, Trees } from "lucide-react";

const locationFeatures = [
  { icon: ShoppingCart, text: "Sklepy i usługi na wyciągnięcie ręki" },
  { icon: School, text: "Osiedle blisko szkół i przedszkoli" },
  { icon: Trees, text: "Tereny zielone i rekreacyjne w okolicy" },
];

export function LocationSection() {
  return (
    <section
      id="lokalizacja"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Spokojna i zielona część Ostrzeszowa
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Osiedle Dębowy Park powstaje w spokojnej, zielonej części
              Ostrzeszowa. Lokalizacja zapewnia doskonałą komunikację z centrum
              miasta, szkołami, sklepami i punktami usługowymi. To miejsce,
              gdzie codzienna wygoda spotyka się z ciszą i naturą.
            </p>
            <ul className="mt-8 space-y-4">
              {locationFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* === OSTATECZNA POPRAWKA: Używamy zmiennych CSS dla gradientu === */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground/80">{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-card/50 p-4 border">
              <MapPin className="h-8 w-8 text-foreground/80 flex-shrink-0" />
              <div>
                <p className="font-bold">Adres inwestycji:</p>
                <p className="text-muted-foreground">
                  ul. Jaworowa, 63-500 Ostrzeszów
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[30rem] md:h-full overflow-hidden rounded-3xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.77000570884!2d17.93988067710376!3d51.48110591322285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ab63738128e09%3A0x1d5f1348ca433291!2sJaworowa%2C%2063-500%20Ostrzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1727289650085!5m2!1spl!2spl&styles=roadmap|element:geometry|stylers:color=0x242f3e&styles=roadmap|element:labels.text.fill|stylers:color=0x746855&styles=roadmap|element:labels.text.stroke|stylers:color=0x242f3e&styles=water|element:geometry|stylers:color=0x17263c&styles=water|element:labels.text.fill|stylers:color=0x515c6d&styles=water|element:labels.text.stroke|stylers:color=0x17263c"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(1) contrast(1.1)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji inwestycji"
            ></iframe>
          </div>
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
              Dom zaprojektowany dla Ciebie.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Odkryj przemyślany układ, który łączy otwartą przestrzeń dzienną z
              komfortową i prywatną strefą na piętrze.
            </p>
          </div>

          <div className="w-full mb-12">
            <div className="bg-card/50 rounded-3xl border p-8 shadow">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
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
                    className="relative block w-full overflow-hidden rounded-3xl border bg-card/50 cursor-pointer group"
                  >
                    <Image
                      src={view.image}
                      alt={view.alt}
                      width={800}
                      height={800}
                      className="w-full h-auto"
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
                      Całkowita powierzchnia użytkowa
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

# components\ui\sheet.tsx

```tsx
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

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
  /* config options here */
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
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-tabs": "^1.1.13",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel": "^8.6.0",
    "embla-carousel-react": "^8.6.0",
    "framer-motion": "^12.23.22",
    "lucide-react": "^0.544.0",
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

# public\Art.jpg

This is a binary file of the type: Image

# public\Artboard 1.jpg

This is a binary file of the type: Image

# public\Artboard_2.jpg

This is a binary file of the type: Image

# public\file.svg

This is a file of the type: SVG Image

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

# public\galeria\8.jpg

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

# public\globe.svg

This is a file of the type: SVG Image

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

# public\next.svg

This is a file of the type: SVG Image

# public\plan-parter.png

This is a binary file of the type: Image

# public\plan-pietro.png

This is a binary file of the type: Image

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

# public\vercel.svg

This is a file of the type: SVG Image

# public\window.svg

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

