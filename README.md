# GrowthOS

**AI-native operating system for B2B growth teams. Spanish-first.**

GrowthOS diagnoses where your business is stuck, then automatically activates the right growth methodology to fix it. Instead of choosing from 29 tools, you describe your problem — the system routes you to the exact playbook, generates the deliverables, and tracks your progress through a 90-day roadmap.

Built for B2B founders and revenue teams in LATAM selling $50M+ deals.

---

## What it does

You answer 4 questions about your business. GrowthOS identifies your bottleneck and drops you into one of 4 phases:

| Phase | You say... | GrowthOS does... | You get... |
|-------|-----------|-----------------|-----------|
| **DEFINIR** | "No sé quién es mi cliente ideal" | Runs ICP analysis + competitive mapping | ICP scored 0-100, positioning statement, 3-5 competitor battle cards |
| **ATRAER** | "Nadie me conoce" | Designs funnels + generates content | Value ladder with LTV:CAC, quiz funnel, 12-15 scored headlines, email sequences |
| **CONVERTIR** | "No cierro deals" | Preps discovery calls + scores pipeline | PULSO-scored deals, proposals with trading levers, coaching agendas |
| **ESCALAR** | "Cierro pero no retengo" | Synthesizes playbooks from 31 frameworks | 15-20pp custom playbook, hypothesis cards, measurement plan, customer success ops |

Each phase has measurable exit criteria. When you pass them, you advance to the next phase.

## How it works

```
User → /os (4 questions) → Bottleneck detection → Phase routing
                                                        ↓
                                              Skills auto-activate
                                                        ↓
                                              Deliverables generated
                                                        ↓
                                              GCO saves everything
                                                        ↓
                                              /estado → see progress
                                              /roadmap → 90-day plan
```

**GCO** (GrowthOS Context Object) is the persistent memory per client — it carries your ICP, PULSO scores, completed skills, and generated outputs across sessions.

**PULSO** is the diagnostic language connecting everything: Panorama, Urgencia, Logro, Situacion Critica, Organizacion. Every deal, every pipeline review, every proposal uses PULSO scores.

## The stack

| Layer | What | Tech |
|-------|------|------|
| **Frontend** | Dashboard, diagnostic flow, deliverable viewer | Next.js 14, React 18, Tailwind, shadcn/ui |
| **Backend** | Auth, database, storage | Supabase (PostgreSQL 17) |
| **AI Engine** | Skill execution, agent orchestration | Claude API (Vercel AI SDK + Agent SDK) |
| **Knowledge** | 29 skills, 8 agents, 56 templates, 18 commands | Markdown + YAML frontmatter |

## Quick start

### 1. Clone and install

```bash
git clone <repo-url> && cd growth-marketplace
npm install
cd sdk-app && npm install && cd ..
```

### 2. Set up environment

```bash
# Root app — create .env.local
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54331
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
ANTHROPIC_API_KEY=sk-ant-...

# SDK app
cp sdk-app/.env.example sdk-app/.env
# Edit sdk-app/.env with your ANTHROPIC_API_KEY
```

### 3. Start Supabase (local)

```bash
npx supabase start    # Starts local Supabase (DB on port 54332, API on 54331)
npx supabase db reset  # Run migrations
```

### 4. Run the app

```bash
npm run dev            # Next.js on http://localhost:3000
```

### 5. Use via Claude Code (CLI mode)

The plugin system works directly in Claude Code without the web app:

```bash
# Start GrowthOS intake
/os

# Run specific skills
/icp          # ICP analysis workshop
/diagnostico  # PlainIQ health assessment
/discovery    # PULSO discovery call prep
/playbook     # GTM playbook synthesis

# Check progress
/estado       # Current state
/roadmap      # Generate 90-day plan
```

## 18 commands at a glance

| Command | What it does |
|---------|-------------|
| `/os` | Start intake — diagnose bottleneck, route to phase |
| `/estado` | Show current phase, completed skills, next steps |
| `/roadmap` | Generate 90-day roadmap from current state |
| `/diagnostico` | PlainIQ maturity assessment (GTM, Revenue, Q2C) |
| `/icp` | Interactive ICP definition + scoring (0-100) |
| `/quiz` | Quiz funnel builder (SONDA methodology) |
| `/headline` | Generate 12-15 headlines, scored on 5 dimensions |
| `/copy` | 4-agent copywriting pipeline with A/B variants |
| `/email-sequence` | 5-7 email nurture sequence |
| `/escala` | Value ladder: BAIT → FRONTEND → MIDDLE → BACKEND |
| `/funnel-diagnosis` | Funnel bottleneck analysis + fix priorities |
| `/discovery` | PULSO discovery call prep + hypothesis |
| `/pipeline` | Pipeline health review with PULSO per deal |
| `/propuesta` | Proposal generation (gated: requires PULSO ≥ 23) |
| `/coaching` | Sales coaching session prep (ROCA framework) |
| `/playbook` | Synthesize playbook from 31 frameworks |
| `/deal-analysis` | Win/loss analysis with PULSO patterns |
| `/kickoff` | Customer kickoff + Joint Impact Plan |

## 6 plugins

| Plugin | Skills | Focus |
|--------|--------|-------|
| **growth-foundations** | 6 | ICP, positioning, competitive analysis, PlainIQ diagnostic |
| **sales-blueprint** | 4 | Discovery, pipeline, proposals, coaching |
| **copywriting-engine** | 3 | Headlines, emails, landing pages (4-agent pipeline) |
| **motor-de-ofertas** | 3 | Value ladders, funnels, brand character |
| **play-to-win** | 11 | Sales transformation, CS ops, deal strategy, playbooks |
| **conversational-pm** | 2 | Orchestrator — routes everything, manages state |

## Project structure

```
growth-marketplace/
├── src/                    # Next.js web app
│   ├── app/
│   │   ├── (public)/       # Diagnostic flow, login
│   │   ├── (authenticated)/ # Dashboard, roadmap, skill execution
│   │   └── api/            # Chat, diagnostic, deliverables endpoints
│   ├── components/         # UI (shadcn/ui + GrowthOS custom)
│   └── lib/                # AI integration, Supabase client, utils
├── sdk-app/                # @aihuevos/growthos-sdk (TypeScript)
│   └── src/core/           # Constitution runtime, skill resolver
├── plugins/                # 6 plugins with skills, commands, agents
├── os/                     # GrowthOS orchestrator (phases, intake, governance)
├── supabase/               # DB config + 3 migrations
├── docs/                   # System flow map, second brain, artifacts
└── tools/                  # Plugin factory, ingestion orchestrator
```

## SDK app

The `sdk-app/` package (`@aihuevos/growthos-sdk`) provides the programmatic runtime:

```bash
cd sdk-app
npm run build              # Compile TypeScript
npm test                   # Run all tests (Vitest)
npm run test:unit          # Unit tests only
npm run test:constitutional # Constitution compliance tests
npm run typecheck          # Type checking
```

Requires Node >=22.

## Governance

The **Agentic Constitution** (`os/governance/agentic-constitution.md`) enforces rules on every execution:

- **NEVER rules**: No unsupervised external comms, no PII leaks, no PULSO fabrication
- **Zone classifications**: Green (autonomous-eligible), Yellow (human review), Red (gated + blocked without threshold)
- **Trust graduation**: Skills start at HITL (human approves) → HOTL (autonomous with monitoring) → HOOTL (fully autonomous, rare)
- **Budget guards**: Session limit $2, daily limit $10 (configurable)

## Deeper docs

- [`docs/system-flow-map.md`](docs/system-flow-map.md) — Visual flowcharts of how every command, agent, and skill interconnects
- [`architecture.md`](architecture.md) — Product architecture, gap analysis, MVP build sequence
- [`CLAUDE.md`](CLAUDE.md) — Development guide for Claude Code (conventions, commands, tech stack)
- [`os/growthOS.md`](os/growthOS.md) — Master orchestrator protocol

## Git workflow

- `main` — production
- `development` — integration branch
- Feature branches → merge to `development` → merge to `main`

## License

MIT
