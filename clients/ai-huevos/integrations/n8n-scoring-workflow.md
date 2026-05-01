# n8n Workflow Spec — Quiz Scoring + Lead Pipeline

```yaml
client: AI Huevos
document: n8n-scoring-workflow
version: 1.0
status: DRAFT
date: 2026-02-22
hosting: self-hosted (Railway $5/mo or Docker)
triggers: Tally webhook, Cal.com webhook
outputs: Kit API, Notion API, Slack API
```

> **Motor de integración del funnel.** Recibe quiz completions de Tally,
> calcula el Energy Score + perfil PULSO, y distribuye el lead a Kit, Notion y Slack.
>
> n8n fue elegido sobre Zapier/Make por: (1) scoring algorithm como JS code node,
> (2) self-hosted = sin costo por ejecución, (3) exportable como JSON al repo.

---

## Arquitectura de Workflows

```
WORKFLOW 1: Quiz → Score → Distribute
  Tally webhook → JS scoring node → Kit API → Notion API → Slack (if HOT)

WORKFLOW 2: Cal.com → CRM Update
  Cal.com webhook → Notion API (update lead) → Slack notification

WORKFLOW 3: Kit → ORIGEN Complete
  Kit webhook (tag "origen-complete") → Notion API (update funnel stage)
```

---

## Workflow 1: Quiz Scoring Pipeline

### Trigger: Tally Webhook

```
Node: Webhook (Tally)
Type: Webhook
Method: POST
Path: /tally-quiz-submission
Auth: Header token (shared secret)
```

**Tally webhook payload (expected fields):**

```json
{
  "eventId": "evt_...",
  "createdAt": "2026-02-22T10:30:00Z",
  "data": {
    "responseId": "resp_...",
    "fields": [
      { "key": "q1_tamano", "value": "C", "label": "51-200" },
      { "key": "q2_rol", "value": "B", "label": "COO / Director de Operaciones" },
      { "key": "q3_pasos_manuales", "value": "B", "label": "5-10 pasos" },
      { "key": "q4_dependencia", "value": "A", "label": "Casi todo" },
      { "key": "q5_herramientas", "value": "B", "label": "Algunas" },
      { "key": "q6_velocidad_datos", "value": "A", "label": "Días" },
      { "key": "q7_visibilidad", "value": "B", "label": "Intuición sin datos" },
      { "key": "q8_deteccion_errores", "value": "B", "label": "Días" },
      { "key": "q9_horas_manuales", "value": "B", "label": "10-20 horas" },
      { "key": "q10_pregunta_raiz", "value": "Necesitamos que la información de logística llegue a finanzas sin copiar a mano" },
      { "key": "email", "value": "maria@empresa.com" },
      { "key": "nombre", "value": "María López" },
      { "key": "empresa", "value": "Empresa XYZ" }
    ]
  }
}
```

### Node 2: Score Calculation (JavaScript Code Node)

```javascript
// ============================================================
// AI Huevos — Energy Score + PULSO Calculator
// Implements 7-step scoring algorithm from quiz spec
// Source: clients/ai-huevos/quiz-funnel/diagnostico-energia-ai.md
// ============================================================

const fields = $input.first().json.data.fields;

// Helper: extract value by key
const getVal = (key) => {
  const field = fields.find(f => f.key === key);
  return field ? field.value : null;
};

// Map letter answers to points (A=1, B=2, C=3, D=4)
const letterToPoints = { 'A': 1, 'B': 2, 'C': 3, 'D': 4 };

const q1 = getVal('q1_tamano');       // Segmentation (no score)
const q2 = getVal('q2_rol');          // Segmentation (no score)
const q3 = letterToPoints[getVal('q3_pasos_manuales')] || 2;
const q4 = letterToPoints[getVal('q4_dependencia')] || 2;
const q5 = letterToPoints[getVal('q5_herramientas')] || 2;
const q6 = letterToPoints[getVal('q6_velocidad_datos')] || 2;
const q7 = letterToPoints[getVal('q7_visibilidad')] || 2;
const q8 = letterToPoints[getVal('q8_deteccion_errores')] || 2;
const q9 = letterToPoints[getVal('q9_horas_manuales')] || 2;
const q10 = getVal('q10_pregunta_raiz') || '';
const email = getVal('email') || '';
const nombre = getVal('nombre') || '';
const empresa = getVal('empresa') || '';

// ---- PASO 1: Raw scores per axis ----
const eje1_raw = q3 + q4;          // Flujo de Datos (range: 2-8)
const eje2_raw = q5 + q6;          // Adopción Real (range: 2-8)
const eje3_raw = q7 + q8;          // Visibilidad (range: 2-8)
const eje4_raw = q9 * 2;           // Capacidad (range: 2-8)

// ---- PASO 2: Normalize to 0-25 per axis ----
const normalize = (raw) => Math.round(((raw - 2) / 6) * 25);

let eje1 = normalize(eje1_raw);
let eje2 = normalize(eje2_raw);
let eje3 = normalize(eje3_raw);
let eje4 = normalize(eje4_raw);

// ---- PASO 3: Q1 adjustment on Axis 4 ----
if (q1 === 'B' && q9 >= 3) eje4 = Math.min(25, eje4 + 2);
if (q1 === 'C' && q9 >= 2) eje4 = Math.min(25, eje4 + 3);
if (q1 === 'D')            eje4 = Math.min(25, eje4 + 1);

// ---- PASO 4: Total Energy Score ----
const energyScore = eje1 + eje2 + eje3 + eje4;

// ---- PASO 5: Segment assignment ----
let segment, segmentLabel;
if (energyScore <= 25)      { segment = 'APAGADO';     segmentLabel = 'Luces apagadas'; }
else if (energyScore <= 50) { segment = 'LATENTE';     segmentLabel = 'Energía dormida'; }
else if (energyScore <= 75) { segment = 'CONECTADO';   segmentLabel = 'Red parcial'; }
else                        { segment = 'ENERGIZADO';  segmentLabel = 'Sistema operando'; }

// ---- PASO 6: PULSO profile ----
const pulso_P = Math.round((q3 / 4) * 10 * 10) / 10;
const pulso_U = Math.round(((q4 + q5 + q9) / 12) * 10 * 10) / 10;
const pulso_L = Math.round(((q6 + q7) / 8) * 10 * 10) / 10;
let pulso_S = Math.round((q8 / 4) * 10 * 10) / 10;

// Adjust S for urgency keywords in Q10
const urgencyKeywords = ['urgente', 'ya', 'antes de', 'perdemos', 'costo', 'necesitamos', 'inmediato'];
const q10Lower = q10.toLowerCase();
const hasUrgency = urgencyKeywords.some(kw => q10Lower.includes(kw));
if (hasUrgency) pulso_S = Math.min(10, pulso_S + 1.5);

// O score based on role
const rolScores = { 'A': 8, 'B': 10, 'C': 7, 'D': 4 };
let pulso_O = rolScores[q2] || 5;

// ---- PASO 7: Lead temperature ----
let temperature;
if (energyScore < 40 && ['A', 'B'].includes(getVal('q8_deteccion_errores')) && ['A', 'B'].includes(q2)) {
  temperature = 'HOT';
} else if (energyScore >= 40 && energyScore <= 65) {
  temperature = 'WARM';
} else if (hasUrgency) {
  temperature = 'WARM';
} else if (energyScore > 65 && !hasUrgency) {
  temperature = 'COLD';
} else {
  temperature = 'WARM'; // default
}

// Downgrade: VP/Gerente with high pain but no decision power
if (q2 === 'D' && energyScore < 40) {
  temperature = 'WARM'; // downgrade from HOT
}

// ---- Weakest axis for sales brief ----
const axes = [
  { name: 'Flujo de Datos', score: eje1 },
  { name: 'Adopción Real', score: eje2 },
  { name: 'Visibilidad Operativa', score: eje3 },
  { name: 'Capacidad del Equipo', score: eje4 }
];
const weakest = axes.reduce((min, a) => a.score < min.score ? a : min, axes[0]);

// ---- Recommended action ----
let action;
if (segment === 'APAGADO')      action = 'Diagnóstico gratuito 30 min + pitch Sprint';
else if (segment === 'LATENTE')  action = 'Mapa de Energía template + sesión 30 min';
else if (segment === 'CONECTADO') action = 'Propuesta de Sprint de Descubrimiento';
else                              action = 'Conversación de Partner Continuo';

return [{
  json: {
    // Contact
    email, nombre, empresa,
    q1_tamano: q1, q2_rol: q2,

    // Scores
    energy_score: energyScore,
    eje1_flujo: eje1,
    eje2_adopcion: eje2,
    eje3_visibilidad: eje3,
    eje4_capacidad: eje4,

    // Segment
    segment, segmentLabel,

    // PULSO
    pulso_P, pulso_U, pulso_L, pulso_S, pulso_O,

    // Temperature
    temperature,

    // Sales brief data
    q10_verbatim: q10,
    weakest_axis: weakest.name,
    recommended_action: action,
    has_urgency: hasUrgency,

    // Metadata
    scored_at: new Date().toISOString(),
    source: 'tally-quiz'
  }
}];
```

### Node 3: Kit API — Create/Update Subscriber

```
Node: HTTP Request
Method: POST
URL: https://api.kit.com/v4/subscribers
Headers:
  Authorization: Bearer {{$env.KIT_API_KEY}}
  Content-Type: application/json

Body:
{
  "email_address": "{{$json.email}}",
  "first_name": "{{$json.nombre}}",
  "state": "active",
  "fields": {
    "energy_score": "{{$json.energy_score}}",
    "quiz_segment": "{{$json.segment}}",
    "lead_temperature": "{{$json.temperature}}",
    "q10_verbatim": "{{$json.q10_verbatim}}",
    "empresa": "{{$json.empresa}}",
    "rol": "{{$json.q2_rol}}"
  }
}
```

### Node 4: Kit API — Add Tag by Segment

```
Node: HTTP Request
Method: POST
URL: https://api.kit.com/v4/tags/{{SEGMENT_TAG_ID}}/subscribers
Headers:
  Authorization: Bearer {{$env.KIT_API_KEY}}

Tag mapping (configure in n8n):
  APAGADO    → tag_id for "quiz-apagado"
  LATENTE    → tag_id for "quiz-latente"
  CONECTADO  → tag_id for "quiz-conectado"
  ENERGIZADO → tag_id for "quiz-energizado"
```

### Node 5: Kit API — Trigger ORIGEN Sequence

```
Node: IF (conditional)
Condition: segment !== 'ENERGIZADO'

True → HTTP Request:
  POST https://api.kit.com/v4/sequences/{{ORIGEN_SEQUENCE_ID}}/subscribers
  Body: { "email_address": "{{$json.email}}" }

False → (Energizado gets personal email from founder, handled manually)
```

### Node 6: Notion API — Create Lead Page

```
Node: HTTP Request
Method: POST
URL: https://api.notion.com/v1/pages
Headers:
  Authorization: Bearer {{$env.NOTION_API_KEY}}
  Notion-Version: 2022-06-28
  Content-Type: application/json

Body:
{
  "parent": { "database_id": "{{KAI_LEADS_DB_ID}}" },
  "properties": {
    "Nombre": { "title": [{ "text": { "content": "{{$json.nombre}}" } }] },
    "Email": { "email": "{{$json.email}}" },
    "Empresa": { "rich_text": [{ "text": { "content": "{{$json.empresa}}" } }] },
    "Energy Score": { "number": {{$json.energy_score}} },
    "Segmento": { "select": { "name": "{{$json.segment}}" } },
    "Temperatura": { "select": { "name": "{{$json.temperature}}" } },
    "Funnel Stage": { "select": { "name": "Quiz Complete" } },
    "Q10 Verbatim": { "rich_text": [{ "text": { "content": "{{$json.q10_verbatim}}" } }] },
    "Eje 1 Flujo": { "number": {{$json.eje1_flujo}} },
    "Eje 2 Adopción": { "number": {{$json.eje2_adopcion}} },
    "Eje 3 Visibilidad": { "number": {{$json.eje3_visibilidad}} },
    "Eje 4 Capacidad": { "number": {{$json.eje4_capacidad}} },
    "PULSO-P": { "number": {{$json.pulso_P}} },
    "PULSO-U": { "number": {{$json.pulso_U}} },
    "PULSO-L": { "number": {{$json.pulso_L}} },
    "PULSO-S": { "number": {{$json.pulso_S}} },
    "PULSO-O": { "number": {{$json.pulso_O}} },
    "Eje Más Débil": { "select": { "name": "{{$json.weakest_axis}}" } },
    "Acción Recomendada": { "rich_text": [{ "text": { "content": "{{$json.recommended_action}}" } }] },
    "Tamaño Empresa": { "select": { "name": "{{$json.q1_tamano}}" } },
    "Rol": { "select": { "name": "{{$json.q2_rol}}" } },
    "Fecha Quiz": { "date": { "start": "{{$json.scored_at}}" } }
  }
}
```

### Node 7: Slack Alert — HOT Leads Only

```
Node: IF (conditional)
Condition: temperature === 'HOT'

True → Slack Message:
  Channel: #leads-entrantes

  Message template:
  ---
  🔴 *LEAD HOT — Acción en < 24h*

  *{{nombre}}* — {{empresa}}
  📧 {{email}} | 👤 {{q2_rol_label}}

  *Energy Score:* {{energy_score}}/100 ({{segment}})

  📊 *Desglose:*
  • Flujo de Datos: {{eje1_flujo}}/25
  • Adopción Real: {{eje2_adopcion}}/25
  • Visibilidad: {{eje3_visibilidad}}/25
  • Capacidad: {{eje4_capacidad}}/25

  🎯 *Eje más débil:* {{weakest_axis}}

  💬 *Q10 Verbatim:*
  > "{{q10_verbatim}}"

  📋 *Acción:* {{recommended_action}}
  🗣️ *Abrir con:* "{{nombre}}, mencionaste que tu mayor problema es {{q10_short}}. Eso es exactamente lo que encontramos en Finkargo."
  ---
```

---

## Workflow 2: Cal.com Booking → CRM Update

### Trigger: Cal.com Webhook

```
Node: Webhook (Cal.com)
Path: /calcom-booking
Event: BOOKING_CREATED

Expected payload:
{
  "triggerEvent": "BOOKING_CREATED",
  "payload": {
    "attendees": [{ "email": "maria@empresa.com", "name": "María López" }],
    "startTime": "2026-03-01T14:00:00Z",
    "eventTitle": "Sprint de Descubrimiento"
  }
}
```

### Node 2: Notion — Find and Update Lead

```
Node: HTTP Request
Method: POST
URL: https://api.notion.com/v1/databases/{{KAI_LEADS_DB_ID}}/query
Body: {
  "filter": {
    "property": "Email",
    "email": { "equals": "{{$json.payload.attendees[0].email}}" }
  }
}

→ Then PATCH the found page:
  "Sprint Status": { "select": { "name": "Booked" } }
  "Funnel Stage": { "select": { "name": "Sprint Booked" } }
  "Sprint Date": { "date": { "start": "{{$json.payload.startTime}}" } }
```

### Node 3: Slack Notification

```
Channel: #leads-entrantes
Message:
📅 *Sprint Booked!*
{{attendee_name}} ({{attendee_email}}) agendó un Sprint de Descubrimiento.
Fecha: {{startTime_formatted}}
```

---

## Workflow 3: ORIGEN Complete → Funnel Stage Update

### Trigger: Kit Webhook (tag added)

```
When subscriber gets tag "origen-complete" in Kit:
→ Kit fires webhook to n8n

Node: Webhook
Path: /kit-origen-complete
```

### Node 2: Notion — Update Funnel Stage

```
Find lead by email → Update:
  "Funnel Stage": "ORIGEN Complete"

If no Sprint booked after 14 days → tag as "pulsar-candidate" in Kit
```

---

## Deployment Notes

### n8n Hosting Options

| Option | Cost | Pros | Cons |
|--------|------|------|------|
| **Railway** | $5/mo | Easy deploy, auto-SSL, git push | Limited compute |
| **Docker (VPS)** | $5-10/mo | Full control, persistent | Manual maintenance |
| **Render** | $0 (free tier) | Zero cost MVP | Sleeps after 15 min inactivity |

**Recommended:** Railway for MVP. Docker for production.

### Environment Variables Required

```
KIT_API_KEY=ck_...
NOTION_API_KEY=secret_...
SLACK_WEBHOOK_URL=https://hooks.slack.com/...
TALLY_WEBHOOK_SECRET=tally_...
CALCOM_WEBHOOK_SECRET=cal_...
KAI_LEADS_DB_ID=...
ORIGEN_SEQUENCE_ID=...
```

### n8n Workflow Export

Once built in n8n UI, export as JSON and commit to:
`clients/ai-huevos/integrations/n8n-workflows/`

This allows version control of the automation logic.

### Testing Protocol

1. **Unit test scoring:** Run 5 test cases through the JS code node:
   - All A's (worst case) → expect score ~0-10, segment APAGADO
   - All D's (best case) → expect score ~90-100, segment ENERGIZADO
   - Maria Lopez example from quiz spec → expect score 27, LATENTE, HOT
   - Mixed mid-range → expect LATENTE or CONECTADO
   - Edge case: Q1=D, Q9=4 → verify Axis 4 adjustment caps at 25

2. **Integration test:** Submit test form in Tally → verify:
   - Kit subscriber created with correct fields
   - Notion page created with all properties
   - Slack alert fires for HOT (score < 40 + CEO/COO + Q8 A/B)

3. **End-to-end:** Complete quiz as test user → ORIGEN Email 1 arrives < 2h

---

## Scoring Algorithm Reference

Full 7-step algorithm documented at:
`clients/ai-huevos/quiz-funnel/diagnostico-energia-ai.md` → "Cálculo Paso a Paso"

This n8n implementation is the canonical runtime version.
Differences from spec: none — faithful implementation of all 7 steps.
