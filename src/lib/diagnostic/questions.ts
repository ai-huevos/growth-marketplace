export interface Answer {
  id: string;
  label: string;
  points: {
    panorama: number;
    urgencia: number;
    logro: number;
    situacion: number;
    organizacion: number;
  };
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

export const diagnosticQuestions: Question[] = [
  {
    id: "q1",
    text: "¿Cuál es el principal desafío actual en el crecimiento de tu empresa?",
    answers: [
      { id: "a1_1", label: "No tenemos una propuesta de valor clara o diferenciada.", points: { panorama: 10, urgencia: 80, logro: 20, situacion: 10, organizacion: 40 } },
      { id: "a1_2", label: "No generamos suficientes leads calificados.", points: { panorama: 50, urgencia: 60, logro: 40, situacion: 50, organizacion: 60 } },
      { id: "a1_3", label: "Generamos leads, pero la tasa de cierre es muy baja.", points: { panorama: 70, urgencia: 90, logro: 50, situacion: 70, organizacion: 50 } },
      { id: "a1_4", label: "Cerramos ventas, pero nos cuesta retener o crecer cuentas clave.", points: { panorama: 90, urgencia: 60, logro: 80, situacion: 90, organizacion: 70 } },
    ]
  },
  {
    id: "q2",
    text: "¿Cómo describirías tu proceso de ventas B2B actual?",
    answers: [
      { id: "a2_1", label: "Inexistente o dependemos solo de referidos.", points: { panorama: 20, urgencia: 90, logro: 10, situacion: 20, organizacion: 10 } },
      { id: "a2_2", label: "Tenemos Vendedores pero cada uno tiene su propio método.", points: { panorama: 40, urgencia: 70, logro: 30, situacion: 40, organizacion: 30 } },
      { id: "a2_3", label: "Proceso documentado, pero no usamos un CRM de forma rígida.", points: { panorama: 60, urgencia: 50, logro: 60, situacion: 70, organizacion: 60 } },
      { id: "a2_4", label: "Playbooks definidos, CRM adoptado al 100% y métricas claras.", points: { panorama: 100, urgencia: 20, logro: 90, situacion: 90, organizacion: 100 } },
    ]
  },
  {
    id: "q3",
    text: "¿Cuánto tiempo toma tu ciclo de ventas promedio?",
    answers: [
      { id: "a3_1", label: "No lo medimos con precisión.", points: { panorama: 30, urgencia: 80, logro: 20, situacion: 20, organizacion: 20 } },
      { id: "a3_2", label: "Más de 6 meses con mucha fricción técnica o legal.", points: { panorama: 50, urgencia: 70, logro: 40, situacion: 40, organizacion: 40 } },
      { id: "a3_3", label: "Entre 3 y 6 meses, predecible pero lento.", points: { panorama: 70, urgencia: 50, logro: 60, situacion: 70, organizacion: 70 } },
      { id: "a3_4", label: "Menos de 3 meses, un funnel muy optimizado.", points: { panorama: 90, urgencia: 30, logro: 90, situacion: 90, organizacion: 90 } },
    ]
  },
  {
    id: "q4",
    text: "¿Tienes claridad sobre tu Ideal Customer Profile (ICP)?",
    answers: [
      { id: "a4_1", label: "Le vendemos a cualquier empresa que pueda pagarnos.", points: { panorama: 10, urgencia: 90, logro: 10, situacion: 10, organizacion: 10 } },
      { id: "a4_2", label: "Sabemos el tamaño y sector, pero no tenemos roles específicos mapeados.", points: { panorama: 50, urgencia: 60, logro: 40, situacion: 50, organizacion: 50 } },
      { id: "a4_3", label: "Tenemos el ICP documentado, pero Marketing no lo usa para segmentar.", points: { panorama: 70, urgencia: 70, logro: 60, situacion: 70, organizacion: 60 } },
      { id: "a4_4", label: "Nuestro ICP y Buyer Personas dirigen toda estrategia y producto.", points: { panorama: 100, urgencia: 10, logro: 100, situacion: 100, organizacion: 100 } },
    ]
  }
];
