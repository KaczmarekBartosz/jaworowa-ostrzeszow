"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Maximize } from "lucide-react";

type Room = { name: string; area: string };

interface InteractivePlanProps {
  level: "parter" | "piętro";
  totalArea: string;
  plan2DUrl: string;
  plan3DUrl: string;
  rooms: Room[];
}

export function InteractivePlan({
  level,
  totalArea,
  plan2DUrl,
  plan3DUrl,
  rooms,
}: InteractivePlanProps) {
  return (
    <div className="rounded-3xl border bg-card/50 p-6 md:p-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-12">
        {/* Kolumna z wizualizacjami */}
        <div>
          <Tabs defaultValue="plan-3d" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="plan-3d">Wizualizacja 3D</TabsTrigger>
              <TabsTrigger value="plan-2d">Rzut 2D</TabsTrigger>
            </TabsList>
            <Dialog>
              <TabsContent value="plan-3d" className="mt-6">
                <DialogTrigger asChild>
                  <div className="group relative cursor-pointer overflow-hidden rounded-2xl">
                    <Image
                      src={plan3DUrl}
                      alt={`Wizualizacja 3D - ${level}`}
                      width={800}
                      height={600}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize className="size-5" />
                    </div>
                  </div>
                </DialogTrigger>
              </TabsContent>
              <TabsContent value="plan-2d" className="mt-6">
                <DialogTrigger asChild>
                  <div className="group relative cursor-pointer overflow-hidden rounded-2xl">
                    <Image
                      src={plan2DUrl}
                      alt={`Rzut 2D - ${level}`}
                      width={800}
                      height={800}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
                      <Maximize className="size-5" />
                    </div>
                  </div>
                </DialogTrigger>
              </TabsContent>
              <DialogContent className="max-w-7xl w-full bg-transparent border-none p-4">
                <TabsContent value="plan-3d">
                  <Image
                    src={plan3DUrl}
                    alt={`Wizualizacja 3D - ${level}`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </TabsContent>
                <TabsContent value="plan-2d">
                  <Image
                    src={plan2DUrl}
                    alt={`Rzut 2D - ${level}`}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                </TabsContent>
              </DialogContent>
            </Dialog>
          </Tabs>
        </div>

        {/* Kolumna z metrażem */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-foreground">
            {level.charAt(0).toUpperCase() + level.slice(1)}{" "}
            <span className="text-muted-foreground font-medium">
              ({totalArea})
            </span>
          </h3>
          <Table className="mt-4">
            <TableBody>
              {rooms.map((room) => (
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
  );
}
