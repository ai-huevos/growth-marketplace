import { CheckCircle2, Circle } from "lucide-react";

export type Phase = "DEFINIR" | "ATRAER" | "CONVERTIR" | "ESCALAR";

interface PhaseBarProps {
  currentPhase: Phase;
  completedPhases: Phase[];
}

const PHASES = [
  { id: "DEFINIR", label: "DEFINIR", colorClass: "text-phase-definir border-phase-definir bg-phase-definir" },
  { id: "ATRAER", label: "ATRAER", colorClass: "text-phase-atraer border-phase-atraer bg-phase-atraer" },
  { id: "CONVERTIR", label: "CONVERTIR", colorClass: "text-phase-convertir border-phase-convertir bg-phase-convertir" },
  { id: "ESCALAR", label: "ESCALAR", colorClass: "text-phase-escalar border-phase-escalar bg-phase-escalar" },
] as const;

export function PhaseBar({ currentPhase, completedPhases }: PhaseBarProps) {
  return (
    <div className="flex w-full items-center justify-between overflow-x-auto py-4">
      <div className="flex w-full min-w-max items-center justify-between gap-2">
        {PHASES.map((phase, index) => {
          const isCompleted = completedPhases.includes(phase.id as Phase);
          const isCurrent = currentPhase === phase.id;
          
          return (
            <div key={phase.id} className="flex flex-1 items-center">
              <div className={`flex flex-col items-center gap-2 ${isCurrent ? 'opacity-100' : isCompleted ? 'opacity-80' : 'opacity-40 grayscale'}`}>
                <div className="relative flex h-8 w-8 items-center justify-center">
                  {isCompleted && !isCurrent ? (
                    <CheckCircle2 className={`h-6 w-6 ${phase.colorClass.split(' ')[0]}`} />
                  ) : isCurrent ? (
                    <div className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${phase.colorClass.split(' ')[1]}`}>
                      <div className={`h-2.5 w-2.5 animate-pulse rounded-full ${phase.colorClass.split(' ')[2]}`} />
                    </div>
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground" />
                  )}
                </div>
                <span className={`text-xs font-semibold tracking-wider ${isCurrent ? phase.colorClass.split(' ')[0] : 'text-muted-foreground'}`}>
                  {phase.label}
                </span>
              </div>
              
              {index < PHASES.length - 1 && (
                <div className="mx-4 h-[2px] w-full flex-1 bg-border relative overflow-hidden">
                  {isCompleted && (
                    <div className={`absolute inset-0 w-full ${phase.colorClass.split(' ')[2]}`} />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
