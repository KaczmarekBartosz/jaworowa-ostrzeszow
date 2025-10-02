"use client";

import { useState, useEffect } from "react";
import { useSpring, useTransform } from "framer-motion";

const LOAN_MIN = 200_000;
const LOAN_MAX = 1_000_000;
const LOAN_STEP = 10_000;
const TERM_MIN = 5;
const TERM_MAX = 35;
const TERM_STEP = 1;
const MOCK_RATE = 8.41; // % – symulacja

function calculateInstallment(amount: number, years: number, rate: number) {
  const n = years * 12;
  const r = rate / 100 / 12;
  return (amount * r) / (1 - Math.pow(1 + r, -n));
}

// Komponent do animowanego wyświetlania liczby
function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, {
    damping: 30,
    stiffness: 200,
  });

  const display = useTransform(
    spring,
    (current) => Math.round(current * 100) / 100
  );

  const [displayValue, setDisplayValue] = useState("0,00");

  useEffect(() => {
    spring.set(value);
    const unsubscribe = display.on("change", (latest) => {
      setDisplayValue(
        latest.toLocaleString("pl-PL", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    });
    return () => unsubscribe();
  }, [value, spring, display]);

  return <>{displayValue}</>;
}

export function CalculatorSection() {
  const [amount, setAmount] = useState(350_000);
  const [years, setYears] = useState(30);

  const installment =
    Math.round(calculateInstallment(amount, years, MOCK_RATE) * 100) / 100;

  return (
    <section id="kalkulator" className="bg-background py-14 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="bg-card/70 rounded-2xl md:rounded-3xl border shadow-xl md:shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* LEWA kolumna */}
          <div className="flex-1 p-6 sm:p-7 md:p-12">
            {/* Nagłówek */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 tracking-tight leading-tight">
              Kalkulator raty kredytowej
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Oblicz przybliżoną miesięczną ratę kredytu hipotecznego.
              <br className="hidden sm:block" />
              Wybierz kwotę i okres – lub zostaw numer, a <b>ekspert</b>{" "}
              dobierze najlepszą ofertę.
            </p>

            {/* Slidery */}
            <div className="space-y-6 sm:space-y-8">
              {/* Kwota */}
              <div>
                <label
                  htmlFor="slider-kwota"
                  className="block mb-1.5 sm:mb-2 font-medium text-sm sm:text-base"
                >
                  Kwota kredytu:
                  <span className="ml-2 text-primary font-bold text-base sm:text-lg">
                    {amount.toLocaleString("pl-PL")} zł
                  </span>
                </label>
                <input
                  type="range"
                  id="slider-kwota"
                  min={LOAN_MIN}
                  max={LOAN_MAX}
                  step={LOAN_STEP}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="mt-1.5 flex justify-between text-[11px] sm:text-xs text-muted-foreground">
                  <span>{LOAN_MIN.toLocaleString("pl-PL")} zł</span>
                  <span>{LOAN_MAX.toLocaleString("pl-PL")} zł</span>
                </div>
              </div>

              {/* Okres */}
              <div>
                <label
                  htmlFor="slider-lata"
                  className="block mb-1.5 sm:mb-2 font-medium text-sm sm:text-base"
                >
                  Okres kredytowania:
                  <span className="ml-2 text-primary font-bold text-base sm:text-lg">
                    {years} lat
                  </span>
                </label>
                <input
                  type="range"
                  id="slider-lata"
                  min={TERM_MIN}
                  max={TERM_MAX}
                  step={TERM_STEP}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="mt-1.5 flex justify-between text-[11px] sm:text-xs text-muted-foreground">
                  <span>{TERM_MIN} lat</span>
                  <span>{TERM_MAX} lat</span>
                </div>
              </div>
            </div>
          </div>

          {/* PRAWA kolumna: wynik + CTA */}
          <div className="bg-card/80 flex-1 flex flex-col justify-center items-center gap-5 sm:gap-6 md:gap-8 p-6 sm:p-7 md:p-12 border-t md:border-t-0 md:border-l">
            <div className="text-center">
              <span className="block text-xs sm:text-sm text-muted-foreground">
                Wysokość raty
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground">
                <AnimatedNumber value={installment} /> zł
              </span>
              <span className="block text-xs sm:text-sm text-orange-900/80 font-medium mt-0.5 sm:mt-1">
                RRSO{" "}
                {MOCK_RATE.toLocaleString("pl-PL", {
                  maximumFractionDigits: 2,
                })}
                %
              </span>
            </div>

            <button className="w-full sm:w-auto bg-primary hover:bg-primary/85 text-primary-foreground font-bold rounded-lg md:rounded-xl px-8 md:px-12 py-2.5 md:py-3 shadow focus:outline-none focus:ring-2 focus:ring-primary transition">
              Sprawdź oferty
            </button>

            {/* Ekspert */}
            <div className="w-full flex flex-col items-center pt-1 sm:pt-2">
              <span className="block font-medium text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">
                Porozmawiaj z ekspertem:
              </span>
              <form className="flex w-full max-w-xs gap-2 flex-col sm:flex-row">
                <input
                  type="tel"
                  pattern="[0-9]{9}"
                  placeholder="telefon (9 cyfr)"
                  className="rounded-lg border p-2.5 sm:p-3 flex-1 text-base sm:text-lg"
                />
                <button
                  type="submit"
                  className="bg-orange-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 font-bold rounded-lg hover:bg-orange-500 transition"
                >
                  Wyślij
                </button>
              </form>
            </div>

            <div className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-muted-foreground text-center opacity-70 leading-relaxed">
              Symulacja ma charakter informacyjny i nie stanowi oferty
              handlowej. Szczegółowe wyliczenie po analizie Twojej sytuacji.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
