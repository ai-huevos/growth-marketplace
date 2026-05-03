---
stage: funnel
artifact_types:
  - funnel-architecture/*.md
  - escala-value-ladder.md (when reviewed as a funnel, not as an offer)
  - traffic→conversion plans
  - lead-magnet → tripwire → frontend → backend chains
lenses:
  - hormozi     # ESCALA tier logic, lead magnet architecture, ascension triggers
  - schwartz    # Awareness-stage flow across funnel surfaces
  - laja        # Conversion-rate discipline, friction audits
  - christensen # JTBD continuity from awareness to commitment
debate_pairs:
  - [hormozi, christensen, "ascension triggers vs JTBD continuity"]
  - [schwartz, laja, "stage-specific copy vs friction reduction"]
  - [hormozi, schwartz, "lead magnet as offer vs as Unaware-stage opener"]
output_format: hybrid
trigger_phrases:
  - "panel funnel"
  - "review the funnel architecture"
  - "stress test the value ladder"
  - "/panel funnel <path>"
default_output_path: "clients/<client>/diagnostics/funnel-panel-<date>.md"
---

# Funnel Stage Protocol

> Use when reviewing end-to-end funnel design — from traffic source through tripwire / lead magnet / frontend / middle / backend. 4-lens roster covers tier engineering (Hormozi), awareness flow (Schwartz), conversion discipline (Laja), and strategic continuity (Christensen).

## Round 1 — Independent diagnosis questions

1. **Tier completeness**: are all ESCALA tiers present (Bait → Frontend → Middle → Backend) or is the funnel missing a stage?
2. **Awareness coverage**: does each funnel surface match a Schwartz awareness stage? Are there awareness-stage gaps (e.g., no Most-aware close)?
3. **Ascension triggers**: between each tier, is there a designed trigger that converts buyers upward? Or are triggers organic (= zero ascension math)?
4. **Lead magnet architecture**: is the lead magnet a complete solution to a narrow problem that reveals another problem solved by the core offer? Or is it a generic content giveaway?
5. **Friction audit (Laja)**: at each step, what friction exists? Is it intentional (filter) or accidental (leak)?
6. **JTBD continuity**: does the funnel serve ONE consistent job across all tiers, or does the tier-progression require the buyer to switch jobs?
7. **Pricing geometry**: is the price progression sustainable (tier N+1 ≥ 5-10× tier N)? Or are tiers stacked too close (cannibalization)?
8. **Capacity vs demand**: does each tier's capacity (delivery cost, founder time, agent cost) match its expected volume from the prior tier's conversion rate?

## Round 2 — Debate prompts

### Hormozi ↔ Christensen: "Ascension triggers vs JTBD continuity"
- Hormozi default: design ascension triggers between every tier; revenue is a function of trigger conversion.
- Christensen default: a buyer's JTBD changes after each tier delivers — designing triggers without re-checking the next-tier job creates conversion theater.
- Surface: are the doc's ascension triggers solving the next-tier job, or just pushing the buyer up?

### Schwartz ↔ Laja: "Stage-specific copy vs friction reduction"
- Schwartz default: each surface gets stage-matched copy; copy is the conversion lever.
- Laja default: friction (form fields, page weight, ambiguity) often outweighs copy; reduce friction first.
- Surface: at each funnel step, which intervention has higher leverage — copy quality or friction?

### Hormozi ↔ Schwartz: "Lead magnet as offer vs as Unaware-stage opener"
- Hormozi default: lead magnet is a complete offer with its own value equation.
- Schwartz default: at the top of the funnel (often Unaware), the lead magnet is permission to start a conversation, not a sale.
- Surface: is the lead magnet over-monetized (Hormozi over-applied) or under-monetized (Schwartz over-applied)?

## Round 3 — Synthesis instructions

Standard + scorecard.

### Funnel scorecard (REQUIRED for funnel stage)

| Dimension | Score 1-10 | Notes |
|---|---|---|
| Tier completeness | _ | which tiers exist / missing |
| Awareness coverage | _ | stages covered / gaps |
| Ascension trigger design | _ | per-tier trigger quality |
| Lead-magnet architecture | _ | $100M Leads pattern fit |
| Friction at each step | _ | intentional vs accidental |
| JTBD continuity | _ | one job vs multiple |
| Pricing geometry | _ | tier-spacing |
| Capacity-demand fit | _ | bottleneck vs slack |
| **Composite funnel health** | _/10 | weighted average |

### Top 5 leaks + Top 5 gains

- **Top 5 leaks**: where is the funnel currently bleeding the most conversion?
- **Top 5 gains**: where would the highest-leverage intervention land?

### Panel verdict

Name the single biggest unrealized funnel gain + the single biggest leak to plug first.

## Reference run

(none yet — first funnel-stage run pending)
