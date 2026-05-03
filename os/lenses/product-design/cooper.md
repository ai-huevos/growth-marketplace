---
lens_id: cooper
expert_name: 'Alan Cooper'
domain: '6 - Audience Calibration'
domain_slug: product-design
active_period: '1995-2014 (About Face 1st-4th editions; The Inmates Are Running the Asylum 1999; Cooper consultancy 1992-present)'
core_thesis: 'Every deliverable must be designed for a specific, research-based persona with explicit goals. The represented model must match the user''s mental model, not the implementation model. Optimize for perpetual intermediates. Eliminate excise. Behave like a considerate human.'
key_questions:
  - 'Who is the primary persona? Named, with behavioral data, specific goals, and context?'
  - 'What are the user''s end goals and experience goals?'
  - 'Skill level target, beginner, perpetual intermediate, or expert?'
  - 'Application posture, sovereign, transient, daemonic, or parasitic?'
  - 'Does the deliverable reflect user''s mental model or system''s implementation model?'
  - 'Usage frequency, duration, and attention mode?'
operating_beliefs:
  - 'Design for a single primary persona per interface. If >3 primary personas needed, scope is too broad.'
  - 'Personas must be precise, not accurate. Specific behavioral detail, never averages.'
  - '''The user'' is elastic, stretches to justify any decision. Personas prevent this.'
  - 'Goals are end conditions; tasks are intermediate processes. Goals steady; tasks transient. Never confuse them.'
  - 'Experience goals (how users want to FEEL) are non-negotiable. Violating them = product failure regardless of functional success.'
  - 'Beginners migrate to intermediacy or quit. Never optimize for beginners at intermediates'' expense.'
  - 'Majority of users are perpetual intermediates. Devote bulk of design effort to them.'
  - 'Imagine users as very intelligent but very busy.'
  - 'The represented model must match the mental model, not the implementation model.'
  - 'Navigation is excise. Error dialogs are excise. Confirmations are excise. Anything not advancing the goal is excise.'
  - 'Software should behave like a considerate human: forthcoming, perceptive, self-confident, deferential, graceful under failure.'
  - 'No matter how cool your interface is, less of it would be better.'
biases:
  - 'Privileges enterprise/productivity contexts. May not directly address consumer entertainment or social without adaptation.'
  - 'Privileges qualitative methods. No metrics or statistical thresholds for calibration quality.'
  - 'Privileges interaction behavior over content calibration. Limited guidance on tone, vocabulary, reading level tuning.'
  - 'Privileges deep research investment. Full persona methodology requires ethnographic interviews most organizations can''t afford.'
  - 'Privileges perpetual intermediates. May underrate deliverables correctly optimized for beginners in first-use-only contexts or experts in specialized domains.'
limitations:
  - 'Content strategy and tone calibration: frameworks address interaction behavior, not vocabulary/reading-level/density tuning.'
  - 'Accessibility: addresses skill levels and mental models but not physical or cognitive accessibility as distinct dimension.'
  - 'Quantitative measurement: no metrics or thresholds. Cannot answer ''how much better numerically?'''
  - 'Multi-touch non-linear journeys: assumes contained interaction context; less reliable across multiple touchpoints over time.'
  - 'Collaborative authorship: many frameworks substantially developed by Reimann, Goodwin, Cronin, Halley, Greenwood. 7-step persona process credited to Reimann, Goodwin, Halley.'
  - 'Provisional personas: organizations lacking ethnographic resources use provisional personas, framework may penalize ''good enough'' unfairly.'
  - 'Purely creative/aesthetic deliverables: goal-directed framework assumes measurable end goals; expressive work may score poorly despite effectiveness.'
  - 'Compliance-driven interfaces: regulation-dictated interaction penalized as constraint, but constraints are necessary.'
frameworks:
  - name: 'Personas'
    source: 'The Inmates Are Running the Asylum (1999); About Face 2-4'
    purpose: 'Is the deliverable designed for a specific, research-based person, not ''the user,'' not a demographic segment, not the designer''s self-projection?'
    decision_rules:
      - 'IF ''the user'' without behavioral specificity, THEN Elastic User Problem.'
      - 'IF >3 primary personas, THEN scope problem. Project too broad.'
      - 'IF persona defined only by demographics, THEN stereotype not archetype.'
      - 'IF edge cases drive core design at primary persona''s expense, THEN edge-case design.'
      - 'IF designer''s skills projected onto users, THEN self-referential design.'
  - name: 'Goal Taxonomy'
    source: 'About Face 2-4; refined by Kim Goodwin (2001)'
    purpose: 'Does the deliverable address the right goals at the right levels, end goals for utility, experience goals for emotional satisfaction, life goals for loyalty?'
    decision_rules:
      - 'IF end goals present but experience goals absent, THEN functional but resented.'
      - 'IF experience goals present but end goals absent, THEN toy not tool.'
      - 'IF technical goals drive design independently, THEN most dangerous pattern.'
      - 'IF goals confused with tasks/features, THEN goal-task confusion.'
      - 'IF manufacturer goals served by violating user goals, THEN fundamental misalignment.'
  - name: 'Perpetual Intermediates'
    source: 'Inmates (1999); About Face 2-4'
    purpose: 'Is the deliverable optimized for the correct skill level, with majority effort on perpetual intermediates?'
    decision_rules:
      - 'IF exclusively beginner-optimized in general-use context, THEN beginner over-optimization.'
      - 'IF exclusively expert-optimized in general-use context, THEN expert over-optimization.'
      - 'IF no skill-level optimization identifiable, THEN absent calibration.'
      - 'IF beginner optimization justified by context (kiosk, emergency, first-time-only), THEN override, do not penalize.'
      - 'IF expert optimization justified by specialized domain (dev tools, medical imaging), THEN override, do not penalize.'
  - name: 'Application Posture'
    source: 'About Face 1-4'
    purpose: 'Does interaction density, visual complexity, and feature surface match usage pattern, duration, frequency, attention mode?'
    decision_rules:
      - 'IF sovereign complexity for transient use, THEN posture mismatch.'
      - 'IF transient simplicity for sovereign workflow, THEN posture mismatch.'
      - 'IF background process demands constant attention, THEN daemonic-to-sovereign mismatch.'
      - 'IF posture matches duration, frequency, and attention mode, THEN pass.'
  - name: 'Three Models (Implementation, Mental, Represented)'
    source: 'About Face 1-4'
    purpose: 'Does the deliverable match how users think about their work, or expose internal system architecture?'
    decision_rules:
      - 'IF represented model reflects implementation not mental model, THEN fundamental calibration failure.'
      - 'IF programmer jargon where domain language exists, THEN language mismatch.'
      - 'IF user must learn system architecture for basic tasks, THEN instant fail on Mental Model Alignment.'
      - 'IF mechanical-age metaphors used without enhancement, THEN WARN.'
  - name: 'Scenario Types'
    source: 'About Face 2-4'
    purpose: 'Is design grounded in goal-directed narrative scenarios rather than feature lists?'
    decision_rules:
      - 'IF feature-list driven with no user story context, THEN scenario absence.'
      - 'IF edge cases drive core design, THEN edge-case distortion.'
      - 'IF ''Pretend It''s Magic'' simplicity in context scenarios, THEN bonus indicator.'
      - 'IF ''Pretend the System Is Human'' tone in key paths, THEN bonus indicator.'
  - name: 'Considerate Products'
    source: 'About Face 3, Ch. 12'
    purpose: 'Does the deliverable behave like a considerate human rather than an inconsiderate machine?'
    decision_rules:
      - 'IF many unnecessary questions/confirmations, THEN inconsiderate interrogation.'
      - 'IF internal errors exposed to users, THEN inconsiderate burden-shifting.'
      - 'IF product blames users for errors, THEN inconsiderate blame.'
      - 'IF product fails ungracefully with no recovery, THEN inconsiderate failure.'
  - name: 'Orchestration and Excise Elimination'
    source: 'About Face 2-4, Ch. 10'
    purpose: 'Is unnecessary work eliminated? Does interaction fade from awareness so user focuses on goal, not tool?'
    decision_rules:
      - 'IF excessive pre-work configuration, THEN setup excise.'
      - 'IF modals interrupt primary workflow, THEN dialog excise.'
      - 'IF nav depth >3 levels for common tasks, THEN navigation excise.'
      - 'IF product talks AT user when direct interaction feasible, THEN interrogative design.'
  - name: 'Design Values'
    source: 'About Face 3, Ch. 8'
    purpose: 'Does the deliverable embody ethical, purposeful, pragmatic, elegant values?'
    decision_rules:
      - 'IF dark patterns or deception, THEN ethical violation.'
      - 'IF elements not traceable to user goals, THEN purposeless elements.'
      - 'IF design could be simpler without losing capability, THEN elegance deficit.'
---
# Alan Cooper — 6 - Audience Calibration

> Every deliverable must be designed for a specific, research-based persona with explicit goals. The represented model must match the user's mental model, not the implementation model. Optimize for perpetual intermediates. Eliminate excise. Behave like a considerate human.

*Active period*: 1995-2014 (About Face 1st-4th editions; The Inmates Are Running the Asylum 1999; Cooper consultancy 1992-present)

## Operating beliefs
- Design for a single primary persona per interface. If >3 primary personas needed, scope is too broad.
- Personas must be precise, not accurate. Specific behavioral detail, never averages.
- 'The user' is elastic, stretches to justify any decision. Personas prevent this.
- Goals are end conditions; tasks are intermediate processes. Goals steady; tasks transient. Never confuse them.
- Experience goals (how users want to FEEL) are non-negotiable. Violating them = product failure regardless of functional success.
- Beginners migrate to intermediacy or quit. Never optimize for beginners at intermediates' expense.
- Majority of users are perpetual intermediates. Devote bulk of design effort to them.
- Imagine users as very intelligent but very busy.
- The represented model must match the mental model, not the implementation model.
- Navigation is excise. Error dialogs are excise. Confirmations are excise. Anything not advancing the goal is excise.
- Software should behave like a considerate human: forthcoming, perceptive, self-confident, deferential, graceful under failure.
- No matter how cool your interface is, less of it would be better.

## Key questions (use as self-check before finalizing output)
- Who is the primary persona? Named, with behavioral data, specific goals, and context?
- What are the user's end goals and experience goals?
- Skill level target, beginner, perpetual intermediate, or expert?
- Application posture, sovereign, transient, daemonic, or parasitic?
- Does the deliverable reflect user's mental model or system's implementation model?
- Usage frequency, duration, and attention mode?

## Biases (disclose in output footer)
- Privileges enterprise/productivity contexts. May not directly address consumer entertainment or social without adaptation.
- Privileges qualitative methods. No metrics or statistical thresholds for calibration quality.
- Privileges interaction behavior over content calibration. Limited guidance on tone, vocabulary, reading level tuning.
- Privileges deep research investment. Full persona methodology requires ethnographic interviews most organizations can't afford.
- Privileges perpetual intermediates. May underrate deliverables correctly optimized for beginners in first-use-only contexts or experts in specialized domains.

## Limitations (suppress lens application in these contexts)
- Content strategy and tone calibration: frameworks address interaction behavior, not vocabulary/reading-level/density tuning.
- Accessibility: addresses skill levels and mental models but not physical or cognitive accessibility as distinct dimension.
- Quantitative measurement: no metrics or thresholds. Cannot answer 'how much better numerically?'
- Multi-touch non-linear journeys: assumes contained interaction context; less reliable across multiple touchpoints over time.
- Collaborative authorship: many frameworks substantially developed by Reimann, Goodwin, Cronin, Halley, Greenwood. 7-step persona process credited to Reimann, Goodwin, Halley.
- Provisional personas: organizations lacking ethnographic resources use provisional personas, framework may penalize 'good enough' unfairly.
- Purely creative/aesthetic deliverables: goal-directed framework assumes measurable end goals; expressive work may score poorly despite effectiveness.
- Compliance-driven interfaces: regulation-dictated interaction penalized as constraint, but constraints are necessary.

## Frameworks

### Personas
**Source**: The Inmates Are Running the Asylum (1999); About Face 2-4

**Purpose**: Is the deliverable designed for a specific, research-based person, not 'the user,' not a demographic segment, not the designer's self-projection?

Composite archetypes from behavioral data via ethnographic interviews. Prevent three problems: elastic user, self-referential design, edge-case design. Precise (specific behavioral detail), not accurate (no averages). One primary persona per interface.

#### Components
- **Persona Identification** — Named persona with specific behavioral attributes, not 'the user,' 'power users,' or demographics.
  - Key questions:
    - Single named persona with behavioral attributes identifiable?
    - Defined by behavioral variables (activities, attitudes, aptitudes, motivations, skills) not demographics alone?
    - Clear PRIMARY designation, not one of many undifferentiated targets?
  - Red flags: 'The user' as sole design target with no behavioral specificity.
- **Persona Type Designation** — Categorized as Primary, Secondary, Supplemental, Customer, Served, or Negative. Primary drives all decisions.
  - Key questions:
    - One persona clearly primary?
    - Secondary accommodated without undermining primary?
    - Negative persona prevents scope creep?
- **Three Problems Check** — Persona prevents elastic user, self-referential design, and edge-case design.
  - Key questions:
    - Does 'the user' shift meaning per feature (elastic)?
    - Design reflects designer's own skills/models rather than target user's (self-referential)?
    - Edge cases driving decisions that penalize primary persona's daily use?

#### Decision rules
- IF 'the user' without behavioral specificity, THEN Elastic User Problem.
- IF >3 primary personas, THEN scope problem. Project too broad.
- IF persona defined only by demographics, THEN stereotype not archetype.
- IF edge cases drive core design at primary persona's expense, THEN edge-case design.
- IF designer's skills projected onto users, THEN self-referential design.

### Goal Taxonomy
**Source**: About Face 2-4; refined by Kim Goodwin (2001)

**Purpose**: Does the deliverable address the right goals at the right levels, end goals for utility, experience goals for emotional satisfaction, life goals for loyalty?

Goals are end conditions, not tasks. Three user goal types (life, experience, end) plus three non-user (customer, corporate, technical). Experience goals non-negotiable; end goals primary focus; life goals create loyalty. Technical goals must never drive design independently.

#### Components
- **Experience Goals** — How user wants to FEEL. Simple, universal, personal, often unconscious. 'Don't feel stupid,' 'Feel competent.'
  - Key questions:
    - Does deliverable address how user wants to feel?
    - Could user feel stupid, incompetent, or anxious?
    - Experience goals implicit in design or violated?
  - Red flags: Systematically makes users feel stupid through core interaction pattern.
- **End Goals** — Tangible expected outcomes. Must be met for product to be worth user's time.
  - Key questions:
    - Specific outcomes user expects?
    - Deliverable directly enables them?
    - Goals confused with tasks or features?
- **Goal Priority Check** — User goals > customer > corporate > technical. Technical goals are most dangerous, frequently override user goals.
  - Key questions:
    - Technical goals driving design over user goals?
    - Corporate goals trumping user experience?
    - Manufacturer goals achieved WITHOUT violating user goals?
  - Red flags: Technical goals completely override user goals (e.g., forcing DB structure understanding for basic tasks).

#### Decision rules
- IF end goals present but experience goals absent, THEN functional but resented.
- IF experience goals present but end goals absent, THEN toy not tool.
- IF technical goals drive design independently, THEN most dangerous pattern.
- IF goals confused with tasks/features, THEN goal-task confusion.
- IF manufacturer goals served by violating user goals, THEN fundamental misalignment.

### Perpetual Intermediates
**Source**: Inmates (1999); About Face 2-4

**Purpose**: Is the deliverable optimized for the correct skill level, with majority effort on perpetual intermediates?

Skill bell curve: few beginners, few experts, majority perpetual intermediates. Beginners migrate to intermediacy or quit. Only intermediates persist. Optimize for intermediates; provide beginner onboarding and expert acceleration.

#### Components
- **Beginner Support** — Path TO intermediacy, not permanent beginner accommodation. Temporary scaffolding, world vectors for discovery.
  - Key questions:
    - Path from beginner to intermediate?
    - Scaffolding temporary or permanent dumbing-down?
    - World vectors (visible explorable UI) present?
- **Intermediate Optimization** — Bulk of design for perpetual intermediates. Power, efficiency, shortcuts, customization, memorization vectors.
  - Key questions:
    - Bulk of interface optimized for daily intermediate use?
    - Common features directly accessible?
    - Memorization vectors (shortcuts, customizable workflows) available?
- **Expert Acceleration** — Head vectors (keyboard accelerators, command lines), automation, density options. Never penalize intermediates.
  - Key questions:
    - Expert acceleration available without penalizing intermediates?
    - Automation for repetitive tasks?
    - Density adjustable?

#### Decision rules
- IF exclusively beginner-optimized in general-use context, THEN beginner over-optimization.
- IF exclusively expert-optimized in general-use context, THEN expert over-optimization.
- IF no skill-level optimization identifiable, THEN absent calibration.
- IF beginner optimization justified by context (kiosk, emergency, first-time-only), THEN override, do not penalize.
- IF expert optimization justified by specialized domain (dev tools, medical imaging), THEN override, do not penalize.

### Application Posture
**Source**: About Face 1-4

**Purpose**: Does interaction density, visual complexity, and feature surface match usage pattern, duration, frequency, attention mode?

Four postures define behavioral relationship between application and user. Mismatching posture to usage = fundamental calibration failure.

#### Components
- **Sovereign Posture** — Monopolizes attention for long periods. Runs maximized. Examples: Word, Photoshop, Outlook.
  - Key questions:
    - Long-duration full-attention application?
    - Conservative visuals, rich input, maximized views, keyboard accelerators?
- **Transient Posture** — Comes and goes, single focused function. Examples: Calculator, Find dialog, weather check.
  - Key questions:
    - Brief single-function interaction?
    - Simple, clear, obvious, single view, everything spelled out?
- **Daemonic Posture** — Background process, no direct interaction. Examples: printer drivers, network connections.
  - Key questions:
    - Invisible during normal operation?
    - Alerts on exceptions only?
- **Parasitic/Auxiliary Posture** — Persistent but small, focused. Examples: clock, task manager, notification panel.
  - Key questions:
    - Small footprint, persistent, focused?
    - Does not expand beyond role?

#### Decision rules
- IF sovereign complexity for transient use, THEN posture mismatch.
- IF transient simplicity for sovereign workflow, THEN posture mismatch.
- IF background process demands constant attention, THEN daemonic-to-sovereign mismatch.
- IF posture matches duration, frequency, and attention mode, THEN pass.

### Three Models (Implementation, Mental, Represented)
**Source**: About Face 1-4

**Purpose**: Does the deliverable match how users think about their work, or expose internal system architecture?

Implementation Model = how software works internally (engineers control). Mental Model = how users perceive it works (users control). Represented Model = how designer presents functioning (designers control). Represented must match mental, not implementation.

#### Components
- **Mental Model Match** — Represented model matches user's domain language and workflow concepts.
  - Key questions:
    - Interface uses terms users think in?
    - System concepts translated to domain concepts?
    - User recognizes their work model?
  - Red flags: Forces users to understand implementation architecture for basic tasks.
- **Implementation Hiding** — Technical complexity hidden. Internal processes, data structures, system states not exposed.
  - Key questions:
    - Internal system states visible?
    - Error messages in user or system terms?
    - Technical architecture understanding required?

#### Decision rules
- IF represented model reflects implementation not mental model, THEN fundamental calibration failure.
- IF programmer jargon where domain language exists, THEN language mismatch.
- IF user must learn system architecture for basic tasks, THEN instant fail on Mental Model Alignment.
- IF mechanical-age metaphors used without enhancement, THEN WARN.

### Scenario Types
**Source**: About Face 2-4

**Purpose**: Is design grounded in goal-directed narrative scenarios rather than feature lists?

Three types: Context scenarios (what, not how, 'magic black box' requirements), Key path scenarios (precise daily interaction behavior), Validation scenarios (edge case testing without driving design).

#### Components
- **Context Scenarios** — High-level narrative 'day-in-the-life.' Goals and touchpoints, no interface specifics.
  - Key questions:
    - Design traces to narrative understanding of user's day/goals/context?
    - Requirements from scenarios, not feature lists?
- **Key Path Scenarios** — Precise behavior for each major daily interaction. Storyboarded. High-frequency pathways only. Support pedagogy AND shortcuts.
  - Key questions:
    - High-frequency interactions in precise detail?
    - Both discovery and efficiency supported?
- **Validation Scenarios** — Edge case testing. Three sub-types: key path variants, necessary use, edge case. Edge cases must NOT drive design.
  - Key questions:
    - Edge cases handled gracefully?
    - Daily use uncompromised?
    - Edge cases subordinate?

#### Decision rules
- IF feature-list driven with no user story context, THEN scenario absence.
- IF edge cases drive core design, THEN edge-case distortion.
- IF 'Pretend It's Magic' simplicity in context scenarios, THEN bonus indicator.
- IF 'Pretend the System Is Human' tone in key paths, THEN bonus indicator.

### Considerate Products
**Source**: About Face 3, Ch. 12

**Purpose**: Does the deliverable behave like a considerate human rather than an inconsiderate machine?

16 principles for considerate software behavior. Operational check: takes interest, defers to user, provides info proactively, uses common sense, anticipates needs, fails gracefully, never burdens user with internal problems.

#### Components
- **Proactive and Forthcoming** — Provides useful info proactively, anticipates needs, communicates status without prompting.
  - Key questions:
    - Anticipates needs?
    - Surfaces relevant info proactively?
    - Detects context and adapts?
- **Deferential and Non-Intrusive** — Defers to workflow, no unnecessary questions, hides internal problems, uses discretion.
  - Key questions:
    - Never interrupts unnecessarily?
    - Internal problems hidden?
    - Intelligent defaults?
    - Questions only when genuine?
- **Graceful and Responsible** — Fails gracefully, prevents mistakes, takes responsibility, never blames user.
  - Key questions:
    - Graceful failure with recovery?
    - Smart defaults and undo?
    - Takes responsibility?

#### Decision rules
- IF many unnecessary questions/confirmations, THEN inconsiderate interrogation.
- IF internal errors exposed to users, THEN inconsiderate burden-shifting.
- IF product blames users for errors, THEN inconsiderate blame.
- IF product fails ungracefully with no recovery, THEN inconsiderate failure.

### Orchestration and Excise Elimination
**Source**: About Face 2-4, Ch. 10

**Purpose**: Is unnecessary work eliminated? Does interaction fade from awareness so user focuses on goal, not tool?

Orchestration = transparent interaction. Principles: follow mental models, less is more (reduce elements not capabilities), direct not discuss, minimize excise. Excise = any effort not advancing user's goal.

#### Components
- **Excise Identification** — Navigation, modals, confirmations, unnecessary steps, pre-work configuration, anything not contributing to user's goal.
  - Key questions:
    - Steps between opening and productive work?
    - Modals/confirmations/nav in primary workflow?
    - Could steps be eliminated?
- **Direct Interaction** — Users direct software (like driving), not dialog with it. Informative not interrogative.
  - Key questions:
    - User drives or responds to interrogation?
    - Interface informative or interrogative?
    - Direct manipulation or dialog boxes?

#### Decision rules
- IF excessive pre-work configuration, THEN setup excise.
- IF modals interrupt primary workflow, THEN dialog excise.
- IF nav depth >3 levels for common tasks, THEN navigation excise.
- IF product talks AT user when direct interaction feasible, THEN interrogative design.

### Design Values
**Source**: About Face 3, Ch. 8

**Purpose**: Does the deliverable embody ethical, purposeful, pragmatic, elegant values?

Four values as quality filter. Ethical: no harm/deception. Purposeful: every element serves a goal. Pragmatic: real-world constraints acknowledged. Elegant: simplest complete solution.

#### Components
- **Ethical** — No harm, no deception, respect privacy and dignity.
  - Key questions:
    - Transparent?
    - Respects privacy?
    - No dark patterns?
    - Dignity preserved?
  - Red flags: Active deception or manipulation harming user interests.
- **Purposeful** — Every element serves purpose tied to user goals.
  - Key questions:
    - Every element traceable to a goal?
    - Any decorative/vestigial elements?
- **Pragmatic** — Acknowledge business and technical constraints. Design within reality.
  - Key questions:
    - Balances user goals with business/technical reality?
    - Decisions ignore feasibility?
- **Elegant** — Simplest complete solution. 'Less of it would be better.'
  - Key questions:
    - Cannot remove anything without losing capability?
    - Unnecessary complexity present?

#### Decision rules
- IF dark patterns or deception, THEN ethical violation.
- IF elements not traceable to user goals, THEN purposeless elements.
- IF design could be simpler without losing capability, THEN elegance deficit.

