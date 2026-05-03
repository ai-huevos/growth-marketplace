# Specimen Index

## Purpose
Reference catalog of existing ADW agents that serve as architecture specimens for the forge. When designing a new agent, consult the specimen that most closely matches the target domain pattern.

---

## Specimen Registry

### prompt-engineer
**Location:** `/Volumes/deathstar/Agents/prompt-engineer/`
**Architecture:** Toolkit (Variant C)
**Pattern:** Routes based on user request type (generate, diagnose, improve, meta-prompt)
**File count:** 1 CLAUDE.md + 8 playbooks (01-08)
**Key innovation:** 5-dimension evaluation protocol with ≥95 quality gate. Self-improving loop.
**Use as reference when:** Building toolkit-style agents with quality scoring.

**File inventory:**
| File | Purpose |
|------|---------|
| CLAUDE.md | System prompt — toolkit router |
| 01-context-engineering.md | Foundational knowledge — context assembly mindset |
| 02-prompt-archetypes.md | Three structural blueprints (System, Task, Workflow) |
| 03-techniques-library.md | Embeddable techniques catalog |
| 04-thinking-frameworks.md | Reasoning tools (AoT, CoVe, Socratic, etc.) |
| 05-anti-patterns.md | Verification checklist for prompt quality |
| 06-evaluation-protocol.md | 5-dimension scoring rubric |
| 07-model-specific.md | Per-model optimization patterns |
| 08-meta-prompting.md | Meta-level: prompts that generate prompts |

---

### business-architect
**Location:** `/Volumes/deathstar/Agents/business-architect/`
**Architecture:** Hub-and-Spoke (Variant B)
**Pattern:** 7-phase guided journey with conditional playbook consultation
**File count:** 1 CLAUDE.md + 8 playbooks + 3 subdirectories
**Key innovation:** Mistake detection through language pattern matching. Phase-locked progression — concrete output before advancing.
**Use as reference when:** Building advisory agents that guide users through multi-phase journeys.

**File inventory:**
| File | Purpose |
|------|---------|
| CLAUDE.md | System prompt — 7-phase business architect workflow |
| 01-icp-extraction-playbook.md | ICP extraction with 5 methods |
| 02-offer-construction-playbook.md | Value Equation, MVO, micro offers |
| 03-pricing-for-first-timers.md | 5 pricing methods with calculations |
| 04-market-validation-methods.md | 6 $0 validation methods |
| 05-client-acquisition-from-zero.md | 6 channels with scripts |
| 06-execution-roadmap-templates.md | 4 roadmap templates |
| 07-beginner-mistake-patterns.md | 10 patterns with early-warning detection |
| 08-gap-awareness-brief.md | AI-era business awareness |

---

### meeting-to-prd
**Location:** `/Volumes/deathstar/Agents/meeting-to-prd/`
**Architecture:** Linear Pipeline (Variant A)
**Pattern:** Input → Extract → Analyze → Construct → Decompose → Evaluate
**File count:** 1 CLAUDE.md + 6 playbooks + 4 templates
**Key innovation:** Full traceability chain (H-ID → FR-ID → EPIC-ID → US-ID). Classification-based depth adjustment. Hypothesis-driven requirements.
**Use as reference when:** Building pipeline agents that transform unstructured input into structured output with traceability.

**File inventory:**
| File | Purpose |
|------|---------|
| CLAUDE.md | System prompt — 6-phase transcript-to-PRD pipeline |
| 01-transcript-extraction.md | 8-category signal taxonomy |
| 02-hypothesis-engine.md | Blank Customer Development + Bussgang Experimentation Machine |
| 03-prd-construction.md | 13-section PRD assembly protocol |
| 04-sharding-pipeline.md | Epic/US decomposition with dependency mapping |
| 05-categorization-rules.md | Greenfield/Brownfield/Enhancement decision tree |
| 06-evaluation-protocol.md | 5-dimension PRD quality scoring |
| templates/PRD_TEMPLATE.md | Canonical PRD skeleton |
| templates/EPIC_TEMPLATE.md | Epic with linkage and dependency mapping |
| templates/USER_STORY_TEMPLATE.md | US with Given/When/Then |
| templates/HYPOTHESIS_CARD.md | Individual hypothesis card |

---

### vibe-coding-copilot
**Location:** `/Volumes/deathstar/Agents/vibe-coding-copilot/`
**Architecture:** Toolkit (Variant C)
**Pattern:** Routes based on user's coding context (tool selection, build sequencing, workflow, troubleshooting, onboarding)
**File count:** 1 CLAUDE.md + 5 playbooks
**Key innovation:** Practitioner workflow documentation with multi-tool handoff patterns. Context engineering as core competency.
**Use as reference when:** Building knowledge-base agents that route to relevant expertise based on user context.

**File inventory:**
| File | Purpose |
|------|---------|
| CLAUDE.md | System prompt — vibe coding guide |
| 01-tool-planning-modes.md | Tool capabilities and planning modes |
| 02-build-sequencing.md | Spec-driven development, PRD patterns |
| 03-practitioner-workflows.md | End-to-end multi-tool workflows |
| 04-failures-and-guardrails.md | Common failures with prevention patterns |
| 05-beginner-onboarding.md | Onboarding and tool selection guidance |

---

## Specimen Selection Guide

| Target Agent Pattern | Best Specimen |
|---------------------|--------------|
| Transform unstructured input → structured output | meeting-to-prd |
| Guide user through sequential phases | business-architect |
| Multiple capabilities, user selects per session | prompt-engineer |
| Knowledge routing based on context | vibe-coding-copilot |
| Pipeline with traceability chain | meeting-to-prd |
| Quality scoring and self-improvement | prompt-engineer |
| Advisory with mistake detection | business-architect |
| Multi-tool coordination | vibe-coding-copilot |

---

## What to Extract From Specimens

When using a specimen as reference:
1. **Structure** — file count, naming pattern, template usage
2. **CLAUDE.md pattern** — how purpose/rules/workflow are structured
3. **Gate pattern** — where and how validation gates are placed
4. **Quality pattern** — how the agent evaluates its own output
5. **Error handling** — how edge cases and ambiguity are managed
6. **Domain encoding** — how domain frameworks map to playbooks

Do NOT copy content from specimens. Extract the pattern, apply to the new domain.
