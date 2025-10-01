import { Trees, Mail, Phone, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
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
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-foreground">Nawigacja</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  {/* POPRAWKA: Poprawiono 'href' na działający */}
                  <a
                    href="#dlaczego-warto"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Dlaczego warto?
                  </a>
                </li>
                <li>
                  <a
                    href="#domy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Domy i Plany
                  </a>
                </li>
                <li>
                  <a
                    href="#galeria"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Galeria
                  </a>
                </li>
                <li>
                  <a
                    href="#lokalizacja"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Lokalizacja
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Kontakt</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    email@przykład.pl
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-4 text-muted-foreground" />
                  <span className="text-muted-foreground">+48 123 456 789</span>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="font-semibold text-foreground">Social Media</h3>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="size-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="size-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Osiedle Dębowy Park. Wszelkie prawa
          zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
