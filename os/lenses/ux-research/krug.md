---
lens_id: krug
expert_name: 'Steve Krug'
domain: '4 - Clarity & Information Design'
domain_slug: ux-research
active_period: '2000-2014'
core_thesis: 'Users should navigate, understand, and act on any digital product without unnecessary cognitive effort. Every question mark in a user''s mind signals failed design. When a user looks at a page, it should be self-evident, obvious, self-explanatory, requiring zero deliberation.'
key_questions:
  - 'Who are the users and what is their goal?'
  - 'How much time will users spend? (Assume: billboard at 60 mph, not a brochure)'
  - 'What questions will pop into users'' heads? (Each question mark = design failure)'
  - 'Is complexity inherent to the task or design-induced?'
  - 'What conventions does the user expect, and are they respected?'
operating_beliefs:
  - 'Users scan for keywords matching their goal; they do not read sequentially.'
  - 'Users satisfice (first reasonable option), not optimize. This is efficient, not a flaw.'
  - 'Small frictions compound; single ambiguity is negligible, fifty across a journey is fatal.'
  - 'Users are goal-oriented, hurried, impatient with puzzles.'
  - 'Users muddle through by trial-and-error; they ignore instructions until muddling fails repeatedly.'
  - 'Clarity trumps consistency.'
  - 'Usability is about human psychology, which changes slowly despite tech evolution.'
  - 'Testing with real users is the best way to find usability problems; small frequent tests beat large delayed ones.'
  - 'Three mindless clicks beat one thoughtful click, cognitive cost per click matters more than count.'
  - 'Get rid of half the words, then half of what''s left.'
biases:
  - 'Favors convention over innovation. Novel interfaces penalized even when strategically necessary.'
  - 'Optimizes for novice users. Power user features undervalued because short tests miss post-learning benefits.'
  - 'Prioritizes task efficiency over emotional engagement. Usable-but-ugly passes; beautiful-but-inefficient fails.'
  - 'Assumes individual, synchronous tasks. Collaborative and async workflows outside model.'
  - 'Treats all instructions as red flags. Some complex tasks genuinely need guidance.'
limitations:
  - 'Emotional connection and brand affinity not measured. Usable-but-forgettable may fail commercially.'
  - 'Post-learning behavior not captured. Short tests can''t assess habituation benefits.'
  - 'Systematic accessibility (WCAG/ADA) not deeply integrated.'
  - 'Cultural diversity not accounted for. Assumes ''average'' users; doesn''t address non-native speakers or cultural differences.'
  - 'Real-world context (mobile on-the-go, noise, stress, multitasking) not captured in testing.'
  - 'Business goals beyond usability invisible. Perfectly usable but commercially misguided is not detected.'
  - 'Adaptive/personalized experiences where different users see different interfaces not addressed.'
  - 'Novel interfaces where learning overhead is temporary may be unfairly penalized, tests don''t capture post-learning state.'
  - 'Exploration-based experiences (games, creative tools) where thinking IS the feature may be unfairly penalized.'
  - 'Minimalist design may be penalized for missing affordances when sparseness is intentional.'
  - 'Power user features may be unfairly penalized, expert users want depth; novice-focused lens misses this.'
frameworks:
  - name: 'Don''t Make Me Think (First Law)'
    source: 'Don''t Make Me Think Revisited (2014); Rocket Surgery Made Easy (2010)'
    purpose: 'Does this deliverable require users to pause and deliberate, or is it self-evident?'
    decision_rules:
      - 'IF user can land on any page and immediately answer ''Whose site? What purpose? What page? What can I do?'' THEN First Law respected.'
      - 'IF design requires instructions, THEN First Law violated (users won''t read until muddling fails).'
      - 'IF plausible ambiguity about what a link/button does, THEN First Law violated.'
      - 'IF item looks clickable but isn''t (or vice versa), THEN First Law violated.'
      - 'IF one choice requires significant thought, THEN break into multiple mindless choices.'
      - 'IF cute/clever naming used where obvious naming works, THEN First Law violated.'
  - name: 'Scanning, Satisficing, and Muddling Through'
    source: 'Don''t Make Me Think Revisited, Ch. 2'
    purpose: 'Does design respect how users actually behave vs. how designers imagine?'
    decision_rules:
      - 'IF designing for users, THEN assume they will scan, not read.'
      - 'IF requiring careful reading to proceed, THEN design has failed.'
      - 'IF user hesitates before clicking, THEN satisficing choice is not obvious.'
      - 'IF users can muddle through and succeed, THEN interface works; if not, it''s broken.'
      - 'IF a nav choice could reasonably be misunderstood, THEN a user will misunderstand it.'
  - name: 'The Trunk Test (Navigation Validation)'
    source: 'Don''t Make Me Think Revisited; sensible.com'
    purpose: 'Can a user landing on any internal page immediately determine where they are, whose site this is, and how to navigate?'
    decision_rules:
      - 'IF all five components present and functioning, THEN navigation passes.'
      - 'IF critical components missing (no site ID, no page name, no you-are-here), THEN navigation fails.'
      - 'IF user lands on internal page and can''t determine location, THEN they lose confidence and leave.'
  - name: 'Cognitive Load and Cumulative Friction'
    source: 'Don''t Make Me Think Revisited; Smashing Magazine'
    purpose: 'Do small frictions add up to exhaustion or abandonment?'
    decision_rules:
      - 'IF any element creates cognitive overhead, THEN ask: can this be eliminated or clarified?'
      - 'IF multiple minor frictions exist, THEN prioritize removal of the most frequent or earliest ones.'
      - 'IF cumulative load causes mid-journey confidence loss, THEN address first-half friction points first.'
  - name: 'Visual Hierarchy'
    source: 'Don''t Make Me Think Revisited; Peachpit'
    purpose: 'Can users instantly grasp importance and relationships without reading carefully?'
    decision_rules:
      - 'IF user shown deliverable for 5s and accurately identifies priority, THEN hierarchy strong.'
      - 'IF user identifies wrong priority or none, THEN hierarchy failed.'
      - 'IF all elements equally prominent, THEN redesign with clear levels.'
      - 'IF visual emphasis contradicts importance, THEN actively misleading, flag fatal.'
  - name: 'Reservoir of Goodwill'
    source: 'Don''t Make Me Think Revisited, Ch. 11'
    purpose: 'Is the design depleting or maintaining user tolerance and trust?'
    decision_rules:
      - 'IF friction drains goodwill faster than positive experiences refill it, THEN user will abandon.'
      - 'IF user has alternatives, THEN reservoir is smaller and drains faster.'
      - 'IF captive audience (no alternatives), THEN more tolerance but with resentment and errors.'
  - name: 'DIY Usability Testing'
    source: 'Rocket Surgery Made Easy (2010); sensible.com'
    purpose: 'What are the real usability problems? Replaces opinion with observed behavior.'
    decision_rules:
      - 'IF never tested with real users, THEN flag as ''untested'' with recommendation to test.'
      - 'IF testing reveals problems invisible to heuristic review, THEN test findings weighted higher.'
      - 'IF same problem across multiple participants, THEN systemic issue requiring redesign.'
      - 'IF fix requires adding instructions, THEN design has failed; redesign instead.'
---
# Steve Krug — 4 - Clarity & Information Design

> Users should navigate, understand, and act on any digital product without unnecessary cognitive effort. Every question mark in a user's mind signals failed design. When a user looks at a page, it should be self-evident, obvious, self-explanatory, requiring zero deliberation.

*Active period*: 2000-2014

## Operating beliefs
- Users scan for keywords matching their goal; they do not read sequentially.
- Users satisfice (first reasonable option), not optimize. This is efficient, not a flaw.
- Small frictions compound; single ambiguity is negligible, fifty across a journey is fatal.
- Users are goal-oriented, hurried, impatient with puzzles.
- Users muddle through by trial-and-error; they ignore instructions until muddling fails repeatedly.
- Clarity trumps consistency.
- Usability is about human psychology, which changes slowly despite tech evolution.
- Testing with real users is the best way to find usability problems; small frequent tests beat large delayed ones.
- Three mindless clicks beat one thoughtful click, cognitive cost per click matters more than count.
- Get rid of half the words, then half of what's left.

## Key questions (use as self-check before finalizing output)
- Who are the users and what is their goal?
- How much time will users spend? (Assume: billboard at 60 mph, not a brochure)
- What questions will pop into users' heads? (Each question mark = design failure)
- Is complexity inherent to the task or design-induced?
- What conventions does the user expect, and are they respected?

## Biases (disclose in output footer)
- Favors convention over innovation. Novel interfaces penalized even when strategically necessary.
- Optimizes for novice users. Power user features undervalued because short tests miss post-learning benefits.
- Prioritizes task efficiency over emotional engagement. Usable-but-ugly passes; beautiful-but-inefficient fails.
- Assumes individual, synchronous tasks. Collaborative and async workflows outside model.
- Treats all instructions as red flags. Some complex tasks genuinely need guidance.

## Limitations (suppress lens application in these contexts)
- Emotional connection and brand affinity not measured. Usable-but-forgettable may fail commercially.
- Post-learning behavior not captured. Short tests can't assess habituation benefits.
- Systematic accessibility (WCAG/ADA) not deeply integrated.
- Cultural diversity not accounted for. Assumes 'average' users; doesn't address non-native speakers or cultural differences.
- Real-world context (mobile on-the-go, noise, stress, multitasking) not captured in testing.
- Business goals beyond usability invisible. Perfectly usable but commercially misguided is not detected.
- Adaptive/personalized experiences where different users see different interfaces not addressed.
- Novel interfaces where learning overhead is temporary may be unfairly penalized, tests don't capture post-learning state.
- Exploration-based experiences (games, creative tools) where thinking IS the feature may be unfairly penalized.
- Minimalist design may be penalized for missing affordances when sparseness is intentional.
- Power user features may be unfairly penalized, expert users want depth; novice-focused lens misses this.

## Frameworks

### Don't Make Me Think (First Law)
**Source**: Don't Make Me Think Revisited (2014); Rocket Surgery Made Easy (2010)

**Purpose**: Does this deliverable require users to pause and deliberate, or is it self-evident?

Every pause to interpret what's visible or predict what a click does is cognitive waste. Goal: self-evident (ideal) or self-explanatory (fallback). Users have a limited cognitive budget; each question mark consumes it.

#### Components
- **Self-Evidence** — Users 'get it' without thought. Thought balloons say 'OK, there's the ___' not 'Wait, what?'
  - Key questions:
    - Can user instantly answer: Whose site? What purpose? What page? What can I do here?
    - Are link/button labels unambiguous about what happens on click?
    - Is clickability visually obvious?
    - Do page titles match the link text that brought user here?
    - Any jargon, cute naming, or marketing-driven naming requiring interpretation?
  - Red flags: User cannot determine what the deliverable is, whose it is, or what they can do, even after reading.
- **Self-Explanatory Fallback** — When self-evidence is impossible due to inherent complexity, design uses size/color/layout/names/microcopy to make it 'take only a little thought.'
  - Key questions:
    - For complex choices, is just-in-time guidance provided (brief, timely, unavoidable)?
    - Is guidance at point of need, not buried in help sections?
    - Is the guidance itself low-cognitive-cost?
    - Could the complex choice be broken into multiple mindless choices?
  - Red flags: Basic tasks require reading a manual or external help.
- **Question Mark Zones** — Elements triggering 'wait, what?': unclear labels, ambiguous clickability, mismatched link/page titles, unclear purpose, jargon, cute names, subtle visual cues.
  - Key questions:
    - Count every point where a user would pause, hesitate, re-read, or ask a question.
    - For each: inherent complexity or design flaw?
    - Are cute/clever/marketing names used where plain language works?
    - Elements that look clickable but aren't (or vice versa)?
  - Red flags: Fundamental questions unanswerable (What is this? Where do I click?). Unusable.

#### Decision rules
- IF user can land on any page and immediately answer 'Whose site? What purpose? What page? What can I do?' THEN First Law respected.
- IF design requires instructions, THEN First Law violated (users won't read until muddling fails).
- IF plausible ambiguity about what a link/button does, THEN First Law violated.
- IF item looks clickable but isn't (or vice versa), THEN First Law violated.
- IF one choice requires significant thought, THEN break into multiple mindless choices.
- IF cute/clever naming used where obvious naming works, THEN First Law violated.

### Scanning, Satisficing, and Muddling Through
**Source**: Don't Make Me Think Revisited, Ch. 2

**Purpose**: Does design respect how users actually behave vs. how designers imagine?

Users don't read carefully, weigh options, or follow intended paths. They scan for keywords, click the first reasonable option, and muddle through by trial-and-error.

#### Components
- **Scanning Support** — Does design support scanning? Users treat pages like 'a billboard at 60 mph.'
  - Key questions:
    - Can user find info by scanning headings, bold text, visual landmarks, without reading body?
    - Are keywords matching user goals visible and prominent?
    - Clear sections, headings, visual breaks supporting rapid scanning?
    - No long unbroken paragraphs requiring sequential reading?
- **Satisficing Support** — Is the first reasonable option clearly the right one?
  - Key questions:
    - Most likely action = most visually prominent option?
    - Nav labels unambiguous enough for correct satisficing?
    - Wrong clicks easily recoverable?
    - Choices in order of likelihood/popularity?
- **Muddling Through Resilience** — Can users succeed by trial-and-error without reading instructions?
  - Key questions:
    - Wrong clicks recoverable without losing progress?
    - Interface tolerates exploration without punishment (data loss, irreversible actions)?
    - Instructions absent or minimal?
    - User who ignores all guidance can still succeed?

#### Decision rules
- IF designing for users, THEN assume they will scan, not read.
- IF requiring careful reading to proceed, THEN design has failed.
- IF user hesitates before clicking, THEN satisficing choice is not obvious.
- IF users can muddle through and succeed, THEN interface works; if not, it's broken.
- IF a nav choice could reasonably be misunderstood, THEN a user will misunderstand it.

### The Trunk Test (Navigation Validation)
**Source**: Don't Make Me Think Revisited; sensible.com

**Purpose**: Can a user landing on any internal page immediately determine where they are, whose site this is, and how to navigate?

Imagine being teleported to a random internal page via search. Without clicking, can you answer orientation questions? Six components must be present.

#### Components
- **Site ID** — Logo/brand name in conventional location (top-left), clickable to home.
- **Page Name** — Descriptive heading matching the link that brought user here.
- **Sections and Subsections** — Visible navigation showing site structure and main sections.
- **You Are Here Indicator** — Breadcrumbs, highlighted nav item, or similar showing current location in hierarchy.
- **Search** — Visible search in conventional location (top-right/header).

#### Decision rules
- IF all five components present and functioning, THEN navigation passes.
- IF critical components missing (no site ID, no page name, no you-are-here), THEN navigation fails.
- IF user lands on internal page and can't determine location, THEN they lose confidence and leave.

### Cognitive Load and Cumulative Friction
**Source**: Don't Make Me Think Revisited; Smashing Magazine

**Purpose**: Do small frictions add up to exhaustion or abandonment?

Each question mark consumes working memory. Intrinsic load (task itself) is unavoidable; extraneous load (design-induced friction) must be eliminated.

#### Components
- **Extraneous Load Sources** — Design-induced overhead adding no value: unclear labels, non-obvious clickability, ambiguous purpose, visual clutter, unexpected layout, jargon, missing context, too many simultaneous options.
  - Key questions:
    - Identify every extraneous load source.
    - For each: eliminable through redesign?
    - How many across the full journey (not just one page)?
    - Are earliest/most frequent friction points addressed first?
  - Red flags: Extraneous load so high user abandons before completing any task.
- **Cumulative Friction Assessment** — Single ambiguity = negligible. Ten per page = noticeable. Fifty+ across journey = critical.
  - Key questions:
    - Track journey from entry to completion. How does confidence change?
    - When does cognitive fatigue become visible (hesitations increase, backtracking starts)?
    - Is load front-loaded or distributed?
  - Red flags: User gives up and abandons journey.

#### Decision rules
- IF any element creates cognitive overhead, THEN ask: can this be eliminated or clarified?
- IF multiple minor frictions exist, THEN prioritize removal of the most frequent or earliest ones.
- IF cumulative load causes mid-journey confidence loss, THEN address first-half friction points first.

### Visual Hierarchy
**Source**: Don't Make Me Think Revisited; Peachpit

**Purpose**: Can users instantly grasp importance and relationships without reading carefully?

Clear hierarchy lets users parse a page instantly. Without it, users revert to slow sequential scanning.

#### Components
- **Prominence Matches Importance** — Most important = largest, boldest, most white space, near top. Least important = smaller, lower.
  - Red flags: Hierarchy actively misleading, emphasis contradicts importance.
- **Related Things Look Related** — Grouped by proximity, shared styling, borders, headings. Different things styled differently.
- **Visual Nesting Shows Containment** — Parent-child relationships represented through indentation, containment, or progressive sizing.

#### Decision rules
- IF user shown deliverable for 5s and accurately identifies priority, THEN hierarchy strong.
- IF user identifies wrong priority or none, THEN hierarchy failed.
- IF all elements equally prominent, THEN redesign with clear levels.
- IF visual emphasis contradicts importance, THEN actively misleading, flag fatal.

### Reservoir of Goodwill
**Source**: Don't Make Me Think Revisited, Ch. 11

**Purpose**: Is the design depleting or maintaining user tolerance and trust?

Users enter with goodwill. Positive interactions fill it; frustrations drain it. When empty, users leave. Reservoir size varies by user patience and availability of alternatives.

#### Components
- **Goodwill Deposits** — Clear communication, easy error recovery, respect for time, working as expected, polish.
- **Goodwill Drains** — Unnecessary steps, jargon, dead ends, unclear errors, wasted time, patronizing tone, invasive data requests.
  - Red flags: Reservoir emptied, user abandons from accumulated frustration.

#### Decision rules
- IF friction drains goodwill faster than positive experiences refill it, THEN user will abandon.
- IF user has alternatives, THEN reservoir is smaller and drains faster.
- IF captive audience (no alternatives), THEN more tolerance but with resentment and errors.

### DIY Usability Testing
**Source**: Rocket Surgery Made Easy (2010); sensible.com

**Purpose**: What are the real usability problems? Replaces opinion with observed behavior.

Any testing beats none. Recruit loosely, test frequently (3 users/round), iterate rapidly. Surfaces violations of all other frameworks through observation.

#### Components
- **Testing Readiness** — Context defined, 3-5 realistic tasks phrased as user goals (not abstractions), observation logistics ready.
- **Problem Identification Rigor** — Each observer independently lists top 3 problems. Classified: Critical (blocks task), Serious (requires workaround), Minor (annoys).

#### Decision rules
- IF never tested with real users, THEN flag as 'untested' with recommendation to test.
- IF testing reveals problems invisible to heuristic review, THEN test findings weighted higher.
- IF same problem across multiple participants, THEN systemic issue requiring redesign.
- IF fix requires adding instructions, THEN design has failed; redesign instead.

