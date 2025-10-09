import { HeroSection } from "@/components/sections/hero-section";
import { InvestmentSection } from "@/components/sections/investment-section";
import { PlansSection } from "@/components/sections/plans-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CalculatorSection } from "@/components/sections/calculator-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <InvestmentSection /> {/* Teraz zawiera lokalizację */}
      <GallerySection />
      <PlansSection />
      <CalculatorSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
