# Tally.so Quiz Build Spec — Diagnóstico de Energía AI

```yaml
client: AI Huevos
document: tally-quiz-build-spec
version: 1.0
status: DRAFT
date: 2026-02-22
platform: Tally.so
source-spec: clients/ai-huevos/quiz-funnel/diagnostico-energia-ai.md
mcp: tally (configured in .mcp.json)
```

> **Spec de implementación para construir el quiz en Tally.so vía MCP.**
> El quiz spec completo (preguntas, scoring, result pages) está en
> `quiz-funnel/diagnostico-energia-ai.md`. Este documento traduce ese spec
> a configuración específica de Tally.

---

## Form Structure

### Form Name
`Diagnóstico de Energía AI`

### Form Settings
- **Language:** Spanish
- **Progress bar:** Enabled (percentage)
- **Response limit:** None
- **Close date:** None
- **Allow multiple submissions:** No (same email)
- **Redirect after submission:** Custom URL (result page by segment)

---

## Questions (10 + Email Gate)

### Screen 1: Introduction

```
Title: "Tu empresa tiene energía AI escondida."
Subtitle: "Descúbrela en 5 minutos. 10 preguntas. Resultado inmediato."
Button: "Empezar diagnóstico"
```

### Q1 — Tamaño de empresa

```
Type: Multiple choice (single select)
Question: "¿Cuántas personas tiene tu empresa?"
Field key: q1_tamano
Required: Yes

Options:
  A: "Menos de 20"
  B: "20-50"
  C: "51-200"
  D: "Más de 200"
```

### Q2 — Rol principal

```
Type: Multiple choice (single select)
Question: "¿Cuál es tu rol principal?"
Field key: q2_rol
Required: Yes

Options:
  A: "CEO / Fundador"
  B: "COO / Director de Operaciones"
  C: "CTO / Director de Tecnología"
  D: "VP / Gerente de área"
```

### Q3 — Pasos manuales (Eje 1: Flujo de Datos)

```
Type: Multiple choice (single select)
Question: "Cuando un cliente nuevo entra a tu sistema, ¿cuántos pasos manuales necesita tu equipo para procesar la información?"
Field key: q3_pasos_manuales
Required: Yes

Options:
  A: "Más de 10 pasos, varios sistemas, copiar-pegar constante" (1 pt)
  B: "5-10 pasos, algunos automatizados" (2 pts)
  C: "3-5 pasos, mayormente conectados" (3 pts)
  D: "Menos de 3 pasos, fluye automáticamente" (4 pts)
```

### Q4 — Dependencia de conocimiento (Eje 1: Flujo de Datos) [BLIND-SPOT]

```
Type: Multiple choice (single select)
Question: "Si mañana tu mejor empleado se va, ¿cuánto conocimiento operativo crítico se pierde?"
Field key: q4_dependencia
Required: Yes

Options:
  A: "Casi todo — procesos viven en su cabeza" (1 pt)
  B: "Mucho — tiene sistemas que solo él/ella entiende" (2 pts)
  C: "Algo — documentado parcialmente" (3 pts)
  D: "Poco — todo está en el sistema" (4 pts)
```

### Q5 — Herramientas sin uso (Eje 2: Adopción Real)

```
Type: Multiple choice (single select)
Question: "¿Cuántas herramientas digitales tiene tu equipo que nadie usa realmente?"
Field key: q5_herramientas
Required: Yes

Options:
  A: "Muchas — pagamos por cosas que nadie toca" (1 pt)
  B: "Algunas — usan el 50% de lo que tenemos" (2 pts)
  C: "Pocas — la mayoría se usa" (3 pts)
  D: "Ninguna — todo lo que pagamos se usa" (4 pts)
```

### Q6 — Velocidad de acceso a datos (Eje 2: Adopción Real) [BLIND-SPOT]

```
Type: Multiple choice (single select)
Question: "Cuando tu equipo necesita un dato para tomar una decisión, ¿cuánto se tarda en conseguirlo?"
Field key: q6_velocidad_datos
Required: Yes

Options:
  A: "Días — hay que pedirle a alguien que genere un reporte" (1 pt)
  B: "Horas — buscar en varias fuentes y consolidar" (2 pts)
  C: "Minutos — buscar en el sistema correcto" (3 pts)
  D: "Segundos — está en un dashboard en tiempo real" (4 pts)
```

### Q7 — Visibilidad de pérdidas (Eje 3: Visibilidad Operativa) [BLIND-SPOT]

```
Type: Multiple choice (single select)
Question: "¿Puedes decirme ahora mismo cuánto dinero pierde tu empresa por ineficiencias operativas al mes?"
Field key: q7_visibilidad
Required: Yes

Options:
  A: "No tengo idea" (1 pt)
  B: "Tengo una intuición pero no datos" (2 pts)
  C: "Tengo estimaciones aproximadas" (3 pts)
  D: "Sí, lo mido y lo reporto" (4 pts)
```

### Q8 — Detección de errores (Eje 3: Visibilidad Operativa) [BLIND-SPOT]

```
Type: Multiple choice (single select)
Question: "Si ocurriera un error de $340,000 en tus operaciones hoy, ¿cuánto tardarían en detectarlo?"
Field key: q8_deteccion_errores
Required: Yes

Options:
  A: "Semanas o meses" (1 pt)
  B: "Días" (2 pts)
  C: "Horas" (3 pts)
  D: "Minutos — tengo alertas automáticas" (4 pts)
```

### Q9 — Horas manuales semanales (Eje 4: Capacidad del Equipo)

```
Type: Multiple choice (single select)
Question: "¿Cuántas horas a la semana pasa tu equipo haciendo tareas que una máquina podría hacer?"
Field key: q9_horas_manuales
Required: Yes

Options:
  A: "Más de 20 horas/persona — la mayoría del tiempo es manual" (1 pt)
  B: "10-20 horas — mucho admin, poco estratégico" (2 pts)
  C: "5-10 horas — algo manual pero manejable" (3 pts)
  D: "Menos de 5 horas — automatizado casi todo" (4 pts)
```

### Q10 — PREGUNTA RAÍZ (Open Text)

```
Type: Long text
Question: "Si pudieras resolver UN problema operativo en los próximos 90 días, ¿cuál sería?"
Field key: q10_pregunta_raiz
Required: Yes
Placeholder: "Describe tu problema en una o dos frases..."
Max length: 500 characters
```

### Email Gate Screen

```
Type: Input group (after Q10, before results)
Title: "Tu Reporte de Energía AI está listo."
Subtitle: "Ingresa tu email corporativo para recibir:
  • Tu score de Energía AI (0-100)
  • Diagnóstico personalizado de tus 4 ejes
  • 3 quick wins específicos para tu empresa
  • Comparación con empresas de tu tamaño"

Fields:
  - email (type: email, required, key: email, placeholder: "tu@empresa.com")
  - nombre (type: short text, required, key: nombre, placeholder: "Tu nombre")
  - empresa (type: short text, required, key: empresa, placeholder: "Nombre de tu empresa")

Button: "Ver mi diagnóstico"

Footer: "Sin spam. Sin newsletters genéricas. Solo tu reporte + una invitación a una sesión de 30 min si tu score lo amerita."
```

---

## Result Pages

**Note:** Tally doesn't natively compute scores. The scoring happens in n8n (see `integrations/n8n-scoring-workflow.md`). For MVP, use Tally's "Thank You" page with a generic message, then deliver the personalized result via ORIGEN Email 1 (sent within 2 hours).

### Generic Thank You Page (MVP — Week 1)

```
Title: "¡Tu diagnóstico está en camino!"
Body: "Revisa tu email en los próximos minutos.
Recibirás tu Score de Energía AI + un diagnóstico personalizado
de los 4 ejes de tu operación."

Image: AI Huevos logo + energy meter graphic placeholder
```

### Future: Segment-Specific Pages (Week 2-3)

When n8n scoring is fast enough to redirect in real-time, implement 4 result page URLs:

```
/resultado/apagado    → Score 0-25
/resultado/latente    → Score 26-50
/resultado/conectado  → Score 51-75
/resultado/energizado → Score 76-100
```

These would be Webflow pages (not Tally pages) that receive the score via URL parameter.

---

## Webhook Configuration

```
Webhook URL: {{N8N_WEBHOOK_URL}}/tally-quiz-submission
Events: Form submission
Auth: Shared secret header
```

**Test:** Submit form → verify n8n receives payload → verify Kit subscriber created → verify Notion lead created.

---

## Tally MCP Commands (Expected)

Once the Tally MCP is active with API key, use these operations:

1. **Create form** with all 10 questions + email gate
2. **Configure webhook** pointing to n8n
3. **Set form settings** (language, progress bar, etc.)
4. **Test submission** to verify webhook fires

---

## Design Notes

- **Theme:** Dark background (match KAI aesthetic: #030102)
- **Accent color:** KAI yellow (#FFD826) for progress bar and buttons
- **Font:** System default (Tally doesn't support custom fonts on free tier)
- **Logo:** AI Huevos logo at top of form
- **Progress:** Percentage bar showing completion (encourages completion)

---

*Quiz spec source of truth: `quiz-funnel/diagnostico-energia-ai.md`*
*Scoring engine: `integrations/n8n-scoring-workflow.md`*
