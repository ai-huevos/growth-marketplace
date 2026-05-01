# Kit (ConvertKit) Build Spec — Email Sequences

```yaml
client: AI Huevos
document: kit-sequences-build-spec
version: 1.0
status: DRAFT
date: 2026-02-22
platform: Kit (ConvertKit) v4 API
source-specs:
  - clients/ai-huevos/sequences/secuencia-origen.md
  - clients/ai-huevos/sequences/secuencia-pulsar.md
  - clients/ai-huevos/sequences/secuencia-reengagement.md
mcp: kit (configured in .mcp.json)
```

> **Spec de implementación para configurar Kit vía MCP.**
> Los copy completos de cada secuencia están en `sequences/`.
> Este documento traduce esos specs a configuración de Kit.

---

## Account Setup

### Custom Fields

Create these subscriber custom fields before building sequences:

| Field | Key | Type | Source |
|-------|-----|------|--------|
| Energy Score | `energy_score` | Number | n8n (quiz scoring) |
| Quiz Segment | `quiz_segment` | Text | n8n (APAGADO/LATENTE/CONECTADO/ENERGIZADO) |
| Lead Temperature | `lead_temperature` | Text | n8n (HOT/WARM/COLD) |
| Q10 Verbatim | `q10_verbatim` | Text | n8n (open text response) |
| Empresa | `empresa` | Text | n8n (quiz email gate) |
| Rol | `rol` | Text | n8n (Q2 answer) |
| Tamaño | `tamano` | Text | n8n (Q1 answer) |
| Eje Más Débil | `eje_debil` | Text | n8n (calculated) |

### Tags

| Tag | Purpose | Applied by |
|-----|---------|-----------|
| `quiz-apagado` | Segment: 0-25 | n8n |
| `quiz-latente` | Segment: 26-50 | n8n |
| `quiz-conectado` | Segment: 51-75 | n8n |
| `quiz-energizado` | Segment: 76-100 | n8n |
| `lead-hot` | Temperature: HOT | n8n |
| `lead-warm` | Temperature: WARM | n8n |
| `lead-cold` | Temperature: COLD | n8n |
| `origen-active` | In ORIGEN sequence | Kit automation |
| `origen-complete` | Finished ORIGEN | Kit automation |
| `pulsar-active` | In PULSAR nurture | Kit automation |
| `sprint-booked` | Booked a Sprint | n8n (Cal.com webhook) |
| `sprint-complete` | Sprint delivered | Manual |
| `reengagement-active` | In re-engagement | Kit automation |
| `cleaned-30d` | Removed for inactivity | Kit automation |

### Sending Domain

- **From:** AI Huevos <team@kaipartners.com>
- **Reply-to:** daniel@kaipartners.com
- **Requires:** SPF + DKIM configured (Gate 1D)

---

## Sequence 1: ORIGEN (5 emails, 5 days)

### Sequence Settings

```
Name: KAI — ORIGEN
Trigger: Subscriber added to sequence via n8n API
Entry condition: Does NOT have tag "origen-complete"
Exit condition: Tag "sprint-booked" added (they bought, stop selling)
```

### Email Schedule

| # | Subject (A) | Subject (B) | Delay | Status |
|---|-------------|-------------|-------|--------|
| 1 | "La razón por la que dejamos de vender AI" | "AI es como el sol (y eso cambia todo)" | Immediate | DRAFT |
| 2 | "Gastamos $2M en AI que nadie usó" | "$2M en AI. Cero adopción. Nuestra historia." | +24h | DRAFT |
| 3 | "El día que dejamos de vender AI" | "No vendemos AI. Construimos tu sistema operativo." | +48h | DRAFT |
| 4 | "Finkargo: $650M. 4 personas." | "$15M estaban escondidos en 3 tabs de Excel" | +72h | ⚠️ BLOCKED (Gate 1B) |
| 5 | "Tu turno." | "30 minutos. Tu energía escondida." | +96h | DRAFT |

### A/B Test Settings

- **Split:** 50/50
- **Winner metric:** Open rate after 24h
- **Auto-send winner:** Yes

### Per-Email Notes

**Email 1 — "AI es como el sol"**
- Copy source: `sequences/secuencia-origen.md` → Email 1
- Parábola 1: The Sun metaphor (Creation Myth)
- Emotional arc: Curiosity
- CTA: None (pure story)

**Email 2 — "Gastamos $2M"**
- Copy source: `sequences/secuencia-origen.md` → Email 2
- Parábola 2: The $2M failure
- Emotional arc: Empathy
- CTA: Soft — "¿Te ha pasado algo similar?"

**Email 3 — "Dejamos de vender AI"**
- Copy source: `sequences/secuencia-origen.md` → Email 3
- Breakthrough: The AI-OS pivot
- Emotional arc: Hope
- CTA: Quiz link (if they didn't finish)

**Email 4 — "Finkargo: $650M"**
- Copy source: `sequences/secuencia-origen.md` → Email 4
- Parábola 3: Full Finkargo story
- Emotional arc: Trust
- CTA: "Agenda una sesión" (for HOT/WARM leads)
- ⚠️ **STAYS DRAFT until Gate 1B clears** (Finkargo numbers verified)

**Email 5 — "Tu turno"**
- Copy source: `sequences/secuencia-origen.md` → Email 5
- Offer: Sprint de Descubrimiento
- Emotional arc: Action
- CTA: Cal.com booking link (Sprint de Descubrimiento)
- Pricing from Gate 1C

### Post-ORIGEN Automation

```
When subscriber completes ORIGEN (all 5 emails sent):
  → Add tag "origen-complete"
  → Remove tag "origen-active"
  → Wait 7 days
  → IF tag "sprint-booked" exists → STOP
  → ELSE → Add to PULSAR sequence + add tag "pulsar-active"
```

---

## Sequence 2: PULSAR (Weekly Nurture)

### Sequence Settings

```
Name: KAI — PULSAR
Trigger: Tag "origen-complete" added + 7 day delay + no "sprint-booked" tag
Type: Ongoing (new broadcasts added weekly)
Frequency: 5 emails/week (Mon-Fri)
```

### Editorial Calendar

| Day | Pillar | Content Type | Example Topic |
|-----|--------|-------------|---------------|
| Monday | P1: Adopción profunda de AI | Educational | "Por qué el 70% de las implementaciones de AI fracasan" |
| Tuesday | P4: Realidad B2B LATAM | Case study | "Lo que vimos en 44 entrevistas con COOs en Colombia" |
| Wednesday | P2: Arqueología organizacional | Quick win / tip | "3 preguntas para mapear tu flujo de datos en 10 minutos" |
| Thursday | P5: Partnership vs. Consulting | Behind-the-scenes | "Cómo es un día dentro de un Sprint de Descubrimiento" |
| Friday | P3: Metáfora de energía | Offer / CTA | "Esta semana: sesión de diagnóstico gratuita (3 cupos)" |

### Pre-Written Broadcasts (First 2 Weeks)

Week 1 and Week 2 broadcasts should be pre-written and scheduled as drafts.
Content source: `content-bank/linkedin-posts-semana-1-2.md` (adapted for email format).

Each PULSAR email follows GOLPE arc and ends with one of:
- Quiz CTA (if subscriber hasn't completed)
- Sprint CTA (if subscriber completed quiz)
- Content engagement CTA ("¿Te identificas? Responde este email.")

---

## Sequence 3: Re-engagement (3 emails, 21 days)

### Sequence Settings

```
Name: KAI — Re-engagement
Trigger: Subscriber hasn't opened any email in 30 days
  (Kit automation rule: "Has not opened email" in last 30 days)
Entry condition: NOT tagged "sprint-booked" AND NOT tagged "cleaned-30d"
```

### Email Schedule

| # | Delay | Strategy | CTA |
|---|-------|----------|-----|
| RE-1 | Day 0 | Pure value, no ask | None |
| RE-2 | +7 days | Fresh social proof | Soft (quiz or content) |
| RE-3 | +14 days | Last chance, natural urgency | Hard (session or clean) |

Copy source: `sequences/secuencia-reengagement.md`

### Post-RE Automation

```
After RE-3 sent:
  → Wait 7 days
  → IF opened any of RE-1/RE-2/RE-3:
      → Remove tag "reengagement-active"
      → Add back to PULSAR
  → ELSE:
      → Add tag "cleaned-30d"
      → Unsubscribe from all sequences
      → (Quality > quantity)
```

---

## Kit MCP Commands (Expected)

Once Kit MCP is active with API key:

1. **Create custom fields** (8 fields)
2. **Create tags** (12 tags)
3. **Create ORIGEN sequence** with 5 emails + delays
4. **Upload email content** from sequence specs
5. **Configure A/B subject lines** for each email
6. **Create PULSAR sequence** (or use broadcasts)
7. **Create re-engagement automation** rule
8. **Create post-ORIGEN automation** (tag → sequence routing)
9. **Configure sending domain** (SPF/DKIM verification)
10. **Send test emails** for each sequence

---

## Deliverability Checklist

- [ ] SPF record added to kaipartners.com DNS
- [ ] DKIM record added to kaipartners.com DNS
- [ ] DMARC policy configured
- [ ] Sending domain verified in Kit
- [ ] Test email passes spam filter check (mail-tester.com > 8/10)
- [ ] Unsubscribe link present in all emails (Kit handles automatically)
- [ ] Physical address in footer (required by CAN-SPAM)

---

*Copy source of truth: `sequences/secuencia-origen.md`, `secuencia-pulsar.md`, `secuencia-reengagement.md`*
*Integration engine: `integrations/n8n-scoring-workflow.md`*
