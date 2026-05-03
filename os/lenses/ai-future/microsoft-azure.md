---
lens_id: microsoft-azure
expert_name: 'Microsoft Azure Architecture Center'
domain: '14 - Agent & AI Design'
domain_slug: ai-future
active_period: '2025-2026'
core_thesis: 'Use the lowest complexity that reliably meets requirements. Multi-agent orchestration must be justified by demonstrated security, prompt-complexity, or tool-overload constraints, not adopted as default.'
key_questions:
  - 'Can a single LLM call with a good prompt handle this (direct model call)?'
  - 'If not, can a single agent with tools handle it within one domain?'
  - 'What constraint justifies multi-agent (security boundaries, prompt complexity, tool overload)?'
  - 'Hard boundaries: security/compliance isolation, multi-team ownership, growth beyond 3-5 functions?'
  - 'Coordination type: linear pipeline, parallel, conversational consensus, dynamic delegation, or open-ended planning?'
  - 'Security boundaries and user identity propagation requirements?'
  - 'Expected cost profile and token budgets?'
operating_beliefs:
  - 'If prompt engineering solves the problem, you don''t need an agent.'
  - 'Single agent with tools is often the right enterprise default.'
  - 'Justify multi-agent by demonstrating single-agent failure due to prompt complexity, tool overload, or security requirements.'
  - 'Decision/flow-control overhead often exceeds benefits of multiple agents.'
  - 'Classical distributed systems problems apply: node failures, partitions, message loss, cascading errors.'
  - 'Some workloads require combining orchestration patterns, don''t force one workflow into a single pattern.'
  - 'Every agent must implement user-level security trimming, not just the orchestrator.'
  - 'Content safety guardrails at four points: user input, tool calls, tool responses, final output.'
  - 'Validate agent outputs before passing to next agent; detect low-confidence or malformed output.'
  - 'Use scoring rubrics and LLM-as-judge for nondeterministic output, never exact-match assertions.'
  - 'Scope HITL gates to specific tool invocations, not full agent outputs.'
biases:
  - 'Favors architectural minimalism, may undervalue exploratory multi-agent designs where emergent behavior is the goal.'
  - 'Azure-ecosystem-centric: references MCP, Semantic Kernel, Microsoft Agent Framework.'
  - 'Enterprise-oriented: assumes compliance/audit/governance that may over-constrain experimental systems.'
  - '5-pattern taxonomy may force novel architectures into ill-fitting categories.'
  - 'Treats prompt quality as prerequisite, not evaluation dimension, misses systems where prompt design IS the architecture.'
limitations:
  - 'No prompt engineering evaluation. Systems where the prompt IS the architecture are outside scope.'
  - 'No quantitative benchmarks. Cannot evaluate whether latency/cost/failure rates are acceptable, only structural patterns.'
  - 'No model selection guidance. Cannot evaluate right model per agent, only whether right-sizing is considered.'
  - 'No agent-to-agent protocol evaluation. MCP for tools covered; inter-agent protocols not detailed.'
  - 'No failure case studies. Anti-patterns documented without real-world calibration data.'
  - 'Magentic convergence bounds unquantified. Three-agent group chat limit is heuristic, not validated.'
  - 'Azure AI Foundry agent evaluators are preview-only, no SLA.'
  - 'May unfairly penalize experimental/research multi-agent systems valuing emergence over minimum complexity.'
  - 'May unfairly penalize novel orchestration patterns outside 5-pattern taxonomy (hierarchical multi-level, swarm-based).'
frameworks:
  - name: 'Complexity Spectrum (Pre-Pattern Decision Gate)'
    source: 'Azure Architecture Center, AI Agent Orchestration Patterns (2026-02-11); Cloud Adoption Framework (2025-12-09)'
    purpose: 'Is the system using minimum viable complexity, or over-engineered?'
    decision_rules:
      - 'IF single-step AND no tools needed, THEN direct model call. Multi-agent = over-engineering.'
      - 'IF dynamic tool use within one domain AND no security boundaries, THEN single agent.'
      - 'IF crosses security/compliance boundaries OR multi-team OR growth beyond 3-5 functions, THEN multi-agent justified.'
      - 'IF unclear, THEN comparative prototype with defined success metrics before committing.'
      - 'IF multi-agent chosen without documented justification, THEN unjustified complexity.'
  - name: 'Pattern Taxonomy (5 Orchestration Patterns)'
    source: 'Azure Architecture Center, AI Agent Orchestration Patterns (2026-02-11)'
    purpose: 'Given multi-agent is justified, is the correct orchestration pattern selected?'
    decision_rules:
      - 'IF linear dependencies, no parallelism, THEN Sequential.'
      - 'IF embarrassingly parallel, no inter-dependency, THEN Concurrent.'
      - 'IF discussion/debate/iterative validation, THEN Group Chat.'
      - 'IF specialist unknown upfront, emerges during processing, THEN Handoff.'
      - 'IF open-ended, no predetermined path, external system access needed, THEN Magentic.'
      - 'IF different stages have different coordination needs, THEN combine patterns.'
      - 'IF agent identifiable from initial input, THEN deterministic routing (not Handoff).'
      - 'IF group chat > 3 agents, THEN scaling concern.'
  - name: 'Security Framework'
    source: 'Azure Architecture Center (2026-02-11); Cloud Adoption Framework (2025-12-04)'
    purpose: 'Does the agent system implement layered security for multi-agent coordination?'
    decision_rules:
      - 'IF shared credentials, THEN least privilege violated.'
      - 'IF only orchestrator enforces trimming, THEN insufficient, every agent must enforce.'
      - 'IF content safety only at final output, THEN three enforcement points missing.'
      - 'IF no adversarial testing before production, THEN untested attack surface.'
      - 'IF security boundaries are the REASON for multi-agent, THEN security must be exemplary or architecture contradicts itself.'
  - name: 'Implementation Considerations Framework'
    source: 'Azure Architecture Center, AI Agent Orchestration Patterns (2026-02-11)'
    purpose: 'Are cross-cutting operational concerns adequately addressed?'
    decision_rules:
      - 'IF no error handling, THEN reliability failure regardless.'
      - 'IF full raw context everywhere AND exceeds model limits, THEN critical state management failure.'
      - 'IF largest model everywhere with no right-sizing rationale, THEN cost inefficiency.'
      - 'IF exact-match on nondeterministic output, THEN testing methodology flaw.'
      - 'IF high-risk tool invocations lack HITL AND no documented autonomy justification, THEN oversight gap.'
  - name: 'Azure AI Foundry Agent Evaluators'
    source: 'Azure AI Foundry (2025-10-19, 2025-10-26)'
    purpose: 'Are runtime agent behaviors measurable using standard evaluation dimensions?'
    decision_rules:
      - 'IF system includes Azure AI Foundry evaluation, THEN apply all three evaluators.'
      - 'IF scores consistently below 3, THEN failing baseline.'
      - 'NOTE: Preview with no SLA. Scores are not contractually binding.'
---
# Microsoft Azure Architecture Center — 14 - Agent & AI Design

> Use the lowest complexity that reliably meets requirements. Multi-agent orchestration must be justified by demonstrated security, prompt-complexity, or tool-overload constraints, not adopted as default.

*Active period*: 2025-2026

## Operating beliefs
- If prompt engineering solves the problem, you don't need an agent.
- Single agent with tools is often the right enterprise default.
- Justify multi-agent by demonstrating single-agent failure due to prompt complexity, tool overload, or security requirements.
- Decision/flow-control overhead often exceeds benefits of multiple agents.
- Classical distributed systems problems apply: node failures, partitions, message loss, cascading errors.
- Some workloads require combining orchestration patterns, don't force one workflow into a single pattern.
- Every agent must implement user-level security trimming, not just the orchestrator.
- Content safety guardrails at four points: user input, tool calls, tool responses, final output.
- Validate agent outputs before passing to next agent; detect low-confidence or malformed output.
- Use scoring rubrics and LLM-as-judge for nondeterministic output, never exact-match assertions.
- Scope HITL gates to specific tool invocations, not full agent outputs.

## Key questions (use as self-check before finalizing output)
- Can a single LLM call with a good prompt handle this (direct model call)?
- If not, can a single agent with tools handle it within one domain?
- What constraint justifies multi-agent (security boundaries, prompt complexity, tool overload)?
- Hard boundaries: security/compliance isolation, multi-team ownership, growth beyond 3-5 functions?
- Coordination type: linear pipeline, parallel, conversational consensus, dynamic delegation, or open-ended planning?
- Security boundaries and user identity propagation requirements?
- Expected cost profile and token budgets?

## Biases (disclose in output footer)
- Favors architectural minimalism, may undervalue exploratory multi-agent designs where emergent behavior is the goal.
- Azure-ecosystem-centric: references MCP, Semantic Kernel, Microsoft Agent Framework.
- Enterprise-oriented: assumes compliance/audit/governance that may over-constrain experimental systems.
- 5-pattern taxonomy may force novel architectures into ill-fitting categories.
- Treats prompt quality as prerequisite, not evaluation dimension, misses systems where prompt design IS the architecture.

## Limitations (suppress lens application in these contexts)
- No prompt engineering evaluation. Systems where the prompt IS the architecture are outside scope.
- No quantitative benchmarks. Cannot evaluate whether latency/cost/failure rates are acceptable, only structural patterns.
- No model selection guidance. Cannot evaluate right model per agent, only whether right-sizing is considered.
- No agent-to-agent protocol evaluation. MCP for tools covered; inter-agent protocols not detailed.
- No failure case studies. Anti-patterns documented without real-world calibration data.
- Magentic convergence bounds unquantified. Three-agent group chat limit is heuristic, not validated.
- Azure AI Foundry agent evaluators are preview-only, no SLA.
- May unfairly penalize experimental/research multi-agent systems valuing emergence over minimum complexity.
- May unfairly penalize novel orchestration patterns outside 5-pattern taxonomy (hierarchical multi-level, swarm-based).

## Frameworks

### Complexity Spectrum (Pre-Pattern Decision Gate)
**Source**: Azure Architecture Center, AI Agent Orchestration Patterns (2026-02-11); Cloud Adoption Framework (2025-12-09)

**Purpose**: Is the system using minimum viable complexity, or over-engineered?

Three-level hierarchy evaluated top-down before pattern selection. Each level adds coordination overhead requiring justification.

#### Components
- **Direct Model Call** — Single LLM call with crafted prompt. No agent logic, no tools. For single-step tasks: classification, summarization, translation, extraction.
  - Key questions:
    - Is the task single-step?
    - Can prompt engineering alone produce reliable output?
    - Does it require dynamic tool use or multi-step reasoning?
- **Single Agent with Tools** — One agent reasoning and acting via tools, knowledge sources, APIs. Can loop through multiple calls. For varied queries within a single domain.
  - Key questions:
    - Requires dynamic tool selection within single domain?
    - Iteration limits against infinite loops?
    - Could persona switching handle apparent role separation?
    - Evidence single-agent was tested before escalating?
- **Multi-Agent Orchestration** — Multiple specialized agents coordinating via orchestrator or peer protocol. For cross-domain problems, security boundaries, parallel specialization.
  - Key questions:
    - Justified by: (a) security/compliance boundaries, (b) multi-team separate knowledge, (c) growth beyond 3-5 functions, (d) demonstrated single-agent failure?
    - Documented WHY single-agent insufficient?
    - Demonstrates specialization, scalability, maintainability, or per-agent optimization?
  - Red flags: Multi-agent with zero justification AND task clearly achievable by direct model call.

#### Decision rules
- IF single-step AND no tools needed, THEN direct model call. Multi-agent = over-engineering.
- IF dynamic tool use within one domain AND no security boundaries, THEN single agent.
- IF crosses security/compliance boundaries OR multi-team OR growth beyond 3-5 functions, THEN multi-agent justified.
- IF unclear, THEN comparative prototype with defined success metrics before committing.
- IF multi-agent chosen without documented justification, THEN unjustified complexity.

### Pattern Taxonomy (5 Orchestration Patterns)
**Source**: Azure Architecture Center, AI Agent Orchestration Patterns (2026-02-11)

**Purpose**: Given multi-agent is justified, is the correct orchestration pattern selected?

Five canonical patterns with when-to-use/when-to-avoid criteria. Patterns can combine when stages have different characteristics.

#### Components
- **Sequential Orchestration** — Linear pipeline; each agent processes previous output. Deterministic order. Pipes and Filters pattern.
  - Key questions:
    - Linearly dependent stages?
    - Any parallelizable stages (if yes, wrong pattern)?
    - Early failure propagation handled?
    - Backtracking or dynamic routing needed (if yes, wrong)?
  - Red flags: Sequential for tasks requiring dynamic routing or parallel execution.
- **Concurrent Orchestration** — Parallel; agents work independently on same input. Fan-out/Fan-in pattern. Deterministic or dynamic selection.
  - Key questions:
    - Tasks genuinely parallelizable with no inter-dependencies?
    - Aggregation strategy defined (voting, weighted merge, LLM synthesis)?
    - Conflict resolution for contradictory outputs?
    - Resource constraints for parallel spike?
- **Group Chat Orchestration** — Conversational; agents contribute to shared accumulating thread. Chat manager controls turns. Agents typically read-only.
  - Key questions:
    - Task best solved through discussion/debate/iterative validation?
    - Chat manager with clear turn-order?
    - Agent count <= 3?
    - Completion criteria defined?
    - Agents read-only or needing external changes (if changes, consider magentic)?
- **Handoff Orchestration** — Dynamic delegation; one active agent at a time; full control transfer. Right specialist emerges during processing.
  - Key questions:
    - Specialist unknown upfront, emerges during processing?
    - One active agent at a time?
    - Infinite handoff loop guards?
    - Clear handoff signals?
    - Could agent be identified from initial input (if yes, use deterministic routing)?
- **Magentic Orchestration** — Plan-build-execute; manager maintains task ledger. Dynamic task assignment and reordering. Group chat extension with external system actions.
  - Key questions:
    - Open-ended with no predetermined solution path?
    - Task ledger with goals/subgoals/statuses?
    - Agents interact with external systems?
    - Stall detection and convergence guards?
    - Plan suitable for human review?
    - Cost variability accounted for (most variable pattern)?
  - Red flags: Magentic for fully deterministic workflow with known solution path.

#### Decision rules
- IF linear dependencies, no parallelism, THEN Sequential.
- IF embarrassingly parallel, no inter-dependency, THEN Concurrent.
- IF discussion/debate/iterative validation, THEN Group Chat.
- IF specialist unknown upfront, emerges during processing, THEN Handoff.
- IF open-ended, no predetermined path, external system access needed, THEN Magentic.
- IF different stages have different coordination needs, THEN combine patterns.
- IF agent identifiable from initial input, THEN deterministic routing (not Handoff).
- IF group chat > 3 agents, THEN scaling concern.

### Security Framework
**Source**: Azure Architecture Center (2026-02-11); Cloud Adoption Framework (2025-12-04)

**Purpose**: Does the agent system implement layered security for multi-agent coordination?

Ten-element layered security. Every agent must implement security individually, orchestrator-only is insufficient.

#### Components
- **Authentication and Secure Networking** — Authenticated, encrypted communication between all agents.
  - Key questions:
    - All agent-to-agent comms authenticated?
    - Encrypted (TLS or equivalent)?
  - Red flags: No auth between agents in production.
- **Least Privilege** — Each agent has minimum necessary permissions.
  - Key questions:
    - Per-agent scoped permissions?
    - Per-agent or shared credentials?
    - Blast radius limited?
- **User Identity Propagation** — User-level security trimming enforced by EVERY agent in the chain, not just orchestrator.
  - Key questions:
    - User identity propagated through chain?
    - Every agent enforces trimming?
    - Results filtered to authorized data?
  - Red flags: Agents accessing user data without any identity propagation.
- **Content Safety (Four Enforcement Points)** — Filtering at: (a) user input, (b) tool calls, (c) tool responses, (d) final output.
  - Key questions:
    - All four points covered?
    - Which missing?
    - Input treated as potentially hostile?
- **Audit, Inventory, and Adversarial Testing** — Audit trails; agent inventory preventing shadow deployments; red teaming before production.
  - Key questions:
    - Audit trails?
    - Agent inventory with identities/ownership/versions?
    - Adversarial testing (injection, leakage, jailbreak)?
    - I/O filtering (type/size, injection stripping)?

#### Decision rules
- IF shared credentials, THEN least privilege violated.
- IF only orchestrator enforces trimming, THEN insufficient, every agent must enforce.
- IF content safety only at final output, THEN three enforcement points missing.
- IF no adversarial testing before production, THEN untested attack surface.
- IF security boundaries are the REASON for multi-agent, THEN security must be exemplary or architecture contradicts itself.

### Implementation Considerations Framework
**Source**: Azure Architecture Center, AI Agent Orchestration Patterns (2026-02-11)

**Purpose**: Are cross-cutting operational concerns adequately addressed?

Five cross-cutting concerns applying to all patterns, evaluated independently.

#### Components
- **Reliability Engineering** — Handling distributed systems failures: node failures, partitions, message loss, cascading errors.
  - Key questions:
    - Timeouts defined?
    - Retries with backoff?
    - Circuit breakers?
    - Output validated before next agent (low-confidence/malformed detection)?
    - Compute isolated (no shared MaaS endpoints)?
    - Checkpointing/recovery?
  - Red flags: No error handling in production multi-agent system.
- **Context and State Management** — Managing context size and state persistence across agent transitions.
  - Key questions:
    - Context compacted between agents?
    - State persisted externally for long-running tasks?
    - Scoped to minimum necessary?
    - Agents given only needed context?
- **Cost Optimization** — Managing token consumption and compute costs across orchestration.
  - Key questions:
    - Model right-sizing (small for classification, large for reasoning)?
    - Pattern cost profile understood (Sequential/Handoff=predictable; Concurrent=spiked; Magentic=most variable)?
    - Per-agent and per-orchestration token monitoring?
    - Context compaction reducing overhead?
- **Observability and Testing** — Instrumentation, metrics, and testing for nondeterministic multi-agent systems.
  - Key questions:
    - All handoffs instrumented?
    - Per-agent metrics?
    - Scoring rubrics or LLM-as-judge (not exact-match)?
    - Integration tests for full workflows?
- **Human-in-the-Loop Design** — Gate types, state persistence, and scoped approvals for human oversight.
  - Key questions:
    - Gates classified optional vs mandatory?
    - Classified approval vs feedback?
    - State persisted at mandatory gates?
    - Scoped to tool invocations (not full outputs)?
    - Fallback when human unavailable?
  - Red flags: High-risk external modifications with no oversight and no justification.

#### Decision rules
- IF no error handling, THEN reliability failure regardless.
- IF full raw context everywhere AND exceeds model limits, THEN critical state management failure.
- IF largest model everywhere with no right-sizing rationale, THEN cost inefficiency.
- IF exact-match on nondeterministic output, THEN testing methodology flaw.
- IF high-risk tool invocations lack HITL AND no documented autonomy justification, THEN oversight gap.

### Azure AI Foundry Agent Evaluators
**Source**: Azure AI Foundry (2025-10-19, 2025-10-26)

**Purpose**: Are runtime agent behaviors measurable using standard evaluation dimensions?

Three agent-specific evaluators, Likert 1-5 (pass >= 3). Evaluate runtime behavior, not architecture. Preview only, no SLA.

#### Components
- **IntentResolutionEvaluator** — How well system identifies user intent: scoping, clarification, capability reminders. Likert 1-5.
- **ToolCallAccuracyEvaluator** — Tool call accuracy/efficiency: relevance, parameter correctness, excess/missing calls. Likert 1-5.
- **TaskAdherenceEvaluator** — Whether agent stays on track per system instructions and available tools. Likert 1-5.

#### Decision rules
- IF system includes Azure AI Foundry evaluation, THEN apply all three evaluators.
- IF scores consistently below 3, THEN failing baseline.
- NOTE: Preview with no SLA. Scores are not contractually binding.

