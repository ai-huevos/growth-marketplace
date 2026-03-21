"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DiagnosticCard } from "@/components/growthOS/diagnostic-card";
import { diagnosticQuestions } from "@/lib/diagnostic/questions";
import { Progress } from "@/components/ui/progress";

export default function DiagnosticoPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleSelect = (answerId: string) => {
    const newAnswers = [...answers, answerId];
    setAnswers(newAnswers);

    if (currentIndex < diagnosticQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const params = new URLSearchParams();
      params.set("a", newAnswers.join(","));
      router.push(`/diagnostico/resultado?${params.toString()}`);
    }
  };

  const currentQuestion = diagnosticQuestions[currentIndex];
  const progress = ((currentIndex) / diagnosticQuestions.length) * 100;

  return (
    <div className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2 font-medium">
          <span>Pregunta {currentIndex + 1} de {diagnosticQuestions.length}</span>
          <span>{Math.round(progress)}% Completado</span>
        </div>
        <Progress value={progress === 0 ? 5 : progress} className="h-2" />
      </div>

      <div className="w-full">
        <DiagnosticCard 
          question={currentQuestion.text}
          options={currentQuestion.answers.map(ans => ({ value: ans.id, label: ans.label }))}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
}
