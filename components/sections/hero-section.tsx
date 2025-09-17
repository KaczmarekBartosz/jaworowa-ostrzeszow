"use client";

import Image from "next/image";
import { ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-dvh w-full overflow-hidden flex-col">
      {/* Pełne tło */}
      <Image
        src="/hero.jpg"
        alt="Nowoczesny dom z przestronnym wnętrzem"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/0 to-black/60" />

      {/* Treść */}
      <div className="relative z-20 mx-auto flex h-full min-h-dvh w-full max-w-7xl flex-1 flex-col justify-between p-6 pt-24 md:p-8 md:pt-32">
        <div>
          <h1 className="text-white text-balance break-words leading-[0.95] max-w-[22ch] text-[clamp(2.4rem,8vw,4.5rem)] md:text-[clamp(3rem,6vw,6rem)] font-bold">
            Domy z przyszłością
          </h1>
        </div>

        <div className="w-full max-w-md">
          <p className="text-xl text-white/80 md:text-2xl">
            Poznaj wyjątkowe miejsce dla Ciebie oraz Twojej rodziny i zamieszkaj
            mądrzej.
          </p>

          <Button
            onClick={() =>
              document
                .querySelector("#inwestycja")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group mb-14 mt-8 w-full justify-between pl-6 pr-2 h-auto py-2 rounded-full"
          >
            <span className="text-left text-lg font-medium">
              Dowiedz się więcej
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
              <ChevronRight className="h-6 w-6 text-primary-foreground" />
            </span>
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <ArrowDown className="h-6 w-6 animate-bounce text-white" />
      </div>
    </section>
  );
}
