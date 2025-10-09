import type { ReactElement } from "react";
import { Clock } from "lucide-react";

/* =========================
   Types
========================= */
type LocationIconProps = {
  icon: ReactElement;
  title: string;
  distance: string;
};

/* =========================
   Component
========================= */
export function LocationIcon({ icon, title, distance }: LocationIconProps) {
  return (
    <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="w-12 h-12 md:w-14 md:h-14 mb-2 md:mb-3 text-primary" aria-hidden="true">
        {icon}
      </div>
      <h4 className="text-sm md:text-base font-semibold text-foreground leading-tight mb-1">
        {title}
      </h4>
      <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
        <Clock className="w-3 h-3 md:w-3.5 md:h-3.5" strokeWidth={2} aria-hidden="true" />
        <span>{distance}</span>
      </div>
    </div>
  );
}
