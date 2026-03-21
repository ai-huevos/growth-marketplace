import { createClient } from "@/lib/supabase/server";
import { SyncDiagnostic } from "@/components/growthOS/sync-diagnostic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SpiderChart } from "@/components/growthOS/spider-chart";
import { ScoreBar } from "@/components/growthOS/score-bar";
import { ActionCard } from "@/components/growthOS/action-card";
import { getSkillsByPhase } from "@/lib/constants/skills";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let phase = "DEFINIR" as "DEFINIR" | "ATRAER" | "CONVERTIR" | "ESCALAR";
  let pulso = { panorama: 0, urgencia: 0, logro: 0, situacion: 0, organizacion: 0 };
  let clarQ = 0;
  let hasDiagnostic = false;

  if (user) {
    const { data: profile } = await supabase.from('profiles').select('org_id').eq('id', user.id).single();
    if (profile) {
      const { data: latestDiagnostic } = await supabase
        .from('diagnostic_results')
        .select('*')
        .eq('org_id', profile.org_id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      
      if (latestDiagnostic) {
        phase = latestDiagnostic.recommended_phase;
        pulso = latestDiagnostic.pulso_score;
        clarQ = latestDiagnostic.clarq_score;
        hasDiagnostic = true;
      }
    }
  }

  const recommendedSkills = getSkillsByPhase(phase).slice(0, 2);

  const phaseColors = {
    DEFINIR: "text-phase-definir bg-phase-definir/10",
    ATRAER: "text-phase-atraer bg-phase-atraer/10",
    CONVERTIR: "text-phase-convertir bg-phase-convertir/10",
    ESCALAR: "text-phase-escalar bg-phase-escalar/10",
  };

  const currentPhaseColor = phaseColors[phase];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <SyncDiagnostic />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-growos-primary">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Bienvenido a tu Command Center operativo.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tu Fase Actual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold tracking-tight ${currentPhaseColor.split(' ')[0]}`}>{phase}</div>
            <p className="text-xs text-muted-foreground mt-1">Enfoque principal del trimestre.</p>
            <div className="mt-4">
               <Link href={`/fase/${phase.toLowerCase()}`} className={`text-sm font-semibold flex items-center ${currentPhaseColor.split(' ')[0]}`}>
                 Ir al Workspace de Fase <ArrowRight className="ml-1 h-4 w-4" />
               </Link>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Clarity Quotient</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-black text-growos-primary">{clarQ}/100</div>
            {hasDiagnostic && <p className="text-xs text-muted-foreground mt-1">Basado en tu último diagnóstico.</p>}
            {!hasDiagnostic && <p className="text-xs text-growos-danger mt-1">Falta diagnóstico inicial.</p>}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Entregables Completados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-growos-primary">0</div>
            <p className="text-xs text-muted-foreground mt-1">Esta semana</p>
          </CardContent>
        </Card>
      </div>

      {hasDiagnostic && (
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6 text-growos-primary">Mapeo PULSO</h2>
            <div className="mb-8">
              <SpiderChart scores={pulso} />
            </div>
            <div className="space-y-4">
              <ScoreBar label="Panorama" score={pulso.panorama} />
              <ScoreBar label="Urgencia" score={pulso.urgencia} />
              <ScoreBar label="Logro" score={pulso.logro} />
              <ScoreBar label="Situación" score={pulso.situacion} />
              <ScoreBar label="Organización" score={pulso.organizacion} />
            </div>
          </Card>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-growos-primary">Skills Recomendados ({phase})</h2>
            <div className="grid gap-4">
              {recommendedSkills.map(skill => (
                <ActionCard key={skill.slug} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
