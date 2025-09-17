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
  { icon: Building2, title: "Liczba budynków", description: "7-8 jednostek" },
  { icon: Paintbrush, title: "Architektura", description: "Nowoczesna" },
  { icon: Trees, title: "Otoczenie", description: "Bliskość zieleni" },
];

export function InvestmentSection() {
  return (
    <section
      id="inwestycja"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            O Inwestycji
          </h2>
        </div>
      </div>

      <div className="mt-12 md:hidden">
        <FeatureCarousel>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </FeatureCarousel>
      </div>

      <div className="mx-auto mt-12 hidden max-w-7xl px-6 md:grid md:grid-cols-4 md:gap-8 md:px-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Domy z Przyszłością to nowoczesna inwestycja deweloperska
              składająca się z domów w zabudowie bliźniaczej. Każdy budynek
              oferuje dwa poziomy komfortu: parter z przestronnym salonem i
              aneksem kuchennym oraz poddasze z sypialniami. Osiedle
              zaprojektowano z myślą o harmonii z naturą, oferując zielone
              tereny, wewnętrzne drogi dojazdowe i indywidualne parkingi.
            </p>
            <p className="mt-6 text-base text-muted-foreground">
              Jeśli marzysz o własnym domu bliźniaczym w osiedlu z przyszłością,
              nasza inwestycja łączy funkcjonalność z estetyką, zapewniając
              idealną przestrzeń dla Twojej rodziny.
            </p>
          </div>
          <div className="flex items-start">
            <Button size="lg" className="rounded-full w-full md:w-auto" asChild>
              <a href="#plany">Zobacz plany</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
