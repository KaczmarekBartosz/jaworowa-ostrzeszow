"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
// KLUCZOWA ZMIANA: Importujemy typ bezpośrednio z pakietu-rdzenia
import type { EmblaCarouselType } from "embla-carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type FeatureCarouselProps = {
  children: React.ReactNode;
};

export function FeatureCarousel({ children }: FeatureCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Używamy poprawnego typu EmblaCarouselType
  const onSelect = useCallback((api: EmblaCarouselType) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex-grow-0 basis-4/5 pl-4 first:pl-6 last:pr-6 md:basis-auto md:p-0"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl justify-end gap-2 px-6">
        <Button
          size="icon"
          className="rounded-full h-12 w-12"
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <ChevronLeft className="size-6" />
          <span className="sr-only">Poprzedni slajd</span>
        </Button>
        <Button
          size="icon"
          className="rounded-full h-12 w-12"
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <ChevronRight className="size-6" />
          <span className="sr-only">Następny slajd</span>
        </Button>
      </div>
    </div>
  );
}
