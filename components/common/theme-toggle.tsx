"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ten hook zapewnia, że komponent renderuje się w pełni dopiero po stronie klienta,
  // co zapobiega błędom hydracji (niezgodności między serwerem a klientem).
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Renderujemy placeholder, aby uniknąć "mrugania" interfejsu przy ładowaniu.
    return <div className="h-10 w-10 rounded-full bg-background/50" />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full text-foreground/80 hover:text-foreground hover:bg-foreground/10"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Przełącz motyw"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Przełącz motyw</span>
    </Button>
  );
}
