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
