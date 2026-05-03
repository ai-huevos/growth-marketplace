# Real-World Case Studies and Roadmap Design Patterns

## Overview
Documented examples of accelerated learning implementations and exceptionally well-designed public roadmaps. Extracts transferable patterns for the roadmap generator.

## Scott Young's MIT Challenge: assessment as curriculum
Mapped a 4-year CS curriculum to 33 courses using MIT OpenCourseWare, completing exams and programming projects in under 12 months. Workload started at ~60 hours/week, dropped to ~35. He treated finals and projects as the pacing engine and definition of "done." Public posting created accountability. TRANSFERABLE PATTERN: Use a canonical syllabus plus hard benchmarks (exams, projects) and a pass threshold to force closure. WEAKNESS: Self-grading reduces external validity. Optimized for passing exams, not necessarily job-readiness.

## Tim Ferriss DiSSS meta-learning: stakes and selection
DiSSS is Deconstruction, Selection, Sequencing, Stakes. CaFE adds Compression, Frequency, Encoding. "Stakes" is the step most people skip: it turns a plan into something that survives boredom. Selection prevents drowning in completeness. TRANSFERABLE PATTERN: A roadmap can implement DiSSS mechanically: infer prerequisite blocks, choose minimum effective subset, propose sequence, attach accountability contract. WEAKNESS: Self-reported results, broad claims. Strongest as a planning primitive.

## Michael Nielsen's Anki-based memory system: sustainable spaced repetition
Quantified spaced repetition economics: conventional weekly review costs ~2 hours per card over 20 years; Anki intervals yield ~4-7 minutes per card. Created 10,000+ cards over 2.5 years, 15-20 minutes daily review. Key heuristics: "worth ~10 minutes later" rule, plus override for "striking" facts. Built habit by memorizing a Unix command-line guide (~60-70%). TRANSFERABLE PATTERN: Add an always-on "retrieval layer" to any roadmap: generate prompts from recent learning, schedule automatically, enforce daily review cap, prune aggressively. WEAKNESS: Anecdotal, and prompt quality is a skill in itself.

## roadmap.sh: graph-based interactive roadmaps at scale
Visual charts expanded into interactive roadmaps with clickable nodes, learning resources, progress tracking, and community contribution. Two-tier design: map for orientation, node-level resources for action. Large-scale community adoption. TRANSFERABLE PATTERN: Represent roadmaps as graphs with optional paths, attach resource bundles and checkpoint questions to each node. Personalize by pruning nodes to fit target role. WEAKNESS: Can overwhelm; tool choices are market-dependent.

## OSSU computer science curriculum: standards-driven completeness
Complete CS education aligned to undergrad degree requirements. Course-selection criteria: open enrollment, regular cadence, high quality, aligned with CS 2013 standards. Structure: Intro CS, Core CS, Advanced CS, Final Project with peer evaluation. Time model: ~2 years at 20 hours/week. TRANSFERABLE PATTERN: Build from external standards first, curate best available modules, add capstone with peer evaluation to verify synthesis. WEAKNESS: Long haul, assumes strong self-management, multi-provider courseware means uneven experiences.

## Teach Yourself CS: constrained depth-first spine
Nine core topics, one primary book and one video course per topic, 100-200 hours per topic. Includes "still too much?" escape hatch recommending two high-ROI books. TRANSFERABLE PATTERN: For any domain, offer a "core spine" (small set of topics), one best-in-class resource per topic, time budget per block, plus minimalist on-ramp for overwhelmed learners. WEAKNESS: Intentionally not exhaustive; assumes tolerance for slow depth-first study.

## Refold language learning: staged immersion with behavioral gates
Four stages to fluency, broken into substages with different goals and self-tests for readiness. Early stages prioritize comprehension and input; learners avoid premature speaking/writing. Daily routine around three core activities. Stage gates prevent jumping ahead. TRANSFERABLE PATTERN: Combine stage gates, self-tests, and a daily minimal routine. Tie study directly to real-world input so environment becomes the dataset. WEAKNESS: "No early output" is opinionated; assumes access to large volumes of target-language media.

## The Odin Project: project-as-assessment web development
Curriculum split into courses mixing lessons with projects. Lessons combine original writing plus curated external resources. Projects are the reinforcement mechanism and become portfolio artifacts. TRANSFERABLE PATTERN: Interleave "learn" nodes with "build" nodes, make builds non-negotiable checkpoints. Curate rather than reinvent explanations. WEAKNESS: Third-party link rot, can read without building unless enforced.

## What the best roadmaps have in common
1. They convert fuzzy goals into constrained graphs of prerequisites and milestones with closure mechanisms (tests, projects, stage gates)
2. They couple learning to feedback loops: study tied to comprehension, lessons tied to builds, reading tied to retrieval
3. They manage overwhelm by pruning scope as a first-class parameter, not an afterthought
4. They have weaknesses around self-report scoring and content staleness that the roadmap generator should compensate for with objective checks and recency awareness
