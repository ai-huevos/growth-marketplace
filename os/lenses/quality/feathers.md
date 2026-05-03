---
lens_id: feathers
expert_name: 'Michael Feathers'
domain: '13 - Systems & Automation Design'
domain_slug: quality
active_period: '2004-present'
core_thesis: 'Maintainability = whether components can be isolated, tested, and changed safely. Code without tests is legacy regardless of age or elegance. The dependency structure IS the design, if you can''t get a component into a test harness, dependencies are the problem.'
key_questions:
  - 'Automated tests? If not, legacy code by definition.'
  - 'Can components instantiate in a test harness without the whole system?'
  - 'Where are the seams, behavior-alteration points without editing in place?'
  - 'Dependency graph? Explicit (injected) or implicit (hardcoded)?'
  - 'Feedback speed? Tests under 100ms each?'
  - 'High-churn, high-complexity files? These are refactoring hotspots.'
operating_beliefs:
  - 'Legacy code = code without tests. Age, elegance, docs irrelevant.'
  - 'Last thing you do is write new code. Most effort: understand, isolate, test.'
  - 'Dependency breaking justifies temporary ugliness: a scar you heal once tests exist.'
  - 'Tests touching DB/network/filesystem or taking >100ms are NOT unit tests.'
  - 'Change minimal code to get tests in place. Safety over ambition.'
  - 'Production code becomes its own spec, characterize actual behavior, not intended.'
  - 'Power law: few files get most changes. Target these for refactoring.'
  - 'Edit and Pray is industry standard. Cover and Modify is prescribed.'
biases:
  - 'Favors OO languages with inheritance/interfaces/polymorphism. Techniques assume these exist.'
  - 'Testability over all other quality attributes, well-architected + no tests scores poorly.'
  - 'Optimized for brownfield/legacy. May undervalue greenfield design where test debt hasn''t accumulated.'
  - 'Code-level seams primary. May undervalue system-level seams (service boundaries, queues, APIs).'
  - 'Incremental safe change over ambitious rewrites, even when rewrite may be warranted.'
limitations:
  - 'No framework for distributed systems, service seams, partitions, consistency, orchestration not addressed.'
  - 'Non-code automation (IaC, CI/CD configs, low-code platforms) lack obvious seams in this model.'
  - 'Techniques focus on code isolation, not DB/schema evolution or stateful testing.'
  - '24 dependency-breaking techniques assume OO. Limited direct applicability to functional/declarative architectures.'
  - 'Feathers (2021): ''so many issues come down to mutable state and rampant conditionality'', suggesting frameworks address symptoms rather than root causes.'
  - 'Well-architected systems with zero tests score as legacy regardless of design quality.'
  - 'Formally verified systems are outside the model entirely.'
frameworks:
  - name: 'Legacy Code Definition (Binary Classifier)'
    source: 'WELC, Preface p. xvi'
    purpose: 'Binary classification: is this legacy code?'
    decision_rules:
      - 'IF zero tests, THEN legacy code. All evaluation uses Legacy Code Change Algorithm path.'
      - 'IF tests exist but don''t cover change area, THEN that area is legacy even if others are tested.'
      - 'IF tests take >100ms or touch DB/network/fs, THEN not unit tests; feedback loop degraded.'
      - 'IF beautiful architecture + no tests, THEN still legacy.'
  - name: 'Legacy Code Change Algorithm'
    source: 'WELC, Chapter 2'
    purpose: 'Five-step safety algorithm for disciplined change in legacy code.'
    decision_rules:
      - 'IF changes before characterization tests, THEN Edit and Pray. Penalize Change Safety heavily.'
      - 'IF refactoring skipped after changes, THEN debt accumulates. Penalize moderately.'
      - 'IF new code is first step, THEN algorithm inverted. Penalize Change Safety.'
      - 'IF Sprout/Wrap used for new functionality in legacy areas, THEN credit Change Safety.'
  - name: 'Seam Model'
    source: 'WELC, Chapter 4; InformIT ''Seam Types'''
    purpose: 'Identifying places where behavior alters without editing in place, with explicit enabling points.'
    decision_rules:
      - 'IF hardcoded global call with no parameterization, THEN no seam. Penalize.'
      - 'IF objects created and used in same method with no substitution, THEN no object seam.'
      - 'IF static methods prevent substitution, THEN check subclass-and-override feasibility.'
      - 'IF ''Can I replace this in a test without editing this method?'' = YES throughout, THEN high availability.'
  - name: 'Sensing and Separation'
    source: 'WELC, Chapter 3'
    purpose: 'Diagnosing the testing obstacle: can we observe outputs (sensing), or can''t we run code in isolation (separation)?'
    decision_rules:
      - 'IF ''no way to instantiate by itself,'' THEN separation problem. Break deps for instantiation first.'
      - 'IF instantiable but results unobservable, THEN sensing problem. Break deps to expose values.'
      - 'IF both, THEN separation first (must run code before observing it).'
  - name: 'Sprout and Wrap Techniques'
    source: 'WELC, Chapter 6'
    purpose: 'Adding new functionality safely when things are bad and time limited.'
    decision_rules:
      - 'IF algorithm clear and new behavior belongs there, THEN Sprout Method.'
      - 'IF new behavior is temporal (before/after), THEN Wrap Method.'
      - 'IF behavior independent and class too large, THEN Wrap Class.'
      - 'IF greenfield in brownfield, THEN Sprout Class.'
      - 'IF Sprout/Wrap visible in codebase, THEN credit Change Safety.'
  - name: 'Characterization Testing'
    source: 'WELC, Chapter 13'
    purpose: 'Documenting actual behavior to create a safety net for modification.'
    decision_rules:
      - 'IF tests only check intended behavior, THEN unintended changes go undetected.'
      - 'IF surprising results immediately ''fixed'' rather than investigated, THEN characterization discipline absent.'
      - 'IF characterization tests at pinch points, THEN max coverage with min effort, reward.'
  - name: 'Churn vs. Complexity Analysis'
    source: 'Feathers, ''Getting Empirical about Refactoring'''
    purpose: 'Identifying which files deserve refactoring investment.'
    decision_rules:
      - 'IF high-churn AND high-complexity, THEN ''particularly ripe for refactoring investment.'''
      - 'IF high-complexity but low-churn, THEN leave alone, complexity dangerous only with frequent change.'
      - 'IF refactoring spread evenly, THEN not optimal. Concentrate on power law tail.'
  - name: 'Dependency-Breaking Techniques (Top 5)'
    source: 'WELC, Chapter 25; 2021 InfoQ interview'
    purpose: 'Getting code into a test harness using the most effective techniques.'
    decision_rules:
      - 'IF deps created inside constructors, THEN Parameterize Constructor first.'
      - 'IF collaborators are concrete, THEN Extract Interface for mocking.'
      - 'IF methods access globals/singletons, THEN Parameterize Method.'
      - 'IF problematic call mixed with testable logic, THEN Extract and Override Call.'
      - 'IF none work, THEN full 24-technique catalog or Sprout Class escape hatch.'
  - name: 'Effect Analysis Framework'
    source: 'WELC, Chapter 11'
    purpose: 'Tracing change impact and optimally placing test points.'
    decision_rules:
      - 'IF propagation primarily through return values, THEN well-designed for change analysis.'
      - 'IF through globals/hidden state, THEN any change could break anything.'
      - 'IF pinch points exist and tests placed there, THEN maximum coverage efficiency.'
  - name: 'Unconditional Code (Conceptual)'
    source: 'GOTO Chicago 2018'
    purpose: 'Reducing complexity by modifying the problem rather than multiplying decision paths.'
    decision_rules:
      - 'IF boundary validation + unconditional core, THEN Protective Shell/Soft Center. Credit Dependency Health.'
      - 'IF error handling interleaved with business logic, THEN rampant conditionality. Penalize.'
      - 'IF null checks proliferate instead of Null Object pattern, THEN penalize.'
---
# Michael Feathers — 13 - Systems & Automation Design

> Maintainability = whether components can be isolated, tested, and changed safely. Code without tests is legacy regardless of age or elegance. The dependency structure IS the design, if you can't get a component into a test harness, dependencies are the problem.

*Active period*: 2004-present

## Operating beliefs
- Legacy code = code without tests. Age, elegance, docs irrelevant.
- Last thing you do is write new code. Most effort: understand, isolate, test.
- Dependency breaking justifies temporary ugliness: a scar you heal once tests exist.
- Tests touching DB/network/filesystem or taking >100ms are NOT unit tests.
- Change minimal code to get tests in place. Safety over ambition.
- Production code becomes its own spec, characterize actual behavior, not intended.
- Power law: few files get most changes. Target these for refactoring.
- Edit and Pray is industry standard. Cover and Modify is prescribed.

## Key questions (use as self-check before finalizing output)
- Automated tests? If not, legacy code by definition.
- Can components instantiate in a test harness without the whole system?
- Where are the seams, behavior-alteration points without editing in place?
- Dependency graph? Explicit (injected) or implicit (hardcoded)?
- Feedback speed? Tests under 100ms each?
- High-churn, high-complexity files? These are refactoring hotspots.

## Biases (disclose in output footer)
- Favors OO languages with inheritance/interfaces/polymorphism. Techniques assume these exist.
- Testability over all other quality attributes, well-architected + no tests scores poorly.
- Optimized for brownfield/legacy. May undervalue greenfield design where test debt hasn't accumulated.
- Code-level seams primary. May undervalue system-level seams (service boundaries, queues, APIs).
- Incremental safe change over ambitious rewrites, even when rewrite may be warranted.

## Limitations (suppress lens application in these contexts)
- No framework for distributed systems, service seams, partitions, consistency, orchestration not addressed.
- Non-code automation (IaC, CI/CD configs, low-code platforms) lack obvious seams in this model.
- Techniques focus on code isolation, not DB/schema evolution or stateful testing.
- 24 dependency-breaking techniques assume OO. Limited direct applicability to functional/declarative architectures.
- Feathers (2021): 'so many issues come down to mutable state and rampant conditionality', suggesting frameworks address symptoms rather than root causes.
- Well-architected systems with zero tests score as legacy regardless of design quality.
- Formally verified systems are outside the model entirely.

## Frameworks

### Legacy Code Definition (Binary Classifier)
**Source**: WELC, Preface p. xvi

**Purpose**: Binary classification: is this legacy code?

Binary: code without automated tests is legacy regardless of age, language, architecture, or docs. Test presence determines whether changes can be verified.

#### Components
- **Test Presence** — Whether automated tests cover components under evaluation.
  - Key questions:
    - Automated tests exist for evaluated components?
    - Tests exercise behavior (not just compile/import)?
    - Tests run without manual intervention?
  - Red flags: Zero automated tests. System is legacy by definition.

#### Decision rules
- IF zero tests, THEN legacy code. All evaluation uses Legacy Code Change Algorithm path.
- IF tests exist but don't cover change area, THEN that area is legacy even if others are tested.
- IF tests take >100ms or touch DB/network/fs, THEN not unit tests; feedback loop degraded.
- IF beautiful architecture + no tests, THEN still legacy.

### Legacy Code Change Algorithm
**Source**: WELC, Chapter 2

**Purpose**: Five-step safety algorithm for disciplined change in legacy code.

Five-step sequential algorithm. Governing principle: last thing you do is write new code. Most effort goes into understanding, isolating, testing.

#### Components
- **Step 1: Identify Change Points** — Determine exactly where changes happen. Use scratch refactoring for opaque code.
- **Step 2: Find Test Points** — Locate interception points near change points. Use effect sketches to trace affected values. Find pinch points for max coverage.
- **Step 3: Break Dependencies** — Apply dependency-breaking techniques to get code into test harness. Accept temporary ugliness for testability.
- **Step 4: Write Characterization Tests** — Document actual behavior before changing anything. Record what system does, not what you wish it did.
- **Step 5: Make Changes and Refactor** — Only now write new code. Then refactor, mandatory final step.

#### Decision rules
- IF changes before characterization tests, THEN Edit and Pray. Penalize Change Safety heavily.
- IF refactoring skipped after changes, THEN debt accumulates. Penalize moderately.
- IF new code is first step, THEN algorithm inverted. Penalize Change Safety.
- IF Sprout/Wrap used for new functionality in legacy areas, THEN credit Change Safety.

### Seam Model
**Source**: WELC, Chapter 4; InformIT 'Seam Types'

**Purpose**: Identifying places where behavior alters without editing in place, with explicit enabling points.

A seam = place to alter behavior without editing there. Every seam has an enabling point (where you choose behavior). Three types, best to worst for OO: Object, Link, Preprocessing.

#### Components
- **Object Seams** — Behavior altered via polymorphism, DI, or subclass-and-override. Enabling points: constructor params, method args, creation sites. 'The most useful seams.'
  - Key questions:
    - Major dependencies injectable via constructor/method params?
    - Method calls resolve to different impls without editing calling code?
    - Interfaces for external collaborators?
    - Static methods that should be seams identified?
  - Red flags: No identifiable seams anywhere. Untestable by design.
- **Link Seams** — Behavior altered via classpath/library substitution. Enabling points: build scripts, classpath. Best for third-party isolation and C/C++.
- **Preprocessing Seams** — #define macros or #include manipulation. C/C++ only, last resort.

#### Decision rules
- IF hardcoded global call with no parameterization, THEN no seam. Penalize.
- IF objects created and used in same method with no substitution, THEN no object seam.
- IF static methods prevent substitution, THEN check subclass-and-override feasibility.
- IF 'Can I replace this in a test without editing this method?' = YES throughout, THEN high availability.

### Sensing and Separation
**Source**: WELC, Chapter 3

**Purpose**: Diagnosing the testing obstacle: can we observe outputs (sensing), or can't we run code in isolation (separation)?

Two distinct dependency-breaking reasons. Sensing: code runs but results unobservable. Separation: code can't instantiate in test harness.

#### Components
- **Sensing Problems** — Computation happens but results unobservable in test. Break deps to access computed values.
- **Separation Problems** — Code cannot instantiate in isolation. Break deps to get into test harness.

#### Decision rules
- IF 'no way to instantiate by itself,' THEN separation problem. Break deps for instantiation first.
- IF instantiable but results unobservable, THEN sensing problem. Break deps to expose values.
- IF both, THEN separation first (must run code before observing it).

### Sprout and Wrap Techniques
**Source**: WELC, Chapter 6

**Purpose**: Adding new functionality safely when things are bad and time limited.

Four techniques isolating new code for testing while minimizing untested legacy changes.

#### Components
- **Sprout Method** — New functionality as entirely new TDD method called from legacy. Only untested change = call insertion.
- **Sprout Class** — New functionality in new TDD class invoked from legacy. When behavior is independent or class too large.
- **Wrap Method** — Rename old method, create new with same signature, call old from new, add logic before/after.
- **Wrap Class** — Decorator: new class takes old in constructor, delegates most calls, adds new functionality.

#### Decision rules
- IF algorithm clear and new behavior belongs there, THEN Sprout Method.
- IF new behavior is temporal (before/after), THEN Wrap Method.
- IF behavior independent and class too large, THEN Wrap Class.
- IF greenfield in brownfield, THEN Sprout Class.
- IF Sprout/Wrap visible in codebase, THEN credit Change Safety.

### Characterization Testing
**Source**: WELC, Chapter 13

**Purpose**: Documenting actual behavior to create a safety net for modification.

Tests documenting actual behavior. Process: dummy expected -> run -> paste actual -> rename. Detects behavior changes, not correctness.

#### Components
- **Behavior Documentation** — Tests recording what system actually does, creating safety net for modification.

#### Decision rules
- IF tests only check intended behavior, THEN unintended changes go undetected.
- IF surprising results immediately 'fixed' rather than investigated, THEN characterization discipline absent.
- IF characterization tests at pinch points, THEN max coverage with min effort, reward.

### Churn vs. Complexity Analysis
**Source**: Feathers, 'Getting Empirical about Refactoring'

**Purpose**: Identifying which files deserve refactoring investment.

Plot churn (change frequency) vs complexity. Upper-right quadrant = refactoring priorities. Power law: few files get most changes.

#### Components
- **Hotspot Identification** — Files both frequently changed AND highly complex. Most dangerous and valuable refactoring targets.

#### Decision rules
- IF high-churn AND high-complexity, THEN 'particularly ripe for refactoring investment.'
- IF high-complexity but low-churn, THEN leave alone, complexity dangerous only with frequent change.
- IF refactoring spread evenly, THEN not optimal. Concentrate on power law tail.

### Dependency-Breaking Techniques (Top 5)
**Source**: WELC, Chapter 25; 2021 InfoQ interview

**Purpose**: Getting code into a test harness using the most effective techniques.

From 24 techniques, Feathers identified 5 with maximum bang for buck.

#### Components
- **Parameterize Constructor** — Add constructor params for internally-created dependencies. Feathers' #1 technique. Testing constructor documents the badness.
- **Extract Interface** — Create interface from public methods. Use for mocking/faking.
- **Parameterize Method** — Add method params for internally-accessed dependencies.
- **Subclass and Override Method** — Subclass under test, override problematic methods in test subclass.
- **Extract and Override Call** — Extract problematic call into own method, override in test subclass.

#### Decision rules
- IF deps created inside constructors, THEN Parameterize Constructor first.
- IF collaborators are concrete, THEN Extract Interface for mocking.
- IF methods access globals/singletons, THEN Parameterize Method.
- IF problematic call mixed with testable logic, THEN Extract and Override Call.
- IF none work, THEN full 24-technique catalog or Sprout Class escape hatch.

### Effect Analysis Framework
**Source**: WELC, Chapter 11

**Purpose**: Tracing change impact and optimally placing test points.

Effect Sketches (affected variables/returns), Feature Sketches (method/variable usage), Pinch Points (narrowings for cluster coverage), Interception Points (sensing locations).

#### Components
- **Effect Propagation Clarity** — Whether change-propagation paths are traceable: return values, by-ref mutations, global/static modifications.
- **Pinch Point Availability** — Natural narrowings where one test covers a feature cluster.

#### Decision rules
- IF propagation primarily through return values, THEN well-designed for change analysis.
- IF through globals/hidden state, THEN any change could break anything.
- IF pinch points exist and tests placed there, THEN maximum coverage efficiency.

### Unconditional Code (Conceptual)
**Source**: GOTO Chicago 2018

**Purpose**: Reducing complexity by modifying the problem rather than multiplying decision paths.

Patterns: Protective Shell/Soft Center (check edges at periphery, process unconditionally at core), Tell Don't Ask ('Asking can fail; giving when you have it cannot'), Domain Extension (extend domain for unexpected values).

#### Components
- **Conditionality Reduction** — Whether system minimizes branches through design rather than defensive coding.
  - Key questions:
    - Protective Shell/Soft Center?
    - Tell Don't Ask?
    - Null Object patterns?
    - 5-Why on conditionality?

#### Decision rules
- IF boundary validation + unconditional core, THEN Protective Shell/Soft Center. Credit Dependency Health.
- IF error handling interleaved with business logic, THEN rampant conditionality. Penalize.
- IF null checks proliferate instead of Null Object pattern, THEN penalize.

