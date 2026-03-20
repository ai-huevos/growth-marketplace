# GrowthOS Product Architecture

## Part 1: Forensic System Map

### What You Actually Built (Not What You Think You Built)

Most people would describe this as "a marketplace of AI plugins." That's the wrong frame. Here's what the forensic analysis reveals:

**You built a diagnostic operating system with prescriptive automation.**

The system has 4 distinct layers, and understanding them changes the product strategy:

```
┌─────────────────────────────────────────────────────────┐
│  LAYER 4: EXECUTION ENGINE                               │
│  56 templates × 8 agents = output contracts              │
│  "Here's exactly what to deliver and how"                │
│  (copywriting-engine, motor-de-ofertas, play-to-win)     │
├─────────────────────────────────────────────────────────┤
│  LAYER 3: METHODOLOGY FRAMEWORK                          │
│  PULSO + ESCALA + SONDA + ClarQ + ROCA + FLUJO           │
│  "The thinking models that connect diagnosis to action"   │
│  (growth-foundations, sales-blueprint frameworks/)        │
├─────────────────────────────────────────────────────────┤
│  LAYER 2: DIAGNOSTIC ROUTER                              │
│  GrowthOS orchestrator + GCO state object                │
│  "Where are you? What's broken? What do we fix first?"   │
│  (conversational-pm, /os, /estado, /roadmap)             │
├─────────────────────────────────────────────────────────┤
│  LAYER 1: INTAKE + CONTEXT                               │
│  Seed questionnaire → 4 questions → phase routing        │
│  "Tell me about your business in 2 minutes"              │
│  (os/intake/seed-questionnaire.md)                       │
└─────────────────────────────────────────────────────────┘
```

### Critical System Relationships

**PULSO is the nervous system.** It's not just a discovery framework — it's the shared diagnostic language that connects:
- Discovery sessions → Pipeline health → Proposal generation → Coaching
- It carries context across plugins. A PULSO score from `/discovery` informs `/pipeline` which informs `/propuesta`

**GCO (GrowthOS Context Object) is the memory.** Persistent state per client:
- Company info, PULSO diagnosis, current phase, completed skills, generated outputs
- This is the product's unfair advantage: cumulative intelligence per client

**The 4-phase model is the product's backbone:**
- DEFINIR (identity) → ATRAER (attraction) → CONVERTIR (sales) → ESCALAR (retention)
- Each phase activates specific plugins. Users don't choose plugins — the diagnosis routes them.
- Phase transitions are the key product moments (upsell triggers)

**Templates are output contracts, not suggestions.** The 56 templates define:
- What must be delivered (structure)
- What success looks like (benchmark)
- How to validate quality (scoring models: ICP 0-100, ClarQ 0-40)

### The Hidden Asset Map

| Asset | What It Really Is | Product Value |
|-------|-------------------|---------------|
| Seed Questionnaire (4 questions) | Lead qualification engine | Free diagnostic = top of funnel |
| ClarQ Diagnostic | GTM maturity assessment | Lead magnet + paid deep-dive |
| PULSO Framework | Universal B2B health check | Content series + core methodology |
| 4-Phase Model | Customer journey / product tiers | Pricing + packaging structure |
| 56 Templates | Productized deliverables | Service offerings with fixed scope |
| GCO State Object | Client intelligence database | Retention moat (switching cost) |
| Agentic Constitution | Quality governance | Trust signal for enterprise buyers |

---

## Part 2: Contrast vs. Production AI Marketing Agencies

### What "Production-Ready" Looks Like in 2026

The AI agency landscape has three tiers:

**Tier 1 — Tool Platforms** (Jasper, Copy.ai, Writer)
- "Here are AI writing tools, use them"
- Self-serve, no diagnosis, no methodology
- $50-500/month per seat
- Problem: no strategic layer — users must know what to ask for

**Tier 2 — AI-Augmented Agencies** (traditional agencies + AI workflows)
- Humans do strategy, AI accelerates execution
- Custom per client, high-touch
- $5K-50K/month retainers
- Problem: doesn't scale, still human-bottlenecked

**Tier 3 — AI-Native Operating Systems** (emerging category — THIS IS YOU)
- AI does diagnosis + strategy + execution
- Methodology-driven, not tool-driven
- Cumulative intelligence per client
- $1K-10K/month
- Problem: nobody has proven this model yet at scale

### Where GrowthOS Wins and Loses

| Dimension | Tier 1 (Tools) | Tier 2 (Agencies) | GrowthOS |
|-----------|---------------|-------------------|----------|
| Diagnosis | ❌ None | ✅ Human strategist | ✅ Automated (PULSO, ClarQ) |
| Methodology | ❌ Generic AI | ✅ Agency IP | ✅ Codified (6 frameworks) |
| Execution | ✅ Fast, cheap | ✅ High quality | ⚠️ Quality depends on prompts |
| Cumulative learning | ❌ No memory | ✅ Account team knows you | ✅ GCO state object |
| Scalability | ✅ Self-serve | ❌ Human-bottlenecked | ⚠️ Needs UI layer |
| Spanish/LATAM | ❌ English-first | ⚠️ Some agencies | ✅ Native |
| Price point | $$ Low | $$$$ High | $$$ Mid (sweet spot) |

### The Gap Analysis (What You Need to Build)

**You have (strong):**
- Diagnostic intelligence (Layer 1-2)
- Methodology codification (Layer 3)
- Execution templates (Layer 4)
- LATAM/Spanish positioning (zero competition)
- Cumulative client state (GCO)

**You're missing (must build):**
- User interface (no one is using Claude Code to access this)
- Authentication + multi-tenancy
- Persistent storage beyond markdown
- Onboarding flow that non-technical users can navigate
- Billing and access control
- Output quality validation (templates exist, but no automated QA)
- Integration with client tools (CRM, email, calendar)

---

## Part 3: MVP Architecture (Solo Founder, Weeks Not Months)

### The Product Form Decision

**Recommendation: Productized Service → SaaS (two phases)**

**Phase 1 (Weeks 1-3): "GrowthOS Powered By" — Productized Service**
- YOU run GrowthOS for clients using Claude Projects / Claude Code
- Client gets: branded diagnostic report + 90-day roadmap + monthly deliverables
- You get: revenue, validation, design partners for the SaaS
- Revenue: $2K-5K/month per client (LATAM B2B $50M+ can pay this)
- Capacity: 5-8 clients before you're bottlenecked

**Phase 2 (Weeks 4-8): MVP SaaS Platform**
- Lightweight web app: diagnostic → dashboard → deliverables
- Self-serve onboarding with the seed questionnaire
- AI-powered execution using Anthropic API + your templates
- Revenue: $500-2K/month self-serve, $3K-8K/month managed tier

### Phase 1 Tech: Productized Service Stack

```
Client Touchpoints:
├── Intake: Typeform or Tally (seed questionnaire, 4 questions)
├── Diagnostic: You run /os + /diagnostico in Claude, package as PDF report
├── Dashboard: Notion workspace per client (GCO state, deliverables, roadmap)
├── Execution: You run commands (/copy, /discovery, /pipeline) → deliver outputs
├── Communication: Slack channel or WhatsApp per client
└── Billing: Stripe invoicing (manual)

Your Workflow:
1. Client fills Typeform → you get notification
2. You run GrowthOS diagnostic → generate branded report
3. Share Notion workspace with client dashboard
4. Execute 90-day roadmap using your plugin system
5. Monthly: update GCO, generate deliverables, review with client
```

No code needed. Ship in 1 week.

### Phase 2 Tech: MVP SaaS Stack

```
┌─────────────────────────────────────────────────┐
│                   FRONTEND                       │
│  Next.js 14+ (App Router)                        │
│  Tailwind CSS + shadcn/ui                        │
│  Spanish-first, responsive                       │
│                                                  │
│  Key Screens:                                    │
│  1. Landing + Diagnostic (public)                │
│  2. Dashboard (authenticated)                    │
│  3. Phase Workspace (per GrowthOS phase)         │
│  4. Deliverable Viewer/Editor                    │
│  5. Settings + Billing                           │
└──────────────────────┬──────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│                   BACKEND                        │
│  Supabase (Auth + Database + Storage + Edge Fn)  │
│                                                  │
│  Data Model:                                     │
│  - organizations (company profile)               │
│  - gco_state (GrowthOS Context Object per org)   │
│  - diagnostic_results (ClarQ + PULSO scores)     │
│  - deliverables (generated outputs per phase)    │
│  - phase_progress (which skills completed)       │
│  - templates (the 56 output contracts)           │
└──────────────────────┬──────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│                 AI ENGINE                         │
│  Anthropic Claude API (Sonnet for speed,         │
│  Opus for complex diagnosis)                     │
│                                                  │
│  System Prompts = Your plugin methodology        │
│  (PULSO, ESCALA, ClarQ, etc. loaded as context)  │
│                                                  │
│  Workflow:                                       │
│  1. User input → select relevant template        │
│  2. Load GCO state + template + methodology      │
│  3. Claude generates deliverable                 │
│  4. Validate against template benchmark          │
│  5. Store in deliverables table                  │
│  6. Update GCO state + phase_progress            │
└─────────────────────────────────────────────────┘
```

### Data Model (Supabase)

```sql
-- Core tables
organizations (
  id, name, industry, size_segment, country,
  created_at, subscription_tier
)

gco_state (
  id, org_id,
  current_phase,        -- DEFINIR | ATRAER | CONVERTIR | ESCALAR
  pulso_scores,         -- JSONB {panorama, urgencia, logro, situacion, organizacion}
  clarq_scores,         -- JSONB {gtm, revenue, q2c, capabilities}
  completed_skills,     -- TEXT[] array of skill slugs
  generated_outputs,    -- JSONB [{template_id, created_at, status}]
  metadata,             -- JSONB for extensibility
  updated_at
)

diagnostic_results (
  id, org_id,
  diagnostic_type,      -- 'clarq' | 'pulso' | 'seed'
  raw_responses,        -- JSONB (questionnaire answers)
  scores,               -- JSONB (computed scores)
  recommended_phase,
  recommended_skills,   -- TEXT[]
  created_at
)

deliverables (
  id, org_id,
  template_id,          -- references the 56 templates
  phase,                -- which GrowthOS phase
  skill_slug,           -- which skill generated it
  content,              -- TEXT (the generated output)
  format,               -- 'markdown' | 'pdf' | 'docx'
  benchmark_met,        -- BOOLEAN (did it pass template QA)
  created_at, updated_at
)

templates (
  id, slug, name,
  plugin,               -- which plugin owns it
  phase,                -- which GrowthOS phase
  output_contract,      -- TEXT (the template definition)
  benchmark_criteria,   -- JSONB (what "good" looks like)
  version
)
```

### API Routes

```
POST   /api/diagnostic/start     → Begin seed questionnaire
POST   /api/diagnostic/submit    → Process answers, compute scores, route to phase
GET    /api/dashboard             → GCO state + phase progress + next actions
POST   /api/execute/{skill}      → Run a skill (Claude API + template + GCO)
GET    /api/deliverables          → List generated outputs
GET    /api/deliverables/{id}     → View specific deliverable
POST   /api/roadmap/generate     → Generate 90-day roadmap from current state
GET    /api/phase/{phase}/skills  → Available skills for current phase
```

### Build Sequence (8 weeks total)

```
Week 1-3: Productized Service (NO CODE)
  ├── Day 1-2: Package seed questionnaire as Typeform
  ├── Day 3-4: Create branded diagnostic report template (PDF)
  ├── Day 5-7: Set up Notion client dashboard template
  ├── Day 8-14: Onboard first 2-3 clients, run diagnostics
  └── Day 15-21: Execute first deliverables, collect feedback

Week 4-5: SaaS Foundation
  ├── Supabase project + auth + data model
  ├── Next.js scaffold + landing page
  ├── Diagnostic flow (public, no auth required)
  └── Basic dashboard (auth required)

Week 6-7: AI Engine + Execution
  ├── Claude API integration
  ├── Template loading system (markdown → system prompts)
  ├── GCO state management
  ├── 3-5 core skills wired up (highest-value ones)
  └── Deliverable generation + storage

Week 8: Polish + Launch
  ├── Billing (Stripe)
  ├── Onboarding flow
  ├── First 5 templates fully operational
  └── Beta launch to productized service clients
```

### Pricing Architecture

```
┌──────────────────────────────────────────────────────┐
│  DIAGNÓSTICO (Free)                                   │
│  Seed questionnaire + ClarQ score + phase routing     │
│  → Lead magnet. Captures email. Shows the gap.        │
├──────────────────────────────────────────────────────┤
│  STARTER — $500/month                                 │
│  Dashboard + 1 phase active + 5 deliverables/month    │
│  → Self-serve. Entry point for smaller companies.     │
├──────────────────────────────────────────────────────┤
│  GROWTH — $2,000/month                                │
│  All 4 phases + unlimited deliverables + GCO state    │
│  → Core offering. Where most $50M+ companies land.    │
├──────────────────────────────────────────────────────┤
│  ENTERPRISE — $5,000-8,000/month                      │
│  Everything + managed execution + monthly strategy     │
│  → You run the system for them. Productized service.  │
└──────────────────────────────────────────────────────┘
```

This maps directly to the 4-phase model:
- Free tier = DEFINIR (diagnostic only)
- Starter = unlock one phase at a time
- Growth = full system
- Enterprise = full system + human layer (you)

---

## Part 4: Content Strategy as Product Architecture

### The Diagnostic IS the Funnel

The seed questionnaire (4 questions) → ClarQ score → phase routing is simultaneously:
1. **Product onboarding** (for paying users)
2. **Lead magnet** (for marketing)
3. **Qualification engine** (for sales)

One asset, three functions. This is the centerpiece of all content strategy.

### Lead Magnet Cascade (Built Into the Product)

```
AWARENESS (Top of Funnel)
├── "¿En qué fase de crecimiento estás?" — Interactive diagnostic
│   Format: Web quiz (the seed questionnaire, public)
│   CTA: "Obtén tu diagnóstico completo gratis"
│   Captures: email + company + industry + phase
│
├── PULSO Framework Guide — "Las 5 dimensiones de la salud comercial B2B"
│   Format: PDF download (extracted from your frameworks/)
│   CTA: "Evalúa tu equipo comercial con PULSO"
│
└── Phase-Specific Content — 4 series, one per phase
    ├── DEFINIR: "Cómo definir tu ICP cuando vendes a enterprise"
    ├── ATRAER: "Estrategia de contenido B2B: de 0 a pipeline"
    ├── CONVERTIR: "Discovery calls que cierran: el método PULSO"
    └── ESCALAR: "El modelo operativo de Customer Success"

CONSIDERATION (Mid-Funnel)
├── ClarQ Deep Dive Report — Personalized diagnostic (gated)
│   Trigger: User completes free diagnostic, wants detailed analysis
│   Shows: specific gaps, benchmarks vs industry, recommended actions
│   CTA: "Activa tu roadmap de 90 días"
│
├── Case Studies — Real client results using each phase
│   Format: Before/after with methodology visible
│   CTA: "¿Quieres resultados similares?"
│
└── Template Previews — Show 3-5 of the 56 templates
    "Esto es lo que genera GrowthOS para ti"
    Show the output quality, not the tool

DECISION (Bottom of Funnel)
├── 90-Day Roadmap Preview — Generated from their diagnostic
│   "Based on your ClarQ score, here's your roadmap"
│   Free but incomplete — full version requires subscription
│
├── Live Demo — Run /os for them in a call
│   15-minute diagnostic → show what the system produces
│
└── Pilot Offer — 30 days at Enterprise tier, fixed price
    $3,000 one-time → experience the full system
    Convert to monthly after pilot
```

### Social Content Calendar (Extracted from Methodology)

Each framework in your system is 4-8 LinkedIn posts. Total content reservoir:

| Source | Posts | Format |
|--------|-------|--------|
| PULSO (5 dimensions) | 5 deep-dives + 1 overview | Carousel / long-form |
| ClarQ (4 categories) | 4 scoring breakdowns | Infographic |
| ESCALA (value ladder) | 3-part series | How-to thread |
| 4-Phase Model | 4 phase explainers | Visual framework |
| SONDA (quiz methodology) | 2 tactical posts | Step-by-step |
| ROCA, FLUJO, Alma | 3 methodology reveals | Teaching posts |
| Template showcases | 10+ output examples | Before/after |
| Anti-patterns | 5-7 "what NOT to do" | Contrarian takes |
| **Total reservoir** | **~40 unique posts** | **2+ months daily** |

### Content-to-Product Pipeline

Every piece of content maps to a product entry point:

```
LinkedIn post about PULSO
  → Links to free diagnostic (seed questionnaire)
    → User gets ClarQ score + phase routing
      → Upsell to full report (email capture)
        → Upsell to Starter plan (self-serve)
          → Upsell to Growth/Enterprise (managed)
```

This is not a separate content strategy — it IS the product funnel.
