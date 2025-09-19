import Image from "next/image";
import { FeatureCard } from "@/components/common/feature-card";
import { FeatureCarousel } from "@/components/common/feature-carousel";
import { Button } from "@/components/ui/button";
import { AreaChart, Building2, Trees, Paintbrush } from "lucide-react";

const features = [
  {
    icon: AreaChart,
    title: "Powierzchnia",
    description: "Ponad 103 m²",
    isHighlighted: true,
  },
  { icon: Building2, title: "Rozmiar inwestycji", description: "8 budynków" },
  { icon: Paintbrush, title: "Architektura", description: "Nowoczesna" },
  { icon: Trees, title: "Otoczenie", description: "Pełne zieleni" },
];

export function InvestmentSection() {
  return (
    <section
      id="inwestycja"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Nagłówek wyrównany do lewej */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            O Inwestycji
          </h2>
        </div>
      </div>

      {/* WERSJA MOBILNA: Karuzela (bez zmian) */}
      <div className="mt-12 md:hidden">
        <FeatureCarousel>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </FeatureCarousel>
      </div>

      {/* WERSJA DESKTOP: Centralna siatka z kartami */}
      <div className="mx-auto mt-12 hidden max-w-7xl px-6 md:grid md:grid-cols-4 md:gap-8 md:px-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* WERSJA MOBILNA: Treść w jednej kolumnie (bez zmian) */}
      <div className="mx-auto mt-16 max-w-7xl px-6 md:px-8 md:hidden">
        <div className="space-y-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <span className="font-bold text-foreground">
              Domy z Przyszłością
            </span>{" "}
            to nowoczesna inwestycja deweloperska składająca się z domów w
            zabudowie bliźniaczej. Każdy budynek oferuje dwa poziomy komfortu:
            parter z przestronnym salonem i aneksem kuchennym oraz poddasze z
            sypialniami.
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
            Osiedle zaprojektowano z myślą o harmonii z naturą, oferując zielone
            tereny, wewnętrzne drogi dojazdowe i indywidualne parkingi. Jeśli
            marzysz o własnym domu bliźniaczym, nasza inwestycja łączy
            funkcjonalność z estetyką, zapewniając idealną przestrzeń dla Twojej
            rodziny.
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

      {/* WERSJA DESKTOP: Nowy, asymetryczny układ dwukolumnowy */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16 hidden md:block">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
          {/* Lewa kolumna: Tekst + Obraz */}
          <div className="space-y-8 flex flex-col">
            <p className="text-lg leading-relaxed text-muted-foreground">
              <span className="font-bold text-foreground">
                Domy z Przyszłością
              </span>{" "}
              to nowoczesna inwestycja deweloperska składająca się z domów w
              zabudowie bliźniaczej. Każdy budynek oferuje dwa poziomy komfortu:
              parter z przestronnym salonem i aneksem kuchennym oraz poddasze z
              sypialniami.
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
          {/* Prawa kolumna: Obraz + Tekst */}
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
              Osiedle zaprojektowano z myślą o harmonii z naturą, oferując
              zielone tereny, wewnętrzne drogi dojazdowe i indywidualne
              parkingi. Jeśli marzysz o własnym domu bliźniaczym, nasza
              inwestycja łączy funkcjonalność z estetyką, zapewniając idealną
              przestrzeń dla Twojej rodziny.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
