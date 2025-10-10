"use client";
import { useState } from "react";
import { GalleryCard } from "@/components/common/gallery-card";
import { GalleryStackMobile } from "@/components/common/gallery-stack-mobile";
import { FullscreenImageViewer } from "@/components/common/fullscreen-image-viewer";

const galleryImages = [
  // Rząd 1: 1 duży po lewej
  {
    imageUrl: "/galeria/1.jpg",
    title: "Nowoczesny dom z przestronnym podjazdem",
    span: "md:col-span-1 md:row-span-2",
  },
  // Rząd 1: 2 małe po prawej (jeden nad drugim)
  {
    imageUrl: "/galeria/2.jpg",
    title: "Elegancka bryła budynku z podjazdem",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "/galeria/3.jpg",
    title: "Dom idealny dla całej rodziny",
    span: "md:col-span-1 md:row-span-1",
  },
  // Rząd 2: 1 duży po prawej (musi być PRZED małymi w kodzie)
  {
    imageUrl: "/galeria/6.jpg",
    title: "Stylowe wejście do domu",
    span: "md:col-span-1 md:row-span-2",
  },
  // Rząd 2: 2 małe po lewej (jeden nad drugim)
  {
    imageUrl: "/galeria/4.jpg",
    title: "Widok z góry na nowoczesną architekturę",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "/galeria/5.jpg",
    title: "Detal elewacji i duże przeszklenia",
    span: "md:col-span-1 md:row-span-1",
  },
  // Dodatkowe obrazy (po rozwinięciu) - kontynuacja wzoru
  {
    imageUrl: "/galeria/7.jpg",
    title: "Wizualizacja frontu budynku",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    imageUrl: "/galeria/8-post-render-3v5.jpg",
    title: "Osiedle domów z lotu ptaka",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "/galeria/9-plot.jpg",
    title: "Spójna koncepcja architektoniczna osiedla",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    imageUrl: "/galeria/10.jpg",
    title: "Dom wkomponowany w otoczenie",
    span: "md:col-span-1 md:row-span-2",
  },
  // {
  //   imageUrl: "/galeria/11.jpg",
  //   title: "Nowoczesne osiedle w zielonej okolicy",
  //   span: "md:col-span-1 md:row-span-1",
  // },
  {
    imageUrl: "/galeria/12.jpeg",
    title: "Przestronne i słoneczne wnętrze salonu",
    span: "md:col-span-1 md:row-span-1",
  },
];

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: "", alt: "" });
  const [showAll, setShowAll] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxImage({
      src: galleryImages[index].imageUrl,
      alt: galleryImages[index].title,
    });
    setLightboxOpen(true);
  };

  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 6);

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

          {/* Mobile View - zachowany oryginalny układ (wszystkie obrazy) */}
          <div className="mt-10 md:hidden">
            <GalleryStackMobile
              items={galleryImages.map(({ imageUrl, title }) => ({
                imageUrl,
                title,
              }))}
              onCardClick={openLightbox}
            />
          </div>

          {/* Desktop View - perfekcyjnie zbalansowany asymetryczny układ */}
          <div className="mt-16 hidden md:grid md:grid-cols-2 md:gap-6 md:[grid-auto-rows:280px]">
            {visibleImages.map((image, index) => (
              <GalleryCard
                key={index}
                imageUrl={image.imageUrl}
                title={image.title}
                className={image.span}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>

          {/* Przycisk "Pokaż więcej" / "Zwiń" - tylko desktop */}
          {galleryImages.length > 6 && (
            <div className="mt-10 hidden md:flex md:justify-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="rounded-xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground px-8 py-3 text-sm font-semibold transition-all hover:opacity-90"
              >
                {showAll ? "Zwiń" : "Pokaż więcej"}
              </button>
            </div>
          )}
        </div>
      </section>

      <FullscreenImageViewer
        open={lightboxOpen}
        src={lightboxImage.src}
        alt={lightboxImage.alt}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
