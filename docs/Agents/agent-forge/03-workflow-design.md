# Workflow Design Playbook

## Purpose
Design the phase workflow for a generated agent — name phases, define inputs/outputs/gates, handle branching and error conditions. The workflow is the agent's operating system; every other design decision follows from it.

---

## Phase Design Rules

### Rule 1: Every Phase Has Four Components

```
Phase N: [Name]
├── Input:  What this phase receives (from user or previous phase)
├── Process: What this phase does (consult playbook, apply framework, transform data)
├── Output:  What this phase produces (structured artifact, decision, score)
└── Gate:    What must be true to advance (user approval, quality threshold, data completeness)
```

No component may be omitted. If a phase has no gate, it's not a phase — it's a step within another phase.

### Rule 2: Phases Are Named with Verbs

Good: Categorize, Extract, Analyze, Construct, Shard, Evaluate, Validate, Synthesize
Bad: Introduction, Overview, Setup, Miscellaneous, Other

The phase name tells the user what the agent is DOING in this phase.

### Rule 3: Maximum 8 Phases

If more than 8 phases are needed:
- Merge phases that share the same gate (they're really sub-steps of one phase)
- Split into multiple agents (the domain is too broad)
- Promote some phases to "steps within a phase" in the playbook

### Rule 4: First Phase Is Always Intake/Categorize

The first phase establishes context. Before the agent transforms anything, it must understand what it's working with. Common first phases:
- Categorize (classify the input type to adjust downstream behavior)
- Intake (gather missing information from the user)
- Validate Input (check input quality before processing)

### Rule 5: Last Phase Is Always Evaluate/Deliver

The last phase ensures output quality before handoff. Never let an agent deliver without scoring its own output.

---

## Gate Design

### Gate Types

| Gate Type | When to Use | How It Works |
|-----------|------------|-------------|
| **User Approval** | Human judgment required | Agent presents output, waits for explicit "approved" or feedback |
| **Quality Threshold** | Automated quality check | Agent scores output, proceeds if ≥ threshold, iterates if below |
| **Completeness Check** | Data must be sufficient | Agent verifies all required fields are populated before advancing |
| **Classification Fork** | Behavior changes based on type | Agent classifies input, adjusts downstream phases accordingly |

### Gate Placement Strategy

**Place gates where bad output is most expensive to fix later.**

Heuristic:
1. After extraction/parsing — verify the agent understood the input correctly BEFORE building on it.
2. After the core transform — verify the main deliverable before decomposing or extending.
3. Before delivery — final quality check.

**Minimum gates:** 2 (one after extraction, one before delivery).
**Typical gates:** 3-4 for a 6-8 phase workflow.
**Maximum gates:** One per phase (but this slows the user significantly — use sparingly).

---

## Workflow Patterns

### Pattern 1: Funnel (Most Common)
Wide input → progressive narrowing → focused output.

```
[Raw Input] → [Extract All Signals] → [Filter/Prioritize] → [Construct Focused Output] → [Evaluate]
```

Use when: The agent's job is to find the signal in the noise. Meeting transcripts → PRD, code → audit report, data → insights.

### Pattern 2: Scaffold
Build up layer by layer, each layer depending on the previous.

```
[Foundation] → [Structure] → [Detail] → [Polish] → [Evaluate]
```

Use when: The agent builds a complex artifact where sequence matters. Architecture docs, business plans, curriculum design.

### Pattern 3: Decompose
Take a monolith and break it into parts.

```
[Monolith Input] → [Analyze Structure] → [Identify Boundaries] → [Decompose] → [Validate Parts] → [Deliver]
```

Use when: The agent's job is to break things down. PRD → Epics, monolith → microservices, strategy → tactics.

### Pattern 4: Transform + Branch
Process differently based on classification.

```
[Input] → [Classify] → Branch:
  ├── Type A: [Phase A1] → [Phase A2] → [Merge]
  ├── Type B: [Phase B1] → [Phase B2] → [Merge]
  └── Type C: [Phase C1] → [Merge]
→ [Evaluate] → [Deliver]
```

Use when: The same agent handles different input types with different processes. The categorization-rules pattern from meeting-to-prd.

---

## Input/Output Contracts Between Phases

Every phase must define its output in enough detail that the next phase knows exactly what it receives.

**Output contract format:**
```markdown
### Phase N Output Contract

**Artifact:** [Name of the output document/structure]
**Format:** [Markdown sections | JSON | Table | List]
**Required fields:**
- [Field 1]: [Type, description]
- [Field 2]: [Type, description]
**Quality requirements:**
- [All fields populated | No TBD without justification | Specific quality bar]
```

Contracts prevent "context telephone" — where information degrades as it passes between phases because the handoff is informal.

---

## Error Handling Design

Every workflow needs error handling for these scenarios:

### 1. Ambiguous Input
**Default:** Flag as GAP, ask user to resolve. Do not guess.
**When to deviate:** If the domain has standard defaults for ambiguous cases, apply the default and note it was applied.

### 2. Insufficient Input
**Default:** List what's missing, ask user to supply. Do not fabricate.
**When to deviate:** If the domain has reasonable "not applicable" defaults, apply them with explicit marking.

### 3. Conflicting Information
**Default:** Capture both positions, surface conflict to user for resolution.
**When to deviate:** If the domain has a precedence hierarchy (e.g., regulatory trumps preference), apply it automatically.

### 4. Gate Failure
**Default:** Do not advance. Present the failing criteria and specific remediation steps.
**When to deviate:** If the failure is minor and the user explicitly overrides, proceed with a warning annotation on the output.

### 5. Quality Below Threshold
**Default:** Iterate up to 3 times. If still below threshold, present with known issues flagged.
**When to deviate:** Never. Quality below threshold should always be visible to the user.

---

## Workflow Documentation Format

Document the designed workflow in this format for inclusion in the Architecture Spec:

```markdown
## Phase Workflow

### Phase 1: [Name]
- **Input:** [What it receives]
- **Process:** Consult [playbook]. [What it does — 2-3 sentences]
- **Output:** [What it produces — reference output contract]
- **Gate:** [Condition to advance]

### Phase 2: [Name]
- **Input:** Output from Phase 1
- **Process:** Consult [playbook]. [What it does]
- **Output:** [What it produces]
- **Gate:** [Condition to advance]

### Error Handling
- Ambiguous input: [instruction]
- Insufficient input: [instruction]
- Conflicting information: [instruction]
- Gate failure: [instruction]
```

---

## Workflow Design Checklist
- [ ] Every phase has input, process, output, and gate
- [ ] Phases are named with verbs
- [ ] ≤8 phases total
- [ ] First phase is intake/categorize
- [ ] Last phase is evaluate/deliver
- [ ] ≥2 gates in the workflow
- [ ] Output contracts defined between phases
- [ ] Error handling covers: ambiguous, insufficient, conflicting, gate failure
- [ ] Workflow pattern identified (Funnel, Scaffold, Decompose, Transform+Branch)
- [ ] Gates placed where bad output is most expensive to fix
