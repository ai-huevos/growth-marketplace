---
stage: copy
artifact_types:
  - landing pages
  - hero sections
  - ad copy
  - email body copy (for sequences use email-sequence stage)
  - one-pager copy
lenses:
  - schwartz     # Mass desire, awareness fit, sophistication, mechanization
  - wiebe        # Voice-of-customer copy, message hierarchy
  - cialdini     # Trust signals, social proof placement
  - laja         # Conversion research, copy testing discipline
debate_pairs:
  - [schwartz, wiebe, "mass desire selection vs verbatim VOC voice"]
  - [cialdini, schwartz, "trust signals placement vs awareness-stage fit"]
  - [laja, schwartz, "test-the-copy mindset vs ship-the-mass-desire mindset"]
output_format: polish-candidates
trigger_phrases:
  - "panel copy"
  - "review the landing"
  - "stress test this hero"
  - "/panel copy <path>"
default_output_path: "clients/<client>/diagnostics/copy-panel-<date>.md"
---

# Copy Stage Protocol

> Use when reviewing landing pages, hero sections, body copy, or ad copy. The 4-lens roster covers desire selection (Schwartz), VOC fidelity (Wiebe), trust mechanics (Cialdini), and conversion-research discipline (Laja).

## Round 1 — Independent diagnosis questions

1. **Mass desire**: in ≤12 words, what is the dominant desire the copy channels? Is it the right one?
2. **Awareness fit**: which Schwartz stage does the copy target? Does the headline match the stage prescription?
3. **Sophistication fit**: is the copy at Stage 4-5 mechanism level, or stuck at Stage 2-3 escalation?
4. **VOC fidelity**: does the copy use buyer language verbatim, or does it use marketing language about the buyer?
5. **Hierarchy**: 5-second test — does the reader know what's offered, to whom, why-it-works in 5 seconds?
6. **Trust signals**: which Cialdini principles are activated and where? Are they placed before or after objections?
7. **Mechanism specificity**: are mechanisms named (good), described (better), or featured (best)? Or are they only escalated ("5x faster")?
8. **CTA logic**: does the CTA match the awareness stage? Unaware → no CTA, Most-aware → offer-forward.
9. **Conversion-research discipline**: is the copy backed by research (heuristics, prior tests, VOC) or by intuition?

## Round 2 — Debate prompts

### Schwartz ↔ Wiebe: "Mass desire selection vs verbatim VOC voice"
- Schwartz default: select THE dominant mass desire and channel it; one fully-believed promise > many doubted.
- Wiebe default: lead with verbatim buyer language even when it's messier than a clean desire statement.
- Surface: where does clean Schwartz-style copy lose VOC authenticity? Where does VOC-fidelity scatter the desire?

### Cialdini ↔ Schwartz: "Trust signals placement vs awareness-stage fit"
- Cialdini default: place social proof early to anchor authority.
- Schwartz default: at Unaware/Problem-aware stages, social proof too early creates a "selling" feeling that triggers rejection.
- Surface: is the copy front-loading proof inappropriately for the awareness stage?

### Laja ↔ Schwartz: "Test-the-copy mindset vs ship-the-mass-desire mindset"
- Laja default: every claim is testable; instrument and iterate.
- Schwartz default: pick the desire, channel it, ship it; test secondary, conviction first.
- Surface: is the copy paralyzed by testability concerns OR shipping without instrumentation? What does each lens recommend testing first?

## Round 3 — Synthesis instructions

Standard + polish.

### Polish candidates (REQUIRED for copy stage)

Produce **3 hero variants** (or 3 body-copy revisions):
- **A) VOC-led** (Wiebe primary): leads with verbatim buyer language
- **B) Mechanism-led** (Schwartz primary): names + describes the unique mechanism, Stage-4 fit
- **C) Proof-led** (Cialdini primary): leads with social proof, authority, or unity signal

### Panel verdict

Recommend the variant whose convergent decision-rule violations are minimal AND whose A/B testability is highest.

## Reference run

(none yet — first copy-stage run pending)
