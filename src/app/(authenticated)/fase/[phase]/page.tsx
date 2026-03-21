import { getSkillsByPhase } from "@/lib/constants/skills";
import { ActionCard } from "@/components/growthOS/action-card";
import { DeliverableCard } from "@/components/growthOS/deliverable-card";
import { redirect } from "next/navigation";

export default function PhaseWorkspacePage({ params }: { params: { phase: string } }) {
  const phaseParams = ["definir", "atraer", "convertir", "escalar"];
  
  if (!phaseParams.includes(params.phase.toLowerCase())) {
    redirect("/dashboard");
  }

  const phaseUpper = params.phase.toUpperCase();
  const skills = getSkillsByPhase(phaseUpper);

  // Mock Deliverables
  const mockDeliverables = [
    {
      id: "1",
      title: "Value Proposition Document",
      skillName: "Value Proposition Canvas",
      qualityScore: 92,
      date: "Hace 2 días",
      phase: phaseUpper as "DEFINIR" | "ATRAER" | "CONVERTIR" | "ESCALAR",
    }
  ];

  const phaseColorClasses: Record<string, string> = {
    DEFINIR: "text-phase-definir",
    ATRAER: "text-phase-atraer",
    CONVERTIR: "text-phase-convertir",
    ESCALAR: "text-phase-escalar",
  };

  const titleColor = phaseColorClasses[phaseUpper];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6">
        <div>
          <h1 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
            Workspace de Fase
          </h1>
          <h2 className={`text-4xl font-black tracking-tight ${titleColor}`}>
            {phaseUpper}
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
            Ejecuta los skills estratégicos diseñados específicamente para superar los desafíos de esta fase de crecimiento.
          </p>
        </div>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Skills Disponibles</h3>
          <div className="grid gap-4">
            {skills.map(skill => (
              <ActionCard key={skill.slug} skill={skill} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Últimos Entregables</h3>
          <div className="grid gap-4">
             {mockDeliverables.map(deliverable => (
              <DeliverableCard key={deliverable.id} deliverable={deliverable} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
