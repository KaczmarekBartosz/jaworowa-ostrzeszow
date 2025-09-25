"use client";

import { cn } from "@/lib/utils";

interface FeatureCardProps {
  children: React.ReactNode; // Prop `icon` został zastąpiony przez `children`
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export function FeatureCard({
  children,
  title,
  description,
  isHighlighted = false,
}: FeatureCardProps) {
  const cardClasses = cn(
    "rounded-3xl p-6 flex flex-col justify-between h-full transition-all duration-300",
    isHighlighted
      ? "bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] text-primary-foreground"
      : "bg-card/50 border backdrop-blur-sm hover:bg-card/80"
  );

  return (
    <div className={cardClasses}>
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-full ${
          isHighlighted ? "bg-white/10" : "bg-secondary"
        }`}
        aria-hidden="true"
      >
        {/* Renderujemy przekazaną ikonę */}
        {children}
      </div>
      <div>
        <p
          className={`mt-4 text-sm ${
            isHighlighted
              ? "text-primary-foreground/80"
              : "text-muted-foreground"
          }`}
        >
          {title}
        </p>
        <p
          className={`text-xl font-bold ${
            isHighlighted ? "" : "text-foreground"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
