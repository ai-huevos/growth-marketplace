import { createClient } from "@/lib/supabase/server";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { SKILLS_REGISTRY } from "@/lib/constants/skills";
import Link from "next/link";
import { FileText, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function DeliverablesPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let deliverables: any[] = [];
  
  if (user) {
    const { data: profile } = await supabase.from('profiles').select('org_id').eq('id', user.id).single();
    if (profile) {
      const { data } = await supabase
        .from('deliverables')
        .select('*')
        .eq('org_id', profile.org_id)
        .order('updated_at', { ascending: false });
        
      if (data) deliverables = data;
    }
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Mis Entregables</h1>
        <p className="text-muted-foreground mt-1">Biblioteca de activos B2B generados por el Motor Estratégico.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {deliverables.length === 0 && (
          <div className="col-span-full py-12 text-center border rounded-xl bg-card text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto opacity-20 mb-4" />
            <p>Aún no hay entregables guardados.</p>
            <p className="text-sm">Ve a cualquier fase en tu Dashboard y ejecuta un Skill.</p>
          </div>
        )}
        
        {deliverables.map(doc => {
          const skillMeta = SKILLS_REGISTRY.find(s => s.slug === doc.skill_slug);
          return (
            <Card key={doc.id} className="flex flex-col group hover:border-growos-primary transition-colors cursor-default">
              <CardHeader className="pb-3 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-muted rounded-full text-muted-foreground truncate max-w-[70%]">
                    {skillMeta?.phase || "General"}
                  </span>
                  <span className="text-xs flex items-center text-muted-foreground whitespace-nowrap">
                    <Clock className="w-3 h-3 mr-1" />
                    {new Date(doc.updated_at).toLocaleDateString()}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight">{doc.title}</CardTitle>
              </CardHeader>
              <CardFooter className="pt-0 border-t mt-4 flex justify-end bg-muted/20 p-4">
                <Link href={`/entregables/${doc.id}`}>
                  <Button variant="ghost" size="sm" className="group-hover:text-growos-primary transition-colors">
                    Ver Documento <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
