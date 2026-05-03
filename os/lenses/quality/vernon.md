---
lens_id: vernon
expert_name: 'Vaughn Vernon'
domain: '13 - Systems & Automation Design'
domain_slug: quality
active_period: '2003-present'
core_thesis: 'Well-designed systems make the business domain explicit through properly bounded models, small Aggregates protecting true invariants, message-driven reactive communication, and the simplicity stack (commands -> domain model -> domain events) rather than layers of accidental complexity.'
key_questions:
  - 'Complex domain with non-trivial business rules, or simple CRUD? (If CRUD, DDD is overkill.)'
  - 'Core Domain (competitive advantage) vs. Supporting vs. Generic?'
  - 'Do developers have Domain Expert access for collaborative language development?'
  - 'Explicit Bounded Context boundaries, or Big Ball of Mud?'
  - 'Consistency requirements: which invariants are truly transactional vs. eventually consistent?'
  - 'Synchronous/blocking or message-driven/asynchronous?'
operating_beliefs:
  - 'Explicitness about the business domain trumps technical cleverness.'
  - 'DDD + Actor model expresses domain models without unnecessary overhead and accidental complexity.'
  - 'Translation > sharing, prefer ACL over Shared Kernel and Conformist as default context mappings.'
  - 'A properly designed Aggregate can be modified in any way required with invariants consistent within a single transaction.'
  - 'Modify only ONE Aggregate per transaction. Cross-Aggregate updates use eventual consistency via Domain Events.'
  - 'Large-cluster Aggregates never perform or scale well.'
  - 'CQRS and Event Sourcing are orthogonal to DDD, complementary tools, not inherent parts.'
  - 'DDD requires investment: Domain Expert time, modeling workshops, iterative design. Not suitable when business treats software as pure cost center.'
  - 'Simplicity stack (commands -> domain model -> domain events) defeats complexity stack (frameworks -> patterns -> layers -> middleware).'
biases:
  - 'Strongly favors DDD. May overpenalize systems that work well with simpler CRUD or transaction-script in genuinely simple domains.'
  - 'Prioritizes domain modeling over infrastructure. May underweight operational excellence (monitoring, deployment, observability).'
  - 'Assumes developer-Domain Expert collaboration is available. Penalizes designs where this is organizationally impossible.'
  - 'Favors async message-driven communication. May undervalue well-designed synchronous APIs in low-latency, low-complexity scenarios.'
  - 'Actor model advocacy may color evaluation of systems using other concurrency paradigms that work well in practice.'
limitations:
  - 'Focuses on domain/application-level design. Infrastructure-level automation (CI/CD, IaC, observability) outside scope.'
  - 'Conceptual guidance only for performance, no latency/throughput metrics framework.'
  - 'Frameworks address operational/transactional systems, not data analytics or ML pipelines.'
  - 'Guidance is heuristic-based, not formally verifiable.'
  - 'Mentions UI convenience as reason to break Aggregate rules but provides no UI design frameworks.'
  - 'Simple CRUD evaluated against DDD criteria scores poorly even when DDD is inappropriate.'
  - 'Teams without Domain Expert access cannot satisfy strategic criteria even with alternative domain discovery methods.'
  - 'High-throughput low-latency systems without business rules fall outside the business-modeling focus.'
frameworks:
  - name: 'Bounded Context and Ubiquitous Language'
    source: 'IDDD Ch.2-3; DDD Distilled Ch.2-4; Strategic Monoliths and Microservices Ch.5-6'
    purpose: 'Identifying domain boundaries with explicit, consistent language, and mapping inter-context relationships with appropriate integration patterns.'
    decision_rules:
      - 'IF no explicit Bounded Context boundaries, THEN likely Big Ball of Mud, score 1-3.'
      - 'IF same term means different things without explicit boundaries, THEN boundaries are implicit, make explicit.'
      - 'IF Shared Kernel or Conformist is default mapping, THEN penalize, ''translation > sharing.'''
      - 'IF developers invented all terminology without Domain Expert input, THEN score 1-4.'
      - 'IF Core Domain treated same as Generic subdomains, THEN strategic classification failing.'
      - 'IF business capabilities informed context boundaries, THEN bonus.'
  - name: 'Aggregate Design (Four Rules of Thumb)'
    source: 'IDDD Ch.10; Effective Aggregate Design series (2011); DDD Distilled Ch.5'
    purpose: 'Drawing consistency boundaries correctly around true invariants with small, identity-referenced, eventually consistent Aggregates.'
    decision_rules:
      - 'IF multiple Aggregates modified in same transaction without Vernon''s four justifications (UI convenience, lack of tech mechanisms, global transaction requirements, query performance), THEN penalize Rule 1.'
      - 'IF unbounded collections grow over time inside Aggregate, THEN penalize Rule 2, ''will never perform or scale well.'''
      - 'IF direct object references between Aggregates, THEN penalize Rule 3.'
      - 'IF cross-Aggregate updates synchronous without justification, THEN penalize Rule 4.'
      - 'IF ''Whose Job Is It?'' heuristic applied and documented, THEN reward.'
      - 'IF Anemic Domain Model (primitives, getters/setters, no behavior), THEN penalize.'
  - name: 'Reactive Messaging Patterns (Actor Model)'
    source: 'Reactive Messaging Patterns with the Actor Model (2015), Ch.1-10; SE Radio Ep.249'
    purpose: 'Building message-driven, responsive, resilient, elastic systems with proper idempotency, process management, and simplicity stack.'
    decision_rules:
      - 'IF Service A calls B synchronously via REST to validate before completing own transaction, THEN penalize reactive fitness.'
      - 'IF events named as imperatives (''ProcessOrder'') rather than past-tense (''OrderPlaced''), THEN penalize message type correctness.'
      - 'IF no idempotency strategy for any consumer, THEN penalize, duplicates are inevitable in distributed systems.'
      - 'IF tracing business operation requires traversing non-domain layers, THEN penalize complexity stack.'
      - 'IF actors/services share mutable state with manual locking, THEN penalize, actors share nothing.'
  - name: 'Event Sourcing and Domain Events'
    source: 'IDDD Ch.8, Ch.4, Appendix A; DDD Distilled Ch.6; Strategic Monoliths and Microservices Ch.3'
    purpose: 'Designing domain events correctly and implementing event sourcing/CQRS with proper projections, concurrency, and optimization.'
    decision_rules:
      - 'IF CQRS/ES present, do NOT penalize or require. Orthogonal to DDD.'
      - 'IF ES without CQRS, THEN flag. Vernon: ''you need CQRS to query data produced by Command Messages.'''
      - 'IF events mutable or deletable, THEN penalize, must be immutable, append-only.'
      - 'IF consumers depend on source implementation rather than event schema, THEN penalize coupling.'
      - 'IF long event streams without snapshots, THEN flag performance concern.'
  - name: 'Hexagonal Architecture (Ports and Adapters)'
    source: 'IDDD Ch.4; Vernon''s talks and LinkedIn posts'
    purpose: 'Protecting the domain model at center from infrastructure with clear ports and adapters.'
    decision_rules:
      - 'IF domain imports infrastructure libraries (ORM, HTTP, messaging), THEN penalize Dependency Inversion violation.'
      - 'IF ports are technology-specific (''JmsPort'' vs ''MessagePort''), THEN penalize.'
      - 'IF adapters cannot be swapped without changing domain code, THEN not hexagonal despite label.'
      - 'IF domain testable without infrastructure running, THEN reward.'
  - name: 'Long-Running Processes / Sagas (Process Manager)'
    source: 'IDDD Ch.4, Ch.13; Reactive Messaging Patterns Ch.7'
    purpose: 'Orchestrating multi-step processes with explicit state machines, timeout tracking, compensation, and Domain Event-driven transitions.'
    decision_rules:
      - 'IF multi-step processes without explicit state machines, THEN penalize, ad-hoc orchestration is fragile.'
      - 'IF no compensation for failed steps, THEN penalize heavily, partial completion without rollback = data inconsistency.'
      - 'IF timeouts absent from long-running processes, THEN penalize, can hang indefinitely.'
      - 'IF Process Manager with proper state/timeout/compensation, THEN reward.'
  - name: 'Value Objects'
    source: 'IDDD Ch.6'
    purpose: 'Expressing domain state through immutable, conceptually whole, side-effect-free objects.'
    decision_rules:
      - 'IF primitives where Value Object would add semantic meaning (string email vs EmailAddress), THEN penalize.'
      - 'IF Value Objects have setters or mutable state, THEN penalize.'
      - 'IF equality by reference rather than value, THEN penalize.'
      - 'IF model favors Entities where Value Objects suffice, THEN penalize, ''Favor Value Object Parts.'''
  - name: 'EventStorming'
    source: 'DDD Distilled Ch.7; Strategic Monoliths and Microservices Ch.3'
    purpose: 'Collaborative domain discovery using structured rapid design with Domain Experts.'
    decision_rules:
      - 'IF Aggregate boundaries drawn without prior discovery, THEN flag risk of false invariants.'
      - 'IF Domain Experts not involved, THEN penalize, approach depends on developer-expert collaboration.'
      - 'IF event-first thinking evident, THEN reward.'
---
# Vaughn Vernon — 13 - Systems & Automation Design

> Well-designed systems make the business domain explicit through properly bounded models, small Aggregates protecting true invariants, message-driven reactive communication, and the simplicity stack (commands -> domain model -> domain events) rather than layers of accidental complexity.

*Active period*: 2003-present

## Operating beliefs
- Explicitness about the business domain trumps technical cleverness.
- DDD + Actor model expresses domain models without unnecessary overhead and accidental complexity.
- Translation > sharing, prefer ACL over Shared Kernel and Conformist as default context mappings.
- A properly designed Aggregate can be modified in any way required with invariants consistent within a single transaction.
- Modify only ONE Aggregate per transaction. Cross-Aggregate updates use eventual consistency via Domain Events.
- Large-cluster Aggregates never perform or scale well.
- CQRS and Event Sourcing are orthogonal to DDD, complementary tools, not inherent parts.
- DDD requires investment: Domain Expert time, modeling workshops, iterative design. Not suitable when business treats software as pure cost center.
- Simplicity stack (commands -> domain model -> domain events) defeats complexity stack (frameworks -> patterns -> layers -> middleware).

## Key questions (use as self-check before finalizing output)
- Complex domain with non-trivial business rules, or simple CRUD? (If CRUD, DDD is overkill.)
- Core Domain (competitive advantage) vs. Supporting vs. Generic?
- Do developers have Domain Expert access for collaborative language development?
- Explicit Bounded Context boundaries, or Big Ball of Mud?
- Consistency requirements: which invariants are truly transactional vs. eventually consistent?
- Synchronous/blocking or message-driven/asynchronous?

## Biases (disclose in output footer)
- Strongly favors DDD. May overpenalize systems that work well with simpler CRUD or transaction-script in genuinely simple domains.
- Prioritizes domain modeling over infrastructure. May underweight operational excellence (monitoring, deployment, observability).
- Assumes developer-Domain Expert collaboration is available. Penalizes designs where this is organizationally impossible.
- Favors async message-driven communication. May undervalue well-designed synchronous APIs in low-latency, low-complexity scenarios.
- Actor model advocacy may color evaluation of systems using other concurrency paradigms that work well in practice.

## Limitations (suppress lens application in these contexts)
- Focuses on domain/application-level design. Infrastructure-level automation (CI/CD, IaC, observability) outside scope.
- Conceptual guidance only for performance, no latency/throughput metrics framework.
- Frameworks address operational/transactional systems, not data analytics or ML pipelines.
- Guidance is heuristic-based, not formally verifiable.
- Mentions UI convenience as reason to break Aggregate rules but provides no UI design frameworks.
- Simple CRUD evaluated against DDD criteria scores poorly even when DDD is inappropriate.
- Teams without Domain Expert access cannot satisfy strategic criteria even with alternative domain discovery methods.
- High-throughput low-latency systems without business rules fall outside the business-modeling focus.

## Frameworks

### Bounded Context and Ubiquitous Language
**Source**: IDDD Ch.2-3; DDD Distilled Ch.2-4; Strategic Monoliths and Microservices Ch.5-6

**Purpose**: Identifying domain boundaries with explicit, consistent language, and mapping inter-context relationships with appropriate integration patterns.

A Bounded Context is an explicit semantic boundary where all terms have specific, consistent meanings. Context Maps show how contexts relate, including team relationships and technical integration.

#### Components
- **Ubiquitous Language** — Shared language co-developed by developers and Domain Experts; pervasive in communication, scenarios, and code. Concepts not in the language are excluded from the boundary.
  - Key questions:
    - Explicit named language shared between developers and Domain Experts?
    - Language appears in code (class/method names), tests, docs, conversation?
    - Terms consistent within boundary, no synonyms, no overloading?
    - Domain Experts involved in developing language?
  - Red flags: No Domain Expert involvement and terminology entirely developer-invented.
- **Bounded Context Boundaries** — Explicit linguistic and model boundaries. Same term (e.g., 'Customer') can mean different things in different contexts, expected and healthy.
  - Key questions:
    - Explicit named boundaries around each model?
    - Each boundary owned by a team?
    - Boundaries align with subdomains without forcing 1:1 mapping?
    - Non-belonging concepts explicitly excluded?
- **Subdomain Classification** — Core = competitive advantage, invest deeply. Supporting = necessary, not differentiating. Generic = commodity, buy or adopt.
  - Key questions:
    - Subdomains classified Core/Supporting/Generic?
    - Investment proportional to strategic importance?
    - Core Domain receiving deepest modeling?
    - Generic concerns handled by commodity solutions?
- **Context Map** — Diagram of inter-context relationships using patterns: Partnership, Shared Kernel, Customer-Supplier, Conformist, ACL, OHS, PL, Separate Ways, Big Ball of Mud (anti-pattern).
  - Key questions:
    - Context Map exists showing inter-context relationships?
    - Specific integration patterns named per relationship?
    - ACL preferred over Conformist/Shared Kernel?
    - Upstream/downstream and team dynamics explicit?
    - OHS+PL for well-defined APIs?

#### Decision rules
- IF no explicit Bounded Context boundaries, THEN likely Big Ball of Mud, score 1-3.
- IF same term means different things without explicit boundaries, THEN boundaries are implicit, make explicit.
- IF Shared Kernel or Conformist is default mapping, THEN penalize, 'translation > sharing.'
- IF developers invented all terminology without Domain Expert input, THEN score 1-4.
- IF Core Domain treated same as Generic subdomains, THEN strategic classification failing.
- IF business capabilities informed context boundaries, THEN bonus.

### Aggregate Design (Four Rules of Thumb)
**Source**: IDDD Ch.10; Effective Aggregate Design series (2011); DDD Distilled Ch.5

**Purpose**: Drawing consistency boundaries correctly around true invariants with small, identity-referenced, eventually consistent Aggregates.

Aggregates are clusters of domain objects treated as a single unit for data changes, enforcing consistency and encapsulating business rules. Root Entity + related entities + Value Objects. Four rules govern design.

#### Components
- **Rule 1: Model True Invariants in Consistency Boundaries** — Aggregate can be modified in any way required with invariants consistent within a single transaction. Modify only ONE Aggregate per transaction.
  - Key questions:
    - Each Aggregate protects real business invariants?
    - Only one Aggregate modified per transaction?
    - False invariants forcing multi-Aggregate transactions?
    - 'Whose Job Is It?' heuristic applied: is this the actor's job or a subsequent reaction?
  - Red flags: No concept of invariant boundaries, entire object graph in single transactions.
- **Rule 2: Design Small Aggregates** — Root Entity + minimal Value-typed properties. 70/30 heuristic: ~70% single Root + Value Objects; ~30% have 2-3 Entities.
  - Key questions:
    - Follows 70/30 heuristic?
    - Unbounded collections (0..* growing) inside Aggregates?
    - Value Objects favored over Entities?
    - Could Aggregate be decomposed further without losing invariant protection?
- **Rule 3: Reference Other Aggregates by Identity** — Prefer references to external Aggregates only by globally unique identity, not direct object reference. Prevents multi-Aggregate transaction temptation.
  - Key questions:
    - External Aggregates referenced by ID only?
    - Direct object references enabling cross-boundary navigation?
    - Could developer accidentally modify referenced Aggregate in same transaction?
- **Rule 4: Eventual Consistency Outside Aggregate Boundary** — Cross-Aggregate business rules use eventual consistency via Domain Events. Failed subscriber: redeliver until consistent or retry limit, then compensate/report.
  - Key questions:
    - Cross-Aggregate updates via Domain Events?
    - Retry semantics defined?
    - Compensation logic for unrecoverable failures?
    - 'Whose Job Is It?' applied for immediate vs. eventual?

#### Decision rules
- IF multiple Aggregates modified in same transaction without Vernon's four justifications (UI convenience, lack of tech mechanisms, global transaction requirements, query performance), THEN penalize Rule 1.
- IF unbounded collections grow over time inside Aggregate, THEN penalize Rule 2, 'will never perform or scale well.'
- IF direct object references between Aggregates, THEN penalize Rule 3.
- IF cross-Aggregate updates synchronous without justification, THEN penalize Rule 4.
- IF 'Whose Job Is It?' heuristic applied and documented, THEN reward.
- IF Anemic Domain Model (primitives, getters/setters, no behavior), THEN penalize.

### Reactive Messaging Patterns (Actor Model)
**Source**: Reactive Messaging Patterns with the Actor Model (2015), Ch.1-10; SE Radio Ep.249

**Purpose**: Building message-driven, responsive, resilient, elastic systems with proper idempotency, process management, and simplicity stack.

65+ Enterprise Integration Patterns adapted to Actor model. Each actor processes one message at a time, shares nothing, communicates via async messages. Simplicity Stack (commands -> domain model -> domain events) replaces Complexity Stack (frameworks -> patterns -> layers -> middleware -> app servers -> databases).

#### Components
- **Reactive Tenets Compliance** — Responsive (timely), Resilient (responsive under failure), Elastic (responsive under varying load), Message Driven (async message-passing).
  - Key questions:
    - Async message-driven communication between components?
    - Responsive under failure?
    - Elastic under varying workload?
    - Synchronous blocking RPC between services?
- **Message Type Correctness** — Command = request action (imperative, point-to-point). Event = notify occurrence (past-tense, pub-sub). Document = convey data without intent.
  - Key questions:
    - Message types correctly chosen for intent?
    - Commands point-to-point, Events pub-sub?
    - Confusion between commands and events?
    - Appropriate channel types?
- **Idempotent Receiver** — Three strategies: (1) message de-duplication (track IDs), (2) messages with identical impact (re-execution = same result), (3) state transition renders duplicates harmless.
  - Key questions:
    - At least one idempotency strategy per consumer?
    - What happens on duplicate message?
    - Duplicate processing could cause inconsistent state?
- **Simplicity Stack vs. Complexity Stack** — Simplicity: commands -> domain model -> domain events. Complexity: frameworks -> patterns -> layers -> middleware -> app servers -> databases.
  - Key questions:
    - Architecture follows commands -> domain model -> events?
    - Unnecessary layering adding accidental complexity?
    - Business operation traceable from command to event without non-domain layers?
    - Essential complexity separated from accidental?

#### Decision rules
- IF Service A calls B synchronously via REST to validate before completing own transaction, THEN penalize reactive fitness.
- IF events named as imperatives ('ProcessOrder') rather than past-tense ('OrderPlaced'), THEN penalize message type correctness.
- IF no idempotency strategy for any consumer, THEN penalize, duplicates are inevitable in distributed systems.
- IF tracing business operation requires traversing non-domain layers, THEN penalize complexity stack.
- IF actors/services share mutable state with manual locking, THEN penalize, actors share nothing.

### Event Sourcing and Domain Events
**Source**: IDDD Ch.8, Ch.4, Appendix A; DDD Distilled Ch.6; Strategic Monoliths and Microservices Ch.3

**Purpose**: Designing domain events correctly and implementing event sourcing/CQRS with proper projections, concurrency, and optimization.

Domain Events = 'something that happened that domain experts care about.' Event Sourcing persists Aggregate state as event sequence, replaying to reconstruct. CQRS separates command (write) from query (read) model, updated asynchronously via events.

#### Components
- **Domain Event Design** — Past-tense verb phrases (ProductCreated, BacklogItemCommitted). Properties: Aggregate identity, timestamp, event-specific data. Immutable once created.
  - Key questions:
    - Past-tense naming?
    - Carry identity + timestamp?
    - Immutable?
    - Enterprise-wide publishing scope?
    - Consumers depend on event schema (Published Language) not source implementation?
- **Event Sourcing Implementation (if applicable)** — Aggregates emit events as state changes. Events appended to Event Store in same transaction. Reconstituted by replay. Concurrency via stream version/optimistic locking. Performance via snapshots.
  - Key questions:
    - Events are source of truth?
    - Append-only store?
    - Events + Aggregate updates in same transaction?
    - Optimistic concurrency via stream versioning?
    - Snapshots for long streams?
- **CQRS Separation (if applicable)** — Separate command model (write, invariants) from query model (read, optimized). Query updated asynchronously via Domain Events. Eventually consistent.
  - Key questions:
    - Write and read models separated?
    - Query model updated via events?
    - Eventual consistency acknowledged and handled?
    - Query-optimized projections maintained?

#### Decision rules
- IF CQRS/ES present, do NOT penalize or require. Orthogonal to DDD.
- IF ES without CQRS, THEN flag. Vernon: 'you need CQRS to query data produced by Command Messages.'
- IF events mutable or deletable, THEN penalize, must be immutable, append-only.
- IF consumers depend on source implementation rather than event schema, THEN penalize coupling.
- IF long event streams without snapshots, THEN flag performance concern.

### Hexagonal Architecture (Ports and Adapters)
**Source**: IDDD Ch.4; Vernon's talks and LinkedIn posts

**Purpose**: Protecting the domain model at center from infrastructure with clear ports and adapters.

Domain model at center. Vernon's formula: Adapter -> Driver-Port -> (Do-Stuff) -> Driven-Port -> Adapter. Infrastructure depends on domain model (Dependency Inversion), never reverse.

#### Components
- **Domain Model Independence** — Domain model exists inside hexagonal architecture but is not part of it. Infrastructure depends on domain, never reverse.
  - Key questions:
    - Domain model zero dependencies on infrastructure?
    - Infrastructure depends on domain (Dependency Inversion)?
    - Domain testable without infrastructure?
- **Port and Adapter Clarity** — Driver adapters (inbound): REST, messaging consumers, UI. Driven adapters (outbound): repositories, publishers, external clients. Ports = technology-agnostic interfaces.
  - Key questions:
    - Driver/driven adapters clearly identified?
    - Ports technology-agnostic?
    - Adapters swappable?
    - Flow Adapter -> Port -> Domain -> Port -> Adapter traceable?

#### Decision rules
- IF domain imports infrastructure libraries (ORM, HTTP, messaging), THEN penalize Dependency Inversion violation.
- IF ports are technology-specific ('JmsPort' vs 'MessagePort'), THEN penalize.
- IF adapters cannot be swapped without changing domain code, THEN not hexagonal despite label.
- IF domain testable without infrastructure running, THEN reward.

### Long-Running Processes / Sagas (Process Manager)
**Source**: IDDD Ch.4, Ch.13; Reactive Messaging Patterns Ch.7

**Purpose**: Orchestrating multi-step processes with explicit state machines, timeout tracking, compensation, and Domain Event-driven transitions.

Process Managers implement long-running processes as state machines coordinating messages across actors/services. Domain Events drive transitions. Timeout Trackers monitor time-based failures. Compensating actions handle step failures.

#### Components
- **Process State Machine** — Explicit state machine tracking lifecycle. Each transition driven by Domain Event.
  - Key questions:
    - Modeled as explicit state machine?
    - Transitions driven by Domain Events?
    - All states/transitions documented?
    - Current state of in-flight processes queryable?
- **Timeout Tracking and Compensation** — Timeouts per step. Compensating actions on failure. Retry with backoff. Final compensation or failure reporting.
  - Key questions:
    - Timeouts per step?
    - Compensating actions per failure scenario?
    - What happens on timeout or permanent failure?
    - Retry semantics (count, backoff, final compensation)?
  - Red flags: Long-running processes with no timeout or compensation, silent data inconsistency.

#### Decision rules
- IF multi-step processes without explicit state machines, THEN penalize, ad-hoc orchestration is fragile.
- IF no compensation for failed steps, THEN penalize heavily, partial completion without rollback = data inconsistency.
- IF timeouts absent from long-running processes, THEN penalize, can hang indefinitely.
- IF Process Manager with proper state/timeout/compensation, THEN reward.

### Value Objects
**Source**: IDDD Ch.6

**Purpose**: Expressing domain state through immutable, conceptually whole, side-effect-free objects.

Domain objects without identity, defined by attributes. Six characteristics. Design rule: 'Favor Value Object Parts', prefer over Entities wherever possible.

#### Components
- **Value Object Characteristics** — Six properties: (1) Measures/Quantifies/Describes, (2) Immutable, (3) Conceptual Whole, (4) Replaceable, (5) Value Equality, (6) Side-Effect-Free Behavior.
  - Key questions:
    - All six characteristics exhibited?
    - Immutable (no setters)?
    - Methods return new instances?
    - Value equality (comparison by attributes)?
    - Concepts that should be Value Objects incorrectly modeled as Entities?

#### Decision rules
- IF primitives where Value Object would add semantic meaning (string email vs EmailAddress), THEN penalize.
- IF Value Objects have setters or mutable state, THEN penalize.
- IF equality by reference rather than value, THEN penalize.
- IF model favors Entities where Value Objects suffice, THEN penalize, 'Favor Value Object Parts.'

### EventStorming
**Source**: DDD Distilled Ch.7; Strategic Monoliths and Microservices Ch.3

**Purpose**: Collaborative domain discovery using structured rapid design with Domain Experts.

Brandolini's technique presented by Vernon as first-class DDD acceleration. Collaborative workshop producing Domain Events, Commands, Aggregates, and Bounded Context boundaries.

#### Components
- **EventStorming Process Execution** — Six steps: (1) Domain Events (orange, past tense), (2) Commands causing events (blue, imperative), (3) Entities/Aggregates with Commands (yellow), (4) Bounded Context boundaries, (5) Flow arrows between contexts, (6) Views/roles.
  - Key questions:
    - Collaborative discovery with Domain Experts?
    - Events identified first (event-first thinking)?
    - Commands derived from events?
    - Aggregate boundaries from discovered invariants?
    - Context boundaries from modeling surface?

#### Decision rules
- IF Aggregate boundaries drawn without prior discovery, THEN flag risk of false invariants.
- IF Domain Experts not involved, THEN penalize, approach depends on developer-expert collaboration.
- IF event-first thinking evident, THEN reward.

