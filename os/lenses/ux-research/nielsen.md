---
lens_id: nielsen
expert_name: 'Jakob Nielsen'
domain: '4 - Clarity & Information Design'
domain_slug: ux-research
active_period: '1990-present'
core_thesis: 'Usability is the dominant quality attribute. Users must understand, consume, and act on information without unnecessary cognitive effort. Any design element increasing cognitive load without serving the user''s task is a defect.'
key_questions:
  - 'Who are the users? Characteristics, experience, prior knowledge?'
  - 'What is the primary task?'
  - 'What other sites do users frequent? (Jakob''s Law: expectations form from totality of experience)'
  - 'What device and context?'
  - 'What is the audience''s reading/literacy level?'
operating_beliefs:
  - 'Users scan, not read. 79% scan any new page.'
  - 'Users spend most time on OTHER sites (Jakob''s Law). They expect yours to work like what they know.'
  - 'Simplicity wins. Every extra unit of information competes with relevant units.'
  - 'Users are impatient. If they can''t find it quickly, they leave.'
  - '5-user iterative testing finds most problems. Many small tests beat big studies.'
  - 'Content is king. Users notice content quality far more than navigation or visuals.'
  - 'Usability = learnability + efficiency + memorability + errors + satisfaction.'
  - 'Useful = usability + utility. Distinct concepts.'
biases:
  - 'Prioritizes task efficiency over emotional design: a perfect score can still feel clinical.'
  - 'Treats aesthetics instrumentally (serves task completion), does not evaluate beauty for its own sake.'
  - 'Jakob''s Law biases toward convention. Genuinely innovative interfaces score poorly before users adapt.'
  - 'Objective writing principle penalizes promotional copy even when it serves valid brand-building.'
  - 'Minimalism heuristic can flag density that domain experts actually need.'
limitations:
  - 'Emotional design/delight not measured. No measurement of joy, trust, or brand attachment.'
  - 'Novel interaction paradigms penalized pre-adoption. First iPhone, spatial computing would score poorly.'
  - 'Cultural/contextual nuance limited. Grounded in Western, English-language web research. F-pattern may not apply to RTL or non-Western traditions.'
  - 'Content accuracy not evaluated. Assesses structure/presentation, not correctness or authority.'
  - 'Social/collaborative dimensions outside scope. User-to-user interaction through the system not addressed.'
  - 'Long-term behavioral change not captured. Point-in-time usability only.'
  - 'Business strategy not assessed. Evaluates whether users CAN do tasks, not whether those tasks are right for the business.'
  - 'Exploratory/discovery designs (art portfolios, museums) where wandering is intentional may be unfairly penalized.'
  - 'Dense expert tools where high information density is expected may be unfairly penalized.'
  - 'Marketing pages prioritizing emotional impact over task efficiency may be unfairly penalized.'
  - 'Gamification where deliberate friction serves engagement may be unfairly penalized.'
frameworks:
  - name: '10 Usability Heuristics'
    source: 'Molich & Nielsen 1990, revised 1994 via factor analysis of 249 problems against 101 principles. CHI''94.'
    purpose: 'Does this interface violate fundamental usability principles?'
    decision_rules:
      - 'IF action without informing user, THEN H1 violation.'
      - 'IF feedback delayed >1s with no indicator, THEN H1 violation.'
      - 'IF jargon or non-intuitive ordering, THEN H2 violation.'
      - 'IF users can''t back out easily, THEN H3 violation.'
      - 'IF same word means different things (or vice versa), THEN H4 violation.'
      - 'IF high-cost errors possible without confirmation, THEN H5 violation.'
      - 'IF users must remember info across screens, THEN H6 violation.'
      - 'IF only one interaction path for all levels, THEN H7 violation.'
      - 'IF irrelevant info present, THEN H8 violation.'
      - 'IF error messages use codes with no solution, THEN H9 violation.'
      - 'IF docs are unsearchable or abstract, THEN H10 violation.'
  - name: 'Severity Rating Scale'
    source: 'Nielsen 1994b, Usability Inspection Methods, Wiley.'
    purpose: 'How bad is this problem? Should we fix it before release?'
    decision_rules:
      - 'IF several severity-4 (catastrophe) problems remain, THEN do not release.'
      - 'IF only severity-1 (cosmetic) problems remain, THEN release acceptable.'
      - 'IF severity ratings diverge across evaluators, THEN problem description is ambiguous, investigate.'
      - 'Rating 4: Prevents task completion or makes product unusable.'
      - 'Rating 3: Significant delay/frustration or occasional task failure.'
      - 'Rating 2: Occasional difficulty with workarounds.'
      - 'Rating 1: Slight hesitation, no task impact.'
  - name: 'Five Components of Usability'
    source: 'Usability Engineering Ch.2 (Nielsen 1993). ''Usability 101'' nngroup.com.'
    purpose: 'What specifically makes this deliverable usable or unusable?'
    decision_rules:
      - 'IF learnability poor, THEN new users abandon.'
      - 'IF efficiency poor, THEN experienced users seek alternatives.'
      - 'IF memorability poor, THEN returning users face re-learning costs.'
      - 'IF error rate high or catastrophic, THEN system is dangerous and unreliable.'
      - 'IF satisfaction low, THEN users avoid system even if it technically works.'
  - name: 'F-Shaped Reading Pattern'
    source: 'Nielsen 2006 eyetracking research, updated 2017.'
    purpose: 'Where do users actually look, and what does that mean for content placement?'
    decision_rules:
      - 'IF important info only on right side or buried deep, THEN users miss it.'
      - 'IF first two lines don''t contain most important info, THEN users may leave.'
      - 'IF formatted with headings/bullets/bold, THEN F-pattern disrupted positively.'
      - 'IF wall of text, THEN F-pattern strongest and most content missed.'
  - name: 'Information Foraging / Information Scent'
    source: 'Pirolli & Card 1999. NNg ''Information Foraging'' 2019, ''Information Scent'' 2020.'
    purpose: 'Why do users click (or not), scroll (or not), stay (or leave)?'
    decision_rules:
      - 'IF labels use jargon/branded terms/vague language, THEN low scent, users won''t click.'
      - 'IF insufficient context above fold, THEN users assume irrelevant and leave.'
      - 'IF clickbait inflates scent, THEN short-term clicks up but long-term trust erodes.'
      - 'IF navigation mirrors org chart instead of user mental models, THEN findability collapses.'
  - name: 'Writing for the Web: Concise, Scannable, Objective'
    source: 'Morkes & Nielsen 1997. ''How Users Read on the Web'' Nielsen 1997.'
    purpose: 'Is content written for how web users actually consume?'
    decision_rules:
      - 'IF promotional/marketese language, THEN users distrust and disengage.'
      - 'IF paragraphs contain multiple ideas, THEN users miss everything after first few words.'
      - 'IF subheadings clever rather than descriptive, THEN scannability fails.'
      - 'IF word count exceeds necessary, THEN cut by 50%.'
      - 'IF all three principles applied, THEN expect +124% usability improvement.'
  - name: 'Response Time Limits'
    source: 'Nielsen (from Miller 1968, Card et al. 1991).'
    purpose: 'Is the system fast enough to maintain usability?'
    decision_rules:
      - 'IF >10s with no feedback, THEN users abandon.'
      - 'IF >1s with no feedback, THEN users lose flow.'
      - 'IF >10s unavoidable, THEN only acceptable at natural breaks.'
  - name: 'Jakob''s Law'
    source: 'Nielsen 2000.'
    purpose: 'Should this design deviate from established conventions?'
    decision_rules:
      - 'IF convention violated, THEN expect ~80% disengagement.'
      - 'IF must deviate, THEN must be incredibly useful to justify learning cost.'
      - 'IF scrolljacking, THEN UX crime: disorientation, hassle, annoyance.'
  - name: 'Inverted Pyramid'
    source: 'Nielsen 1996, updated NNg 2018.'
    purpose: 'Is the most important information presented first?'
    decision_rules:
      - 'IF key message buried below fold or after preamble, THEN inverted pyramid violation.'
      - 'IF must read entire piece to understand point, THEN inverted pyramid violation.'
---
# Jakob Nielsen — 4 - Clarity & Information Design

> Usability is the dominant quality attribute. Users must understand, consume, and act on information without unnecessary cognitive effort. Any design element increasing cognitive load without serving the user's task is a defect.

*Active period*: 1990-present

## Operating beliefs
- Users scan, not read. 79% scan any new page.
- Users spend most time on OTHER sites (Jakob's Law). They expect yours to work like what they know.
- Simplicity wins. Every extra unit of information competes with relevant units.
- Users are impatient. If they can't find it quickly, they leave.
- 5-user iterative testing finds most problems. Many small tests beat big studies.
- Content is king. Users notice content quality far more than navigation or visuals.
- Usability = learnability + efficiency + memorability + errors + satisfaction.
- Useful = usability + utility. Distinct concepts.

## Key questions (use as self-check before finalizing output)
- Who are the users? Characteristics, experience, prior knowledge?
- What is the primary task?
- What other sites do users frequent? (Jakob's Law: expectations form from totality of experience)
- What device and context?
- What is the audience's reading/literacy level?

## Biases (disclose in output footer)
- Prioritizes task efficiency over emotional design: a perfect score can still feel clinical.
- Treats aesthetics instrumentally (serves task completion), does not evaluate beauty for its own sake.
- Jakob's Law biases toward convention. Genuinely innovative interfaces score poorly before users adapt.
- Objective writing principle penalizes promotional copy even when it serves valid brand-building.
- Minimalism heuristic can flag density that domain experts actually need.

## Limitations (suppress lens application in these contexts)
- Emotional design/delight not measured. No measurement of joy, trust, or brand attachment.
- Novel interaction paradigms penalized pre-adoption. First iPhone, spatial computing would score poorly.
- Cultural/contextual nuance limited. Grounded in Western, English-language web research. F-pattern may not apply to RTL or non-Western traditions.
- Content accuracy not evaluated. Assesses structure/presentation, not correctness or authority.
- Social/collaborative dimensions outside scope. User-to-user interaction through the system not addressed.
- Long-term behavioral change not captured. Point-in-time usability only.
- Business strategy not assessed. Evaluates whether users CAN do tasks, not whether those tasks are right for the business.
- Exploratory/discovery designs (art portfolios, museums) where wandering is intentional may be unfairly penalized.
- Dense expert tools where high information density is expected may be unfairly penalized.
- Marketing pages prioritizing emotional impact over task efficiency may be unfairly penalized.
- Gamification where deliberate friction serves engagement may be unfairly penalized.

## Frameworks

### 10 Usability Heuristics
**Source**: Molich & Nielsen 1990, revised 1994 via factor analysis of 249 problems against 101 principles. CHI'94.

**Purpose**: Does this interface violate fundamental usability principles?

Ten rules of thumb for interaction design from factor analysis of real usability problems. Evaluation lenses, not pass/fail checkboxes.

#### Components
- **H1: Visibility of System Status** — Keep users informed through appropriate, timely feedback.
  - Key questions:
    - Feedback for every action?
    - Progress indicator for delays >1s?
    - Users know where they are in a process?
  - Red flags: System affects user data with no feedback, or >10s delay with no progress indicator.
- **H2: Match Between System and Real World** — Use user's language, familiar concepts, real-world conventions, natural mapping.
  - Key questions:
    - User vocabulary vs. internal jargon?
    - Natural, logical information ordering?
    - Icons/metaphors map to real-world equivalents?
- **H3: User Control and Freedom** — Clear emergency exits; Undo/Redo support.
  - Key questions:
    - Easy to back out of mistakes?
    - Undo/Redo for important actions?
    - Exit points clearly marked?
- **H4: Consistency and Standards** — Follow platform/industry conventions; maintain internal and external consistency.
  - Key questions:
    - Same words/actions/patterns mean same thing throughout?
    - Platform conventions followed?
    - No conflicting patterns?
- **H5: Error Prevention** — Eliminate error-prone conditions or confirm before commit. Distinguish slips (inattention) from mistakes (mental model mismatch).
  - Key questions:
    - Error-prone conditions eliminated via constraints/defaults?
    - High-cost actions require confirmation?
    - Input validation prevents common errors?
- **H6: Recognition Rather Than Recall** — Minimize memory load; make elements/actions/options visible or easily retrievable.
  - Key questions:
    - Must users remember info across screens?
    - All options visible at decision point?
    - Navigation visible (not hidden behind hamburger on desktop)?
- **H7: Flexibility and Efficiency of Use** — Shortcuts for experts; customization support.
  - Key questions:
    - Accelerators for experienced users?
    - Customizable to different needs?
    - Multiple interaction paths for different skill levels?
- **H8: Aesthetic and Minimalist Design** — Every extra info unit competes with relevant ones. Keep content focused on essentials.
  - Key questions:
    - Every visible element serves primary task?
    - Irrelevant info competing for attention?
    - Visual design supports or competes with content?
- **H9: Help Users Recognize, Diagnose, Recover from Errors** — Plain language errors, precise problem indication, constructive solution.
  - Key questions:
    - Plain language (no codes/jargon)?
    - Precisely indicates which element failed?
    - Suggests concrete solution?
- **H10: Help and Documentation** — Best if not needed. When necessary: easy to search, task-focused, concrete steps.
  - Key questions:
    - Primary tasks completable without help?
    - Help easy to find and search?
    - Task-focused with concrete steps?

#### Decision rules
- IF action without informing user, THEN H1 violation.
- IF feedback delayed >1s with no indicator, THEN H1 violation.
- IF jargon or non-intuitive ordering, THEN H2 violation.
- IF users can't back out easily, THEN H3 violation.
- IF same word means different things (or vice versa), THEN H4 violation.
- IF high-cost errors possible without confirmation, THEN H5 violation.
- IF users must remember info across screens, THEN H6 violation.
- IF only one interaction path for all levels, THEN H7 violation.
- IF irrelevant info present, THEN H8 violation.
- IF error messages use codes with no solution, THEN H9 violation.
- IF docs are unsearchable or abstract, THEN H10 violation.

### Severity Rating Scale
**Source**: Nielsen 1994b, Usability Inspection Methods, Wiley.

**Purpose**: How bad is this problem? Should we fix it before release?

Severity = frequency x impact x persistence (+ market impact). Rated 0-4. Always aggregate across 3+ evaluators.

#### Components
- **Frequency** — How often does the problem occur?
- **Impact** — How hard to overcome?
- **Persistence** — One-time or recurring?

#### Decision rules
- IF several severity-4 (catastrophe) problems remain, THEN do not release.
- IF only severity-1 (cosmetic) problems remain, THEN release acceptable.
- IF severity ratings diverge across evaluators, THEN problem description is ambiguous, investigate.
- Rating 4: Prevents task completion or makes product unusable.
- Rating 3: Significant delay/frustration or occasional task failure.
- Rating 2: Occasional difficulty with workarounds.
- Rating 1: Slight hesitation, no task impact.

### Five Components of Usability
**Source**: Usability Engineering Ch.2 (Nielsen 1993). 'Usability 101' nngroup.com.

**Purpose**: What specifically makes this deliverable usable or unusable?

Five measurable quality components. Usability is distinct from utility. Useful = usability + utility.

#### Components
- **Learnability** — How easy to accomplish basic tasks on first encounter?
  - Key questions:
    - First-time user completes primary task without help?
    - How many clicks to orient?
    - Primary actions self-evident?
  - Red flags: Primary task uncompletable by first-time user even with effort.
- **Efficiency** — Once learned, how quickly can tasks be performed?
- **Memorability** — How easily can returning users reestablish proficiency?
- **Errors** — How many errors, how severe, how easy to recover?
  - Red flags: Catastrophic errors (data loss, irreversible) with no recovery path.
- **Satisfaction** — How pleasant to use?

#### Decision rules
- IF learnability poor, THEN new users abandon.
- IF efficiency poor, THEN experienced users seek alternatives.
- IF memorability poor, THEN returning users face re-learning costs.
- IF error rate high or catastrophic, THEN system is dangerous and unreliable.
- IF satisfaction low, THEN users avoid system even if it technically works.

### F-Shaped Reading Pattern
**Source**: Nielsen 2006 eyetracking research, updated 2017.

**Purpose**: Where do users actually look, and what does that mean for content placement?

Three movements: (1) horizontal across top, (2) shorter horizontal below, (3) vertical scan down left side. Triggered by walls of text and low reading commitment. F-pattern is a FAILURE mode, good formatting disrupts it.

#### Components
- **Top-of-Content Placement** — First two lines get most attention (top bars of F).
  - Key questions:
    - Most important info in first two lines?
    - Key message front-loaded (inverted pyramid)?
    - Reader of first two lines understands core point?
- **Left-Side Content Loading** — Users scan left side vertically (stem of F). First words of each element get disproportionate attention.
  - Key questions:
    - Headings/list items begin with info-carrying words (not filler)?
    - Important content on left side?
    - First 2-3 words of each element convey meaning?
- **F-Pattern Disruption (Formatting)** — Subheadings, bullets, bold keywords, short paragraphs disrupt F-pattern positively.
  - Key questions:
    - Meaningful subheadings for section-jumping?
    - Bullet lists for parallel items?
    - Bold keywords as visual anchors?
    - One idea per paragraph?
  - Red flags: Entire content is wall-of-text with no web formatting.

#### Decision rules
- IF important info only on right side or buried deep, THEN users miss it.
- IF first two lines don't contain most important info, THEN users may leave.
- IF formatted with headings/bullets/bold, THEN F-pattern disrupted positively.
- IF wall of text, THEN F-pattern strongest and most content missed.

### Information Foraging / Information Scent
**Source**: Pirolli & Card 1999. NNg 'Information Foraging' 2019, 'Information Scent' 2020.

**Purpose**: Why do users click (or not), scroll (or not), stay (or leave)?

Users forage like animals: maximizing info value relative to cost. Information scent = user's estimate of source value BEFORE consumption, based on link labels, surrounding content, thumbnails, prior knowledge. Strong scent drives clicks; weak scent drives abandonment.

#### Components
- **Link Label Quality** — Most important scent component. Labels must be clear, self-explanatory, user-vocabulary.
  - Key questions:
    - Each label precisely predicts destination?
    - Self-explanatory without context?
    - User vocabulary, not jargon/branded terms?
    - No vague labels ('Learn More', 'Click Here')?
  - Red flags: Navigation labels so opaque users cannot find core content.
- **Contextual Scent Signals** — Summaries, thumbnails, snippets that help estimate value before clicking.
- **Mental Model Match** — Navigation matches user mental models, not org chart.
  - Key questions:
    - Navigation reflects user tasks?
    - Key content in <3 clicks?
    - Organization matches user categorization?

#### Decision rules
- IF labels use jargon/branded terms/vague language, THEN low scent, users won't click.
- IF insufficient context above fold, THEN users assume irrelevant and leave.
- IF clickbait inflates scent, THEN short-term clicks up but long-term trust erodes.
- IF navigation mirrors org chart instead of user mental models, THEN findability collapses.

### Writing for the Web: Concise, Scannable, Objective
**Source**: Morkes & Nielsen 1997. 'How Users Read on the Web' Nielsen 1997.

**Purpose**: Is content written for how web users actually consume?

Three principles with measured impact: Concise (+58% usability), Scannable (+47%), Objective (+27%). Combined: +124% usability. Multiplicative, not merely additive.

#### Components
- **Concise** — Half the word count of print equivalent. Every word earns its place.
- **Scannable** — Bold keywords, meaningful subheadings, bullet lists, one idea per paragraph. Users extract meaning by scanning.
  - Red flags: Entirely wall-of-text with no formatting.
- **Objective** — Factual, non-promotional tone. No marketese or boastful claims. Users distrust promotional language.

#### Decision rules
- IF promotional/marketese language, THEN users distrust and disengage.
- IF paragraphs contain multiple ideas, THEN users miss everything after first few words.
- IF subheadings clever rather than descriptive, THEN scannability fails.
- IF word count exceeds necessary, THEN cut by 50%.
- IF all three principles applied, THEN expect +124% usability improvement.

### Response Time Limits
**Source**: Nielsen (from Miller 1968, Card et al. 1991).

**Purpose**: Is the system fast enough to maintain usability?

Three thresholds define user perception of responsiveness.

#### Components
- **0.1s Threshold** — Feels instantaneous; direct manipulation.
- **1.0s Threshold** — Flow uninterrupted but delay noticed; loses direct manipulation feel.
- **10s Threshold** — Attention limit. Beyond this, users want to multitask and may not return.
  - Red flags: >10s with no feedback, users abandon.

#### Decision rules
- IF >10s with no feedback, THEN users abandon.
- IF >1s with no feedback, THEN users lose flow.
- IF >10s unavoidable, THEN only acceptable at natural breaks.

### Jakob's Law
**Source**: Nielsen 2000.

**Purpose**: Should this design deviate from established conventions?

Users spend most time on other sites, so they expect yours to work like what they know. Commonalities across sites become ingrained mental models.

#### Components
- **Convention Adherence** — Degree to which design follows established interaction patterns.
  - Key questions:
    - Standard navigation patterns?
    - Interactive elements in expected locations/styles?
    - Normal scrolling (no scrolljacking)?
    - Common patterns followed (search placement, logo=home, cart icon)?
  - Red flags: Fundamentally violates Jakob's Law with no justification (scrolljacking, gratuitous pattern reinvention).

#### Decision rules
- IF convention violated, THEN expect ~80% disengagement.
- IF must deviate, THEN must be incredibly useful to justify learning cost.
- IF scrolljacking, THEN UX crime: disorientation, hassle, annoyance.

### Inverted Pyramid
**Source**: Nielsen 1996, updated NNg 2018.

**Purpose**: Is the most important information presented first?

Conclusion first, supporting details in decreasing importance, background last. Matches web behavior: most users only read the beginning.

#### Components
- **Conclusion-First Structure** — Key takeaway at the very beginning.
  - Key questions:
    - First paragraph contains key message?
    - Reading only first paragraph gives core point?
    - Stopping at any point still gives most important info seen so far?

#### Decision rules
- IF key message buried below fold or after preamble, THEN inverted pyramid violation.
- IF must read entire piece to understand point, THEN inverted pyramid violation.

