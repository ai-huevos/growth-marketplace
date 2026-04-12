---
name: marketing-atomize
description: "Turn a single long-form asset (whitepaper/report) into a full-funnel, multi-channel marketing campaign."
required_args: ["input_asset", "target_personas"]
---

# Marketing Atomization Workflow

This workflow orchestrates the decomposition of a core asset into multiple channel-specific deliverables, ensuring SEO optimization, audience targeting, and brand compliance.

## Pre-requisites
- Input asset must be uploaded or accessible via URL.
- Active Suit applied (e.g., `auteco-brand`).

## Phase Orchestration

1. **Phase 1: CONTEXT (Ingest & Deconstruct)**
   - Run `phases/context.md`
   - Goal: Extract core themes, key statistics, quotable moments, and primary value propositions from the long-form asset.
   - Output triggers: `extracted_themes.json`

2. **Phase 2: PLAN (Strategy & Mapping)**
   - Run `phases/plan.md`
   - Goal: Map the extracted themes to the target personas. Generate a localized content blueprint (e.g., 1 Blog Post, 5 Emails, 3 Social Threads).
   - Output triggers: `atomization_blueprint.md`

3. **Phase 3: SUIT (Brand Voice Enforcement)**
   - Run `phases/suit.md`
   - Goal: Load the `auteco-brand` suit to inject compliance rules, style parameters, and prohibited terms into the generation prompt.

4. **Phase 4: BUILD (Drafting)**
   - Run `phases/build.md`
   - Goal: Execute the blueprint using the context. LLM drafts the SEO-optimized blog, the email nurture sequence, and social posts.
   - Output triggers: `drafts/` directory population.

5. **Phase 5: TEST (Compliance & Quality Check)**
   - Run `phases/test.md`
   - Goal: Cross-reference drafted content against the Brand Suit and the original source asset to prevent hallucination. Ensure reading-level matches personas.

6. **Phase 6: REVIEW (Human Approval)**
   - Run `phases/review.md`
   - Goal: Present the generated assets via the propose-then-commit UI for the Marketing Manager to approve or reject.

7. **Phase 7: SHIP (Distribution)**
   - Run `phases/ship.md`
   - Goal: Execute automated deployment (e.g., schedule in Hubspot, push to CMS buffer, save to approved Drive folder).
