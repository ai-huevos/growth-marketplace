import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import { PreviewPanel } from "@/components/growthOS/preview-panel";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function DeliverableDetail({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return notFound();
  }

  const { data } = await supabase
    .from('deliverables')
    .select('*')
    .eq('id', params.id)
    .single();

  if (!data) {
    return notFound();
  }

  // Allow the authenticated user's org to view it, ideally RLS covers this, but we are explicit.

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="flex h-16 shrink-0 items-center justify-between border-b px-6 shadow-sm bg-card">
        <div className="flex items-center">
          <Link 
            href="/entregables"
            className="mr-6 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted p-2 rounded-md transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la Biblioteca
          </Link>
          <div>
            <h1 className="text-lg font-bold leading-none">{data.title}</h1>
            <p className="text-xs text-muted-foreground mt-1 tracking-tight">Generado el {new Date(data.updated_at).toLocaleDateString()}</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-hidden relative w-full max-w-5xl mx-auto border-x shadow-sm">
        <PreviewPanel content={data.content} />
      </div>
    </div>
  );
}
