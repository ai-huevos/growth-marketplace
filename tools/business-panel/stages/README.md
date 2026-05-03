# Stage Protocols — `tools/business-panel/stages/`

Each stage is a **preset configuration** for a Business Panel run. Stage files declare which lenses to load, what questions to ask in Round 1, which conflicts to surface in Round 2, and what the synthesis should output.

## Stage file contract

```yaml
---
stage: <stage-name>            # e.g. positioning, offer, copy
artifact_types:                 # what kinds of files this stage reviews
  - positioning-master.md
  - similar-shaped artifacts
lenses:                         # 3-5 lens_ids from os/lenses/registry.md
  - <lens_id>
  - <lens_id>
debate_pairs:                   # 3 most-consequential cross-lens conflicts
  - [lens_a, lens_b, "<topic>"]
  - [lens_c, lens_d, "<topic>"]
  - [lens_a, lens_c, "<topic>"]
output_format: <one of: standard | polish-candidates | scorecard | hybrid>
trigger_phrases:                # natural-language triggers
  - "..."
---

## Round 1 — Independent diagnosis questions

[5-8 stage-specific questions each lens agent should answer]

## Round 2 — Debate prompts

[For each debate pair, 1-2 specific conflicts to surface]

## Round 3 — Synthesis instructions

[What the consensus output must include, beyond the standard format]

## Output destination

`clients/<client>/diagnostics/<stage>-panel-<YYYY-MM-DD>.md`
```

## Output formats

- **standard**: consensus + groupthink + dissent + fresh findings (default)
- **polish-candidates**: standard PLUS 3 polished variants of the artifact (e.g., 3 candidate positioning sentences) with a panel verdict
- **scorecard**: standard PLUS a numerical scorecard per lens (1-10 on each lens's canonical scoring dimensions — Dunford 5-component, Hormozi Value Equation, etc.)
- **hybrid**: polish-candidates + scorecard

## Available stages

See sibling files. As of v1.0:
- `positioning.md` — positioning masters, category design, ICP docs
- `offer.md` — offer architecture, value ladders, pricing
- `copy.md` — landing pages, hero sections, ad copy
- `funnel.md` — end-to-end funnel design
- `sales-deck.md` — investor decks, sales presentations
- `discovery.md` — discovery scripts, qualification frameworks
- `email-sequence.md` — ORIGEN sequences, nurture flows

## Adding a new stage

1. Pick a recurring artifact type (e.g., `pricing-page`, `case-study`, `cold-outbound`)
2. Author the stage file using the contract above
3. Run a test panel on a sample artifact
4. Iterate until the questions surface real findings (not generic "good job, here are minor issues")
5. Commit the stage and update the index in this README

## Quality gates for new stages

- **Lens diversity**: at least 3 lenses with materially different biases (e.g., don't roster Hormozi+Schwartz+Wiebe — all direct-response). Mix in a Christensen or Dunford for structural perspective.
- **Round-1 questions force lens-specific decision rules**: each question should map to a `decision_rules` entry in at least one roster lens. Generic questions ("is this good?") produce generic answers.
- **Debate pairs surface real tension**: pick pairs whose biases pull in opposite directions. Hormozi vs Christensen on guarantees. Dunford vs Schwartz on category creation.
- **Output format matches the artifact's purpose**: positioning calls for polish-candidates; offer-architecture calls for hybrid (scorecard + polish); copy calls for polish-candidates.
