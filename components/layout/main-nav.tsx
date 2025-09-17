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
        className="size-7 text-foreground flex-shrink-0"
        aria-hidden="true"
      />
      <span className="text-xl font-bold text-foreground tracking-tight">
        Jaworowa Ostrzeszów
      </span>
    </Link>
  );

  function smoothScroll(href: string) {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  function onDesktopNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScroll(href);
    }
  }

  function onMobileNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#")) {
      e.preventDefault();
      smoothScroll(href);
      setOpen(false);
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4 md:p-8">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between">
        {/* Mobile: logo + burger */}
        <div className="flex-1 md:hidden">
          <Logo />
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="h-14 w-14 p-0 text-foreground"
                aria-label="Otwórz menu"
              >
                <Menu className="size-8" />
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
                    className="h-14 w-14 p-0 text-foreground"
                    aria-label="Zamknij menu"
                  >
                    <X className="size-8" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="mt-24 flex flex-1 flex-col items-center justify-center gap-y-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => onMobileNavClick(e, item.href)}
                    className="text-3xl font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto text-center pb-4">
                <Button size="lg" className="w-full" asChild>
                  <a
                    href="#kontakt"
                    onClick={(e) => onMobileNavClick(e, "#kontakt")}
                  >
                    Kontakt
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop navbar */}
        <div className="hidden md:flex w-full items-center justify-between rounded-full bg-background/50 p-2 pl-8 border backdrop-blur-sm">
          <Logo />
          <nav className="flex gap-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => onDesktopNavClick(e, item.href)}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* Ujednolicony CTA jak w hero: wypełniony akcentem */}
          <Button variant="default" className="rounded-full" asChild>
            <a
              href="#kontakt"
              onClick={(e) => onDesktopNavClick(e, "#kontakt")}
            >
              Kontakt
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
