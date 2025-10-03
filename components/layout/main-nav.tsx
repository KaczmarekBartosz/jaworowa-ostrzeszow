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
  { href: "#dlaczego-warto", label: "Dlaczego warto?" },
  { href: "#domy", label: "Domy i plany" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kalkulator", label: "Finansowanie" },
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
