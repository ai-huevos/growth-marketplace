# GrowthOS Migration — Cloud Agent Execution Plan

> Generated: 2026-02-17 | Phase 1 committed: `a411bc1`
> Plan source: `/Users/tatooine/.claude/plans/luminous-inventing-fox.md`
> Registry: `os/naming/framework-registry.md`

---

## Status

| Phase | Description | Files | Status |
|-------|-------------|-------|--------|
| 1 | PULSO migration (SPICED→PULSO) | 174 | DONE `a411bc1` |
| 2 | Plugin rename: dotcom-secrets → motor-de-ofertas | ~27 | PENDING |
| 3 | P1 skill-level renames (13 terms) | ~80 | PENDING |
| 4 | P2 renames + Content Mavericks cleanup | ~40 | PENDING |
| 5 | GrowthOS foundation layer (os/ directory) | ~10 new | PENDING |
| 6 | PM evolution (single entry point) | ~5 | PENDING |
| 7 | Meeting Intelligence MCP bridge | ~2 new | PENDING |
| 8 | Dog-fooding with AI Huevos | — | PENDING |

---

## Phase 2: Plugin Rename — dotcom-secrets → motor-de-ofertas

**Scope**: 27 files reference "dotcom-secrets" or "dotcom secrets". One directory rename + cross-reference updates.

**Agent instructions**:

1. `git mv plugins/dotcom-secrets plugins/motor-de-ofertas`
2. Update `plugins/motor-de-ofertas/.claude-plugin/plugin.json` — name field → "motor-de-ofertas"
3. Update `.claude-plugin/marketplace.json` — source path + name + description (remove "DotCom Secrets" brand, use "Motor de Ofertas: sistema de escaleras de valor, funnels y personaje de marca para B2B LATAM")
4. Update `CLAUDE.md` — plugin table row (dotcom-secrets → motor-de-ofertas, remove "Russell Brunson" mention)
5. Update `docs/template-catalog.md` — all template rows referencing dotcom-secrets
6. Update all cross-references in other plugins:
   - `grep -ri "dotcom.secrets" plugins/ docs/ tools/ --include="*.md" --include="*.json" -l`
   - Each match: replace path references and brand mentions
7. Remove "Russell Brunson" attributions (6 files) — replace with original descriptions
8. Update `README.md` if it references dotcom-secrets
9. Commit: `feat: rename dotcom-secrets → motor-de-ofertas (Phase 2)`

**Verification**:
```bash
ls plugins/ | grep dotcom     # Must return nothing
ls plugins/ | grep motor      # Must return motor-de-ofertas
grep -ri "dotcom.secrets" . --include="*.md" --include="*.json" | grep -v ".git"  # Must return 0
grep -ri "russell brunson" . --include="*.md" | grep -v ".git"  # Must return 0
```

**Dependencies**: Phase 1 (done)
**Estimated files**: ~27

---

## Phase 3: P1 Skill-Level Renames (13 terms)

**Scope**: 13 third-party terms replaced with original GrowthOS names. ~80 files total. Can be parallelized into 4 independent agent batches.

### Batch 3A: quiz-funnel cluster (ASK Method→SONDA, SMIQ→PREGUNTA RAÍZ)

**Files**: ~25 (14 ASK + 19 SMIQ, overlap)
**Target skills**: `plugins/growth-foundations/skills/quiz-funnel/`

1. Rename file: `frameworks/ask-method-fundamentals.md` → `frameworks/sonda-methodology.md`
2. In ALL files under quiz-funnel/:
   - "ASK Method" → "Metodología SONDA"
   - "Ask Method" → "Metodología SONDA"
   - "ASK" (when referring to the method, not the verb) → "SONDA"
   - "SMIQ" → "PREGUNTA RAÍZ"
   - "Single Most Important Question" → "Pregunta Raíz"
3. Update cross-references in other plugins/docs that mention ASK Method or SMIQ
4. Update `docs/template-catalog.md` entries
5. Update `CLAUDE.md` if it mentions ASK Method
6. Update second-brain docs that reference ASK Method

**Caution**: The English verb "ask" must NOT be replaced. Only "ASK Method" as a proper noun / framework name.

**Verification**:
```bash
grep -ri "ask method" plugins/ docs/ tools/ --include="*.md"  # Must return 0
grep -ri "SMIQ" plugins/ docs/ tools/ --include="*.md"        # Must return 0
grep -ri "SONDA" plugins/ --include="*.md" | wc -l            # Should be 15+
```

### Batch 3B: coaching cluster (REKS→ROCA, Bowtie→CICLO, Recurring Impact→IMPACTO COMPUESTO)

**Files**: ~42 (38 REKS + 12 Bowtie + 2 Recurring Impact, overlap)
**Target skills**:
- `plugins/sales-blueprint/skills/coaching-cadence/`
- `plugins/play-to-win/skills/sales-transformation/`
- `plugins/sales-blueprint/skills/pipeline-management/`
- `plugins/play-to-win/skills/customer-success-ops/`

1. Rename file: `frameworks/reks-framework.md` → `frameworks/roca-framework.md`
2. Replacements:
   - "REKS" → "ROCA"
   - "Results, Effort, Knowledge, Skills" → "Resultados, Operación, Conocimiento, Aptitud"
   - "Bowtie" / "Bow-tie" / "bow tie" → "CICLO"
   - "Bowtie Model" → "Modelo CICLO"
   - "Recurring Impact" → "IMPACTO COMPUESTO"
3. Update all cross-references and registries

**Verification**:
```bash
grep -ri "REKS" plugins/ docs/ --include="*.md"               # Must return 0
grep -ri "bowtie\|bow.tie" plugins/ docs/ --include="*.md"    # Must return 0
grep -ri "recurring impact" plugins/ docs/ --include="*.md"   # Must return 0
```

### Batch 3C: discovery cluster (ACE→AVE)

**Files**: ~24
**Target skills**:
- `plugins/sales-blueprint/skills/discovery-mastery/`
- `plugins/play-to-win/skills/discovery-demo/`
- `plugins/play-to-win/commands/kickoff.md`
- `plugins/play-to-win/skills/customer-success-ops/`

1. Rename file if exists: `frameworks/ace-discovery-call.md` → `frameworks/ave-discovery-call.md`
2. Replacements:
   - "ACE Opening" → "Apertura AVE"
   - "ACE framework" → "Framework AVE"
   - "apertura ACE" → "apertura AVE"
   - "ACE" (when clearly the call opening framework) → "AVE"
   - "Appreciate, Check, End Goal" → "Agradecimiento, Verificación, Expectativas"
   - "A — Appreciate" → "A — Agradecimiento"
   - "C — Check" → "V — Verificación de tiempo"
   - "E — End Goal" → "E — Expectativas"

**Caution**: Only replace ACE when it refers to the call opening framework. Some files use "ACE" followed by the three components (Appreciate/Check/End) — those are clear framework uses. The word "ace" as a general English word must not be touched.

**Verification**:
```bash
grep -ri "ACE opening\|apertura ACE\|Appreciate.*Check.*End" plugins/ docs/ --include="*.md"  # Must return 0
grep -ri "AVE\|apertura AVE\|Agradecimiento.*Verificación.*Expectativas" plugins/ --include="*.md" | wc -l  # Should be 20+
```

### Batch 3D: content + funnel cluster (Soap Opera→ORIGEN, Seinfeld→PULSAR, ISL→VELO, Ski Slope→PENDIENTE, Topic Triangle→TRIÁNGULO DE INGRESOS, Three Jabs→TRIPLE VALOR)

**Files**: ~60 (heavy overlap — these terms cluster in dotcom-secrets and content-strategy)
**Target skills**:
- `plugins/motor-de-ofertas/skills/alma/` (after Phase 2 rename)
- `plugins/motor-de-ofertas/skills/flujo/`
- `plugins/copywriting-engine/skills/landing-pages/`
- `plugins/growth-foundations/skills/content-strategy/`

1. Rename files:
   - Any file named `*soap-opera*` → `*secuencia-origen*`
   - Any file named `*seinfeld*` → `*secuencia-pulsar*`
   - Any file named `*isl*` or `*invisible-sales*` → `*velo*`
   - Any file named `*ski-slope*` → `*pendiente*`
   - Any file named `*topic-triangle*` → `*triangulo-ingresos*`

2. Replacements:
   - "Soap Opera Sequence" → "Secuencia ORIGEN"
   - "soap opera" (as framework name) → "ORIGEN"
   - "Seinfeld Sequence" / "Seinfeld Email" → "Secuencia PULSAR"
   - "seinfeld" (as framework name) → "PULSAR"
   - "ACF" / "Attractive Character Framework" → remove (ALMA already exists)
   - "ISL" / "Invisible Sales Letter" → "VELO"
   - "Ski Slope" / "Ski Slope Strategy" → "PENDIENTE"
   - "Topic Triangle" → "TRIÁNGULO DE INGRESOS"
   - "Three Jabs" / "3 Jabs" → "TRIPLE VALOR"

**IMPORTANT**: This batch depends on Phase 2 (directory is now `motor-de-ofertas/`, not `dotcom-secrets/`).

**Verification**:
```bash
grep -ri "soap opera\|seinfeld\|ski slope\|topic triangle\|three jabs\|invisible sales" plugins/ docs/ --include="*.md"  # Must return 0
```

### Phase 3 Commit
Single commit after all 4 batches: `feat: P1 renames — 13 third-party terms replaced with original GrowthOS names (Phase 3)`

---

## Phase 4: P2 Renames + Content Mavericks Cleanup

**Scope**: ~40 files. Secondary terms + brand attribution removal.

**Replacements**:
| Find | Replace |
|------|---------|
| "$5 Hit Records" | "MICRO-PRESUPUESTO" |
| "Operation Nowhere To Hide" | "OPERACIÓN OMNIPRESENCIA" |
| "Three Brains Model" (CM) | "MODELO TRICORTICAL" |
| "Greatest Hits Survey" | "ENCUESTA DE RESONANCIA" |
| "Present Pain Framework" | "DOLOR PRESENTE" |
| "Hero's Journey" (WbD) | "ARCO DE TRANSFORMACIÓN" |
| "Value Proposition Canvas" | "CANVAS DE PROPUESTA" |
| "SaaS Sales Method" | "MÉTODO DE 7 MOMENTOS" |
| "Joint Impact Plan" / "JIP" | "PLAN DE IMPACTO CONJUNTO" / "PIC" |
| "Wagons" technique | "TÉCNICA DE VAGONES" / "VAGONES" |
| "Content Mavericks" | Remove all brand mentions (14 files) |
| "Russell Brunson" | Remove remaining mentions (if any after Phase 2) |

**Caution with Hero's Journey**: Joseph Campbell's Hero's Journey is public domain. Only replace when it's specifically the WbD-adapted sales version (in product-marketing skill). General storytelling references can stay.

**Caution with JIP**: "Joint Impact Plan" is used extensively in customer-success-ops and kickoff command. Replace the name but keep the JIP abbreviation as PIC (Plan de Impacto Conjunto).

**Dependencies**: Phase 2 + Phase 3
**Commit**: `feat: P2 renames + Content Mavericks cleanup — all third-party IP removed (Phase 4)`

**Final IP verification** (must ALL return 0):
```bash
grep -ri "spiced\|winning by design\|russell brunson\|ask method\|content mavericks" plugins/ docs/ tools/ --include="*.md" | grep -v ".git"
grep -ri "dotcom.secrets\|soap opera\|seinfeld\|ski slope\|topic triangle" plugins/ docs/ tools/ --include="*.md" | grep -v ".git"
grep -ri "\bREKS\b\|bowtie\|bow.tie\|\bISL\b\|invisible sales\|\bSMIQ\b" plugins/ docs/ tools/ --include="*.md" | grep -v ".git"
```

---

## Phase 5: GrowthOS Foundation Layer

**Scope**: Create the `os/` directory tree — the need-driven facade over plugins.

**New files to create**:

```
os/
  growthOS.md                    ← Master orchestrator protocol
  naming/
    framework-registry.md        ← Already exists (Phase 1)
  phases/
    definir.md                   ← Phase 1: Identity, ICP, positioning
    atraer.md                    ← Phase 2: Content, funnels, lead gen
    convertir.md                 ← Phase 3: Discovery, pipeline, proposals
    escalar.md                   ← Phase 4: CS, renewal, coaching, transformation
  intake/
    seed-questionnaire.md        ← 4 seed data points conversational protocol
    context-object.md            ← GrowthOS Context Object (GCO) schema
  bridges/
    meeting-intelligence.md      ← MCP bridge to Meeting OS
```

**Key content for each file**:

### `os/growthOS.md` — Master Orchestrator
- Defines the 4-phase model (DEFINIR → ATRAER → CONVERTIR → ESCALAR)
- Routes user intent to the correct phase
- References `intake/seed-questionnaire.md` for new users
- References `phases/*.md` for phase-specific skill activation
- Defines GCO (GrowthOS Context Object) schema

### `os/phases/definir.md`
- User signals: "No sé quién es mi cliente", "cómo posicionarme", "mi competencia"
- Skills activated: icp-analysis, icp-tal, positioning, competitive-analysis, product-marketing, alma
- Entry criteria: Seed data collected
- Exit criteria: ICP validated, positioning statement, competitive landscape mapped

### `os/phases/atraer.md`
- User signals: "Nadie me conoce", "qué contenido crear", "necesito un funnel"
- Skills activated: content-strategy, quiz-funnel (SONDA), escala, flujo, headline-mastery, landing-pages
- Entry criteria: ICP + positioning from DEFINIR
- Exit criteria: Content plan, funnel architecture, lead magnet live

### `os/phases/convertir.md`
- User signals: "No cierro deals", "mejorar mi pipeline", "preparar llamada"
- Skills activated: discovery-mastery, discovery-demo, pipeline-management, proposal-generation, deal-strategy, relationship-mapping, pre-discovery-research, advanced-techniques, email-sequences, psychological-triggers
- Entry criteria: Leads entering pipeline
- Exit criteria: Win rate improved, deal velocity increased

### `os/phases/escalar.md`
- User signals: "Cierro pero no retengo", "renovar cuentas", "mejorar equipo"
- Skills activated: customer-success-ops, renewal-expansion, coaching-cadence, sales-transformation, customer-journey, funnel-optimization
- Entry criteria: Customers onboarded
- Exit criteria: NRR >100%, churn reduced, team capability scored

### `os/intake/seed-questionnaire.md`
- 4 seed data points (firmográfico, oferta, dolor, activos)
- Conversational format (not form)
- Derives: growth_stage, icp_draft, bottleneck, team_constraints, asset_inventory
- Routes to first phase based on bottleneck

### `os/intake/context-object.md`
- GCO YAML schema definition
- Fields: company, pulso, phase, completed_skills, outputs, meeting_data
- How GCO persists across sessions
- How GCO connects to Meeting Intelligence UCO

**Dependencies**: Phases 2-4 (all names must be final before writing orchestrator)
**Commit**: `feat: create GrowthOS foundation layer — os/ directory with orchestrator + 4 phases (Phase 5)`

---

## Phase 6: PM Evolution (Single Entry Point)

**Scope**: Restructure conversational-pm to be the marketplace's front door.

**Files modified**:
1. `plugins/conversational-pm/skills/project-management/SKILL.md` — Promote diagnostic logic as primary, expand routing table to ALL 29 skills
2. `plugins/conversational-pm/skills/project-management/frameworks/growth-diagnostic-router.md` — Update with complete routing table (see plan Phase 6)

**New files**:
3. `plugins/conversational-pm/commands/os.md` — `/os` command: Start GrowthOS intake
4. `plugins/conversational-pm/commands/roadmap.md` — `/roadmap` command: Generate/update 90-day roadmap
5. `plugins/conversational-pm/commands/estado.md` — `/estado` command: Show current state

**Dependencies**: Phase 5 (needs GrowthOS structure to reference)
**Commit**: `feat: PM evolution — /os, /roadmap, /estado commands + full routing table (Phase 6)`

---

## Phase 7: Meeting Intelligence MCP Bridge

**Scope**: Document how Meeting Intelligence MCP connects to GrowthOS.

**File**: `os/bridges/meeting-intelligence.md`

**Content**:
- MCP server architecture (FastMCP on Meeting Intelligence repo)
- Available tools: `search_transcripts`, `get_transcript`, `trigger_agent_workflow`
- Phase-to-MCP mapping (which GrowthOS phases use which MCP tools)
- UCO → GCO bridge (Universal Context Object → GrowthOS Context Object field mapping)
- Setup instructions for enabling the bridge

**Dependencies**: Phase 5 (needs GCO schema)
**Commit**: `feat: Meeting Intelligence MCP bridge documentation (Phase 7)`

---

## Phase 8: Dog-Fooding with AI Huevos

**Scope**: End-to-end validation using real client data.

1. Run `/os` intake with AI Huevos seed data (from `clients/ai-huevos/`)
2. Verify PULSO diagnosis works end-to-end
3. Verify routing activates correct skills
4. Test output chaining: ICP → positioning → ESCALA → content → copy → discovery
5. Test Meeting Intelligence MCP bridge (if server running)
6. Update `clients/ai-huevos/growthOS-context.md` with results
7. Create second-brain doc `26-growthOS-architecture.md` → push to NLM
8. Final registry sync: `CLAUDE.md`, `marketplace.json`, `template-catalog.md`, all READMEs
9. Document findings in `docs/execution-log.md`

**Dependencies**: Phases 5-7 complete
**This phase is interactive** — not suitable for fully autonomous agents

---

## Execution Order & Parallelization

```
Phase 1 ✅ DONE (a411bc1)
   │
   ▼
Phase 2 (dotcom-secrets → motor-de-ofertas)     ← 1 agent, ~30 min
   │
   ├──► Phase 3A (ASK→SONDA, SMIQ→PREGUNTA RAÍZ)  ← 1 agent
   ├──► Phase 3B (REKS→ROCA, Bowtie→CICLO)         ← 1 agent
   ├──► Phase 3C (ACE→AVE)                          ← 1 agent
   │     (3A, 3B, 3C can run in parallel)
   │
   ▼
Phase 3D (content cluster — needs motor-de-ofertas/) ← 1 agent, after Phase 2
   │
   ▼
Phase 4 (P2 renames + CM cleanup)                   ← 1 agent, after Phase 3
   │
   ▼
Phase 5 (GrowthOS os/ layer)                        ← 1 agent, after Phase 4
   │
   ├──► Phase 6 (PM evolution)                      ← 1 agent
   ├──► Phase 7 (MCP bridge doc)                    ← 1 agent
   │     (6 + 7 can run in parallel)
   │
   ▼
Phase 8 (Dog-fooding — interactive, human-in-loop)
```

**Optimal agent count**: 4 waves
- Wave 1: Phase 2 (1 agent)
- Wave 2: Phase 3A + 3B + 3C (3 agents parallel)
- Wave 3: Phase 3D → Phase 4 → Phase 5 (sequential, 1 agent)
- Wave 4: Phase 6 + 7 (2 agents parallel)
- Wave 5: Phase 8 (interactive session)

---

## Registry Files to Update After Each Phase

Every phase must update these files if affected:
- `.claude-plugin/marketplace.json`
- `CLAUDE.md` (plugin table, commands table, patterns section)
- `docs/template-catalog.md`
- Plugin-specific `README.md` files
- `os/naming/framework-registry.md` (mark terms as DONE)
- Second-brain docs referencing changed terms

---

## Git Strategy

- All work on `development` branch
- One commit per phase (or per batch within Phase 3)
- Push after each commit
- No force pushes
- Commit message format: `feat: <phase description> (Phase N)`
