"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="contact-heading"
    >
      {/* Nagłówek + lead */}
      <div className="mx-auto max-w-3xl text-center px-6 md:px-8">
        <h2
          id="contact-heading"
          className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"
        >
          Skontaktuj się z nami
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Masz pytania? Zadzwoń lub napisz, a my odpowiemy najszybciej, jak to
          możliwe.
        </p>
      </div>

      {/* Blok szybkich kontaktów + CTA */}
      <div className="mx-auto mt-12 max-w-4xl px-6 md:px-8">
        <div className="rounded-3xl border bg-card/50 p-6 md:p-8 backdrop-blur-sm">
          {/* Informacyjne karty - tylko tekst, bez przycisków */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Telefon */}
            <div className="rounded-2xl border bg-background/60 p-5 md:p-6">
              <div className="flex items-start gap-3">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow"
                  aria-hidden="true"
                >
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    Zadzwoń do nas
                  </h3>
                  <a
                    href="tel:+48698470685"
                    className="mt-0.5 block text-lg font-bold text-primary hover:underline"
                  >
                    +48 698 470 685
                  </a>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Pon–Pt: 9:00–17:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* E-mail */}
            <div className="rounded-2xl border bg-background/60 p-5 md:p-6">
              <div className="flex items-start gap-3">
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow"
                  aria-hidden="true"
                >
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">
                    Napisz do nas
                  </h3>
                  <a
                    href="mailto:office@polmag.org.pl"
                    className="mt-0.5 block break-all text-lg font-bold text-primary hover:underline"
                  >
                    office@polmag.org.pl
                  </a>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Odpowiadamy w 24h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Główne CTA - jednoznaczne przyciski akcji */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button asChild size="lg" className="rounded-full">
              <a href="tel:+48698470685">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Zadzwoń teraz
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <a href="mailto:office@polmag.org.pl">
                <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                Napisz wiadomość
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
