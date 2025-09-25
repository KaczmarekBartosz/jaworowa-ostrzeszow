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
