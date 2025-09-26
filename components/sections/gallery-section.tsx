"use client";

import { GalleryCard } from "@/components/common/gallery-card";
import { GalleryStackMobile } from "@/components/common/gallery-stack-mobile";

const galleryImages = [
  {
    imageUrl: "/jaworowa-wizualizacja-1.png",
    title: "Dom dla całej rodziny",
    span: "row-span-1",
  },
  {
    imageUrl: "/jaworowa-wizualizacja-salon.jpeg",
    title: "Wnętrze salonu",
    span: "row-span-2",
  },
  {
    imageUrl: "/jaworowa-wizualizacja-3.png",
    title: "Harmonia domu z otaczającą zielenią",
    span: "row-span-2",
  },
  {
    imageUrl: "/jaworowa-wizualizacja-4.png",
    title: "Nowoczesna bryła budynku",
    span: "row-span-1",
  },
  {
    imageUrl: "/jaworowa-wizualizacja-5.jpg",
    title: "Przestronny podjazd z garażem",
    span: "row-span-1",
  },
  {
    imageUrl: "/jaworowa-wizualizacja-6.jpg",
    title: "Wewnętrzna droga osiedlowa",
    span: "row-span-2",
  },
  {
    imageUrl: "/jaworowa-wizualizacja-7.png",
    title: "Eleganckie wejście do domu",
    span: "row-span-2",
  },
  {
    imageUrl: "/jaworowa-wizualizacja-2.jpg",
    title: "Widok na całe osiedle z lotu ptaka",
    span: "row-span-1",
  },
];

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Galeria
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Każda wizualizacja przedstawia nie tylko architekturę, ale i
            atmosferę miejsca, w którym możesz zamieszkać wraz ze swoją rodziną.
          </p>
        </div>

        {/* MOBILE: stos kart z gestem swipe */}
        <div className="mt-10 md:hidden">
          <GalleryStackMobile
            items={galleryImages.map(({ imageUrl, title }) => ({
              imageUrl,
              title,
            }))}
          />
        </div>

        {/* DESKTOP: Twoja siatka bez zmian */}
        <div className="mt-16 hidden grid-flow-dense grid-cols-2 gap-4 [grid-auto-rows:150px] md:grid md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <GalleryCard
              key={index}
              imageUrl={image.imageUrl}
              title={image.title}
              className={image.span}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
