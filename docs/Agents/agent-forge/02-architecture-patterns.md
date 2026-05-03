# Architecture Patterns Playbook

## Purpose
Provide structural blueprints for generated agents. Every agent follows the canonical ADW architecture: CLAUDE.md system prompt + numbered playbooks + optional templates folder. This playbook documents the pattern, its variants, and selection criteria.

---

## The Canonical ADW Agent Architecture

```
agent-name/
├── CLAUDE.md                    # System prompt — the agent brain
├── 01-[first-phase].md          # Playbook for first phase
├── 02-[second-phase].md         # Playbook for second phase
├── ...                          # One playbook per phase (or cross-cutting concern)
├── NN-[last-playbook].md        # Maximum 8 playbooks
└── templates/                   # Optional — only if agent produces structured outputs
    ├── OUTPUT_TEMPLATE.md       # Fill-in skeleton for recurring outputs
    └── ...
```

### Why This Pattern

1. **CLAUDE.md is the overview.** It gives the model the full map before walking. Phase names, gates, rules — enough to orient but not so much it overwhelms.
2. **Playbooks hold the detail.** Each playbook is self-contained knowledge for one phase. The CLAUDE.md says "consult 01-extraction.md" — the model loads detail only when needed.
3. **Templates are output contracts.** They define the exact structure of deliverables. The model fills brackets, doesn't invent structure.
4. **Numbered files enforce sequence.** The numbering communicates phase order without explanation.

---

## Architecture Variants

### Variant A: Linear Pipeline
**When:** Input → Transform₁ → Transform₂ → ... → Output
**Example:** meeting-to-prd (transcript → extract → hypothesize → construct → shard → evaluate)
**Structure:** 01 through NN follow the pipeline order. Each playbook's output is the next playbook's input.
**Gate pattern:** Gate after each transform — user validates intermediate output.

```
CLAUDE.md
├── 01-extract.md        → Gate: user validates extraction
├── 02-analyze.md        → Gate: user approves analysis
├── 03-construct.md      → Gate: user reviews draft
├── 04-evaluate.md       → Quality score gate
└── templates/
```

### Variant B: Hub-and-Spoke
**When:** One core process, multiple domain-specific playbooks consulted as needed.
**Example:** business-architect (core workflow consults ICP, pricing, validation, acquisition playbooks based on user state)
**Structure:** CLAUDE.md defines the workflow. Playbooks are reference material consulted conditionally.
**Gate pattern:** Gate between major phases of the core workflow.

```
CLAUDE.md (defines 7-phase workflow)
├── 01-icp-extraction.md         → consulted in Phase 2
├── 02-offer-construction.md     → consulted in Phase 3
├── 03-pricing.md                → consulted in Phase 4
├── 04-validation.md             → consulted in Phase 5
├── 05-acquisition.md            → consulted in Phase 6
├── 06-roadmap-templates.md      → consulted in Phase 7
├── 07-mistake-patterns.md       → consulted throughout
└── 08-gap-awareness.md          → consulted throughout
```

### Variant C: Toolkit
**When:** The agent provides multiple capabilities, selected by user need.
**Example:** prompt-engineer (evaluates, generates, diagnoses, or improves prompts based on user request)
**Structure:** CLAUDE.md routes to the right capability. Playbooks are independent tools.
**Gate pattern:** Quality gate on every output (evaluation protocol).

```
CLAUDE.md (routes based on user request type)
├── 01-context-engineering.md    → foundational knowledge
├── 02-prompt-archetypes.md      → structural blueprints
├── 03-techniques-library.md     → embeddable techniques
├── 04-thinking-frameworks.md    → reasoning tools
├── 05-anti-patterns.md          → verification checklist
├── 06-evaluation-protocol.md    → quality scoring
├── 07-model-specific.md         → per-model adjustments
└── 08-meta-prompting.md         → meta-level capability
```

---

## Architecture Selection Guide

| Signal | Variant |
|--------|---------|
| "Process this input through steps to produce output" | A: Linear Pipeline |
| "Guide the user through a journey with branching paths" | B: Hub-and-Spoke |
| "Handle multiple different request types" | C: Toolkit |
| Input → single output, clear transformation | A |
| Multiple phases, user progresses over time | B |
| Multiple capabilities, user picks per session | C |

**When in doubt:** Start with Linear Pipeline (A). It's the simplest and most debuggable. Upgrade to Hub-and-Spoke only if the workflow genuinely branches.

---

## File Count Guidelines

| Playbook Count | Guidance |
|----------------|----------|
| 1-3 | Simple agent. Consider whether it should be a Task Prompt, not a full agent. |
| 4-6 | Standard agent. Most domains fit here. |
| 7-8 | Complex agent. Verify each playbook is necessary — can any be merged? |
| 9+ | Domain is too broad. Split into multiple agents or merge playbooks. |

**Template count:** Only create templates for outputs the agent generates repeatedly in the same format. One-off outputs don't need templates.

---

## CLAUDE.md Sizing Rules

| Section | Target Lines | Maximum Lines |
|---------|-------------|--------------|
| purpose | 2-3 | 5 |
| rules | 5-7 | 10 (split into rules + preferences) |
| workflow | 60-100 | 150 |
| error_handling | 5-10 | 15 |
| output_format | 5-10 | 15 |
| examples | 10-15 | 20 |
| reminders | 3-5 | 7 |
| **Total** | **~120** | **200** |

If CLAUDE.md exceeds 200 lines, detail is leaking from playbooks into the system prompt. Move detail to playbooks, keep CLAUDE.md as the overview.

---

## Architecture Spec Output Format

```markdown
# Architecture Spec: [Agent Name]

## Architecture Variant: [A: Linear Pipeline | B: Hub-and-Spoke | C: Toolkit]

## File Tree
```
agent-name/
├── CLAUDE.md
├── 01-[name].md    → Phase [N] | Cross-cutting
├── 02-[name].md    → Phase [N]
├── ...
└── templates/
    └── [NAME].md
```

## Phase Workflow
Phase 1: [Name] — [One line] — Gate: [condition]
Phase 2: [Name] — [One line] — Gate: [condition]
...

## Playbook-to-Phase Mapping
| Playbook | Phase | Purpose |
|----------|-------|---------|
| 01-[name].md | Phase 1 | [What it covers] |
| 02-[name].md | Phase 2 | [What it covers] |

## Templates Needed
| Template | Purpose | Used In |
|----------|---------|---------|
| [NAME].md | [What output it structures] | Phase [N] |

## Design Decisions
1. [Decision]: [Rationale]
2. [Decision]: [Rationale]
```

---

## Architecture Checklist
- [ ] Variant selected with justification
- [ ] ≤8 playbooks
- [ ] Every playbook maps to a phase or cross-cutting concern
- [ ] CLAUDE.md estimated under 200 lines
- [ ] At least one validation gate in the workflow
- [ ] Templates only for recurring structured outputs
- [ ] File naming follows convention (lowercase-hyphenated, numbered)
- [ ] No orphan playbooks (every playbook is referenced in CLAUDE.md)
