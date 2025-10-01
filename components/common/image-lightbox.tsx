"use client";

import * as React from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxImage = { src: string; alt: string };

type ImageLightboxProps = {
  images: LightboxImage[] | null | undefined;
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange?: (next: number) => void;
};

export function ImageLightbox({
  images,
  index,
  open,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  // Normalizuj dane wejściowe
  const imgs = React.useMemo(
    () => (Array.isArray(images) ? images : []),
    [images]
  );

  // Renderuj tylko po stronie klienta (eliminuje problemy z hydration)
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => setIsClient(true), []);

  // Bezpieczny indeks w zakresie [0, imgs.length - 1]
  const safeIndex = React.useMemo(() => {
    if (!imgs.length) return 0;
    return Math.min(Math.max(index, 0), imgs.length - 1);
  }, [index, imgs.length]);

  // Aktualny indeks obrazu
  const [current, setCurrent] = React.useState(safeIndex);
  React.useEffect(() => {
    setCurrent(safeIndex);
  }, [safeIndex]);

  const total = imgs.length;

  // Nawigacja po obrazach (stabilna referencja)
  const go = React.useCallback(
    (dir: 1 | -1) => {
      if (!total) return;
      const next = (current + dir + total) % total;
      setCurrent(next);
      onIndexChange?.(next);
    },
    [current, total, onIndexChange]
  );

  // Obsługa klawiatury
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // ↙️ Warunkowy render dopiero po wszystkich hookach
  if (!open || !isClient || !total) return null;

  const img = imgs[current];

  return (
    <Dialog open={open} onOpenChange={(v) => (!v ? onClose() : null)}>
      <DialogContent
        className="inset-0 fixed p-0 max-w-none w-screen h-screen border-0 bg-black/95"
        aria-label="Podgląd pełnoekranowy"
      >
        <button
          className="absolute top-4 right-4 z-50 rounded-full bg-white/10 hover:bg-white/20 p-2 outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={onClose}
          aria-label="Zamknij podgląd"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {total > 1 && (
          <>
            <button
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => go(-1)}
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 rounded-full bg-white/10 hover:bg-white/20 p-3 outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => go(1)}
              aria-label="Następne zdjęcie"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        <div className="relative w-full h-full">
          {img?.src ? (
            <Image
              src={img.src}
              alt={img.alt ?? "Podgląd obrazu"}
              fill
              className="object-contain select-none"
              sizes="100vw"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/80">
              Brak obrazu do wyświetlenia
            </div>
          )}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/90 text-sm px-3 py-1 rounded-full bg-white/10 backdrop-blur">
          {current + 1} / {total}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ZoomableImageCard({
  src,
  alt,
  onClick,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  sizes?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Powiększ obraz"
      className={
        "group relative overflow-hidden rounded-3xl border bg-card/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring " +
        (className ?? "")
      }
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1200}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        sizes={sizes}
        quality={80}
      />
      <div className="absolute inset-0 pointer-events-none flex items-end justify-end p-3">
        <span className="inline-flex items-center gap-2 text-white/95 bg-black/40 backdrop-blur px-2.5 py-1.5 rounded-full text-xs md:text-sm opacity-0 group-hover:opacity-100 transition">
          Kliknij, aby powiększyć
        </span>
      </div>
    </button>
  );
}
