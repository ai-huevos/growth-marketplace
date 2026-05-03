# PRD Construction Playbook

## Purpose
Assemble a complete, hypothesis-traced PRD from validated extraction and hypothesis outputs. Every section must be populated — no placeholders. Adjust depth by project classification (greenfield / brownfield / enhancement).

---

## Assembly Protocol

### Pre-Construction Checklist
Before starting PRD assembly, verify:
- [ ] Phase 1 classification confirmed by user
- [ ] Phase 2 extraction validated by user (all open questions resolved)
- [ ] Phase 3 hypotheses approved by user (prioritization confirmed)

If any checkpoint is incomplete, return to that phase.

### Section-by-Section Construction Guide

#### Section 1: Executive Summary
- One paragraph maximum.
- Structure: What is this → Who is it for → Why now → Expected outcome.
- Write LAST (after all other sections are complete), summarize upward.
- No jargon. A non-technical stakeholder must understand this paragraph.

#### Section 2: Problem Statement
**Source:** Category 2 (Problems) + Problem Hypotheses

Construct from:
1. Primary customer segment (from Customer Hypothesis)
2. Core problem (highest severity + frequency from extraction)
3. Current workaround (from Problem Hypothesis status quo analysis)
4. Cost of status quo (quantified if transcript provided data; "requires quantification" if not)
5. Evidence trail (verbatim transcript references)

**Quality rule:** If you cannot describe the problem without referencing the solution, the problem statement is solution-contaminated. Rewrite.

#### Section 3: Business Hypotheses
**Source:** Full hypothesis set from Phase 3

Organize into three tiers:

**Must-Validate-Before-Build:**
- Block development until validated.
- Include full experiment cards.
- These are the riskiest, highest-impact assumptions.

**Validate-During-Build:**
- Instrument and measure during development.
- Include metric definitions and collection method.

**Monitor-Post-Launch:**
- Track with analytics dashboards.
- Include baseline and target values.

For each hypothesis, include: ID, type, statement, linked LOFA, experiment, success metric, kill criteria.

#### Section 4: Proposed Solution
**Source:** Category 3 (Solutions/Features) + Solution Hypotheses

Structure:
1. **Vision:** High-level narrative of what the product/feature does. Two to three sentences.
2. **Core loop:** The minimum cycle that delivers value — Trigger → Action → Result → Return. Diagram if complex.
3. **Key capabilities:** Bulleted list of what the system does. Each capability links to a functional requirement.
4. **Explicit non-goals:** What this does NOT do. List at least 3 non-goals. This prevents scope creep and AI overgeneration.

#### Section 5: User Personas & Jobs-to-be-Done
**Source:** Category 1 (Customer Segments) + Customer Hypotheses

For each persona:

| Field | Content |
|-------|---------|
| Name | Descriptive archetype (not a real name) |
| Segment | From extraction |
| Job-to-be-Done | Functional + emotional + social |
| Pain Level | CRITICAL / HIGH / MEDIUM / LOW |
| Current Solution | How they solve it today |
| Switching Cost | What it takes to move them |

**Rule:** Maximum 3 personas for greenfield, 2 for brownfield, 1 for enhancement. More than 3 means the ICP is unfocused.

#### Section 6: Functional Requirements
**Source:** Category 3 (Solutions) + Solution Hypotheses + user-resolved ambiguities

For each requirement:

```markdown
### FR-[ID]: [Requirement Name]

**Description:** What the system must do. Imperative voice.
**Linked hypothesis:** H-[ID]
**Priority:** Must-have | Should-have | Nice-to-have (MoSCoW)
**Acceptance criteria:**
- The system [specific behavior] when [condition]
- The system [specific behavior] when [edge case]
**Edge cases:**
- [What happens when input is invalid]
- [What happens under concurrent access]
- [What happens when dependency is unavailable]
```

**Prioritization rules (MoSCoW):**
- **Must-have:** Product is broken without this. Linked to Must-Validate hypotheses.
- **Should-have:** Strong user need, but a workaround exists. Linked to Validate-During hypotheses.
- **Nice-to-have:** Enhances experience. Linked to Monitor-Post-Launch hypotheses.
- **Won't-have (this time):** Captured but explicitly deferred. Prevents scope creep.

**FR numbering:** Sequential within the PRD. FR-001, FR-002, etc.

#### Section 7: Non-Functional Requirements
**Source:** Category 4 (Business Constraints) + technical signals from extraction

Cover these dimensions (skip only if genuinely not applicable with justification):

| NFR Category | What to specify |
|-------------|----------------|
| Performance | Response times, throughput, concurrent users |
| Security | Authentication, authorization, data protection, compliance |
| Scalability | Expected load growth, horizontal vs vertical scaling |
| Availability | Uptime target (99.9%?), disaster recovery, failover |
| Accessibility | WCAG level, assistive technology support |
| Internationalization | Languages, locales, RTL support |
| Data | Retention policies, backup frequency, GDPR/CCPA |

#### Section 8: Technical Constraints & Dependencies
**Source:** Category 4 (Business Constraints) + Category 7 (Decisions)

Structure by type:
1. **Existing systems:** Integration points, API contracts, shared databases — critical for brownfield.
2. **Technology constraints:** Required stack, infrastructure limits, vendor commitments.
3. **Third-party dependencies:** External APIs, services, licenses.
4. **Data requirements:** Sources, migrations, schema changes, ETL pipelines.
5. **Team constraints:** Skill gaps, training needs, hiring timeline.

**Brownfield addition:** Include a dependency map showing how the new capability connects to existing architecture. Specify backward compatibility requirements.

#### Section 9: Success Metrics & KPIs
**Source:** Category 5 (Success Criteria) + Hypothesis success metrics

| Metric | Baseline | Target | Measurement Method | Timeframe | Owner |
|--------|----------|--------|--------------------|-----------|-------|
| ...    | ...      | ...    | ...                | ...       | ...   |

**Rules:**
- Every metric must be measurable with available tooling or with defined instrumentation work.
- Include both leading indicators (input metrics) and lagging indicators (outcome metrics).
- If baseline is unknown, flag: "Baseline measurement required before launch."

#### Section 10: Risks & Mitigations
**Source:** Kill criteria from hypotheses + Category 4 (Constraints) + conflicts from extraction

| Risk | Probability | Impact | Mitigation | Owner | Trigger |
|------|------------|--------|------------|-------|---------|
| ...  | H/M/L      | H/M/L  | ...        | ...   | [When to activate mitigation] |

**Rule:** Include at least one risk from each category: technical, market, organizational, regulatory.

#### Section 11: Timeline & Milestones
**Source:** Category 4 (Business Constraints — timeline) + sharding output (Phase 5)

Structure as phase-gated with validation checkpoints:

```markdown
### Phase 1: [Name] — [Duration]
- Milestone: [Deliverable]
- Validation gate: [What must be true to proceed]
- Hypothesis validation: [Which experiments run in this phase]

### Phase 2: [Name] — [Duration]
...
```

**Rule:** Every phase boundary includes a hypothesis validation checkpoint. No phase proceeds without confirming the previous phase's experiments passed their success criteria.

#### Section 12: Open Questions
**Source:** Any unresolved items from all phases

Format:
```
- [Question]: [What needs to be answered]
  - Blocking: [What it blocks — specific FR-ID or EPIC-ID]
  - Owner: [Who can answer]
  - Deadline: [When answer is needed to not block development]
```

#### Section 13: Appendix
Include:
- Raw transcript reference (link or inline for short transcripts)
- Detailed experiment designs for Must-Validate hypotheses
- Competitor landscape (greenfield only)
- Change impact analysis (enhancement only)
- Rollback plan (enhancement only)

---

## Classification-Specific Adjustments

### Greenfield Additions
- Full Section 5 (Personas) with 3 personas
- Competitor landscape in Appendix
- All 4 hypothesis categories at full depth
- Architecture decision records (ADRs) for major technical choices

### Brownfield Additions
- Integration constraints section in Section 8
- Migration plan in Appendix
- Backward compatibility matrix: what existing functionality must be preserved
- Adoption hypothesis: "Existing users will adopt this because [reason]"

### Enhancement Modifications
- Section 5: single persona, no discovery
- Section 3: metric hypothesis only (no full experiment design)
- Add: Change Impact Analysis — what existing behavior changes
- Add: Rollback Plan — how to revert if the change fails
- Section 6: fewer FRs, focused on the specific change
- Skip: competitor analysis, customer discovery sections

---

## Cross-Reference Protocol

Maintain a traceability index at the bottom of the PRD:

```markdown
## Traceability Index

| Hypothesis | Functional Req | Epic | User Stories |
|-----------|---------------|------|-------------|
| H-001     | FR-001, FR-002 | EPIC-001 | US-001, US-002, US-003 |
| H-002     | FR-003        | EPIC-002 | US-004, US-005 |
| ...       | ...           | ...  | ...         |
```

**Rule:** No orphan IDs. Every H-ID must link to at least one FR-ID. Every FR-ID must link to at least one EPIC-ID (populated after Phase 5). Flag orphans for resolution.

---

## PRD Construction Checklist

Before presenting to user:
- [ ] All 13 sections populated (no placeholders, no "TBD" without justification)
- [ ] Executive summary written last, summarizes upward
- [ ] Every FR links to at least one hypothesis
- [ ] Every hypothesis has success criteria and kill criteria
- [ ] Non-goals are explicit (≥3 items)
- [ ] MoSCoW prioritization applied to all FRs
- [ ] Classification-specific sections included
- [ ] Traceability index complete (H → FR mapping; EPIC and US populated after Phase 5)
- [ ] No solution-contaminated problem statements
- [ ] No jargon used without definition
