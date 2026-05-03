# Business Panel — `tools/business-panel/`

> **A multi-lens diagnostic skill for the GrowthOS marketplace.** Pressure-test any artifact (positioning, offer, copy, funnel, sales deck, discovery script, email sequence) by spinning up a panel of expert reasoning lenses, running them through 3 rounds (independent → debate → consensus), and producing a debiased report.

## Quick start

### Via slash command (preferred)

```
/panel <stage> <artifact-path> [--companions <path1,path2>]
```

Examples:
```bash
/panel positioning clients/ai-huevos/positioning-master.md
/panel offer clients/ai-huevos/offer-architecture/escala-value-ladder.md
/panel copy clients/ai-huevos/website/landing-hero.md
/panel email-sequence clients/ai-huevos/sequences/secuencia-origen.md
```

### Via natural language trigger

> "Run a business panel on the positioning master."
> "Stress-test the offer architecture using the panel."
> "I want a multi-lens review of this landing page."

The skill will pick up the trigger, ask for the stage if ambiguous, then execute.

## What you get

A structured diagnostic report saved to `clients/<client>/diagnostics/<stage>-panel-<date>.md` containing:

1. **TL;DR** — panel verdict and the single most-fresh finding
2. **Round 1 — Independent diagnoses** (one per lens)
3. **Round 2 — Cross-lens debate** (3 most-consequential pairs)
4. **Round 3 — Consensus + Groupthink + Dissent + Fresh findings**
5. **Polish candidates** (where the stage protocol calls for them, e.g., 3 positioning-sentence variants for a `positioning` run)
6. **Bias re-disclosure** — every lens's biases and where they were suppressed

## Why a panel beats a single review

- **Single-lens reviews carry the lens's biases.** A pure-Hormozi review pushes premium pricing and aggressive guarantees; a pure-Dunford review penalizes category creation. Real artifacts deserve multiple perspectives.
- **The 3-round protocol is the debiasing engine.** Round 1 produces independent diagnoses (no groupthink). Round 2 forces lenses to revise in light of others' findings. Round 3 separates true consensus from convenient agreement.
- **Dissent is preserved, not resolved.** The output names where lenses still disagree, so the founder retains decision rights with full information.

## Available stages (v1.0)

| Stage | Lens roster | Best for |
|---|---|---|
| **positioning** | dunford, schwartz, christensen, hormozi | Positioning master docs, category design, ICP statements |
| **offer** | hormozi, schwartz, cialdini, christensen | Offer architecture, value ladders, pricing decisions |
| **copy** | schwartz, wiebe, cialdini, laja | Landing pages, hero sections, ad copy |
| **funnel** | hormozi, schwartz, laja | End-to-end funnel design |
| **sales-deck** | dunford, cialdini, hormozi | Investor decks, sales presentations |
| **discovery** | cialdini, shepard, schwartz | Discovery scripts, qualification frameworks |
| **email-sequence** | schwartz, wiebe, cialdini | ORIGEN sequences, nurture flows, broadcasts |

Each stage file under `stages/` declares its lens roster, round-1 questions, debate pairs, and output format. Add new stages by following the contract in `stages/README.md`.

## Output anatomy

Every panel report follows this skeleton:

```markdown
---
client: <client>
artifact: <stage> panel of <artifact-path>
date: <YYYY-MM-DD>
protocol: business-panel v1.0 — <stage> stage
lenses_applied: [lens_id, lens_id, ...]
predecessor: <prior diagnostic if any>
---

# Business Panel — <artifact> <stage>

## Panel verdict (TL;DR)
[1-paragraph verdict + single most-fresh finding]

## Round 1: Each lens diagnoses (4 sections)
### <Lens A> independent diagnostic
### <Lens B> independent diagnostic
...

## Round 2: Cross-lens debate (3 pairs)
### <Lens A> ↔ <Lens B>: <topic>
### <Lens C> ↔ <Lens D>: <topic>
### <Lens A> ↔ <Lens C>: <topic>

## Round 3: Consensus + Groupthink + Dissent
### CONSENSUS (5-7 high-confidence prescriptions)
### GROUPTHINK CHECK (revisit after data)
### DISSENT (genuine disagreement remaining)
### FRESH FINDINGS (panel saw, individual lenses missed)

## Polish candidates (if stage calls for them)
A) Variant 1 — [emphasis]
B) Variant 2 — [emphasis]
C) Variant 3 — [emphasis] — PANEL VERDICT

## Bias re-disclosure
- <Lens A>: <biases re-disclosed; suppressions noted>
- ...

## Compound bias flags
[any panel-level groupthink risks]
```

## Reference run

The first production run on the marketplace was the AI Huevos `positioning-master.md` v1.0 → v1.1 polish (2026-05-02):
- Output: `clients/ai-huevos/diagnostics/business-panel-2026-05-02.md`
- Predecessor (Round 1 only): `clients/ai-huevos/diagnostics/positioning-multilens-2026-05-02.md`
- Resulting v1.1 draft: `clients/ai-huevos/positioning-master-v1.1-draft.md`

That run validated the protocol: 4 lenses converged on 7 consensus prescriptions, surfaced 2 dissents (Dunford on "OS" buzzword risk, Schwartz on freemium-first-win), and produced 5 fresh findings the original synthesis missed.

## How this composes with the rest of the marketplace

```
   USER ARTIFACT
   (positioning, offer, copy, etc.)
          ↓
   /panel <stage> <path>
          ↓
   business-panel SKILL.md
          ↓
   loads stage protocol from stages/<stage>.md
          ↓
   resolves lenses via os/lenses/registry.md
          ↓
   applies tools/lens-loader.md protocol per-lens
          ↓
   3-round panel execution
          ↓
   diagnostic report → clients/<client>/diagnostics/
   execution log entry → docs/execution-log.md
   registry update → os/lenses/registry.md
```

## Adding new stages

See `stages/README.md` for the full contract. The 4-step recipe:

1. Identify a recurring artifact type that needs panel review
2. Pick 3-5 lenses from `os/lenses/registry.md`
3. Author 5-8 round-1 questions specific to the artifact type
4. Pick 3 most-consequential debate pairs
5. Define what the synthesis output should produce

## Prerequisites

- `os/lenses/` library with required lenses (run `node scripts/convert-lens.mjs` to add new lenses)
- `os/lenses/registry.md` populated for all roster lens IDs
- `tools/lens-loader.md` (the per-lens application contract)
- For automation: a test artifact + existing client folder (`clients/<client>/`)

## Governance reference

- **Bias disclosure is mandatory** — every panel report includes a Bias Re-Disclosure section
- **Groupthink check is mandatory** — if the panel reaches consensus on every finding, that's a red flag
- **Dissent is preserved, not resolved** — the founder retains decision rights with full information
- See `os/governance/agentic-constitution.md` for marketplace-wide governance rules that constrain panel operations
