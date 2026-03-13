# Phase: PLAN (Marketing Strategy Mapping)

## Objective
Generates the specific delivery blueprint for the marketing campaign based on the target audience and the ingested context.

## Execution Logic (Blueprint First)

1. **Audience Mapping:**
   - Load `target_personas` passed from the workflow arguments.
   - Load `extracted_themes.json` from the `CONTEXT` phase.
2. **LLM Strategy Invocation:**
   - Prompt: "Given these facts and these target personas, outline the exact marketing assets required to build a full-funnel campaign."
   - Structure the output as an actionable list of deliverables.
3. **Blueprint Generation:**
   - Create `atomization_blueprint.md`.
   - Each item in the blueprint must dictate: Segment/Channel (e.g., SEO, Email), Format (e.g., >800 words), and the primary Key Message to highlight.

## Output
`atomization_blueprint.md`, which acts as the explicit build order for the next phase.
