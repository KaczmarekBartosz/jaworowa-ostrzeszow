"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  children: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
  /** NOWE (opcjonalne): ścieżka do PNG z /public */
  bgSrc?: string;
  /** NOWE (opcjonalne): dostrajanie klasy PNG */
  bgClassName?: string;
}

export function FeatureCard({
  children,
  title,
  description,
  isHighlighted = false,
  bgSrc,
  bgClassName,
}: FeatureCardProps) {
  const cardClasses = cn(
    "relative overflow-hidden rounded-3xl p-6 flex flex-col justify-between h-full transition-all duration-300",
    isHighlighted
      ? "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground"
      : "bg-card/50 border backdrop-blur-sm hover:bg-card/80"
  );

  // jeśli mamy overlay po prawej, dołóż oddech z prawej strony pod tekst
  const contentClasses = cn(
    "relative z-10",
    bgSrc ? "pr-12 md:pr-18" : "" // zapobiega 'zjadaniu' tekstu przez PNG
  );

  return (
    <div className={cardClasses}>
      {/* OVERLAY PNG po prawej (dekoracja) */}
      {bgSrc && (
        <div
          className="pointer-events-none absolute bottom-20 right-[-55] pr-3 md:pr-4 pt-3 md:pt-4"
          aria-hidden="true"
        >
          {/* 96x96 ~ h-24; możesz podnieść na md */}
          <Image
            src={bgSrc}
            alt=""
            width={280}
            height={280}
            loading="lazy"
            className={cn(
              "opacity-100 md:opacity-100 drop-shadow-xl object-contain",
              isHighlighted && "opacity-100",
              bgClassName
            )}
          />
        </div>
      )}

      {/* Ikona-lekko w tle jak u Ciebie */}
      <div
        className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-full",
          isHighlighted ? "bg-white/10" : "bg-secondary"
        )}
        aria-hidden="true"
      >
        {children}
      </div>

      <div className={contentClasses}>
        <p
          className={cn(
            "mt-4 text-sm",
            isHighlighted
              ? "text-primary-foreground/80"
              : "text-muted-foreground"
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "text-xl font-bold",
            isHighlighted ? "" : "text-foreground"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
