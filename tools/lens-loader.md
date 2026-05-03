---
name: lens-loader
description: Contract spec for how skills load and apply expert lenses from os/lenses/. Phase 1 is file-read at invocation time.
type: tool-contract
version: 1.0.0
---

# Lens Loader Contract

> How a skill consumes one or more expert lenses from `os/lenses/` to bias its reasoning, then discloses the bias in the output.

This is the **Phase 1 loader contract** — a runtime convention any skill can follow with no SDK code. Phase 3 replaces it with a programmatic resolver in `sdk-app/src/core/lenses/resolver.ts`.

## Inputs

A skill that consumes lenses declares them in its own `SKILL.md` YAML frontmatter:

```yaml
---
name: headline-mastery
lenses:
  - hormozi    # offer-engineering/hormozi.md — value-equation discipline
  - schwartz   # offer-engineering/schwartz.md — awareness levels
---
```

The list contains **lens IDs**, not paths. Path resolution happens via `os/lenses/registry.md`.

## Resolution

1. Read the skill's own `lenses:` array.
2. For each `lens_id`, look it up in `os/lenses/registry.md` → resolve `path` column.
3. Read the lens MD file at that path.
4. Parse the YAML frontmatter to access:
   - `expert_name` — for the disclosure footer
   - `key_questions` — used as a self-check pass before finalizing output
   - `biases` — disclosed in output footer
   - `limitations` — checked against the current task context; if a limitation matches, **suppress** the lens for this invocation (e.g., a healthcare/regulated client suppresses Hormozi's aggressive-guarantee bias)
   - `frameworks[].decision_rules` — applied as candidate-evaluation rules

## Application protocol

The skill applies each loaded lens in this order:

### 1. Limitation gate
Before generating output, scan the active task context (client brief, GCO state, brand-config) for matches against `limitations`. If a match is found, log a suppression notice and skip that lens. Examples:
- Hormozi `limitations` includes "Regulated markets" → suppress for any client whose brand-config tags include `regulated`
- Schwartz `limitations` includes "Ultra-minimal pages for pre-aware audiences where belief sits outside the page" → suppress when generating pure brand-equity copy

### 2. Self-check via key_questions
Before finalizing each output candidate, the skill mentally walks through the lens's `key_questions` and evaluates whether the candidate satisfies them. Candidates that fail multiple key_questions get downgraded or revised. This is the lens's *positive* contribution: it sharpens output quality.

### 3. Decision-rule application
For each loaded framework's `decision_rules`, the skill checks whether the rule's IF clause applies to the candidate output. If yes, apply the THEN action (penalize, escalate, revise, suppress). This is the lens's *negative* contribution: it filters out candidates that violate the expert's reasoning.

### 4. Bias disclosure (mandatory footer)
Every lens-touched output appends a disclosure footer:

```
---
Lenses applied: [hormozi, schwartz]
Biases disclosed:
- Direct-response bias (Hormozi): evaluates through measurable conversion; brand equity largely dismissed
- Mass-desire model (Schwartz): may underrate viable niche plays with high LTV but tiny scope
```

The footer is **not optional**. Per `os/lenses/README.md` governance section, bias disclosure is a binding rule.

## Multi-lens composition

When multiple lenses are loaded:

- **Sequence matters less than composition.** Apply self-checks from all loaded lenses; merge decision_rules into a single rule-set; emit one combined disclosure footer.
- **Conflict resolution.** If two lenses' decision_rules conflict on the same candidate (e.g., Hormozi says "stack more bonuses" while Schwartz says "one fully believed promise beats many"), the skill must surface the conflict explicitly to the user rather than silently picking a side. This is the **Conflict Disclosure Rule**.
- **Compounding biases.** If two lenses share the same bias direction (both direct-response-leaning), call it out once in the footer rather than twice — but flag the compound: "double-weighted direct-response bias from hormozi+schwartz".

## Failure modes

| Symptom | Likely cause | Recovery |
|---|---|---|
| Output reads mechanical, templated | Too many decision_rules applied; over-constrained | Reduce to one framework's rules, or fall back to `key_questions`-only mode |
| Output reads identical to baseline | Lens loaded but not actually consulted | Verify the skill's "Lens Activation" section actually reads and applies the file |
| Output reads at odds with brand voice | Lens bias overriding voice | Add the brand context as a higher-priority instruction; explicitly mark voice rules as non-overridable |
| Footer missing or malformed | Skill skipped step 4 | Mandatory rejection; re-run with footer enforcement |

## Phase progression

- **Phase 1** (current): each skill implements steps 1–4 manually in its own "Lens Activation" section.
- **Phase 2**: extract a shared activation snippet that skills can reference, kept in this file's appendix.
- **Phase 3**: replace file-read with `sdk-app/src/core/lenses/resolver.ts`. GCO carries `active_lenses[]`. Auto-selection from PULSO state via `auto-select.ts`.

## See also

- `os/lenses/README.md` — library overview and governance
- `os/lenses/registry.md` — authoritative `lens_id → path` mapping
- `os/governance/agentic-constitution.md` — codifies the bias-disclosure rule once Phase 3 lands
