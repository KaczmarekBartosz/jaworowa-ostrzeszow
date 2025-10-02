"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ZoomIn, ZoomOut } from "lucide-react";

interface FullscreenImageViewerProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export function FullscreenImageViewer({
  src,
  alt,
  open,
  onClose,
}: FullscreenImageViewerProps) {
  const [scale, setScale] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setIsLoaded(false);
      // Delay dla płynnego fade-in obrazu
      setTimeout(() => setIsLoaded(true), 50);
    } else {
      setScale(1);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "+" || e.key === "=") {
        setScale((prev) => Math.min(prev + 0.2, 3));
      } else if (e.key === "-") {
        setScale((prev) => Math.max(prev - 0.2, 0.5));
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setScale((prev) => Math.max(0.5, Math.min(3, prev + delta)));
      }
    };

    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [onClose, open]);

  if (!open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 p-4 md:p-8"
      onClick={onClose}
      aria-label="Podgląd obrazu"
      style={{
        backdropFilter: "blur(20px)",
        animation: "fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Kontrolki */}
      <div className="absolute top-4 right-4 z-20 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setScale((prev) => Math.min(prev + 0.3, 3));
          }}
          className="rounded-xl bg-white/10 p-3 text-white/90 backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Powiększ"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setScale((prev) => Math.max(prev - 0.3, 0.5));
          }}
          className="rounded-xl bg-white/10 p-3 text-white/90 backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Pomniejsz"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={onClose}
          className="rounded-xl bg-white/10 p-3 text-white/90 backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Zamknij"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* === KLUCZOWE: Wrapper z overflow hidden dla zaokrąglenia === */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
        style={{
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          transform: `scale(${scale})`,
          transition:
            "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out",
          opacity: isLoaded ? 1 : 0,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="90vw"
          priority
          quality={95}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Wskazówka dla użytkownika */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm backdrop-blur-sm bg-black/30 px-4 py-2 rounded-full text-center sm:w-auto w-full">
        Podpowiedź: Użyj Ctrl + scroll lub +/- do zoomowania!
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(20px);
          }
        }
      `}</style>
    </div>,
    document.body
  );
}
