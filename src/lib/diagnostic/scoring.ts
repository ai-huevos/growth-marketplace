import { diagnosticQuestions } from "./questions";

export interface PulsoScore {
  panorama: number;
  urgencia: number;
  logro: number;
  situacion: number;
  organizacion: number;
}

export interface DiagnosticResult {
  pulso: PulsoScore;
  clarQ: number; // Overall Clarity Quotient 0-100
}

export function calculateScore(answersIds: string[]): DiagnosticResult {
  const totals = { panorama: 0, urgencia: 0, logro: 0, situacion: 0, organizacion: 0 };
  
  answersIds.forEach((answerId) => {
    for (const q of diagnosticQuestions) {
      const a = q.answers.find(ans => ans.id === answerId);
      if (a) {
        totals.panorama += a.points.panorama;
        totals.urgencia += a.points.urgencia;
        totals.logro += a.points.logro;
        totals.situacion += a.points.situacion;
        totals.organizacion += a.points.organizacion;
        break;
      }
    }
  });

  const questionCount = answersIds.length || 1;
  const pulso = {
    panorama: Math.round(totals.panorama / questionCount),
    urgencia: Math.round(totals.urgencia / questionCount),
    logro: Math.round(totals.logro / questionCount),
    situacion: Math.round(totals.situacion / questionCount),
    organizacion: Math.round(totals.organizacion / questionCount),
  };

  // ClarQ formula combining all PULSO elements (urgencia is inversion-scaled)
  const clarQ = Math.round(
    (pulso.panorama * 2 + pulso.logro * 2 + pulso.situacion + pulso.organizacion - (pulso.urgencia * 0.5)) / 5.5
  );

  return { pulso, clarQ: Math.max(0, Math.min(100, clarQ)) };
}
