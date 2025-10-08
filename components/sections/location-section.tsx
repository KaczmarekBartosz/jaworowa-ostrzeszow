"use client";
import {
  MapPin,
  School,
  ShoppingCart,
  Trees,
  ExternalLink,
  Castle,
  Church,
  Mountain,
  TreePine,
  Camera,
} from "lucide-react";
import { useState } from "react";

const touristAttractions = [
  {
    title: "Ostrzeszów - Wieża Zamkowa",
    distance: "5 km",
    description:
      "Średniowieczna wieża obronna z XIV wieku z panoramą miasta i wystawą historyczną.",
    icon: Castle,
  },
  {
    title: "Kobyla Góra",
    distance: "15 km",
    description:
      "284 m n.p.m. - najwyższy szczyt Wielkopolski z sanktuarium i widokami.",
    icon: Mountain,
  },
  {
    title: "Pałac w Antoninie",
    distance: "13 km",
    description:
      "Myśliwski pałac Radziwiłłów z 1824 r., gdzie komponował Chopin.",
    icon: Camera,
  },
  {
    title: "Kościół romański w Kotłowie",
    distance: "20 km",
    description:
      "Jedna z najstarszych świątyń w Wielkopolsce - 900 lat historii.",
    icon: Church,
  },
  {
    title: "Rezerwat Jodły Ostrzeszowskie",
    distance: "4 km",
    description:
      "Unikatowy rezerwat z majestatycznymi jodłami i bogatą fauną leśną.",
    icon: TreePine,
  },
  {
    title: "Koniec Świata w Głuszynie",
    distance: "30 km",
    description:
      "Miejsce o niezwykłej nazwie z polem biwakowym i pomnikiem meteorytu.",
    icon: MapPin,
  },
];

const locationFeatures = [
  { icon: ShoppingCart, text: "Sklepy i usługi na wyciągnięcie ręki" },
  { icon: School, text: "Osiedle blisko szkół i przedszkoli" },
  { icon: Trees, text: "Tereny zielone i rekreacyjne w okolicy" },
];

export function LocationSection() {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleOpenInMaps = () => {
    window.open(
      "https://www.google.com/maps/place/Jaworowa,+63-500+Ostrzesz%C3%B3w/@51.4811059,17.9398807,17z",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="lokalizacja"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Nagłówek sekcji - wyrównany do lewej */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Idealna lokalizacja
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Spokojna, zielona część Ostrzeszowa z doskonałym dostępem do miasta
            i atrakcji turystycznych
          </p>
        </div>

        {/* Sekcja atrakcji turystycznych - nad mapą */}
        <div className="mt-16">
          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl font-bold text-foreground">
              Atrakcje turystyczne w okolicy
            </h3>
            <p className="mt-3 text-base text-muted-foreground">
              Doskonała lokalizacja dla mieszkańców Wrocławia - zaledwie godzina
              jazdy dzieli Cię od bogatego dziedzictwa kulturowego i
              przyrodniczego Wielkopolski
            </p>
          </div>

          {/* Grid z atrakcjami - 3 kolumny na desktop, 1 na mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {touristAttractions.map((attraction, index) => (
              <div
                key={index}
                className="bg-card/50 border backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-card/80"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex-shrink-0">
                    <attraction.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-foreground text-base leading-tight">
                      {attraction.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {attraction.distance}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {attraction.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Główna sekcja z mapą i opisem lokalizacji */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16 mt-20">
          {/* Lewa kolumna - Opis lokalizacji */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Spokojna i zielona część Ostrzeszowa
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              Osiedle Dębowy Park powstaje w spokojnej, zielonej części
              Ostrzeszowa. Lokalizacja zapewnia doskonałą komunikację z centrum
              miasta, szkołami, sklepami i punktami usługowymi. To miejsce,
              gdzie codzienna wygoda spotyka się z ciszą i naturą.
            </p>

            <ul className="space-y-4 mb-8">
              {locationFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-base text-foreground/90 font-medium">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Adres */}
            <div className="flex items-start gap-4 rounded-2xl bg-card/50 p-5 border backdrop-blur-sm transition-all duration-300 hover:bg-card/80">
              <MapPin className="h-8 w-8 text-foreground/80 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="font-bold text-foreground text-base">
                  Adres inwestycji:
                </p>
                <p className="text-muted-foreground mt-1">
                  ul. Jaworowa, 63-500 Ostrzeszów
                </p>
                <button
                  onClick={handleOpenInMaps}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  Otwórz w Google Maps
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Prawa kolumna - Mapa */}
          <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden rounded-3xl border bg-card/50">
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
                <div className="text-center">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"></div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Ładowanie mapy...
                  </p>
                </div>
              </div>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.77000570884!2d17.93988067710376!3d51.48110591322285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ab63738128e09%3A0x1d5f1348ca433291!2sJaworowa%2C%2063-500%20Ostrzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1727289650085!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji inwestycji"
              onLoad={() => setMapLoaded(true)}
              className="transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
