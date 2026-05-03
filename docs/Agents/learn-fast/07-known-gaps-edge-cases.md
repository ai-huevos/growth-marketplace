# Known Gaps and Edge Cases for the Roadmap Generator

## Overview
Areas where the knowledge base has limited coverage or where standard approaches need modification. The system prompt uses this document to handle edge cases honestly rather than hallucinating.

## Physical and motor skills require different practice schedules
Motor learning depends on feedback and practice schedules optimized for retention and transfer, not just in-session performance. Variable practice and contextual interference principles apply differently than in purely cognitive domains. When generating roadmaps for physical skills (sports, instruments, trades, cooking), prioritize: variable practice conditions, delayed retention tests, video-based self-review, and explicit rest/recovery periods. Do not treat physical skills as "knowledge plus practice."

## Creative skills depend on critique and iteration cycles
Creative domains (writing, design, art, music composition) require a repeatable cycle: observe exemplars, attempt production, get critique, revise, internalize quality criteria over time. Decomposition units are usually production cycles, not concepts. Use cognitive apprenticeship: model expert process, coach attempts, fade supports. Portfolio-based assessment is more appropriate than quiz-based assessment.

## Social skills require interaction and role-play
Negotiation, leadership, sales, teaching, and interpersonal skills cannot be learned through content consumption alone. They require structured role-play, scenario-based practice, and feedback from interaction partners. When generating roadmaps for social skills, include: scenario simulations, role-play exercises, structured observation of experts, and feedback from real interactions. AI can simulate basic scenarios but cannot replace human feedback for nuance.

## Neurodivergent learners may need modified defaults
ADHD: May need shorter session lengths, more frequent breaks, stronger external structure, and more immediate accountability hooks. Executive function supports matter more than content changes.
Autism: Evidence-based practices vary; structured approaches often work well. Explicit instruction and clear expectations tend to be beneficial.
Dyslexia: Structured literacy and explicit decoding emphasis. Text-heavy materials may need multimodal alternatives.
When a learner self-identifies as neurodivergent, adjust session length, break frequency, and structure level, but do not change core learning science (retrieval, spacing, interleaving still work).

## Time-constrained professionals are not full-time learners
Microlearning principles apply: design for situational constraints, shorter delivery, behavioral outcomes. Use just-in-time practice aligned to real work tasks. "Minimum viable day" concept is essential: define the smallest daily practice that preserves spaced retrieval so progress does not reset when life gets busy.

## AI-as-tutor pedagogy (2026 state)
AI tutors can improve learning, but outcomes depend heavily on how they are used. The evidence-backed uses: Socratic questioning partner (forces retrieval by asking questions rather than giving answers), rubric-based assessor (provide the rubric, exemplars, and the learner's artifact; request a score plus specific revision suggestions), practice problem generator (generate varied problems targeting weak areas identified by error logs), and explanation challenger (ask the AI to find holes in the learner's explanation).

The evidence-backed cautions: AI as sole feedback source creates blind spots (models can validate wrong reasoning confidently). AI-generated praise without calibration reinforces fluency illusions. "Chat with AI about the topic" is passive consumption unless structured with retrieval gates.

Implementation rules for the roadmap:
- Triangulate: AI score plus self-score plus at least one peer/community score.
- Use AI to generate practice problems, not to explain concepts at length (retrieval beats rereading, even AI-delivered rereading).
- When using AI for assessment, provide the rubric explicitly and request citations to rubric criteria.
- Treat AI tutoring as a supplement to retrieval practice and spaced repetition, never as a replacement.
- This area is changing fast. Do not present current AI tutoring approaches as settled science.

## Motivation and emotional regulation are not optional
Achievement emotions (boredom, anxiety, enjoyment) shape attention, strategy choice, and persistence across weeks. The roadmap should front-load visible wins for low-confidence learners, build challenge quotas for high-confidence learners, and include periodic check-ins on emotional state. Dropout risk is highest in the first two weeks and at the first major difficulty spike.

## Age differences are not currently modeled in detail
Adolescents show heightened reward sensitivity and developing self-regulation. Older adults may respond differently to spacing and retrieval schedules. The core principles still apply across ages, but session design and motivational scaffolding may need adjustment. Flag this as an area where the roadmap's defaults may need manual tuning.

## The roadmap lacks a built-in evaluation layer
The strongest learning science evidence comes from randomized trials. Individual roadmaps cannot run RCTs, but the system should encourage learners to treat their plan as a hypothesis: track metrics (recall accuracy, calibration error, project completion quality), compare against baseline, and adjust. Build "experiment mindset" into the roadmap narrative.
