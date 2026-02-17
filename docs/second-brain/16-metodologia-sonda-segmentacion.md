# 16. Metodología SONDA — Segmentación por Quiz Funnel

## Resumen

El skill quiz-funnel es el cuarto skill del plugin growth-foundations. Basado en la Metodología SONDA, adaptado a B2B e integrado con PULSO, permite diseñar quiz funnels que segmentan un mercado en 3-5 buckets accionables y validarlos por menos de $500.

## Posición en el Marketplace

| Skill existente | Función | Conexión con quiz-funnel |
|----------------|---------|--------------------------|
| ICP Analysis | Define QUIÉN es tu cliente ideal | Quiz segmenta DENTRO del ICP en buckets |
| Positioning | Define QUÉ te diferencia | Outcome pages usan el positioning por bucket |
| Competitive Analysis | Mapea el mercado | Informa los buckets (gaps = oportunidades) |
| Discovery Mastery (sales-blueprint) | Califica 1:1 en calls | Quiz pre-califica a escala antes de la call |
| Copywriting Engine | Genera copy | Hook pages, outcome pages, email sequences |

## Gap que llena

No existía contenido de quiz/funnel/lead-qualification en el marketplace. Quiz-funnel cubre el espacio entre "sé a quién venderle" (ICP) y "sé cómo calificar" (discovery), agregando segmentación a escala y validación lean.

## Metodología SONDA: Conceptos Clave

### PREGUNTA RAÍZ
La pregunta open-ended que, si solo pudieras hacer una, te daría la máxima información para segmentar tu mercado. Siempre empieza con "¿Cuál es tu mayor..." o "¿Qué es lo que más...".

### Buckets
3-5 segmentos de mercado que cubren >80% de tu audiencia. Cada bucket comparte un dolor, situación, o desafío principal distinto. Deben ser distinguibles, accionables, significativos (>10%), reconocibles, y medibles.

### Tipos de Buckets
- **Por etapa del journey**: Explorando / Evaluando / Listo para decidir
- **Por desafío principal**: No genera leads / No cierra deals / No retiene clientes
- **Por situación**: Sin proceso / Proceso roto / Optimizando
- **Por objetivo**: Crecer revenue / Reducir costos / Expandir mercado

### Micro-compromisos
Cada pregunta del quiz genera reciprocidad, consistencia, y ownership. Progresión: bajo compromiso (opciones fáciles) → medio (reflexión) → alto (información sensible).

## Estructura del Quiz (6 preguntas)

| Posición | Tipo | Función |
|----------|------|---------|
| 1 | Grease-the-wheels | Calentar, primer micro-compromiso |
| 2 | Grease-the-wheels | Contexto firmográfico |
| 3 | Segmentación | Asignar bucket (la pregunta clave) |
| 4 | PREGUNTA RAÍZ | Descubrir dolor profundo (open-ended) |
| 5 | Blind-spot | Revelar gap, generar urgencia |
| 6 | Urgencia | Proxy del Critical Event |

Después de la pregunta 6: Email gate antes de mostrar resultado.

## Scoring de Buckets

Modelo 0-100 con 5 criterios ponderados:

```
Score = (Volume × 0.30) + (ICP Match × 0.25) + (Engagement × 0.20) + (Decision × 0.15) + (Pain × 0.10)
```

| Score | Tier | Acción |
|-------|------|--------|
| 80-100 | Tier 1 | Construir primero |
| 60-79 | Tier 2 | Prioridad secundaria |
| 40-59 | Tier 3 | Nurture/revisitar |
| 0-39 | Deprioritizar | No construir aún |

## Lean Stress Test (<$500)

4 fases de validación progresiva:

| Fase | Inversión | Duración | Output |
|------|-----------|----------|--------|
| 1. Desk Research | $0 | 2-3 días | Hipótesis de buckets |
| 2. Deep Dive Survey | $0-50 | 5-7 días | Buckets validados con datos |
| 3. Build & Soft Launch | $50-100 | 3-5 días | Quiz funcional |
| 4. Paid Validation | $300-350 | 7-10 días | 200+ completions, datos reales |

Total: $350-500 en 17-25 días.

## Integración PULSO

| PULSO | Conexión con Quiz Funnel |
|--------|--------------------------|
| **Panorama (P)** | Bucket define la situación del prospect dentro del ICP |
| **Urgencia (U)** | PREGUNTA RAÍZ descubre dolor core; buckets segmentan variaciones |
| **Logro (L)** | Outcome page comunica impacto de resolver el dolor del bucket |
| **Situación Crítica (S)** | Preguntas de urgencia = proxy del evento crítico |
| **Organización (O)** | Preguntas de presupuesto/proceso = proxy de decisión organizacional |

## Modos de Uso con Discovery Call

| Modo | Cuándo | Beneficio |
|------|--------|-----------|
| Pre-call | Antes del discovery | Prospect llega pre-segmentado |
| In-call | Durante discovery | Preguntas del quiz como guía diagnóstica |
| Post-call | Después del discovery | Quiz como homework para profundizar |

## Mecánicas del Funnel

```
[Ad/Organic] → [Hook Page] → [Quiz 5-7 preguntas] → [Email Gate] → [Outcome Page] → [CTA]
                                                                          ↓
                                                                [Email Sequence por Bucket]
```

### Métricas Target

| Métrica | Target mínimo | Bueno | Excelente |
|---------|--------------|-------|-----------|
| Completion rate | >40% | >55% | >70% |
| Email capture rate | >30% | >45% | >60% |
| Bucket distribution | Ninguno >50% | 15-35% cada uno | Equilibrada |
| Cost per lead | <$5 | <$3 | <$1.50 |
| CTA click rate | >15% | >25% | >40% |

## Inventario de Archivos (13 archivos)

```
plugins/growth-foundations/skills/quiz-funnel/
├── SKILL.md                                    — Definición del skill
├── frameworks/
│   ├── sonda-methodology.md                    — Core Metodología SONDA + mapeo PULSO
│   ├── bucket-identification.md                — Cómo descubrir 3-5 buckets
│   ├── question-design-framework.md            — 4 tipos de preguntas, reglas, errores
│   └── lean-stress-test.md                     — Plan de validación <$500
├── templates/
│   ├── quiz-blueprint-worksheet.md             — Worksheet del workshop
│   ├── deep-dive-survey-template.md            — Template de encuesta de validación
│   └── bucket-scorecard.md                     — Scorecard 0-100 para priorizar buckets
├── patterns/
│   ├── quiz-question-library.md                — 53 preguntas reutilizables por tipo
│   └── funnel-mechanics.md                     — Flujos, email gates, outcome pages
└── examples/
    └── b2b-saas-quiz-example.md                — Caso SalesPro completo

plugins/growth-foundations/commands/
└── quiz.md                                      — /quiz workshop interactivo (8 fases)
```

## Comando /quiz

Workshop interactivo de 8 fases con gates "Espera las respuestas":

1. **Contexto** — Qué vendes, a quién, dolor, objetivo, presupuesto
2. **Hipótesis de buckets** — Proponer 3-5 buckets, validar con usuario
3. **PREGUNTA RAÍZ** — Diseñar la pregunta más importante
4. **Quiz design** — 6 preguntas + hook + outcome pages
5. **Deep Dive Survey** (opcional) — Si buckets no están validados
6. **Stress test plan** — Timeline + presupuesto
7. **Métricas** — Definir criterios de éxito
8. **Output final** — Quiz blueprint completo

## Decisiones de Diseño

1. **5-7 preguntas (no 8-15)**: Ejecutivos B2B tienen poco tiempo. Completion rate >40% requiere brevedad.
2. **3 buckets mínimo, 5 máximo**: Menos de 3 no justifica un quiz. Más de 5 genera complejidad sin beneficio.
3. **PREGUNTA RAÍZ siempre open-ended**: Las respuestas cerradas sesgan y no descubren dolor real.
4. **Email gate después del quiz, no antes**: El prospect ya invirtió tiempo, la curiosidad por el resultado genera conversión.
5. **Scoring 0-100**: Consistente con el modelo de ICP scoring del mismo plugin.
6. **<$500 como límite**: Suficiente para validar con 200+ completions sin comprometer presupuesto de startup.
