---
stage: sales-deck
artifact_types:
  - sales-decks/*.md
  - investor pitch decks
  - 6-slide proposal decks
  - deck scripts (slide narratives)
lenses:
  - dunford     # Sales Pitch Setup → Follow-Through; positioning hierarchy
  - cialdini    # Authority, social proof, commitment, scarcity placement per slide
  - hormozi     # Value Equation per slide; offer presentation discipline
  - shepard     # Discovery-driven selling, qualification within the deck
debate_pairs:
  - [dunford, cialdini, "structured Setup vs trust-building openness"]
  - [hormozi, dunford, "offer-forward decks vs positioning-forward decks"]
  - [shepard, hormozi, "qualification within the deck vs offer-acceleration"]
output_format: polish-candidates
trigger_phrases:
  - "panel sales deck"
  - "review the deck"
  - "stress test the pitch"
  - "/panel sales-deck <path>"
default_output_path: "clients/<client>/diagnostics/sales-deck-panel-<date>.md"
---

# Sales-Deck Stage Protocol

> Use when reviewing investor decks, sales presentations, or 6-slide proposals. The 4-lens roster covers narrative architecture (Dunford), persuasion mechanics (Cialdini), value-equation transparency (Hormozi), and discovery-driven selling (Shepard).

## Round 1 — Independent diagnosis questions

1. **Sales Pitch Setup**: does the deck open with a shared insight (Setup) BEFORE the product (Follow-Through)? Or does it jump to product?
2. **Slide hierarchy**: 6-slide max test. Is each slide load-bearing, or is there padding?
3. **Authority placement (Cialdini)**: where does authority appear (founder track record, named clients)? Too early = looks like bragging; too late = unsupported claims.
4. **Social proof timing**: where do testimonials / case studies land? Are they tied to specific objections (= load-bearing) or sprinkled (= filler)?
5. **Value Equation visibility**: is the value math (DO × PL / TD × ES) visible to the viewer, or hidden behind generic outcome claims?
6. **Qualification loops (Shepard)**: does the deck self-disqualify the wrong buyer? Or is it pitching the same content to everyone?
7. **Scarcity / urgency**: real or theatrical? Does the deck deploy capacity, deadline, or social-pressure scarcity? Defensible?
8. **CTA & next-step**: is the close offer-forward (Most-aware) or discovery-forward (Solution-aware)? Does it match the audience?

## Round 2 — Debate prompts

### Dunford ↔ Cialdini: "Structured Setup vs trust-building openness"
- Dunford default: Setup → Alternatives & Limits → Perfect World → Product. Disciplined structure converts.
- Cialdini default: open with rapport, liking, unity. Structure too early reads as a pitch, not a conversation.
- Surface: is the deck's opening structurally clean but emotionally cold? Or warm but structurally muddled?

### Hormozi ↔ Dunford: "Offer-forward decks vs positioning-forward decks"
- Hormozi default: the offer is the lead. Decks should make value-math obvious by slide 3.
- Dunford default: positioning sets the frame. Without positioning first, the offer evaluates against the wrong category.
- Surface: where does this deck spend its first 3 slides — positioning or offer? Is that right for the audience?

### Shepard ↔ Hormozi: "Qualification within the deck vs offer-acceleration"
- Shepard default: build qualification into every slide; let bad-fit buyers self-disqualify.
- Hormozi default: maximum offer clarity; let the buyer say no for the right reasons (price, fit) not the wrong ones (confusion).
- Surface: where would a slide that disqualifies bad-fit buyers actually accelerate the right deals?

## Round 3 — Synthesis instructions

Standard + polish.

### Polish candidates (REQUIRED for sales-deck stage)

Produce **3 6-slide deck outlines**, each with a different lens emphasis:
- **A) Setup-led** (Dunford): slide 1 = shared insight, slide 2 = alternatives & limits, slide 3 = perfect world, slide 4 = product, slide 5 = pricing/risk reversal, slide 6 = next step
- **B) Offer-led** (Hormozi): slide 1 = single-sentence positioning, slide 2 = product timeline, slide 3 = case + Loom, slide 4 = vs alternatives, slide 5 = pricing + guarantee, slide 6 = next step
- **C) Qualification-led** (Shepard): slide 1 = audience match, slide 2 = trigger questions, slide 3 = product + scope, slide 4 = case fit, slide 5 = pricing + commitment ladder, slide 6 = next step

### Panel verdict

Recommend the variant whose convergent decision-rule violations are minimal AND that matches the audience's awareness stage.

## Reference run

(none yet — first sales-deck-stage run pending)
