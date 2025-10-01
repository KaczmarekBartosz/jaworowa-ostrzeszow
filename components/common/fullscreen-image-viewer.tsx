"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100vw";
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!open) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.24, delay: 0.05 }}
            // Zamiast wrappera z paddingiem: absolutne pełny ekran
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain select-none"
              sizes="100vw"
              draggable={false}
              priority
              style={{
                background: "transparent",
                maxHeight: "100vh",
                maxWidth: "100vw",
              }}
            />
            {/* Button X zawsze nad obrazem */}
            <button
              type="button"
              onClick={onClose}
              className="fixed top-4 right-4 z-[10001] rounded-full bg-black/80 p-2 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary transition"
              aria-label="Zamknij"
              tabIndex={0}
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
