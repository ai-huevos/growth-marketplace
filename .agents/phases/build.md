# Phase: BUILD (Marketing Content Generation)

## Objective
Take the `atomization_blueprint.md` and the extracted `extracted_themes.json` to generate specialized marketing copy.

## Execution Logic (Blueprint First)

1.  **Read Inputs:**
    - Load `atomization_blueprint.md`
    - Load `extracted_themes.json`
    - Active Suit Parameters (e.g., Brand Voice, Formatting Rules)

2.  **LLM Routing:**
    - For discrete items in the blueprint, call the LLM (`Model: Claude 3.7 Sonnet` / `Gemini 3 Pro`) with a highly specific sub-prompt.
    - Example: *Generate 1 LinkedIn post using Theme A, targeting Persona B. Apply [Brand Suit Rules].*

3.  **Iteration & Chunking:**
    - Do not generate all content in one massive prompt.
    - Loop through the blueprint sequentially.
    - Generate SEO blog post -> save to `drafts/seo_blog.md`
    - Generate Email 1 -> save to `drafts/email_1.md`
    - Generate Email N -> save to `drafts/email_n.md`
    - Generate Social -> save to `drafts/social_thread.md`

4.  **Formatting Constraints:**
    - Adhere strictly to the character limits for channels (e.g., Twitter < 280 chars, Meta Ads primary text < 125 chars).
    - Insert merge tags (e.g., `{{first_name}}`) for email templates.

## Output
Populates the `drafts/` directory with individual, ready-to-test assets.
