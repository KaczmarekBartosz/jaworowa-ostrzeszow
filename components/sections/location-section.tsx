"use client";
import {
  MapPin,
  School,
  ShoppingCart,
  Trees,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-x-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Spokojna i zielona część Ostrzeszowa
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Osiedle Dębowy Park powstaje w spokojnej, zielonej części
              Ostrzeszowa. Lokalizacja zapewnia doskonałą komunikację z centrum
              miasta, szkołami, sklepami i punktami usługowymi. To miejsce,
              gdzie codzienna wygoda spotyka się z ciszą i naturą.
            </p>

            <ul className="mt-8 space-y-4">
              {locationFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex-shrink-0 shadow-sm transition-transform group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-base text-foreground/90 font-medium">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-start gap-4 rounded-2xl bg-card/50 p-5 border shadow-sm hover:shadow-md transition-shadow">
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
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group/link"
                >
                  Otwórz w Google Maps
                  <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[30rem] lg:h-full overflow-hidden rounded-3xl shadow-lg group/map">
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
            ></iframe>{" "}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.77000570884!2d17.93988067710376!3d51.48110591322285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ab63738128e09%3A0x1d5f1348ca433291!2sJaworowa%2C%2063-500%20Ostrzesz%C3%B3w!5e0!3m2!1spl!2spl!4v1727289650085!5m2!1spl!2spl&styles=roadmap|element:geometry|stylers:color=0x242f3e&styles=roadmap|element:labels.text.fill|stylers:color=0x746855&styles=roadmap|element:labels.text.stroke|stylers:color=0x242f3e&styles=water|element:geometry|stylers:color=0x17263c&styles=water|element:labels.text.fill|stylers:color=0x515c6d&styles=water|element:labels.text.stroke|stylers:color=0x17263c"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(1) invert(1) contrast(1.1)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji inwestycji"
              onLoad={() => setMapLoaded(true)}
              className="transition-opacity duration-300"
            ></iframe> */}
            {/* Overlay wskazówka na desktop */}
            <div className="absolute bottom-4 right-4 hidden lg:flex items-center gap-2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-muted-foreground opacity-0 group-hover/map:opacity-100 transition-opacity shadow-lg">
              <MapPin className="h-3 w-3" />
              Kliknij aby zobaczyć więcej
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
