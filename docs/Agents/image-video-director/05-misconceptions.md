# Misconceptions and Anti-Knowledge in AI Image and Video Prompting

## Overview
Common beliefs that lead to bad prompts, wrong model routing, or wasted iterations. This document exists so the assistant can correct users who are operating on outdated or wrong assumptions. Updated March 2026.

## DALL-E 3 Is Still the Current OpenAI Image Model
Wrong. OpenAI positions GPT Image 1.5 as the recommended path. GPT Image 1.0 replaced DALL-E 3. DALL-E 2 and DALL-E 3 are deprecated, scheduled to stop being supported on 05/12/2026. Routing to DALL-E 3 is a bug. GPT Image uses an instruction-following workflow that is fundamentally different from generation-only prompting.

## Quality Incantations Upgrade Results
Wrong for all modern models. "Masterpiece, best quality, ultra-detailed, 8K, stunning, breathtaking" was meaningful for earlier diffusion models trained on tag-heavy datasets. Stability AI explicitly stated users no longer need qualifier terms for SDXL. GPT Image steers photorealism via camera, composition, and lighting terms, not quality spam. Flux 2 responds to structured scene descriptions, not quality keywords. Midjourney v7's architecture is "totally different" and is "much smarter with text prompts." Longer prompts dilute signal and increase internal contradictions.
Nuance: Some niche fine-tunes and tag-trained checkpoints still respond to these. That is a checkpoint-specific rule, not general best practice.

## Prompt Weighting Is Universal and Precise
Wrong. Weighting is implemented differently across ecosystems. Midjourney uses :: multi-prompts with negative weights and --no. Stable Diffusion UIs use parentheses/brackets with parser-specific behavior. AUTOMATIC1111 documents emphasis implementation changes that alter outputs even for saved seeds. ComfyUI has its own syntax. Flux 2, GPT Image 1.5, Nano Banana, Seedream, and Sora 2 have NO weighting syntax at all.
Impact: A prompt generator that emits the wrong weighting dialect silently poisons prompts and creates non-reproducible testing.

## If Midjourney Ignores Details, Add More Prompt Detail
Often wrong. Midjourney v7 has specific controls that override prompt length:
Standard Mode adds creative auto-pilot. Raw Mode reduces it for more literal, photo-like results.
--stylize trades prompt adherence for creative interpretation (0-1000).
--personalize applies a unique aesthetic fingerprint (on by default in v7).
Draft Mode is conversational and allows element swapping.
Impact: Prompt engineers waste iterations fighting the wrong lever (prompt length vs mode/version/stylize/personalize).

## Video Generators Support Negative Prompts Like Image Generators
Often wrong and model-specific. Runway Gen-4.5 explicitly states negative phrasing is not supported and may cause the opposite result. Veo 3.1 supports negative_prompt but requires comma-separated descriptors, not "no/don't" sentences. Sora 2: long negative lists get ignored, keep brief. Kling 3.0: supports cfg_scale and negative_prompt, but overlong lists mute output.
Fix: Translate "don't" constraints into "do" descriptions. "Locked camera" instead of "no camera movement."

## For Image-to-Video, Describe the Input Image in Detail
Wrong. When you provide an input image, the image IS part of the prompt. Reiterating image contents in high detail reduces motion quality or creates unexpected results because the visual information is already there.
Fix: Focus prompts on motion, camera relationship, timing, and audio. Minimal identifiers for subjects if needed.

## Sora Respects Resolution and Duration in Prompt Text
Wrong. Duration (seconds) and resolution (size) are API parameters only for Sora 2. Writing "4K" or "12 seconds" in the prompt text does not set these values. Same applies to Veo 3.1 (resolution/duration via config parameters).
Fix: Set container attributes via parameters. Use extension features for complex sequences.

## All Models Use the Same Prompting Style
Wrong. This is the biggest 2026 misconception. Each model family has a distinct prompting dialect:
GPT Image 1.5: paragraph-style natural language, instruction-following. Multi-turn edit loops.
Flux 2: JSON-structured prompts for complex scenes. Natural language for simple ones.
Midjourney v7: short, high-signal phrases. Reference images. Parameter flags (--ar, --stylize, --style raw).
Nano Banana Pro/2: natural language with Gemini content envelope. Thinking mode for complex instructions.
Seedream 4.5: prompt arrays with optimization modes.
Veo 3.1: timestamped blocks, ingredient references, negative descriptors (comma-separated only).
Kling 3.0: coverage grammar, multi-shot structure, @-reference syntax, cfg_scale tuning.
Seedance 2.0: "Shot 1/Shot 2" narrative structure, @-referenced assets, directorial thinking.
A prompt optimized for one model often underperforms on another.

## Camera Aperture and ISO Always Work
Depends on model. GPT Image 1.5, Flux 2, Seedream 4.5, Veo 3.1 respond to aperture, lens, and depth-of-field specifications. Midjourney v7 largely ignores shutter speed, ISO, and specific aperture values but responds to focal length and named camera bodies.
Fix: Know which technical terms your model actually interprets. Use focal length and named camera bodies as universal anchors. Reserve aperture/ISO for models that respond.

## Longer Prompts Are Always Better
Wrong. Midjourney v7 works best with short, high-signal phrases. GPT Image 1.5 handles long paragraph instructions well. Flux 2 benefits from structured JSON for complex scenes but concise text for simple ones. Longer prompts dilute signal and increase contradiction risk across all models.
Fix: Match prompt length to model dialect. Midjourney: short. GPT Image: paragraph. Flux 2: structured. Veo/Kling: shot-list format.

## Native Audio in Video Is Just Lip-Syncing
Wrong. 2026 models (Kling 3.0, Veo 3.1, Seedance 2.0, Sora 2) generate audio in a single pass alongside video pixels. This is not post-hoc lip-syncing bolted on after rendering. Dialogue, narration, ambient sound, SFX, and music are synthesized together, ensuring temporal alignment between visual and audio elements.
Impact: Prompts must now include audio direction (what the audience hears) alongside visual direction. Omitting audio from prompts means the model improvises sound, which may not match intent.

## Routing Logic Implications
Prompt advice is model-and-interface specific. Negative prompting rules differ sharply between image diffusion and video stacks. Prompting style (paragraph vs JSON vs short phrases vs shot-list) is model-dependent. Even within Stable Diffusion, weights are a UI parser feature with breaking changes. The safest default is to ask what model and control surface the user has (text-only vs image-to-video vs API vs web interface) and enforce model-native constraints.
