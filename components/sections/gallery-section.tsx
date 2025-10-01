"use client";

import { useState } from "react";
import { GalleryCard } from "@/components/common/gallery-card";
import { GalleryStackMobile } from "@/components/common/gallery-stack-mobile";
import { FullscreenImageViewer } from "@/components/common/fullscreen-image-viewer";

const galleryImages = [
  {
    imageUrl: "/galeria/1.jpg",
    title: "Nowoczesny dom z przestronnym podjazdem",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/2.jpg",
    title: "Elegancka bryła budynku z podjazdem",
    span: "row-span-3",
  },
  {
    imageUrl: "/galeria/3.jpg",
    title: "Dom idealny dla całej rodziny",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/4.jpg",
    title: "Widok z góry na nowoczesną architekturę",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/5.jpg",
    title: "Detal elewacji i duże przeszklenia",
    span: "row-span-3",
  },
  {
    imageUrl: "/galeria/6.jpg",
    title: "Stylowe wejście do domu",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/7.jpg",
    title: "Wizualizacja frontu budynku",
    span: "row-span-3",
  },
  {
    imageUrl: "/galeria/8.jpg",
    title: "Osiedle domów z lotu ptaka",
    span: "row-span-3",
  },
  {
    imageUrl: "/galeria/9.jpg",
    title: "Spójna koncepcja architektoniczna osiedla",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/10.jpg",
    title: "Dom wkomponowany w otoczenie",
    span: "row-span-2",
  },
  {
    imageUrl: "/galeria/11.jpg",
    title: "Nowoczesne osiedle w zielonej okolicy",
    span: "row-span-3",
  },
  {
    imageUrl: "/galeria/12.jpeg",
    title: "Przestronne i słoneczne wnętrze salonu",
    span: "row-span-2",
  },
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
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
              atmosferę miejsca, w którym możesz zamieszkać wraz ze swoją
              rodziną.
            </p>
          </div>

          <div className="mt-10 md:hidden">
            <GalleryStackMobile
              items={galleryImages.map(({ imageUrl, title }) => ({
                imageUrl,
                title,
              }))}
              onCardClick={openLightbox}
            />
          </div>

          <div className="mt-16 hidden grid-flow-dense grid-cols-2 gap-4 [grid-auto-rows:150px] md:grid md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <GalleryCard
                key={index}
                imageUrl={image.imageUrl}
                title={image.title}
                className={image.span}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <FullscreenImageViewer
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages.map((img) => ({
          src: img.imageUrl,
          alt: img.title,
        }))}
        startIndex={activeIndex}
      />
    </>
  );
}
