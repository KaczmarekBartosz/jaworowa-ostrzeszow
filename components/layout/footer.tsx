import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-8">
          {/* Logo i opis - pełna szerokość na mobile, 1 kolumna na desktop */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Strona główna"
            >
              <Image
                src="/logo.png"
                alt="Logo Osiedle Dębowy Park"
                width={120}
                height={120}
                className="flex-shrink-0"
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Osiedle Dębowy Park
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs text-sm">
              Nowoczesne osiedle domów w zabudowie bliźniaczej, zaprojektowane z
              myślą o komforcie i harmonii z naturą.
            </p>
          </div>

          {/* Pozostała zawartość - 2 kolumny na mobile */}
          <div className="grid grid-cols-2 gap-6 lg:contents">
            {/* Nawigacja */}
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Nawigacja
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="#dlaczego-warto"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    O inwestycji
                  </a>
                </li>
                <li>
                  <a
                    href="#domy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Domy i plany
                  </a>
                </li>
                <li>
                  <a
                    href="#galeria"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Galeria
                  </a>
                </li>
                <li>
                  <a
                    href="#kalkulator"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Finansowanie
                  </a>
                </li>
                <li>
                  <a
                    href="#kontakt"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="font-semibold text-foreground text-sm">Kontakt</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:info@polmag.org.pl"
                    className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Mail className="size-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="break-all text-xs">
                      office@polmag.org.pl
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+48698470685"
                    className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Phone className="size-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-xs">+48 698 470 685</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Social Media
              </h3>
              <div className="mt-4 flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform h-9 w-9"
                  asChild
                >
                  <a href="#" aria-label="Instagram">
                    <Instagram className="size-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform h-9 w-9"
                  asChild
                >
                  <a href="#" aria-label="Facebook">
                    <Facebook className="size-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Inwestor */}
            <div>
              <h3 className="font-semibold text-foreground text-sm">
                Inwestor
              </h3>
              <div className="mt-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground text-xs">
                  POLMAG s.c.
                </p>
                <p className="text-xs mt-1">
                  ul. Powstańców Wlkp. 31
                  <br />
                  63-500 Ostrzeszów
                </p>
                <p className="mt-2 text-xs">NIP: 5140337328</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-xs md:text-sm text-muted-foreground space-y-2">
          <p>
            © {new Date().getFullYear()} Osiedle Dębowy Park. Wszelkie prawa
            zastrzeżone.
          </p>
          <p>
            Projekt i realizacja:{" "}
            <a
              href="mailto:bartosz.kaczmarek@icloud.com"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Bartosz Kaczmarek
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
