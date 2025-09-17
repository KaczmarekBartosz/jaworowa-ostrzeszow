import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  isHighlighted = false,
}: FeatureCardProps) {
  const cardClasses = `
    rounded-3xl p-6 flex flex-col justify-between h-full transition-all duration-300
    ${
      isHighlighted
        ? "bg-primary text-primary-foreground"
        : "bg-card/50 border backdrop-blur-sm hover:bg-card/80"
    }
  `;

  return (
    <div className={cardClasses}>
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-full ${
          isHighlighted ? "bg-white/10" : "bg-secondary"
        }`}
        aria-hidden="true"
      >
        <Icon
          className={`h-6 w-6 ${
            isHighlighted
              ? "text-primary-foreground"
              : "text-secondary-foreground"
          }`}
        />
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
