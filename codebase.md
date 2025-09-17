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

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
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

:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.129 0.042 264.695);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.129 0.042 264.695);
  --primary: oklch(0.208 0.042 265.755);
  --primary-foreground: oklch(0.984 0.003 247.858);
  --secondary: oklch(0.968 0.007 247.896);
  --secondary-foreground: oklch(0.208 0.042 265.755);
  --muted: oklch(0.968 0.007 247.896);
  --muted-foreground: oklch(0.554 0.046 257.417);
  --accent: oklch(0.968 0.007 247.896);
  --accent-foreground: oklch(0.208 0.042 265.755);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.929 0.013 255.508);
  --input: oklch(0.929 0.013 255.508);
  --ring: oklch(0.704 0.04 256.788);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.984 0.003 247.858);
  --sidebar-foreground: oklch(0.129 0.042 264.695);
  --sidebar-primary: oklch(0.208 0.042 265.755);
  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
  --sidebar-accent: oklch(0.968 0.007 247.896);
  --sidebar-accent-foreground: oklch(0.208 0.042 265.755);
  --sidebar-border: oklch(0.929 0.013 255.508);
  --sidebar-ring: oklch(0.704 0.04 256.788);
}

.dark {
  --background: oklch(
    0.15 0.01 265
  ); /* ZMIANA: Ciemniejsze, niemal czarne tło */
  --foreground: oklch(1 0 0); /* ZMIANA: Czysta biel dla tekstu */
  --card: oklch(0.208 0.042 265.755);
  --card-foreground: oklch(0.984 0.003 247.858);
  --popover: oklch(0.208 0.042 265.755);
  --popover-foreground: oklch(0.984 0.003 247.858);
  --primary: oklch(0.704 0.17 64.9); /* ZMIANA: Pomarańczowy akcent #F5A623 */
  --primary-foreground: oklch(
    0.189 0.002 264.7
  ); /* ZMIANA: Ciemny tekst dla kontrastu na pomarańczowym */
  --secondary: oklch(0.279 0.041 260.031);
  --secondary-foreground: oklch(0.984 0.003 247.858);
  --muted: oklch(0.279 0.041 260.031);
  --muted-foreground: oklch(
    0.704 0 0
  ); /* ZMIANA: Jaśniejszy szary dla wyciszonego tekstu */
  --accent: oklch(0.279 0.041 260.031);
  --accent-foreground: oklch(0.984 0.003 247.858);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.551 0.027 264.364);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.208 0.042 265.755);
  --sidebar-foreground: oklch(0.984 0.003 247.858);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
  --sidebar-accent: oklch(0.279 0.041 260.031);
  --sidebar-accent-foreground: oklch(0.984 0.003 247.858);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.551 0.027 264.364);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
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

export const metadata = {
  title: "Jaworowa Ostrzeszów",
  description: "Perfekcja w prostocie — każdy piksel ma znaczenie.",
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
          defaultTheme="system"
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

// Prosty komponent dla sekcji-placeholderów
const PlaceholderSection = ({ id, title }: { id: string; title: string }) => (
  <section
    id={id}
    className="min-h-screen bg-background py-20 md:py-32 scroll-mt-24"
  >
    <div className="mx-auto max-w-7xl px-6 md:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InvestmentSection />
      {/* POPRAWKA: Dodajemy puste sekcje, aby linki miały gdzie nawigować */}
      <PlaceholderSection id="domy" title="Domy" />
      <PlaceholderSection id="plany" title="Plany" />
      <PlaceholderSection id="galeria" title="Galeria" />
      <PlaceholderSection id="lokalizacja" title="Lokalizacja" />
      <PlaceholderSection id="kontakt" title="Kontakt" />
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
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  isHighlighted = false,
}: FeatureCardProps) {
  const cardClasses = `
    rounded-3xl p-6 flex flex-col justify-between h-full transition-all duration-300
    ${
      isHighlighted
        ? "bg-primary text-primary-foreground"
        : "bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10"
    }
  `;

  return (
    <div className={cardClasses}>
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-full ${
          isHighlighted ? "bg-white/10" : "bg-white/10"
        }`}
      >
        <Icon
          className={`h-6 w-6 ${
            isHighlighted ? "text-primary-foreground" : "text-white"
          }`}
        />
      </div>
      <div>
        <p
          className={`mt-4 text-sm ${
            isHighlighted ? "text-primary-foreground/80" : "text-white/60"
          }`}
        >
          {title}
        </p>
        <p className="text-xl font-bold">{description}</p>
      </div>
    </div>
  );
}

```

# components\common\feature-carousel.tsx

```tsx
"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

// Definiujemy typy dla propsów, aby komponent mógł przyjąć dowolne dzieci
type FeatureCarouselProps = {
  children: React.ReactNode;
};

export function FeatureCarousel({ children }: FeatureCarouselProps) {
  // Hook z Embla Carousel. 'align: "start"' zapewnia, że slajdy doklejają się do lewej krawędzi.
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    // Główny kontener karuzeli. `overflow-hidden` jest kluczowe.
    <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
      {/* Kontener na slajdy. Na mobile jest to flex, na desktop nie ma specjalnych stylów. */}
      <div className="flex md:contents">
        {React.Children.map(children, (child, index) => (
          // Każdy slajd. `flex: 0 0 80%` to serce efektu "peek-a-boo" na mobile.
          <div
            key={index}
            className="flex-shrink-0 flex-grow-0 basis-4/5 pl-4 md:basis-auto md:p-0"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}

```

# components\layout\main-nav.tsx

```tsx
"use client";

import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, X } from "lucide-react";

const navItems = [
  { href: "#inwestycja", label: "Inwestycja" },
  { href: "#domy", label: "Domy" },
  { href: "#plany", label: "Plany" },
  { href: "#galeria", label: "Galeria" },
  { href: "#lokalizacja", label: "Lokalizacja" },
  { href: "#kontakt", label: "Kontakt" },
];

export function MainNav() {
  const Logo = () => (
    // Używamy Link z Next.js tylko dla nawigacji do strony głównej
    <Link href="/" className="flex items-center gap-2">
      <Home className="size-7 text-white flex-shrink-0" />
      <span className="text-xl font-bold text-white tracking-tight">
        {/* Nazwa */}
      </span>
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4 md:p-8">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between">
        <div className="flex-1 md:hidden">
          <Logo />
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="h-14 w-14 p-0"
                aria-label="Otwórz menu"
              >
                <Menu className="size-8 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full bg-background border-none p-4"
            >
              <div className="flex h-16 items-center justify-between">
                <Logo />
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    className="h-14 w-14 p-0"
                    aria-label="Zamknij menu"
                  >
                    <X className="size-8 text-white" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="mt-24 flex flex-1 flex-col items-center justify-center gap-y-8">
                {navItems.map((item) => (
                  // POPRAWKA: Używamy <a> i owijamy go w SheetClose asChild
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="text-3xl font-medium text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto text-center pb-4">
                <Button size="lg" className="w-full">
                  Skontaktuj się
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* WERSJA DESKTOP */}
        <div className="hidden md:flex w-full items-center justify-between rounded-full bg-white/10 p-2 pl-8 border border-white/20 backdrop-blur-sm">
          <Logo />
          <nav className="flex gap-x-8">
            {navItems.map((item) => (
              // POPRAWKA: Używamy <a> zamiast Link dla kotwic
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button className="rounded-full bg-white/10 text-white hover:bg-white/20">
            Kontakt
          </Button>
        </div>
      </div>
    </header>
  );
}

```

# components\sections\hero-section.tsx

```tsx
"use client"; // Dodajemy "use client" ze względu na onClick

import Image from "next/image";
import { ArrowDown, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col">
      <Image
        src="/hero.jpg"
        alt="Nowoczesny dom z przestronnym wnętrzem"
        fill
        priority
        // POPRAWKA: Używamy klasy zamiast przestarzałego propa
        className="z-0 object-cover"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/0 to-black/60" />

      <div className="relative z-20 mx-auto flex h-full min-h-screen w-full max-w-7xl flex-1 flex-col justify-between p-6 pt-24 md:p-8 md:pt-32">
        <div>
          <h1 className="max-w-3xl text-6xl font-bold text-white md:text-8xl">
            Domy z przyszłością
          </h1>
        </div>

        <div className="w-full max-w-md">
          <p className="text-xl text-white/80 md:text-2xl">
            Poznaj wyjątkowe miejsce dla Ciebie oraz Twojej rodziny i zamieszkaj
            mądrzej.
          </p>

          <button
            // POPRAWKA: Dodajemy onClick do przewijania
            onClick={() =>
              document
                .querySelector("#inwestycja")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group mb-14 mt-8 flex w-full items-center justify-between rounded-full bg-white/10 p-2 text-left transition-all duration-300 hover:bg-white/20 border border-white/20 backdrop-blur-sm"
          >
            <span className="pl-6 text-lg font-medium text-white">
              Dowiedz się więcej
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:scale-110">
              <ChevronRight className="h-6 w-6 text-primary-foreground" />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <ArrowDown className="h-6 w-6 animate-bounce text-white" />
      </div>
    </section>
  );
}

```

# components\sections\investment-section.tsx

```tsx
import { FeatureCard } from "@/components/common/feature-card";
import { FeatureCarousel } from "@/components/common/feature-carousel";
import { Button } from "@/components/ui/button";
import { AreaChart, Building2, Trees, Paintbrush } from "lucide-react";

const features = [
  {
    icon: AreaChart,
    title: "Powierzchnia",
    description: "Ponad 103 m²",
    isHighlighted: true,
  },
  {
    icon: Building2,
    title: "Liczba budynków",
    description: "7-8 jednostek",
  },
  {
    icon: Paintbrush,
    title: "Architektura",
    description: "Nowoczesna",
  },
  {
    icon: Trees,
    title: "Otoczenie",
    description: "Bliskość zieleni",
  },
];

export function InvestmentSection() {
  return (
    <section
      id="inwestycja"
      className="bg-background py-20 md:py-32 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            O Inwestycji
          </h2>
        </div>
      </div>

      {/* === UKŁAD MOBILNY: KARUZELA (widoczna do breakpointu 'md') === */}
      <div className="mt-12 md:hidden">
        <FeatureCarousel>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </FeatureCarousel>
      </div>

      {/* === UKŁAD DESKTOP: SIATKA (widoczna od breakpointu 'md') === */}
      <div className="mx-auto mt-12 hidden max-w-7xl px-6 md:grid md:grid-cols-4 md:gap-8 md:px-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Tekst Opisowy i CTA */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-white/80">
              Domy z Przyszłością to nowoczesna inwestycja deweloperska
              składająca się z domów w zabudowie bliźniaczej. Każdy budynek
              oferuje dwa poziomy komfortu: parter z przestronnym salonem i
              aneksem kuchennym oraz poddasze z sypialniami i pokojami. Osiedle
              zaprojektowano z myślą o harmonii z naturą, oferując zielone
              tereny, wewnętrzne drogi dojazdowe i indywidualne parkingi.
            </p>
            <p className="mt-6 text-base text-white/60">
              Jeśli marzysz o własnym domu bliźniaczym w osiedlu z przyszłością,
              nasza inwestycja deweloperska to idealny wybór. Domy na sprzedaż w
              ramach tej inwestycji łączą funkcjonalność z estetyką, zapewniając
              idealną przestrzeń dla Twojej rodziny.
            </p>
          </div>
          <div className="flex items-start">
            <Button size="lg" className="rounded-full w-full md:w-auto">
              Zobacz plany
            </Button>
          </div>
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
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
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
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

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
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "embla-carousel-react": "^8.6.0",
    "lucide-react": "^0.544.0",
    "next": "15.5.3",
    "next-themes": "^0.4.6",
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
  plugins: ["@tailwindcss/postcss"],
};

export default config;

```

# public\file.svg

This is a file of the type: SVG Image

# public\globe.svg

This is a file of the type: SVG Image

# public\hero.jpg

This is a binary file of the type: Image

# public\next.svg

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

