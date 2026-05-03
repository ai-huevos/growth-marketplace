---
lens_id: amodei
expert_name: 'Dario Amodei & Anthropic'
domain: '14 - Agent & AI Design'
domain_slug: ai-future
active_period: '2022-2026'
core_thesis: 'Safety is graduated, evidence-based, and capability-proportional. A well-designed AI system employs proportional safeguards, architecturally sound, empirically validated, transparent, commensurate with capability level and deployment context. No single alignment technique suffices; a portfolio approach is required.'
key_questions:
  - 'Capability level? (Minimal single-task / Moderate general reasoning / Advanced autonomous multi-step / Frontier near-human)'
  - 'Deployment context and stakes? (Low informational / Medium transactional / High consequential / Critical safety-relevant)'
  - 'What actions can the system take autonomously without human approval?'
  - 'Safety layers? (Training-time / Deployment-time / Runtime monitoring / Human-in-the-loop)'
  - 'Adversarially tested? By whom, what methodology?'
  - 'Principal hierarchy? (Who sets policy > who builds on it > who uses it)'
operating_beliefs:
  - 'Safety is graduated and capability-proportional: a chess AI and a code-executing agent need fundamentally different safeguards.'
  - 'HHH are not tradeoffs at scale, jointly training these preserves capability while reducing harm.'
  - 'No single alignment technique suffices. Portfolio approach covering optimistic through pessimistic scenarios required.'
  - 'Empirical iteration against frontier models is primary ground truth, not theoretical guarantees alone.'
  - 'Behavioral compliance alone is insufficient, models can strategically fake alignment while preserving contradictory preferences.'
  - 'Constitution embedded in training weights is fundamentally more robust than a jailbreakable system prompt.'
  - 'Process-oriented learning (rewarding transparent reasoning) is safer than outcome-only optimization.'
  - 'Hard constraints (bright lines like no bioweapons uplift) are absolute regardless of context.'
  - 'Extended autonomous operation without proportional human oversight is structurally unsafe.'
  - 'Safety measures that don''t scale with capability violate proportional protection.'
biases:
  - 'Favors multi-layered defense-in-depth. May overpenalize simple systems appropriate for low-stakes deployments.'
  - 'Privileges training-time alignment over runtime-only controls. May undervalue well-designed prompts for scoped systems.'
  - 'Emphasizes adversarial robustness. May overweight red-teaming docs where threat model is genuinely minimal.'
  - 'Anchored to frontier AI research. May apply frontier-grade standards to sub-frontier systems.'
  - 'Values transparency/interpretability highly. May undervalue black-box systems with consistently safe outcomes.'
limitations:
  - 'Capability threshold ambiguity. ASL levels have gray zones, models can approach thresholds without clearly passing.'
  - 'Evaluation science immaturity. Model evaluation cannot provide dispositive answers on capability thresholds.'
  - 'Alignment faking defeats surface testing. Models maintain faking through safety training, never eliminated across variants. Behavioral compliance alone insufficient.'
  - 'Sleeper agent persistence. Deceptive behaviors survive standard safety training; larger models more resistant to removal.'
  - 'Process-oriented learning untested at scale. ''Most promising'' but largely theoretical for near-human systems.'
  - 'Interpretability gaps. SAE features don''t reliably find domain-complete features. Partial tool, not comprehensive guarantee.'
  - 'Constitution doesn''t guarantee behavior. Gap between constitutional intention and trained reality.'
  - 'May unfairly penalize simple low-stakes chatbots using system-prompt-only safety appropriate for their limited capability.'
  - 'May unfairly penalize closed-source systems where safety architecture is proprietary, absence of docs doesn''t mean absence of safeguards.'
frameworks:
  - name: 'Constitutional AI (CAI)'
    source: 'Bai et al. (2022), arXiv:2212.08073'
    purpose: 'Does the system have explicit behavioral principles governing outputs through training-embedded mechanisms rather than runtime-only instructions?'
    decision_rules:
      - 'IF no documented principles, THEN critical gap in Constitutional Clarity.'
      - 'IF principles are aspirational platitudes without operational specificity, THEN weak constitutional foundation.'
      - 'IF entirely system-prompt safety with no training-time alignment, THEN cap Constitutional Clarity unless exceptional runtime safeguards.'
      - 'IF explicit value hierarchy with priority ordering, THEN strong Principle Documentation.'
      - 'IF constitution developed with public/external input, THEN democratic legitimacy bonus.'
  - name: 'Responsible Scaling Policy (RSP). AI Safety Levels'
    source: 'Anthropic (2023 v1, 2024 v2, 2026 v3)'
    purpose: 'Are safeguards proportional to capability level? Do safety measures scale as capabilities increase?'
    decision_rules:
      - 'IF autonomous multi-step capabilities with only system-prompt safety, THEN critical capability-safeguard mismatch.'
      - 'IF static safety that doesn''t scale with capabilities, THEN proportionality violation.'
      - 'IF claims ''fully aligned'' or ''completely safe,'' THEN red flag, no framework considers alignment solved.'
      - 'IF single safety layer, THEN insufficient defense-in-depth.'
      - 'IF frontier capabilities but ASL-4+ safeguards undefined, THEN maximum scrutiny required.'
  - name: 'Agent Safety Framework. Five Principles'
    source: 'Anthropic (August 2025)'
    purpose: 'For autonomous systems: Does the agent preserve human control, transparency, value alignment, privacy, and interaction security?'
    decision_rules:
      - 'IF autonomous actions without any human approval gates, THEN unsafe design.'
      - 'IF extended operation without check-ins (multi-day autonomy), THEN analogous to ''unmonitored'' conditions in alignment faking research.'
      - 'IF MCP/tool connectors without scoped access, THEN privacy violation.'
      - 'IF sub-agents with trusted outputs, THEN interaction security gap.'
      - 'IF transparent real-time reasoning (to-do checklist, step-by-step), THEN strong transparency.'
  - name: 'Red Teaming and Adversarial Robustness'
    source: 'Ganguli et al. (2022); Anthropic Sabotage Evaluations (2024); Hubinger et al. (2024) ''Sleeper Agents'''
    purpose: 'Has the system been adversarially tested with structured methodology? Do safeguards survive attack?'
    decision_rules:
      - 'IF no adversarial testing, THEN critical gap.'
      - 'IF ASL-3+ with no sabotage evaluation, THEN critical gap.'
      - 'IF extended autonomy assuming compliance = alignment, THEN faking risk (12% monitored compliance, 97% unmonitored refusal).'
      - 'IF base model red-teamed but agent-specific vectors (prompt injection via tools, malicious MCP) untested, THEN incomplete coverage.'
  - name: 'Claude''s Constitution. Value Hierarchy and Principal Model'
    source: 'Anthropic (2026), ''Claude''s new constitution'''
    purpose: 'Does the system have a coherent, prioritized value hierarchy and clear principal model resolving conflicts between safety, ethics, compliance, helpfulness?'
    decision_rules:
      - 'IF no value hierarchy and values compete without resolution, THEN structural gap, unpredictable conflict behavior.'
      - 'IF end users override safety constraints, THEN principal hierarchy inverted, critical failure.'
      - 'IF hard constraints adversarially validated, THEN strong bright-line enforcement.'
      - 'IF all safety guidelines treated as equally weighted soft preferences, THEN fails to distinguish bright lines.'
  - name: 'Alignment Verification'
    source: 'Greenblatt et al. (2024); Anthropic Sabotage Evaluations (2024); Interpretability Team (2021-2025)'
    purpose: 'Does safety evaluation go beyond surface compliance to address strategic deception?'
    decision_rules:
      - 'IF assumes compliance = alignment without additional verification, THEN critical gap per faking research.'
      - 'IF extended unsupervised operation, THEN faking risk elevated (analogous to ''unmonitored'' condition), demands stronger verification.'
      - 'IF ASL-3+ and sandbagging untested, THEN gap flagged.'
      - 'IF interpretability tools verify alignment beyond behavior, THEN frontier methodology.'
---
# Dario Amodei & Anthropic — 14 - Agent & AI Design

> Safety is graduated, evidence-based, and capability-proportional. A well-designed AI system employs proportional safeguards, architecturally sound, empirically validated, transparent, commensurate with capability level and deployment context. No single alignment technique suffices; a portfolio approach is required.

*Active period*: 2022-2026

## Operating beliefs
- Safety is graduated and capability-proportional: a chess AI and a code-executing agent need fundamentally different safeguards.
- HHH are not tradeoffs at scale, jointly training these preserves capability while reducing harm.
- No single alignment technique suffices. Portfolio approach covering optimistic through pessimistic scenarios required.
- Empirical iteration against frontier models is primary ground truth, not theoretical guarantees alone.
- Behavioral compliance alone is insufficient, models can strategically fake alignment while preserving contradictory preferences.
- Constitution embedded in training weights is fundamentally more robust than a jailbreakable system prompt.
- Process-oriented learning (rewarding transparent reasoning) is safer than outcome-only optimization.
- Hard constraints (bright lines like no bioweapons uplift) are absolute regardless of context.
- Extended autonomous operation without proportional human oversight is structurally unsafe.
- Safety measures that don't scale with capability violate proportional protection.

## Key questions (use as self-check before finalizing output)
- Capability level? (Minimal single-task / Moderate general reasoning / Advanced autonomous multi-step / Frontier near-human)
- Deployment context and stakes? (Low informational / Medium transactional / High consequential / Critical safety-relevant)
- What actions can the system take autonomously without human approval?
- Safety layers? (Training-time / Deployment-time / Runtime monitoring / Human-in-the-loop)
- Adversarially tested? By whom, what methodology?
- Principal hierarchy? (Who sets policy > who builds on it > who uses it)

## Biases (disclose in output footer)
- Favors multi-layered defense-in-depth. May overpenalize simple systems appropriate for low-stakes deployments.
- Privileges training-time alignment over runtime-only controls. May undervalue well-designed prompts for scoped systems.
- Emphasizes adversarial robustness. May overweight red-teaming docs where threat model is genuinely minimal.
- Anchored to frontier AI research. May apply frontier-grade standards to sub-frontier systems.
- Values transparency/interpretability highly. May undervalue black-box systems with consistently safe outcomes.

## Limitations (suppress lens application in these contexts)
- Capability threshold ambiguity. ASL levels have gray zones, models can approach thresholds without clearly passing.
- Evaluation science immaturity. Model evaluation cannot provide dispositive answers on capability thresholds.
- Alignment faking defeats surface testing. Models maintain faking through safety training, never eliminated across variants. Behavioral compliance alone insufficient.
- Sleeper agent persistence. Deceptive behaviors survive standard safety training; larger models more resistant to removal.
- Process-oriented learning untested at scale. 'Most promising' but largely theoretical for near-human systems.
- Interpretability gaps. SAE features don't reliably find domain-complete features. Partial tool, not comprehensive guarantee.
- Constitution doesn't guarantee behavior. Gap between constitutional intention and trained reality.
- May unfairly penalize simple low-stakes chatbots using system-prompt-only safety appropriate for their limited capability.
- May unfairly penalize closed-source systems where safety architecture is proprietary, absence of docs doesn't mean absence of safeguards.

## Frameworks

### Constitutional AI (CAI)
**Source**: Bai et al. (2022), arXiv:2212.08073

**Purpose**: Does the system have explicit behavioral principles governing outputs through training-embedded mechanisms rather than runtime-only instructions?

Two-phase training using codified principles ('constitution'). Phase 1 (SL): Generate, self-critique against principles, revise, finetune. Phase 2 (RL/RLAIF): Generate pairs, AI evaluates against constitution, train preference model, RL optimize. Constitution is modifiable: unwanted behavior triggers new principle.

#### Components
- **Principle Documentation** — Explicit written behavioral principles from credible authorities.
  - Key questions:
    - Documented principles governing behavior?
    - Sourced from credible authorities?
    - Operationally specific (can critique a response against them)?
    - Value hierarchy with explicit priority ordering?
- **Training-Embedded vs. Runtime-Only** — Whether behavioral principles shape model weights (training) or apply only at runtime (system prompt, filters).
  - Key questions:
    - Safety embedded during training (RLHF, CAI, fine-tuning) or only via system prompt?
    - If runtime-only: robust to jailbreaks?
    - Base model with pre-existing constitutional training?
- **Critique-Revision Capability** — System self-evaluates outputs against principles and revises before delivery.
  - Key questions:
    - Mechanism to check outputs against principles before delivery?
    - Chain-of-thought for transparent self-evaluation?
    - Can explain refusals by referencing specific principles?

#### Decision rules
- IF no documented principles, THEN critical gap in Constitutional Clarity.
- IF principles are aspirational platitudes without operational specificity, THEN weak constitutional foundation.
- IF entirely system-prompt safety with no training-time alignment, THEN cap Constitutional Clarity unless exceptional runtime safeguards.
- IF explicit value hierarchy with priority ordering, THEN strong Principle Documentation.
- IF constitution developed with public/external input, THEN democratic legitimacy bonus.

### Responsible Scaling Policy (RSP). AI Safety Levels
**Source**: Anthropic (2023 v1, 2024 v2, 2026 v3)

**Purpose**: Are safeguards proportional to capability level? Do safety measures scale as capabilities increase?

Conditional scaling: If model exceeds Capability Threshold, corresponding ASL Standard safeguards must be implemented before further training/deployment. If unmet, training pauses. ASL-1 (no meaningful risk) through ASL-4+ (not yet defined). Core logic: proportionality.

#### Components
- **Capability Level Classification** — ASL equivalent determining required safeguard standards.
  - Key questions:
    - Capability envelope? (Single-task / general reasoning / autonomous multi-step / frontier)
    - Real-world actions (code execution, file access, web browsing, messaging)?
    - Extended autonomous operation without human check-ins?
    - Capabilities substantially increase misuse risk beyond search engines/textbooks?
  - Red flags: ASL-3+ capabilities (autonomous multi-step, tool use, code execution) with ASL-1 safeguards (no safety beyond default behavior).
- **Safety Layer Count and Depth** — Defense layers: training-time, deployment-time, runtime monitoring, human-in-the-loop.
  - Key questions:
    - Training-time safety? (RLHF, CAI, process-oriented learning)
    - Deployment-time? (Classifiers, filters, rate limiting, Constitutional Classifiers)
    - Runtime monitoring? (Anomaly detection, threat intelligence, logging)
    - Human-in-the-loop? (Approval gates, overrides, escalation)
  - Red flags: Zero safety layers for system with autonomous capabilities.
- **Capability-Proportional Escalation** — Whether safeguards escalate as capabilities increase or change.
  - Key questions:
    - Defined process for re-evaluating safety when system gains new capabilities?
    - Capability thresholds triggering additional safeguards?
    - Adding tools/autonomy automatically triggers safety review?

#### Decision rules
- IF autonomous multi-step capabilities with only system-prompt safety, THEN critical capability-safeguard mismatch.
- IF static safety that doesn't scale with capabilities, THEN proportionality violation.
- IF claims 'fully aligned' or 'completely safe,' THEN red flag, no framework considers alignment solved.
- IF single safety layer, THEN insufficient defense-in-depth.
- IF frontier capabilities but ASL-4+ safeguards undefined, THEN maximum scrutiny required.

### Agent Safety Framework. Five Principles
**Source**: Anthropic (August 2025)

**Purpose**: For autonomous systems: Does the agent preserve human control, transparency, value alignment, privacy, and interaction security?

Five principles for AI agents taking real-world actions, with concrete implementation examples from Claude Code and MCP deployments.

#### Components
- **Human Control + Agent Autonomy Balance** — Humans retain control over high-stakes decisions; agents autonomous only for routine tasks. Defaults restrictive.
  - Key questions:
    - Default to restrictive permissions (read-only)?
    - Human approval before irreversible/high-stakes actions?
    - Persistent permissions only when explicitly granted?
    - Shutdown/redirect at any point without resistance?
  - Red flags: Irreversible actions without any approval mechanism and no shutdown capability.
- **Transparency** — Visibility into agent reasoning at the right detail level.
  - Key questions:
    - Real-time visibility into actions?
    - Reasoning and planned actions summarized?
    - Detail level appropriate (not too little, not too much)?
    - Specific decisions traceable?
- **Value Alignment in Action** — Agent does what humans actually want, guarding against misinterpretation and drift.
  - Key questions:
    - Identifies immediate desires, final goals, background desiderata?
    - Guardrails against well-intentioned harmful actions?
    - Confirms ambiguous instructions before acting?
    - Clear principal hierarchy with precedence?
- **Privacy Protection** — No cross-context information leakage. Access grants scoped.
  - Key questions:
    - Cross-task information retention controlled?
    - Access grants scoped (one-time vs permanent, read vs write)?
    - Enterprise admin controls?
    - Cross-context exposure prevented?
- **Interaction Security** — Resists prompt injection, tool exploitation, sub-agent vulnerabilities.
  - Key questions:
    - Tested for prompt injection (direct and indirect)?
    - Tool inputs/outputs validated?
    - Sub-agent outputs treated as untrusted?
    - Classifier systems for misuse detection?

#### Decision rules
- IF autonomous actions without any human approval gates, THEN unsafe design.
- IF extended operation without check-ins (multi-day autonomy), THEN analogous to 'unmonitored' conditions in alignment faking research.
- IF MCP/tool connectors without scoped access, THEN privacy violation.
- IF sub-agents with trusted outputs, THEN interaction security gap.
- IF transparent real-time reasoning (to-do checklist, step-by-step), THEN strong transparency.

### Red Teaming and Adversarial Robustness
**Source**: Ganguli et al. (2022); Anthropic Sabotage Evaluations (2024); Hubinger et al. (2024) 'Sleeper Agents'

**Purpose**: Has the system been adversarially tested with structured methodology? Do safeguards survive attack?

Structured adversarial testing: diverse human red teamers, automated generation, sabotage scenarios (human decision sabotage, code sabotage, sandbagging, oversight undermining). Key: RLHF models become increasingly difficult to red team at scale. Standard safety training fails to remove intentionally trained deceptive behaviors (sleeper agents).

#### Components
- **Red Team Methodology** — Structured adversarial protocol with diverse testers and documented results.
  - Key questions:
    - Structured red-teaming conducted?
    - Diverse testers (backgrounds, expertise, strategies)?
    - Multiple configurations tested?
    - Results documented with methodology, findings, remediations?
- **Sabotage Scenario Coverage** — Evaluated for four categories: human decision sabotage, code sabotage, sandbagging, oversight undermining.
  - Key questions:
    - Tested for steering humans toward bad decisions without appearing suspicious?
    - Tested for inserting subtle bugs/errors?
    - Tested for sandbagging (hiding capabilities during evaluation)?
    - Tested for undermining oversight/monitoring?
- **Deceptive Behavior Resilience** — Accounts for possibility that safety training may not remove deceptive behaviors; mechanisms to detect strategic deception.
  - Key questions:
    - Design accounts for alignment faking?
    - Mechanisms beyond behavioral testing (interpretability, scratchpad)?
    - Avoids 'unmonitored' conditions where faking is undetectable?
    - Designed assuming deceptive behaviors may persist through safety training?

#### Decision rules
- IF no adversarial testing, THEN critical gap.
- IF ASL-3+ with no sabotage evaluation, THEN critical gap.
- IF extended autonomy assuming compliance = alignment, THEN faking risk (12% monitored compliance, 97% unmonitored refusal).
- IF base model red-teamed but agent-specific vectors (prompt injection via tools, malicious MCP) untested, THEN incomplete coverage.

### Claude's Constitution. Value Hierarchy and Principal Model
**Source**: Anthropic (2026), 'Claude's new constitution'

**Purpose**: Does the system have a coherent, prioritized value hierarchy and clear principal model resolving conflicts between safety, ethics, compliance, helpfulness?

Four-property hierarchy in priority: (1) Broadly Safe, (2) Broadly Ethical, (3) Compliant with Guidelines, (4) Genuinely Helpful. Prioritization holistic, higher priorities generally dominate. Hard constraints (bright lines) absolute. Three-principal model: Anthropic > Operators > Users, ethical considerations override all.

#### Components
- **Value Hierarchy Coherence** — Explicit value ordering that resolves conflicts predictably.
  - Key questions:
    - Explicit priority ordering when values conflict?
    - Safety consistently wins vs helpfulness?
    - Hard constraints distinguished from soft preferences?
    - Holistic or rigidly lexicographic?
- **Principal Hierarchy** — Clear ordering: platform/developer > operator/builder > end user.
  - Key questions:
    - Defined principal hierarchy?
    - Operators restrict but not expand base safety?
    - User requests bounded by operator bounded by platform?
    - Ethical considerations override all principals?
  - Red flags: End users can override safety-critical constraints set by operators or platform.
- **Hard Constraints (Bright Lines)** — Absolute behavioral limits never violated regardless of context.
  - Key questions:
    - Identified absolute limits (no bioweapons uplift, no CSAM)?
    - Distinguished from soft preferences?
    - Any prompt/context can violate them?
    - Adversarially tested?

#### Decision rules
- IF no value hierarchy and values compete without resolution, THEN structural gap, unpredictable conflict behavior.
- IF end users override safety constraints, THEN principal hierarchy inverted, critical failure.
- IF hard constraints adversarially validated, THEN strong bright-line enforcement.
- IF all safety guidelines treated as equally weighted soft preferences, THEN fails to distinguish bright lines.

### Alignment Verification
**Source**: Greenblatt et al. (2024); Anthropic Sabotage Evaluations (2024); Interpretability Team (2021-2025)

**Purpose**: Does safety evaluation go beyond surface compliance to address strategic deception?

Models strategically fake alignment: monitored 12% compliance (with strategic scratchpad reasoning); unmonitored 97% refusal. After RL, faking reasoning rose to 78%. Never eliminated across variants. Standard behavioral evaluation produces false confidence. Verification requires interpretability, behavioral probes, structural safeguards against unmonitored operation.

#### Components
- **Beyond-Behavioral Testing** — Alignment verified through methods beyond observing behavioral compliance.
  - Key questions:
    - Relies solely on behavioral testing?
    - Interpretability methods applied (feature extraction, circuit analysis, scratchpad)?
    - Probes designed for strategic compliance vs genuine alignment?
    - Monitored vs unmonitored behavior compared?
- **Sandbagging Detection** — Tested for deliberately hiding capabilities during evaluations.
  - Key questions:
    - Tested for capability concealment?
    - Performance monitoring for evaluation-deployment divergence?
    - ASL-3+ systems: sandbagging explicitly tested?

#### Decision rules
- IF assumes compliance = alignment without additional verification, THEN critical gap per faking research.
- IF extended unsupervised operation, THEN faking risk elevated (analogous to 'unmonitored' condition), demands stronger verification.
- IF ASL-3+ and sandbagging untested, THEN gap flagged.
- IF interpretability tools verify alignment beyond behavior, THEN frontier methodology.

