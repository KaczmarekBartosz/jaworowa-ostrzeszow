"use client";

import Image from "next/image";
import { ChevronRight, ChevronsDown } from "lucide-react";
import * as React from "react";

export function HeroSection() {
  const onScroll = React.useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollIntoView({
      behavior: reduced ? ("auto" as ScrollBehavior) : "smooth",
      block: "start",
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] w-full overflow-hidden"
    >
      {/* ========== MOBILE - ORYGINALNY ========== */}
      <div className="absolute inset-0 -z-20 md:hidden">
        <Image
          src="/Artboard_2.jpg"
          alt="Nowoczesny dom – mobile"
          fill
          priority
          className="object-cover object-bottom"
          sizes="100vw"
          quality={80}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-2/5 bg-gradient-to-b from-background/80 via-background/20 to-transparent md:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/5 bg-gradient-to-t from-background via-background/20 to-transparent md:hidden"
        aria-hidden
      />

      {/* ========== DESKTOP - VIDEO BACKGROUND ========== */}
      <div className="absolute inset-0 -z-20 hidden md:block">
        {/* Video element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="/Debowypark-Ostrzeszow-Hero-Video-Ultra-Optimized.mp4"
            type="video/mp4"
          />
          {/* Fallback image gdyby video się nie załadowało */}
          <Image
            src="/hero.jpg"
            alt="Osiedle Dębowy Park"
            fill
            className="object-cover object-center"
            sizes="100vw"
            quality={80}
          />
        </video>

        {/* Dark overlay na video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-black/90" />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden h-1/4 bg-gradient-to-b from-background/60 to-transparent md:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 hidden h-2/5 bg-gradient-to-t from-background via-background/40 to-transparent md:block"
        aria-hidden
      />

      {/* MOBILE CONTENT - ORYGINALNY */}
      <div className="relative z-10 block md:hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="grid h-[100svh] grid-rows-[0.3fr_auto_0.8fr]">
            <div />
            <div className="rounded-[2rem] bg-black/0 p-6 backdrop-blur-0">
              <h1 className="text-center font-extrabold text-white">
                <span className="block text-[1.375rem] tracking-tight text-white/90">
                  Osiedle
                </span>
                <span className="relative inline-block">
                  <span className="relative z-10 block text-[2.5rem] leading-[0.95] tracking-tight">
                    Dębowy Park
                  </span>
                  <Image
                    src="/underline-gradient-green.svg"
                    alt=""
                    width={760}
                    height={40}
                    className="pointer-events-none absolute -bottom-2 left-0 w-full select-none"
                    aria-hidden
                  />
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-prose text-center text-[1rem] leading-relaxed text-white/90">
                Nowoczesne osiedle wśród zieleni. Idealne dla Twojej rodziny.
              </p>
              <div className="mx-auto mt-8 max-w-[32rem]">
                <button
                  type="button"
                  onClick={() => onScroll("dlaczego-warto")}
                  className="group flex w-full items-center justify-between rounded-full border border-border/50 bg-card/50 px-2 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                >
                  <span className="pl-6 text-[1.05rem] font-medium text-foreground">
                    Dowiedz się więcej
                  </span>
                  <span className="mr-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transition-transform duration-300 group-hover:scale-110">
                    <ChevronRight
                      className="h-6 w-6 text-primary-foreground"
                      aria-hidden
                    />
                  </span>
                </button>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>

      {/* ========== DESKTOP - ULTRA PROFESSIONAL ========== */}
      <div className="relative z-10 hidden md:block">
        <div className="mx-auto w-full max-w-7xl px-12 2xl:px-16">
          <div className="flex h-[100svh] items-center">
            <div className="grid w-full grid-cols-12 gap-20 items-center">
              {/* LEFT - Main Content (8 columns) */}
              <div className="col-span-8 max-w-4xl space-y-10">
                {/* Title Section */}
                <div className="space-y-6">
                  <div className="text-base font-semibold uppercase tracking-[0.4em] text-white/80 mb-2">
                    Osiedle
                  </div>
                  <div className="relative inline-block">
                    <h1 className="text-[clamp(4rem,6.5vw,5.5rem)] font-black leading-[0.92] tracking-tight text-white">
                      Dębowy Park
                    </h1>
                    <Image
                      src="/underline-gradient-green.svg"
                      alt=""
                      width={800}
                      height={50}
                      className="pointer-events-none absolute -bottom-3 left-0 w-full select-none opacity-60"
                      aria-hidden
                      priority
                    />
                  </div>
                  <p className="max-w-xl text-xl leading-relaxed text-white/75">
                    Nowoczesne i bezpieczne osiedle wśród zieleni. Idealne
                    miejsce dla Ciebie i Twojej rodziny.
                  </p>
                </div>

                {/* Key Info Grid */}
                <div className="grid grid-cols-3 gap-8 pt-4">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white">103,3m²</div>
                    <div className="text-sm text-white/50">
                      Powierzchnia użytkowa
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white">A+</div>
                    <div className="text-sm text-white/50">
                      Klasa energetyczna
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white">2026</div>
                    <div className="text-sm text-white/50">
                      Planowane oddanie
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => onScroll("dlaczego-warto")}
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-xl shadow-white/20 transition-all duration-200 hover:shadow-2xl hover:shadow-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    Zobacz domy
                    <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onScroll("kontakt")}
                    className="inline-flex items-center rounded-xl border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  >
                    Kontakt
                  </button>
                </div>

                {/* Credits */}
                <div className="flex items-center gap-6 border-t border-white/10 pt-8 text-sm text-white/40">
                  <div className="flex items-center gap-2">
                    <span>Projekt:</span>
                    <a
                      href="https://www.instagram.com/vsd_ok/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white/60 transition-colors hover:text-white/80"
                    >
                      VIZAR Studio Design
                    </a>
                  </div>
                  <div className="h-4 w-px bg-white/20" />
                  <div className="flex items-center gap-2">
                    <span>Inwestor:</span>
                    <a
                      href="https://polmagsc.pl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white/60 transition-colors hover:text-white/80"
                    >
                      POLMAG s.c.
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT - Premium Dark Glass Card (4 columns) */}
              <div className="col-span-4">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-white/[0.02] to-white/5 p-6 shadow-2xl backdrop-blur-xl">
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="border-b border-white/10 pb-4">
                      <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                        Kluczowe zalety
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 group">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                          <div className="h-1.5 w-1.5 rounded-full bg-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            Prywatny ogród
                          </div>
                          <div className="text-sm text-white/50">
                            Przy każdym domu
                          </div>
                        </div>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div className="flex items-start gap-3 group">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                          <div className="h-1.5 w-1.5 rounded-full bg-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            Energooszczędność
                          </div>
                          <div className="text-sm text-white/50">Klasa A+</div>
                        </div>
                      </div>

                      <div className="h-px bg-white/10" />

                      <div className="flex items-start gap-3 group">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-white/20">
                          <div className="h-1.5 w-1.5 rounded-full bg-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">
                            Premium wykończenie
                          </div>
                          <div className="text-sm text-white/50">
                            Najwyższa jakość materiałów
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => onScroll("dlaczego-warto")}
        className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full p-2 transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        aria-label="Przewiń do następnej sekcji"
      >
        <ChevronsDown className="h-10 w-10 animate-bounce text-foreground/90" />
      </button>
    </section>
  );
}
