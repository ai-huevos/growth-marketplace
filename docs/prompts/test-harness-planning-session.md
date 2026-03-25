# Test Harness Planning Session

## Context

You are starting a planning session to build an E2E test harness for the AI Huevos Growth Marketplace. This is a content-only repository (Markdown, no code) containing 6 plugins, 31 skills, 13 agents, and 18 commands.

**Goal**: Create a systematic way to test each component with clear inputs, expected outputs, and validation criteria.

---

## System Under Test

```
MARKETPLACE ARCHITECTURE
========================

Layer 4: GOVERNANCE (Not Yet Built)
├── Agentic Constitution
├── Trust Graduation (HITL → HOTL → HOOTL)
├── Budget Guards
└── Quality Gates

Layer 3: ORCHESTRATION
├── GrowthOS Phases: DEFINIR → ATRAER → CONVERTIR → ESCALAR
├── Router: /diagnostico → PlainIQ Score → Phase Assignment
└── PM Agent: conversational-pm orchestrates specialist agents

Layer 2: PROCESS LIBRARY (31 Skills)
├── growth-foundations: icp-analysis, positioning, competitive-analysis, quiz-funnel, content-strategy
├── sales-blueprint: discovery-mastery, pipeline-management, proposal-generation, coaching-cadence
├── copywriting-engine: headline-mastery, email-sequences, landing-pages, psychological-triggers
├── motor-de-ofertas: escala, flujo, alma, funnel-optimization
├── play-to-win: 11 skills (sales-transformation, customer-success-ops, etc.)
└── conversational-pm: project-management

Layer 1: METHODOLOGY
├── PULSO (Panorama, Urgencia, Logro, Situación Crítica, Organización)
├── PlainIQ (GTM, Revenue, Q2C, Capabilities → 0-40 score)
├── ROCA (Results, Objectives, Capabilities, Activities)
└── ESCALA, FLUJO, ALMA, SONDA, PENDIENTE
```

---

## Test Subject

**Company**: TalentFlow
**Type**: HR SaaS
**Location**: México City
**Size**: 50 employees
**ARR**: $2M USD
**Problem**: High churn (8% monthly), weak sales pipeline, no CS ops
**Target Market**: Mid-market Mexican companies (200-1000 employees)

---

## Test Sequence (E2E Customer Journey)

### Phase 0: Entry Point

| Test ID | Command | Input | Expected Output | Validation Criteria |
|---------|---------|-------|-----------------|---------------------|
| T-001 | `/diagnostico` | "TalentFlow: SaaS de RRHH en México, 50 empleados, $2M ARR, 8% churn mensual" | PlainIQ Score + Heatmap + Phase Recommendation | Score is 0-40, heatmap has 4 dimensions, recommends DEFINIR or CONVERTIR phase |
| T-002 | `/os` | Start GrowthOS | Seed questionnaire (4 questions) | Asks company, stage, problem, desired outcome |

### Phase 1: DEFINIR (ICP + Positioning)

| Test ID | Command | Input | Expected Output | Validation Criteria |
|---------|---------|-------|-----------------|---------------------|
| T-003 | `/icp` | "Software de RRHH para empresas mexicanas medianas" | ICP Profile + Score 0-100 + Tier | Has firmographics, psychographics, 3 pain points, buying triggers |
| T-004 | `/quiz` | "Lead magnet para directores de RRHH" | Quiz Blueprint (8 phases) | Has hook, 5-7 questions, 3-5 buckets, CTA per bucket |

### Phase 2: ATRAER (Content + Funnels)

| Test ID | Command | Input | Expected Output | Validation Criteria |
|---------|---------|-------|-----------------|---------------------|
| T-005 | `/headline` | "Reducir rotación de talento en empresas mexicanas" | 12-15 Headlines + Scores | Each headline has score 0-100, variety of formulas |
| T-006 | `/email-sequence` | "Secuencia fría para directores de RRHH" | 5-7 Email Sequence | Has subject lines, body, CTA, timing between emails |
| T-007 | `/escala` | "TalentFlow value ladder" | 4-Tier Value Ladder | Has Free → Frontend → Middle → Backend with prices and LTV:CAC |
| T-008 | `/copy` | "Landing page para demo de TalentFlow" | Full Copy (10 sections) | Runs 4-agent pipeline, returns structured landing page copy |

### Phase 3: CONVERTIR (Sales Execution)

| Test ID | Command | Input | Expected Output | Validation Criteria |
|---------|---------|-------|-----------------|---------------------|
| T-009 | `/discovery` | "Llamada con CEMEX, Director de Capital Humano" | PULSO Hypothesis + AVE Agenda + Questions | Has 5 PULSO dimensions scored, agenda with timing, 10+ discovery questions |
| T-010 | `/pipeline` | "Pipeline de TalentFlow: 12 deals, $500K total" | Health Score + Analysis | Identifies stuck deals, velocity metrics, forecast accuracy |
| T-011 | `/propuesta` | "Propuesta para CEMEX, PULSO score 28" | 8-Section Proposal | Has executive summary, problem, solution, investment, timeline, guarantees |
| T-012 | `/coaching` | "Rep: María, 60% quota, struggles with discovery" | ROCA Diagnosis + Plan | Identifies gap (R/O/C/A), specific coaching actions, 30-day plan |

### Phase 4: ESCALAR (CS + Renewal)

| Test ID | Command | Input | Expected Output | Validation Criteria |
|---------|---------|-------|-----------------|---------------------|
| T-013 | `/kickoff` | "Kickoff call con CEMEX" | Agenda + JIP Template | Has roles, timeline, success metrics, first 30 days |
| T-014 | `/deal-analysis` | "Lost deal: Bimbo, reason unknown" | Win/Loss Analysis | PULSO retrospective, root cause, process improvement |
| T-015 | `/playbook` | "Reducir churn de 8% a 3% en 90 días" | Custom Playbook | Synthesizes from blueprints, has phases, owners, metrics |

---

## Validation Approach

### 1. Schema Validation
Each output must match expected structure. Define JSON schemas for:
- PlainIQ Assessment
- ICP Profile
- PULSO Diagnosis
- Proposal Document
- Playbook

### 2. Content Quality
- Spanish-first (no English mixing)
- Specific to TalentFlow context (not generic)
- References LATAM/Mexican market realities
- Actionable (not theoretical)

### 3. Integration Validation
- T-003 ICP output feeds into T-009 Discovery
- T-009 PULSO score gates T-011 Proposal (must be ≥23)
- T-013 Kickoff requires closed deal from T-011

---

## Test Execution Protocol

```bash
# For each test:
1. Invoke command with specified input
2. Capture full output
3. Validate against criteria
4. Log result: PASS | FAIL | PARTIAL
5. If FAIL: Document deviation and root cause
6. Move to next test only if dependencies pass
```

---

## Deliverables

1. **Test Report** (`docs/test-results/YYYY-MM-DD-e2e-test.md`)
   - Pass/fail for each test
   - Output samples
   - Deviation log

2. **Gap Analysis** (`docs/test-results/YYYY-MM-DD-gaps.md`)
   - Components that failed
   - Missing functionality
   - Recommended fixes

3. **Regression Baseline** (`docs/test-results/baseline/`)
   - Golden outputs for each test
   - Used for future regression testing

---

## Planning Questions

Before executing, clarify:

1. **Scope**: Run all 15 tests or prioritize a subset?
2. **Automation**: Manual testing or build a script runner?
3. **Fixtures**: Use TalentFlow for all tests or vary the test subject?
4. **Governance Tests**: Skip Layer 4 (not built) or mock it?
5. **Parallel vs Sequential**: Can some tests run in parallel?

---

## Start Planning

To begin the planning session, run:

```
Read this prompt and create a detailed execution plan.
Identify which tests can run in parallel.
Estimate time per test.
Flag any blockers or missing dependencies.
```
