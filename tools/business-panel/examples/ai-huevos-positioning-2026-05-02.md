---
example_id: ai-huevos-positioning-2026-05-02
stage_run: positioning
client: ai-huevos
date: 2026-05-02
verdict: Candidate C (Dunford-led category-first variant)
fresh_findings_count: 5
consensus_count: 7
dissents_count: 2
groupthink_checks_count: 2
---

# Reference Run — AI Huevos Positioning v1.0 → v1.1

> The canonical first production run of the `business-panel` skill. Used to validate the protocol on a real artifact and produce a polished v1.1 of the positioning master.

## Run summary

- **Stage**: `positioning`
- **Lens roster**: dunford, schwartz, christensen, hormozi
- **Artifact**: `clients/ai-huevos/positioning-master.md` (v1.0, dated 2026-05-02)
- **Companions**: `clients/ai-huevos/voc/voc-master.md`, `clients/ai-huevos/offer-architecture/escala-value-ladder.md`, `clients/ai-huevos/pricing/pricing-grid.md`
- **Founder feedback round**: 8 decisions provided between Round 1 and the Business Panel pass
- **Loom proof**: founder committed to recording 2-min Loom of the GDM deliverable
- **Result artifact**: `clients/ai-huevos/positioning-master-v1.1-draft.md`

## Files produced

| File | Purpose |
|---|---|
| `clients/ai-huevos/diagnostics/positioning-multilens-2026-05-02.md` | Round-1 multi-lens diagnostic (initial 4-lens pass before the panel debate) |
| `clients/ai-huevos/diagnostics/business-panel-2026-05-02.md` | Round-2 + Round-3 consensus pass (the actual panel output) |
| `clients/ai-huevos/positioning-master-v1.1-draft.md` | Polished v1.1 of the positioning master integrating panel verdict |

## What the panel found

### Consensus (7 prescriptions)
1. Drop McKinsey from hero. Anchor against "1 year + 40 pages stuck in Drive."
2. Lead hero with the queryable deliverable as the differentiated capability.
3. Hold $5K. Revenue-tied caveat + freemium pilot do the pricing-defense work.
4. Stack revenue-tied automation (Implied Guarantee) + 100% refund + bonus (Conditional).
5. Re-anchor problem-aware around fear-of-blame + fear-of-Drive-stall.
6. "Reality-based OS" as Stage-5 identification phrase, paired with the gerencia/operario/a-pie triad.
7. Drop "19 agentes IA" entirely from external copy.

### Groupthink checks (2)
- Revenue-tied MOAT may be over-celebrated — revisit at delivery #5
- Freemium pilot may erode premium signaling — revisit after 10 freemium runs

### Dissents (2)
- Dunford: "OS" buzzword risk in LATAM Spanish — 30-day copy-test review
- Schwartz: 5-interview freemium violates "paid first-win > free" — founder retains decision

### Fresh findings (5)
- Queryable deliverable converts diagnostic from one-shot Big Hire into recurring Little Hire surface — without a retainer
- Revenue-tied automation is a *purpose-brand* moat (Christensen RPV), not a pricing moat
- Freemium pilot + queryable deliverable + revenue-tied caveat compose into a coherent offer architecture — v1.0 was a list, v1.1 is a system
- The McKinsey anchor was hiding the real anchor: "consultant who left a 40-page deck in Drive"
- The "doeses" of the offer can be stated cleanly in buyer language without "AI/WhatsApp/diagnóstico"

### Panel verdict

**Ship Candidate C** — Dunford-led category-first variant:

> *"Reality-based OS: una cosa es lo que tu gerente cree que pasa, otra lo que tu operario dice, y otra lo que la gente de a pie termina haciendo. En 3 semanas ponemos las tres conversaciones en la misma mesa. Te dejamos un reporte que responde preguntas — no un PDF que se atora en Google Drive. Y solo cobramos la automatización si está atada a revenue real."*

It's the only candidate that delivers all three founder-decided differentiators (Reality-based OS identification, queryable deliverable, revenue-tied caveat) in the same beat as the validated gerencia/operario/a-pie triad. Minimum risk, maximum upside.

## What this run validated about the skill

- **Independent agreement signal works**: 4 lenses converged on 7 issues without coordination
- **Bias-disclosure footers enable triangulation** when lenses disagree
- **Limitation gates fire correctly**: Hormozi suppressed bonus-stacking for sophisticated B2B; Schwartz applied per-asset for multi-touch
- **Hormozi's V=0.83 calculation translated directly to a pricing decision** (hold, don't raise)
- **Christensen's "milkshake question" produced the killer insight** the founder-authored doc missed: the buyer hires a *neutral mouth that says what they cannot say themselves*

## Phase-2 improvements identified (for skill v1.1)

- Cross-lens conflict resolution was inconsistent (each agent saw conflicts from its own POV)
- VOC integration was uneven across lenses (Schwartz heavy, Dunford/Hormozi light)
- Need a formal cross-lens synthesizer step (currently done by the calling skill, not by the panel itself)
- Add quantitative force-strength method to Christensen lens (currently qualitative)

## To re-run this stage on a different artifact

```
/panel positioning <path-to-positioning-master>
```

Or via natural language:

> "Run a business panel on the positioning master at clients/<client>/positioning-master.md"
