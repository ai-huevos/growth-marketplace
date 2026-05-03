# Transcript Extraction Playbook

## Purpose
Parse raw meeting transcripts into structured signal categories. Separate actionable intelligence from noise. Attribute every signal to a speaker with confidence scoring.

## Signal Taxonomy

Extract into exactly these 8 categories. If a category is empty after extraction, mark it "No signals detected" — do not omit the category.

### Category 1: Customer Segments Mentioned
Capture every reference to who the product serves. Include:
- Named segments (e.g., "small business owners," "enterprise DevOps teams")
- Implicit segments (e.g., "people who struggle with X" — infer segment, tag as INFERRED)
- Segment qualifiers (size, industry, geography, behavior)

**Extract format:**
```
- [Segment]: "[verbatim quote]" — [Speaker], [Confidence: EXPLICIT | INFERRED]
```

### Category 2: Problems / Pain Points
Capture every statement about what's wrong, what's hard, what's broken.
- Distinguish between stated problems (speaker describes pain) and observed problems (speaker describes behavior that implies pain).
- Severity indicators: "critical," "annoying," "blocking," "nice-to-fix"
- Frequency indicators: "always," "sometimes," "edge case"

**Extract format:**
```
- [Problem]: "[verbatim quote]" — [Speaker], Severity: [CRITICAL | HIGH | MEDIUM | LOW], Confidence: [EXPLICIT | INFERRED]
```

### Category 3: Proposed Solutions / Features
Capture every suggestion for what to build or change.
- Who proposed it and their rationale
- Dependencies mentioned (other features, systems, data)
- Dissent or alternatives proposed by other speakers

**Extract format:**
```
- [Solution/Feature]: "[verbatim quote]" — [Speaker]
  - Rationale: [why they proposed it]
  - Dependencies: [mentioned dependencies]
  - Dissent: [any pushback, with speaker attribution]
```

### Category 4: Business Constraints
Capture hard boundaries on the solution space.
- Budget constraints (dollars, headcount, time allocation)
- Timeline constraints (deadlines, milestones, launch dates)
- Regulatory/compliance constraints (HIPAA, GDPR, SOC2, industry-specific)
- Technical constraints (existing stack, infrastructure limits, vendor lock-in)
- Organizational constraints (team skills, approval chains, political blockers)

**Extract format:**
```
- [Constraint type]: "[verbatim quote]" — [Speaker]
  - Hard/Soft: [is this negotiable?]
```

### Category 5: Success Criteria Discussed
Capture every reference to how they'll know this worked.
- Quantified metrics (e.g., "reduce churn by 15%")
- Qualitative targets (e.g., "users should feel delighted")
- Owner of the metric if mentioned

**Extract format:**
```
- [Metric/Criteria]: "[verbatim quote]" — [Speaker]
  - Target value: [specific number if mentioned, else "TBD"]
  - Measurement method: [how they'll measure, if discussed]
```

### Category 6: Open Questions / Ambiguities
Capture everything unclear, contradictory, or unresolved.
- Questions asked but not answered during the meeting
- Contradictions between speakers
- Vague statements that require precision (e.g., "make it faster" — how fast?)
- Assumptions made without evidence

**Extract format:**
```
- [Question/Ambiguity]: [what's unclear]
  - Context: "[relevant quote]" — [Speaker]
  - Resolution needed from: [who can answer this]
```

### Category 7: Decisions Made
Capture every commitment made during the meeting.
- The decision itself
- Who made or approved it
- Rationale given
- Any dissent or conditions attached

**Extract format:**
```
- [Decision]: "[verbatim quote or summary]" — decided by [Speaker]
  - Rationale: [why]
  - Conditions: [any caveats]
  - Dissent: [any disagreement, with speaker attribution]
```

### Category 8: Action Items
Capture every task assigned during the meeting.
- What needs to happen
- Who owns it
- Deadline if mentioned
- Dependency on other actions

**Extract format:**
```
- [Action]: [what] — Owner: [Speaker], Deadline: [date or "unspecified"]
  - Depends on: [other actions if any]
```

---

## Noise Filtering Rules

**Discard (do not extract):**
- Greetings, pleasantries, small talk ("How was your weekend?")
- Scheduling logistics ("Let's meet again Thursday")
- Audio artifacts, filler words, false starts
- Jokes and side conversations unrelated to the product/business
- Repeated statements that add no new information (capture once)

**Retain even if tangential:**
- Anecdotes about customer behavior (often contain hidden problem signals)
- Competitive references ("I saw that Competitor X does...")
- Emotional statements about user frustration (severity indicators)
- "What if" explorations (potential solution signals)

---

## Speaker Attribution Rules

- Attribute every signal to a speaker. Use the name from the transcript.
- If the transcript doesn't identify speakers, use Speaker-A, Speaker-B, etc. and note the limitation.
- When multiple speakers agree on a point, attribute to the first speaker and note "+[Speaker-B, Speaker-C] concur."
- When speakers disagree, capture both positions with full attribution.

---

## Conflict Detection

When two speakers contradict each other:
1. Capture both positions verbatim.
2. Mark the signal as CONFLICT.
3. Do not resolve the conflict — surface it in Category 6 (Open Questions) for user resolution.
4. Note which position has more support from other speakers if applicable.

**Format:**
```
⚠️ CONFLICT:
- Position A: "[quote]" — [Speaker-A]
- Position B: "[quote]" — [Speaker-B]
- Resolution needed before: Phase 3 (Hypothesize)
```

---

## Confidence Scoring

Every signal gets a confidence tag:

| Level | Definition | Example |
|-------|-----------|---------|
| **EXPLICIT** | Speaker directly stated this as fact or requirement | "We must support HIPAA compliance" |
| **STRONG** | Speaker clearly implied this with specific language | "Our users keep complaining about load times" |
| **INFERRED** | Signal derived from context, behavior description, or tone | Speaker described a workaround — inferred pain point |
| **WEAK** | Mentioned in passing, speculative, or conditional | "Maybe we could look at..." |

**Rule:** INFERRED and WEAK signals are still extracted but flagged. They generate hypotheses that need stronger validation.

---

## Extraction Quality Checklist

Before presenting extraction to user:
- [ ] All 8 categories are present (even if empty)
- [ ] Every signal has speaker attribution
- [ ] Every signal has confidence scoring
- [ ] Conflicts are captured with both positions
- [ ] No noise (greetings, logistics) leaked into signals
- [ ] Verbatim quotes used wherever possible
- [ ] Open questions are specific enough to resolve ("What did Speaker-A mean by 'fast'?" not "Some things are unclear")
