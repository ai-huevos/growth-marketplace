import { cn } from "@/lib/utils";

interface ScoreBarProps {
  label: string;
  score: number;
  maxScore?: number;
  className?: string;
}

export function ScoreBar({ label, score, maxScore = 100, className }: ScoreBarProps) {
  const percentage = Math.max(0, Math.min(100, (score / maxScore) * 100));
  
  // Color coding threshold logic
  let colorClass = "bg-growos-success";
  if (percentage < 40) {
    colorClass = "bg-growos-danger";
  } else if (percentage <= 70) {
    colorClass = "bg-growos-warning";
  }

  return (
    <div className={cn("flex flex-col gap-1.5 w-full", className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="font-mono font-bold text-foreground">
          {score}/{maxScore}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div 
          className={cn("h-full rounded-full transition-all duration-500 ease-out", colorClass)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
