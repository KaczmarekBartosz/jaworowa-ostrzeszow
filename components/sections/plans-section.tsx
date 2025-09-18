"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "@/components/ui/table";
import { Home, Zap, Shield } from "lucide-react";
import { FeatureCard } from "@/components/common/feature-card";
import { FeatureCarousel } from "@/components/common/feature-carousel";

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
  { icon: Home, title: "Układ", description: "Funkcjonalny" },
  {
    icon: Zap,
    title: "Rozwiązania",
    description: "Smart Home",
    isHighlighted: true,
  },
  { icon: Shield, title: "Okolica", description: "Bezpieczna" },
];

export function PlansSection() {
  return (
    <section
      id="domy"
      className="bg-background py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* === WERSJA MOBILNA === */}
        <div className="md:hidden">
          <div className="w-full">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              Idealny układ dla Ciebie i Twojej rodziny
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Każdy segment oferuje ok.{" "}
              <span className="font-bold text-foreground">103,30 m²</span>{" "}
              powierzchni użytkowej, zoptymalizowanej do codziennego życia.
            </p>
          </div>

          <div className="mt-12 -mx-6">
            <FeatureCarousel>
              {keyFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </FeatureCarousel>
          </div>

          <div className="w-full mt-12">
            <Tabs defaultValue="parter" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="parter">Parter</TabsTrigger>
                <TabsTrigger value="pietro">Piętro</TabsTrigger>
              </TabsList>
              <TabsContent value="parter" className="mt-6">
                <div className="overflow-hidden rounded-3xl border bg-card/50">
                  <Image
                    src="/plan-parter.png"
                    alt="Rzut architektoniczny parteru domu"
                    width={800}
                    height={800}
                  />
                </div>
              </TabsContent>
              <TabsContent value="pietro" className="mt-6">
                <div className="overflow-hidden rounded-3xl border bg-card/50">
                  <Image
                    src="/plan-pietro.png"
                    alt="Rzut architektoniczny piętra domu"
                    width={800}
                    height={800}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold">Szczegółowy metraż</h3>
            <Table className="mt-4">
              <TableBody>
                <TableRow className="bg-secondary/50 font-bold">
                  <TableCell colSpan={2}>Parter (50,98 m²)</TableCell>
                </TableRow>
                {parterRooms.map((room) => (
                  <TableRow key={room.name}>
                    <TableCell>{room.name}</TableCell>
                    <TableCell className="text-right font-medium">
                      {room.area}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-secondary/50 font-bold">
                  <TableCell colSpan={2}>Piętro (52,32 m²)</TableCell>
                </TableRow>
                {pietroRooms.map((room) => (
                  <TableRow key={room.name}>
                    <TableCell>{room.name}</TableCell>
                    <TableCell className="text-right font-medium">
                      {room.area}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* === WERSJA DESKTOP === */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
            <div className="w-full">
              <Tabs defaultValue="parter" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="parter">Parter</TabsTrigger>
                  <TabsTrigger value="pietro">Piętro</TabsTrigger>
                </TabsList>
                <TabsContent value="parter" className="mt-6">
                  <div className="overflow-hidden rounded-3xl border bg-card/50">
                    <Image
                      src="/plan-parter.png"
                      alt="Rzut architektoniczny parteru domu"
                      width={800}
                      height={800}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="pietro" className="mt-6">
                  <div className="overflow-hidden rounded-3xl border bg-card/50">
                    <Image
                      src="/plan-pietro.png"
                      alt="Rzut architektoniczny piętra domu"
                      width={800}
                      height={800}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Idealny układ dla Ciebie i Twojej rodziny
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Każdy segment oferuje ok.{" "}
                <span className="font-bold text-foreground">103,30 m²</span>{" "}
                powierzchni użytkowej, zoptymalizowanej do codziennego życia:
                przestronny parter dla wspólnego spędzania czasu i wygodne
                piętro zapewniające prywatność.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {keyFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24">
            <h3 className="text-3xl font-semibold text-center">
              Szczegółowy metraż
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-16">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">
                      Parter (50,98 m²)
                    </TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {parterRooms.map((room) => (
                    <TableRow key={room.name}>
                      <TableCell>{room.name}</TableCell>
                      <TableCell className="text-right font-medium">
                        {room.area}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">
                      Piętro (52,32 m²)
                    </TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pietroRooms.map((room) => (
                    <TableRow key={room.name}>
                      <TableCell>{room.name}</TableCell>
                      <TableCell className="text-right font-medium">
                        {room.area}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
