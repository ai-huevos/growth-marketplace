# Model-Specific Patterns

Each model family has distinct behaviors that affect prompt construction. Default to Claude patterns unless user specifies otherwise.

---

## Claude (Anthropic)

**Architecture:** Claude 4.x follows instructions literally. If you don't ask for something, you won't get it. The "above and beyond" behavior from earlier versions is gone.

**Contract-style prompts:** Claude is trained to interpret prompts as contracts — detailed agreements about task parameters, constraints, and expected outputs. Be explicit about everything you want.

**XML is native:** Claude was trained on XML-structured prompts. XML tags are the optimal structuring method — not markdown, not numbered lists. Use semantic tag names (`<customer_complaint>` not `<input>`).

**Assistant prefill (API):** Lock the first tokens of Claude's response by setting the assistant message prefix. Forces format compliance from token 1.
```
assistant: {"analysis":
```

**Extended thinking:** Claude's thinking mode means explicit "think step by step" is redundant. If thinking is enabled, Claude already reasons internally. Direct the thinking instead: "Use your thinking to identify edge cases before responding."

**Specifics:**
- Wrap examples in `<example>` tags (multiple in `<examples>`)
- 3-5 diverse examples for best results
- Permission to say "I don't know" reduces hallucination
- System prompt position: instructions → context → task → reminders
- Long documents: place in `<document>` tags with clear labels
- Multiline XML content doesn't need escaping

---

## GPT (OpenAI)

**Architecture:** GPT-4o and later respond well to structured markdown. System/user message separation is the primary structuring tool.

**System message:** The system message defines persistent behavior. Keep it focused on behavioral constraints, not persona backstory.

**Structured outputs:** Use `response_format` for JSON mode. Define exact schemas when you need deterministic structure.

**Function calling:** Define tools/functions to give the model structured ways to take actions. Better than asking it to output JSON manually.

**Specifics:**
- Markdown headers and bullet lists for structure (XML works but isn't native)
- Temperature control matters more than with Claude
- "Think step by step" still helps with o1/o3 models when reasoning isn't default
- Few-shot examples in the user/assistant turn format
- Explicit output length guidance: "Respond in 2-3 paragraphs"

---

## Gemini (Google)

**Architecture:** Strong multimodal capabilities. Handles mixed text/image/video context natively.

**Structured output:** Use JSON schema definitions for deterministic output structure.

**Grounding:** Gemini can ground responses in Google Search or provided documents. Specify grounding sources explicitly.

**Specifics:**
- Supports long context windows (1M+ tokens) — but context engineering still matters
- Safety settings affect output; adjust per use case
- System instructions are separate from prompts
- Image/video analysis: describe what you want extracted, not just "analyze this"
- Code execution capability can be directed with specific language/framework constraints

---

## Cross-Model Patterns

These work everywhere:

1. **Clear task specification** — imperative voice, concrete outcome
2. **Output format as template** — literal skeleton, not description
3. **Constraints over suggestions** — absolute language
4. **Contrastive examples** — good + bad with explanations
5. **Primacy-recency positioning** — critical info at start and end
6. **Context separation** — user data distinct from instructions

These are model-specific:

| Pattern | Claude | GPT | Gemini |
|---------|--------|-----|--------|
| Optimal structure | XML tags | Markdown / system msg | JSON schema |
| Prefill/priming | Assistant prefill | n/a | n/a |
| Reasoning control | Direct thinking | CoT / o1 mode | CoT |
| Output format | XML + contract | response_format | JSON schema |
| Long context | Good to 200K | Good to 128K | Excellent to 1M+ |
| Multimodal | Good | Good | Excellent |

## Connects To
- 02: Archetypes adapted for each model's strengths
- 03: Techniques that work differently across models
- 05: Model-specific anti-patterns to avoid
