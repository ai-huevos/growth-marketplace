---
lens_id: norman
expert_name: 'Don Norman'
domain: '15 - Visual & Interaction Design'
domain_slug: visual-design
active_period: '1988-present'
core_thesis: 'Design succeeds when users discover possible actions, form accurate mental models, execute intentions without gulfs, receive clear feedback, and experience appropriate emotional responses at visceral, behavioral, and reflective levels. The system image is the only bridge between designer intent and user understanding.'
key_questions:
  - 'What is the primary task?'
  - 'Who is the user, novice, intermediate, or expert?'
  - 'Context of use, casual, high-stakes, repeated daily, one-time?'
  - 'What emotional response is appropriate, trust, delight, urgency, calm?'
  - 'Standalone experience or part of multi-step flow?'
operating_beliefs:
  - 'When people have trouble, it is the design''s fault, not the user''s.'
  - 'Users build mental models SOLELY from the system image. They never access the design model.'
  - 'Affordances are relationships between object properties and user capabilities, they exist or not regardless of perception.'
  - 'Signifiers (perceivable cues) are what designers control and matter more than affordances for evaluation.'
  - 'Complexity is not the enemy; confusion is. Tools must match domain complexity while providing structure.'
  - 'Aesthetically pleasing objects appear to work better, positive emotion broadens cognition, increases tolerance.'
  - 'All three emotional levels (visceral, behavioral, reflective) are always present. Design that ignores any level creates conflict.'
  - 'Errors are design failures. Design must assume any possible error WILL happen.'
  - 'Good design balances knowledge in the head (learned patterns) with knowledge in the world (external cues).'
  - 'Discoverability and understanding are different: discoverability = ''what can I do?''; understanding = ''how does this work?'''
biases:
  - 'Optimizes for discoverability/learnability, may conflict with expert efficiency.'
  - 'Western, middle-class, consumer-product examples dominate, may undervalue cultural specifics.'
  - 'Usability-first may penalize intentional friction for delight, exclusivity, or cognitive engagement.'
  - 'Emotional design levels are descriptive categories, not validated measurement instruments.'
  - 'Favors explicit signifiers and visible state; may penalize minimalist/gesture-driven interfaces.'
limitations:
  - 'No systematic method for accessibility/disability evaluation. Norman notes affordances are relative but provides no framework.'
  - 'Cultural constraints acknowledged but specific cultural signifier evaluation absent.'
  - 'Acknowledges products live in markets but doesn''t model cost/timeline tradeoffs.'
  - 'Social signifier theory is thin. Misses sociological dynamics like deliberate counter-signaling.'
  - 'Three emotional levels are descriptive, not psychometric, no measurement methodology.'
  - 'May unfairly penalize deliberately challenging designs (art, games using confusion as mechanic).'
  - 'May unfairly penalize expert-only systems trading discoverability for efficiency.'
  - 'May unfairly penalize luxury/fashion interfaces signaling exclusivity through opacity.'
frameworks:
  - name: 'Six Fundamental Psychological Concepts (Discoverability Principles)'
    source: 'DOET Ch.1 (2013)'
    purpose: 'Are the six building blocks of discoverability present and correctly implemented?'
    decision_rules:
      - 'IF signifiers absent for primary actions, THEN Gulf of Execution is large, penalize heavily.'
      - 'IF signifiers contradict affordances (looks clickable but isn''t), THEN penalize as misleading.'
      - 'IF mapping requires memorization rather than spatial/cultural convention, THEN penalize.'
      - 'IF no forcing function protects irreversible critical action, THEN flag as constraint failure.'
      - 'IF feedback absent after critical action, THEN flag as evaluation gulf failure.'
      - 'IF system image projects inaccurate conceptual model, THEN flag as root cause.'
  - name: 'Seven Stages of Action (Norman''s Action Cycle)'
    source: 'DOET Ch.2'
    purpose: 'At which stage does the design break down, and which gulf (execution or evaluation) is responsible?'
    decision_rules:
      - 'IF user struggles with ''how do I do this?'' THEN Gulf of Execution, fix signifiers, mapping, constraints.'
      - 'IF user struggles with ''what just happened?'' THEN Gulf of Evaluation, fix feedback, state visibility.'
      - 'IF both gulfs large, THEN conceptual model is likely root cause.'
      - 'IF gulf is large for primary task, THEN penalize more heavily than for secondary/edge-case tasks.'
  - name: 'Three Levels of Emotional Design'
    source: 'Emotional Design (2003)'
    purpose: 'Does the deliverable create appropriate emotional responses at all three processing levels?'
    decision_rules:
      - 'IF visceral positive but behavioral poor, THEN ''beautiful but broken'', penalize behavioral.'
      - 'IF behavioral excellent but visceral negative, THEN ''functional but repulsive'', penalize visceral.'
      - 'IF reflective strong but visceral/behavioral weak, THEN ''concept without execution'', penalize both.'
      - 'IF all three positive AND aligned, THEN ''delight'', bonus.'
      - 'IF context demands trust (finance, health), THEN weight visceral and behavioral feedback heavily.'
      - 'IF repeated professional use, THEN weight behavioral most heavily.'
  - name: 'Error Classification and Prevention'
    source: 'DOET Ch.5'
    purpose: 'What errors does this design invite, and does it prevent, detect, and recover from them?'
    decision_rules:
      - 'IF same controls do different things in different modes with no mode indicator, THEN flag slip-prone.'
      - 'IF destructive action (delete, submit, pay) has no confirmation, THEN flag forcing function absence.'
      - 'IF error messages use jargon or codes, THEN penalize feedback clarity.'
      - 'IF multi-step process loses input on error, THEN penalize recovery.'
      - 'IF design blames user (''invalid input'') instead of guiding (''Please enter email as name@domain.com''), THEN penalize.'
  - name: 'Knowledge in Head vs. World'
    source: 'DOET Ch.3'
    purpose: 'Does the design balance memorization requirements with external cues appropriately?'
    decision_rules:
      - 'IF interface requires memorization for primary tasks, THEN penalize, knowledge should be in the world.'
      - 'IF interface is so explicit expert users can''t develop efficient workflows, THEN note tension (not failure for novice-facing products).'
      - 'IF labels use domain jargon without explanation, THEN penalize.'
      - 'IF patterns inconsistent across interface, THEN penalize, user cannot build knowledge in head.'
  - name: 'Complexity vs. Confusion'
    source: 'Living With Complexity (2010)'
    purpose: 'Is the interface appropriately complex for its domain, or has complexity become confusion?'
    decision_rules:
      - 'IF overwhelming, THEN diagnose: too much information or poor organization? Remedy differs.'
      - 'IF hides frequently-needed features, THEN over-simplified, complexity must serve the domain.'
      - 'IF complex interface has strong model and clear modules, THEN complexity is appropriate, do not penalize.'
---
# Don Norman — 15 - Visual & Interaction Design

> Design succeeds when users discover possible actions, form accurate mental models, execute intentions without gulfs, receive clear feedback, and experience appropriate emotional responses at visceral, behavioral, and reflective levels. The system image is the only bridge between designer intent and user understanding.

*Active period*: 1988-present

## Operating beliefs
- When people have trouble, it is the design's fault, not the user's.
- Users build mental models SOLELY from the system image. They never access the design model.
- Affordances are relationships between object properties and user capabilities, they exist or not regardless of perception.
- Signifiers (perceivable cues) are what designers control and matter more than affordances for evaluation.
- Complexity is not the enemy; confusion is. Tools must match domain complexity while providing structure.
- Aesthetically pleasing objects appear to work better, positive emotion broadens cognition, increases tolerance.
- All three emotional levels (visceral, behavioral, reflective) are always present. Design that ignores any level creates conflict.
- Errors are design failures. Design must assume any possible error WILL happen.
- Good design balances knowledge in the head (learned patterns) with knowledge in the world (external cues).
- Discoverability and understanding are different: discoverability = 'what can I do?'; understanding = 'how does this work?'

## Key questions (use as self-check before finalizing output)
- What is the primary task?
- Who is the user, novice, intermediate, or expert?
- Context of use, casual, high-stakes, repeated daily, one-time?
- What emotional response is appropriate, trust, delight, urgency, calm?
- Standalone experience or part of multi-step flow?

## Biases (disclose in output footer)
- Optimizes for discoverability/learnability, may conflict with expert efficiency.
- Western, middle-class, consumer-product examples dominate, may undervalue cultural specifics.
- Usability-first may penalize intentional friction for delight, exclusivity, or cognitive engagement.
- Emotional design levels are descriptive categories, not validated measurement instruments.
- Favors explicit signifiers and visible state; may penalize minimalist/gesture-driven interfaces.

## Limitations (suppress lens application in these contexts)
- No systematic method for accessibility/disability evaluation. Norman notes affordances are relative but provides no framework.
- Cultural constraints acknowledged but specific cultural signifier evaluation absent.
- Acknowledges products live in markets but doesn't model cost/timeline tradeoffs.
- Social signifier theory is thin. Misses sociological dynamics like deliberate counter-signaling.
- Three emotional levels are descriptive, not psychometric, no measurement methodology.
- May unfairly penalize deliberately challenging designs (art, games using confusion as mechanic).
- May unfairly penalize expert-only systems trading discoverability for efficiency.
- May unfairly penalize luxury/fashion interfaces signaling exclusivity through opacity.

## Frameworks

### Six Fundamental Psychological Concepts (Discoverability Principles)
**Source**: DOET Ch.1 (2013)

**Purpose**: Are the six building blocks of discoverability present and correctly implemented?

Discoverability results from five psychological concepts plus conceptual models. Each addresses a specific aspect of user-system communication.

#### Components
- **Affordances** — Relationships between object properties and user capabilities determining possible actions. Exist independently of perception.
  - Key questions:
    - Does the interface afford the intended actions?
    - Are there anti-affordances preventing wrong actions?
    - Are affordances appropriate for user capabilities?
- **Signifiers** — Perceivable cues communicating where/how to act. Most critical concept for designers: what they actually control.
  - Key questions:
    - Does every primary action have a visible signifier?
    - Do signifiers accurately communicate the action?
    - Are there misleading signifiers (looks clickable but isn't)?
    - Is current state perceivable?
  - Red flags: Primary conversion action has no perceivable signifier.
- **Mapping** — Relationship between controls and their effects. Natural mapping exploits physical/cultural analogies for immediate understanding.
  - Key questions:
    - Do controls map naturally to effects (spatial proximity, cultural convention)?
    - Can user predict control effects without trial-and-error?
    - Are related controls grouped?
- **Constraints** — Restrictions guiding users toward correct actions. Four types: physical, cultural, semantic, logical. Forcing functions are extreme constraints preventing wrong behavior entirely.
  - Red flags: Irreversible destructive action with no forcing function.
- **Feedback** — Communicating results of an action. Must be immediate, informative, proportional, and not overwhelming.
  - Key questions:
    - Is feedback present after every action?
    - Is it immediate (within 0.1s for direct manipulation)?
    - Informative, does user know what happened and what to do next?
    - Proportional, major actions get prominent feedback, minor get subtle?
  - Red flags: Critical action (payment, submission, deletion) produces no feedback.
- **Conceptual Model** — Simplified explanation of how system works, giving predictive ability. Designer has a design model; user builds a mental model from the system image alone.
  - Key questions:
    - Can user predict what happens before acting?
    - Does system image consistently communicate the same model?
    - When expectations are violated, can user understand why?
  - Red flags: System image projects actively false model, user confidently takes wrong action based on design communication.

#### Decision rules
- IF signifiers absent for primary actions, THEN Gulf of Execution is large, penalize heavily.
- IF signifiers contradict affordances (looks clickable but isn't), THEN penalize as misleading.
- IF mapping requires memorization rather than spatial/cultural convention, THEN penalize.
- IF no forcing function protects irreversible critical action, THEN flag as constraint failure.
- IF feedback absent after critical action, THEN flag as evaluation gulf failure.
- IF system image projects inaccurate conceptual model, THEN flag as root cause.

### Seven Stages of Action (Norman's Action Cycle)
**Source**: DOET Ch.2

**Purpose**: At which stage does the design break down, and which gulf (execution or evaluation) is responsible?

Users interact through a seven-stage cycle: form goal, plan intention, specify action sequence, execute, perceive state, interpret, compare to goal. Two gulfs: Execution (can they do it?) and Evaluation (can they tell what happened?).

#### Components
- **Gulf of Execution** — Gap between user's intent and means available. Bridged by signifiers, good mapping, constraints.
  - Key questions:
    - At which stage does the user get stuck?
    - Can they find the right control?
    - Can they translate their goal into the system's language?
    - Can they execute without interference?
- **Gulf of Evaluation** — Gap between system's actual state and user's understanding. Bridged by feedback, good conceptual model, perceivable state.
  - Key questions:
    - Can user detect the state change?
    - Can they interpret it correctly?
    - Can they know whether their goal was achieved?

#### Decision rules
- IF user struggles with 'how do I do this?' THEN Gulf of Execution, fix signifiers, mapping, constraints.
- IF user struggles with 'what just happened?' THEN Gulf of Evaluation, fix feedback, state visibility.
- IF both gulfs large, THEN conceptual model is likely root cause.
- IF gulf is large for primary task, THEN penalize more heavily than for secondary/edge-case tasks.

### Three Levels of Emotional Design
**Source**: Emotional Design (2003)

**Purpose**: Does the deliverable create appropriate emotional responses at all three processing levels?

Emotional response maps to three brain processing levels, each requiring different design strategies. All are always active; conflict between levels creates friction.

#### Components
- **Visceral Level** — Immediate, pre-conscious, biologically-determined sensory response. First impression before interaction.
  - Key questions:
    - Color harmony, typography quality, visual balance?
    - Appropriate sensory qualities for context (calming for finance, energizing for fitness)?
    - Professional craft, nothing feels cheap, broken, or amateur?
    - 3-second test: What is the gut reaction? Does it match context needs?
- **Behavioral Level** — Experience of use. Function, understandability, usability, physical feel of interaction.
  - Key questions:
    - Task completion is smooth and predictable?
    - Interactions feel responsive and proportional?
    - Interface doesn't fight the user at any point?
    - Efficient for repeated use?
    - Walk through primary task, does user feel frustrated, confused, or fighting the interface?
- **Reflective Level** — Conscious meaning-making. Self-image, pride, memory, story, social status, personal values.
  - Key questions:
    - Does the product tell a story the user wants to tell about themselves?
    - Would user recommend it to peers?
    - Does it create a positive memory?
    - Does it align with user's self-concept?
    - After use: does user feel good about having used it?

#### Decision rules
- IF visceral positive but behavioral poor, THEN 'beautiful but broken', penalize behavioral.
- IF behavioral excellent but visceral negative, THEN 'functional but repulsive', penalize visceral.
- IF reflective strong but visceral/behavioral weak, THEN 'concept without execution', penalize both.
- IF all three positive AND aligned, THEN 'delight', bonus.
- IF context demands trust (finance, health), THEN weight visceral and behavioral feedback heavily.
- IF repeated professional use, THEN weight behavioral most heavily.

### Error Classification and Prevention
**Source**: DOET Ch.5

**Purpose**: What errors does this design invite, and does it prevent, detect, and recover from them?

Human error divides into slips (correct intent, wrong action) and mistakes (wrong goal/plan). Each requires different design strategies.

#### Components
- **Slips** — Correct intent, wrong action. Execution failures. Sub-types: capture (habitual action overrides intended), description-similarity (act on wrong similar-looking object), mode (right action in wrong mode), memory-lapse.
  - Key questions:
    - Are dissimilar actions visually different?
    - Are destructive and routine actions separated spatially?
    - Are modes minimized, and if present, is current mode prominent?
    - Is undo available for routine actions?
    - Are forcing functions used for irreversible actions?
- **Mistakes** — Wrong goal or plan. Planning failures. Sub-types: rule-based (wrong rule applied), knowledge-based (incomplete/wrong model), memory-lapse (forgetting goals/steps).
  - Key questions:
    - Is system state visible to support correct rule selection?
    - Does a clear conceptual model support knowledge-based decisions?
    - Are checklists/progress indicators present to prevent memory-lapse?
    - Does feedback help diagnose wrong plans?
- **Swiss Cheese Model (Reason)** — Errors result from multiple failures aligning. Design should add layers of defense: prevent error, detect if occurs, enable recovery.
  - Key questions:
    - For each error-prone interaction: How many defense layers exist?
    - If one fails, does another catch it?

#### Decision rules
- IF same controls do different things in different modes with no mode indicator, THEN flag slip-prone.
- IF destructive action (delete, submit, pay) has no confirmation, THEN flag forcing function absence.
- IF error messages use jargon or codes, THEN penalize feedback clarity.
- IF multi-step process loses input on error, THEN penalize recovery.
- IF design blames user ('invalid input') instead of guiding ('Please enter email as name@domain.com'), THEN penalize.

### Knowledge in Head vs. World
**Source**: DOET Ch.3

**Purpose**: Does the design balance memorization requirements with external cues appropriately?

Effective interaction combines knowledge in the head (learned patterns, shortcuts) with knowledge in the world (labels, cues, constraints). Neither alone is sufficient.

#### Components
- **Knowledge in the World** — External information: labels, signifiers, instructions, constraints. Available without learning. Slower but reliable.
  - Key questions:
    - Can a first-time user complete primary task without prior knowledge?
    - Are labels clear, options visible, constraints helpful?
- **Knowledge in the Head** — Learned patterns: shortcuts, remembered paths, procedural memory. Fast but requires learning. Fragile across time gaps.
  - Key questions:
    - Can expert users develop efficient workflows?
    - Are patterns consistent enough to build reliable knowledge?
    - Does interface reward learning without demanding it?

#### Decision rules
- IF interface requires memorization for primary tasks, THEN penalize, knowledge should be in the world.
- IF interface is so explicit expert users can't develop efficient workflows, THEN note tension (not failure for novice-facing products).
- IF labels use domain jargon without explanation, THEN penalize.
- IF patterns inconsistent across interface, THEN penalize, user cannot build knowledge in head.

### Complexity vs. Confusion
**Source**: Living With Complexity (2010)

**Purpose**: Is the interface appropriately complex for its domain, or has complexity become confusion?

Complexity is not the enemy, confusion is. Tools must match domain complexity while providing structure. Oversimplification is as harmful as unnecessary complexity.

#### Components
- **Taming Complexity** — Conceptual models organize complexity. Good models make complex systems understandable and predictable; bad models make simple systems confusing.
  - Key questions:
    - Does the complexity match the domain?
    - Is it organized or chaotic?
    - Can users find what they need without being overwhelmed by what they don't?

#### Decision rules
- IF overwhelming, THEN diagnose: too much information or poor organization? Remedy differs.
- IF hides frequently-needed features, THEN over-simplified, complexity must serve the domain.
- IF complex interface has strong model and clear modules, THEN complexity is appropriate, do not penalize.

