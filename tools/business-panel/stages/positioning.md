---
stage: positioning
artifact_types:
  - positioning-master.md
  - category-design docs
  - ICP-locked docs (when bundled with positioning)
  - rebrand briefs
lenses:
  - dunford      # 5-component positioning canvas, category creation tax
  - schwartz     # 5-stage awareness, mass desire, sophistication
  - christensen  # JTBD, milkshake question, sustaining vs disruptive
  - hormozi      # Value Equation as positioning value-proof
debate_pairs:
  - [dunford, schwartz, "category creation vs Stage-5 identification"]
  - [hormozi, christensen, "premium pricing as positioning signal vs Job-fit"]
  - [christensen, schwartz, "the milkshake job vs the stated mass desire"]
output_format: polish-candidates
trigger_phrases:
  - "panel positioning"
  - "stress test the positioning"
  - "review the positioning master"
  - "/panel positioning <path>"
default_output_path: "clients/<client>/diagnostics/positioning-panel-<date>.md"
---

# Positioning Stage Protocol

> Use when the artifact is a positioning master, ICP statement, category-design doc, or rebrand brief. The 4-lens roster covers the canonical positioning dimensions: structure (Dunford), persuasion (Schwartz), strategic fit (Christensen), and value-equation (Hormozi).

## Round 1 — Independent diagnosis questions

Each lens agent answers all that apply to its lens — then runs the canonical lens-loader protocol (limitation gate → key_questions → decision rules → bias disclosure).

1. **Category & competitive frame**: is the doc creating a new category or operating in an existing one? What competitive alternatives are listed and are they true alternatives the buyer considers, or straw-men?
2. **Awareness & sophistication**: what awareness stage(s) does the doc target? What sophistication stage is the actual market at? Is there a mismatch (e.g., Stage-2 escalation copy in a Stage-4 market)?
3. **The job**: what functional/emotional/social job is the buyer hiring this for? Is the doc designed around the JOB or the SOLUTION?
4. **Risk & value**: what risk reversal exists? What does the Value Equation look like (DO × PL / TD × ES)? Where is value concrete vs abstract?
5. **Differentiated capability**: what UNIQUE attribute survives the substitution test (could a competitor copy it in 90 days)?
6. **Anti-positioning**: what does the doc explicitly refuse to be? Is the refusal disciplined or hand-wavy?
7. **Proof density**: how many quantified, named, attributable proof points back the central claims? Is the proof commensurate with the price/promise?

## Round 2 — Debate prompts

### Dunford ↔ Schwartz: "Category creation vs Stage-5 identification"
- Dunford default: invent a new category to escape commodity comparison.
- Schwartz default: at Stage-4/5 sophistication, identification beats new claims. Categories belong in deck slides, not hero copy.
- Surface: where is the doc paying the category-creation tax? Where could a Stage-5 identification phrase resolve the tension?

### Hormozi ↔ Christensen: "Premium pricing as positioning signal vs JTBD fit"
- Hormozi default: premium pricing as commitment device + value signal; raise when V/P ratio is grotesque.
- Christensen default: pricing should reflect the non-consumption frame; over-pricing risks misclassifying the disruption type.
- Surface: is the doc's price defensible by job + competitive set, or only by Hormozi math?

### Christensen ↔ Schwartz: "The milkshake job vs the stated mass desire"
- Christensen default: the milkshake question reveals a deeper job than the surface job. Look for the political-cover / status / identity-protection job hiding behind the functional one.
- Schwartz default: dominant mass desire (≤12 words) is what already moves money. Wrong desire = FATAL.
- Surface: is the doc selling clarity (what it claims) or selling political cover (what the buyer actually buys)?

## Round 3 — Synthesis instructions

Standard consensus + groupthink + dissent + fresh findings, PLUS:

### Polish candidates (REQUIRED for positioning stage)

Produce **3 candidate single-sentence positioning statements**, each with a different lens emphasis:
- **A) Stage-5 identification lead** (Schwartz primary)
- **B) JTBD lead** (Christensen primary)
- **C) Category-first lead** (Dunford primary)

Each candidate must integrate the founder's currently-locked decisions (if any prior feedback is available) and the strongest convergent finding from Round 2.

### Panel verdict

Recommend ONE candidate to ship + 1-2 sentences explaining why. Surface explicitly which lens "won" the verdict and which had to compromise.

## Reference run

`clients/ai-huevos/diagnostics/business-panel-2026-05-02.md` — the canonical first run on this stage. Verdict was Candidate C (Dunford-led), which compounded the queryable-deliverable + revenue-tied caveat onto the already-validated triad.
