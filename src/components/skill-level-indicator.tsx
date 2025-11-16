import { Star } from "lucide-react";

interface SkillLevelIndicatorProps {
  level: "expert" | "advanced" | "intermediate";
  showLabel?: boolean;
}

const levelConfig = {
  expert: {
    stars: 5,
    label: "Expert",
    color: "text-green-500",
  },
  advanced: {
    stars: 4,
    label: "Advanced",
    color: "text-blue-500",
  },
  intermediate: {
    stars: 3,
    label: "Intermediate",
    color: "text-yellow-500",
  },
};

export function SkillLevelIndicator({
  level,
  showLabel = true,
}: SkillLevelIndicatorProps) {
  const config = levelConfig[level];

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < config.stars
                ? `${config.color} fill-current`
                : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      {showLabel && (
        <span className={`text-xs font-medium ${config.color}`}>
          {config.label}
        </span>
      )}
    </div>
  );
}

