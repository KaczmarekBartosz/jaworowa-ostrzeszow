import { HeroSection } from "@/components/sections/hero-section";
import { InvestmentSection } from "@/components/sections/investment-section";
import { PlansSection } from "@/components/sections/plans-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { LocationSection } from "@/components/sections/location-section"; // Import
import { ContactSection } from "@/components/sections/contact-section"; // Import
import { Footer } from "@/components/sections/footer";

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
      <PlansSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
