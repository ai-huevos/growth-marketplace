# Anti-Patterns Playbook

## Purpose
Verification checklist for generated agents. Every file must pass this checklist before the agent is delivered. These anti-patterns are inherited from the prompt-engineer knowledge base and adapted for agent generation.

---

## Structural Anti-Patterns

### Wall of Text
**What it looks like:** CLAUDE.md is a monolithic block of prose with no XML tags. Playbooks are unstructured paragraphs.
**Why it fails:** The model can't parse boundaries between instruction types. Instructions blend together, compliance drops.
**Fix:** XML tags in CLAUDE.md with semantic names. Markdown headers in playbooks. Tables for taxonomies.
**Check:** Every CLAUDE.md section wrapped in semantic XML tags? Every playbook using H2/H3 headers?

### Instruction Dump
**What it looks like:** CLAUDE.md has 15+ rules, all weighted equally.
**Why it fails:** Equal weighting = no weighting. The model can't distinguish critical from nice-to-have.
**Fix:** Maximum 7 rules. If more needed, split into `<rules>` (non-negotiable) and `<preferences>` (flexible).
**Check:** Rule count ≤ 7? Each rule falsifiable and impactful?

### Echo Chamber
**What it looks like:** The same instruction appears in CLAUDE.md, a playbook, and a template — phrased differently each time.
**Why it fails:** Wastes tokens without increasing compliance. Can introduce subtle contradictions.
**Fix:** State once in the right location. CLAUDE.md = overview. Playbook = detail. Template = structure. No overlap.
**Check:** Search for semantically identical instructions across files. Each instruction appears in exactly one file?

### Franken-Prompt
**What it looks like:** Different playbooks use different terms for the same concept. CLAUDE.md says "validation gate," playbook says "approval checkpoint," template says "review step."
**Why it fails:** Inconsistent terminology confuses the model and the user.
**Fix:** Build a terminology glossary. Same concept = same word everywhere.
**Check:** Key terms used consistently across all files?

### Contradictions
**What it looks like:** CLAUDE.md says "always include competitor analysis" but the categorization playbook says "skip competitor analysis for enhancements."
**Why it fails:** The model picks whichever instruction it encounters last, producing inconsistent behavior.
**Fix:** Resolve tensions explicitly. "Include competitor analysis UNLESS classification is Enhancement."
**Check:** Every conditional rule uses explicit conditions? No absolute rules contradicted by playbook exceptions?

---

## Thinking Anti-Patterns

### Persona Theater
**What it looks like:** "You are an expert product manager with 15 years of experience in SaaS..."
**Why it fails:** Doesn't improve output on capable models. Produces caricatures. Wastes tokens.
**Fix:** Cut the persona. Use constraints and examples to steer behavior.
**Check:** No "You are..." statements in any file? Behavior steered through constraints, not identity?

### Polite Suggestion
**What it looks like:** "Try to include success metrics." "Consider adding edge cases." "You might want to validate."
**Why it fails:** Models interpret hedged language as optional. Compliance drops.
**Fix:** Imperative voice. "Include success metrics." "Add edge cases." "Validate."
**Check:** No instances of "try to," "consider," "you might," "you could," "it would be good to"?

### Over-Engineering
**What it looks like:** A simple domain with 8 playbooks, 6 templates, and a 200-line CLAUDE.md.
**Why it fails:** Token waste. Complexity without value. More files = more maintenance = more staleness.
**Fix:** Match scaffolding to domain complexity. If 3 playbooks suffice, don't add 5 more.
**Check:** Every playbook justifies its existence? Every template used by at least one playbook? Removing any file would degrade output?

### Default Delegation
**What it looks like:** A playbook that says "analyze the data" without specifying what analysis means, what to look for, or what format to output.
**Why it fails:** The model makes up its own analysis, which varies between runs.
**Fix:** Specify: what to analyze, what patterns to look for, what format to output, what "good" looks like.
**Check:** Every process instruction is specific enough that two different runs would produce structurally identical output?

---

## Output Anti-Patterns

### Format Vacuum
**What it looks like:** A playbook says "produce a structured output" but doesn't show the structure.
**Why it fails:** Different runs produce different formats. Downstream phases can't rely on consistent input.
**Fix:** Include a literal output template in every playbook. Show the structure, don't describe it.
**Check:** Every playbook that produces output includes a literal format template?

### The Everything Prompt
**What it looks like:** "Be comprehensive." "Cover all aspects." "Include everything relevant."
**Why it fails:** The model interprets "comprehensive" as "long." Output bloats without increasing quality.
**Fix:** Specify what to include AND what to exclude. Explicit non-goals prevent scope creep.
**Check:** No instances of "comprehensive," "all aspects," "everything relevant"? Explicit exclusions present?

---

## Agent-Specific Anti-Patterns

### Gateless Pipeline
**What it looks like:** Six phases, no validation gates. The agent runs from input to output without pause.
**Why it fails:** Errors in early phases cascade and compound. The user discovers bad output only at the end.
**Fix:** At minimum, gate after extraction (verify understanding) and before delivery (verify quality).
**Check:** ≥ 2 validation gates in the workflow?

### Orphan Playbooks
**What it looks like:** A playbook exists in the file tree but is never referenced in CLAUDE.md.
**Why it fails:** The playbook is dead code — never consulted, never used. Wastes maintenance effort.
**Fix:** Every playbook must be referenced by "Consult [filename]" in at least one CLAUDE.md phase.
**Check:** Every playbook filename appears in CLAUDE.md?

### Template Without Consumer
**What it looks like:** A template file exists but no playbook references or uses it.
**Why it fails:** Same as orphan playbook — dead file.
**Fix:** Every template must be referenced by "Use [template filename]" in at least one playbook.
**Check:** Every template filename appears in at least one playbook?

### Scope Creep Agent
**What it looks like:** The agent's purpose is two sentences, but the workflow handles 5 different input types, 3 output formats, and 4 domain frameworks.
**Why it fails:** Broad agents produce shallow output. The context window can't hold deep knowledge for 5 domains simultaneously.
**Fix:** Narrow the scope. One primary input type, one primary output type, 1-2 frameworks.
**Check:** Purpose statement achievable by a single-session agent? Domain frameworks ≤ 3?

---

## Verification Protocol

Run this checklist on the complete generated agent:

### CLAUDE.md
- [ ] purpose: ≤ 2 sentences, specific verb/input/output
- [ ] rules: ≤ 7 rules, imperative voice, no hedging
- [ ] workflow: every phase has name, playbook reference, gate
- [ ] error_handling: ≥ 3 scenarios with specific instructions
- [ ] output_format: naming conventions defined
- [ ] examples: ≥ 1 contrastive pair (good + bad)
- [ ] reminders: 2-3 critical rules repeated
- [ ] Total ≤ 200 lines

### Playbooks
- [ ] Each starts with ## Purpose
- [ ] Each ends with ## Quality Checklist
- [ ] Tables used for taxonomies
- [ ] Code blocks used for output formats
- [ ] No redundancy with CLAUDE.md
- [ ] Each referenced in CLAUDE.md workflow
- [ ] ≤ 8 total

### Templates
- [ ] Bracket notation for all variable fields
- [ ] Static structure not in brackets
- [ ] UPPER_SNAKE_CASE filenames
- [ ] Each referenced in at least one playbook

### Cross-File
- [ ] Consistent terminology across all files
- [ ] No contradictions between files
- [ ] No echoed instructions
- [ ] No persona backstories
- [ ] No hedged language
