import { MapPin, School, ShoppingCart, Trees } from "lucide-react";

const locationFeatures = [
  { icon: ShoppingCart, text: "Sklepy i usługi w zasięgu spaceru" },
  { icon: School, text: "Bliskość szkół i przedszkoli" },
  { icon: Trees, text: "Tereny zielone i rekreacyjne w okolicy" },
];

export function LocationSection() {
  return (
    <section
      id="lokalizacja"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Podmiejska cisza w sercu Ostrzeszowa
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Inwestycja przy ulicy Jaworowej w Ostrzeszowie to miejsce, gdzie
              nowoczesne osiedle spotyka się z naturą. Zyskujesz spokój i
              prywatność, a jednocześnie szybki dostęp do szkół, sklepów,
              punktów usługowych i centrum miasta.
            </p>
            <ul className="mt-8 space-y-4">
              {locationFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* === OSTATECZNA POPRAWKA: Używamy zmiennych CSS dla gradientu === */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-foreground/80">{feature.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-card/50 p-4 border">
              <MapPin className="h-8 w-8 text-foreground/80 flex-shrink-0" />
              <div>
                <p className="font-bold">Adres inwestycji:</p>
                <p className="text-muted-foreground">
                  ul. Jaworowa, 63-500 Ostrzeszów
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[30rem] md:h-full overflow-hidden rounded-3xl">
            <iframe
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
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
