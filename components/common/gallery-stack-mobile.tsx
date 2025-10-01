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
import { ChevronRight, ChevronLeft, Pointer } from "lucide-react";

type Item = { imageUrl: string; title: string };

interface GalleryStackMobileProps {
  items: Item[];
  onCardClick: (index: number) => void;
  hintMode?: "continuous" | "pulsed";
}

export function GalleryStackMobile({
  items,
  onCardClick,
  hintMode = "pulsed",
}: GalleryStackMobileProps) {
  const [queue, setQueue] = React.useState(items);
  const [didDrag, setDidDrag] = React.useState(false);
  const x = useMotionValue(0);

  const THRESHOLD = 90;
  const VELOCITY_WEIGHT = 0.35;

  const layers = [
    { scale: 1, y: 0, x: 0, rot: 0, z: 30, opacity: 1 },
    { scale: 0.97, y: -5, x: 15, rot: 5, z: 20, opacity: 0.95 },
    { scale: 0.94, y: 10, x: -10, rot: -8, z: 10, opacity: 0.9 },
  ] as const;

  const visible = queue.slice(0, 3);

  const next = React.useCallback(() => {
    setQueue((q) => {
      const [first, ...rest] = q;
      return [...rest, first];
    });
  }, []);

  const prev = React.useCallback(() => {
    setQueue((q) => {
      const last = q[q.length - 1];
      const rest = q.slice(0, -1);
      return [last, ...rest];
    });
  }, []);

  const handleCardClick = () => {
    if (didDrag) return;
    const topCardUrl = queue[0].imageUrl;
    const globalIndex = items.findIndex((item) => item.imageUrl === topCardUrl);
    if (globalIndex !== -1) {
      onCardClick(globalIndex);
    }
  };

  const onDragStart = () => setDidDrag(false);

  const onDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeStrength = info.offset.x + info.velocity.x * VELOCITY_WEIGHT;
    if (Math.abs(info.offset.x) > 2) {
      setDidDrag(true);
      setTimeout(() => setDidDrag(false), 120);
    }
    if (Math.abs(swipeStrength) > THRESHOLD) {
      swipeStrength > 0 ? prev() : next();
      x.set(0);
    } else {
      x.set(0);
    }
  };

  const hintX = useMotionValue(0);
  const hintY = useMotionValue(0);
  const A = 112;
  const B = 16;
  const SPEED = 1.8;
  const LIMIT = 2;
  const angleRef = React.useRef(0);
  const dirRef = React.useRef<1 | -1>(1);
  const [hintVisible, setHintVisible] = React.useState(
    hintMode === "continuous"
  );
  const timeoutsRef = React.useRef<number[]>([]);
  const CYCLE_MS = 3000;
  const FADE_MS = 250;
  const ACTIVE_MS = 2200;
  const PAUSE_MS = Math.max(0, CYCLE_MS - ACTIVE_MS);

  React.useEffect(() => {
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
    if (hintMode === "continuous") {
      setHintVisible(true);
      return;
    }
    const startCycle = () => {
      setHintVisible(true);
      const t1 = window.setTimeout(() => {
        setHintVisible(false);
        const t2 = window.setTimeout(startCycle, PAUSE_MS);
        timeoutsRef.current.push(t2);
      }, ACTIVE_MS);
      timeoutsRef.current.push(t1);
    };
    startCycle();
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
    };
  }, [hintMode, PAUSE_MS]);

  const isHintAnimating = hintMode === "continuous" || hintVisible;

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
    hintX.set(A * Math.sin(nextAngle));
    hintY.set(B * (1 - Math.cos(nextAngle)));
  });

  return (
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
                  onDragStart={onDragStart}
                  onDragEnd={onDragEnd}
                  whileTap={isTop ? { cursor: "grabbing" } : {}}
                  className="relative h-full w-full select-none"
                  onClick={isTop ? handleCardClick : undefined}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-xl">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      priority={isTop}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-4">
                      <div className="rounded-2xl bg-black/45 px-4 py-3 backdrop-blur">
                        <p className="text-base font-medium text-white">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
        <AnimatePresence>
          {isHintAnimating && (
            <motion.div
              className="pointer-events-none absolute bottom-[-20px] left-1/2 z-50 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_MS / 1000, ease: "easeInOut" }}
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
  );
}
