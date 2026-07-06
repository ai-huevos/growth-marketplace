---
template: follow-up-sequence
version: 1.0
description: 3-email post-discovery sequence. Day 0 (summary + next steps), Day 3 (case study + insight), Day 7 (soft close with Sprint proposal). Populate {{PLACEHOLDER}} variables from business-context.md.
brand-reference: clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md
---

# Follow-Up Email Sequence — Post-Discovery

> 3 emails over 7 days. Each email must stand alone (prospect might only open 1).
> All emails use prospect's own vocabulary (VoC from business-context.md section 9).
> GOLPE arc applies to each email individually.
> Gmail MCP creates drafts — NEVER auto-sends.

---

## Email 1 — Day 0: Summary + Next Steps

**Send within**: 2 hours of discovery call
**Subject line**: `{{COMPANY_NAME}} — lo que escuche y lo que propongo`
**Goal**: Demonstrate listening. Lock in next meeting.

```
Hola {{FIRST_NAME}},

{{CUSTOM_OPENING}}

Dejo lo que me llevo de nuestra conversacion:

**Lo que escuche:**
1. {{PAIN_1_SUMMARY}} — "{{PAIN_1_VERBATIM}}"
2. {{PAIN_2_SUMMARY}} — "{{PAIN_2_VERBATIM}}"
3. {{PAIN_3_SUMMARY}} — "{{PAIN_3_VERBATIM}}"

**Lo que veo:**
{{INSIGHT_REFRAME}}

**Proximos pasos:**
{{NEXT_STEPS_LIST}}

{{SOFT_CTA}}

Un abrazo,
{{SENDER_NAME}}

---
{{CLIENT_DISPLAY_NAME}}
{{CLIENT_TAGLINE}}
```

### Population Rules — Email 1

| Variable | Source | Notes |
|----------|--------|-------|
| `{{FIRST_NAME}}` | business-context section 2, first stakeholder | Use first name only |
| `{{CUSTOM_OPENING}}` | Generate from call context | Reference something specific from the call (not generic "great meeting") |
| `{{PAIN_N_SUMMARY}}` | business-context section 4, pain descriptions | 1 sentence max |
| `{{PAIN_N_VERBATIM}}` | business-context section 4, verbatim quotes | EXACT quote — do not edit |
| `{{INSIGHT_REFRAME}}` | coaching-report or business-context | The "aha" moment from the call. Example: "No es un problema de growth, es de posicionamiento" |
| `{{NEXT_STEPS_LIST}}` | business-context section 8, action items | Numbered list with owners and dates |
| `{{SOFT_CTA}}` | Context-dependent | Example: "Sigue en pie [dia] para la segunda sesion?" |
| `{{SENDER_NAME}}` | `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` | Nombre de quien envia el correo (del cliente instalado) |
| `{{CLIENT_DISPLAY_NAME}}` | `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` | Nombre de marca del cliente instalado |
| `{{CLIENT_TAGLINE}}` | `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` | Tagline de marca del cliente instalado |

**Tone**: Direct, warm, specific. Show you listened. No pitch. No pricing.

---

## Email 2 — Day 3: Relevant Case Study + Insight

**Subject line**: `Como {{CASE_STUDY_COMPANY}} resolvio exactamente lo que vi en {{COMPANY_NAME}}`
**Goal**: Build credibility. Create urgency through peer comparison.

```
{{FIRST_NAME}},

Despues de nuestra conversacion, estuve pensando en {{SPECIFIC_PAIN}}.

Me recordo a {{CASE_STUDY_COMPANY}}.

{{CASE_STUDY_NARRATIVE}}

{{BRIDGE_TO_PROSPECT}}

{{SINGLE_INSIGHT}}

No necesitas responder esto — solo queria que lo tuvieras.

{{SENDER_NAME}}

---
{{CLIENT_DISPLAY_NAME}}
{{CLIENT_TAGLINE}}
```

### Population Rules — Email 2

| Variable | Source | Notes |
|----------|--------|-------|
| `{{SPECIFIC_PAIN}}` | business-context section 4 | The pain most similar to the case study's story |
| `{{CASE_STUDY_COMPANY}}` | `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` | Default: the client's primary proof-point case study. Use a different one if more relevant to this prospect |
| `{{CASE_STUDY_NARRATIVE}}` | `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md`, proof engine | 3-4 sentences. GOLPE micro-arc: hook stat → what they did → result |
| `{{BRIDGE_TO_PROSPECT}}` | business-context comparison | 1-2 sentences connecting case study to prospect's specific situation |
| `{{SINGLE_INSIGHT}}` | Generate | 1 actionable insight the prospect can use even without the client instalado |

**Modo de falla**: si `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` no existe, detente y pide al operador que configure el caso de exito principal del cliente antes de enviar este email.

**Illustrative narrative pattern** (ejemplo — reemplazar por el caso de exito real del cliente instalado, ver `brand-voice.md`):

> {{CASE_STUDY_COMPANY}} procesaba un volumen alto de operaciones con herramientas manuales (hojas de calculo, mensajeria). Un equipo pequeno cargaba la reconciliacion a mano. Un dia se perdio una cifra significativa — tardaron dias en detectarla. En semanas construimos una solucion que automatiza la reconciliacion, detecta anomalias en minutos, y libero al equipo para hacer trabajo de mas valor. Hoy siguen siendo cliente, con decenas de procesos automatizados.

**Adapt the narrative** to mirror the prospect's pain, siempre con datos reales del cliente instalado (nunca inventar cifras).

**Tone**: Generous. Give value without asking for anything. The "no necesitas responder" line reduces pressure.

---

## Email 3 — Day 7: Soft Close with Sprint Proposal

**Subject line**: `{{FIRST_NAME}} — una idea para las proximas 2 semanas`
**Goal**: Present the Sprint as a low-risk first step. Create a decision point.

```
{{FIRST_NAME}},

He estado pensando en como atacar {{PRIMARY_CHALLENGE}} de manera practica.

Mi propuesta: un Sprint de Descubrimiento de 10 dias.

**Que es:**
- Un especialista de {{CLIENT_DISPLAY_NAME}} embebido en tu operacion por 10 dias
- Mapeamos como fluye tu informacion (la realidad, no el organigrama)
- Entregable: Mapa de Energia (o el entregable equivalente del cliente instalado) con puntos de friccion cuantificados y roadmap

**Que NO es:**
- No es una auditoria
- No es un reporte generico
- No es un compromiso de largo plazo

**Inversion:** ${{SPRINT_PRICE}} USD
**Timeline:** 10 dias habiles
**Entregable:** Mapa de Energia personalizado ({{CASE_STUDY_REFERENCE}})

{{URGENCY_LINE}}

Si te interesa, la proxima semana podemos agendar un kick-off de 30 minutos para definir alcance.

{{CLOSING_LINE}}

{{SENDER_NAME}}

---
{{CLIENT_DISPLAY_NAME}}
{{CLIENT_TAGLINE}}
{{CLIENT_CONTACT_EMAIL}} | {{CLIENT_BOOKING_URL}}
```

### Population Rules — Email 3

| Variable | Source | Notes |
|----------|--------|-------|
| `{{PRIMARY_CHALLENGE}}` | business-context section 4, pain #1 | 1 sentence, prospect vocabulary |
| `{{SPRINT_PRICE}}` | `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md`, FRONTEND tier | Range per region, as defined in the installed client's pricing grid |
| `{{CASE_STUDY_REFERENCE}}` | `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` | Short proof point from the installed client's own case study (e.g. "X empezo con este mismo Sprint. Hoy tiene N automatizaciones.") |
| `{{URGENCY_LINE}}` | business-context section 3 (Situacion Critica) | If SC > 2, add urgency. If SC < 2, add value-based motivation instead |
| `{{CLOSING_LINE}}` | Context-dependent | Warm close. "Un abrazo" or "Quedo al tanto" |
| `{{CLIENT_CONTACT_EMAIL}}`, `{{CLIENT_BOOKING_URL}}` | `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` | Contact email and booking link of the installed client |

**Modo de falla**: si `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` no existe, detente y pide al operador que configure el pricing del cliente antes de enviar este email.

**Tier override:** If business-context recommends MIDDLE (Build) directly:
- Skip Sprint framing
- Present Build proposal summary instead
- Price: MIDDLE tier range in `pricing-grid.md`
- Reference the full proposal document (`clients/{{CLIENT_SLUG}}/deals/<slug>/proposal.md`)

**Tone**: Confident but not pushy. The Sprint is positioned as a small experiment, not a commitment. The "que NO es" section preempts objections.

---

## Sequence Logic

```
Day 0 ──── Email 1: Summary + Next Steps
             │
             │  Wait 3 days
             │
Day 3 ──── Email 2: Case Study + Insight
             │
             │  Wait 4 days
             │
Day 7 ──── Email 3: Soft Close with Sprint
             │
             │  If no response in 7 days:
             │
Day 14 ─── Manual check-in (not automated)
             "{{FIRST_NAME}}, sigo por aqui. Sin presion."
```

## Gmail MCP Instructions

For each email:
1. Create as **DRAFT** — never send automatically
2. Set `to:` from business-context stakeholder email (if available)
3. Set `subject:` from template above
4. Set `body:` with populated content
5. Notify user: "Draft created — review before sending"

## Quality Gates

1. All `{{PLACEHOLDER}}` variables resolved
2. All prospect quotes verbatim (not paraphrased)
3. No anti-words (check `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md`)
4. At least 1 case-study reference from the installed client's own brand-voice.md in the sequence (Email 2 mandatory)
5. Pricing matches `clients/{{CLIENT_SLUG}}/sales-engine/pricing-grid.md` exactly
6. Each email < 300 words (brevity is respect)
7. Drafts created, never sent
