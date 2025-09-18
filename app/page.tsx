import { HeroSection } from "@/components/sections/hero-section";
import { InvestmentSection } from "@/components/sections/investment-section";
import { PlansSection } from "@/components/sections/plans-section";

const PlaceholderSection = ({ id, title }: { id: string; title: string }) => (
  <section
    id={id}
    className="min-h-dvh bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
  >
    <div className="mx-auto max-w-7xl px-6 md:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Treść tej sekcji zostanie uzupełniona w kolejnych iteracjach.
      </p>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InvestmentSection />
      <PlansSection /> {/* 2. Zastępujemy placeholder */}
      {/* <PlaceholderSection id="domy" title="Domy" /> - Już niepotrzebne */}
      {/* <PlaceholderSection id="plany" title="Plany" /> - Już niepotrzebne */}
      <PlaceholderSection id="galeria" title="Galeria" />
      <PlaceholderSection id="lokalizacja" title="Lokalizacja" />
      <PlaceholderSection id="kontakt" title="Kontakt" />
    </main>
  );
}
