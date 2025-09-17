"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

// Definiujemy typy dla propsów, aby komponent mógł przyjąć dowolne dzieci
type FeatureCarouselProps = {
  children: React.ReactNode;
};

export function FeatureCarousel({ children }: FeatureCarouselProps) {
  // Hook z Embla Carousel. 'align: "start"' zapewnia, że slajdy doklejają się do lewej krawędzi.
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    // Główny kontener karuzeli. `overflow-hidden` jest kluczowe.
    <div className="overflow-hidden md:overflow-visible" ref={emblaRef}>
      {/* Kontener na slajdy. Na mobile jest to flex, na desktop nie ma specjalnych stylów. */}
      <div className="flex md:contents">
        {React.Children.map(children, (child, index) => (
          // Każdy slajd. `flex: 0 0 80%` to serce efektu "peek-a-boo" na mobile.
          <div
            key={index}
            className="flex-shrink-0 flex-grow-0 basis-4/5 pl-4 md:basis-auto md:p-0"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
