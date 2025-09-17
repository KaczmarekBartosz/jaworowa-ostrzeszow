"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * Ikona = dokładnie tyle samo co hamburger:
 * - size="lg"  -> przycisk 56x56 (h-14 w-14), ikona 32x32 (h-8 w-8)
 * - size="md"  -> przycisk 48x48 (h-12 w-12), ikona 24x24 (h-6 w-6)
 * - size="sm"  -> przycisk 40x40 (h-10 w-10), ikona 20x20 (h-5 w-5)
 *
 * Ważne: ikony są osadzone w relatywnym kontenerze i mają size-full,
 * więc faktycznie wypełniają cały box – nie tylko „otoczka”.
 */
export function ThemeToggle({
  size = "lg" as const,
}: {
  size?: "sm" | "md" | "lg";
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  const btnDim =
    size === "lg" ? "h-14 w-14" : size === "md" ? "h-12 w-12" : "h-10 w-10";
  const iconBox =
    size === "lg" ? "h-8 w-8" : size === "md" ? "h-6 w-6" : "h-5 w-5";

  if (!mounted)
    return <div className={`${btnDim} rounded-full bg-background/50`} />;

  const next = resolvedTheme === "light" ? "dark" : "light";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={`${btnDim} p-0 rounded-full text-foreground/80 hover:bg-foreground/10 hover:text-foreground`}
      onClick={() => setTheme(next)}
      aria-label="Przełącz motyw"
      title={next === "dark" ? "Włącz ciemny motyw" : "Włącz jasny motyw"}
    >
      {/* Kontener o stałym boxie ikony */}
      <span className={`relative inline-block ${iconBox}`} aria-hidden>
        {/* Obie ikony wypełniają kontener 1:1 */}
        <Sun
          className="absolute inset-0 size-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          strokeWidth={2.25}
        />
        <Moon
          className="absolute inset-0 size-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          strokeWidth={2.25}
        />
      </span>
      <span className="sr-only">Przełącz motyw</span>
    </Button>
  );
}
