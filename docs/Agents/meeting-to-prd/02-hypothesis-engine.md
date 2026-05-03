# Hypothesis Engine Playbook

## Purpose
Transform extracted transcript signals into testable business hypotheses using Steve Blank's Customer Development methodology and Jeff Bussgang's Experimentation Machine framework. Every hypothesis must be falsifiable, measurable, and time-bound.

---

## Framework 1: Steve Blank — Customer Development Hypotheses

Generate one or more hypotheses in each of these four categories from the extracted signals. If a category has no supporting signals, mark it as "INSUFFICIENT DATA — requires additional discovery."

### Customer Hypothesis
**Question:** Who is the customer? What job are they hiring this product to do?

**Construction from signals:**
1. Take signals from Category 1 (Customer Segments) and Category 5 (Success Criteria).
2. Apply Jobs-to-be-Done framing: "[Segment] hires this product to [functional job] so they can [emotional/social outcome]."
3. Distinguish between the user (uses the product), the buyer (pays for it), and the influencer (recommends it). Meeting transcripts often conflate these.

**Hypothesis format:**
```
We believe [customer segment] is our primary [user/buyer/influencer] because
[evidence from transcript]. They hire this product to [job-to-be-done].
```

**Validation questions to attach:**
- Can we name 10 specific individuals or companies in this segment?
- Can we reach them through a channel we control?
- Are they actively spending money to solve this problem today?

### Problem Hypothesis
**Question:** Is this a real problem? How do they solve it today? What does the status quo cost?

**Construction from signals:**
1. Take signals from Category 2 (Problems/Pain Points).
2. Rank by severity × frequency. Critical + always > Low + edge case.
3. Identify the current workaround (competitors, manual processes, ignoring the problem).
4. Quantify cost of status quo if the transcript provides data. If not, flag as GAP.

**Hypothesis format:**
```
We believe [customer segment] experiences [problem] with severity [level]
and frequency [level]. Their current workaround is [status quo], which
costs them [quantified cost or "TBD"]. Evidence: [transcript reference].
```

**Kill criteria:** If fewer than 3 out of 10 target customers confirm this problem in discovery interviews, deprioritize.

### Solution Hypothesis
**Question:** Does this solution address the problem better than alternatives?

**Construction from signals:**
1. Take signals from Category 3 (Proposed Solutions/Features).
2. Map each proposed solution to a validated problem hypothesis. Solutions without problems are features looking for justification — flag them.
3. Identify the "10x better" threshold: how is this measurably better than the current workaround?
4. Note dissent from the transcript — if speakers disagreed on the solution, the hypothesis needs stronger validation.

**Hypothesis format:**
```
We believe [solution/feature] will solve [problem] for [segment] by
[mechanism]. This is better than [current workaround] because [10x factor].
Dissent: [any opposing views from transcript].
```

**Kill criteria:** If a concierge test (manual delivery of the solution) doesn't produce the expected outcome, the solution hypothesis fails.

### Channel / Revenue Hypothesis
**Question:** How will this reach customers? How will it generate revenue?

**Construction from signals:**
1. Take signals from Categories 4 (Business Constraints) and 5 (Success Criteria).
2. Identify distribution assumptions (direct sales, self-serve, marketplace, partner channel).
3. Identify revenue model assumptions (subscription, transaction fee, per-seat, freemium).
4. Flag any pricing discussions from the transcript.

**Hypothesis format:**
```
We believe [segment] will [discover/purchase] this product through [channel]
and pay [pricing model] because [rationale]. Revenue target: [metric from
transcript or "TBD"].
```

**Kill criteria:** If CAC exceeds LTV within the first cohort test, the channel or pricing model needs revision.

---

## Framework 2: Jeff Bussgang — Experimentation Machine

Apply this framework to every hypothesis generated above. The Experimentation Machine converts assumptions into structured experiments.

### Step 1: Identify Leap-of-Faith Assumptions

For each hypothesis, ask: "What must be true for this hypothesis to hold, that we do NOT yet have evidence for?"

**Common Leap-of-Faith categories:**
- Demand assumption: Customers want this enough to [sign up / pay / switch]
- Value assumption: The product delivers enough value to retain users
- Growth assumption: The acquisition channel scales economically
- Technical assumption: The solution is feasible within constraints
- Timing assumption: The market is ready now (not too early, not too late)

**Format:**
```
LOFA-[ID]: [Assumption statement]
- Linked to: H-[ID]
- Category: [Demand | Value | Growth | Technical | Timing]
- Risk level: [HIGH | MEDIUM | LOW] based on evidence strength
```

### Step 2: Design the Experiment

For each HIGH and MEDIUM risk LOFA, design a minimum-viable experiment.

**Experiment types (cheapest first):**

| Type | Cost | Speed | Signal Strength |
|------|------|-------|----------------|
| **Desk research** | $0 | Hours | Weak — direction only |
| **Customer interviews** (5-10) | $0 | Days | Medium — qualitative |
| **Landing page test** | $0-50 | 1-2 days | Medium — interest signal |
| **Concierge MVP** | Time | 1-2 weeks | Strong — behavior |
| **Wizard of Oz** | Time | 1-2 weeks | Strong — behavior without building |
| **A/B test** | Variable | 1-4 weeks | Strong — quantified |
| **Prototype test** | Variable | 2-4 weeks | Strong — usability |

**Selection rule:** Start with the cheapest experiment that can falsify the assumption. Only invest in expensive experiments if cheap ones produce ambiguous results.

**Experiment card format:**
```
### EXP-[ID]: [Experiment Name]

**Tests:** LOFA-[ID]
**Linked hypothesis:** H-[ID]
**Type:** [from table above]
**Setup:** [What to build/prepare — step by step]
**Duration:** [Time to run]
**Sample size:** [Minimum participants/data points]
**Success metric:** [Quantified threshold]
  - Pass: [specific number/behavior that validates]
  - Fail: [specific number/behavior that invalidates]
**Cost:** [Time and money required]
```

### Step 3: Define Kill Criteria

Every hypothesis needs a pre-committed point where you stop and pivot.

**Kill criteria format:**
```
If [experiment] produces [specific failing result] within [timeframe],
then: [PIVOT: change X | KILL: abandon this hypothesis | PERSEVERE: run a different experiment]
```

**Rules for kill criteria:**
- Define BEFORE running the experiment. Post-hoc kill criteria are rationalization, not science.
- Make them specific and quantified. "If it doesn't work" is not a kill criterion.
- Include a "persevere" option — sometimes the experiment is wrong, not the hypothesis.
- Require at least one disconfirming experiment before pivoting (avoid premature abandonment).

---

## Hypothesis Prioritization Matrix

After generating all hypotheses, rank them:

```
               HIGH IMPACT
                   │
    VALIDATE       │      VALIDATE
    FIRST          │      FIRST
    (Risky +       │      (Critical +
     Important)    │       Important)
                   │
  LOW RISK ────────┼──────── HIGH RISK
                   │
    MONITOR        │      INVESTIGATE
    (Low stakes)   │      (Risky but
                   │       unclear impact)
                   │
               LOW IMPACT
```

**Quadrant assignments:**
- **Top-right (High Impact + High Risk):** Must-Validate-Before-Build. Block development until validated.
- **Top-left (High Impact + Low Risk):** Validate-During-Build. Instrument and measure.
- **Bottom-right (Low Impact + High Risk):** Investigate. Run a cheap experiment; if ambiguous, deprioritize.
- **Bottom-left (Low Impact + Low Risk):** Monitor-Post-Launch. Track with analytics.

---

## Classification-Specific Adjustments

### Greenfield
- Generate hypotheses in ALL four Blank categories.
- Full experiment design for every HIGH-risk LOFA.
- Competitor analysis feeds into Solution and Channel hypotheses.

### Brownfield
- Skip Customer Hypothesis if segment is well-established (verify with user).
- Focus Problem Hypothesis on the NEW problem being addressed (not the original product problem).
- Solution Hypothesis must include integration feasibility and adoption risk.
- Add: **Migration Hypothesis** — "We believe existing users will [adopt/migrate to] the new capability because [reason]."

### Enhancement
- Skip Customer and Channel hypotheses entirely.
- Focus on one Problem Hypothesis (the specific pain being addressed).
- Focus on one Solution Hypothesis with clear measurable impact.
- Replace experiment design with: **Metric Hypothesis** — "Changing [X] will move [metric] by [amount] within [timeframe]."

---

## Hypothesis Output Checklist

Before presenting to user:
- [ ] Every hypothesis has a type (Customer / Problem / Solution / Channel / Revenue)
- [ ] Every hypothesis has a falsifiable statement ("We believe X because Y")
- [ ] Every hypothesis has at least one Leap-of-Faith Assumption
- [ ] Every HIGH/MEDIUM LOFA has an experiment card
- [ ] Every experiment has quantified success and failure criteria
- [ ] Every hypothesis has kill criteria defined before the experiment
- [ ] Hypotheses are prioritized in the Impact × Risk matrix
- [ ] Classification is Must-Validate / Validate-During / Monitor categories
- [ ] Transcript source references are attached to every hypothesis
