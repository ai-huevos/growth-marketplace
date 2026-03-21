import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MODEL_OPTIONS } from "@/lib/ai/models";

// Define the shape of our evaluation logs to appease ESLint
interface AILog {
  id: string;
  skill_slug: string;
  model_id: string;
  latency_ms: number;
  quality_score: number;
  created_at: string;
}

export default async function EvaluationDashboard() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let logs: AILog[] = [];
  
  if (user) {
    const { data: profile } = await supabase.from('profiles').select('org_id').eq('id', user.id).single();
    if (profile) {
      const { data } = await supabase
        .from('ai_execution_logs')
        .select('*')
        .eq('org_id', profile.org_id)
        .order('created_at', { ascending: false });
        
      if (data) logs = data;
    }
  }

  // Pre-calculate aggregates
  const metricsByModel = MODEL_OPTIONS.map(m => {
    const modelLogs = logs.filter(l => l.model_id === m.id);
    const count = modelLogs.length;
    const avgLatency = count ? Math.round(modelLogs.reduce((acc, l) => acc + (l.latency_ms || 0), 0) / count) : 0;
    const avgScore = count ? (modelLogs.reduce((acc, l) => acc + (l.quality_score || 0), 0) / count).toFixed(1) : "0.0";
    
    return { ...m, count, avgLatency, avgScore };
  });

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-growos-primary">B2B LLM Showdown</h1>
          <p className="text-muted-foreground mt-1">Compara el desempeño, latencia y calidad operativa de los motores de IA habilitados.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {metricsByModel.map(metric => (
          <Card key={metric.id}>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">{metric.name}</CardTitle>
              <p className="text-xs text-muted-foreground">{metric.tier}</p>
            </CardHeader>
            <CardContent>
               <div className="grid grid-cols-2 gap-4 mt-4">
                 <div>
                   <p className="text-xs text-muted-foreground">Ejecuciones</p>
                   <p className="text-2xl font-black">{metric.count}</p>
                 </div>
                 <div>
                   <p className="text-xs text-muted-foreground">Calidad Promedio</p>
                   <p className="text-2xl font-black text-growos-success">{metric.avgScore} / 5</p>
                 </div>
                 <div className="col-span-2">
                   <p className="text-xs text-muted-foreground">Velocidad Promedio (Doble-Paso)</p>
                   <p className="text-lg font-medium">{metric.avgLatency} ms</p>
                 </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">Registro de Evaluaciones</h2>
        <div className="rounded-md border overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Skill</th>
                <th className="px-4 py-3 font-medium">Modelo Inferido</th>
                <th className="px-4 py-3 font-medium">Latencia Total</th>
                <th className="px-4 py-3 font-medium text-right">Rating Humano</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {logs.length === 0 && (
                <tr><td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">No hay evaluaciones registradas en este Tenant.</td></tr>
              )}
              {logs.map(log => (
                <tr key={log.id} className="bg-background">
                  <td className="px-4 py-3 text-muted-foreground">{new Date(log.created_at).toLocaleDateString()}</td>
                  <td className="px-4 py-3 font-medium">{log.skill_slug}</td>
                  <td className="px-4 py-3 text-growos-primary">{log.model_id}</td>
                  <td className="px-4 py-3">{log.latency_ms} ms</td>
                  <td className="px-4 py-3 text-right font-bold">{log.quality_score} ⭐</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
