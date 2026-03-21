import { DiagnosticResult } from "./scoring";

export type Phase = "DEFINIR" | "ATRAER" | "CONVERTIR" | "ESCALAR";

export function determineNextPhase(result: DiagnosticResult): Phase {
  const { pulso, clarQ } = result;

  // If there's low clarity or no clear vision, the company needs Foundation
  if (clarQ < 40 || pulso.panorama < 50) {
    return "DEFINIR";
  }
  
  // They know who they are, but struggle with market connection
  if (pulso.situacion < 60 || pulso.organizacion < 50) {
    return "ATRAER";
  }

  // They can generate demand, but have a low conversion/achievement metric
  if (pulso.logro < 70) {
    return "CONVERTIR";
  }

  // A healthy engine, time to scale
  return "ESCALAR";
}
