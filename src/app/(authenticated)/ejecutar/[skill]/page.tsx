"use client";

import { useChat } from "@ai-sdk/react";
import { ChatPanel } from "@/components/growthOS/chat-panel";
import { PreviewPanel } from "@/components/growthOS/preview-panel";
import { SKILLS_REGISTRY } from "@/lib/constants/skills";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ExecuteSkillPage({ params }: { params: { skill: string } }) {
  const skillObj = SKILLS_REGISTRY.find(s => s.slug === params.skill);
  
  if (!skillObj) {
    redirect("/dashboard");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { messages, append, isLoading } = useChat({
    api: "/api/chat",
    body: {
      skillSlug: skillObj.slug,
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
  const extractedMarkdown = lastMsg?.content || "";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedMessages = messages.map((m: any) => ({
    id: String(m.id),
    role: m.role as "user" | "assistant",
    content: String(m.content || "")
  }));

  return (
    <div className="flex h-screen flex-col bg-background">
      <header className="flex h-16 items-center border-b px-6 shadow-sm">
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
            <p className="text-xs text-muted-foreground mt-1">Motor Estratégico B2B ({skillObj.deliverableType})</p>
          </div>
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
        <div className="hidden md:block md:w-[55%] lg:w-[60%]">
          <PreviewPanel content={extractedMarkdown} />
        </div>
      </div>
    </div>
  );
}
