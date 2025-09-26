"use client";

import Image from "next/image";
import { ChevronRight, ChevronsDown } from "lucide-react";
import * as React from "react";

/**
 * Alt Hero v7 — HIGH on mobile, LOWER on desktop
 * - MOBILE (<= md-1): content pushed UP via 3-row grid (1.7fr / auto / 0.8fr)
 * - DESKTOP (md+): content panel lowered using a page-high grid (1fr / auto / 1.6fr)
 *   Panel stays left-aligned with nav/container; "Dębowy Park" stays on one line.
 */
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
      {/* FULL-BLEED BG */}
      <Image
        src="/Artboard_2.jpg"
        alt="Nowoczesny dom w otoczeniu zieleni – Osiedle Dębowy Park"
        fill
        priority
        className="-z-10 object-cover object-bottom"
        sizes="100vw"
        quality={80}
      />

      {/* Contrast helpers */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-2/5 bg-gradient-to-b from-background/80 via-background/20 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/5 bg-gradient-to-t from-background via-background/20 to-transparent"
        aria-hidden
      />

      {/* ================= MOBILE (HIGH) ================= */}
      <div className="relative z-10 block md:hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          {/* Push content up: bigger top spring */}
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
                Poznaj wyjątkowe miejsce dla Ciebie i Twojej rodziny.
              </p>

              <div className="mx-auto mt-8 max-w-[32rem]">
                <button
                  type="button"
                  onClick={() => onScroll("dlaczego-warto")}
                  className="group flex w-full items-center justify-between rounded-full border border-white/15 bg-white/10 px-2 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span className="pl-6 text-[1.05rem] font-medium text-white">
                    Dowiedz się więcej
                  </span>
                  <span className="mr-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transition-transform duration-300 group-hover:scale-110">
                    <ChevronRight className="h-6 w-6 text-white" aria-hidden />
                  </span>
                </button>
              </div>
            </div>

            <div />
          </div>
        </div>
      </div>

      {/* ================= DESKTOP (LOW) ================= */}
      <div className="relative z-10 hidden md:block">
        <div className="mx-auto w-full max-w-7xl">
          {/* Full-height grid lowers the panel */}
          <div className="container mx-auto grid h-[100svh] grid-rows-[1fr_auto_1.6fr] grid-cols-12 gap-8 px-8 lg:px-12">
            {/* row 1 spacer across all cols */}
            <div className="col-span-12" />

            {/* row 2 content */}
            <div className="col-span-7 lg:col-span-6">
              <div className="rounded-[2rem] bg-black/35 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.45)] backdrop-blur-md">
                <h1 className="text-left font-extrabold text-white">
                  <span className="block text-3xl tracking-tight text-white/90">
                    Osiedle
                  </span>
                  <span className="relative mt-1 inline-block whitespace-wrap">
                    <span className="relative z-10 block text-[clamp(3rem,6vw,4rem)] leading-[0.95] tracking-tight">
                      Dębowy Park
                    </span>
                    <Image
                      src="/underline-gradient-green.svg"
                      alt=""
                      width={760}
                      height={40}
                      className="pointer-events-none absolute -bottom-3 left-0 w-full select-none"
                      aria-hidden
                    />
                  </span>
                </h1>

                <p className="mt-6 max-w-prose text-left text-xl leading-relaxed text-white/90">
                  Poznaj wyjątkowe miejsce dla Ciebie i Twojej rodziny.
                </p>

                <div className="mt-8 max-w-[32rem]">
                  <button
                    type="button"
                    onClick={() => onScroll("dlaczego-warto")}
                    className="group inline-flex w-full items-center justify-between rounded-full border border-white/15 bg-white/10 px-2 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    <span className="pl-6 text-lg font-medium text-white">
                      Dowiedz się więcej
                    </span>
                    <span className="mr-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transition-transform duration-300 group-hover:scale-110">
                      <ChevronRight
                        className="h-6 w-6 text-white"
                        aria-hidden
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* row 2 empty right area for alignment */}
            <div className="col-span-5 lg:col-span-6" />

            {/* row 3 spacer */}
            <div className="col-span-12" />
          </div>
        </div>
      </div>

      {/* Scroll cue (shared) */}
      <div
        className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2"
        aria-hidden
      >
        <ChevronsDown className="h-10 w-10 animate-bounce text-foreground/90" />
      </div>
    </section>
  );
}
