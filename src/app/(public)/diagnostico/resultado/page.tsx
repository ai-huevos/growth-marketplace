import { calculateScore } from "@/lib/diagnostic/scoring";
import { determineNextPhase } from "@/lib/diagnostic/routing";
import { SpiderChart } from "@/components/growthOS/spider-chart";
import { ScoreBar } from "@/components/growthOS/score-bar";
import { ArrowRight, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

import { SaveAnswers } from "@/components/growthOS/save-answers";

export default function ResultadoPage({ searchParams }: { searchParams: { a?: string } }) {
  if (!searchParams.a) {
    redirect("/diagnostico");
  }

  const answerIds = searchParams.a.split(",");
  const { pulso, clarQ } = calculateScore(answerIds);
  const phase = determineNextPhase({ pulso, clarQ });

  const phaseColors = {
    DEFINIR: "text-phase-definir",
    ATRAER: "text-phase-atraer",
    CONVERTIR: "text-phase-convertir",
    ESCALAR: "text-phase-escalar",
  };

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 space-y-12">
      <SaveAnswers answers={searchParams.a} />
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-growos-primary">
          Tu Diagnóstico de Crecimiento
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Basado en tus respuestas, hemos calculado tu Clarity Quotient (ClarQ) y los pilares de tu motor Go-to-Market (PULSO).
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border bg-card p-8 shadow-sm flex flex-col items-center justify-center space-y-6">
          <div className="text-center">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground">
              Tu Clarity Quotient
            </h2>
            <div className="mt-4 flex items-baseline justify-center gap-1">
              <span className="text-7xl font-black text-growos-primary">{clarQ}</span>
              <span className="text-2xl font-bold text-muted-foreground">/100</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-[280px] text-center mx-auto">
              Mide la alineación general entre tu producto, tu mercado y tus procesos operativos.
            </p>
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Fase Recomendada
            </h2>
            <div className="flex items-center gap-4">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/50 ${phaseColors[phase]}`}>
                <Trophy className={`h-8 w-8 ${phaseColors[phase]}`} />
              </div>
              <div>
                <h3 className={`text-3xl font-bold tracking-tight ${phaseColors[phase]}`}>{phase}</h3>
                <p className="text-sm text-foreground/80 mt-1">
                  Tu enfoque principal para los próximos 90 días.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <Link href="/login">
              <Button className="w-full bg-growos-primary text-white hover:bg-growos-primary/90 h-12 text-lg">
                Crear Mi Workspace <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-growos-primary mb-8 text-center">
          Desglose PULSO
        </h2>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <SpiderChart scores={pulso} />
          </div>
          <div className="space-y-6">
            <ScoreBar label="Panorama (Visión y Estrategia)" score={pulso.panorama} />
            <ScoreBar label="Urgencia (Velocidad y Adaptación)" score={pulso.urgencia} />
            <ScoreBar label="Logro (Resultados e Hitos)" score={pulso.logro} />
            <ScoreBar label="Situación (Contexto del Mercado)" score={pulso.situacion} />
            <ScoreBar label="Organización (Estructura y Procesos)" score={pulso.organizacion} />
          </div>
        </div>
      </div>
    </div>
  );
}
