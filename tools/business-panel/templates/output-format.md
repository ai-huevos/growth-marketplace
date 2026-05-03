---
template_id: business-panel-output-format
description: Canonical schema for a Business Panel diagnostic report. Skills/agents save outputs in this structure for consistency across the marketplace.
version: 1.0.0
---

# Business Panel — Output Format

> The canonical structure for every panel report. Stages can extend (e.g., add a scorecard or polish-candidates section) but cannot remove sections from this skeleton.

## Required header (YAML frontmatter)

```yaml
---
client: <client-slug>
artifact: <stage> panel of <artifact-relative-path>
date: <YYYY-MM-DD>
protocol: business-panel v1.0 — <stage> stage
lenses_applied: [<lens_id>, <lens_id>, ...]
debate_pairs:
  - [<lens_a>, <lens_b>, "<topic>"]
predecessor: <prior diagnostic if any, else null>
successor: <link to artifact this informs, e.g., positioning-master-v1.1-draft.md>
purpose: <1 sentence — why this panel was run>
groupthink_checks:
  - <revisit-after-data trigger 1>
dissents_logged:
  - <lens>: <one-line dissent>
---
```

## Required body sections (in order)

### 1. `# Business Panel — <artifact> <stage>`

### 2. `## Panel verdict (TL;DR)`
- 1-paragraph verdict + the single most-fresh finding
- For polish-candidate stages: name the recommended candidate + 1 sentence explaining the choice

### 3. `## Round 1: Each lens diagnoses` (one section per lens)
- Per-lens diagnostic compressed to ~150-200 words: limitations triggered, key-questions strengths, decision-rule outcomes, top-3 strengths, top-5 blind spots
- Full per-lens output is preserved in append-only round-1 files (linked) but the report itself stays scannable

### 4. `## Round 2: Cross-lens debate` (one subsection per debate pair)
- Convergence | Correction | Open dissent (3 bullets per pair)

### 5. `## Round 3: Consensus + Groupthink + Dissent + Fresh`

#### `### CONSENSUS (5-7 high-confidence prescriptions)`
Numbered list. Each item: prescription + which decision-rules it satisfies + which lens(es) carried it.

#### `### GROUPTHINK CHECK (revisit after data)`
1-3 items. Each: finding + revisit trigger ("at delivery #5", "after 10 freemium runs", "30-day copy-test review").

#### `### DISSENT (genuine disagreement remaining)`
1-3 items. Each: dissenting lens + 1-line dissent + 1-line mitigation.

#### `### FRESH FINDINGS (panel saw, individual lenses missed)`
1-5 items. These are the highest-value emergent insights.

### 6. `## Polish candidates` (REQUIRED if stage's `output_format` includes polish-candidates)

#### `### A) <Variant 1 emphasis>`
[the candidate]

#### `### B) <Variant 2 emphasis>`
[the candidate]

#### `### C) <Variant 3 emphasis> — PANEL VERDICT (if applicable)`
[the candidate]

### 7. `## Scorecard` (REQUIRED if stage's `output_format` includes scorecard)

Numerical scorecard per lens's canonical scoring dimensions. See stage file for the table schema.

### 8. `## Bias re-disclosure`
- Per lens, list biases re-disclosed and any suppressions noted
- This is a Round-3 mandatory section per the Conflict Disclosure + Bias Disclosure rules

### 9. `## Compound bias flags`
- 0-N flags. Note any case where the panel may have agreed too easily because all lenses' biases happened to align.
- Empty list is valid IF there's a justification ("all 4 lenses come from materially different reasoning traditions; no compound bias detected").

### 10. `## Provenance`

```
---
*Diagnostic protocol: business-panel v1.0 — <stage> stage. {{N}}-round consensus pass.*
*Lenses applied via `tools/lens-loader.md` protocol. Output schema: `tools/business-panel/templates/output-format.md`.*
*Source artifact: <path>*
*Predecessor: <path or "none">*
```

## Filename convention

```
clients/<client>/diagnostics/<stage>-panel-<YYYY-MM-DD>.md
```

For ad-hoc runs that don't have a client (e.g., generic test on marketplace-level docs):

```
docs/diagnostics/<stage>-panel-<YYYY-MM-DD>.md
```

## Multi-pass / iterative runs

If the same artifact gets multiple panel passes (e.g., v1.0 → v1.1 → v1.2), append a version suffix:

```
clients/<client>/diagnostics/positioning-panel-2026-05-02.md     (first pass)
clients/<client>/diagnostics/positioning-panel-2026-05-15-v2.md  (second pass after data)
```

Both files persist; the registry shows the chain.

## Companion files

- **Round-1 raw outputs** (one file per lens): optional but recommended for high-stakes runs. Saved to `<diagnostics-folder>/round-1/<lens>-<date>.md`. The main report compresses these.
- **Round-2 raw output**: optional. Saved to `<diagnostics-folder>/round-2/<date>.md`.

## Cross-references the report MUST contain

1. Link to the source artifact under review
2. Link to the predecessor (if any) — typically a single-lens diagnostic or a prior panel pass
3. Link to the successor (if known) — typically a v1.1 draft of the artifact
4. Link to each lens file used (`os/lenses/<domain>/<lens>.md`)
5. Link to the loader contract (`tools/lens-loader.md`)
6. Link to the stage protocol (`tools/business-panel/stages/<stage>.md`)

## Bookkeeping the report MUST trigger

After saving:
1. **Append to `docs/execution-log.md`** with: date | template = `business-panel-<stage>` | agent = "business-panel skill" | context | adaptations | result | notes
2. **Update `os/lenses/registry.md`** "Ad-hoc diagnostic runs" section with: date | artifact | lenses applied | output path | notes
3. **(Optional)** If the run produces a successor artifact (v1.1 draft), link from the source artifact's `companions:` frontmatter
