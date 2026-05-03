---
stage: email-sequence
artifact_types:
  - sequences/*.md (ORIGEN, nurture, re-engagement)
  - broadcast email plans
  - cold outbound sequences
  - post-call follow-up sequences
lenses:
  - schwartz    # Awareness-stage progression across emails; mass desire continuity
  - wiebe       # Subject-line discipline; VOC voice in body
  - cialdini    # Trust signal pacing; commitment ladder
  - hormozi     # Lead-magnet → tripwire → core offer architecture within sequence
debate_pairs:
  - [schwartz, hormozi, "awareness-stage progression vs offer-acceleration"]
  - [wiebe, cialdini, "VOC subject lines vs authority-anchored subject lines"]
  - [hormozi, schwartz, "every-email-sells vs build-belief-then-sell"]
output_format: polish-candidates
trigger_phrases:
  - "panel email"
  - "review the sequence"
  - "stress test ORIGEN"
  - "/panel email-sequence <path>"
default_output_path: "clients/<client>/diagnostics/email-sequence-panel-<date>.md"
---

# Email-Sequence Stage Protocol

> Use when reviewing ORIGEN sequences, nurture flows, broadcast plans, or cold outbound. The 4-lens roster covers awareness progression (Schwartz), subject-line + VOC craft (Wiebe), trust pacing (Cialdini), and offer architecture within the sequence (Hormozi).

## Round 1 — Independent diagnosis questions

1. **Awareness progression**: does the sequence move the reader from one Schwartz stage to the next, or does every email pitch the same stage?
2. **Mass desire continuity**: is the same dominant desire channeled across all emails, or does the sequence drift across desires?
3. **Subject-line discipline (Wiebe)**: is each subject line carrying its own job (open) or recycling the body's hook?
4. **VOC voice (Wiebe)**: does the body language match buyer verbatim, or marketing-speak about the buyer?
5. **Trust pacing (Cialdini)**: where do authority / social proof / scarcity appear? Is the cadence calibrated (early = authority + reciprocity; mid = social proof; late = scarcity + commitment)?
6. **Offer architecture (Hormozi)**: does each email have a job in a coherent offer structure (lead magnet → reveal-the-bigger-problem → tripwire → core offer)? Or are emails individually-justified but architecturally random?
7. **CTA progression**: does each email have a single CTA, and does the CTA progress (informational → soft → hard) across the sequence?
8. **Length & cadence**: are emails right-sized for awareness stage (Unaware = longer story; Most-aware = shorter offer-forward)?
9. **Unsubscribe respect**: does the sequence give the reader an out without burning trust?

## Round 2 — Debate prompts

### Schwartz ↔ Hormozi: "Awareness-stage progression vs offer-acceleration"
- Schwartz default: each email matches the reader's *current* awareness stage; force-progression breaks belief.
- Hormozi default: every email should accelerate toward the offer; long nurture sequences leak conversion.
- Surface: where in the sequence is awareness rushing ahead of belief? Where is nurture stalling?

### Wiebe ↔ Cialdini: "VOC subject lines vs authority-anchored subject lines"
- Wiebe default: subject lines pulled verbatim from VOC out-perform authored ones.
- Cialdini default: authority signals in subject lines lift open rates from a different lever.
- Surface: which subject lines should be VOC-led vs authority-led?

### Hormozi ↔ Schwartz: "Every-email-sells vs build-belief-then-sell"
- Hormozi default: every email should sell something (an idea, a click, an opt-in, the offer).
- Schwartz default: at Unaware/Problem-aware, sell-mode triggers rejection; build belief first.
- Surface: which emails violate the right rule for their stage?

## Round 3 — Synthesis instructions

Standard + polish.

### Polish candidates (REQUIRED for email-sequence stage)

Produce **3 sequence variants** (specifically: alternative subject-line + body-opener combinations for the 5 most-load-bearing emails):

- **A) VOC-led** (Wiebe): subject + opener leads with verbatim buyer language
- **B) Awareness-progression-led** (Schwartz): subject + opener strictly matches stage prescription
- **C) Offer-acceleration-led** (Hormozi): subject + opener structured for value-equation transparency

### Panel verdict

Recommend the variant for each email-by-email — it's normal for the verdict to be hybrid (e.g., emails 1-2 = VOC-led, emails 3-4 = awareness-progression, email 5 = offer-acceleration).

## Reference run

(none yet — first email-sequence-stage run pending)
