import { HeroSection } from "@/components/sections/hero-section";
import { InvestmentSection } from "@/components/sections/investment-section";

const PlaceholderSection = ({ id, title }: { id: string; title: string }) => (
  <section
    id={id}
    className="min-h-screen bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
  >
    <div className="mx-auto max-w-7xl px-6 md:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InvestmentSection />
      <PlaceholderSection id="domy" title="Domy" />
      <PlaceholderSection id="plany" title="Plany" />
      <PlaceholderSection id="galeria" title="Galeria" />
      <PlaceholderSection id="lokalizacja" title="Lokalizacja" />
      <PlaceholderSection id="kontakt" title="Kontakt" />
    </main>
  );
}
