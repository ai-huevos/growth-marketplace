# PRD: [Product/Feature Name]

## Meta
- **Author:** [From transcript participants]
- **Date:** [Meeting date]
- **Classification:** Greenfield | Brownfield | Enhancement
- **Status:** Draft | In Review | Approved
- **Version:** 1.0
- **Source transcript:** [Link or filename]

---

## 1. Executive Summary
[One paragraph. What is this → Who is it for → Why now → Expected outcome. Write LAST.]

## 2. Problem Statement
- **Customer segment:** [Primary segment from Customer Hypothesis]
- **Problem:** [Core problem — active voice, specific]
- **Current workaround:** [How they solve it today]
- **Cost of status quo:** [Quantified if possible; "requires quantification" if not]
- **Evidence:** [Verbatim transcript references with speaker attribution]

## 3. Business Hypotheses

### Must-Validate-Before-Build

#### H-[ID]: [Hypothesis Name]
- **Type:** Customer | Problem | Solution | Channel | Revenue
- **Statement:** We believe [segment] will [action] because [reason].
- **Leap-of-Faith Assumption:** [What must be true]
- **Test Method:** [Experiment design]
- **Success Metric:** [Quantified threshold — pass/fail]
- **Timeline:** [Duration to validate]
- **Kill Criteria:** If [failing result] within [timeframe], then [pivot/kill/persevere].
- **Source:** [Transcript reference — speaker + quote]

### Validate-During-Build
[Same format, lighter experiment design — instrumentation-based]

### Monitor-Post-Launch
[Same format, metrics-only — tracked via analytics]

## 4. Proposed Solution
- **Vision:** [2-3 sentences — what the product/feature does]
- **Core loop:** [Trigger → Action → Result → Return]
- **Key capabilities:**
  - [Capability 1 — links to FR-ID]
  - [Capability 2 — links to FR-ID]
- **Explicit non-goals:** [≥3 items — what this does NOT do]
  - [Non-goal 1]
  - [Non-goal 2]
  - [Non-goal 3]

## 5. User Personas & Jobs-to-be-Done

| Persona | Segment | Job-to-be-Done | Pain Level | Current Solution | Switching Cost |
|---------|---------|---------------|------------|------------------|---------------|
| [Name] | [Segment] | [Functional + emotional] | CRITICAL/HIGH/MEDIUM/LOW | [Status quo] | [Effort to switch] |

## 6. Functional Requirements

### FR-[ID]: [Requirement Name]
- **Description:** [What the system must do — imperative voice]
- **Linked hypothesis:** H-[ID]
- **Priority:** Must-have | Should-have | Nice-to-have
- **Acceptance criteria:**
  - The system [behavior] when [condition]
  - The system [behavior] when [edge case]
- **Edge cases:**
  - [Invalid input handling]
  - [Concurrent access handling]
  - [Dependency unavailability]

## 7. Non-Functional Requirements

| Category | Requirement | Target |
|----------|------------|--------|
| Performance | [Response time, throughput] | [Specific value] |
| Security | [Auth, data protection, compliance] | [Standard/level] |
| Scalability | [Load growth, scaling strategy] | [Specific value] |
| Availability | [Uptime, DR, failover] | [Percentage] |
| Accessibility | [WCAG level, AT support] | [Standard] |
| Data | [Retention, backup, privacy] | [Policy] |

## 8. Technical Constraints & Dependencies

### Existing Systems
- [System]: [Integration point, API contract]

### Technology Constraints
- [Constraint]: [Required stack, infrastructure limits]

### Third-Party Dependencies
- [Service]: [API, license, SLA]

### Data Requirements
- [Source]: [Schema, migration, ETL needs]

## 9. Success Metrics & KPIs

| Metric | Baseline | Target | Measurement Method | Timeframe | Owner |
|--------|----------|--------|--------------------|-----------|-------|
| [Name] | [Current value] | [Target value] | [How measured] | [When] | [Who] |

## 10. Risks & Mitigations

| Risk | Probability | Impact | Mitigation | Owner | Trigger |
|------|------------|--------|------------|-------|---------|
| [Risk] | H/M/L | H/M/L | [Action] | [Who] | [When to activate] |

## 11. Timeline & Milestones

### Phase 1: [Name] — [Duration]
- **Milestone:** [Deliverable]
- **Validation gate:** [What must be true to proceed]
- **Hypothesis validation:** [Which experiments run here]

### Phase 2: [Name] — [Duration]
[Same structure]

## 12. Open Questions

| Question | Blocking | Owner | Deadline |
|----------|----------|-------|----------|
| [What needs answering] | [FR-ID or EPIC-ID blocked] | [Who answers] | [When needed] |

## 13. Appendix
- Raw transcript reference
- Detailed experiment designs (Must-Validate hypotheses)
- Competitor landscape (greenfield only)
- Change impact analysis (enhancement only)
- Rollback plan (enhancement only)
- Migration plan (brownfield only)
- Backward compatibility matrix (brownfield only)

---

## Traceability Index

| Hypothesis | Functional Req | Epic | User Stories |
|-----------|---------------|------|-------------|
| H-[ID] | FR-[ID] | EPIC-[ID] | US-[ID], US-[ID] |
