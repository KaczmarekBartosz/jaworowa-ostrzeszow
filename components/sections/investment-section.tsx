"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FeatureCard } from "@/components/common/feature-card";
import { FeatureCarousel } from "@/components/common/feature-carousel";
import { AttractionCard } from "@/components/common/attraction-card";
import { LocationIcon } from "@/components/common/location-icon";
import {
  Home,
  Shield,
  MapPin,
  School,
  ShoppingCart,
  ExternalLink,
  Leaf,
  Trees,
  Heart,
  Waves,
  GraduationCap,
  Building,
  UtensilsCrossed,
  Package,
  Clock,
} from "lucide-react";

/* =========================
   Types
========================= */
type FeatureItem = {
  icon: React.ReactElement;
  title: string;
  description: string;
  isHighlighted?: boolean;
};

type Attraction = {
  title: string;
  distance: string; // e.g. "15 km"
  description: string;
  imageUrl: string;
  location: string; // Google Maps search query or place name
};

type LocationFeature = {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
};

type DailyFeature = {
  icon: React.ReactElement;
  title: string;
  distance: string;
};

/* =========================
   Static data
========================= */
const FEATURES: FeatureItem[] = [
  {
    icon: <Home className="size-6 text-primary-foreground" />,
    title: "Nowoczesny design i komfort",
    description: "Przemyślany układ, dwie kondygnacje, najwyższa jakość.",
    isHighlighted: true,
  },
  {
    icon: <Leaf className="size-6 text-secondary-foreground" />,
    title: "Energooszczędność i niskie koszty",
    description: "Wysoka klasa, pompa ciepła i rekuperacja w standardzie.",
  },
  {
    icon: <Shield className="size-6 text-secondary-foreground" />,
    title: "Prywatność i bezpieczeństwo",
    description: "Kameralne, ogrodzone osiedle i własny ogród.",
  },
  {
    icon: <MapPin className="size-6 text-secondary-foreground" />,
    title: "Strategiczne położenie",
    description: "Cisza i zieleń, a do centrum, szkół i sklepów bardzo blisko.",
  },
] as const;

const ATTRACTIONS: Attraction[] = [
  {
    title: "Kobyla Góra",
    distance: "10 km",
    description: "Bór sosnowy, plaża, sporty wodne i restauracje.",
    imageUrl: "/KobylaGora-optimized.jpg",
    location: "Kobyla Góra, Poland",
  },
  {
    title: "Antonin",
    distance: "11 km",
    description: "Staw Szperek, plaża, las i aktywny wypoczynek.",
    imageUrl:
      "https://antonin.com.pl/wp-content/uploads/2019/12/65645315_2597886776908589_4682238110463950848_o.jpg",
    location: "Antonin, Poland",
  },
  {
    title: "Rezerwat Jodły Ostrzeszowskie",
    distance: "4 km",
    description: "Unikatowy las jodłowy i ciche leśne ścieżki.",
    imageUrl:
      "https://familyfunspace.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6Mzc4NDMxLCJwdXIiOiJibG9iX2lkIn19--847cffc7476eb16dfffc4d9976bd762236577b4f/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemUiOiIxMDAweDEwMDAifSwicHVyIjoidmFyaWF0aW9uIn19--9e979b794c9bc08a4ea31faea435103af8b16be4/photo.jpg",
    location: "Rezerwat Jodły Ostrzeszowskie, Ostrzeszów",
  },
  {
    title: "Koniec Świata w Głuszynie",
    distance: "30 km",
    description: "Wiralowa lokacja Netflixa i krater meteorytowy.",
    imageUrl:
      "https://pomnikiorganizacji.wordpress.com/wp-content/uploads/2022/02/koniec-swiata-1-post-z-fb-koniec-swiata-z-29-grudnia.jpg",
    location: "Koniec Świata, Głuszyna, Poland",
  },
] as const;

const LOCATION_FEATURES: LocationFeature[] = [
  { icon: ShoppingCart, text: "Sklepy, apteka i usługi kilka minut od domu" },
  { icon: School, text: "Szkoły i przedszkola w zasięgu krótkiego dojazdu" },
  { icon: Trees, text: "Parki, las i ścieżki na rodzinne spacery" },
] as const;

const DAILY_FEATURES: DailyFeature[] = [
  {
    icon: <ShoppingCart className="w-full h-full" strokeWidth={1.5} />,
    title: "Market",
    distance: "3 min",
  },
  {
    icon: <UtensilsCrossed className="w-full h-full" strokeWidth={1.5} />,
    title: "Restauracja",
    distance: "4 min",
  },
  {
    icon: <Trees className="w-full h-full" strokeWidth={1.5} />,
    title: "Las",
    distance: "1 min",
  },
  {
    icon: <Package className="w-full h-full" strokeWidth={1.5} />,
    title: "Paczkomat",
    distance: "4 min",
  },
  {
    icon: <Heart className="w-full h-full" strokeWidth={1.5} />,
    title: "Apteka",
    distance: "4 min",
  },
  {
    icon: <Building className="w-full h-full" strokeWidth={1.5} />,
    title: "Centrum",
    distance: "5 min",
  },
  {
    icon: <Waves className="w-full h-full" strokeWidth={1.5} />,
    title: "Basen",
    distance: "6 min",
  },
  {
    icon: <GraduationCap className="w-full h-full" strokeWidth={1.5} />,
    title: "Szkoła",
    distance: "6 min",
  },
] as const;

/* =========================
   Component
========================= */
export function InvestmentSection() {
  const [mapLoaded, setMapLoaded] = useState(false);

  const features = useMemo(() => FEATURES, []);
  const touristAttractions = useMemo(() => ATTRACTIONS, []);
  const locationFeatures = useMemo(() => LOCATION_FEATURES, []);
  const dailyFeatures = useMemo(() => DAILY_FEATURES, []);

  const handleOpenInMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Jaworowa,+63-500+Ostrzesz%C3%B3w/@51.4811059,17.9398807,17z",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="dlaczego-warto"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
      aria-labelledby="investment-heading"
    >
      {/* H2 + intro */}
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          <h2
            id="investment-heading"
            className="text-4xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Miejsce, w którym zapuścisz korzenie
          </h2>
        </div>
      </div>

      {/* Features */}
      <div className="mt-12 md:hidden">
        <FeatureCarousel>
          {features.map(({ title, description, icon, isHighlighted }) => (
            <FeatureCard
              key={title}
              title={title}
              description={description}
              isHighlighted={isHighlighted}
            >
              {icon}
            </FeatureCard>
          ))}
        </FeatureCarousel>
      </div>

      <div className="mx-auto mt-12 hidden max-w-7xl px-6 md:grid md:grid-cols-4 md:gap-8 md:px-8">
        {features.map(({ title, description, icon, isHighlighted }) => (
          <FeatureCard
            key={title}
            title={title}
            description={description}
            isHighlighted={isHighlighted}
          >
            {icon}
          </FeatureCard>
        ))}
      </div>

      {/* Lead + two images */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
          <div className="flex flex-col space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Dąb to od wieków symbol siły, natury i zaufania. W Osiedlu Dębowy
              Park łączymy te ponadczasowe wartości z nowoczesnymi technologiami
              budownictwa, tworząc solidne fundamenty dla Twojej przyszłości.
            </p>
            <figure className="relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src="/investment-image.png"
                alt="Wizualizacja fasady domu — nowoczesna bryła w świetle dziennym"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                decoding="async"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
          </div>

          <div className="flex flex-col space-y-8">
            <figure className="relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src="/galeria/8-post-render-3v5.jpg"
                alt="Wizualizacja osiedla Dębowy Park z dużą ilością zieleni"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                decoding="async"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Naszą ambicją było stworzenie osiedla, które zachwyca architekturą
              i zapewnia spokój, bezpieczeństwo oraz komfort codziennego życia.
            </p>
          </div>
        </div>
      </div>

      {/* LOKALIZACJA — jeden spójny blok */}
      <div id="lokalizacja" aria-labelledby="location-heading">
        {/* ========================================
    SEKCJA 2: Zalety lokalizacji
    ======================================== */}
        <div className="mt-20 md:mt-32">
          {/* Nagłówek + Grid ikon */}
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="max-w-3xl mb-12 md:mb-16">
              <h3
                id="location-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
              >
                Zalety naszej lokalizacji
              </h3>
              <p className="mt-4 md:mt-6 text-base leading-relaxed text-muted-foreground">
                Codzienne udogodnienia w zasięgu krótkiego spaceru
              </p>
            </div>

            {/* Grid 8 ikon */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-6 lg:gap-8 mb-16 md:mb-20">
              {dailyFeatures.map(({ icon, title, distance }) => (
                <LocationIcon
                  key={title}
                  icon={icon}
                  title={title}
                  distance={distance}
                />
              ))}
            </div>
          </div>

          {/* 2-kolumnowy układ: opis + adres (lewo) | mapa (prawo) */}
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16">
              {/* Lewa kolumna: nagłówek + opis + adres */}
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  Spokojna i zielona część Ostrzeszowa
                </h3>
                <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                  Osiedle Dębowy Park powstaje w miejscu, gdzie codzienna wygoda
                  spotyka się z ciszą i naturą. Wszystko, czego potrzebujesz na
                  co dzień w zasięgu ręki.
                </p>

                <address className="not-italic mt-8 md:mt-12">
                  <div className="flex items-start gap-4 rounded-2xl bg-card/50 p-5 border backdrop-blur-sm transition-colors duration-300 hover:bg-card/80">
                    <MapPin
                      className="h-8 w-8 text-foreground/80 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-foreground text-base">
                        Adres inwestycji:
                      </p>
                      <p className="text-muted-foreground mt-1">
                        ul. Jaworowa, 63-500 Ostrzeszów
                      </p>
                      <button
                        onClick={handleOpenInMaps}
                        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                      >
                        Otwórz w Google Maps
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        <span className="sr-only">
                          {" "}
                          (otwiera w nowej karcie)
                        </span>
                      </button>
                    </div>
                  </div>
                </address>
              </div>

              {/* Prawa kolumna: mapa */}
              <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-3xl border bg-card/50">
                {!mapLoaded && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-muted"
                    aria-hidden="true"
                  >
                    <div className="text-center">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" />
                      <p className="mt-3 text-sm text-muted-foreground">
                        Ładowanie mapy…
                      </p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1rWfhJnRT8uuwSWEM19BzFwRclaqZJ5o&ehbc=2E312F&noprof=1&z=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa inwestycji Osiedle Dębowy Park"
                  onLoad={() => setMapLoaded(true)}
                  className={`absolute inset-0 top-[-58px] h-[calc(100%+58px)] transition-opacity duration-500 ${
                    mapLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SEKCJA 3: Uroki regionu */}
        <div className="mt-16 md:mt-24" aria-labelledby="sights-heading">
          {/* Nagłówek */}
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="max-w-3xl mb-12 md:mb-16">
              <h3
                id="sights-heading"
                className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
              >
                Odkryj uroki regionu
              </h3>
              <p className="mt-4 md:mt-6 text-base leading-relaxed text-muted-foreground">
                Plaża w Kobylej Górze, rowery wodne w Antoninie, a może
                Netflix&apos;owy &ldquo;Koniec Świata&rdquo; w Głuszynie?
              </p>
            </div>
          </div>

          {/* Mobile: Karuzela atrakcji */}
          <div className="md:hidden">
            <FeatureCarousel>
              {touristAttractions.map(
                ({ title, description, distance, imageUrl, location }, i) => (
                  <AttractionCard
                    key={title}
                    title={title}
                    description={description}
                    distance={distance}
                    imageUrl={imageUrl}
                    location={location}
                    priority={i < 2}
                  />
                )
              )}
            </FeatureCarousel>
          </div>

          {/* Desktop: Grid atrakcji */}
          <div className="mx-auto max-w-7xl hidden md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 px-6 md:px-8">
            {touristAttractions.map(
              ({ title, description, distance, imageUrl, location }, i) => (
                <AttractionCard
                  key={title}
                  title={title}
                  description={description}
                  distance={distance}
                  imageUrl={imageUrl}
                  location={location}
                  priority={i < 2}
                />
              )
            )}
          </div>
        </div>

        {/* CTA na końcu */}
        <div className="mx-auto max-w-7xl px-6 md:px-8 mt-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="#galeria"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground px-5 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            Zobacz galerię wizualizacji
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium hover:bg-card/60 transition-colors"
          >
            Umów wizytę na miejscu
          </a>
        </div>
      </div>
    </section>
  );
}
