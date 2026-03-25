# GrowthOS Product Design

## Design Philosophy

**Diagnostic-first, not tool-first.** Every screen answers "where am I?" before "what can I do?" The UI mirrors the 4-phase model: users always see their position in the growth journey.

**The system thinks, you decide.** GrowthOS doesn't present 31 skills and say "pick one." It diagnoses, recommends, and executes — but the user always approves before action. Trust is built through transparency of reasoning, not feature overload.

**Enterprise LATAM aesthetic.** Not Silicon Valley minimalism. Not Latin American maximalism. Professional warmth: structured enough for $50M+ executives, human enough to not feel like enterprise software. Spanish-first in every label, CTA, and error message.

---

## User Journey Map

### Journey 1: First Touch → Diagnostic → Lead Capture

```
Anonymous Visitor
│
├── 1. Landing Page
│   "¿En qué fase de crecimiento está tu empresa?"
│   Hero: the 4-phase visual (DEFINIR → ATRAER → CONVERTIR → ESCALAR)
│   CTA: "Diagnóstico gratuito — 2 minutos"
│
├── 2. Diagnostic Flow (NO auth required)
│   4 questions from seed questionnaire
│   Conversational UI — one question per screen
│   Progress bar showing 4 steps
│   Each answer animates into the next question
│
├── 3. Results Screen (email-gated)
│   "Tu empresa está en la fase: [ATRAER]"
│   PlainIQ score visualization (0-40 heatmap)
│   PULSO spider chart (5 dimensions)
│   3 specific recommendations
│   CTA: "Ingresa tu email para recibir el reporte completo"
│
├── 4. Email Capture → Full Report (PDF)
│   Branded PDF with:
│   - PlainIQ score breakdown by category
│   - Phase diagnosis with reasoning
│   - Top 3 recommended actions
│   - "Powered by GrowthOS" branding
│
└── 5. Upsell Screen
    "Tu roadmap de 90 días está listo. Actívalo."
    Show preview of roadmap (blurred/partial)
    CTA: "Comenzar con GrowthOS — desde $500/mes"
```

### Journey 2: Authenticated User → Dashboard → Execution

```
Logged-in User
│
├── 1. Dashboard (Home)
│   Current phase highlighted in the 4-phase bar
│   GCO summary: company, phase, PULSO scores
│   Next recommended action (the ONE thing to do now)
│   Recent deliverables
│   90-day roadmap progress
│
├── 2. Phase Workspace
│   Skills available for current phase
│   Each skill shows: name, description, estimated time, deliverable type
│   Completed skills greyed with green check
│   Active skill highlighted with "Ejecutar" button
│
├── 3. Skill Execution (AI Chat)
│   Conversational interface
│   GrowthOS asks questions (PULSO discovery, SONDA quiz, etc.)
│   User answers, system builds deliverable in real-time
│   Preview panel shows deliverable forming
│   "Generar" button to finalize
│
├── 4. Deliverable View
│   Generated output in formatted view
│   Download options: PDF, DOCX, Markdown
│   Quality score (benchmark met / not met)
│   "Iterar" button to refine with AI
│
└── 5. Roadmap View
    90-day timeline
    Milestones tied to phase transitions
    Current position highlighted
    Upcoming actions with dates
    Phase transition celebrations (progress moments)
```

### Journey 3: Enterprise Client → Managed Experience

```
Enterprise User ($5K-8K/month)
│
├── Everything from Journey 2, PLUS:
│
├── 1. Strategy Queue
│   Requests submitted by client
│   Status tracking (received → in progress → review → delivered)
│   You (the founder) execute using the plugin system
│   Client sees deliverables appear in their dashboard
│
├── 2. Monthly Review Dashboard
│   Phase progress this month
│   Deliverables generated
│   PULSO score changes over time
│   Recommended adjustments to roadmap
│
└── 3. Direct Channel
    In-app messaging (or Slack integration)
    Context-aware — messages include GCO state
```

---

## Screen Specifications

### S1: Landing Page

**Purpose:** Convert anonymous visitors into diagnostic participants.

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo: GrowthOS]                    [Iniciar sesión]       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │   Tu empresa tiene un bottleneck de crecimiento.    │    │
│  │   Descúbrelo en 2 minutos.                          │    │
│  │                                                     │    │
│  │   [ Diagnóstico Gratuito →  ]                       │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│  │DEFINIR │→ │ ATRAER │→ │CONVERTIR│→ │ESCALAR │            │
│  │        │  │        │  │         │  │        │            │
│  │¿Quién  │  │¿Cómo   │  │¿Cómo    │  │¿Cómo   │            │
│  │ soy?   │  │ llego? │  │ cierro? │  │retengo?│            │
│  └────────┘  └────────┘  └─────────┘  └────────┘            │
│                                                             │
│  Social Proof: logos of industries served                    │
│  "Para equipos B2B en LATAM que facturan $50M+"             │
│                                                             │
│  ── HOW IT WORKS (3 steps) ──                               │
│  1. Diagnosticamos tu situación (2 min, gratis)             │
│  2. Te mostramos tu fase y tu roadmap                       │
│  3. Ejecutamos con IA + metodología probada                 │
│                                                             │
│  ── WHAT YOU GET (deliverable examples) ──                  │
│  [Screenshot: ICP Scorecard]                                │
│  [Screenshot: PULSO Discovery Report]                       │
│  [Screenshot: 90-Day Roadmap]                               │
│                                                             │
│  ── PRICING ──                                              │
│  [Diagnóstico: Gratis] [Starter: $500] [Growth: $2K]       │
│                                                             │
│  [ Comenzar Diagnóstico Gratuito → ]                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Key design decisions:**
- No feature list. Problem → diagnosis → solution.
- The 4-phase visual IS the value proposition. Users see the journey, not tools.
- "2 minutos" and "gratis" remove friction. Enterprise buyers still want low-commitment entry.
- Deliverable screenshots prove output quality — show the work, not the tool.

### S2: Diagnostic Flow

**Purpose:** Qualify the lead while delivering immediate value.

```
┌─────────────────────────────────────────────────────┐
│  [Progress: ●●○○ — Pregunta 2 de 4]                │
│                                                     │
│                                                     │
│    ¿Cuál es tu mayor frustración hoy en             │
│    el área comercial?                               │
│                                                     │
│    ┌─────────────────────────────────────┐          │
│    │ No generamos suficientes leads      │          │
│    └─────────────────────────────────────┘          │
│    ┌─────────────────────────────────────┐          │
│    │ Generamos leads pero no cierran     │          │
│    └─────────────────────────────────────┘          │
│    ┌─────────────────────────────────────┐          │
│    │ Cerramos pero perdemos clientes     │          │
│    └─────────────────────────────────────┘          │
│    ┌─────────────────────────────────────┐          │
│    │ No tenemos claro nuestro ICP        │          │
│    └─────────────────────────────────────┘          │
│                                                     │
│                                                     │
│  [← Anterior]                                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Design rules:**
- One question per screen. No scrolling. No overwhelm.
- Answer options are cards, not radio buttons. Bigger tap targets, mobile-friendly.
- Each answer maps directly to a phase (the user doesn't see this mapping).
- Transition animation: card slides out, next question fades in. Feels conversational.
- No "submit" button — selecting an answer auto-advances (with brief delay for confirmation feel).
- Progress indicator is dots, not percentage. Less anxiety.

### S3: Results Screen

**Purpose:** Deliver value AND capture the lead.

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Tu empresa está en la fase:                        │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │                                             │    │
│  │         ██  ATRAER  ██                      │    │
│  │                                             │    │
│  │  "Tu producto funciona. Tu pipeline no."    │    │
│  │                                             │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  ── Tu Diagnóstico PlainIQ ──                         │
│  ┌────────────────────────────────────────┐         │
│  │ GTM Strategy    ████████░░  72/100     │         │
│  │ Revenue Engine  ████░░░░░░  38/100     │ ← weak │
│  │ Quote-to-Cash   ██████░░░░  55/100     │         │
│  │ Capabilities    █████████░  85/100     │         │
│  └────────────────────────────────────────┘         │
│                                                     │
│  ── Tu PULSO (Vista Rápida) ──                      │
│  [Spider chart: 5 dimensions, colored by health]    │
│                                                     │
│  ── Tus 3 Acciones Prioritarias ──                  │
│  1. Definir tu content strategy (atraer leads)      │
│  2. Construir tu ESCALA de valor (monetizar)        │
│  3. Activar quiz funnels (calificar automático)     │
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │  📧 Recibe tu reporte completo              │    │
│  │  [email@empresa.com        ] [Enviar →]     │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  El reporte incluye: diagnóstico detallado,         │
│  benchmarks de tu industria, y tu roadmap de        │
│  90 días personalizado.                             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Design decisions:**
- Phase name is the hero. Big, bold, immediately clear.
- The tagline below the phase name is emotionally resonant (not technical).
- PlainIQ bars use color coding: green (>70), yellow (40-70), red (<40).
- The weakest dimension is visually highlighted — that's where the pain is.
- Email gate comes AFTER delivering real value. User already got their diagnosis.
- The 3 actions are specific, not generic. Each maps to a skill in the system.

### S4: Dashboard

**Purpose:** Show progress, recommend next action, celebrate wins.

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  Dashboard  Fase  Entregables  Roadmap  [Config ⚙] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Buenos días, [Nombre] — [Empresa]                          │
│                                                             │
│  ── Tu Fase Actual ──                                       │
│  [DEFINIR ✓] → [ATRAER ●] → [CONVERTIR ○] → [ESCALAR ○]   │
│                                                             │
│  ┌──────────────────────────────────────────────┐           │
│  │  🎯 Tu Siguiente Acción                      │           │
│  │                                              │           │
│  │  Crear tu Content Strategy                    │           │
│  │  Skill: content-strategy (growth-foundations) │           │
│  │  Tiempo estimado: 20 minutos                  │           │
│  │  Entregable: Content Plan con 20 topics       │           │
│  │                                              │           │
│  │  [ Ejecutar → ]                               │           │
│  └──────────────────────────────────────────────┘           │
│                                                             │
│  ── Progreso Este Mes ──                                    │
│  Skills completados: 3/7 en fase ATRAER                     │
│  Entregables generados: 5                                   │
│  Próximo hito: Fase CONVERTIR (2 skills restantes)          │
│                                                             │
│  ── Últimos Entregables ──                                  │
│  ┌──────────┬──────────┬──────────┐                         │
│  │ICP Score │ESCALA    │Quiz      │                         │
│  │card      │Ladder    │Funnel    │                         │
│  │✓ 92/100  │✓ 88/100  │✓ 95/100  │                         │
│  │Mar 15    │Mar 12    │Mar 10    │                         │
│  └──────────┴──────────┴──────────┘                         │
│                                                             │
│  ── PULSO Health ──                                         │
│  [Spider chart with trend arrows: ↑ or ↓ vs last month]    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Design decisions:**
- ONE next action, not a menu of options. The system decides, the user executes.
- Phase progress bar is always visible — users need to see the journey.
- Deliverable cards show quality scores. Builds trust in the system's output.
- PULSO chart shows trends over time — cumulative intelligence is visible.
- "Ejecutar" is the primary CTA. Everything points toward action.

### S5: Skill Execution

**Purpose:** Conversational AI execution with real-time deliverable preview.

```
┌─────────────────────────────────────────────────────────────┐
│  ← Dashboard    Content Strategy    [Fase: ATRAER]         │
├────────────────────────────┬────────────────────────────────┤
│                            │                                │
│  CONVERSACIÓN              │  ENTREGABLE (preview)          │
│                            │                                │
│  GrowthOS:                 │  Content Plan                  │
│  "Vamos a construir tu     │  ─────────────                 │
│  plan de contenido. Tu     │                                │
│  PULSO muestra que la      │  Pilares Temáticos:            │
│  urgencia de tu audiencia  │  1. [generando...]             │
│  está en: reducir costos   │  2. [generando...]             │
│  operativos.               │                                │
│                            │  Topics Priorizados:           │
│  ¿Cuáles son los 3         │  (aparecerán aquí)             │
│  problemas más frecuentes  │                                │
│  que tus clientes te       │  Calendario:                   │
│  mencionan en la primera   │  (aparecerá aquí)              │
│  reunión?"                 │                                │
│                            │                                │
│  [Escribir respuesta...]   │                                │
│                            │                                │
│  ─────────────────         │                                │
│  Progreso: 2/5 preguntas   │  [ Descargar PDF ]             │
│                            │  [ Iterar con IA ]             │
│                            │                                │
├────────────────────────────┴────────────────────────────────┤
│  PULSO Context: Panorama ██░ | Urgencia ████ | Logro ███░   │
└─────────────────────────────────────────────────────────────┘
```

**Design decisions:**
- Split panel: conversation left, deliverable preview right.
- The AI references GCO state in its questions (PULSO scores inform the conversation).
- Deliverable builds in real-time as the conversation progresses.
- PULSO context bar at the bottom — always visible, grounds the conversation.
- Progress indicator shows how many questions remain (reduces anxiety).
- Mobile: stacks vertically — conversation on top, deliverable preview as expandable panel below.

---

## Design System

### Color Palette

```
Primary:     #1E3A5F (Navy)        — Headers, primary actions
Secondary:   #2E86AB (Teal)        — Phase highlights, progress indicators
Accent:      #F18F01 (Amber)       — CTAs, alerts, active states
Success:     #2D6A4F (Forest)      — Completed phases, benchmark met
Warning:     #E07A1C (Orange)      — Approaching limits, attention needed
Danger:      #C1292E (Crimson)     — Failed benchmarks, critical alerts
Background:  #F8F9FA (Light gray)  — Page background
Surface:     #FFFFFF (White)       — Cards, panels
Text:        #1A1A2E (Near-black)  — Body text
Text-muted:  #6C757D (Gray)       — Secondary text, labels

Phase Colors:
  DEFINIR:    #6366F1 (Indigo)
  ATRAER:     #2E86AB (Teal)
  CONVERTIR:  #F18F01 (Amber)
  ESCALAR:    #2D6A4F (Forest)
```

### Typography

```
Headings:  Inter (700, 600)
Body:      Inter (400)
Mono:      JetBrains Mono (for scores, data)
Sizes:     Hero: 48px | H1: 32px | H2: 24px | H3: 20px | Body: 16px | Small: 14px
```

### Component Library

Built on shadcn/ui (Next.js native). Key components:

- **PhaseBar** — Horizontal 4-phase progress indicator. Always visible in dashboard.
- **DiagnosticCard** — Question card with selectable options. One per screen.
- **ScoreBar** — Horizontal bar chart for PlainIQ scores. Color-coded by threshold.
- **SpiderChart** — PULSO 5-dimension radar chart. Shows current + trend.
- **DeliverableCard** — Thumbnail + title + quality score + date. Grid layout.
- **ActionCard** — Highlighted next action with skill info + "Ejecutar" CTA.
- **ChatPanel** — Left panel for conversational AI. Message bubbles + input.
- **PreviewPanel** — Right panel for real-time deliverable preview.
- **RoadmapTimeline** — Vertical timeline with milestones and phase transitions.

### Responsive Strategy

```
Desktop (>1024px):   Full layout, split panels, side navigation
Tablet (768-1024px): Stacked panels, top navigation, collapsible sidebar
Mobile (<768px):     Single column, bottom navigation, expandable sections
```

The diagnostic flow is optimized for mobile first — it's the primary lead capture surface and social traffic is mobile-dominant.

---

## Content Strategy Integration Points

### Where Content Lives in the Product

Every piece of content has a dual purpose — it works as standalone marketing AND as in-product education.

| Product Location | Content Function | Marketing Use |
|-----------------|-----------------|---------------|
| Landing page hero | Value proposition | LinkedIn post images |
| Diagnostic questions | Lead qualification | Social quiz teasers |
| Results page | Personalized diagnosis | "Take the quiz" CTA posts |
| Phase descriptions | Product education | Blog post series (4 posts) |
| Skill explanations | Feature documentation | Methodology deep-dives |
| Deliverable previews | Output proof | Before/after case studies |
| Roadmap view | Progress visualization | "Week 1 results" social proof |
| PULSO spider chart | Health visualization | Benchmark reports by industry |

### Embeddable Content Components

These components render both inside the product AND as embeddable widgets for external content:

```
1. DIAGNOSTIC WIDGET (embed on any page)
   <iframe src="growthos.ai/embed/diagnostic" />
   Runs the 4-question diagnostic, captures lead
   Partner sites, guest blog posts, LinkedIn articles

2. PHASE BADGE (embed in email signatures, LinkedIn)
   <img src="growthos.ai/badge/{org_id}" />
   Shows current phase — "Empresa X está en fase CONVERTIR"
   Social proof + conversation starter

3. PULSO CHART (embed in reports, presentations)
   <iframe src="growthos.ai/embed/pulso/{org_id}" />
   Live spider chart of commercial health
   Client QBRs, board presentations

4. SCORE CARD (shareable on social)
   growthos.ai/score/{diagnostic_id}
   Public results page (anonymized)
   "Mi empresa sacó 72/100 en GTM Strategy"
   Viral mechanic — users share their score
```

### Social Content Extraction Map

Every methodology in the system generates content:

```
PULSO (5 posts minimum)
├── Post 1: "Las 5 dimensiones de la salud comercial" (framework overview)
├── Post 2: "Panorama — ¿Realmente conoces tu mercado?" (dimension deep-dive)
├── Post 3: "Urgencia — Cómo leer las señales de compra" (tactical)
├── Post 4: "Tu PULSO score te dice más que tu pipeline" (contrarian take)
└── Post 5: "Mide esto cada trimestre o pierde clientes" (CTA to diagnostic)

4-Phase Model (4 posts)
├── Post 1: "Los 4 bottlenecks del crecimiento B2B" (framework reveal)
├── Post 2: "¿Por qué tu marketing no genera pipeline?" (ATRAER pain)
├── Post 3: "El error de vender antes de definir" (DEFINIR insight)
└── Post 4: "Customer Success no es un departamento" (ESCALAR provocative)

PlainIQ Diagnostic (3 posts)
├── Post 1: "Score your GTM strategy in 2 minutes" (CTA to tool)
├── Post 2: "Most B2B companies score below 50/100" (benchmark data)
└── Post 3: "The 4 dimensions enterprises get wrong" (educational)

Templates/Deliverables (ongoing)
├── "This is what an AI-generated ICP scorecard looks like" (screenshot)
├── "Your content plan in 20 minutes, not 20 days" (before/after)
├── "We generated a PULSO discovery report. Here's what it found." (case study)
└── [Repeat for each of the 56 templates — infinite content]
```

---

## Implementation Priority

### What to Build First (Phase 1 — No Code)

1. **Typeform diagnostic** (seed questionnaire, 4 questions) — Day 1
2. **Branded PDF report template** (PlainIQ + phase + 3 actions) — Day 2-3
3. **Landing page** (Carrd or Framer, single page) — Day 3-4
4. **Notion client dashboard template** — Day 5
5. **First 5 LinkedIn posts** from the content reservoir — Day 6-7

### What to Build Second (Phase 2 — MVP Code)

1. **Diagnostic flow** as interactive web page (the highest-traffic, highest-conversion asset)
2. **Results screen** with email capture
3. **Dashboard** with phase bar + next action
4. **One skill execution flow** (pick the most impressive deliverable — probably content-strategy or ICP scoring)
5. **Stripe billing** for Starter tier

### What to Build Last (Phase 3 — Full Product)

1. All 31 skills wired to AI execution
2. Full GCO state management
3. Roadmap view with timeline
4. Enterprise tier features
5. Integrations (CRM, email, calendar)
