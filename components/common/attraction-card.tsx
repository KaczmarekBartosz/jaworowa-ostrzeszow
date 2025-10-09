"use client";

import Image from "next/image";
import { Navigation } from "lucide-react";

interface AttractionCardProps {
  title: string;
  distance: string;
  description: string;
  imageUrl: string;
  location: string;
  priority?: boolean;
}

const INVESTMENT_ADDRESS = "Jaworowa, Ostrzeszów, Poland";

export function AttractionCard({
  title,
  distance,
  description,
  imageUrl,
  location,
  priority = false,
}: AttractionCardProps) {
  // Generate Google Maps URLs
  const placeUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(
    INVESTMENT_ADDRESS
  )}&destination=${encodeURIComponent(location)}`;

  const handleDirectionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(directionsUrl, "_blank", "noopener,noreferrer");
  };

  const handleCardClick = () => {
    window.open(placeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border bg-card/50 w-full h-full md:aspect-[4/5] cursor-pointer transition-all duration-300 "
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`Zobacz ${title} w Google Maps`}
    >
      {/* Base image */}
      <Image
        src={imageUrl}
        alt={`${title} — ${distance} od osiedla`}
        fill
        decoding="async"
        sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw"
        priority={priority}
        className="object-cover object-left transition-transform duration-300 group-hover:scale-105"
      />

      {/* Blurred bottom layer */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt=""
          fill
          aria-hidden="true"
          sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw"
          priority={priority}
          className="object-cover object-left blur-sm transition-transform duration-300 group-hover:scale-105"
          style={{
            maskImage:
              "linear-gradient(to top, black 0%, black 15%, transparent 50%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, black 15%, transparent 50%)",
          }}
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/0 via-30% to-transparent"
        aria-hidden="true"
      />

      {/* Top bar with distance badge and directions link */}
      <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm text-white drop-shadow-lg">
          {distance}
        </span>
        <button
          onClick={handleDirectionsClick}
          className="inline-flex items-center gap-1.5 rounded-full bg-primary/90 hover:bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-200 hover:scale-105 drop-shadow-lg"
          aria-label={`Wyznacz trasę do ${title}`}
        >
          <Navigation className="h-3 w-3" />
          <span className="hidden sm:inline">Trasa</span>
        </button>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-5 bottom-5 text-white">
        <h4 className="text-xl font-bold leading-tight tracking-tight drop-shadow-lg">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed drop-shadow-md line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}
