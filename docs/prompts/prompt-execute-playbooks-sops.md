# Prompt: Execute Playbooks/SOPs Layer — E-Myth Agentic Architecture

## Context (DO NOT RE-RESEARCH — decisions are final)

We completed a full ingestion triage of 13 marketing playbooks against the Growth Marketplace (5 plugins, 18 skills, 12 commands). Results:

- **8 SKIP**: Playbooks 00 (Skills/HR), 03 (Team Structure), 07 (Internal Marketing), 08→promoted to Moderate SOP, 09 (AI Future — meta/circular), 10→promoted to Moderate SOP, 12 (AI Megaprompts — redundant with existing skills), 13 (B2B Playbook master doc — redundant)
- **5 ENRICH → 7 SOPs**: The enrichments were reframed as executable Playbook/SOPs after ingesting the E-Myth Agentic Evolution document (now in NLM as source `d9a0aaba-b0ed-4bd3-b815-012762cdae54`)
- **Architecture decision**: New `tools/playbooks/` directory with `frameworks/` and `playbooks/` subdirectories
- **SOP format**: Hybrid — Phase Blocks (30-60-90) at top level, with individual steps using the E-Myth Agentic SOP template (YAML with Green/Yellow/Red zones, trigger, escalation criteria, success metrics, failure modes)
- **Location**: `tools/playbooks/` symlinked to `~/.claude/skills/playbooks/`

## E-Myth Agentic SOP Template (from Section 6.2)

Every step in every playbook MUST follow this structure:

```yaml
step:
  name: "Step name"
  zone: yellow  # green | yellow | red
  trigger: "What activates this step"
  agent_config:
    input_schema: [list of inputs]
    decision_logic: "Framework/methodology to apply"
    tool_permissions: [what the agent can access]
    output_format: "Expected output structure"
    confidence_threshold: 0.85
  escalation_criteria:
    - "When to escalate to human"
  success_metrics:
    - metric_name: ">= threshold"
  failure_modes:
    - failure_type: "Recovery action"
```

## Build Priority (strict — dependencies are blocking)

### Phase 1: Cimientos (Leadership & Management)
1. **`revenue-first-objectives.md`** — From Playbook 01. Revenue Pyramid → Balanced Dashboard (4-6 metrics) → Marketing-Sales SLA → Review cadence. Zone: RED/YELLOW. Maps to: Gerber Center I (Leadership). Feeds: `conversational-pm:project-management`.
2. **`revenue-infrastructure.md`** — From Playbook 04b. Measurement audit → Channel audit matrix → Lead scoring (Fit + Intent) → Funnel SLA (MQL→SQL handoff). Zone: GREEN/YELLOW. Maps to: Gerber Center IV (Management) + V (Lead Gen). Feeds: `growth-foundations:icp-analysis`, `sales-blueprint:pipeline-management`.
3. **`strategic-planning-contextual.md`** — From Playbook 02. Resource audit → 3-2-1 Cascade → Feasibility×Impact matrix → 70/30 allocation → Stop-Start-Continue monthly. Zone: RED/YELLOW. Maps to: Gerber Center I/IV. Feeds: `growth-foundations:positioning`.

### Phase 2: Motor de Mensaje (Marketing Core)
4. **`product-marketing-mastery.md`** — From Playbook 05. IPEH cycle (Intelligence→Positioning→Enablement→Launch) → Narrative Hierarchy → 12 Marketable Moments → DACI for launches → Win/Loss analysis. Zone: YELLOW. Maps to: Gerber Center II (Marketing). Feeds: `growth-foundations:positioning`, `sales-blueprint:discovery-mastery`.

### Phase 3: Canales de Ejecución (Lead Gen)
5. **`content-marketing-b2b.md`** — From Playbook 04a. Channel Selection (5-level hierarchy) → 25% Content Portfolio (SEO/Sales Support/Thought Leadership/Culture) → Expert Activation loop → 90-day content machine. Zone: GREEN/YELLOW. Maps to: Gerber Center V (Lead Gen). Feeds: `growth-foundations:content-strategy`, `copywriting-engine`.
6. **`community-building.md`** — From Playbook 08. Audience → Hooks → Community-as-Product pipeline → POV content → Validation framework → 3 growth loops. Zone: YELLOW. Maps to: Gerber Center V. Feeds: `growth-foundations:quiz-funnel`.

### Phase 4: Optimizador (Efficiency)
7. **`solo-marketer-system.md`** — From Playbook 10. Strategic Generalist + AI → Canal Maestro (sequential focus 3-6 months) → Personal Brand amplifier → 70/30 execute/delegate → IA-Human efficiency loop. Zone: YELLOW. Maps to: Gerber Center IV (Management). Feeds: all plugins (meta-orchestration).

## Directory Structure to Create

```
tools/playbooks/
  SKILL.md                                    ← Skill definition with YAML frontmatter
  frameworks/
    emyth-agentic-sop.md                      ← Distilled E-Myth meta-framework
    process-audit-canvas.md                   ← Reusable canvas (Section 8.2)
    zone-classification-guide.md              ← G/Y/R decision criteria
    trust-graduation-protocol.md              ← HITL → HOTL → HOOTL
  playbooks/
    revenue-first-objectives.md               ← Priority 1
    revenue-infrastructure.md                 ← Priority 2
    strategic-planning-contextual.md          ← Priority 3
    product-marketing-mastery.md              ← Priority 4
    content-marketing-b2b.md                  ← Priority 5
    community-building.md                     ← Priority 6
    solo-marketer-system.md                   ← Priority 7
```

## Execution Instructions

1. **Create directory structure**: `tools/playbooks/`, `tools/playbooks/frameworks/`, `tools/playbooks/playbooks/`
2. **Create SKILL.md** with triggers: "run playbook", "SOP for", "ejecutar playbook", "playbook de", "guía de implementación"
3. **Create 4 framework files** by distilling from `docs/second-brain/E-Myth_Agentic_Evolution.md`:
   - `emyth-agentic-sop.md` — Sections 6, 7, 8 distilled (agentic SOP template, franchise prototype, process-to-agent mapping)
   - `process-audit-canvas.md` — Section 8.2 canvas as reusable template
   - `zone-classification-guide.md` — Section 6.1 zones + Section 8.1 Step 3 classification criteria
   - `trust-graduation-protocol.md` — Section 9.2 trust graduation + Section 9.1 autonomy spectrum
4. **Create 7 playbook files** in priority order, each following the Hybrid format:
   - Top section: Metadata (source playbook, Gerber Center, predominant zone, phase, connected skills)
   - Phase 1 (Days 1-30): Foundation — with agentic SOP steps
   - Phase 2 (Days 31-60): Optimization — with agentic SOP steps
   - Phase 3 (Days 61-90): Scale — with agentic SOP steps
   - Each step uses the YAML agentic template
   - Cross-references to marketplace skills via relative paths
   - Spanish-first content
5. **Create symlink**: `ln -s /Volumes/deathstar/Development/growth-marketplace/tools/playbooks ~/.claude/skills/playbooks`
6. **Update registries**:
   - Add playbooks tool to CLAUDE.md tools section
   - Update `docs/template-catalog.md` with 7 new playbook templates
   - Update `docs/second-brain/09-inventario-contenido.md` with new file count
7. **Sync to NLM**: Upload SKILL.md and each playbook to second-brain notebook
8. **Git commit** on `development` branch

## NLM Conversation Context

Two NLM conversations were run that established the architecture:
- Conversation 1 (`261168d6`): Mapped 7 playbooks to Gerber's 7 Centers, identified gaps (Finance, Fulfillment), defined 4-phase build priority
- Conversation 2 (`3aff0dcc`): Generated blueprint table with zones, phases, skill routing, and implementation notes

The E-Myth Agentic Evolution source is in NLM (ID: `d9a0aaba`). Query it for any architectural questions.

## Gaps Identified (Future Phases — DO NOT build now)
- **Lead Conversion SOP**: SDR-to-AE handoff, Objection Handling (partially covered by sales-blueprint agents)
- **Client Fulfillment SOP**: Onboarding, QBR, Customer Health Scoring (no plugin coverage yet)
- **Finance SOP**: Cash Conversion, Budget Guards (partially covered by dotcom-secrets LTV:CAC)

## Quality Gates
- Every playbook file must have at least 8 agentic SOP steps across 3 phases
- Every step must have zone classification (G/Y/R)
- Every playbook must cross-reference at least 1 existing marketplace skill
- All content in Spanish
- Use `ensure_ascii=False` for any JSON
