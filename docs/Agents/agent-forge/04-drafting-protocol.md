# Drafting Protocol Playbook

## Purpose
Construction rules for generating CLAUDE.md, playbooks, and templates. This playbook ensures every generated file follows the canonical patterns, earns its tokens, and passes anti-pattern verification.

---

## File Generation Order

Generate files in this exact sequence:

1. **CLAUDE.md** — The system prompt. Everything else references this.
2. **Playbooks** — In numbered order (01, 02, ...). Each playbook can reference earlier playbooks but not later ones.
3. **Templates** — Last. Templates reference the playbook that uses them.

Never generate templates before playbooks — the template structure derives from what the playbook prescribes.

---

## CLAUDE.md Construction

### Section Order (matches primacy-recency positioning)

```xml
<purpose>         <!-- FIRST — what the agent does -->
</purpose>

<rules>           <!-- SECOND — non-negotiable constraints -->
</rules>

<workflow>        <!-- MIDDLE — the full phase-by-phase workflow -->
</workflow>

<error_handling>  <!-- MIDDLE — what to do when things go wrong -->
</error_handling>

<output_format>   <!-- NEAR END — how outputs are structured -->
</output_format>

<examples>        <!-- NEAR END — good/bad contrastive pair -->
</examples>

<reminders>       <!-- LAST — repeat critical rules (recency) -->
</reminders>
```

### Purpose Tag
- Two sentences maximum.
- First sentence: what the agent transforms (input → output).
- Second sentence: what distinguishes this agent's approach (methodology, constraint, quality bar).
- No backstory. No persona. No "You are..."

**Template:**
```xml
<purpose>
[Verb] [input type] into [output type] using [methodology/constraint].
[Quality/traceability standard that makes this agent's output distinct.]
</purpose>
```

### Rules Tag
- Maximum 7 rules.
- Each rule starts with "Never" or "Always" or "When [condition], [action]."
- No hedged language: cut "Try to," "Consider," "You might."
- Order by importance (most critical first).

**Rule writing checklist:**
- [ ] Is this rule falsifiable? (Can the model violate it?)
- [ ] Does violating this rule produce measurably worse output?
- [ ] Is this rule already covered by another rule? (If yes, merge.)
- [ ] Would removing this rule change the output? (If no, cut.)

### Workflow Tag
- Start with the phase overview (full map before walking):
```
Phase 1 (Name): One-line description
Phase 2 (Name): One-line description
...
```
- Then detail each phase:
```
PHASE N — NAME

Consult "[playbook-filename]" for [what it covers].

[2-5 sentences: what to do in this phase]

[Gate condition]

Do NOT advance until [specific condition].
```

**Workflow quality rules:**
- Every phase references its playbook by filename.
- Every phase ends with a gate statement.
- Gate statements use "Do NOT advance until" — absolute language.
- Process descriptions use imperative voice: "Parse," "Generate," "Score" — not "The agent should try to parse."

### Error Handling Tag
- 3-5 error scenarios, each with a specific instruction.
- Format: "If [condition]: [exact response]."
- Common scenarios: ambiguous input, insufficient data, conflicting information, scope too broad, quality below threshold.

### Output Format Tag
- File naming conventions.
- Directory structure for outputs.
- ID conventions if the agent uses cross-referencing.

### Examples Tag
- One GOOD example with "Why this works."
- One BAD example with "Why this fails."
- Examples should be from the agent's domain, not generic.
- Keep examples short — 3-5 lines each.

### Reminders Tag
- Repeat the 2-3 most critical rules from the rules tag.
- Rephrase slightly (not identical — avoids echo chamber anti-pattern).
- These are the rules most likely to drift over long interactions.

---

## Playbook Construction

### Structure
```markdown
# [Playbook Name] Playbook

## Purpose
[One paragraph: what this playbook covers, when it's consulted, what it produces.]

---

## [Core Content Sections]
[Domain-specific frameworks, taxonomies, process steps, decision trees]

## [Output Format]
[Literal template or structured format for this phase's output]

---

## [Name] Quality Checklist
- [ ] [Verification item 1]
- [ ] [Verification item 2]
...
```

### Playbook Writing Rules

1. **Start with Purpose.** One paragraph. What this playbook covers and what it produces. No preamble.
2. **Use tables for taxonomies.** Any list of categories, types, or options → table. Tables are faster to scan than prose.
3. **Use code blocks for output formats.** Show the literal structure the agent should produce, not a description of it.
4. **End with a quality checklist.** Checkbox list of verifiable items. The agent runs this checklist before presenting phase output.
5. **No redundancy with CLAUDE.md.** The playbook adds detail; CLAUDE.md provides the overview. If content appears in both, it's in the wrong place.
6. **Include format templates for every structured output.** Don't describe the format — show it.
7. **Use headers aggressively.** The model uses headers to locate relevant sections. Long prose without headers = findability debt.

### Playbook Sizing

| Playbook Type | Target Length | Maximum |
|--------------|-------------|---------|
| Simple taxonomy/rules | 50-100 lines | 150 lines |
| Framework application | 100-200 lines | 300 lines |
| Complex multi-step process | 150-250 lines | 400 lines |

If a playbook exceeds 400 lines, split it.

---

## Template Construction

### Structure
```markdown
# [TEMPLATE NAME]: [Bracketed Variable]

## [Section 1]
- **[Field]:** [Description of what goes here]

## [Section 2]
| Column | Column | Column |
|--------|--------|--------|
| [placeholder] | [placeholder] | [placeholder] |
```

### Template Writing Rules

1. **Every variable field uses brackets:** `[Description of content]`
2. **Static structure is NOT in brackets.** Headers, table columns, labels — these are fixed.
3. **Include inline guidance for non-obvious fields.** After the bracket: a comment explaining what "good" looks like.
4. **Templates are copy-paste ready.** Fill in brackets, delete nothing else.
5. **Use UPPER_SNAKE_CASE for template filenames.** Signals "this is a template, not a playbook."

---

## Cross-Referencing Protocol

If the generated agent uses ID-based cross-referencing (like H-001 → FR-001 → EPIC-001):

1. Define the ID convention in the CLAUDE.md output_format tag.
2. Define the traceability chain in the relevant playbook.
3. Include a traceability index template in the templates folder.
4. The evaluation protocol must include an "orphan ID" check.

**ID convention standard:**
```
[PREFIX]-[NNN]
```
- PREFIX: 2-5 uppercase letters identifying the artifact type
- NNN: three-digit zero-padded sequential number
- Examples: H-001, FR-001, EPIC-001, US-001, REQ-001, RISK-001

---

## Post-Draft Verification

After drafting all files, run this verification before proceeding to evaluation:

### Anti-Pattern Checklist (from prompt-engineer/05-anti-patterns.md)
Apply to every generated file:

- [ ] **No Wall of Text** — All files use XML tags (CLAUDE.md) or markdown headers (playbooks) for structure
- [ ] **No Polite Suggestion** — No "Try to," "Consider," "You might" in any generated file
- [ ] **No Instruction Dump** — CLAUDE.md rules ≤ 7
- [ ] **No Echo Chamber** — No instruction restated in different words across files
- [ ] **No Franken-Prompt** — Consistent terminology across all files
- [ ] **No Contradictions** — No conflicting instructions between CLAUDE.md and playbooks
- [ ] **No Persona Theater** — No "You are an expert..." in any file
- [ ] **No Format Vacuum** — Every output has a literal template
- [ ] **No Everything Prompt** — No "be comprehensive" or "cover all aspects"
- [ ] **No Context Injection Risk** — User data wrapped in labeled tags

If ANY pattern is present, fix before proceeding to evaluation.
