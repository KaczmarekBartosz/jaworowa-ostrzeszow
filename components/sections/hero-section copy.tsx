"use client";

import Image from "next/image";
import { ChevronRight, ChevronsDown } from "lucide-react";
import * as React from "react";

/**
 * Alt Hero v2
 * - MOBILE: odtwarza układ ze screena (centrowanie, duże CTA-pill, ten sam rytm pionowy)
 * - DESKTOP: pełnoekranowe tło + pływający panel "glass" wyrównany do lewej krawędzi kontenera (jak nawigacja)
 * - "Dębowy Park" w jednej linii na md+
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
      className="relative isolate flex min-h-[100svh] w-full items-stretch overflow-hidden"
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
      {/* Readability helpers */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.45),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
        aria-hidden
      />

      {/* CONTENT CONTAINER — aligns with site nav */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center">
        <div className="container mx-auto grid w-full grid-cols-1 px-4 sm:px-6 md:px-8 lg:px-12 md:grid-cols-12 md:gap-8">
          {/* FLOATING GLASS PANEL (desktop), mobile stays transparent */}
          <div className="md:col-span-7 lg:col-span-6">
            <div className="mb-50 rounded-[2rem] bg-black/0 p-[clamp(2.5rem,3vw,1.5rem)] backdrop-blur-0 md:bg-black/35 md:p-8 md:shadow-[0_20px_70px_rgba(0,0,0,0.45)] md:backdrop-blur-md">
              {/* Heading */}
              <h1 className="text-center font-extrabold text-white md:text-left">
                <span className="block text-[clamp(1.375rem,2.5vw,1.875rem)] tracking-tight text-white/90">
                  Osiedle
                </span>
                <span className="relative inline-block md:whitespace-nowrap">
                  <span className="relative z-10 block text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] tracking-tight">
                    Dębowy Park
                  </span>
                  <Image
                    src="/underline-gradient-green.svg"
                    alt=""
                    width={760}
                    height={40}
                    className="pointer-events-none absolute -bottom-2 left-0 w-full select-none md:-bottom-3"
                    aria-hidden
                  />
                </span>
              </h1>

              {/* Lead */}
              <p className="mx-auto mt-6 max-w-prose text-center text-[clamp(1rem,1.6vw,1.25rem)] leading-relaxed text-white/90 md:text-left">
                Poznaj wyjątkowe miejsce dla Ciebie i Twojej rodziny.
              </p>

              {/* CTA pill (faithful to mobile look) */}
              <div className="mx-auto mt-8 max-w-[32rem] md:mx-0">
                <button
                  type="button"
                  onClick={() => onScroll("dlaczego-warto")}
                  className="group flex w-full items-center justify-between rounded-full border border-white/15 bg-white/10 px-2 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <span className="pl-6 text-[clamp(1.05rem,1.6vw,1.25rem)] font-medium text-white">
                    Dowiedz się więcej
                  </span>
                  <span className="mr-1 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] transition-transform duration-300 group-hover:scale-110">
                    <ChevronRight className="h-6 w-6 text-white" aria-hidden />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:col-span-5 lg:col-span-6 md:block" />
        </div>
      </div>

      {/* Mobile-only extra spacer to keep dolna część zdjęcia widoczna jak na screenie */}
      <div className="h-[12vh] md:hidden" aria-hidden />

      {/* Scroll cue */}
      <div
        className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2"
        aria-hidden
      >
        <ChevronsDown className="h-10 w-10 animate-bounce text-white/90" />
      </div>
    </section>
  );
}
