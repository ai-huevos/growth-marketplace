import { Skill } from "@/components/growthOS/action-card";

export const SKILLS_REGISTRY: Skill[] = [
  {
    slug: "icp-definition",
    name: "ICP & Buyer Persona Definition",
    description: "Define con precisión tu Perfil de Cliente Ideal y los Buyer Personas para alinear tus ventas y marketing.",
    estimatedMinutes: 20,
    deliverableType: "ICP Playbook PDF",
    phase: "DEFINIR",
  },
  {
    slug: "value-proposition",
    name: "Value Proposition Canvas",
    description: "Crea una propuesta de valor única que resalte frente a la competencia de tu sector B2B.",
    estimatedMinutes: 15,
    deliverableType: "Value Prop Map",
    phase: "DEFINIR",
  },
  {
    slug: "cold-email-sequence",
    name: "Secuencia de Cold Email",
    description: "Genera una secuencia de correos en frío de 5 pasos optimizada para conversión B2B.",
    estimatedMinutes: 10,
    deliverableType: "Email Sequence",
    phase: "ATRAER",
  },
  {
    slug: "linkedin-content-plan",
    name: "Plan de Contenidos LinkedIn",
    description: "Genera un calendario de contenidos de 30 días para posicionarte como autoridad en LinkedIn.",
    estimatedMinutes: 15,
    deliverableType: "Content Calendar",
    phase: "ATRAER",
  },
  {
    slug: "sales-deck-structure",
    name: "Estructura de Sales Deck",
    description: "Estructura un deck comercial persuasivo basado en el marco de storytelling B2B.",
    estimatedMinutes: 25,
    deliverableType: "Deck Outline",
    phase: "CONVERTIR",
  },
  {
    slug: "objection-handling",
    name: "Manejo de Objeciones",
    description: "Crea una matriz de respuestas a las objeciones más comunes en tu ciclo de ventas.",
    estimatedMinutes: 15,
    deliverableType: "Objection Matrix",
    phase: "CONVERTIR",
  },
  {
    slug: "customer-success-playbook",
    name: "Customer Success Playbook",
    description: "Diseña un proceso de onboarding y retención para cuentas Enterprise.",
    estimatedMinutes: 30,
    deliverableType: "CS Playbook",
    phase: "ESCALAR",
  }
];

export function getSkillsByPhase(phase: string) {
  return SKILLS_REGISTRY.filter(s => s.phase.toLowerCase() === phase.toLowerCase());
}
