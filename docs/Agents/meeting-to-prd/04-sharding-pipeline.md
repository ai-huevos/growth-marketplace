# Sharding Pipeline Playbook

## Purpose
Decompose an approved PRD into engineering-ready Epics and User Stories with full traceability.

---

## Sharding Rules

### Epic Decomposition
1. **One capability per Epic.** An Epic delivers ONE coherent user-facing value.
2. **Every Epic maps to at least one FR.** FR-ID linkage is mandatory.
3. **Every Epic links to its originating hypothesis.** H-ID linkage maintains the "why."
4. **Epics are independently deployable where possible.**
5. **Maximum 8 User Stories per Epic.** If exceeded, split into sub-Epics.

### User Story Rules
1. **One testable behavior per US.**
2. **Canonical format:** "As a [persona], I want [action], so that [outcome]."
3. **Given/When/Then acceptance criteria.** Minimum 2 per US.
4. **Definition of Done checklist** on every US.
5. **Target size: ≤3 story points.**
6. **Full upward linkage:** US → EPIC → FR → H.

### ID Convention
```
H-001, FR-001, EPIC-001, US-001, LOFA-001, EXP-001
```
Three-digit zero-padded, sequential within category.

---

## Epic Construction

### Step 1: Map FRs to Capabilities
Group FRs by the user capability they enable:
```
Capability: "User can manage their account"
├── FR-003: Update profile
├── FR-004: Change password
└── FR-005: Set notification preferences
→ EPIC-002: Account Management
```

### Step 2: Assess Complexity

| Size | Stories | Sprints | Signals |
|------|---------|---------|---------|
| S | 1-3 | 1 | Simple CRUD, no integrations |
| M | 4-5 | 1-2 | Multiple endpoints, business logic |
| L | 6-8 | 2-3 | Complex logic, integrations |
| XL | 8+ | 3+ | **Must split** |

### Step 3: Map Dependencies
```
EPIC-001 (Auth) ──blocks──→ EPIC-003 (Dashboard)
EPIC-002 (Data Model) ──blocks──→ EPIC-003 (Dashboard)
```
- Dependencies must be specific: what artifact flows between Epics.
- Circular dependencies are a design smell — refactor Epic boundaries.
- Flag Epics with no dependencies for parallel development.

### Step 4: Build Sequence
Order by dependency chain + priority:
- Must-have FRs → first sprints
- Infrastructure/auth Epics → always first
- Should-have → middle sprints
- Nice-to-have → later sprints or backlog

---

## User Story Construction

### Write the Story
```
As a [persona from PRD Section 5],
I want [specific, observable action],
so that [outcome connecting to hypothesis/business value].
```

### Write Acceptance Criteria (Given/When/Then)
```
Given [precondition],
When [user action],
Then [expected system response].
```
- Minimum 2, maximum 6 per US.
- Include happy path + at least one error/edge case.
- Each criterion must be independently testable.

### Write Definition of Done
Standard (every US):
- [ ] Code reviewed and approved
- [ ] Unit tests passing (≥80% coverage on new code)
- [ ] Integration test for this flow
- [ ] No new lint errors
- [ ] Documentation updated
- [ ] Acceptance criteria verified in staging
- [ ] No regression in existing tests

Story-specific additions: security review, cross-browser testing, migration verification as applicable.

### Document Edge Cases
- Idempotency (double submission)
- External service unavailability
- Session expiration mid-action
- Concurrent access conflicts

### Link Hypothesis
Note which H-ID this US validates and what metric to instrument.

---

## Classification Adjustments

### Greenfield
- Full Epic decomposition
- Include infrastructure Epics (auth, data model, CI/CD)
- Include "Experiment Infrastructure" Epic (analytics, feature flags)

### Brownfield
- Include "Integration" Epic for existing system connections
- Include "Migration" Epic if data changes needed
- AC must include backward compatibility verification

### Enhancement
- May skip Epic level — FR directly to US
- Include "Rollback" US with revert acceptance criteria
- Include "Feature Flag" US for gradual rollout

---

## Output Templates

### Epic: `EPIC-[ID]-[kebab-case-name].md`
```markdown
# EPIC-[ID]: [Name]
**Linked FR:** FR-[ID]
**Linked Hypothesis:** H-[ID]
**Priority:** [MoSCoW]
**Complexity:** S | M | L

## Description
[2-3 sentences: what capability this delivers]

## User Stories
| ID | Title | Priority | Points |
|----|-------|----------|--------|

## Dependencies
| Depends On | Reason | Blocking? |
|-----------|--------|-----------|

## Technical Notes
[Architecture, integration, complexity notes]
```

### User Story: `US-[ID]-[kebab-case-name].md`
```markdown
# US-[ID]: [Title]
**Epic:** EPIC-[ID]
**Priority:** [MoSCoW]
**Points:** [1-3]

## Story
As a [persona], I want [action], so that [outcome].

## Acceptance Criteria
### AC-1: [Name]
Given [precondition], When [action], Then [result].

## Definition of Done
- [ ] [Standard + story-specific items]

## Edge Cases
- [List]

## Linked Hypothesis
H-[ID]: [Validation contribution + metric]
```

---

## Sharding Checklist
- [ ] Every Epic maps to ≥1 FR and ≥1 Hypothesis
- [ ] Every US has "As a / I want / so that" format
- [ ] Every US has ≥2 Given/When/Then acceptance criteria
- [ ] Every US has Definition of Done
- [ ] Every US links to Epic and Hypothesis
- [ ] No US exceeds 3 story points
- [ ] No Epic exceeds 8 User Stories
- [ ] Dependencies mapped with reasons
- [ ] Build sequence respects dependency order
- [ ] No orphan IDs
