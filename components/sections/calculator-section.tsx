"use client";

import { useState, useEffect } from "react";
import { useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

const LOAN_MIN = 200_000;
const LOAN_MAX = 1_000_000;
const LOAN_STEP = 10_000;
const TERM_MIN = 5;
const TERM_MAX = 35;
const TERM_STEP = 1;
const MOCK_RATE = 8.41;

function calculateInstallment(amount: number, years: number, rate: number) {
  const n = years * 12;
  const r = rate / 100 / 12;
  return (amount * r) / (1 - Math.pow(1 + r, -n));
}

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
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const installment =
    Math.round(calculateInstallment(amount, years, MOCK_RATE) * 100) / 100;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 9);
    setPhone(value);
    setPhoneError("");
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 9) {
      setPhoneError("Podaj prawidłowy 9-cyfrowy numer telefonu");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setPhone("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="kalkulator" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Finansowanie
          </h2>
          <p className="mt-4 md:mt-6 text-lg leading-relaxed text-muted-foreground">
            Sprawdź kalkulator rat kredytowych i dowiedz się, jak łatwo możesz
            sfinansować swój wymarzony dom.
          </p>
        </div>

        <div className="bg-card/70 rounded-2xl md:rounded-3xl border shadow-xl md:shadow-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 p-6 sm:p-7 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 tracking-tight leading-tight">
              Kalkulator raty kredytowej
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Oblicz przybliżoną miesięczną ratę kredytu hipotecznego.
              <br />
              Wybierz kwotę i okres lub zostaw numer, a nasz <b>ekspert</b>{" "}
              dobierze najlepszą ofertę dla Ciebie.
            </p>

            <div className="space-y-6 sm:space-y-8">
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
                  aria-label="Wybierz kwotę kredytu"
                  aria-valuemin={LOAN_MIN}
                  aria-valuemax={LOAN_MAX}
                  aria-valuenow={amount}
                  aria-valuetext={`${amount.toLocaleString("pl-PL")} złotych`}
                />
                <div className="mt-1.5 flex justify-between text-[11px] sm:text-xs text-muted-foreground">
                  <span>{LOAN_MIN.toLocaleString("pl-PL")} zł</span>
                  <span>{LOAN_MAX.toLocaleString("pl-PL")} zł</span>
                </div>
              </div>

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
                  aria-label="Wybierz okres kredytowania"
                  aria-valuemin={TERM_MIN}
                  aria-valuemax={TERM_MAX}
                  aria-valuenow={years}
                  aria-valuetext={`${years} lat`}
                />
                <div className="mt-1.5 flex justify-between text-[11px] sm:text-xs text-muted-foreground">
                  <span>{TERM_MIN} lat</span>
                  <span>{TERM_MAX} lat</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card/80 flex-1 flex flex-col justify-center items-center gap-5 sm:gap-6 md:gap-8 p-6 sm:p-7 md:p-12 border-t md:border-t-0 md:border-l">
            <div className="text-center">
              <span className="block text-xs sm:text-sm text-muted-foreground">
                Miesięczna rata
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tabular-nums">
                <AnimatedNumber value={installment} /> zł
              </span>
              <div className="relative mt-0.5 sm:mt-1">
                <span
                  className="block text-xs sm:text-sm text-foreground/60 font-medium cursor-help"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onFocus={() => setShowTooltip(true)}
                  onBlur={() => setShowTooltip(false)}
                  tabIndex={0}
                  aria-label="Rzeczywista roczna stopa oprocentowania"
                >
                  RRSO{" "}
                  {MOCK_RATE.toLocaleString("pl-PL", {
                    maximumFractionDigits: 2,
                  })}
                  %
                </span>
                {showTooltip && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-xs rounded-lg whitespace-nowrap shadow-lg z-10 pointer-events-none">
                    Rzeczywista roczna stopa oprocentowania
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
                  </div>
                )}
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-lg md:rounded-full"
              asChild
            >
              <a href="#kontakt">Sprawdź oferty</a>
            </Button>

            <div className="w-full flex flex-col items-center pt-1 sm:pt-2">
              <span className="block font-medium text-primary mb-1.5 sm:mb-2 text-sm sm:text-base">
                Porozmawiaj z ekspertem:
              </span>
              <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-xs gap-2 flex-col sm:flex-row"
              >
                <div className="flex-1">
                  <input
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="telefon (9 cyfr)"
                    className={`w-full rounded-lg border p-2.5 sm:p-3 text-base sm:text-lg transition-colors ${
                      phoneError ? "border-red-500" : ""
                    }`}
                    aria-invalid={phoneError ? "true" : "false"}
                    aria-describedby={phoneError ? "phone-error" : undefined}
                  />
                  {phoneError && (
                    <p
                      id="phone-error"
                      className="text-xs text-red-500 mt-1"
                      role="alert"
                    >
                      {phoneError}
                    </p>
                  )}
                  {isSubmitted && (
                    <p className="text-xs text-green-600 mt-1" role="status">
                      ✓ Dziękujemy! Skontaktujemy się wkrótce
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={phone.length !== 9}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700 shadow-lg shadow-emerald-500/25 px-5 sm:px-6 py-2.5 sm:py-3 font-bold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Wyślij
                </Button>
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
