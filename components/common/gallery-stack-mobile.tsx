"use client";

import * as React from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useAnimationFrame,
  type PanInfo,
} from "framer-motion";
import { X, ChevronRight, ChevronLeft, Pointer } from "lucide-react";

type Item = { imageUrl: string; title: string };

type GalleryStackMobileProps = {
  items: Item[];
  /** Tryb animacji hinta: "continuous" (ciągły) lub "pulsed" (co 3 sekundy). Domyślnie: "pulsed". */
  hintMode?: "continuous" | "pulsed";
};

export function GalleryStackMobile({
  items,
  hintMode = "pulsed",
}: GalleryStackMobileProps) {
  const [queue, setQueue] = React.useState(items);
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [didDrag, setDidDrag] = React.useState(false); // 🔒 guard na klik po drag

  const x = useMotionValue(0);

  // Odczuwalny próg przesunięcia (px) – łączymy offset i prędkość
  const THRESHOLD = 90;
  const VELOCITY_WEIGHT = 0.35;

  // Warstwy "peek"
  const layers = [
    { scale: 1, y: 0, x: 0, rot: 0, z: 30, opacity: 1 }, // TOP
    { scale: 0.97, y: -5, x: 15, rot: 5, z: 20, opacity: 0.95 }, // MID
    { scale: 0.94, y: 10, x: -10, rot: -8, z: 10, opacity: 0.9 }, // BACK
  ] as const;

  // Kolejka – operacje
  const visible = queue.slice(0, 3);

  const next = React.useCallback(() => {
    setQueue((q) => {
      const [first, ...rest] = q;
      return [...rest, first];
    });
    setActiveIndex(0);
  }, []);

  const prev = React.useCallback(() => {
    setQueue((q) => {
      const last = q[q.length - 1];
      const rest = q.slice(0, -1);
      return [last, ...rest];
    });
    setActiveIndex(0);
  }, []);

  const openLightbox = () => {
    // jeśli przed chwilą był drag, zignoruj klik (chroni przed otwieraniem po przesunięciu)
    if (didDrag) return;
    setActiveIndex(0);
    setIsOpen(true);
  };
  const closeLightbox = () => setIsOpen(false);

  // Drag handlers — z kierunkiem
  const onDragStart = () => {
    setDidDrag(false);
  };

  const onDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    // siła z kierunkiem: offset.x + v.x * waga
    const swipeStrength = info.offset.x + info.velocity.x * VELOCITY_WEIGHT;

    // jeśli było faktyczne przesunięcie, zaznacz to (blokuje klik)
    if (Math.abs(info.offset.x) > 2 || Math.abs(info.velocity.x) > 50) {
      setDidDrag(true);
      // zresetuj flagę po krótkiej chwili, żeby zwykłe kliki znów działały
      setTimeout(() => setDidDrag(false), 120);
    }

    if (Math.abs(swipeStrength) > THRESHOLD) {
      if (swipeStrength > 0) {
        // 👉 w prawo: cofnij (poprzednia karta)
        prev();
      } else {
        // 👈 w lewo: następna
        next();
      }
      x.set(0);
    } else {
      // za słaby gest – wróć do środka
      x.set(0);
    }
  };

  // --- HINT: płynny eliptyczny ruch (sin/cos) sterowany motionValue ---
  const hintX = useMotionValue(0);
  const hintY = useMotionValue(0);

  // Twoje parametry ruchu
  const A = 112; // pół oś pozioma (px)
  const B = 16; // pół oś pionowa (px)
  const SPEED = 1.8; // rad/s
  const LIMIT = 2; // zakres kąta: -LIMIT..+LIMIT

  const angleRef = React.useRef(0);
  const dirRef = React.useRef<1 | -1>(1);

  // --- Pulsowanie widoczności hinta (fade in → łuk → fade out → przerwa) ---
  const [hintVisible, setHintVisible] = React.useState(
    hintMode === "continuous"
  );
  const timeoutsRef = React.useRef<number[]>([]);

  const CYCLE_MS = 3000; // pełny cykl
  const FADE_MS = 250; // fade in/out
  const ACTIVE_MS = 2200; // czas widoczności (ruchu) w pulsed
  const PAUSE_MS = Math.max(0, CYCLE_MS - ACTIVE_MS); // przerwa

  React.useEffect(() => {
    // czyścimy poprzednie timeouts przy każdej zmianie trybu/okna
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    if (isOpen) {
      setHintVisible(false);
      return;
    }

    if (hintMode === "continuous") {
      setHintVisible(true);
      return; // brak cykli
    }

    // hintMode === "pulsed": pętla time-outów
    const startCycle = () => {
      setHintVisible(true); // fade in
      const t1 = window.setTimeout(() => {
        setHintVisible(false); // fade out
        const t2 = window.setTimeout(startCycle, PAUSE_MS); // przerwa, potem znów
        timeoutsRef.current.push(t2);
      }, ACTIVE_MS);
      timeoutsRef.current.push(t1);
    };

    startCycle();

    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
    };
  }, [hintMode, isOpen]);

  // animujemy pozycję tylko gdy hint ma być aktywny
  const isHintAnimating = !isOpen && (hintMode === "continuous" || hintVisible);

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

    // x = A * sin(θ), y = B * (1 - cos(θ))
    hintX.set(A * Math.sin(nextAngle));
    hintY.set(B * (1 - Math.cos(nextAngle)));
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
                    onDragStart={isTop ? onDragStart : undefined} // ✅
                    onDragEnd={isTop ? onDragEnd : undefined} // ✅ z kierunkiem
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

          {/* HINT: łapka po elipsie */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                className="pointer-events-none absolute bottom-[-20px] left-1/2 z-50 -translate-x-1/2"
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
                    className="absolute top-1/2 left-8 -translate-y-1/2 will-change-transform"
                    style={{ x: hintX, y: hintY }}
                  >
                    <div className="flex items-center gap-2">
                      <ChevronLeft className="h-5 w-5 text-foreground/90" />
                      <Pointer className="h-6 w-6 text-foreground drop-shadow" />
                      <ChevronRight className="h-5 w-5 text-foreground/90" />
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
