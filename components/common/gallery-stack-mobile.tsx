"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { X, ChevronRight, Pointer } from "lucide-react";

type Item = { imageUrl: string; title: string };

type GalleryStackMobileProps = {
  items: Item[];
  /** Tryb animacji hinta: "continuous" (ciągły) lub "pulsed" (domyślny co 3 sekundy) */
  hintMode?: "continuous" | "pulsed";
};

export function GalleryStackMobile({
  items,
  hintMode = "continuous",
}: GalleryStackMobileProps) {
  const [queue, setQueue] = React.useState(items);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const x = useMotionValue(0);
  const prefersReduced = useReducedMotion();
  const threshold = 120;

  // Warstwy z "peekiem" (Twoje wartości)
  const layers = [
    { scale: 1, y: 0, x: 0, rot: 0, z: 30, opacity: 1 }, // TOP
    { scale: 0.97, y: -5, x: 15, rot: 5, z: 20, opacity: 0.95 }, // MID (w prawo)
    { scale: 0.94, y: 10, x: -10, rot: -8, z: 10, opacity: 0.9 }, // BACK (w lewo)
  ] as const;

  // Drag-end bez "any"
  const onDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const power = Math.abs(info.offset.x) + Math.abs(info.velocity.x) * 0.2;
    if (power > threshold) {
      setQueue((q) => {
        const [first, ...rest] = q;
        return [...rest, first];
      });
      x.set(0);
    }
  };

  const visible = queue.slice(0, 3);

  const openLightbox = () => {
    setActiveIndex(0);
    setIsOpen(true);
  };
  const closeLightbox = () => setIsOpen(false);

  const next = () => {
    setQueue((q) => {
      const [first, ...rest] = q;
      return [...rest, first];
    });
    setActiveIndex(0);
  };
  const prev = () => {
    setQueue((q) => {
      const last = q[q.length - 1];
      const rest = q.slice(0, -1);
      return [last, ...rest];
    });
    setActiveIndex(0);
  };

  // --- HINT: płynny, eliptyczny ruch (sin/cos) sterowany motionValue ---
  const hintX = useMotionValue(0);
  const hintY = useMotionValue(0);

  // Parametry elipsy i ruchu
  const A = 56; // pół oś pozioma (px)
  const B = 16; // pół oś pionowa (px)
  const SPEED = 1.8; // rad/s (większa = szybciej)
  const LIMIT = 0.9; // zakres kąta: -LIMIT..+LIMIT (~±52°)

  const angleRef = React.useRef(0);
  const dirRef = React.useRef<1 | -1>(1);

  // --- Tryb "pulsed": cykl co 3 sekundy (fade in → łuk → fade out → przerwa) ---
  const [hintVisible, setHintVisible] = React.useState(
    hintMode === "continuous"
  ); // continuous = zawsze true
  const CYCLE_MS = 3000; // pełny cykl
  const FADE_MS = 250; // fade in/out
  const ACTIVE_MS = 2200; // czas widoczności (ruchu po łuku)
  // pauza ≈ CYCLE_MS - ACTIVE_MS (ok. 800 ms)

  React.useEffect(() => {
    if (hintMode !== "pulsed" || isOpen || prefersReduced) {
      setHintVisible(hintMode === "continuous" && !isOpen && !prefersReduced);
      return;
    }
    // pętla pokazywania co 3s
    setHintVisible(true);
    const interval = setInterval(() => {
      setHintVisible(true);
      const timeout = setTimeout(() => setHintVisible(false), ACTIVE_MS);
      return () => clearTimeout(timeout);
    }, CYCLE_MS);
    const timeoutInitial = setTimeout(() => setHintVisible(false), ACTIVE_MS);
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutInitial);
    };
  }, [hintMode, isOpen, prefersReduced]);

  // Animacja pozycji tylko gdy powinna się „kręcić”
  const isHintAnimating =
    !isOpen && !prefersReduced && (hintMode === "continuous" || hintVisible);

  useAnimationFrame((_, delta) => {
    if (!isHintAnimating) return;

    const dAngle = (delta / 1000) * SPEED * dirRef.current;
    let nextAngle = angleRef.current + dAngle;

    if (nextAngle > LIMIT) {
      nextAngle = LIMIT;
      dirRef.current = -1;
    }
    if (nextAngle < -LIMIT) {
      nextAngle = -LIMIT;
      dirRef.current = 1;
    }

    angleRef.current = nextAngle;

    // Równanie elipsy: x = A*(cosθ - 1) → start w 0, ruch w prawo i powrót; y = B*sinθ
    hintX.set(A * (Math.cos(nextAngle) - 1));
    hintY.set(B * Math.sin(nextAngle));
  });

  return (
    <>
      {/* STOS KART */}
      <div className="relative mx-auto w-full max-w-md">
        <div className="relative h-[64vh] min-h-[420px] w-full">
          <AnimatePresence initial={false}>
            {visible.map((item, i) => {
              const isTop = i === 0;
              const L = layers[i];
              return (
                <motion.div
                  key={item.imageUrl + i}
                  className="absolute inset-0"
                  style={{ zIndex: L.z }}
                  initial={{ scale: 0.92, opacity: 0, y: -10 }}
                  animate={{
                    scale: L.scale,
                    y: L.y,
                    x: L.x,
                    rotate: L.rot,
                    opacity: L.opacity,
                  }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                >
                  <motion.div
                    drag={isTop ? "x" : false}
                    dragElastic={0.15}
                    dragConstraints={{ left: 0, right: 0 }}
                    style={isTop ? { x } : undefined}
                    onDragEnd={isTop ? onDragEnd : undefined}
                    whileTap={isTop ? { cursor: "grabbing" } : {}}
                    className="relative h-full w-full select-none"
                  >
                    <button
                      type="button"
                      onClick={openLightbox}
                      className="absolute inset-0 overflow-hidden rounded-3xl shadow-xl"
                      aria-label={`Otwórz „${item.title}” w pełnym ekranie`}
                    >
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={isTop}
                      />
                      {/* winieta + tytuł */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4">
                        <div className="rounded-2xl bg-black/45 px-4 py-3 backdrop-blur">
                          <p className="text-base font-medium text-white">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* HINT: łapka poruszająca się po elipsie */}
          <AnimatePresence>
            {!isOpen && !prefersReduced && (
              <motion.div
                className="pointer-events-none absolute bottom-6 left-1/2 z-50 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hintMode === "continuous" ? 1 : hintVisible ? 1 : 0,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: hintMode === "continuous" ? 0.25 : FADE_MS / 1000,
                  ease: "easeInOut",
                }}
              >
                <div className="relative h-12 w-32">
                  <motion.div
                    className="absolute top-1/2 left-6 -translate-y-1/2 will-change-transform"
                    style={{ x: hintX, y: hintY }}
                  >
                    <div className="flex items-center gap-2">
                      <Pointer className="h-6 w-6 text-white drop-shadow" />
                      <ChevronRight className="h-5 w-5 text-white/90" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* LIGHTBOX (pełny ekran) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            onClick={closeLightbox}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-4"
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[3/2] w-full max-w-[92vw] max-h-[80vh]">
                <Image
                  src={queue[activeIndex].imageUrl}
                  alt={queue[activeIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Sterowanie w lightboxie */}
              <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="pointer-events-auto rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/15"
                >
                  Poprzednie
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="pointer-events-auto rounded-full bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/15"
                >
                  Następne
                </button>
              </div>

              {/* Zamknij */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
                aria-label="Zamknij podgląd"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
