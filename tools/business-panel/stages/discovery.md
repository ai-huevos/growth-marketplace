---
stage: discovery
artifact_types:
  - sales-engine/discovery scripts
  - PULSO discovery protocols
  - qualification frameworks
  - first-call playbooks
lenses:
  - cialdini    # Trust-building, reciprocity, authority cadence
  - schwartz   # Awareness-stage detection during the call
  - christensen # JTBD interview technique
  - hormozi    # Qualification math (decision rules), price-fit detection
debate_pairs:
  - [cialdini, hormozi, "rapport-building vs hard qualification gates"]
  - [christensen, hormozi, "JTBD interview vs solution-fit interview"]
  - [schwartz, cialdini, "awareness-stage detection vs consistent persuasion arc"]
gap_note: |
  This 4-lens roster intentionally avoids the SEO experts in Domain 7 of the source
  corpus (roof, shepard, slawski) which were initially mistaken for sales-influence
  lenses. The corpus lacks a dedicated B2B-sales lens. Phase 2 candidate: convert
  Sandler / Holden / Eades / Trish Bertuzzi as a "domain 7b - sales motion" lens
  set if needed.
output_format: standard
trigger_phrases:
  - "panel discovery"
  - "review the discovery script"
  - "stress test qualification"
  - "/panel discovery <path>"
default_output_path: "clients/<client>/diagnostics/discovery-panel-<date>.md"
---

# Discovery Stage Protocol

> Use when reviewing discovery scripts, qualification frameworks, or first-call playbooks. The 4-lens roster covers trust mechanics (Cialdini), qualification rigor (Shepard), awareness detection (Schwartz), and JTBD interviewing (Christensen).

## Round 1 — Independent diagnosis questions

1. **Trust opening (Cialdini)**: does the script open with reciprocity / unity / liking, or jump to qualification?
2. **Qualification rigor (Shepard)**: are there gates that disqualify bad-fit prospects within the first 5-10 minutes?
3. **PULSO coverage**: does the script cover Panorama / Urgencia / Logro / Situación crítica / Organización? Is each dimension genuinely probed or rubber-stamped?
4. **Awareness detection (Schwartz)**: does the script have detection logic to identify the prospect's awareness stage and adapt language accordingly?
5. **JTBD interviewing (Christensen)**: does the script ask circumstance-based questions (when, what triggered, what did you try, why didn't it work) or solution-fit questions (do you need feature X)?
6. **Listening ratio**: target 70/30 prospect/seller talk-time. Does the script enforce this through prompted pauses or open-ended cues?
7. **Objection mapping**: are common objections anticipated and pre-addressed, or only handled reactively?
8. **Next-step design**: does the call always end with a defined next step, or does it default to "I'll send some info"?

## Round 2 — Debate prompts

### Cialdini ↔ Hormozi: "Rapport-building vs hard qualification gates"
- Cialdini default: trust precedes qualification; questions before rapport feel like interrogation.
- Hormozi default: qualify hard, qualify early; price-fit and offer-fit need to be tested before deep rapport investment.
- Surface: where is the script's qualification rigor accidentally damaging trust? Where is rapport-building delaying necessary qualification?

### Christensen ↔ Hormozi: "JTBD interview vs solution-fit interview"
- Christensen default: ask about the buyer's JOB and the circumstances of the struggle; let solutions emerge.
- Hormozi default: probe specific qualifications (budget, authority, timeline, value-equation fit); guide toward the offer.
- Surface: where is the script collecting solution-fit data that's already obvious? Where is JTBD discovery skipped?

### Schwartz ↔ Cialdini: "Awareness-stage detection vs consistent persuasion arc"
- Schwartz default: adapt the conversation language stage-by-stage as the prospect progresses through awareness in real time.
- Cialdini default: keep a consistent arc (rapport → authority → social proof → commitment) regardless of stage.
- Surface: does the script over-rely on a fixed sequence when stage-detection would convert higher?

## Round 3 — Synthesis instructions

Standard. No polish-candidates for discovery (the artifact is a script, not a single sentence).

### Required additions

- **Qualification scorecard** — for each PULSO dimension, score the script's discovery rigor 1-10
- **Top 3 missing questions** — questions the script doesn't ask but should
- **Top 3 redundant questions** — questions that don't move qualification or trust forward

## Reference run

(none yet — first discovery-stage run pending)
