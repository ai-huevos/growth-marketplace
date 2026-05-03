---
template_id: business-panel-round-prompts
description: Canonical prompt templates for Round 1 (independent), Round 2 (debate), and Round 3 (synthesis) of a Business Panel run. Skills/agents instantiate these with stage-specific values.
version: 1.0.0
---

# Business Panel Round Prompts

> Three reusable prompt templates the `business-panel` skill instantiates with stage-specific values. Variables in `{{double-braces}}` are substituted at runtime.

---

## Round 1 — Independent diagnostic prompt template

> Spawned in parallel, one per lens in the stage roster. Each agent must NOT see other agents' work.

```
You are running a {{LENS_NAME}} lens diagnostic on {{ARTIFACT_TYPE}} as part of a Business Panel.

## Setup
1. Read the lens file: `{{LENS_PATH}}`
2. Read the loader contract: `tools/lens-loader.md`
3. Read the artifact under review: `{{ARTIFACT_PATH}}`
4. Read companions (if any): {{COMPANION_PATHS}}

## Your task
Apply the {{LENS_NAME}} lens RIGOROUSLY. The artifact may already self-claim to use this lens — your job is to grade the self-application and find blind spots, not to rubber-stamp.

## Apply the lens-loader protocol

**1. Limitation gate.** Scan {{LENS_NAME}}'s `limitations` for matches against the artifact's domain ({{ARTIFACT_DOMAIN}}). Document any suppressions.

**2. Key-questions self-check.** Walk through the lens's `key_questions`. For each, evaluate whether the artifact answers crisply, weakly, or not at all. Quote sections.

**3. Decision rules.** Apply the lens's `decision_rules`. Mark PASS / FAIL / N/A and explain.

**4. Stage-specific Round 1 questions.** Answer each:
{{STAGE_ROUND_1_QUESTIONS}}

**5. Bias disclosure.** Surface this lens's biases that may be skewing your analysis.

## Output format

```
# {{LENS_NAME}} Lens Diagnostic — {{ARTIFACT_NAME}}

## Limitations triggered
[list with reasoning]

## Key questions assessment
| Question | Doc's answer | Strength: strong/weak/missing | Notes |

## Decision rules
| Rule | PASS/FAIL/N/A | Evidence | Required fix |

## Stage-specific findings
[answer the {{STAGE_ROUND_1_QUESTIONS}}]

## Top 3 strengths the doc nails
## Top 5 blind spots / risks
## What I'd change if I owned this artifact
## Conflict candidates with other lenses
[where might this lens disagree with {{OTHER_LENSES_IN_ROSTER}}?]

---
Lenses applied: [{{LENS_ID}}]
Biases disclosed: [from frontmatter]
Limitations triggered: [from step 1]
```

Be sharp and specific. No platitudes. Maximum {{ROUND_1_WORD_LIMIT}} words.
```

---

## Round 2 — Cross-lens debate prompt template

> Single agent reads all Round-1 outputs, runs the debate.

```
You are running the Round-2 cross-lens debate of a Business Panel.

## Setup
1. Read all {{N}} Round-1 lens diagnostics: {{ROUND_1_PATHS}}
2. Read the artifact: `{{ARTIFACT_PATH}}`
3. Read the user's decisions/feedback (if any): {{USER_FEEDBACK_PATH}}

## Your task
For each of the 3 most-consequential debate pairs declared in the stage protocol, surface:
- **Convergence**: where do these two lenses now AGREE based on each other's findings?
- **Correction**: where does ONE lens now CORRECT another?
- **Open dissent**: where does GENUINE disagreement remain (don't force agreement)?

## Debate pairs (stage-specific)

{{DEBATE_PAIRS_WITH_TOPICS}}

## Output format

```
## Round 2: Cross-lens debate

### {{LENS_A}} ↔ {{LENS_B}}: {{DEBATE_TOPIC}}
- **Convergence**: ...
- **Correction**: ...
- **Open dissent**: ...

[repeat for each debate pair]
```

Be concrete. Cite Round-1 findings by lens. Maximum 150 words per pair.
```

---

## Round 3 — Synthesis prompt template

> Final pass: consensus + groupthink + dissent + fresh + (if stage calls for it) polish-candidates.

```
You are running the Round-3 synthesis of a Business Panel.

## Setup
1. Read all {{N}} Round-1 lens diagnostics: {{ROUND_1_PATHS}}
2. Read the Round-2 debate output: {{ROUND_2_PATH}}
3. Read the artifact: `{{ARTIFACT_PATH}}`
4. Read the user's decisions/feedback: {{USER_FEEDBACK_PATH}}

## Your task

Produce a synthesis with 4 sections + (if stage calls for it) polish-candidates.

### CONSENSUS
List 5-7 high-confidence prescriptions that ALL {{N}} lenses now endorse based on Round-2 debate. Each prescription should be specific (a fix, not a platitude) and traceable to lens decision-rules.

### GROUPTHINK CHECK
List 1-3 findings the panel suspects it agreed too easily on. Mark each with a "revisit at" trigger (e.g., "revisit at delivery #5 if X happens"). The point is intellectual honesty — if every finding is unanimous without any groupthink concern, the lens roster lacked diversity.

### DISSENT
List 1-3 findings where genuine disagreement remains. For each: which lens holds the dissent, why, and what would resolve it.

### FRESH FINDINGS
List 1-5 things the panel as a collective sees that NO individual lens caught. These are the highest-value Round-2 outputs.

### POLISH CANDIDATES (if stage_output_format includes polish-candidates)

{{STAGE_POLISH_INSTRUCTIONS}}

For positioning: 3 candidate sentences (Schwartz-led, Christensen-led, Dunford-led).
For offer: 3 architecture variants (Conservative, Aggressive, Disruptor).
For copy: 3 hero variants (VOC-led, Mechanism-led, Proof-led).
For sales-deck: 3 6-slide outlines (Setup-led, Offer-led, Qualification-led).
For email-sequence: 3 subject+opener combinations (VOC-led, Awareness-led, Offer-led).

### PANEL VERDICT (if stage calls for polish-candidates)

Recommend ONE candidate. Explain in 1-2 sentences which lens "won" the verdict and which had to compromise.

## Compound bias check

Before finalizing, ask: **did the panel agree too easily on any finding because all lenses' biases happen to align?** If yes, surface it explicitly under "Compound bias flags" at the end of the report.

## Output destination

Save the full panel report (Round 1 summaries + Round 2 + Round 3 + polish + bias re-disclosure + compound-bias flags) to:
{{OUTPUT_PATH}}

Then append an entry to `docs/execution-log.md` per the Template Execution Protocol with: date, template = `business-panel-{{STAGE}}`, agent = "business-panel skill", context, adaptations, result, notes.

Then update `os/lenses/registry.md` "Ad-hoc diagnostic runs" section with the new entry.
```

---

## Variable reference

| Variable | Source | Example |
|---|---|---|
| `{{LENS_NAME}}` | stage frontmatter `lenses[]` | "Dunford" |
| `{{LENS_ID}}` | stage frontmatter `lenses[]` | "dunford" |
| `{{LENS_PATH}}` | `os/lenses/registry.md` | `os/lenses/positioning/dunford.md` |
| `{{ARTIFACT_PATH}}` | user input | `clients/ai-huevos/positioning-master.md` |
| `{{ARTIFACT_TYPE}}` | stage frontmatter `artifact_types` | "positioning master" |
| `{{COMPANION_PATHS}}` | user input or stage default | `[clients/ai-huevos/voc/voc-master.md]` |
| `{{STAGE_ROUND_1_QUESTIONS}}` | stage file body | (the 7-9 questions in the stage's Round 1 section) |
| `{{DEBATE_PAIRS_WITH_TOPICS}}` | stage frontmatter `debate_pairs` | (3 pairs as listed in the stage) |
| `{{ROUND_1_PATHS}}` | runtime-generated | `[/tmp/panel-dunford-2026-05-02.md, ...]` |
| `{{ROUND_2_PATH}}` | runtime-generated | `/tmp/panel-round2-2026-05-02.md` |
| `{{USER_FEEDBACK_PATH}}` | user input or null | `clients/ai-huevos/diagnostics/positioning-multilens-2026-05-02.md` |
| `{{STAGE_POLISH_INSTRUCTIONS}}` | stage file Round-3 section | (stage-specific polish-candidate brief) |
| `{{OUTPUT_PATH}}` | stage frontmatter `default_output_path` substituted | `clients/ai-huevos/diagnostics/positioning-panel-2026-05-02.md` |
| `{{N}}` | length of stage's `lenses` array | 4 |
| `{{ROUND_1_WORD_LIMIT}}` | default 1400 | 1400 |
| `{{OTHER_LENSES_IN_ROSTER}}` | stage `lenses` minus current | "schwartz, christensen, hormozi" |
| `{{STAGE}}` | stage frontmatter `stage` | "positioning" |
