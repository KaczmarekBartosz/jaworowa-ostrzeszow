import Image from "next/image";
import { FeatureCard } from "@/components/common/feature-card";
import { FeatureCarousel } from "@/components/common/feature-carousel";
import { Home, Trees, Shield, MapPin } from "lucide-react";

// Definiujemy dane wewnątrz komponentu
const features = [
  {
    icon: <Trees className="size-6 text-primary-foreground" />,
    title: "Harmonia z naturą",
    description: "Prywatny ogród i dużo zieleni",
    isHighlighted: true,
  },
  {
    icon: <Home className="size-6 text-secondary-foreground" />,
    title: "Dla Twojej wygody",
    description: "Przemyślany układ",
  },
  {
    icon: <Shield className="size-6 text-secondary-foreground" />,
    title: "Dla Twojego spokoju",
    description: "Kameralne i bezpieczne osiedle",
  },
  {
    icon: <MapPin className="size-6 text-secondary-foreground" />,
    title: "Dla oszczędności Twojego czasu",
    description: "Blisko miasta",
  },
];

export function InvestmentSection() {
  return (
    <section
      id="dlaczego-warto"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Miejsce, w którym zapuścisz korzenie.
          </h2>
        </div>
      </div>

      {/* WERSJA MOBILNA: Karuzela */}
      <div className="mt-12 md:hidden">
        <FeatureCarousel>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              isHighlighted={feature.isHighlighted}
            >
              {feature.icon}
            </FeatureCard>
          ))}
        </FeatureCarousel>
      </div>

      {/* WERSJA DESKTOP: Siatka */}
      <div className="mx-auto mt-12 hidden max-w-7xl px-6 md:grid md:grid-cols-4 md:gap-8 md:px-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            isHighlighted={feature.isHighlighted}
          >
            {feature.icon}
          </FeatureCard>
        ))}
      </div>

      {/* WERSJA MOBILNA: Treść */}
      <div className="mx-auto mt-16 max-w-7xl px-6 md:px-8 md:hidden">
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Dąb to od wieków symbol siły, natury i zaufania. Na osiedlu Dębowy
            Park łączymy te ponadczasowe wartości z nowoczesnymi technologiami
            budownictwa, tworząc solidne fundamenty dla Ciebie i Twojej rodziny.
          </p>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/investment-image.png"
              alt="Wizualizacja nowoczesnej fasady domu w ciągu dnia"
              width={1200}
              height={800}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Naszą ambicją było stworzenie osiedla, które nie tylko zachwyca
            architekturą, ale przede wszystkim zapewnia spokój, bezpieczeństwo i
            komfort w codziennym życiu.
          </p>
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/investment-image-green.jpg"
              alt="Wizualizacja osiedla Domy z Przyszłością z dużą ilością zieleni"
              width={1200}
              height={800}
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* WERSJA DESKTOP: Treść */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16 hidden md:block">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
          <div className="space-y-8 flex flex-col">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dąb to od wieków symbol siły, natury i zaufania. Na osiedlu Dębowy
              Park łączymy te ponadczasowe wartości z nowoczesnymi technologiami
              budownictwa, tworząc solidne fundamenty dla Ciebie i Twojej
              rodziny.
            </p>
            <div className="overflow-hidden rounded-3xl mt-auto">
              <Image
                src="/investment-image.png"
                alt="Wizualizacja nowoczesnej fasady domu w ciągu dnia"
                width={1200}
                height={800}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-8 flex flex-col">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/investment-image-green.jpg"
                alt="Wizualizacja osiedla Domy z Przyszłością z dużą ilością zieleni"
                width={1200}
                height={800}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Naszą ambicją było stworzenie osiedla, które nie tylko zachwyca
              architekturą, ale przede wszystkim zapewnia spokój, bezpieczeństwo
              i komfort w codziennym życiu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
