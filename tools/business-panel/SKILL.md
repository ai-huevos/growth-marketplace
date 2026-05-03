---
name: business-panel
description: Use to run a multi-lens Business Panel diagnostic on any marketplace artifact (positioning, offer, copy, funnel, sales deck, discovery script, email sequence). Activates 3-7 expert lenses in a 3-round protocol (independent diagnosis → cross-lens debate → consensus + dissent), debiased by design. Triggers on "business panel", "panel diagnostic", "panel de negocio", "multi-lens review", "lens debate", "stress test positioning", "pressure test offer", "/panel".
version: 1.0.0
type: meta-tool
trigger_phrases:
  - "run a business panel"
  - "stress test this positioning"
  - "pressure test this offer"
  - "multi-lens review"
  - "panel diagnostic"
  - "/panel <stage> <artifact-path>"
  - "review with the panel"
inputs:
  - artifact_path: path to the artifact under review (positioning-master.md, escala-value-ladder.md, etc.)
  - stage: which preset stage protocol to load from `stages/`
  - companions: optional list of supporting docs (VOC, brand-voice, prior diagnostics)
outputs:
  - diagnostic_report: saved to `clients/<client>/diagnostics/<stage>-panel-<date>.md` OR specified output path
  - execution_log_entry: appended to `docs/execution-log.md`
  - registry_updates: any new lens or skill consumer mentioned during the run
---

# Business Panel — Multi-Lens Marketplace Diagnostic

> **A reusable 3-round expert-lens debate protocol.** Loads a roster of expert lenses from `os/lenses/`, runs them independently, has them critique each other, and produces a consensus + groupthink-check + dissent log. Debiased by design.

## When to use this skill

- An important artifact (positioning statement, offer architecture, sales deck, landing page, email sequence) needs a rigorous multi-perspective review before shipping
- A lens-injected single-skill output (e.g., `headline-mastery` with Hormozi+Schwartz) needs an audit at the *strategy* level, not just the *tactic* level
- The team wants to **debias** a founder-authored or single-lens output by simulating expert disagreement
- Pre-promotion gates: before ratifying a v1.0 → v1.1 of any major doc

**Don't use for**: small tactical decisions (single headline, single email subject line). The panel costs ~5-7 parallel agent runs; reserve it for documents whose quality lift justifies the spend.

## How it works (the protocol)

### Step 0 — Setup (resolve stage)
1. User invokes with a **stage name** + **artifact path** (e.g., `/panel positioning clients/ai-huevos/positioning-master.md`).
2. Load the stage protocol from `tools/business-panel/stages/<stage>.md`. Stage files declare:
   - **Lens roster** (3-5 lens IDs, e.g., `[dunford, schwartz, christensen, hormozi]`)
   - **Round-1 questions** (stage-specific evaluation prompts)
   - **Round-2 debate pairs** (the 3 most-consequential cross-lens conflicts to surface)
   - **Round-3 synthesis format** (what the consensus + dissent output looks like)
3. Resolve each lens path via `os/lenses/registry.md`.
4. Read the loader contract at `tools/lens-loader.md` — the panel is a multi-lens application of the same protocol.

### Step 1 — Round 1: Independent diagnosis (parallel)
Spawn N parallel agents (one per lens in the roster). Each agent:
1. Reads its lens file (frontmatter + body) and the loader contract
2. Reads the artifact under review + companions
3. Applies the lens-loader protocol: limitation gate → key_questions self-check → decision rules → bias disclosure
4. Produces a structured per-lens diagnostic with: PASS/FAIL/N/A on decision rules, scorecard, top strengths, top blind spots, conflict candidates with other lenses

**Critical**: each Round-1 agent runs **without seeing the others' work**. Independence is what makes Round-2 critique meaningful.

### Step 2 — Round 2: Cross-lens debate
After Round 1 returns, spawn a single Panel-Debate agent that:
1. Reads all N Round-1 outputs
2. Reads the user's decisions/feedback (if a prior round of feedback exists)
3. For each pair listed in the stage's `debate_pairs` (typically 3 of the 6+ possible pairs):
   - **Convergence**: where do the two lenses now agree?
   - **Correction**: which lens corrects the other in light of new info?
   - **Open dissent**: where does genuine disagreement remain?

### Step 3 — Round 3: Consensus + Dissent + Groupthink
The same agent (or a separate synthesizer) produces:
- **CONSENSUS** — 5-7 high-confidence prescriptions all lenses endorse
- **GROUPTHINK CHECK** — 1-3 findings the panel suspects it agreed too easily on; mark for revisit-after-data
- **DISSENT** — 1-3 findings where genuine disagreement remains; document which lens holds the dissent and why
- **FRESH FINDINGS** — what the panel sees that no individual lens caught

### Step 4 — Output
1. Save the full panel report to `clients/<client>/diagnostics/<stage>-panel-<YYYY-MM-DD>.md`
2. If the stage protocol declares a **synthesis output** (e.g., 3 candidate positioning sentences with a panel verdict), include it
3. Append a row to `docs/execution-log.md` per the Template Execution Protocol
4. Update `os/lenses/registry.md` "Ad-hoc diagnostic runs" section with the artifact + lenses + output path

## Available stages

See `tools/business-panel/stages/` for the full list. As of v1.0:

| Stage | Lens roster | Use for |
|---|---|---|
| `positioning` | dunford, schwartz, christensen, hormozi | Positioning statements, category design, ICP docs |
| `offer` | hormozi, schwartz, cialdini, christensen | Offer architecture, value ladders, pricing decisions |
| `copy` | schwartz, wiebe, cialdini, laja | Landing pages, hero sections, body copy |
| `funnel` | hormozi, schwartz, laja | Funnel design, traffic→conversion architecture |
| `sales-deck` | dunford, cialdini, hormozi | Investor decks, sales presentations |
| `discovery` | cialdini, shepard, schwartz | Discovery scripts, qualification frameworks |
| `email-sequence` | schwartz, wiebe, cialdini | ORIGEN sequences, nurture flows, broadcasts |

Stage-specific lens rosters can be customized per run via `--lenses` arg if needed (rare; prefer adding a new stage file for repeatable patterns).

## Templates referenced

- `tools/business-panel/templates/round-1-prompt.md` — independent-diagnosis prompt template
- `tools/business-panel/templates/round-2-debate.md` — cross-lens debate prompt template
- `tools/business-panel/templates/round-3-synthesis.md` — consensus + dissent synthesis template
- `tools/business-panel/templates/output-format.md` — the canonical panel report schema

## Examples

- **First marketplace run**: `examples/ai-huevos-positioning-2026-05-02.md` — references the v1.0→v1.1 polish of `clients/ai-huevos/positioning-master.md` using the `positioning` stage. 4 lenses, 3 rounds, 7 consensus prescriptions, 2 dissents logged, 5 fresh findings.

## Governance

- **Bias disclosure is mandatory.** Every panel report includes a Bias Re-Disclosure section listing each lens's biases and noting where they were suppressed.
- **Groupthink check is mandatory.** If the panel reaches consensus on every finding without any groupthink-check, that's a red flag — likely insufficient lens diversity. Pick a more contrarian lens roster.
- **Dissent is preserved, not resolved.** The protocol does NOT force lenses to agree. Genuine disagreement is documented and the founder retains decision rights.
- **Conflict Disclosure Rule** (per `tools/lens-loader.md`): when 2+ lenses conflict on the same finding, the panel surfaces the conflict explicitly rather than silently picking a side.

## How to add a new stage protocol

1. Identify a recurring artifact type that needs panel review (e.g., `pricing-page`, `case-study`, `cold-outbound-sequence`).
2. Create `tools/business-panel/stages/<stage-name>.md` with frontmatter declaring:
   - `lenses:` — 3-5 lens IDs from `os/lenses/registry.md`
   - `round_1_questions:` — stage-specific evaluation prompts
   - `debate_pairs:` — 3 most-consequential cross-lens pairs to debate
   - `output_format:` — what the synthesis should produce (recommendations, polish-candidate variants, scorecard)
3. Document trigger phrases in the stage file.
4. Run the panel once on a sample artifact to validate the roster + questions; fix anything brittle; commit.

## How to add a new lens to a stage

1. Convert the lens JSON via `node scripts/convert-lens.mjs <source.json> os/lenses/<domain>/<lastname>.md`
2. Add to `os/lenses/registry.md`
3. Add the lens ID to the relevant stage's `lenses:` frontmatter array
4. (Optional) Add a stage-specific question that exercises this lens's strengths

## Prerequisites

- `os/lenses/` library with at least the lenses your stage roster declares
- `os/lenses/registry.md` populated
- `tools/lens-loader.md` (the per-lens application contract)

## Limitations

- Each panel run spawns 5-7 agent calls. Time to completion: typically 8-15 minutes wall-clock with parallel Round 1 + sequential Round 2/3.
- The panel cannot fix bad input. If the artifact under review is incomplete or vague, the panel will produce a panel report saying so — but it won't substitute for a real artifact.
- Lens limitations apply (per `tools/lens-loader.md`). If the artifact lives in a domain where a lens's `limitations` trigger, that lens contributes less; the panel synthesis must note this.
