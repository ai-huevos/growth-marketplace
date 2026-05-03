# Evaluation Protocol Playbook

## Purpose
Score the completed PRD across 5 quality dimensions before delivery. Identify weaknesses and iterate until the average score reaches ≥90. This protocol runs after Phase 4 (Construct) and again after Phase 5 (Shard) to validate the full artifact chain.

---

## Scoring Dimensions

### Dimension 1: Completeness (Weight: 20%)

**What it measures:** All PRD sections populated, no placeholder text, no missing data.

| Score Range | Criteria |
|-------------|----------|
| 90-100 | All 13 sections populated. Every field has real content. Classification-specific sections included. No "TBD" without deadline and owner. |
| 70-89 | 1-2 sections have minor gaps (e.g., NFRs missing one category). All critical sections (problem, hypotheses, FRs, success metrics) complete. |
| 50-69 | 3+ sections have gaps. Critical sections partially populated. Multiple "TBD" without resolution plan. |
| Below 50 | Major sections missing. Placeholder text present. PRD is a skeleton, not a document. |

**Common failures:**
- Non-functional requirements section skipped "because we'll figure it out later"
- Success metrics lack baselines ("we don't know current numbers")
- Open questions section empty (there are always open questions)
- Explicit non-goals missing (invite scope creep)

**Remediation:** List every gap. For each, either populate from transcript evidence, flag as requiring user input, or justify omission with classification logic.

---

### Dimension 2: Traceability (Weight: 25%)

**What it measures:** Every requirement traces to a hypothesis; every User Story traces to a requirement; no orphan IDs.

| Score Range | Criteria |
|-------------|----------|
| 90-100 | Complete traceability chain: H → FR → EPIC → US. Traceability index accurate. Zero orphan IDs. Every hypothesis has ≥1 FR. Every FR has ≥1 US. |
| 70-89 | 1-2 broken links (FR without H, or US without Epic). Traceability index has minor errors. |
| 50-69 | Multiple broken links. Features exist without hypothesis justification. Traceability index incomplete. |
| Below 50 | No traceability. Requirements list reads like a feature wishlist with no "why." |

**Common failures:**
- Features added "because stakeholder X requested it" without a hypothesis
- User Stories that link to an Epic but skip the FR and H chain
- Hypotheses generated but never referenced in FRs
- Traceability index not updated after Phase 5 sharding

**Remediation:** Run an orphan scan:
1. List all H-IDs → check each appears in ≥1 FR
2. List all FR-IDs → check each appears in ≥1 EPIC
3. List all EPIC-IDs → check each contains ≥1 US
4. List all US-IDs → check each links to an EPIC
5. Fix or justify every break

---

### Dimension 3: Testability (Weight: 25%)

**What it measures:** Every hypothesis has measurable success criteria; every User Story has Given/When/Then acceptance criteria.

| Score Range | Criteria |
|-------------|----------|
| 90-100 | Every hypothesis has quantified success and failure thresholds. Every US has ≥2 Given/When/Then criteria. Kill criteria are specific and pre-committed. Every success metric has a measurement method defined. |
| 70-89 | 1-2 hypotheses lack quantified thresholds (qualitative only). Most US have Given/When/Then. 1-2 vague acceptance criteria. |
| 50-69 | Multiple hypotheses with "we'll know it when we see it" criteria. Several US missing Given/When/Then. Acceptance criteria describe outcomes, not behaviors. |
| Below 50 | No measurable criteria on hypotheses. US acceptance criteria are aspirational ("should be fast," "must be user-friendly"). |

**Common failures:**
- Hypothesis success metric: "users like it" (not measurable)
- Acceptance criteria: "the page loads quickly" (what's quickly? 200ms? 2s? 20s?)
- Kill criteria: "if it doesn't work" (what does "work" mean?)
- Missing edge case coverage in acceptance criteria

**Remediation:** For every vague criterion, ask: "How would a QA engineer write an automated test for this?" If they can't, rewrite until they can.

---

### Dimension 4: Clarity (Weight: 15%)

**What it measures:** Unambiguous language, no undefined jargon, no passive voice, consistent terminology.

| Score Range | Criteria |
|-------------|----------|
| 90-100 | Every statement is unambiguous. Technical terms defined on first use. Active voice throughout. Consistent terminology (same concept = same word everywhere). No pronoun ambiguity. |
| 70-89 | 1-3 ambiguous statements. Minor jargon without definition. Occasional passive voice. |
| 50-69 | Multiple ambiguous statements. Inconsistent terminology. Significant passive voice. Reader must infer meaning. |
| Below 50 | PRD requires a meeting to explain what it means. Jargon-heavy. Passive voice dominant. |

**Common failures:**
- "The system should handle this appropriately" (what does "appropriately" mean?)
- "Users" used to mean both end-users and admin users interchangeably
- "The data will be processed" (by whom? when? how?)
- Acronyms used without expansion

**Remediation:** 
1. Search for: "appropriate," "proper," "correct," "handle," "process," "manage" — these are vagueness markers. Replace with specific behaviors.
2. Search for passive voice ("will be," "is processed," "are handled") — convert to active with explicit subject.
3. Build a terminology glossary at the top of the PRD if ≥5 domain terms are used.

---

### Dimension 5: Actionability (Weight: 15%)

**What it measures:** An engineering team can start work from this document without additional meetings.

| Score Range | Criteria |
|-------------|----------|
| 90-100 | Engineer reads PRD + Epics + US and can begin coding. Technical constraints are specific. APIs are described. Data models are outlined. Dependencies are mapped with sequence. No "ask PM" moments. |
| 70-89 | 1-2 areas need clarification before coding. Most technical details sufficient. Build sequence clear. |
| 50-69 | Multiple "ask PM" moments. Technical details thin. Build sequence unclear. Engineer would need a kickoff meeting. |
| Below 50 | PRD is a business document only. No technical guidance. Engineer has to design everything from scratch. |

**Common failures:**
- PRD describes WHAT but not HOW at the architectural level
- No data model or API contract sketches for complex features
- Dependencies listed without sequence or rationale
- No build sequence — all Epics appear equal priority
- Acceptance criteria that require design decisions ("make it look good")

**Remediation:** For each Epic, ask: "Could a senior engineer start coding this tomorrow with only this document?" If not, add the missing technical context.

---

## Scoring Process

1. Read the complete PRD + Epics + User Stories.
2. Score each dimension independently (do not let one dimension influence another).
3. Record: score, top issue, specific fix.
4. Calculate weighted average.
5. If average < 90: apply fixes, re-score. Do not deliver.
6. If average ≥ 90: proceed to delivery.

**Output format:**

```markdown
## PRD Quality Score

| Dimension | Score | Weight | Weighted | Top Issue | Fix |
|-----------|-------|--------|----------|-----------|-----|
| Completeness | XX | 20% | XX | [Issue] | [Fix] |
| Traceability | XX | 25% | XX | [Issue] | [Fix] |
| Testability | XX | 25% | XX | [Issue] | [Fix] |
| Clarity | XX | 15% | XX | [Issue] | [Fix] |
| Actionability | XX | 15% | XX | [Issue] | [Fix] |
| **Average** | | | **XX** | | |

**Verdict:** PASS (≥90) | ITERATE (fix and re-score)
```

---

## Post-Sharding Validation

Run an additional check after Phase 5:

- [ ] Traceability index is fully populated (H → FR → EPIC → US)
- [ ] Every Epic has a build sequence position
- [ ] Dependencies between Epics are acyclic
- [ ] Total story points are realistic for stated timeline
- [ ] No Epic exceeds 8 US; no US exceeds 3 points
- [ ] Classification-specific Epics are present (Integration, Migration, Rollback as applicable)

---

## Delivery Checklist

Before final delivery to user:
- [ ] PRD quality score ≥ 90 average
- [ ] All user validation gates passed (categorization, extraction, hypotheses, PRD, sharding)
- [ ] Traceability index is complete and accurate
- [ ] All open questions have owners and deadlines
- [ ] Executive summary written last, accurately reflects the full PRD
- [ ] File naming convention followed (PRD-[name].md, EPIC-[ID]-[name].md, US-[ID]-[name].md)
