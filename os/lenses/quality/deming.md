---
lens_id: deming
expert_name: 'W. Edwards Deming'
domain: '13 - Systems & Automation Design'
domain_slug: quality
active_period: '1950s-1993'
core_thesis: 'A system must be managed toward a stated aim by optimizing the whole, distinguishing common from special cause variation, building quality at the design stage, and embedding feedback loops that compare predictions to outcomes. Sub-optimization of parts destroys the system. Tampering with stable processes increases variation. Without operational definitions, measurement is meaningless.'
key_questions:
  - 'What is the stated aim of this system? (one sentence)'
  - 'Who are the components/stakeholders and how are interdependencies mapped?'
  - 'Does the system distinguish common cause from special cause variation?'
  - 'Are there feedback loops from outputs back to design/redesign?'
  - 'Do key terms and metrics have operational definitions agreed by all parties?'
  - 'Is the system in statistical control, or are special causes still present?'
  - 'Are changes based on predictions and studied outcomes, or on the last data point?'
operating_beliefs:
  - 'A system without a stated aim is not a system, it is competing parts.'
  - '85% of problems originate in the system, not in individuals.'
  - 'A bad system will beat a good person every time.'
  - 'Tampering with a stable process (adjusting for common cause) increases variation.'
  - 'Without theory, there is no learning. Without prediction, experience teaches nothing.'
  - 'Copying success without understanding the theory behind it may lead to disaster.'
  - 'Optimization of parts sub-optimizes the whole.'
  - 'Inspection cannot build quality in. Quality must be designed in at inception.'
  - 'Extrinsic motivators reduce performance over time vs. intrinsic motivation.'
  - 'A system must be managed. It will not manage itself.'
  - 'Study is not Check. Comparing results to predictions and revising theory differs from pass/fail verification.'
  - 'An operational definition puts communicable meaning into a concept.'
biases:
  - 'Favors whole-system optimization. May undervalue brilliantly designed independent components.'
  - 'Assumes measurable, quantitative outputs. Purely qualitative or novel outputs harder to evaluate.'
  - 'Prioritizes stability. May undervalue controlled chaos or move-fast-and-break-things approaches.'
  - 'Treats all ranking and individual performance measurement as destructive. May miss contexts where individual accountability is necessary.'
  - 'Favors single-supplier relationships. Conflicts with modern redundancy/resilience engineering.'
  - 'Assumes cooperative systems with shared aims. Cannot model adversarial or zero-sum dynamics.'
limitations:
  - 'No explicit software/digital automation framework. Concepts like ''incoming materials'' must be translated to data inputs, ''production line'' to pipelines.'
  - 'Limited emergent complexity treatment. Assumes systems can be understood through aim and interdependencies. Complex adaptive systems require frameworks beyond Deming.'
  - 'SPC assumes measurable outputs over time. Qualitative, one-off, or novel work cannot use variation management literally.'
  - 'No security, compliance, or adversarial conditions treatment.'
  - 'Psychology component identifies motivation destroyers but provides limited operational guidance on fostering intrinsic motivation.'
  - 'Less applicable to rapid-iteration/startup systems deliberately tolerating instability for speed.'
  - 'Conflicts with systems requiring fixed inspection regimes by law (pharma, aerospace). Point 3 conflicts with regulatory mandates.'
  - 'Less applicable to emergency/crisis response where rapid intervention without full study is correct.'
frameworks:
  - name: 'System of Profound Knowledge (SoPK)'
    source: 'The New Economics, Ch. 4'
    purpose: 'Integrated understanding across system appreciation, variation, theory of knowledge, and psychology.'
    decision_rules:
      - 'IF no stated aim, THEN FATAL, score System Aim at minimum.'
      - 'IF components optimized independently with competing metrics, THEN sub-optimization, penalize System Aim.'
      - 'IF all deviations investigated individually without distinguishing cause type, THEN Mistake 1, penalize Variation.'
      - 'IF deviations uniformly ignored as ''normal,'' THEN Mistake 2, penalize Variation.'
      - 'IF changes without predictions, THEN PDSA absent, penalize Feedback.'
      - 'IF key terms have different meanings across stakeholders, THEN penalize Operational Definitions.'
      - 'IF workers ranked by output metrics, THEN destructive competition, penalize Human Design.'
      - 'IF extrinsic rewards as primary motivator, THEN overjustification risk, penalize Human Design.'
  - name: 'PDSA Cycle (Plan-Do-Study-Act)'
    source: 'Out of the Crisis, p. 88; The New Economics; adapted from Shewhart'
    purpose: 'Iterative learning cycles with predictions, small-scale testing, theory revision, and standardization.'
    decision_rules:
      - 'IF changes without predictions, THEN Plan absent, penalize Feedback.'
      - 'IF pass/fail checking without comparing to predictions or revising theory, THEN PDCA not PDSA, penalize.'
      - 'IF full-scale without small-scale test, THEN Do violated, penalize Robustness.'
      - 'IF learning from one cycle doesn''t feed next, THEN iterative improvement broken.'
      - 'IF three prerequisite questions unanswerable, THEN cycle should not have been entered.'
  - name: 'Funnel Experiment (Tampering Detection)'
    source: 'Out of the Crisis; Deming''s four-day seminars'
    purpose: 'Detecting when a system adjusts stable processes based on individual data points, thereby increasing variation.'
    decision_rules:
      - 'IF thresholds adjusted after every measurement cycle, THEN Rule 2, penalize Robustness.'
      - 'IF changes without first establishing statistical control, THEN tampering risk, penalize Variation.'
      - 'IF knowledge transferred only by watching last practitioner, THEN Rule 4, penalize heavily.'
      - 'IF budgets/quotas set from last period actuals without trend analysis, THEN Rule 2/3.'
      - 'IF policy changes follow every survey result, THEN Rule 2.'
  - name: 'Red Bead Experiment (System vs. Individual Attribution)'
    source: 'Out of the Crisis, p. 345; four-day seminars'
    purpose: 'Correctly attributing performance to the system rather than individuals when the system is dominant.'
    decision_rules:
      - 'IF workers ranked by output on standardized process, THEN Red Bead violation, penalize Human Design.'
      - 'IF slogans/exhortations used for system problems, THEN penalize (Point 10 violation).'
      - 'IF rewards/punishments vary on outcomes workers cannot control, THEN penalize heavily.'
  - name: '14 Points for Management (as Design Principles)'
    source: 'Out of the Crisis, pp. 23-24'
    purpose: 'Transformation principles for system design.'
    decision_rules:
      - 'IF designed solely for current metrics with no evolution pathway, THEN Deadly Disease 1, penalize.'
      - 'IF quality found only through end-stage testing, THEN Point 3 violation, penalize.'
      - 'IF numeric targets without methods, THEN Point 10/11 violation, penalize.'
      - 'IF departments/components compete, THEN Point 9 violation, penalize.'
  - name: 'Seven Deadly Diseases (System Anti-Patterns)'
    source: 'Out of the Crisis, pp. 97-98'
    purpose: 'Organizational diseases blocking transformation.'
    decision_rules:
      - 'IF architecture driven by quarterly cost targets, THEN Diseases 1+2, penalize.'
      - 'IF only visible metrics optimized while unmeasured qualities degrade, THEN Disease 5, penalize.'
      - 'IF system health evaluated solely by dashboard numbers, THEN penalize.'
  - name: 'Chain Reaction'
    source: 'Out of the Crisis, pp. 1-2'
    purpose: 'Quality first -> costs decrease -> productivity improves.'
    decision_rules:
      - 'IF productivity pushed while quality degrades, THEN Chain Reaction violated, penalize.'
      - 'IF cost reduced by cutting quality (fewer tests, less review), THEN Chain Reaction reversed, penalize heavily.'
      - 'IF rework/defect rates high, THEN quality not first, diagnose upstream.'
  - name: 'Operational Definitions'
    source: 'The New Economics, p. 105; Out of the Crisis'
    purpose: 'Ensuring key terms, metrics, and acceptance criteria have agreed-upon measurement procedures meaning the same to all parties.'
    decision_rules:
      - 'IF key metrics have no operational definition, THEN all data suspect, penalize.'
      - 'IF same term means different things to different stakeholders, THEN penalize heavily.'
      - 'IF acceptance criteria subjective (''good enough,'' ''ready''), THEN operational definitions missing.'
      - 'IF changing definition changes the number without changing reality, THEN not operational.'
  - name: 'Production Viewed as a System (Flow Diagram)'
    source: 'Out of the Crisis, p. 4; The New Economics, p. 39'
    purpose: 'Mapping the system as continuous feedback loop from inputs through production to consumers and back to design.'
    decision_rules:
      - 'IF no system map, THEN components likely designed in isolation, penalize System Aim.'
      - 'IF no feedback from consumer to design, THEN open-loop, penalize Feedback.'
      - 'IF process measurements don''t feed back to improvement, THEN loop broken.'
      - 'IF consumer feedback collected but never reaches design, THEN loop decorative.'
---
# W. Edwards Deming — 13 - Systems & Automation Design

> A system must be managed toward a stated aim by optimizing the whole, distinguishing common from special cause variation, building quality at the design stage, and embedding feedback loops that compare predictions to outcomes. Sub-optimization of parts destroys the system. Tampering with stable processes increases variation. Without operational definitions, measurement is meaningless.

*Active period*: 1950s-1993

## Operating beliefs
- A system without a stated aim is not a system, it is competing parts.
- 85% of problems originate in the system, not in individuals.
- A bad system will beat a good person every time.
- Tampering with a stable process (adjusting for common cause) increases variation.
- Without theory, there is no learning. Without prediction, experience teaches nothing.
- Copying success without understanding the theory behind it may lead to disaster.
- Optimization of parts sub-optimizes the whole.
- Inspection cannot build quality in. Quality must be designed in at inception.
- Extrinsic motivators reduce performance over time vs. intrinsic motivation.
- A system must be managed. It will not manage itself.
- Study is not Check. Comparing results to predictions and revising theory differs from pass/fail verification.
- An operational definition puts communicable meaning into a concept.

## Key questions (use as self-check before finalizing output)
- What is the stated aim of this system? (one sentence)
- Who are the components/stakeholders and how are interdependencies mapped?
- Does the system distinguish common cause from special cause variation?
- Are there feedback loops from outputs back to design/redesign?
- Do key terms and metrics have operational definitions agreed by all parties?
- Is the system in statistical control, or are special causes still present?
- Are changes based on predictions and studied outcomes, or on the last data point?

## Biases (disclose in output footer)
- Favors whole-system optimization. May undervalue brilliantly designed independent components.
- Assumes measurable, quantitative outputs. Purely qualitative or novel outputs harder to evaluate.
- Prioritizes stability. May undervalue controlled chaos or move-fast-and-break-things approaches.
- Treats all ranking and individual performance measurement as destructive. May miss contexts where individual accountability is necessary.
- Favors single-supplier relationships. Conflicts with modern redundancy/resilience engineering.
- Assumes cooperative systems with shared aims. Cannot model adversarial or zero-sum dynamics.

## Limitations (suppress lens application in these contexts)
- No explicit software/digital automation framework. Concepts like 'incoming materials' must be translated to data inputs, 'production line' to pipelines.
- Limited emergent complexity treatment. Assumes systems can be understood through aim and interdependencies. Complex adaptive systems require frameworks beyond Deming.
- SPC assumes measurable outputs over time. Qualitative, one-off, or novel work cannot use variation management literally.
- No security, compliance, or adversarial conditions treatment.
- Psychology component identifies motivation destroyers but provides limited operational guidance on fostering intrinsic motivation.
- Less applicable to rapid-iteration/startup systems deliberately tolerating instability for speed.
- Conflicts with systems requiring fixed inspection regimes by law (pharma, aerospace). Point 3 conflicts with regulatory mandates.
- Less applicable to emergency/crisis response where rapid intervention without full study is correct.

## Frameworks

### System of Profound Knowledge (SoPK)
**Source**: The New Economics, Ch. 4

**Purpose**: Integrated understanding across system appreciation, variation, theory of knowledge, and psychology.

Four interrelated components that cannot be separated. The interaction zone where all four overlap is where transformation occurs.

#### Components
- **Appreciation for a System** — A network of interdependent components working together toward the aim. Management optimizes the whole, not parts.
  - Key questions:
    - Clear aim understood by all?
    - Aim includes future plans?
    - Interdependencies mapped (flow diagram)?
    - Evidence of sub-optimization?
    - Components cooperate or compete?
  - Red flags: No stated aim at all.
- **Knowledge of Variation** — Distinguishing common cause (inherent) from special cause (identifiable event). Different actions required for each.
  - Key questions:
    - Common vs. special cause distinguished?
    - Control charts or equivalent?
    - Responses differentiated?
    - Mistake 1 (common treated as special = tampering)?
    - Mistake 2 (special treated as common = inaction)?
- **Theory of Knowledge** — Management is prediction. Knowledge is built on theory. Without theory, no learning.
  - Key questions:
    - Changes preceded by predictions?
    - Outcomes compared to predictions with theory revised?
    - Key terms operationally defined?
    - Copying best practices without understanding theory?
    - Confirmation bias addressed?
- **Psychology** — Intrinsic motivation is born-in; management removes obstacles to joy in work, not motivates through extrinsic rewards.
  - Key questions:
    - Intrinsic motivation preserved (curiosity, pride, joy in learning)?
    - Destroyers present: merit ranking, individual competition, incentive pay, targets without methods?
    - Cooperation incentivized over competition?
    - Workers understand what, why, and how?
    - Individual differences leveraged?

#### Decision rules
- IF no stated aim, THEN FATAL, score System Aim at minimum.
- IF components optimized independently with competing metrics, THEN sub-optimization, penalize System Aim.
- IF all deviations investigated individually without distinguishing cause type, THEN Mistake 1, penalize Variation.
- IF deviations uniformly ignored as 'normal,' THEN Mistake 2, penalize Variation.
- IF changes without predictions, THEN PDSA absent, penalize Feedback.
- IF key terms have different meanings across stakeholders, THEN penalize Operational Definitions.
- IF workers ranked by output metrics, THEN destructive competition, penalize Human Design.
- IF extrinsic rewards as primary motivator, THEN overjustification risk, penalize Human Design.

### PDSA Cycle (Plan-Do-Study-Act)
**Source**: Out of the Crisis, p. 88; The New Economics; adapted from Shewhart

**Purpose**: Iterative learning cycles with predictions, small-scale testing, theory revision, and standardization.

Study (not Check) = compare results to predictions and revise theory. Three prerequisite questions before entering: (1) What are we trying to accomplish? (2) How will we know a change is improvement? (3) What changes can we make?

#### Components
- **Plan** — Formulate hypothesis, define success metrics, predict expected results.
- **Do** — Implement at small scale. Document deviations and observations.
- **Study** — Compare results to predictions AND baseline. Understand WHY. Revise theory.
- **Act** — Adopt (standardize), Adapt (modify, re-enter Plan), or Abandon. Learning feeds next cycle.

#### Decision rules
- IF changes without predictions, THEN Plan absent, penalize Feedback.
- IF pass/fail checking without comparing to predictions or revising theory, THEN PDCA not PDSA, penalize.
- IF full-scale without small-scale test, THEN Do violated, penalize Robustness.
- IF learning from one cycle doesn't feed next, THEN iterative improvement broken.
- IF three prerequisite questions unanswerable, THEN cycle should not have been entered.

### Funnel Experiment (Tampering Detection)
**Source**: Out of the Crisis; Deming's four-day seminars

**Purpose**: Detecting when a system adjusts stable processes based on individual data points, thereby increasing variation.

Adjusting a stable process for common cause variation increases variation. Four rules map to increasingly destructive adjustment strategies.

#### Components
- **Rule 1: Leave Alone** — Stable process fixed over target. No adjustment. Least variation.
- **Rule 2: Compensate from Last Position** — Adjust by opposite of last deviation. Doubles variation. Real-world: adjusting based on last result.
- **Rule 3: Reset and Compensate** — Reset to target, then compensate. Increases variation further.
- **Rule 4: Copy Last Output** — Move to where last result landed. Variation explodes, system wanders without limit. Real-world: training by watching last person (gossip chain).
  - Red flags: Rule 4 in critical process path, fundamentally unpredictable.

#### Decision rules
- IF thresholds adjusted after every measurement cycle, THEN Rule 2, penalize Robustness.
- IF changes without first establishing statistical control, THEN tampering risk, penalize Variation.
- IF knowledge transferred only by watching last practitioner, THEN Rule 4, penalize heavily.
- IF budgets/quotas set from last period actuals without trend analysis, THEN Rule 2/3.
- IF policy changes follow every survey result, THEN Rule 2.

### Red Bead Experiment (System vs. Individual Attribution)
**Source**: Out of the Crisis, p. 345; four-day seminars

**Purpose**: Correctly attributing performance to the system rather than individuals when the system is dominant.

When the system determines outcomes, individual performance variation reflects system variation, not capability. Ranking, rewards, and punishments are meaningless.

#### Components
- **System Attribution** — 85-94% of problems are in the system. Performance variation on same process = system variation.
  - Key questions:
    - Performance variation attributed to system or individuals?
    - Workers blamed for system-determined outcomes?
    - Slogans or 'try harder' used for system problems?
- **Ranking and Merit Systems** — Ranking workers by output is meaningless when system is dominant factor. Merit rating and performance ranking are destructive.

#### Decision rules
- IF workers ranked by output on standardized process, THEN Red Bead violation, penalize Human Design.
- IF slogans/exhortations used for system problems, THEN penalize (Point 10 violation).
- IF rewards/punishments vary on outcomes workers cannot control, THEN penalize heavily.

### 14 Points for Management (as Design Principles)
**Source**: Out of the Crisis, pp. 23-24

**Purpose**: Transformation principles for system design.

Most directly applicable points translated into design criteria.

#### Components
- **Constancy of Purpose (Point 1)** — Long-term investment in innovation, research, education, continuous improvement, not short-term profit optimization.
- **Cease Dependence on Inspection (Point 3)** — Build quality in at design stage. Mass inspection is too late and costly.
- **Improve Constantly and Forever (Point 5)** — Never-ending improvement of quality and productivity. Decrease costs through quality.
- **Break Down Barriers (Point 9)** — Cross-functional cooperation to foresee problems. Silos destroy system optimization.
- **Eliminate Targets Without Methods (Points 10, 11)** — Numerical targets without methods create adversarial relationships.

#### Decision rules
- IF designed solely for current metrics with no evolution pathway, THEN Deadly Disease 1, penalize.
- IF quality found only through end-stage testing, THEN Point 3 violation, penalize.
- IF numeric targets without methods, THEN Point 10/11 violation, penalize.
- IF departments/components compete, THEN Point 9 violation, penalize.

### Seven Deadly Diseases (System Anti-Patterns)
**Source**: Out of the Crisis, pp. 97-98

**Purpose**: Organizational diseases blocking transformation.

Diseases 1-5 directly applicable (6-7 U.S.-specific contextual).

#### Components
- **Lack of Constancy of Purpose (Disease 1)** — Short-term results focus prevents building for long-term success.
- **Emphasis on Short-Term Profits (Disease 2)** — Pressure for immediate returns prevents quality investment.
- **Management by Visible Figures Alone (Disease 5)** — No consideration of unknown or unknowable figures.

#### Decision rules
- IF architecture driven by quarterly cost targets, THEN Diseases 1+2, penalize.
- IF only visible metrics optimized while unmeasured qualities degrade, THEN Disease 5, penalize.
- IF system health evaluated solely by dashboard numbers, THEN penalize.

### Chain Reaction
**Source**: Out of the Crisis, pp. 1-2

**Purpose**: Quality first -> costs decrease -> productivity improves.

Strict causal sequence. Pushing productivity directly without starting with quality degrades both.

#### Components
- **Quality-First Sequencing** — Improvement starts with quality. Cost/productivity gains are consequences, not goals.

#### Decision rules
- IF productivity pushed while quality degrades, THEN Chain Reaction violated, penalize.
- IF cost reduced by cutting quality (fewer tests, less review), THEN Chain Reaction reversed, penalize heavily.
- IF rework/defect rates high, THEN quality not first, diagnose upstream.

### Operational Definitions
**Source**: The New Economics, p. 105; Out of the Crisis

**Purpose**: Ensuring key terms, metrics, and acceptance criteria have agreed-upon measurement procedures meaning the same to all parties.

An operational definition is an agreed procedure for translating concept into measurement. Without it, data introduces variation beyond the system.

#### Components
- **Definition Existence** — Key terms/metrics must have operational definitions documented and agreed.
- **Definition Consistency** — Same definition must mean same thing to all parties, across time and teams.
  - Red flags: Success/failure metric defined differently by producer and consumer, data meaningless.

#### Decision rules
- IF key metrics have no operational definition, THEN all data suspect, penalize.
- IF same term means different things to different stakeholders, THEN penalize heavily.
- IF acceptance criteria subjective ('good enough,' 'ready'), THEN operational definitions missing.
- IF changing definition changes the number without changing reality, THEN not operational.

### Production Viewed as a System (Flow Diagram)
**Source**: Out of the Crisis, p. 4; The New Economics, p. 39

**Purpose**: Mapping the system as continuous feedback loop from inputs through production to consumers and back to design.

Canonical system diagram: Suppliers -> Receipt/Test -> Production/Assembly/Inspection -> Distribution -> Consumers -> Consumer Research -> Design/Redesign -> back. Stage 0 (idea generation) feeds the cycle.

#### Components
- **End-to-End Mapping** — Full production cycle mapped from inputs to consumers, all stages visible.
- **Consumer Feedback Loop** — Consumer/user research feeds back to design. System is circle, not line.
- **Process Feedback Loop** — Process measurements feed back into production directly.

#### Decision rules
- IF no system map, THEN components likely designed in isolation, penalize System Aim.
- IF no feedback from consumer to design, THEN open-loop, penalize Feedback.
- IF process measurements don't feed back to improvement, THEN loop broken.
- IF consumer feedback collected but never reaches design, THEN loop decorative.

