---
name: quiz-funnel
description: Use when designing quiz funnels, segmenting markets into buckets, validating product-market assumptions, building lead qualification surveys, or stress-testing a category for under $500. Activates for "quiz funnel", "Metodología SONDA", "market buckets", "survey funnel", "lead qualification quiz", "PREGUNTA RAÍZ", "stress test de mercado", "segmentación por quiz", or "encuesta de descubrimiento".
version: 1.0.0
---

# Quiz Funnel

Framework para diseñar quiz funnels que segmentan un mercado en 3-5 buckets accionables, basado en la Metodología SONDA adaptada a B2B e integrada con PULSO.

## Filosofía: Diagnostica, No Asumas

La Metodología SONDA parte de un principio simple: **tu mercado sabe mejor que tú qué necesita** — pero no te lo va a decir directamente. Necesitas preguntarle de la forma correcta.

Esto conecta directamente con PULSO: en lugar de asumir el dolor del prospect, **pregúntale**. El quiz funnel es la extensión digital del discovery call — escala la conversación de 1:1 a 1:miles.

## Del Discovery Call al Quiz Funnel

| Discovery Call | Quiz Funnel |
|---------------|-------------|
| 1:1, alta profundidad | 1:miles, profundidad suficiente |
| 30-60 minutos | 2-5 minutos |
| Califica un prospect | Segmenta un mercado |
| PULSO completo | PULSO proxy (Panorama + Urgencia) |
| Resultado: deal calificado | Resultado: bucket + lead capturado |

El quiz no reemplaza el discovery call — **lo precalifica**. Un prospect que llega a la call ya segmentado en un bucket permite una conversación más profunda desde el minuto uno.

## Los 5 Pasos de la Metodología SONDA

### Paso 1: Descubrir la PREGUNTA RAÍZ

La PREGUNTA RAÍZ es la pregunta que, si pudieras hacerle UNA sola pregunta a tu mercado, te daría la máxima información para segmentarlo.

**Cómo encontrarlo**:
- Revisar las respuestas de discovery calls previos
- Analizar tickets de soporte y objeciones de ventas
- Preguntar al equipo: "¿Qué pregunta separa a los buenos deals de los malos?"

**Formato de la PREGUNTA RAÍZ**: Siempre open-ended. "¿Cuál es tu mayor desafío con [área]?"

Para la metodología completa, leer `frameworks/sonda-methodology.md`.

### Paso 2: Deep Dive Survey

Encuesta de 8-12 preguntas enviada a la base existente (clientes, lista de email, comunidad). Objetivo: recopilar datos cualitativos para identificar patrones.

Para el template de survey, leer `templates/deep-dive-survey-template.md`.

### Paso 3: Identificar 3-5 Buckets

Analizar respuestas del survey y agrupar en 3-5 segmentos que cubran el 80% del mercado.

| Tipo de Bucket | Ejemplo B2B |
|---------------|-------------|
| Por etapa del journey | "Explorando" / "Evaluando" / "Listo para comprar" |
| Por desafío principal | "No genero leads" / "No cierro deals" / "No retengo clientes" |
| Por situación | "Startup sin proceso" / "Scaleup con proceso roto" / "Enterprise optimizando" |
| Por objetivo | "Crecer revenue" / "Reducir churn" / "Expandir mercado" |

Para la metodología completa de identificación, leer `frameworks/bucket-identification.md`.

### Paso 4: Diseñar el Quiz

Construir un quiz de 5-7 preguntas que lleve al prospect por un camino de micro-compromisos hasta asignarlo a un bucket.

**Estructura de preguntas**:

| Tipo | Función | Ejemplo |
|------|---------|---------|
| Grease-the-wheels | Calentar, generar engagement | "¿Cuántos años llevas en [industria]?" |
| Segmentación | Asignar a bucket | "¿Cuál es tu mayor desafío: generar leads, cerrar deals, o retener clientes?" |
| PREGUNTA RAÍZ | Descubrir dolor profundo | "Si pudieras resolver UN problema en tu proceso de ventas, ¿cuál sería?" |
| Blind-spot | Descubrir lo que no saben | "¿Cuánto tiempo dedica tu equipo a tareas administrativas vs. vender?" |

Para reglas de diseño y errores comunes, leer `frameworks/question-design-framework.md`.

### Paso 5: Stress Test (<$500)

Validar el quiz con tráfico real antes de escalar:

| Fase | Inversión | Actividad | Objetivo |
|------|-----------|-----------|----------|
| 1. Desk Research | $0 | Análisis de datos existentes, PREGUNTA RAÍZ hipótesis | Hipótesis de buckets |
| 2. Deep Dive Survey | $0-50 | Survey a base existente (email, LinkedIn) | Validar buckets con datos |
| 3. Build & Soft Launch | $50-100 | Quiz en Typeform/Google Forms + landing page | Quiz funcional |
| 4. Paid Validation | $300-350 | Ads en LinkedIn/Meta apuntando al ICP | 200+ completions |

Para el plan detallado fase por fase, leer `frameworks/lean-stress-test.md`.

## Integración con Discovery Call

El quiz funnel tiene 3 modos de uso con discovery calls:

| Modo | Cuándo | Beneficio |
|------|--------|-----------|
| **Pre-call** | Antes del discovery call | El prospect llega pre-segmentado. El vendedor sabe en qué bucket está antes de la llamada. |
| **In-call** | Durante el discovery call | El vendedor usa las preguntas del quiz como guía diagnóstica en tiempo real. |
| **Post-call** | Después del discovery call | Enviar quiz como "homework" para profundizar en el dolor antes de la propuesta. |

## Scoring de Buckets

Cada bucket se evalúa con un score de 0-100 para priorizar cuál construir primero:

```
Score = (Volume × 0.30) + (ICP Match × 0.25) + (Engagement × 0.20) + (Organización × 0.15) + (Urgencia × 0.10)
```

| Score | Tier | Acción |
|-------|------|--------|
| 80-100 | Tier 1 | Construir para este bucket primero |
| 60-79 | Tier 2 | Prioridad secundaria |
| 40-59 | Tier 3 | Nurture / revisitar |
| 0-39 | Deprioritizar | No construir aún |

Para el scorecard completo con criterios de evaluación, leer `templates/bucket-scorecard.md`.

## Integración PULSO

| PULSO | Conexión con Quiz Funnel |
|--------|--------------------------|
| **Panorama** | El bucket define la situación del prospect dentro del ICP |
| **Urgencia** | La PREGUNTA RAÍZ descubre el dolor core; los buckets segmentan variaciones de dolor |
| **Logro** | La outcome page comunica el impacto de resolver el dolor del bucket |
| **Situación Crítica** | Preguntas de urgencia funcionan como proxy de la situación crítica |
| **Organización** | Preguntas de presupuesto/proceso funcionan como proxy de decision readiness |

## Conexiones con otros skills

- **ICP Analysis** → Define QUIÉN es tu cliente ideal. Quiz Funnel segmenta DENTRO de ese ICP en buckets accionables
- **Discovery Mastery** → 3 modos: pre-call (filtro), in-call (diagnóstico), post-call (quiz de profundización)
- **Copywriting Engine** → Hook page copy (`/headline`), outcome page copy, secuencias de email por bucket
- **Pipeline Management** → Tags de quiz alimentan CRM, mapeo bucket → etapa de pipeline

## Output esperado

Al completar el proceso de Quiz Funnel, el usuario obtiene:

1. **Quiz blueprint** — Estructura completa del quiz con preguntas, lógica y buckets
2. **Definición de buckets** — 3-5 segmentos con nombres, descripciones y criterios
3. **Copy del funnel** — Hook page, preguntas, outcome pages por bucket
4. **Plan de stress test** — Timeline + presupuesto + métricas de éxito
5. **Métricas objetivo** — Completion rate >40%, capture rate >30%, bucket balance

## Template

Para el workshop completo que Claude puede completar con el usuario, leer `templates/quiz-blueprint-worksheet.md`.

## Biblioteca de preguntas

Para 50+ preguntas reutilizables organizadas por tipo, leer `patterns/quiz-question-library.md`.
