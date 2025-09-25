"use client";

import { TestimonialCard } from "@/components/common/testimonial-card";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote:
      "To miejsce przerosło nasze oczekiwania. Spokój, zieleń i nowoczesny design – wszystko, czego szukaliśmy jako młoda rodzina.",
    author: "Anna i Tomasz Nowak",
    role: "Mieszkańcy",
  },
  {
    quote:
      "Jakość wykonania i dbałość o detale są tu na najwyższym poziomie. Osiedle Dębowy Park to wzór nowoczesnego budownictwa.",
    author: "Jan Kowalski",
    role: "Architekt",
  },
  {
    quote:
      "Idealna lokalizacja. Mamy blisko do pracy i szkoły, a po południu możemy cieszyć się ciszą i własnym ogrodem. Polecamy!",
    author: "Rodzina Zielińskich",
    role: "Mieszkańcy",
  },
  {
    quote:
      "Rzadko spotyka się inwestycję tak dobrze przemyślaną pod kątem funkcjonalności. Każdy metr kwadratowy jest tu idealnie wykorzystany.",
    author: "Maria Piotrowska",
    role: "Projektantka Wnętrz",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="opinie"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Dlaczego Dębowy Park?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Posłuchaj, co o Osiedlu Dębowy Park mówią ci, którzy już wkrótce
            nazwą je swoim domem.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex-grow-0 basis-4/5 pl-4 first:pl-6 last:pr-6 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl justify-end gap-2 px-6">
          <Button
            size="icon"
            className="rounded-full h-12 w-12"
            onClick={scrollPrev}
          >
            <ChevronLeft className="size-6" />
            <span className="sr-only">Poprzednia opinia</span>
          </Button>
          <Button
            size="icon"
            className="rounded-full h-12 w-12"
            onClick={scrollNext}
          >
            <ChevronRight className="size-6" />
            <span className="sr-only">Następna opinia</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
