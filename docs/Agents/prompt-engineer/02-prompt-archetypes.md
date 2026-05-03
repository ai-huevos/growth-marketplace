# Prompt Archetypes

Three structural blueprints. Select based on extraction. Adapt as needed — these are starting points, not liturgy.

---

## Archetype 1: System Prompt

For persistent AI agents with tools and behavioral rules across many interactions.

```xml
<purpose>
What this agent does. One to two sentences. No backstory, no persona.
Example: "Route customer support tickets to the correct team and draft initial responses."
</purpose>

<rules>
Non-negotiable behavioral constraints. Absolute language only.
- Never [X]
- Always [Y]
- When [condition], do [action]
Keep under 7 rules. More than 7 = you're overspecifying.
</rules>

<workflow>
How the agent processes requests. Decision tree, not narrative.
- If [condition]: [action]
- If [condition]: [action]
Include quality gates between phases.
</workflow>

<output_format>
Default response structure. Literal template, not description.
</output_format>

<examples>
2-3 input/output pairs. Include one edge case.
One contrastive pair (good + bad) is worth more than three good-only.
</examples>

<reminders>
Repeat the 2-3 most critical rules. Recency effect.
</reminders>
```

**Key decisions:**
- No `<identity>` or `<role>` block. Purpose states what the agent does, not who it pretends to be.
- Rules before workflow. Constraints before capabilities.
- Reminders at the end repeat only rules most likely to drift.
- Under 7 rules. If you need more, split into `<rules>` (non-negotiable) and `<preferences>` (nice-to-have).

---

## Archetype 2: Task Prompt

Single-shot task execution. One interaction, one deliverable.

```xml
<task>
Concrete, measurable outcome. Imperative voice.
"Analyze the following sales data and identify the three highest-impact trends."
</task>

<context>
{{USER_INPUT}}
Wrap user content in sub-tags:
  <data>...</data>
  <background>...</background>
</context>

<constraints>
Hard requirements: length, tone, format, inclusions, exclusions.
Resolve tensions explicitly: "Prioritize accuracy over completeness."
</constraints>

<output_format>
Literal skeleton of expected response. Not "present clearly" — show the structure:

**Trend 1**: [Name]
- Evidence: [specific data points]
- Impact: [quantified if possible]
- Action: [what to do about it]
</output_format>

<examples>
Optional. Include if output format is non-obvious.
One good + one bad with brief explanation of why.
</examples>
```

**Key decisions:**
- No role block. The task itself provides steering.
- Sub-tags separate user data from instructions (prevents injection).
- Under 500 tokens when possible. Task prompts pay a tax for every unnecessary token.
- Skip examples if output format is self-explanatory.
- Skip thinking tools if task is straightforward.

---

## Archetype 3: Workflow Prompt

Complex multi-phase workflows with dependencies between steps.

```xml
<overview>
Phase 1: [Name] — [one line]
Phase 2: [Name] — [one line]
Phase 3: [Name] — [one line]
The model needs the full map before walking.
</overview>

<phase_1 name="[Name]">
  <objective>What this phase accomplishes</objective>
  <inputs>What it receives</inputs>
  <process>
  Step-by-step. Imperative voice.
  Include decision points: "If X, do Y. Otherwise, do Z."
  </process>
  <output>Exact format produced. Becomes input for next phase.</output>
  <gate>Do not advance until: [criteria]</gate>
</phase_1>

<phase_2 name="[Name]">
  <inputs>Output from Phase 1</inputs>
  [Same structure]
</phase_2>

<global_constraints>
Rules across ALL phases: tone, formatting, hard limits.
</global_constraints>

<error_handling>
- Ambiguous input: [instruction]
- Unexpected output: [instruction]
- Gate fails: [instruction]
- Requirements change mid-workflow: [instruction]
</error_handling>
```

**Key decisions:**
- Overview first — the model sees the full path before starting.
- Each phase is self-contained with explicit inputs/outputs for debugging.
- Gates prevent bad output from cascading through phases.
- Error handling is NOT optional for workflows.

---

## Selection Guide

| Signal | Archetype |
|--------|-----------|
| "Build me an agent/assistant that..." | System |
| "I need you to [single task]..." | Task |
| "Create a workflow/process that..." | Workflow |
| Long-running, many interactions | System |
| One-shot, clear deliverable | Task |
| Multi-step with dependencies | Workflow |
| Has tools/APIs | System |
| Needs branching logic | Workflow |

When in doubt, start with Task. Upgrade to Workflow only if you genuinely have phase dependencies. Upgrade to System only if the agent persists across interactions.

## Connects To
- 01: Context engineering principles that apply to all archetypes
- 03: Techniques to embed within any archetype
- 04: Thinking frameworks to inject when task demands it
