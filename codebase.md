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

# components\common\feature-card.tsx

```tsx
"use client";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  children: React.ReactNode; // Prop `icon` został zastąpiony przez `children`
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export function FeatureCard({
  children,
  title,
  description,
  isHighlighted = false,
}: FeatureCardProps) {
  const cardClasses = cn(
    "rounded-3xl p-6 flex flex-col justify-between h-full transition-all duration-300",
    isHighlighted
      ? "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground"
      : "bg-card/50 border backdrop-blur-sm hover:bg-card/80"
  );

  return (
    <div className={cardClasses}>
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-full ${
          isHighlighted ? "bg-white/10" : "bg-secondary"
        }`}
        aria-hidden="true"
      >
        {/* Renderujemy przekazaną ikonę */}
        {children}
      </div>
      <div>
        <p
          className={`mt-4 text-sm ${
            isHighlighted
              ? "text-primary-foreground/80"
              : "text-muted-foreground"
          }`}
        >
          {title}
        </p>
        <p
          className={`text-xl font-bold ${
            isHighlighted ? "" : "text-foreground"
          }`}
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
        {/* Usunęliśmy sztywny 'aspect-[3/4]'. Wysokość będzie teraz kontrolowana z zewnątrz. */}
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
            <h3 className="text-sm font-bold text-white">{title}</h3>
          </div>

          <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
            <Maximize className="size-5" />
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-7xl w-full bg-transparent border-none p-4">
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
          {/* Kolumna 1: Logo i opis */}
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

          {/* Kolumna 2 i 3: Linki i kontakt */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Nawigacja</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#inwestycja"
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

        {/* Dolna część stopki */}
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jaworowa Ostrzeszów. Wszelkie prawa
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

// === OSTATECZNA, POPRAWNA LISTA SEKCJI ===
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
        {/*Nazwa_firmy*/}
      </span>
    </Link>
  );

  const smoothScroll = (href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isMobile = false
  ) => {
    e.preventDefault();
    if (isMobile) {
      setOpen(false);
      setTimeout(() => smoothScroll(href), 300);
    } else {
      smoothScroll(href);
    }
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
            scrolled &&
              "rounded-full border bg-background/50 p-2 backdrop-blur-sm"
          )}
        >
          <div className={cn("flex-1", scrolled && "pl-2")}>
            <Logo />
          </div>
          <div className="flex items-center gap-1">
            <ThemeToggle size="lg" />
            <Sheet open={open} onOpenChange={setOpen}>
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
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, true)}
                      className="text-3xl font-medium text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pb-4">
                  <Button size="lg" className="w-full rounded-full" asChild>
                    <a
                      href="#kontakt"
                      onClick={(e) => handleNavClick(e, "#kontakt", true)}
                    >
                      Kontakt
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="hidden w-full items-center justify-between rounded-full border bg-background/50 p-2 pl-8 backdrop-blur-sm md:flex">
          <Logo />
          <nav className="flex gap-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <ThemeToggle size="lg" />
            <Button className="rounded-full" asChild>
              <a href="#kontakt" onClick={(e) => handleNavClick(e, "#kontakt")}>
                Kontakt
              </a>
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
import { GalleryCard } from "@/components/common/gallery-card";

// POPRAWKA: Zaktualizowano wartości 'span' dla uzyskania nieregularnego układu
const galleryImages = [
  {
    imageUrl: "/jaworowa-wizualizacja-1.png",
    title: "Dom dla całej rodziny",
    span: "row-span-1", // Średnia wysokość
  },
  {
    imageUrl: "/jaworowa-wizualizacja-salon.jpeg",
    title: "Wnętrze salonu",
    span: "row-span-2", // Karta wysoka
  },
  {
    imageUrl: "/jaworowa-wizualizacja-3.png",
    title: "Harmonia domu z otaczającą zielenią",
    span: "row-span-2", // Karta wysoka
  },
  {
    imageUrl: "/jaworowa-wizualizacja-4.png",
    title: "Nowoczesna bryła budynku",
    span: "row-span-1", // Średnia wysokość
  },
  {
    imageUrl: "/jaworowa-wizualizacja-5.jpg",
    title: "Przestronny podjazd z garażem",
    span: "row-span-1", // Średnia wysokość
  },
  {
    imageUrl: "/jaworowa-wizualizacja-6.jpg",
    title: "Wewnętrzna droga osiedlowa",
    span: "row-span-2", // Karta wysoka
  },
  {
    imageUrl: "/jaworowa-wizualizacja-7.png",
    title: "Eleganckie wejście do domu",
    span: "row-span-2", // Karta wysoka
  },
  {
    imageUrl: "/jaworowa-wizualizacja-2.jpg",
    title: "Widok na całe osiedle z lotu ptaka",
    span: "row-span-1", // Średnia wysokość
  },
];

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mat-32"
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

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 grid-flow-dense [grid-auto-rows:150px]">
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

# components\sections\hero-section.tsx

```tsx
"use client";

import Image from "next/image";
import { ChevronsDown, ChevronRight, Trees } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex h-[100dvh] flex-col overflow-hidden">
      <Image
        src="/Artboard_2.jpg"
        alt="Nowoczesny dom z przestronnym wnętrzem - Osiedle Dębowy Park"
        fill
        priority
        className="z-0 object-cover object-bottom"
      />

      <div className="absolute inset-0 z-10 hero-gradient-overlay" />

      <div className="relative z-20 mx-auto flex h-full min-h-screen w-full max-w-7xl flex-1 flex-col justify-between p-6 pt-24 md:p-8 md:pt-32">
        <div>
          <h1 className="max-w-3xl mt-4 p-0 text-3xl text-center font-bold text-white md:text-8xl">
            Osiedle{" "}
            <span className="relative inline-flex">
              <span className="relative z-10 text-5xl text-center md:text-8xl">
                Dębowy Park
              </span>
              <Image
                src="/underline-gradient-green.svg"
                alt=""
                width={250}
                height={20}
                className="absolute -bottom-2 left-0 w-full md:-bottom-3"
                aria-hidden="true"
              />
            </span>
          </h1>
        </div>

        <div className="w-full p-8 max-w-md mb-80">
          <p className="text-lg text-center text-foreground md:text-2xl">
            Poznaj wyjątkowe miejsce dla Ciebie i Twojej rodziny.
          </p>

          <button
            onClick={() =>
              document
                .querySelector("#dlaczego-warto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group mb-24 mt-8 flex w-full items-center justify-between rounded-full bg-secondary/50 p-2 text-left transition-all duration-300 hover:bg-secondary/80 border backdrop-blur-sm"
          >
            <span className="pl-6 text-lg font-medium text-foreground">
              Dowiedz się więcej
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transition-transform duration-300 group-hover:scale-110">
              <ChevronRight className="h-6 w-6 text-primary-foreground" />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2">
        <ChevronsDown className="h-10 w-10 animate-bounce text-foreground" />
      </div>
    </section>
  );
}

```

# components\sections\investment-section.tsx

```tsx
import Image from "next/image";
import { FeatureCard } from "@/components/common/feature-card";
import { FeatureCarousel } from "@/components/common/feature-carousel";
import { Home, Trees, Shield, MapPin } from "lucide-react";

// Definiujemy dane wewnątrz komponentu
const features = [
  {
    icon: <Trees className="size-6 text-primary-foreground" />,
    title: "Harmonia z naturą",
    description: "Prywatny ogród i dużo zieleni",
    isHighlighted: true,
  },
  {
    icon: <Home className="size-6 text-secondary-foreground" />,
    title: "Dla Twojej wygody",
    description: "Przemyślany układ",
  },
  {
    icon: <Shield className="size-6 text-secondary-foreground" />,
    title: "Dla Twojego spokoju",
    description: "Kameralne i bezpieczne osiedle",
  },
  {
    icon: <MapPin className="size-6 text-secondary-foreground" />,
    title: "Dla oszczędności Twojego czasu",
    description: "Blisko miasta",
  },
];

export function InvestmentSection() {
  return (
    <section
      id="dlaczego-warto"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Miejsce, w którym zapuścisz korzenie.
          </h2>
        </div>
      </div>

      {/* WERSJA MOBILNA: Karuzela */}
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

      {/* WERSJA DESKTOP: Siatka */}
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

      {/* WERSJA MOBILNA: Treść */}
      <div className="mx-auto mt-16 max-w-7xl px-6 md:px-8 md:hidden">
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Dąb to od wieków symbol siły, natury i zaufania. Na osiedlu Dębowy
            Park łączymy te ponadczasowe wartości z nowoczesnymi technologiami
            budownictwa, tworząc solidne fundamenty dla Ciebie i Twojej rodziny.
          </p>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/investment-image.png"
              alt="Wizualizacja nowoczesnej fasady domu w ciągu dnia"
              width={1200}
              height={800}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Naszą ambicją było stworzenie osiedla, które nie tylko zachwyca
            architekturą, ale przede wszystkim zapewnia spokój, bezpieczeństwo i
            komfort w codziennym życiu.
          </p>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/investment-image-green.jpg"
              alt="Wizualizacja osiedla Domy z Przyszłością z dużą ilością zieleni"
              width={1200}
              height={800}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* WERSJA DESKTOP: Treść */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16 hidden md:block">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
          <div className="space-y-8 flex flex-col">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dąb to od wieków symbol siły, natury i zaufania. Na osiedlu Dębowy
              Park łączymy te ponadczasowe wartości z nowoczesnymi technologiami
              budownictwa, tworząc solidne fundamenty dla Ciebie i Twojej
              rodziny.
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
              Naszą ambicją było stworzenie osiedla, które nie tylko zachwyca
              architekturą, ale przede wszystkim zapewnia spokój, bezpieczeństwo
              i komfort w codziennym życiu.
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
  { icon: ShoppingCart, text: "Sklepy i usługi w zasięgu spaceru" },
  { icon: School, text: "Bliskość szkół i przedszkoli" },
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
              Podmiejska cisza w sercu Ostrzeszowa
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Inwestycja przy ulicy Jaworowej w Ostrzeszowie to miejsce, gdzie
              nowoczesne osiedle spotyka się z naturą. Zyskujesz spokój i
              prywatność, a jednocześnie szybki dostęp do szkół, sklepów,
              punktów usługowych i centrum miasta.
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

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Maximize, Sofa, BedDouble, CheckCircle2 } from "lucide-react";

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

// Zmieniamy strukturę, aby łatwiej było stylizować tekst
const keyFeatures = [
  {
    icon: Maximize,
    textStart: "Ponad",
    textBold: "103 m²",
    textEnd: "przestrzeni dla Ciebie",
  },
  {
    icon: Sofa,
    textStart: "Przestronny salon z jadalnią i kuchnią",
    textBold: "",
    textEnd: "",
  },
  {
    icon: BedDouble,
    textStart: "Trzy wygodne sypialnie na piętrze",
    textBold: "",
    textEnd: "",
  },
  {
    icon: CheckCircle2,
    textStart: "Dwie łazienki i dwie garderoby",
    textBold: "",
    textEnd: "",
  },
];

export function PlansSection() {
  return (
    <section
      id="domy"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* === WERSJA MOBILNA === */}
        <div className="md:hidden">
          <div className="w-full">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Dom zaprojektowany dla Ciebie.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Odkryj przemyślany układ, który łączy otwartą przestrzeń dzienną z
              komfortową i prywatną strefą na piętrze.
            </p>
            <ul className="mt-8 space-y-4">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground/80">
                    {feature.textStart}{" "}
                    {feature.textBold && (
                      <span className="font-bold text-foreground">
                        {feature.textBold}
                      </span>
                    )}{" "}
                    {feature.textEnd}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full mt-12">
            <Tabs defaultValue="parter" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="parter">Parter</TabsTrigger>
                <TabsTrigger value="pietro">Piętro</TabsTrigger>
              </TabsList>
              <TabsContent value="parter" className="mt-6">
                <div className="overflow-hidden rounded-3xl border bg-card/50">
                  <Image
                    src="/plan-parter.png"
                    alt="Rzut architektoniczny parteru domu"
                    width={800}
                    height={800}
                  />
                </div>
              </TabsContent>
              <TabsContent value="pietro" className="mt-6">
                <div className="overflow-hidden rounded-3xl border bg-card/50">
                  <Image
                    src="/plan-pietro.png"
                    alt="Rzut architektoniczny piętra domu"
                    width={800}
                    height={800}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold">Szczegółowy metraż</h3>
            <Table className="mt-4">
              <TableBody>
                <TableRow className="bg-secondary/50 font-bold">
                  <TableCell colSpan={2}>Parter (50,98 m²)</TableCell>
                </TableRow>
                {parterRooms.map((room) => (
                  <TableRow key={room.name}>
                    <TableCell>{room.name}</TableCell>
                    <TableCell className="text-right font-medium">
                      {room.area}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-secondary/50 font-bold">
                  <TableCell colSpan={2}>Piętro (52,32 m²)</TableCell>
                </TableRow>
                {pietroRooms.map((room) => (
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

        {/* === WERSJA DESKTOP === */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
            <div className="w-full">
              <Tabs defaultValue="parter" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="parter">Parter</TabsTrigger>
                  <TabsTrigger value="pietro">Piętro</TabsTrigger>
                </TabsList>
                <TabsContent value="parter" className="mt-6">
                  <div className="overflow-hidden rounded-3xl border bg-card/50">
                    <Image
                      src="/plan-parter.png"
                      alt="Rzut architektoniczny parteru domu"
                      width={800}
                      height={800}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="pietro" className="mt-6">
                  <div className="overflow-hidden rounded-3xl border bg-card/50">
                    <Image
                      src="/plan-pietro.png"
                      alt="Rzut architektoniczny piętra domu"
                      width={800}
                      height={800}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Dom zaprojektowany dla Ciebie.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Każdy segment oferuje ok.{" "}
                <span className="font-bold text-foreground">103,30 m²</span>{" "}
                powierzchni użytkowej, zoptymalizowanej do codziennego życia:
                przestronny parter dla wspólnego spędzania czasu i wygodne
                piętro zapewniające prywatność.
              </p>
              <ul className="mt-8 space-y-4">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">
                      {feature.textStart}{" "}
                      {feature.textBold && (
                        <span className="font-bold text-foreground">
                          {feature.textBold}
                        </span>
                      )}{" "}
                      {feature.textEnd}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-24">
            <h3 className="text-3xl font-semibold text-center">
              Szczegółowy metraż
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">
                      Parter (50,98 m²)
                    </TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {parterRooms.map((room) => (
                    <TableRow key={room.name}>
                      <TableCell>{room.name}</TableCell>
                      <TableCell className="text-right font-medium">
                        {room.area}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">
                      Piętro (52,32 m²)
                    </TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pietroRooms.map((room) => (
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
      </div>
    </section>
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
            Dlaczego Dębowy Park?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Posłuchaj, co o Osiedlu Dębowy Park mówią ci, którzy już wkrótce
            nazwą je swoim domem.
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
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

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

# public\1s.png

This is a binary file of the type: Image

# public\2a3.jpg

This is a binary file of the type: Image

# public\3s2.jpg

This is a binary file of the type: Image

# public\5.jpg

This is a binary file of the type: Image

# public\6.jpg

This is a binary file of the type: Image

# public\9.jpg

This is a binary file of the type: Image

# public\9s2.jpg

This is a binary file of the type: Image

# public\Artboard 1.jpg

This is a binary file of the type: Image

# public\Artboard_2.jpg

This is a binary file of the type: Image

# public\file.svg

This is a file of the type: SVG Image

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

# public\hero_final_large.jpg

This is a binary file of the type: Image

# public\hero_final.jpg

This is a binary file of the type: Image

# public\hero.jpg

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

# public\jaworowa-wizualizacja-5.jpg

This is a binary file of the type: Image

# public\jaworowa-wizualizacja-6.jpg

This is a binary file of the type: Image

# public\jaworowa-wizualizacja-7.png

This is a binary file of the type: Image

# public\jaworowa-wizualizacja-salon.jpeg

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

