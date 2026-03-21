import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Circle, ArrowRight, BrainCircuit } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RoadmapPage() {
  const roadmap = [
    { 
      id: "FUNDAMENTOS",
      title: "1. Fundamentos B2B", 
      status: "completed", 
      desc: "Ideal Customer Profile, Arquitectura de Producto y Propuesta de Valor.",
      timeline: "Mes 1"
    },
    { 
      id: "ATRACCION",
      title: "2. Atracción & Pipeline", 
      status: "current", 
      desc: "Secuencias Inbound/Outbound, Thought Leadership y Sales Decks.",
      timeline: "Mes 2"
    },
    { 
      id: "RETENCION",
      title: "3. Retención & Expansión", 
      status: "pending", 
      desc: "Playbooks de Customer Success y flujos de Onboarding.",
      timeline: "Mes 3"
    },
    { 
      id: "ESCALA",
      title: "4. Escala & Automatización", 
      status: "pending", 
      desc: "Programas de referidos, optimización de Motor IA y Playbooks Avanzados.",
      timeline: "Mes 4"
    }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-growos-primary">Roadmap Operativo</h1>
        <p className="text-muted-foreground mt-1">Tu plan estratégico a 90 días priorizado por el Motor Estratégico.</p>
      </div>

      <div className="relative border-l-2 border-muted ml-4 md:ml-6 space-y-12 pb-12">
        {roadmap.map((phase) => (
          <div key={phase.id} className="relative pl-8 md:pl-12">
            <span className="absolute -left-[17px] bg-background p-1 rounded-full">
              {phase.status === 'completed' ? (
                <CheckCircle2 className="h-6 w-6 text-growos-success bg-white" />
              ) : phase.status === 'current' ? (
                <BrainCircuit className="h-6 w-6 text-growos-primary animate-pulse bg-white" />
              ) : (
                <Circle className="h-6 w-6 text-muted-foreground bg-white" />
              )}
            </span>
            
            <Card className={`transition-all ${phase.status === 'current' ? 'border-growos-primary shadow-md' : 'opacity-80'}`}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold tracking-widest uppercase bg-muted px-2 py-1 rounded text-muted-foreground">
                    {phase.timeline}
                  </span>
                  {phase.status === 'current' && (
                    <span className="text-xs font-semibold text-growos-primary bg-indigo-50 dark:bg-indigo-950/50 px-2 py-1 rounded-full">
                      Fase Actual En Ejecución
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl">{phase.title}</CardTitle>
                <CardDescription>{phase.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                {phase.status === 'current' && (
                  <Link href={`/fase/${phase.id.toLowerCase()}`}>
                    <Button className="w-full sm:w-auto mt-2 bg-growos-primary text-white hover:bg-growos-primary/90">
                      Ir al Workspace de la Fase <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
