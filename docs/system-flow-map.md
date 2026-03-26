# GrowthOS — System Flow Map

> How input conversations flow through the system, which plugins activate, which agents trigger which skills, and how everything interconnects.
>
> Each diagram tells ONE story. Read them in order for the full picture.

---

## 1. The User Journey

Where does a user start, and what happens?

```mermaid
flowchart LR
    A["User arrives\nwith a problem"] --> B["/os\nSeed Questionnaire"]
    B --> C{"What's your\nbottleneck?"}
    C -->|"No sé quién\nes mi cliente"| D["DEFINIR"]
    C -->|"Nadie me\nconoce"| E["ATRAER"]
    C -->|"No cierro\ndeals"| F["CONVERTIR"]
    C -->|"No retengo\nclientes"| G["ESCALAR"]
    D --> H["GCO saves\nprogress"]
    E --> H
    F --> H
    G --> H
    H --> I["/estado\nSee where you are"]
    H --> J["/roadmap\n90-day plan"]
```

The system is **need-driven, not plugin-driven**. Users describe their problem. GrowthOS diagnoses the bottleneck and routes to the right phase automatically.

---

## 2. What Happens Inside Each Phase

### DEFINIR — "Who am I and who do I serve?"

```mermaid
flowchart TD
    CMD1["/icp command"] --> SK1["icp-analysis\nScore 0-100, Tiers"]
    CMD2["/diagnostico command"] --> SK2["PlainIQ Heatmap\nGTM · Revenue · Q2C"]
    SK1 --> SK3["positioning\nValue statement"]
    SK1 --> SK4["icp-tal\nTarget account list"]
    SK3 --> SK5["competitive-analysis\n3-5 competitors mapped"]
    SK1 & SK3 & SK5 --> EXIT{"Exit criteria:\nICP >70\nPositioning defined\nCompetitors mapped"}
    EXIT -->|"Pass"| NEXT["→ Phase ATRAER"]
```

### ATRAER — "How do I attract my ideal client?"

```mermaid
flowchart TD
    CMD1["/headline"] --> SK1["headline-mastery\n12-15 variants scored"]
    CMD2["/copy"] --> AG1["4-agent pipeline"]
    CMD3["/escala"] --> SK2["ESCALA value ladder\nBAIT → FRONTEND → MIDDLE → BACKEND"]
    CMD4["/quiz"] --> SK3["quiz-funnel\nSONDA methodology"]
    CMD5["/funnel-diagnosis"] --> AG2["funnel-architect agent"]
    AG1 --> OUT1["Copy + A/B variants"]
    AG2 --> SK2
    AG2 --> SK4["FLUJO architecture"]
    SK1 & OUT1 & SK2 & SK3 & SK4 --> EXIT{"Exit criteria:\n20+ content topics\nFunnel designed\nLead magnet live"}
    EXIT -->|"Pass"| NEXT["→ Phase CONVERTIR"]
```

### CONVERTIR — "How do I close deals?"

```mermaid
flowchart TD
    CMD1["/discovery"] --> SK1["discovery-mastery\nPULSO hypothesis + question flow"]
    SK1 -.->|"after the call"| AG1["deal-strategist agent\nPULSO scoring + buying center"]
    CMD2["/pipeline"] --> SK2["pipeline-management\nPULSO score per deal"]
    CMD3["/propuesta"] --> GATE{"PULSO ≥ 23?"}
    GATE -->|"Yes"| SK3["proposal-generation\n+ trading levers"]
    GATE -->|"No"| BLOCK["Run /discovery first"]
    CMD4["/coaching"] --> SK4["coaching-cadence\nROCA framework"]
    AG1 & SK2 & SK3 & SK4 --> EXIT{"Exit criteria:\nWin rate >30%\nShorter sales cycle\nROCA coaching active"}
    EXIT -->|"Pass"| NEXT["→ Phase ESCALAR"]
```

### ESCALAR — "How do I retain and grow?"

```mermaid
flowchart TD
    CMD1["/playbook"] --> AG1["playbook-coach agent"]
    AG1 --> SCORE["Scores 31 frameworks\nRelevance · Impact · Feasibility"]
    SCORE --> SELECT["Selects top 2-4"]
    SELECT --> OUT1["15-20pp custom playbook\n+ hypothesis cards\n+ measurement plan"]
    CMD2["/deal-analysis"] --> SK1["Win/loss PULSO patterns\nConcentration analysis"]
    CMD3["/kickoff"] --> SK2["PIC creation\nJoint Impact Plan\n30-60-90 day success plan"]
    OUT1 & SK1 & SK2 --> EXIT{"Exit criteria:\nNRR >100%\nChurn <10%\nPIC per customer"}
    EXIT -->|"Continuous"| LOOP["Optimize + iterate"]
```

---

## 3. The Copy Pipeline (Agent Orchestration Example)

The `/copy` command is the best example of how agents chain together:

```mermaid
flowchart LR
    IN["/copy + GCO context"] --> A1["1. Research Agent\nAudience\nCompetitors\nSocial proof"]
    A1 --> A2["2. Insight Agent\nPatterns\nGaps\nTop 3 triggers"]
    A2 --> A3["3. Ideation Agent\n5+ creative angles\nMessaging frameworks"]
    A3 --> A4["4. Copy Output Agent\nFinal copy\nA/B variants"]
    A4 --> QG{"Score > 7.5?"}
    QG -->|"Pass"| OUT["Delivered to user"]
    QG -->|"Fail"| REDO["Iterate"]
```

---

## 4. How Data Flows Across Phases

Each phase's outputs become the next phase's inputs. The **GCO** (GrowthOS Context Object) is the transport layer. **PULSO** scores are the universal language.

```
DEFINIR outputs                    ATRAER consumes
├── ICP Profile (0-100)      →    content-strategy, quiz-funnel, escala
├── Positioning Statement    →    headline-mastery, copy agents, landing-pages
└── Competitive Landscape    →    content-strategy (differentiation angles)

ATRAER outputs                     CONVERTIR consumes
├── ESCALA Value Ladder      →    discovery-mastery (pricing context)
├── Content Plan             →    pre-discovery-research (thought leadership)
└── Funnel Blueprint         →    pipeline-management (conversion points)

CONVERTIR outputs                  ESCALAR consumes
├── PULSO Deal Scores        →    deal-analysis (win/loss patterns)
├── Pipeline Health          →    playbook-coach (problem classification)
├── Proposals                →    renewal-expansion (reference for upsell)
└── ROCA Coaching Data       →    sales-transformation (team capability)

ESCALAR outputs                    Feeds back to all phases
├── Playbook                 →    Updated methodology for DEFINIR+ATRAER
├── Win/Loss Patterns        →    Refined ICP scoring in DEFINIR
├── PIC (Joint Impact Plan)  →    Customer insights for ATRAER content
└── Measurement Plans        →    Quality gate calibration for all skills
```

---

## 5. Governance: Who Can Do What

The Agentic Constitution classifies every skill into trust zones:

| Zone | Autonomy | Skills | Rule |
|------|----------|--------|------|
| **GREEN** | Can graduate to autonomous | icp-analysis, competitive-analysis, plainiq-diagnostic, content-strategy, headline-mastery, pre-discovery | Low risk, formulaic |
| **YELLOW** | Always needs human review | positioning, product-marketing, alma, proposal-generation, email-sequences, coaching-cadence | Strategic choices |
| **RED** | Gated + human required | propuesta (PULSO ≥23), external comms, PII handling, budget decisions | High risk |

**Trust graduation**: HITL (default) → HOTL (after 50+ runs, 88% confidence, ≤8% escalation) → HOOTL (rare, zero violations)

---

## Quick Reference: Command Routing Table

| Command | Phase | Plugin | Agent(s) | Key Output |
|---------|-------|--------|----------|------------|
| `/os` | Any | conversational-pm | — | GCO initialized, phase routed |
| `/estado` | Any | conversational-pm | — | State dashboard |
| `/roadmap` | Any | conversational-pm | — | 90-day plan |
| `/diagnostico` | Any | growth-foundations | — | PlainIQ heatmap (0-40) |
| `/icp` | DEFINIR | growth-foundations | — | ICP profile (0-100, Tiers) |
| `/quiz` | ATRAER | growth-foundations | — | 6-question quiz (SONDA) |
| `/headline` | ATRAER | copywriting-engine | — | 12-15 headlines scored |
| `/copy` | ATRAER | copywriting-engine | 4 agents chained | Final copy + A/B variants |
| `/email-sequence` | ATRAER | copywriting-engine | — | 5-7 email cadence |
| `/escala` | ATRAER | motor-de-ofertas | — | Value ladder + LTV:CAC |
| `/funnel-diagnosis` | ATRAER | motor-de-ofertas | funnel-architect | Funnel blueprint |
| `/discovery` | CONVERTIR | sales-blueprint | deal-strategist (opt.) | Prep + PULSO hypothesis |
| `/pipeline` | CONVERTIR | sales-blueprint | — | Health dashboard |
| `/propuesta` | CONVERTIR | sales-blueprint | — | Proposal + trading levers |
| `/coaching` | CONVERTIR | sales-blueprint | — | Agenda + scripts (ROCA) |
| `/playbook` | ESCALAR | play-to-win | playbook-coach | 15-20pp playbook |
| `/deal-analysis` | ESCALAR | play-to-win | — | Win/loss PULSO patterns |
| `/kickoff` | ESCALAR | play-to-win | — | PIC + success plan |
