"use client";

import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, X } from "lucide-react";
import { ThemeToggle } from "@/components/common/theme-toggle";

const navItems = [
  { href: "#inwestycja", label: "Inwestycja" },
  { href: "#domy", label: "Domy" },
  { href: "#plany", label: "Plany" },
  { href: "#galeria", label: "Galeria" },
  { href: "#lokalizacja", label: "Lokalizacja" },
  { href: "#kontakt", label: "Kontakt" },
];

export function MainNav() {
  const [open, setOpen] = React.useState(false);

  const Logo = () => (
    <Link
      href="/"
      className="flex items-center gap-2"
      aria-label="Strona główna"
    >
      <Home
        className="size-6 text-foreground flex-shrink-0"
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
      // Opóźnienie jest kluczowe, aby animacja zamykania panelu nie blokowała przewijania
      setTimeout(() => smoothScroll(href), 300);
    } else {
      smoothScroll(href);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 p-4 md:p-8">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between">
        {/* Mobile */}
        <div className="flex-1 md:hidden">
          <Logo />
        </div>
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              {/* POPRAWKA: Używamy składni arbitralnej wartości */}
              <Button
                variant="ghost"
                className="h-[48px] w-[48px] p-0 text-foreground" // 13 * 4px = 52px
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
                  <ThemeToggle />
                  <SheetClose asChild>
                    {/* POPRAWKA: Używamy składni arbitralnej wartości */}
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

        {/* Desktop */}
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
            <ThemeToggle />
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
