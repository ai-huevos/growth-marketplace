# Agent Evaluation Protocol

## Purpose
Score a generated agent across 6 quality dimensions before delivery. Identify weaknesses and iterate until the weighted average reaches ≥90. This protocol evaluates the entire agent artifact bundle (CLAUDE.md + playbooks + templates), not individual files.

---

## Scoring Dimensions

### Dimension 1: Architectural Coherence (Weight: 20%)

**What it measures:** File structure follows the canonical ADW pattern. Playbooks map to phases. No orphan files. Consistent naming.

| Score | Criteria |
|-------|----------|
| 90-100 | File tree matches canonical pattern exactly. Every playbook referenced in CLAUDE.md. Every template referenced in a playbook. Naming convention consistent. Architecture variant documented and justified. |
| 70-89 | 1-2 minor deviations (e.g., one playbook not explicitly referenced, naming inconsistency). Core structure sound. |
| 50-69 | Structural issues: orphan files, missing templates, CLAUDE.md doesn't reference all playbooks. |
| <50 | Agent doesn't follow the canonical pattern. Files are unstructured or arbitrarily organized. |

**Common failures:**
- Playbook exists but CLAUDE.md never says "Consult [filename]"
- Template exists but no playbook references it
- CLAUDE.md references a playbook that doesn't exist
- File naming inconsistent (mix of kebab-case and snake_case)

### Dimension 2: Instruction Quality (Weight: 20%)

**What it measures:** CLAUDE.md and playbooks follow prompt engineering best practices. No anti-patterns.

| Score | Criteria |
|-------|----------|
| 90-100 | Zero anti-patterns detected. XML structure in CLAUDE.md. Imperative voice throughout. ≤7 rules. Contrastive examples present. Primacy-recency positioning. |
| 70-89 | 1-2 minor anti-patterns (e.g., one hedged phrase, one missing example). Core quality high. |
| 50-69 | Multiple anti-patterns: hedged language, persona backstory, format vacuum, instruction dump. |
| <50 | CLAUDE.md reads like a conversation, not a system prompt. No XML structure. Vague instructions. |

**Common failures:**
- "Try to" or "Consider" language in rules
- More than 7 rules without prioritization
- Missing contrastive example
- Output format described in prose instead of shown as literal template

### Dimension 3: Workflow Completeness (Weight: 20%)

**What it measures:** Every phase has inputs, process, output, and gate. Error handling present. No dead ends.

| Score | Criteria |
|-------|----------|
| 90-100 | Every phase has all 4 components. ≥2 validation gates. Error handling covers ≥3 scenarios. First phase is intake/categorize. Last phase is evaluate. Output contracts between phases defined. |
| 70-89 | 1 phase missing a component. Validation gates present but could be better placed. Error handling covers 2 scenarios. |
| 50-69 | Multiple phases missing gates. Error handling generic or missing. No output contracts between phases. |
| <50 | Workflow is a list of steps, not a phase-gated pipeline. No gates, no error handling. |

**Common failures:**
- Phase with no gate (uncontrolled advancement)
- Missing error handling for ambiguous input
- No output contract — next phase doesn't know what it receives
- Evaluate/quality phase missing

### Dimension 4: Domain Fidelity (Weight: 20%)

**What it measures:** The agent correctly encodes domain frameworks, terminology, and methodology.

| Score | Criteria |
|-------|----------|
| 90-100 | Domain frameworks accurately represented. Terminology consistent with source material. Process steps match the methodology. Key concepts not distorted or oversimplified. Expert in the domain would recognize the approach. |
| 70-89 | Minor simplifications of domain concepts. 1-2 terms used imprecisely. Core methodology correct. |
| 50-69 | Significant distortions: steps out of order, frameworks incorrectly applied, key concepts missing. |
| <50 | Domain expertise is surface-level. Agent could be about any domain — nothing specific encoded. |

**Common failures:**
- Framework steps reordered incorrectly (changing the methodology)
- Domain terminology used inconsistently or incorrectly
- Key framework concepts omitted because they're complex
- Generic business advice substituted for domain-specific guidance

### Dimension 5: Anti-Pattern Freedom (Weight: 10%)

**What it measures:** Full anti-pattern checklist passes.

| Score | Criteria |
|-------|----------|
| 90-100 | Zero anti-patterns across all files. Full verification protocol passes. |
| 70-89 | 1-2 minor anti-patterns (cosmetic, not behavioral). |
| 50-69 | 3-5 anti-patterns detected. Some behavioral impact. |
| <50 | Multiple significant anti-patterns. Agent behavior will be unreliable. |

Run the complete verification protocol from "05-anti-patterns.md" to score this dimension.

### Dimension 6: Actionability (Weight: 10%)

**What it measures:** A user can deploy this agent immediately. Files are complete, ready to copy into place.

| Score | Criteria |
|-------|----------|
| 90-100 | User copies the folder to /Volumes/deathstar/Agents/, opens CLAUDE.md, and the agent works. No setup, no configuration, no additional files needed. Deployment instructions included. |
| 70-89 | Minor setup needed (e.g., user needs to customize one section for their specific context). |
| 50-69 | Significant customization required. Multiple sections have "[TODO]" markers. Agent is a framework, not a ready tool. |
| <50 | Agent is a sketch. Major sections incomplete. Can't be used without substantial authoring. |

**Common failures:**
- Templates with unexplained fields
- Playbooks that reference external resources not included
- CLAUDE.md references methodologies not explained in any playbook
- No deployment instructions

---

## Scoring Process

1. Read all generated files completely.
2. Score each dimension independently — do not let one dimension influence another.
3. For each dimension: assign score, identify top issue, propose specific fix.
4. Calculate weighted average.
5. Decision:
   - Average ≥ 90: proceed to delivery.
   - Average < 90: fix top issues per dimension, re-score. Maximum 3 cycles.
   - After 3 cycles still < 90: deliver with known issues flagged.

---

## Score Card Format

```markdown
## Agent Quality Score: [Agent Name]

| Dimension | Score | Weight | Weighted | Top Issue | Fix |
|-----------|-------|--------|----------|-----------|-----|
| Architectural Coherence | XX | 20% | XX.X | [Issue] | [Fix] |
| Instruction Quality | XX | 20% | XX.X | [Issue] | [Fix] |
| Workflow Completeness | XX | 20% | XX.X | [Issue] | [Fix] |
| Domain Fidelity | XX | 20% | XX.X | [Issue] | [Fix] |
| Anti-Pattern Freedom | XX | 10% | XX.X | [Issue] | [Fix] |
| Actionability | XX | 10% | XX.X | [Issue] | [Fix] |
| **Weighted Average** | | | **XX.X** | | |

**Verdict:** PASS (≥90) | ITERATE (cycle N/3) | DELIVER WITH ISSUES
```

---

## Evaluation Checklist
- [ ] All 6 dimensions scored independently
- [ ] Top issue identified for each dimension
- [ ] Specific fix proposed for each issue
- [ ] Weighted average calculated
- [ ] Verdict assigned (PASS / ITERATE / DELIVER WITH ISSUES)
- [ ] If ITERATE: fixes applied, re-scored within 3 cycle limit
