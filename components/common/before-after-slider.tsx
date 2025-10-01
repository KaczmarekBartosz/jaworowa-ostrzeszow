"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Maximize2, Minimize2 } from "lucide-react";

type Props = {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** np. "aspect-[4/3]" | "aspect-[16/9]" | "aspect-square" */
  aspectRatioClass?: string;
  /** start slider position in % */
  initialPercent?: number;
  /** optional container classes */
  className?: string;
  /** max pixel height clamp (desktop) */
  maxH?: number; // e.g. 640
};

export default function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  beforeLabel = "Rzut 2D",
  afterLabel = "Wizualizacja 3D",
  aspectRatioClass = "aspect-[16/10]",
  initialPercent = 50,
  className = "",
  maxH = 640,
}: Props) {
  const [percent, setPercent] = React.useState(
    Math.max(0, Math.min(100, initialPercent))
  );
  const [open, setOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => setIsClient(true), []);

  const setFromClientX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPercent(Math.max(0, Math.min(100, p)));
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPercent((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPercent((p) => Math.min(100, p + 4));
    if (e.key === "Home") setPercent(0);
    if (e.key === "End") setPercent(100);
  };

  return (
    <>
      <div
        className={[
          // premium card frame
          "relative rounded-3xl border bg-gradient-to-b from-card/60 to-card/30",
          "shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset,0_20px_50px_-20px_rgba(0,0,0,0.35)]",
          "ring-1 ring-white/5 overflow-hidden",
          aspectRatioClass,
          "max-h-[70vh]",
          // clamp on desktops so visuals never stretch oddly
          `md:[--maxH:${maxH}px] md:max-h-[var(--maxH)]`,
          className || "",
        ].join(" ")}
        ref={ref}
        onPointerDown={(e) => setFromClientX(e.clientX)}
        onPointerMove={(e) => {
          if (e.buttons === 1) setFromClientX(e.clientX);
        }}
      >
        {/* checker + glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

        {/* BASE: before (2D) */}
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain select-none"
          priority={false}
        />

        {/* OVERLAY: after (3D) clipped by width */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${percent}%` }}
        >
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain select-none"
            priority={false}
          />
        </div>

        {/* badges */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full bg-black/55 text-white text-xs px-2.5 py-1 backdrop-blur">
              {beforeLabel}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center rounded-full bg-black/55 text-white text-xs px-2.5 py-1 backdrop-blur">
              {afterLabel}
            </span>
          </div>
          {/* side scrims for readability */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/25 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/25 to-transparent" />
        </div>

        {/* handle */}
        {isClient && (
          <motion.div
            role="slider"
            aria-label="Porównaj 2D i 3D"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(percent)}
            tabIndex={0}
            onKeyDown={onKey}
            className="absolute top-0 bottom-0 -translate-x-1/2 cursor-col-resize select-none"
            style={{ left: `${percent}%` }}
            onPan={(e, info) => setFromClientX(info.point.x)}
            onPanStart={(e, info) => setFromClientX(info.point.x)}
          >
            <div className="h-full w-px bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.25)]" />
            <div className="absolute top-1/2 -translate-y-1/2 -left-5 right-0 pointer-events-none">
              <div className="pointer-events-auto mx-auto w-11 h-11 rounded-full bg-white text-foreground shadow-md grid place-items-center">
                <div className="w-5 h-0.5 bg-black" />
              </div>
            </div>
          </motion.div>
        )}

        {/* fullscreen button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Powiększ"
          className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-2 rounded-full bg-black/55 text-white text-xs px-3 py-1.5 hover:bg-black/70"
        >
          <Maximize2 className="w-4 h-4" />
          Pełny ekran
        </button>
      </div>

      {/* FULLSCREEN */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 max-w-none w-screen h-screen border-0 bg-black/95">
          <div className="absolute top-4 right-4 z-50">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5"
            >
              <Minimize2 className="w-4 h-4" />
              Zamknij
            </button>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 m-4 md:m-8 rounded-3xl overflow-hidden border ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-transparent">
              {/* contain in fullscreen as well */}
              <Image
                src={beforeSrc}
                alt={beforeAlt}
                fill
                sizes="100vw"
                className="object-contain select-none"
                priority
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${percent}%` }}
              >
                <Image
                  src={afterSrc}
                  alt={afterAlt}
                  fill
                  sizes="100vw"
                  className="object-contain select-none"
                  priority
                />
              </div>

              {/* badges */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-black/60 text-white text-sm px-3 py-1.5 backdrop-blur">
                    {beforeLabel}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-black/60 text-white text-sm px-3 py-1.5 backdrop-blur">
                    {afterLabel}
                  </span>
                </div>
              </div>

              {/* handle fs */}
              {isClient && (
                <motion.div
                  role="slider"
                  aria-label="Porównaj 2D i 3D"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(percent)}
                  tabIndex={0}
                  className="absolute top-0 bottom-0 -translate-x-1/2 cursor-col-resize select-none"
                  style={{ left: `${percent}%` }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowLeft")
                      setPercent((p) => Math.max(0, p - 4));
                    if (e.key === "ArrowRight")
                      setPercent((p) => Math.min(100, p + 4));
                  }}
                  onPan={(e, info) => setFromClientX(info.point.x)}
                  onPanStart={(e, info) => setFromClientX(info.point.x)}
                >
                  <div className="h-full w-px bg-white/85" />
                  <div className="absolute top-1/2 -translate-y-1/2 -left-6 right-0 pointer-events-none">
                    <div className="pointer-events-auto mx-auto w-12 h-12 rounded-full bg-white text-foreground shadow-md grid place-items-center">
                      <div className="w-6 h-0.5 bg-black" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
