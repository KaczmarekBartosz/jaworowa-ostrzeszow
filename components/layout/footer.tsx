import {
  Trees,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Building2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Strona główna"
            >
              <Trees
                className="size-7 text-foreground flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Osiedle Dębowy Park
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Nowoczesne osiedle domów w zabudowie bliźniaczej, zaprojektowane z
              myślą o komforcie i harmonii z naturą.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Nawigacja</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#dlaczego-warto"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dlaczego warto?
                </a>
              </li>
              <li>
                <a
                  href="#domy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Domy i Plany
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#kalkulator"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Finansowanie
                </a>
              </li>
              <li>
                <a
                  href="#lokalizacja"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lokalizacja
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Kontakt</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:info@polmag.org.pl"
                  className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Mail className="size-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">info@polmag.org.pl</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+48735368476"
                  className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone className="size-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div>+48 735 368 476</div>
                    <div className="text-xs text-muted-foreground/70 mt-0.5">
                      Sandra Bacik - Sekretariat
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+48625903027"
                  className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Phone className="size-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+48 62 590 3027</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Social Media</h3>
            <div className="mt-4 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
                asChild
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="size-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:scale-110 transition-transform"
                asChild
              >
                <a href="#" aria-label="Facebook">
                  <Facebook className="size-5" />
                </a>
              </Button>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-foreground text-sm">
                Inwestor
              </h3>
              <div className="mt-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">POLMAG s.c.</p>
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

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Osiedle Dębowy Park. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
