interface TouristAttractionProps {
  title: string;
  description: string;
  distance: string;
  icon: React.ReactNode;
  highlights: string[];
}

export function TouristAttractionCard({
  title,
  description,
  distance,
  icon,
  highlights,
}: TouristAttractionProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-card/50 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-var(--gradient-from) to-var(--gradient-to) flex-shrink-0 shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-foreground text-lg mb-1">{title}</h4>
          <p className="text-sm text-primary font-medium mb-2">{distance}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {description}
          </p>
          <ul className="space-y-1">
            {highlights.map((highlight, idx) => (
              <li
                key={idx}
                className="text-xs text-muted-foreground flex items-center gap-2"
              >
                <div className="w-1 h-1 rounded-full bg-primary"></div>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
