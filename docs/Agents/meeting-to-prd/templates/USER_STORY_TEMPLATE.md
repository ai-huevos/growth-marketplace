# US-[ID]: [Story Title]

**Epic:** EPIC-[ID]
**Priority:** Must-have | Should-have | Nice-to-have
**Story Points:** [1-3]

---

## Story
As a [persona from PRD Section 5],
I want [specific, observable action],
so that [outcome connecting to hypothesis/business value].

## Acceptance Criteria

### AC-1: [Happy path name]
**Given** [precondition — the state of the system before the action],
**When** [action — what the user does],
**Then** [expected result — what the system does in response].

### AC-2: [Error/edge case name]
**Given** [precondition],
**When** [action that triggers error or edge case],
**Then** [expected error handling or fallback behavior].

### AC-3: [Boundary condition name] (if applicable)
**Given** [boundary precondition],
**When** [action at boundary],
**Then** [expected boundary behavior].

## Definition of Done

### Standard
- [ ] Code reviewed and approved by at least one peer
- [ ] Unit tests passing (≥80% coverage on new code)
- [ ] Integration test for this user flow
- [ ] No new linting errors or warnings
- [ ] Documentation updated (API docs, user-facing docs if applicable)
- [ ] Acceptance criteria verified in staging environment
- [ ] No regression in existing tests

### Story-Specific
- [ ] [Additional items based on story type — security review, cross-browser test, migration verification, etc.]

## Edge Cases
- [What happens if the user submits the form twice rapidly?]
- [What happens if the external API is unavailable?]
- [What happens if the user's session expires mid-action?]
- [What happens with concurrent access from two sessions?]

## Linked Hypothesis
**H-[ID]:** [How this story contributes to validating the hypothesis.]
**Instrumentation:** [What metric to track from this story's implementation. Specific event name, data point, or analytics query.]

## Notes
[Any additional context for the implementing engineer — design mockup references, API documentation links, related US that share data or UI.]
