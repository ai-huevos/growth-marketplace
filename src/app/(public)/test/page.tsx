"use client";

import { PhaseBar } from "@/components/growthOS/phase-bar";
import { ScoreBar } from "@/components/growthOS/score-bar";
import { DiagnosticCard } from "@/components/growthOS/diagnostic-card";
import { SpiderChart } from "@/components/growthOS/spider-chart";
import { DeliverableCard } from "@/components/growthOS/deliverable-card";
import { ActionCard } from "@/components/growthOS/action-card";
import { ChatPanel } from "@/components/growthOS/chat-panel";
import { PreviewPanel } from "@/components/growthOS/preview-panel";

export default function TestPage() {
  const mockMessages = [
    { id: "1", role: "assistant" as const, content: "Hola, vamos a definir tu reporte B2B." },
    { id: "2", role: "user" as const, content: "Necesitamos enfocarnos en retener clientes Enterprise." },
  ];

  const mockDeliverable = {
    id: "1",
    title: "Estrategia de Retención Enterprise",
    skillName: "customer-success",
    qualityScore: 92,
    date: "14 Mar 2026",
    phase: "ESCALAR" as const,
  };

  const mockSkill = {
    slug: "customer-success",
    name: "Customer Success Playbook",
    description: "Crea un playbook para retener y expandir cuentas Enterprise.",
    estimatedMinutes: 20,
    deliverableType: "Playbook PDF",
    phase: "ESCALAR" as const,
  };

  const mockOptions = [
    { value: "1", label: "Perdemos deals por precio" },
    { value: "2", label: "Los leads no calificados saturan al equipo" },
    { value: "3", label: "El ciclo de venta es demasiado largo" },
  ];

  return (
    <div className="container mx-auto space-y-16 p-8 pb-32">
      <h1 className="text-4xl font-bold text-growos-primary mb-8 border-b pb-4">
        Componentes GrowthOS
      </h1>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">1. Phase Bar</h2>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <PhaseBar currentPhase="ATRAER" completedPhases={["DEFINIR"]} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">2. Score Bar</h2>
        <div className="rounded-xl border bg-card p-6 shadow-sm max-w-sm space-y-4">
          <ScoreBar label="GTM Strategy" score={85} />
          <ScoreBar label="Revenue Engine" score={50} />
          <ScoreBar label="Quote-to-Cash" score={30} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">3. Diagnostic Card</h2>
        <div className="rounded-xl border bg-card py-6 shadow-sm max-w-2xl bg-muted/10">
          <DiagnosticCard 
            question="¿Cuál es la objeción más común de tus clientes potenciales?"
            options={mockOptions}
            onSelect={(v) => console.log(v)}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">4. Spider Chart</h2>
        <div className="rounded-xl border bg-card p-6 shadow-sm max-w-xl">
          <SpiderChart scores={{ panorama: 80, urgencia: 40, logro: 70, situacion: 60, organizacion: 90 }} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">5. Deliverable Card</h2>
        <div className="rounded-xl border bg-card p-6 shadow-sm max-w-sm">
          <DeliverableCard deliverable={mockDeliverable} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">6. Action Card</h2>
        <div className="rounded-xl border bg-card p-6 shadow-sm max-w-md">
          <ActionCard skill={mockSkill} />
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">7. Chat & Preview Panels</h2>
        <div className="flex h-[500px] w-full max-w-5xl overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="w-1/2">
            <ChatPanel messages={mockMessages} onSend={() => {}} isLoading={false} />
          </div>
          <div className="w-1/2">
            <PreviewPanel content="# Estrategia de Retención\n\nEste es un preview en tiempo real del documento generado por la IA." />
          </div>
        </div>
      </section>
    </div>
  );
}
