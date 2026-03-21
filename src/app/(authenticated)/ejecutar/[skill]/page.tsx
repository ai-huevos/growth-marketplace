"use client";

import { useChat } from "@ai-sdk/react";
import { ChatPanel } from "@/components/growthOS/chat-panel";
import { PreviewPanel } from "@/components/growthOS/preview-panel";
import { SKILLS_REGISTRY } from "@/lib/constants/skills";
import { MODEL_OPTIONS, SupportedModel } from "@/lib/ai/models";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Settings2, Save, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ExecuteSkillPage({ params }: { params: { skill: string } }) {
  const skillObj = SKILLS_REGISTRY.find(s => s.slug === params.skill);
  const [modelId, setModelId] = useState<SupportedModel>('claude-3-5-sonnet');
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  if (!skillObj) {
    redirect("/dashboard");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { messages, append, isLoading } = useChat({
    api: "/api/chat",
    body: {
      skillSlug: skillObj.slug,
      modelId, // Pass the selected model dynamically
    },
    initialMessages: [
      { 
        id: "system_greeting", 
        role: "assistant", 
        content: `¡Hola! Vamos a trabajar en tu **${skillObj.name}**. Por favor, dame un poco de contexto (tu producto actual, objetivo o mercado) para generar el entregable de la mejor manera.` 
      }
    ]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any) as any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const lastMsg = [...messages].reverse().find(m => m.role === "assistant") as any;
  const rawContent = lastMsg?.content || "";
  const finalMarkdown = rawContent.replace(/<meb_analysis>[\s\S]*?(?:<\/meb_analysis>|$)/, '').trim();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedMessages = messages.map((m: any) => ({
    id: String(m.id),
    role: m.role as "user" | "assistant",
    content: String(m.content || "")
  }));

  const canSave = !isLoading && finalMarkdown.length > 0 && messages.length > 2;

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/deliverables', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          skillSlug: skillObj.slug,
          title: skillObj.name,
          content: rawContent
        })
      });
      if (res.ok) {
        setIsSaved(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-background">
      <header className="flex h-16 shrink-0 items-center justify-between border-b px-6 shadow-sm">
        <div className="flex items-center">
          <Link 
            href={`/fase/${skillObj.phase.toLowerCase()}`}
            className="mr-6 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted p-2 rounded-md transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a {skillObj.phase}
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-growos-primary text-white">
              <span className="font-bold">MEB</span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none">{skillObj.name}</h1>
              <p className="text-xs text-muted-foreground mt-1 tracking-tight">Motor Estratégico B2B ({skillObj.deliverableType})</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg border">
            <Settings2 className="h-4 w-4 text-muted-foreground" />
            <select 
              className="text-sm bg-transparent font-medium border-none focus:ring-0 cursor-pointer outline-none"
              value={modelId}
              onChange={(e) => setModelId(e.target.value as SupportedModel)}
              disabled={isLoading}
            >
              {MODEL_OPTIONS.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.name}</option>
              ))}
            </select>
          </div>
          
          <Button 
            variant={isSaved ? "outline" : "default"}
            disabled={!canSave || isSaving || isSaved} 
            onClick={handleSave}
            className={isSaved ? "border-growos-success text-growos-success hover:text-growos-success hover:bg-transparent" : ""}
          >
            {isSaved ? <><Check className="mr-2 h-4 w-4" /> Guardado</> : <><Save className="mr-2 h-4 w-4"/> Guardar Entregable</>}
          </Button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-full md:w-[45%] lg:w-[40%]">
          <ChatPanel 
            messages={mappedMessages} 
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSend={(text) => (append as any)({ role: "user", content: text })}
            isLoading={isLoading} 
          />
        </div>
        <div className="hidden md:block md:w-[55%] lg:w-[60%] border-l">
          <PreviewPanel content={rawContent} />
        </div>
      </div>
    </div>
  );
}
