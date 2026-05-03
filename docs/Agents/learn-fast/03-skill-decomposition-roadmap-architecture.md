# Skill Decomposition and Roadmap Architecture

## Overview
Frameworks for breaking any skill or topic into learnable components and sequencing them into an optimal learning path. The roadmap generator has two jobs: decomposition (identify the chunks) and sequencing (order them correctly). These frameworks are the engine.

## How does Applied Cognitive Task Analysis (ACTA) decompose complex skills?
ACTA elicits expert performance in three passes: (1) a task diagram capturing major steps and cognitively hard parts, (2) a knowledge audit using probes for expert-only cognition (diagnosis, anomalies, improvisation, metacognition), and (3) a simulation/incident interview to extract cues, decisions, and likely novice errors. Convert outputs into a "cognitive demands" table that translates directly into training scenarios. Best for high-stakes or high-variance skills: troubleshooting, medicine, negotiation, incident response. Limitation: resource-heavy and depends on access to strong experts.

## What are Threshold Concepts and why do they matter for roadmap design?
Threshold concepts act as portals. If you "get it," your understanding reorganizes and progress becomes possible. If not, you stay stuck and merely follow procedures. Design the roadmap around finding these portals, anticipating why they are troublesome (alien discourse, tacit knowledge, counterintuitive logic), and planning recursive exposure until the learner uses the concept fluently. Best for concept-heavy domains: statistics, economics, physics, programming paradigms. Limitation: thresholds vary by learner; if too many are labeled "threshold," diagnostic value drops.

## How does the DiSSS framework (Ferriss) work as a fast decomposition method?
DiSSS is a four-step loop: Deconstruction (identify minimal "LEGO blocks"), Selection (pick the high-leverage 20%), Sequencing (order blocks for early progress), and Stakes (add real consequences). CaFE supplements: Compression, Frequency, Encoding. Functions well as a fast, domain-agnostic first pass before deeper analysis. A roadmap generator can implement DiSSS mechanically: infer prerequisite blocks, choose minimum effective subset, propose sequence, attach accountability contract. Limitation: practitioner heuristic, not research-based. Selection can be confidently wrong in safety-critical domains.

## How does Josh Kaufman's "First 20 Hours" approach work?
Set a clear target performance, deconstruct into components, learn "just enough" to self-correct, remove barriers to practice, then commit to enough focused practice to get past the frustration barrier. Targets early competence, not expertise. Best for bounded, practice-friendly skills: basic coding, instrument basics, language survival. Limitation: without strong feedback it can entrench errors.

## How does Backward Design structure a learning sequence?
Start from the end: define desired results in terms of transfer, define acceptable evidence (performance tasks, tests, projects), then design learning experiences. For a roadmap AI, this stops generating content and starts generating an outcome-aligned path with built-in checks. Best for any domain where you can write down what "competent" looks like. Limitation: if the target performance is fuzzy, backward design can overconstrain.

## How do prerequisite maps and knowledge dependency graphs work?
Build a dependency model in two layers. Layer one: pick a terminal capability, identify prerequisite skills top-down, sequence instruction bottom-up. Layer two: represent feasible knowledge states probabilistically, allow multiple prerequisite pathways, refine using assessment data. Enables personalized roadmaps via minimal-learning paths, remediation routing, and fast diagnosis of where a learner is stuck. Limitation: prerequisites are often "helpful" rather than strictly required; a rigid graph mis-sequences learning unless you represent uncertainty.

## How does Progressive Complexity Sequencing (Spiral Curriculum + Elaboration Theory) work?
Teach an epitome first: the simplest whole version of the domain that still makes sense, then elaborate in layers that add detail, exceptions, and harder contexts. Use integration devices (summarizers and synthesizers) and planned revisits so earlier ideas are reinforced and connected as complexity increases. Best for any big domain roadmap where the learner needs early whole-task meaning. Limitation: can produce superficial coverage if revisit intervals are too long or early simplifications distort later understanding.

## How does Mastery-Gated Progression with Dreyfus stages work?
Define mastery criteria for each component skill, assess frequently, provide corrective work when mastery is not met, advance only when criteria are satisfied. Use Dreyfus-style stage descriptors to choose task formats: rule-following drills for novices, situational pattern exposure for advanced beginners, increasingly real integrated cases as competence develops. Best for cumulative domains: math, programming, language, music. Limitation: over-gating can make learning brittle if mastery checks are narrow.

## How should Gagné's Nine Events structure each roadmap node?
Use as a repeatable micro-sequence: capture attention, state objectives, trigger recall of prerequisites, present content, give guidance, elicit performance, give feedback, assess, drive retention and transfer. For self-study, implement as consistent "lesson scaffolding" wrapped around each node. Limitation: structures instruction but does not solve what to include or in what macro-order.

## How does Cognitive Apprenticeship handle "hard to decompose" skills?
Make expert thinking visible by modeling, then move to coached practice with just enough scaffolding. As performance stabilizes, fade prompts and supports, forcing independence, reflection, and eventually exploration in messier environments. Best for creative work, social interaction, clinical judgment, negotiation, leadership. For intuition-based skills, decompose as "extract cues, judgments, and failure modes," not listing textbook topics.

## Composite blueprint for the roadmap generator
1. Set the endpoint using backward design: write target performances and evidence checks first
2. Generate components using two-pass decomposition: fast pass with DiSSS, then deep pass with CTA on hard parts
3. Build a dependency model: prerequisite graph with probabilistic knowledge states
4. Choose macro-order with progressive complexity: start with usable epitome, elaborate in levels
5. Gate progress with mastery logic tuned by Dreyfus stage
6. Instantiate each node using Gagné's events as lesson scaffolding
7. When learners plateau, check for threshold concepts or missing prerequisites before adding more content
8. When learners pass quizzes but can't perform, tighten backward design alignment and increase authentic tasks
