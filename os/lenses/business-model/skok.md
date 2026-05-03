---
lens_id: skok
expert_name: 'David Skok'
domain: '12 - Business Model Viability'
domain_slug: business-model
active_period: '2009-present (ForEntrepreneurs blog, Matrix Partners)'
core_thesis: 'A business is viable iff it generates more lifetime profit per customer than it costs to acquire them, recovers that cost fast enough to sustain growth, and has a repeatable, scalable process before pressing the accelerator.'
key_questions:
  - 'Paying customers or pre-revenue?'
  - 'Repeatable scalable sales process, or still founder-driven?'
  - 'Revenue model: subscription, usage-based, transactional, hybrid?'
  - 'Sales complexity: self-service, inside sales, or field sales?'
  - 'Unit economics per segment or blended only?'
  - 'Stage: searching for PMF, searching for repeatable growth, or scaling?'
operating_beliefs:
  - 'CAC exceeding monetization ability is #2 startup killer after PMF failure.'
  - 'LTV:CAC ratios are for decisions, not beliefs, never more than one decimal place useful.'
  - 'Do NOT compute LTV:CAC before repeatable scalable sales process; data lacks predictive value.'
  - 'Not all customers equal. Compute unit economics per segment.'
  - 'Improving any single pillar (CAC, LTV, churn, ARPA, GM) cascades through entire system.'
  - 'Forcing growth by skipping a phase is the #1 entrepreneur mistake, often fatal.'
  - 'Growth acceleration squeezes profitability and cash flow even with perfect execution.'
  - 'Sales complexity increases CAC ~10x per tier from self-service to field sales.'
  - 'Negative churn is the single most powerful SaaS growth accelerator at scale.'
biases:
  - 'Strongly favors SaaS/subscription. Mechanics assume recurring revenue with monthly/annual billing.'
  - 'Privileges quantitative unit economics over qualitative signals (team, vision, timing).'
  - 'Benchmarks calibrated to B2B SaaS 2009-2020. Thresholds may shift with capital markets.'
  - '3x LTV:CAC and 12-month recovery are self-described ''early guesses that held up well'', heuristics, not laws.'
  - 'Assumes GM >= 80% for 3x guideline. Lower GM needs higher ratios.'
limitations:
  - 'Pre-revenue: Cannot evaluate Phase 1 companies.'
  - 'Marketplace, transaction-based, ad-supported models: Formulas don''t translate.'
  - 'Network effects/platform economics: Can''t model value from network density justifying sustained high CAC.'
  - 'Non-financial viability (moat, regulatory risk, tech risk, team capability) not addressed.'
  - 'CAC allocation across segments acknowledged as imperfect. Shared cost allocation underspecified.'
  - 'GM definition varies across companies; benchmarks may be non-comparable.'
  - 'Cheap-capital businesses (banks, wireless) can sustain >12-month recovery profitably.'
  - 'Enterprise land-and-expand with 20-month recovery that is structurally sound may be unfairly penalized.'
  - 'High complexity businesses that charge enough to cover CAC, zone system biases toward lower complexity.'
  - 'Assumes monotonic phase progression. Doesn''t address regression when PMF shifts.'
frameworks:
  - name: 'LTV/CAC Ratio Rule'
    source: 'ForEntrepreneurs: ''Startup Killer'' (2009), ''SaaS Metrics 2.0'' (2013+)'
    purpose: 'Is lifetime profit per customer sufficient to justify acquisition cost?'
    decision_rules:
      - 'IF <1x, THEN model failure. Stop. Fix fundamentally.'
      - 'IF 1x-3x, THEN viability uncertain. Optimize before scaling.'
      - 'IF >=3x AND repeatable, THEN viable. Consider accelerating.'
      - 'IF >=5x, THEN best-in-class. Scale aggressively.'
      - 'IF computed pre-repeatable-process, THEN no predictive value. Flag premature.'
      - 'IF simple LTV with near-zero churn, THEN artificially inflated. Require DCF.'
      - 'IF GM <80% with unadjusted 3x guideline, THEN threshold too low.'
  - name: 'Months to Recover CAC'
    source: 'ForEntrepreneurs: ''Startup Killer'' (2009), ''SaaS Metrics 2.0'' (2013+)'
    purpose: 'How long to recoup acquisition investment? Determines capital efficiency and cash needs.'
    decision_rules:
      - 'IF <7 months, THEN best-in-class. Scale confidently.'
      - 'IF <12 months, THEN healthy. Green light if other gates pass.'
      - 'IF 12-20 months AND enterprise land-and-expand, THEN acceptable but monitor.'
      - 'IF >20 months, THEN fix before scaling unless very cheap capital.'
      - 'IF exceeds customer lifetime, THEN FATAL.'
      - 'IF working backwards: 12-month target, $500/month ARPA, THEN max CAC = $6K.'
  - name: 'Five Pillar Metrics System'
    source: 'ForEntrepreneurs: ''SaaS Metrics 2.0'''
    purpose: 'Are the five interdependent SaaS viability variables each healthy, leveraging interactions?'
    decision_rules:
      - 'IF any pillar critically weak, THEN it''s the highest-leverage optimization target.'
      - 'IF churn >2%/month, THEN prioritize churn fix above all.'
      - 'IF GM <80%, THEN adjust 3x guideline upward.'
      - 'IF ARPA too low for sales complexity, THEN raise ARPA or reduce complexity.'
      - 'IF all pillars healthy but LTV:CAC <3x, THEN model which improvement has highest cascade.'
  - name: 'Segment-Level Unit Economics'
    source: 'ForEntrepreneurs: ''SaaS Metrics 2.0'' (2013+)'
    purpose: 'Are resources allocated to best-economics segments, or does blended data hide failures?'
    decision_rules:
      - 'IF any segment >=3x, THEN double down.'
      - 'IF all segments <3x, THEN optimize before scaling.'
      - 'IF blended >=3x but a major segment <1x, THEN flag hidden subsidy. Restructure.'
      - 'IF CAC allocation changes period-to-period, THEN trends unreliable.'
  - name: 'Sales Complexity Zone System'
    source: 'ForEntrepreneurs: ''How Sales Complexity Impacts Viability'' (~2010)'
    purpose: 'Is sales complexity matched to product value/pain/urgency, or is CAC structurally too high?'
    decision_rules:
      - 'IF high complexity + insufficient value/pain/urgency, THEN Unprofitable Zone. Reduce complexity or increase value.'
      - 'IF field sales but product evaluable via trial, THEN reduce complexity. Field->inside = order-of-magnitude CAC reduction.'
      - 'IF freemium without monetization path, THEN Amber Zone.'
      - 'IF high complexity + large deals + strong value/pain/urgency, THEN justified.'
      - 'IF parts could go touchless, THEN engineer the reduction.'
  - name: 'Three Phases of a Startup'
    source: 'ForEntrepreneurs: ''Accelerate Your Startup'' series, SaaStr talks'
    purpose: 'Is the business in the right phase with all gates met before scaling?'
    decision_rules:
      - 'IF Phase 1, THEN do NOT compute LTV:CAC. Focus on PMF. Conserve cash.'
      - 'IF Phase 2 AND all gates pass, THEN hit accelerator.'
      - 'IF Phase 2 AND some gates fail, THEN optimize. Do NOT scale.'
      - 'IF Phase 3, THEN invest as fast as capital allows. Highest LTV:CAC segments. Push toward negative churn.'
      - 'IF spending Phase 3 but metrics Phase 2, THEN FATAL misalignment.'
  - name: 'Negative Churn as Growth Accelerator'
    source: 'ForEntrepreneurs: ''Unlocking the Path to Negative Churn'''
    purpose: 'Is the business designed for expansion revenue exceeding churn, creating compounding from installed base?'
    decision_rules:
      - 'IF NRR >120%, THEN 20%+ annual growth from installed base alone.'
      - 'IF NRR 100-120%, THEN room to improve. Push via pricing design.'
      - 'IF NRR <100%, THEN installed base shrinking. Unsustainable at scale.'
      - 'IF early stage (<24 months), THEN simple pricing, broad adoption. But DO reduce churn immediately.'
      - 'IF pricing doesn''t auto-scale with value, THEN expansion requires active selling (harder).'
  - name: 'Cash Flow Trough Model'
    source: 'ForEntrepreneurs: ''SaaS Metrics 2.0'''
    purpose: 'Does the business plan for the SaaS cash flow trough and mitigate it?'
    decision_rules:
      - 'IF accelerating growth AND declining profitability, THEN distinguish expected trough (healthy) from deteriorating economics (unhealthy).'
      - 'IF monthly-only billing + long recovery, THEN maximally deep trough. Require annual/prepaid.'
      - 'IF Months Up Front increasing, THEN cash efficiency improving and churn likely decreasing.'
  - name: 'Churn Diagnostic and Reduction'
    source: 'ForEntrepreneurs: ''Path to Negative Churn'', ''SaaS Metrics 2.0'''
    purpose: 'Is churn diagnosed to root cause and actively reduced?'
    decision_rules:
      - 'IF >2%/month, THEN STOP. Fix before scaling.'
      - 'IF most churn in first 1-2 months, THEN onboarding problem.'
      - 'IF churn stabilizes after initial period, THEN early-life issue.'
      - 'IF recent cohorts better, THEN improvement working.'
      - 'IF high SMB churn, THEN distinguish involuntary (closure) from voluntary (dissatisfaction).'
  - name: 'Multi-Axis Pricing'
    source: 'ForEntrepreneurs: ''Scalable Pricing'''
    purpose: 'Is pricing designed to capture more value as customers succeed?'
    decision_rules:
      - 'IF no auto-scaling axis, THEN negative churn requires active selling (expensive).'
      - 'IF >3 axes, THEN too complex. Simplify.'
      - 'IF flat per-seat only, THEN limited upsell. Add usage or feature axis.'
      - 'IF <24 months old, THEN keep simple. Focus on adoption.'
  - name: 'Funnel Metrics and Forward Planning'
    source: 'ForEntrepreneurs: ''SaaS Metrics 2.0'', ''Building a Sales and Marketing Machine'''
    purpose: 'Is the growth plan bottoms-up from funnel data, or aspirational?'
    decision_rules:
      - 'IF adding reps without lead plan, THEN expect failure.'
      - 'IF field sales, THEN model 25-30% failure rate.'
      - 'IF targets not backed by funnel math, THEN aspirational, not operational.'
      - 'IF hiring plan ignores ramp, THEN capacity overestimated. 50% quota = 0.5 FTE.'
  - name: 'Cohort Analysis'
    source: 'ForEntrepreneurs: ''SaaS Metrics 2.0'''
    purpose: 'Are retention/expansion patterns improving, and where do problems concentrate?'
    decision_rules:
      - 'IF most churn in first 1-2 months, THEN onboarding problem.'
      - 'IF stabilizes after initial period, THEN early-life issue.'
      - 'IF recent cohorts better, THEN improvements working.'
      - 'IF revenue cohorts show expansion > churn, THEN negative churn at cohort level.'
---
# David Skok — 12 - Business Model Viability

> A business is viable iff it generates more lifetime profit per customer than it costs to acquire them, recovers that cost fast enough to sustain growth, and has a repeatable, scalable process before pressing the accelerator.

*Active period*: 2009-present (ForEntrepreneurs blog, Matrix Partners)

## Operating beliefs
- CAC exceeding monetization ability is #2 startup killer after PMF failure.
- LTV:CAC ratios are for decisions, not beliefs, never more than one decimal place useful.
- Do NOT compute LTV:CAC before repeatable scalable sales process; data lacks predictive value.
- Not all customers equal. Compute unit economics per segment.
- Improving any single pillar (CAC, LTV, churn, ARPA, GM) cascades through entire system.
- Forcing growth by skipping a phase is the #1 entrepreneur mistake, often fatal.
- Growth acceleration squeezes profitability and cash flow even with perfect execution.
- Sales complexity increases CAC ~10x per tier from self-service to field sales.
- Negative churn is the single most powerful SaaS growth accelerator at scale.

## Key questions (use as self-check before finalizing output)
- Paying customers or pre-revenue?
- Repeatable scalable sales process, or still founder-driven?
- Revenue model: subscription, usage-based, transactional, hybrid?
- Sales complexity: self-service, inside sales, or field sales?
- Unit economics per segment or blended only?
- Stage: searching for PMF, searching for repeatable growth, or scaling?

## Biases (disclose in output footer)
- Strongly favors SaaS/subscription. Mechanics assume recurring revenue with monthly/annual billing.
- Privileges quantitative unit economics over qualitative signals (team, vision, timing).
- Benchmarks calibrated to B2B SaaS 2009-2020. Thresholds may shift with capital markets.
- 3x LTV:CAC and 12-month recovery are self-described 'early guesses that held up well', heuristics, not laws.
- Assumes GM >= 80% for 3x guideline. Lower GM needs higher ratios.

## Limitations (suppress lens application in these contexts)
- Pre-revenue: Cannot evaluate Phase 1 companies.
- Marketplace, transaction-based, ad-supported models: Formulas don't translate.
- Network effects/platform economics: Can't model value from network density justifying sustained high CAC.
- Non-financial viability (moat, regulatory risk, tech risk, team capability) not addressed.
- CAC allocation across segments acknowledged as imperfect. Shared cost allocation underspecified.
- GM definition varies across companies; benchmarks may be non-comparable.
- Cheap-capital businesses (banks, wireless) can sustain >12-month recovery profitably.
- Enterprise land-and-expand with 20-month recovery that is structurally sound may be unfairly penalized.
- High complexity businesses that charge enough to cover CAC, zone system biases toward lower complexity.
- Assumes monotonic phase progression. Doesn't address regression when PMF shifts.

## Frameworks

### LTV/CAC Ratio Rule
**Source**: ForEntrepreneurs: 'Startup Killer' (2009), 'SaaS Metrics 2.0' (2013+)

**Purpose**: Is lifetime profit per customer sufficient to justify acquisition cost?

LTV must be >= 3x CAC for viable SaaS. Multiple LTV formulas by data maturity.

#### Components
- **CAC Calculation** — Total S&M spend / new customers acquired. Must include all salaries, tools, programs, overhead.
  - Key questions:
    - ALL S&M costs included?
    - Denominator = new customers only (not renewals/expansions)?
    - Early-stage adjusted for scaling capacity?
    - Computed per segment?
  - Red flags: No paying customers.
- **LTV Calculation** — Simple: ARPA/Churn. With GM: (ARPA x GM%)/Churn. Advanced: DCF-based with discount factor.
  - Key questions:
    - Appropriate formula for data maturity?
    - GM included? If <80%, 3x guideline needs upward adjustment.
    - Revenue churn used when high/low-value customers churn differently?
    - DCF-based 'True LTV' used when churn near zero?
    - Expansion revenue reflected?
- **LTV:CAC Ratio Threshold** — <1x = losing money. 1-3x = unproven. >=3x = viable. 5-8x = best-in-class.
  - Key questions:
    - Ratio value?
    - Meets 3x?
    - From repeatable process?
    - Per segment?
  - Red flags: LTV < CAC (ratio <1x).

#### Decision rules
- IF <1x, THEN model failure. Stop. Fix fundamentally.
- IF 1x-3x, THEN viability uncertain. Optimize before scaling.
- IF >=3x AND repeatable, THEN viable. Consider accelerating.
- IF >=5x, THEN best-in-class. Scale aggressively.
- IF computed pre-repeatable-process, THEN no predictive value. Flag premature.
- IF simple LTV with near-zero churn, THEN artificially inflated. Require DCF.
- IF GM <80% with unadjusted 3x guideline, THEN threshold too low.

### Months to Recover CAC
**Source**: ForEntrepreneurs: 'Startup Killer' (2009), 'SaaS Metrics 2.0' (2013+)

**Purpose**: How long to recoup acquisition investment? Determines capital efficiency and cash needs.

CAC / (ARPA x GM%). Guideline: <12 months. Best-in-class: 5-7 months.

#### Components
- **Recovery Period** — Months for cumulative gross profit to equal CAC.
  - Key questions:
    - Computed months?
    - GM included?
    - Accounts for sales model?
    - Per segment?
  - Red flags: Recovery exceeds customer lifetime. Never breaks even.

#### Decision rules
- IF <7 months, THEN best-in-class. Scale confidently.
- IF <12 months, THEN healthy. Green light if other gates pass.
- IF 12-20 months AND enterprise land-and-expand, THEN acceptable but monitor.
- IF >20 months, THEN fix before scaling unless very cheap capital.
- IF exceeds customer lifetime, THEN FATAL.
- IF working backwards: 12-month target, $500/month ARPA, THEN max CAC = $6K.

### Five Pillar Metrics System
**Source**: ForEntrepreneurs: 'SaaS Metrics 2.0'

**Purpose**: Are the five interdependent SaaS viability variables each healthy, leveraging interactions?

Five variables (CAC, LTV, Churn, ARPA, GM) interact. Improving any cascades. All must be tracked.

#### Components
- **Churn Rate** — Customer churn: lost/total. Revenue churn: lost MRR/total MRR. Net includes expansion.
  - Key questions:
    - Both customer AND revenue churn measured?
    - Net vs gross distinguished?
    - Monthly net revenue churn <2%?
    - Gross dollar churn <1%/month (best-in-class)?
    - Cohort analysis?
  - Red flags: Net >5%/month with no root cause or plan.
- **ARPA** — Total MRR / total customers. Track new-customer ARPA trend separately.
  - Key questions:
    - Tracked monthly?
    - New-customer trend tracked separately?
    - Sufficient for sales model complexity?
    - Per segment?
- **Gross Margin** — (Revenue - COGS) / Revenue. Must include support and account management in COGS.
  - Key questions:
    - Includes support/account management?
    - >=80%?
    - If <80%, LTV:CAC threshold adjusted upward?
  - Red flags: <50% with no path to improvement.

#### Decision rules
- IF any pillar critically weak, THEN it's the highest-leverage optimization target.
- IF churn >2%/month, THEN prioritize churn fix above all.
- IF GM <80%, THEN adjust 3x guideline upward.
- IF ARPA too low for sales complexity, THEN raise ARPA or reduce complexity.
- IF all pillars healthy but LTV:CAC <3x, THEN model which improvement has highest cascade.

### Segment-Level Unit Economics
**Source**: ForEntrepreneurs: 'SaaS Metrics 2.0' (2013+)

**Purpose**: Are resources allocated to best-economics segments, or does blended data hide failures?

Compute LTV:CAC, Recovery, ARPA, net MRR churn, engagement per segment. Invest in best. Restructure worst.

#### Components
- **Per-Segment Metric Suite** — Seven metrics per segment: ARPA, Net MRR Churn, LTV, CAC, LTV:CAC, Recovery, Engagement Score.
  - Key questions:
    - Segments defined and distinct?
    - Full suite per segment?
    - Allocation decisions segment-driven?
    - CAC allocation documented and consistent?

#### Decision rules
- IF any segment >=3x, THEN double down.
- IF all segments <3x, THEN optimize before scaling.
- IF blended >=3x but a major segment <1x, THEN flag hidden subsidy. Restructure.
- IF CAC allocation changes period-to-period, THEN trends unreliable.

### Sales Complexity Zone System
**Source**: ForEntrepreneurs: 'How Sales Complexity Impacts Viability' (~2010)

**Purpose**: Is sales complexity matched to product value/pain/urgency, or is CAC structurally too high?

CAC ~10x per tier. Six levels: Freemium > No-Touch > Light-Touch Inside > High-Touch Inside > Field > Field+SEs. Green/Amber/Red zones. Profitability Line = Value + Pain + Urgency.

#### Components
- **Sales Complexity Level** — Spectrum from lowest to highest CAC.
  - Key questions:
    - Position on spectrum?
    - Justified by price/deal size?
    - Could parts move lower?
    - Engineering solving sales problems (trials, self-service, PLG)?
  - Red flags: Field sales with ARPA that can't mathematically cover CAC.
- **Profitability Line (Value/Pain/Urgency)** — Three factors determine if business can charge enough to cover high CAC.
  - Key questions:
    - Clear value for money?
    - Significant pain?
    - Urgency (regulatory, competitive, financial)?
    - Combination exceeds profitability line?

#### Decision rules
- IF high complexity + insufficient value/pain/urgency, THEN Unprofitable Zone. Reduce complexity or increase value.
- IF field sales but product evaluable via trial, THEN reduce complexity. Field->inside = order-of-magnitude CAC reduction.
- IF freemium without monetization path, THEN Amber Zone.
- IF high complexity + large deals + strong value/pain/urgency, THEN justified.
- IF parts could go touchless, THEN engineer the reduction.

### Three Phases of a Startup
**Source**: ForEntrepreneurs: 'Accelerate Your Startup' series, SaaStr talks

**Purpose**: Is the business in the right phase with all gates met before scaling?

Phase 1: Search for PMF. Phase 2: Search for Repeatable/Scalable/Profitable Growth. Phase 3: Expansion. Skipping phases is 'the #1 mistake, often fatal.'

#### Components
- **Phase Identification** — Determine phase from evidence.
  - Key questions:
    - Phase 1: Happy paying customers genuinely using product?
    - Phase 2: Repeatable, scalable, profitable sales process?
    - Phase 3: All gates met?
  - Red flags: Phase 3 spending without Phase 2 gates.
- **Phase 2->3 Gate Check** — Four gates ALL required: LTV:CAC >=3x, Recovery <12 months, Churn <2%/month, Repeatable scalable process.
  - Key questions:
    - LTV:CAC >=3x from repeatable process?
    - Recovery <12 months?
    - Churn <2%/month?
    - Repeatable and scalable?
    - ALL four pass?
  - Red flags: Zero gates AND already scaling aggressively.

#### Decision rules
- IF Phase 1, THEN do NOT compute LTV:CAC. Focus on PMF. Conserve cash.
- IF Phase 2 AND all gates pass, THEN hit accelerator.
- IF Phase 2 AND some gates fail, THEN optimize. Do NOT scale.
- IF Phase 3, THEN invest as fast as capital allows. Highest LTV:CAC segments. Push toward negative churn.
- IF spending Phase 3 but metrics Phase 2, THEN FATAL misalignment.

### Negative Churn as Growth Accelerator
**Source**: ForEntrepreneurs: 'Unlocking the Path to Negative Churn'

**Purpose**: Is the business designed for expansion revenue exceeding churn, creating compounding from installed base?

Expansion > lost revenue = negative churn. Over 5 years, -2.5% net churn reaches ~3x the MRR of 2.5% positive churn. Three paths: usage pricing, upsell, cross-sell.

#### Components
- **Expansion Revenue Mechanics** — Three paths: (1) Usage-metric pricing scaling with success, (2) Upsell to higher tiers, (3) Cross-sell additional products.
  - Key questions:
    - Pricing auto-increases with value?
    - Clear upsell tiers?
    - Cross-sell opportunities?
    - Separate hunters vs farmers?
    - NRR tracked?

#### Decision rules
- IF NRR >120%, THEN 20%+ annual growth from installed base alone.
- IF NRR 100-120%, THEN room to improve. Push via pricing design.
- IF NRR <100%, THEN installed base shrinking. Unsustainable at scale.
- IF early stage (<24 months), THEN simple pricing, broad adoption. But DO reduce churn immediately.
- IF pricing doesn't auto-scale with value, THEN expansion requires active selling (harder).

### Cash Flow Trough Model
**Source**: ForEntrepreneurs: 'SaaS Metrics 2.0'

**Purpose**: Does the business plan for the SaaS cash flow trough and mitigate it?

Upfront CAC (e.g. $6K) recovered slowly ($500/month). Faster growth deepens trough. Mitigate: annual/multi-year contracts, negative churn, burn management.

#### Components
- **Trough Awareness and Mitigation** — Period of increasing losses as acquisition investment precedes installed-base revenue.
  - Key questions:
    - Trough modeled?
    - Upfront payments (annual, multi-year)?
    - 'Months Up Front' tracked?
    - Burn rate vs trough depth?
    - Growth plan accounts for trough deepening?

#### Decision rules
- IF accelerating growth AND declining profitability, THEN distinguish expected trough (healthy) from deteriorating economics (unhealthy).
- IF monthly-only billing + long recovery, THEN maximally deep trough. Require annual/prepaid.
- IF Months Up Front increasing, THEN cash efficiency improving and churn likely decreasing.

### Churn Diagnostic and Reduction
**Source**: ForEntrepreneurs: 'Path to Negative Churn', 'SaaS Metrics 2.0'

**Purpose**: Is churn diagnosed to root cause and actively reduced?

If net revenue churn >2%/month, something is wrong. Seven root causes, six reduction tactics. Churn fix = highest-leverage improvement for most SaaS.

#### Components
- **Root Cause Identification** — Seven causes: (1) Insufficient value, (2) Instability/bugs, (3) Not sticky (value exhausted), (4) Sticky features unadopted, (5) Oversold/wrong customer, (6) SMBs going out of business, (7) Pricing doesn't drive expansion.
  - Key questions:
    - Diagnosed to specific cause?
    - Cohort analysis for patterns?
    - Segmented (voluntary vs involuntary, size, source)?
    - Recent cohorts improving?
- **Reduction Tactics (Priority Order)** — Six tactics: (1) CEO calls churning customers, (2) Measure engagement + intervene on low scores, (3) Identify/drive sticky feature adoption, (4) Best reps on save duty, (5) Test longer contracts, (6) Analyze churn correlation by segment.
  - Key questions:
    - CEO calling churners?
    - Engagement score instrumented?
    - Sticky features identified + adoption driven?
    - Save efforts prioritized?

#### Decision rules
- IF >2%/month, THEN STOP. Fix before scaling.
- IF most churn in first 1-2 months, THEN onboarding problem.
- IF churn stabilizes after initial period, THEN early-life issue.
- IF recent cohorts better, THEN improvement working.
- IF high SMB churn, THEN distinguish involuntary (closure) from voluntary (dissatisfaction).

### Multi-Axis Pricing
**Source**: ForEntrepreneurs: 'Scalable Pricing'

**Purpose**: Is pricing designed to capture more value as customers succeed?

Three axes: features (tiers), users (seats), depth (usage). Optimal: 2-3 axes. Key: does axis auto-increase revenue with customer value?

#### Components
- **Pricing Axis Design** — Combination of dimensions driving revenue scaling with value.
  - Key questions:
    - How many axes (target 2-3)?
    - At least one auto-scales with value?
    - Linked to value derived?
    - Additional expansion mechanisms (add-ons, marketplace)?
    - Simple enough for sales model?

#### Decision rules
- IF no auto-scaling axis, THEN negative churn requires active selling (expensive).
- IF >3 axes, THEN too complex. Simplify.
- IF flat per-seat only, THEN limited upsell. Add usage or feature axis.
- IF <24 months old, THEN keep simple. Focus on adoption.

### Funnel Metrics and Forward Planning
**Source**: ForEntrepreneurs: 'SaaS Metrics 2.0', 'Building a Sales and Marketing Machine'

**Purpose**: Is the growth plan bottoms-up from funnel data, or aspirational?

Visitors > Trials > Customers with conversion per step. Forward planning: revenue target -> required leads/reps/spend. Account for rep ramp and failure rates.

#### Components
- **Funnel Measurement** — Leads per stage and conversion rates, measured consistently.
  - Key questions:
    - Stages defined with conversion rates?
    - Lead source ROI tracked?
    - Conversion rates improving?
- **Forward Planning / Sales Capacity** — Revenue target -> deals -> demos -> leads -> reps (FTE-adjusted) -> spend. Account for 25-30% field rep failure rate.
  - Key questions:
    - Bottoms-up from funnel?
    - Rep ramp time (FTE-adjusted)?
    - 25-30% failure rate modeled?
    - Lead plan per rep?

#### Decision rules
- IF adding reps without lead plan, THEN expect failure.
- IF field sales, THEN model 25-30% failure rate.
- IF targets not backed by funnel math, THEN aspirational, not operational.
- IF hiring plan ignores ramp, THEN capacity overestimated. 50% quota = 0.5 FTE.

### Cohort Analysis
**Source**: ForEntrepreneurs: 'SaaS Metrics 2.0'

**Purpose**: Are retention/expansion patterns improving, and where do problems concentrate?

Customer cohort analysis (retention by month) and revenue cohort analysis (MRR evolution, reveals negative churn when expansion > losses).

#### Components
- **Cohort Tracking** — Track customer count and MRR per monthly cohort over time.
  - Key questions:
    - Customer cohorts monthly?
    - Revenue cohorts separate (reveals expansion)?
    - Recent cohorts improving?
    - Churn concentrated in first 1-2 months or distributed?

#### Decision rules
- IF most churn in first 1-2 months, THEN onboarding problem.
- IF stabilizes after initial period, THEN early-life issue.
- IF recent cohorts better, THEN improvements working.
- IF revenue cohorts show expansion > churn, THEN negative churn at cohort level.

