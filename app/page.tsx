import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1 className="text-4xl font-bold">Perfekcja w prostocie</h1>
      <p className="text-muted-foreground">Fundament projektu jest gotowy.</p>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Rozpocznij pracę
      </Button>
    </main>
  );
}
