---
lens_id: commey
expert_name: 'Daniel Commey'
domain: '14 - Agent & AI Design'
domain_slug: ai-future
active_period: '2025'
core_thesis: 'Prompt changes and system modifications must be validated against task-specific test suites. ''Better'' prompts frequently degrade performance: the only defense is evaluation-driven iteration with defined quality dimensions, golden test sets, and continuous regression testing.'
key_questions:
  - 'What type of system? (Plain LLM / RAG / Agentic tool-use)'
  - 'What quality dimensions are defined, and how are they decomposed?'
  - 'Does a golden test set exist? How many cases, what stratification?'
  - 'What happens when a prompt or model changes? Is the suite re-run?'
  - 'What metrics are used? Are their limitations documented?'
  - 'If LLM-as-judge: which model judges, and what bias mitigations?'
operating_beliefs:
  - 'Evaluation without defined quality dimensions is theater.'
  - 'A ''better'' prompt that wasn''t regression-tested is a liability.'
  - 'Golden sets are small (50-200), task-specific, and evolve with the system.'
  - 'Automated metrics are necessary but insufficient, human evaluation calibrates.'
  - 'LLM-as-judge has 5 known biases; unmitigated use produces unreliable scores.'
  - 'RAG systems must separate retrieval from generation evaluation; ''correct but unsupported'' is the defining failure.'
  - 'Production deployment without canary and rollback is reckless.'
  - 'Model updates silently change behavior, version pinning + mandatory re-testing required.'
  - 'Test set quality > test set quantity. Stratification and hard negatives matter more than volume.'
biases:
  - 'Favors systematic evaluation infrastructure. May undervalue rapid iteration in early-stage prototypes.'
  - 'Weights formal test suites heavily. May underrate lightweight but effective testing (e.g., manual but expert review).'
  - 'Assumes evaluation is primarily an engineering problem. May underweight domain-specific evaluation nuances.'
  - 'Paper covers single-agent systems. Multi-agent evaluation gaps acknowledged but not scored.'
limitations:
  - 'Multi-agent systems. Evaluation framework covers single-agent only.'
  - 'Non-English evaluation. All guidance assumes English-language systems.'
  - 'Cost-performance tradeoffs. Evaluation rigor recommendations don''t account for resource constraints.'
  - 'UX impact. A well-evaluated system can still fail on interface design.'
  - 'May unfairly penalize early-stage prototypes where full MVES is premature but some evaluation exists.'
  - 'May unfairly penalize systems relying on proprietary eval infrastructure not visible in the deliverable.'
frameworks:
  - name: 'Evaluation-Driven Workflow (Define-Test-Diagnose-Fix)'
    source: 'arXiv:2601.22025, Section 2'
    purpose: 'Does the system follow a repeatable loop catching regressions before deployment?'
    decision_rules:
      - 'IF no Define phase THEN evaluation has no target.'
      - 'IF prompt changes skip Test phase THEN regressions are invisible.'
      - 'IF failures are counted but not categorized THEN fixes are untargeted.'
      - 'IF fix applied without re-running suite THEN regression risk unmanaged.'
  - name: 'MVES, 3 Tiers'
    source: 'arXiv:2601.22025, Section 4.4'
    purpose: 'Is evaluation at the correct tier for the system''s architecture?'
    decision_rules:
      - 'IF RAG system evaluated only end-to-end THEN retrieval bottleneck invisible.'
      - 'IF agentic system has no trajectory evaluation THEN multi-step failures undetectable.'
      - 'IF system type mismatched to MVES tier THEN structural under-evaluation.'
  - name: 'Quality Taxonomy (7 Dimensions)'
    source: 'arXiv:2601.22025, Section 3'
    purpose: 'Has ''quality'' been defined across all relevant dimensions before designing evaluation?'
    decision_rules:
      - 'IF no quality dimensions defined THEN evaluation is ungrounded.'
      - 'IF dimensions not decomposed into checkable properties THEN untestable.'
      - 'IF application-specific weighting absent THEN one-size-fits-all risk.'
  - name: 'LLM-as-Judge with Known Failure Modes'
    source: 'arXiv:2601.22025, Section 8'
    purpose: 'If LLM-as-judge used, are known biases mitigated and guardrails in place?'
    decision_rules:
      - 'IF model judges its own outputs THEN 10-25% self-preference bias.'
      - 'IF no human validation of judge scores THEN reliability unknown.'
      - 'IF judge not recalibrated after model update THEN drift risk.'
      - 'IF holistic ''which is better?'' without rubric THEN style/verbosity bias unchecked.'
  - name: 'Test Set Design Methodology'
    source: 'arXiv:2601.22025, Section 5'
    purpose: 'Is the test set constructed for meaningful quality assessment with proper stratification and maintenance?'
    decision_rules:
      - 'IF test set is convenience sample THEN coverage gaps guaranteed.'
      - 'IF no hard negatives THEN overfitting to surface patterns undetectable.'
      - 'IF static test set with no augmentation THEN coverage degrades over time.'
      - 'IF test cases in model training data THEN contamination risk.'
  - name: 'Metrics and Scoring System'
    source: 'arXiv:2601.22025, Section 6'
    purpose: 'Right metrics for output type with understood limitations?'
    decision_rules:
      - 'IF ROUGE used as sole metric for summarization THEN hallucinations pass undetected.'
      - 'IF all-pass rate not distinguished from check-pass rate THEN failure concentration masked.'
      - 'IF semantic metric treated as ground truth without human calibration THEN overreliance.'
      - 'IF BERTScore used without documenting 0.40-0.60 correlation bound THEN false precision.'
  - name: 'RAG Evaluation Decomposition'
    source: 'arXiv:2601.22025, Section 7'
    purpose: 'For RAG: is evaluation decomposed into retrieval + generation, with ''correct but unsupported'' tested?'
    decision_rules:
      - 'IF RAG evaluated only end-to-end THEN retrieval bottleneck invisible.'
      - 'IF high correctness but low groundedness THEN answering from parametric knowledge, critical RAG failure.'
      - 'IF no ''correct but unsupported'' testing THEN defining failure mode undetectable.'
      - 'IF retrieval is bottleneck THEN improving prompts has negligible effect, diagnosis must ID root cause.'
  - name: 'Common Failure Modes Catalog'
    source: 'arXiv:2601.22025, Section 10'
    purpose: 'Are known failure modes actively mitigated?'
    decision_rules:
      - 'IF prompts not version-controlled THEN drift is invisible.'
      - 'IF no held-out set THEN overfitting undetectable.'
      - 'IF model versions not pinned THEN silent regressions guaranteed.'
      - 'IF single metric without human validation THEN misleading optimization.'
  - name: 'Production Protocol'
    source: 'arXiv:2601.22025, Section 9.4'
    purpose: 'Does deployment include staging, monitoring, and rollback?'
    decision_rules:
      - 'IF no offline gate THEN untested changes reach production.'
      - 'IF no canary THEN failures affect 100% of traffic immediately.'
      - 'IF no rollback THEN recovery from bad deployment is manual/slow.'
---
# Daniel Commey — 14 - Agent & AI Design

> Prompt changes and system modifications must be validated against task-specific test suites. 'Better' prompts frequently degrade performance: the only defense is evaluation-driven iteration with defined quality dimensions, golden test sets, and continuous regression testing.

*Active period*: 2025

## Operating beliefs
- Evaluation without defined quality dimensions is theater.
- A 'better' prompt that wasn't regression-tested is a liability.
- Golden sets are small (50-200), task-specific, and evolve with the system.
- Automated metrics are necessary but insufficient, human evaluation calibrates.
- LLM-as-judge has 5 known biases; unmitigated use produces unreliable scores.
- RAG systems must separate retrieval from generation evaluation; 'correct but unsupported' is the defining failure.
- Production deployment without canary and rollback is reckless.
- Model updates silently change behavior, version pinning + mandatory re-testing required.
- Test set quality > test set quantity. Stratification and hard negatives matter more than volume.

## Key questions (use as self-check before finalizing output)
- What type of system? (Plain LLM / RAG / Agentic tool-use)
- What quality dimensions are defined, and how are they decomposed?
- Does a golden test set exist? How many cases, what stratification?
- What happens when a prompt or model changes? Is the suite re-run?
- What metrics are used? Are their limitations documented?
- If LLM-as-judge: which model judges, and what bias mitigations?

## Biases (disclose in output footer)
- Favors systematic evaluation infrastructure. May undervalue rapid iteration in early-stage prototypes.
- Weights formal test suites heavily. May underrate lightweight but effective testing (e.g., manual but expert review).
- Assumes evaluation is primarily an engineering problem. May underweight domain-specific evaluation nuances.
- Paper covers single-agent systems. Multi-agent evaluation gaps acknowledged but not scored.

## Limitations (suppress lens application in these contexts)
- Multi-agent systems. Evaluation framework covers single-agent only.
- Non-English evaluation. All guidance assumes English-language systems.
- Cost-performance tradeoffs. Evaluation rigor recommendations don't account for resource constraints.
- UX impact. A well-evaluated system can still fail on interface design.
- May unfairly penalize early-stage prototypes where full MVES is premature but some evaluation exists.
- May unfairly penalize systems relying on proprietary eval infrastructure not visible in the deliverable.

## Frameworks

### Evaluation-Driven Workflow (Define-Test-Diagnose-Fix)
**Source**: arXiv:2601.22025, Section 2

**Purpose**: Does the system follow a repeatable loop catching regressions before deployment?

Four-phase iterative cycle replacing ad-hoc prompt engineering. Each prompt/model change triggers a full cycle.

#### Components
- **Define Phase** — Quality requirements in testable terms. Decompose into checkable properties.
  - Key questions:
    - Quality dimensions stated before testing?
    - Each decomposed into checkable properties?
    - Automated vs human-judgment checks distinguished?
    - Dimensions mapped to application type?
  - Red flags: No defined quality dimensions at all.
- **Test Phase** — Evaluate against curated golden set with known properties.
  - Key questions:
    - Golden set 50-200 cases, version-controlled?
    - Stratified by intent and difficulty (50/30/20)?
    - ~20% edge cases?
    - Adversarial inputs included?
    - Run on every prompt/model change?
- **Diagnose Phase** — Categorize failures into named patterns, not just count them.
  - Key questions:
    - Failures categorized by type?
    - Root cause identified (prompt vs retrieval vs model)?
    - Patterns tracked across iterations?
- **Fix Phase** — Targeted fix validated by re-running suite. No fix accepted without re-evaluation.
  - Key questions:
    - Fix targets diagnosed root cause?
    - Full suite re-run after fix?
    - Regression on other cases checked?

#### Decision rules
- IF no Define phase THEN evaluation has no target.
- IF prompt changes skip Test phase THEN regressions are invisible.
- IF failures are counted but not categorized THEN fixes are untargeted.
- IF fix applied without re-running suite THEN regression risk unmanaged.

### MVES, 3 Tiers
**Source**: arXiv:2601.22025, Section 4.4

**Purpose**: Is evaluation at the correct tier for the system's architecture?

Three prescriptive tiers, each building on previous. Architecture determines tier. Under-evaluation = structural gap.

#### Components
- **MVES-Core (All LLM Apps)** — Baseline: golden set 50-200 (version-controlled), ~20% edge cases, adversarial inputs, automated assertions, semantic metric, human-labeled subset (25-50).
  - Red flags: No golden test set at all.
- **MVES-RAG** — Core + retrieval metrics (Recall@k, MRR), groundedness checks (NLI/judge/citation-audit), explicit 'correct but unsupported' failure tests.
  - Red flags: RAG with no retrieval quality measurement.
- **MVES-Agentic** — RAG + trajectory evaluation, per-tool success rates, sandboxed execution, human-in-the-loop for high-stakes.
  - Red flags: High-stakes tool calls with no human-in-the-loop.

#### Decision rules
- IF RAG system evaluated only end-to-end THEN retrieval bottleneck invisible.
- IF agentic system has no trajectory evaluation THEN multi-step failures undetectable.
- IF system type mismatched to MVES tier THEN structural under-evaluation.

### Quality Taxonomy (7 Dimensions)
**Source**: arXiv:2601.22025, Section 3

**Purpose**: Has 'quality' been defined across all relevant dimensions before designing evaluation?

Seven dimensions defined before evaluation design. Application type determines weighting.

#### Components
- **Correctness** — Factually accurate, logically sound.
- **Helpfulness** — Assists user in achieving goal.
- **Harmlessness** — No dangerous advice, toxic content, privacy violations.
  - Red flags: Safety-critical app (medical/financial/legal) with no harmlessness eval.
- **Groundedness and Attribution** — Claims traceable to reliable sources.
  - Red flags: RAG system with no groundedness checks.
- **Refusal Correctness** — Refuses harmful content AND avoids over-refusal of legitimate queries.
- **Format and Style Adherence** — Outputs match required structure (JSON schema, tone, length).
- **Consistency** — Semantically equivalent inputs yield consistent outputs.

#### Decision rules
- IF no quality dimensions defined THEN evaluation is ungrounded.
- IF dimensions not decomposed into checkable properties THEN untestable.
- IF application-specific weighting absent THEN one-size-fits-all risk.

### LLM-as-Judge with Known Failure Modes
**Source**: arXiv:2601.22025, Section 8

**Purpose**: If LLM-as-judge used, are known biases mitigated and guardrails in place?

Middle ground between human eval and automated metrics. Five known biases require active mitigation plus a four-step robustness protocol.

#### Components
- **Bias Mitigation** — Five biases: position (5-15%, double-pass A/B then B/A), verbosity (10-20%, length-normalize), self-preference (10-25%, cross-model judge), style (rubric-based scoring), instruction leakage (blind judge to exploitable criteria).
  - Red flags: Model evaluating its own outputs.
- **Judge Prompt Quality** — Component rubric with named dimensions, chain-of-thought before scoring, structured JSON output.
- **Robustness Protocol** — Four steps: 1) Run judge on cases with known human ratings, 2) Require >0.7 correlation, 3) Position-randomize all comparisons, 4) Recalibrate after model updates.
- **Guardrails** — Never same-model judge. Never holistic without rubric. Never skip human validation. Never use unrecalibrated judge after model update.

#### Decision rules
- IF model judges its own outputs THEN 10-25% self-preference bias.
- IF no human validation of judge scores THEN reliability unknown.
- IF judge not recalibrated after model update THEN drift risk.
- IF holistic 'which is better?' without rubric THEN style/verbosity bias unchecked.

### Test Set Design Methodology
**Source**: arXiv:2601.22025, Section 5

**Purpose**: Is the test set constructed for meaningful quality assessment with proper stratification and maintenance?

Systematic construction with four coverage strategies and maintenance requirements.

#### Components
- **Intent Stratification** — All query types enumerated with proportional representation matching expected usage.
- **Difficulty Stratification** — 50% easy, 30% medium, 20% hard.
- **Hard Negative Mining** — Inputs similar to positives but requiring different outputs. Reveals surface-pattern overfitting.
- **Failure-Driven Augmentation** — Production failures added with tracked provenance (synthetic/production/failure-derived).
- **Test Set Maintenance** — Regular refresh, decontamination, provenance tracking.

#### Decision rules
- IF test set is convenience sample THEN coverage gaps guaranteed.
- IF no hard negatives THEN overfitting to surface patterns undetectable.
- IF static test set with no augmentation THEN coverage degrades over time.
- IF test cases in model training data THEN contamination risk.

### Metrics and Scoring System
**Source**: arXiv:2601.22025, Section 6

**Purpose**: Right metrics for output type with understood limitations?

Metric definitions for structured/unstructured outputs with correlation bounds and selection guidance.

#### Components
- **Structural Metrics (Automated)** — JSON validity, required keys, constraint pass rate, all-pass rate vs check-pass rate, citation compliance as groundedness proxy.
- **Semantic Metrics** — BERTScore (0.40-0.60 human correlation), BLEURT, cosine similarity.
- **Factual Metrics** — FActScore (atomic claim decomposition + verification). Note: larger models can be LESS truthful.
- **Inter-Rater Reliability** — Cohen's kappa or Krippendorff's alpha for human annotations. Target >0.7.

#### Decision rules
- IF ROUGE used as sole metric for summarization THEN hallucinations pass undetected.
- IF all-pass rate not distinguished from check-pass rate THEN failure concentration masked.
- IF semantic metric treated as ground truth without human calibration THEN overreliance.
- IF BERTScore used without documenting 0.40-0.60 correlation bound THEN false precision.

### RAG Evaluation Decomposition
**Source**: arXiv:2601.22025, Section 7

**Purpose**: For RAG: is evaluation decomposed into retrieval + generation, with 'correct but unsupported' tested?

RAG must decompose into retrieval and generation. RAGAS framework provides four metrics. 'Correct but unsupported' is the defining RAG risk.

#### Components
- **Retrieval Quality** — Precision@k, Recall@k, MRR, nDCG, context precision/recall. Recall@k >= 0.8 as starting heuristic.
- **Generation Quality** — Faithfulness = supported claims / total claims. Answer relevance = semantic similarity to question. Measured separately from retrieval.
- **Correct-but-Unsupported Detection** — Correct answer from parametric knowledge, not retrieved context. Unverifiable. Detect: compare outputs with/without retrieval; require citations.

#### Decision rules
- IF RAG evaluated only end-to-end THEN retrieval bottleneck invisible.
- IF high correctness but low groundedness THEN answering from parametric knowledge, critical RAG failure.
- IF no 'correct but unsupported' testing THEN defining failure mode undetectable.
- IF retrieval is bottleneck THEN improving prompts has negligible effect, diagnosis must ID root cause.

### Common Failure Modes Catalog
**Source**: arXiv:2601.22025, Section 10

**Purpose**: Are known failure modes actively mitigated?

Six documented failure modes with symptoms and mitigations.

#### Components
- **Prompt Drift** — Cumulative degradation from iterative prompt changes.
- **Overfitting to Test Set** — High test scores, poor production performance.
- **Format Brittleness** — Structured output parsing failures.
- **Silent Regressions After Model Updates** — Provider model update breaks behavior without warning.
- **Misleading Evaluation Metrics** — Optimizing wrong target; metric doesn't correlate with quality.
- **Insufficient Failure Case Coverage** — Test set misses real-world failure modes.

#### Decision rules
- IF prompts not version-controlled THEN drift is invisible.
- IF no held-out set THEN overfitting undetectable.
- IF model versions not pinned THEN silent regressions guaranteed.
- IF single metric without human validation THEN misleading optimization.

### Production Protocol
**Source**: arXiv:2601.22025, Section 9.4

**Purpose**: Does deployment include staging, monitoring, and rollback?

Four-stage deployment sequence validating changes before full exposure.

#### Components
- **Offline Suite** — Full eval suite passes before any deployment.
- **Canary Deployment** — New version at 5-10% traffic with metrics monitoring.
- **Production Monitoring** — Offline checks running on production traffic with divergence alerting.
- **Rollback Capability** — Revert to previous version on metric degradation.

#### Decision rules
- IF no offline gate THEN untested changes reach production.
- IF no canary THEN failures affect 100% of traffic immediately.
- IF no rollback THEN recovery from bad deployment is manual/slow.

