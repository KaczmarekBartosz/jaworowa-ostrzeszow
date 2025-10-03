"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-3xl text-center px-6 md:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Skont-aktuj się z nami
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Masz pytania? Chcesz dowiedzieć się więcej? Wypełnij formularz, a my
          odezwiemy się do Ciebie tak szybko, jak to możliwe.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-6 md:px-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Imię
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Imię"
              required
              // POPRAWKA: Poprawny atrybut autoComplete
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              required
              // POPRAWKA: Poprawny atrybut autoComplete
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Wiadomość
            </label>
            <Textarea
              id="message"
              placeholder="Twoja wiadomość..."
              rows={6}
              required
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="rounded-full w-full md:w-auto"
            >
              Wyślij wiadomość
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
