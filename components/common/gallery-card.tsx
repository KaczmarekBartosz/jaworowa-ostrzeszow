"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryCardProps {
  imageUrl: string;
  title: string;
  className?: string;
}

export function GalleryCard({ imageUrl, title, className }: GalleryCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* Usunęliśmy sztywny 'aspect-[3/4]'. Wysokość będzie teraz kontrolowana z zewnątrz. */}
        <button
          className={cn(
            "group relative block w-full overflow-hidden rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
          )}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <div className="absolute bottom-0 left-0 p-6 text-left">
            <h3 className="text-base font-bold text-white">{title}</h3>
          </div>

          <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
            <Maximize className="size-5" />
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-7xl w-full bg-transparent border-none p-4">
        <Image
          src={imageUrl}
          alt={title}
          width={1920}
          height={1080}
          className="w-full h-auto object-contain rounded-2xl"
        />
      </DialogContent>
    </Dialog>
  );
}
