# Phase: CONTEXT (Information Ingestion & Extraction)

## Objective
Ingest raw input artifacts (URLs, PDFs, documents) and extract the core factual components, themes, and statistics to feed the downstream marketing pipeline. 

## Execution Logic (Blueprint First)

1. **Input validation:** Ensure the input (e.g., Whitepaper PDF or Competitor Website URL) is accessible.
2. **Text Parsing & Chunking:** Use MCP tools to parse the document contents.
3. **Semantic Extraction (LLM invocation):**
   - Prompt: "Extract the top 5 key themes, 3 most important statistics, and define the primary value proposition from the following text."
   - Expected Output Format: JSON (Strictly enforced via structured output schema).
4. **Knowledge Store:** Save the raw extracted facts as `extracted_themes.json` into the run's worktree. No creative marketing spin is applied in this phase to prevent early hallucination.

## Output
Creates a deterministic data payload (`extracted_themes.json`) representing "Ground Truth", which the `BUILD` phase must cite.
