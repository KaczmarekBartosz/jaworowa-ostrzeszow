"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize, Sofa, BedDouble, CheckCircle2, Expand } from "lucide-react";
import { cn } from "@/lib/utils";

const views = [
  {
    id: "parter-3d",
    label: "Parter - Wizualizacja 3D",
    type: "visualization",
    floor: "parter",
    image: "/wiz-parter-3d.jpeg",
    alt: "Wizualizacja 3D parteru domu",
  },
  {
    id: "pietro-3d",
    label: "Piętro - Wizualizacja 3D",
    type: "visualization",
    floor: "pietro",
    image: "/wiz-pietro-3d.jpeg",
    alt: "Wizualizacja 3D piętra domu",
  },
  {
    id: "parter-2d",
    label: "Parter - Plan 2D",
    type: "floor-plan",
    floor: "parter",
    image: "/plan-parter.png",
    alt: "Rzut architektoniczny parteru domu",
  },
  {
    id: "pietro-2d",
    label: "Piętro - Plan 2D",
    type: "floor-plan",
    floor: "pietro",
    image: "/plan-pietro.png",
    alt: "Rzut architektoniczny piętra domu",
  },
];

const parterRooms = [
  { name: "Przedsionek", area: "4,86 m²" },
  { name: "Łazienka", area: "4,81 m²" },
  { name: "Garderoba", area: "4,68 m²" },
  { name: "Kuchnia", area: "6,59 m²" },
  { name: "Korytarz", area: "5,98 m²" },
  { name: "Salon z jadalnią", area: "24,06 m²" },
];

const pietroRooms = [
  { name: "Klatka schodowa", area: "7,95 m²" },
  { name: "Sypialnia", area: "12,80 m²" },
  { name: "Garderoba", area: "4,83 m²" },
  { name: "Łazienka", area: "6,26 m²" },
  { name: "Pokój 1", area: "10,24 m²" },
  { name: "Pokój 2", area: "10,24 m²" },
];

const keyFeatures = [
  {
    icon: Maximize,
    color: "from-indigo-400 to-blue-600",
    title: "Ponad",
    value: "103 m²",
    description: "przestrzeni dla Ciebie",
  },
  {
    icon: Sofa,
    color: "from-pink-400 to-fuchsia-600",
    title: "Przestronny salon",
    value: "",
    description: "z jadalnią i kuchnią",
  },
  {
    icon: BedDouble,
    color: "from-orange-400 to-amber-500",
    title: "Trzy wygodne sypialnie",
    value: "",
    description: "na piętrze",
  },
  {
    icon: CheckCircle2,
    color: "from-green-400 to-emerald-500",
    title: "Dwie łazienki",
    value: "",
    description: "i dwie garderoby",
  },
];

export function PlansSection() {
  const [activeView, setActiveView] = useState(views[0].id);
  const currentView = views.find((v) => v.id === activeView) || views[0];
  const currentRooms =
    currentView.floor === "parter" ? parterRooms : pietroRooms;
  const currentFloorArea =
    currentView.floor === "parter" ? "50,98 m²" : "52,32 m²";

  return (
    <section id="domy" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="text-left max-w-xl mb-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Dom zaprojektowany dla Ciebie
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Odkryj przemyślany układ, który łączy otwartą przestrzeń dzienną z
            komfortową i prywatną strefą na piętrze.
          </p>
        </div>

        <div className="w-full mb-12">
          <div className="bg-card/50 rounded-3xl border p-8 shadow space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
            {keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="flex flex-row items-center gap-4 md:flex-col md:items-start"
              >
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg flex-shrink-0`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">
                    {feature.title}{" "}
                    {feature.value && (
                      <span className="text-primary text-xl">
                        {feature.value}
                      </span>
                    )}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-stretch">
          <div className="flex flex-col h-full">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-3xl border bg-card/50 cursor-pointer group flex-1 min-h-0">
                  <Image
                    src={currentView.image}
                    alt={currentView.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Expand className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-sm font-medium">{currentView.label}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent
                className="max-w-[95vw] max-h-[95vh] p-0"
                style={{ position: "fixed" }}
              >
                <Image
                  src={currentView.image}
                  alt={currentView.alt}
                  width={1920}
                  height={1920}
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
            <div className="grid grid-cols-4 gap-3 mt-6">
              {views.map((view) => (
                <div
                  key={view.id}
                  className={cn(
                    "relative overflow-hidden rounded-xl border cursor-pointer transition-all aspect-square",
                    activeView === view.id
                      ? "ring-2 ring-primary border-primary"
                      : "hover:border-primary/50"
                  )}
                  onClick={() => setActiveView(view.id)}
                >
                  <Image
                    src={view.image}
                    alt={view.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-background/80 px-2 py-1 rounded-lg text-xs font-bold shadow">
                    {view.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col h-full justify-between">
            <div className="bg-card/50 rounded-3xl border p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-2">
                {currentView.floor === "parter" ? "Parter" : "Piętro"}
              </h3>
              <p className="text-muted-foreground mb-6">
                Całkowita powierzchnia:{" "}
                <span className="font-bold text-foreground">
                  {currentFloorArea}
                </span>
              </p>
              <div className="space-y-2 flex-1">
                {currentRooms.map((room) => (
                  <div
                    key={room.name}
                    className="flex justify-between items-center py-3 border-b last:border-b-0"
                  >
                    <span className="text-foreground/80">{room.name}</span>
                    <span className="font-medium">{room.area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">
                    Całkowita powierzchnia użytkowa
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    103,30 m²
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <button
                className={cn(
                  "py-2 rounded-xl font-semibold",
                  currentView.floor === "parter"
                    ? // === OSTATECZNA POPRAWKA: Zmiana bg-primary na gradient ===
                      "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
                onClick={() => setActiveView(views[0].id)}
              >
                Parter
              </button>
              <button
                className={cn(
                  "py-2 rounded-xl font-semibold",
                  currentView.floor === "pietro"
                    ? // === OSTATECZNA POPRAWKA: Zmiana bg-primary na gradient ===
                      "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
                onClick={() => setActiveView(views[1].id)}
              >
                Piętro
              </button>
            </div>
            <div className="space-y-4">
              {views
                .filter((v) => v.floor === currentView.floor)
                .map((view) => (
                  <Dialog key={view.id}>
                    <DialogTrigger asChild>
                      <div className="relative overflow-hidden rounded-3xl border bg-card/50 cursor-pointer group">
                        <Image
                          src={view.image}
                          alt={view.alt}
                          width={800}
                          height={800}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Expand className="h-12 w-12 text-white" />
                        </div>
                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <p className="text-sm font-medium">{view.label}</p>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
                      <Image
                        src={view.image}
                        alt={view.alt}
                        width={1920}
                        height={1920}
                        className="w-full h-auto"
                      />
                    </DialogContent>
                  </Dialog>
                ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Szczegółowy metraż</h3>
            <div className="bg-card/50 rounded-2xl border p-4">
              <div className="space-y-2">
                {currentRooms.map((room) => (
                  <div
                    key={room.name}
                    className="flex justify-between items-center py-2 border-b last:border-b-0"
                  >
                    <span className="text-foreground/80">{room.name}</span>
                    <span className="font-medium">{room.area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">
                    Całkowita powierzchnia użytkowa
                  </span>
                  <span className="text-lg font-bold text-primary">
                    103,30 m²
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
