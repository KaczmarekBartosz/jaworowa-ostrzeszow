"use client";

import Image from "next/image";
import { ArrowDown, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex h-[100dvh] flex-col overflow-hidden">
      <Image
        src="/hero_4.png"
        alt="Nowoczesny dom z przestronnym wnętrzem"
        fill
        priority
        className="z-0 object-cover transition-transform duration-300"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-black/0 to-black/60" />

      <div className="relative z-20 mx-auto flex h-full min-h-screen w-full max-w-7xl flex-1 flex-col justify-between p-6 pt-24 md:p-8 md:pt-32">
        <div>
          <h1 className="max-w-3xl mt-4 p-6 text-5xl font-bold text-white md:text-8xl">
            Domy z{" "}
            <span className="relative inline-block">
              {/* === KLUCZOWA ZMIANA: Dodatkowy span dla tekstu === */}
              <span className="relative z-10">przyszłością</span>
              {/* DODAJEMY NASZE PODKREŚLENIE SVG */}
              <Image
                src="/underline_3.svg"
                alt="" // Pusty alt, ponieważ to element dekoracyjny
                width={246}
                height={23}
                className="absolute -bottom-3 left-0 w-full md:-bottom-4"
                aria-hidden="true"
              />
            </span>
          </h1>
        </div>

        <div className="w-full max-w-md">
          <p className="text-lg text-white/80 md:text-2xl">
            Poznaj wyjątkowe miejsce dla Ciebie oraz Twojej rodziny i zamieszkaj
            mądrzej.
          </p>

          {/* === OSTATECZNA, POPRAWNA WERSJA PRZYCISKU CTA === */}
          <button
            onClick={() =>
              document
                .querySelector("#inwestycja")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            // Tło "glass" dla całego przycisku
            className="group mb-24 mt-8 flex w-full items-center justify-between rounded-full bg-white/10 p-2 text-left transition-all duration-300 hover:bg-white/20 border border-white/20 backdrop-blur-sm"
          >
            <span className="pl-6 text-lg font-medium text-white">
              Dowiedz się więcej
            </span>
            {/* Tło gradientowe TYLKO dla ikony */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#F53F0F] to-[#F97318] transition-transform duration-300 group-hover:scale-110">
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
