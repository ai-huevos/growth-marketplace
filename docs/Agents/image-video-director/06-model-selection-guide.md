# Model Selection Guide: Which Model for Which Use Case

## Overview
Decision framework for routing user intent to the right model. Based on model strengths, parameter availability, and practical performance patterns. Updated March 2026.

## Image Model Selection

### When to Route to Flux 2
Best for: complex multi-subject scenes, JSON-structured prompts, brand-accurate colors (HEX), automated pipelines, culturally specific scenes (multilingual prompting), text-in-image, physics-first optical signatures.
Control surface: seed, guidance (Flex), steps (Flex), prompt upsampling, multi-image references (up to 8).
Variants: Pro (highest quality, 3-5s), Flex (tunable guidance/steps), Klein (sub-second, consumer hardware, Apache 2.0).
Avoid when: user needs negative prompts (not supported) or needs deterministic re-renders without seed parameter.

### When to Route to GPT Image 1.5
Best for: instruction-following workflows, iterative edit loops (up to 16 images in edit endpoint), transparent backgrounds, photorealism via camera/lighting language, brand/logo preservation, marketing asset iteration.
Control surface: quality levels, moderation levels, background transparency, edit mode with masks, streaming with partial images.
Key advantage: 4x faster than GPT Image 1.0, 20% cheaper, best edit-loop workflow in the market.
Avoid when: user needs seed control, pixel-level precision, guidance tuning, or negative prompts.

### When to Route to Nano Banana Pro
Best for: multi-modal workflows with Google ecosystem, text-in-image (with Thinking mode), high-resolution outputs (up to 4K), wide aspect ratio options (including 21:9), complex instruction following.
Control surface: aspect ratios (10 options), image size (1K/2K/4K), multi-image input (up to 14 on Pro), Thinking mode for complex prompts.
Avoid when: user needs negative prompts, seed, or guidance control.

### When to Route to Nano Banana 2
Best for: fast generation at Pro-tier quality, real-time web grounding (brand/product/location accuracy), storyboarding with character consistency (up to 5 characters, 14 objects).
Control surface: same as Pro plus Google Search grounding tool.
Key advantage: Flash-tier speed and cost with Pro-tier output quality.
Avoid when: user needs seed control or offline-only generation.

### When to Route to Midjourney v7
Best for: artistic/stylized imagery, draft-mode rapid iteration, personalized aesthetic (--personalize), voice-prompted creative exploration, anime/illustration (Niji 7).
Control surface: --ar, --stylize, --chaos, --weird, --quality, --style raw, --personalize, Draft Mode.
Key advantage: strongest aesthetic fingerprinting, fastest creative iteration via Draft Mode (half cost, 10x speed).
Avoid when: API integration needed (no public API), paragraph-style instruction following, precise technical control (aperture/ISO ignored).

### When to Route to Seedream 4.5
Best for: batch multi-image generation, prompt optimization modes, large output sizes (2048x2048 default), text-in-image, high benchmark scores.
Control surface: batch mode, prompt optimization, reference images.
Note: Seedream 5.0 reportedly launched February 2026 with physics-aware generation.
Avoid when: user needs fine-grained control (guidance, steps, seed not in accessible docs).

### When to Route to Ideogram 3.0
Best for: text-in-image (best-in-class typography), structured layouts, infographics, UI mockups, poster design.
Key advantage: most accurate text rendering of any image model.
Avoid when: user prioritizes photorealism or complex multi-subject scenes.

### When to Route to Z-Image
Base variant: supports negative prompts. Good for defect reduction workflows.
Turbo variant: faster, no negative prompt support. Good for rapid iteration with positive-only prompting.
Both: expose seed for reproducibility.

### When to Route to Kling Image 3.0
Best for: reference-based generation with @Image syntax, character consistency across series, high-resolution output (2K/4K), blending multiple references (up to 10).
Avoid when: strict schema validation required (provider-dependent).

### When to Route to Wan 2.2 Image
Best for: ComfyUI-based workflows, seed-controlled iteration, single-delta editing.
Control surface: seed, full ComfyUI node ecosystem.

## Video Model Selection

### When to Route to Sora 2
Best for: longer high-quality clips (15-25 seconds), multi-shot instruction following, physics-accurate interactions, character cameos, native audio with dialogue/SFX.
Duration: 15-25 seconds. Size: fixed options via parameter.
Strengths: strong cinematography literacy, excellent physics simulation, long clips with maintained instruction following, native audio, extensions for continuation.
Weaknesses: no timestamped blocks, duration/resolution must be set via parameters only.

### When to Route to Veo 3.1
Best for: timestamped pacing control, first/last frame interpolation, native audio generation, vertical video (9:16 for YouTube Shorts), high-resolution (up to 4K at 8s), scene extension for 60+ second sequences, character consistency with up to 3 reference images.
Duration: 4, 6, or 8 seconds (extendable to 60+). Supports negative prompt (descriptors only).
Strengths: explicit pacing control, 4K upscaling, native vertical, single-pass audio-visual generation, physics simulation.
Available in: Gemini app, YouTube Shorts, Flow, Gemini API, Vertex AI, Google Vids.
Weaknesses: base clip limited to 8s (requires extension for longer content).

### When to Route to Kling 3.0
Best for: multi-shot storyboards (up to 6 shots), longer takes (up to 15s), shot-reverse-shot, coverage grammar, native multi-language audio with voice reference, character consistency, 4K/60fps.
Control surface: cfg_scale, negative_prompt, multi-shot, element references, voice reference.
Strengths: strongest character consistency across shots, coverage terms understood natively, multi-language dialogue, 5-minute generation for avatar content.
Weaknesses: no official API schema, provider-dependent.

### When to Route to Seedance 2.0
Best for: narrative arcs within single clips (~20s), multi-shot storytelling with beginning/middle/end, multimodal references (image + video + audio), dual-channel audio, motion copying from reference video.
Strengths: best at complete narrative arcs and "directorial thinking," strong single-scene reference adherence, multi-track audio.
Weaknesses: no public API schema, parameter documentation sparse, interface-dependent.

### When to Route to Grok Imagine 1.0
Best for: rapid video generation at scale (1.2B+ videos/month), declarative prompts, synchronized audio, scene extension for multi-clip sequences.
Duration: up to 15 seconds at 720p.
Strengths: native audio, scene extension, $0.05/second pricing.
Weaknesses: 720p max resolution, shorter duration than competitors, limited documentation.

### When to Route to Runway Gen-4.5
Best for: character consistency across scenes (benchmark leader), fast turbo generation, positive-only prompting workflows.
Gen-4 Turbo: 10-second clips in ~30 seconds, 5 credits/second.
Strengths: character/style/object consistency, fast iteration.
Weaknesses: no negative prompt support (may cause opposite results), no native multi-shot.

### When to Route to Midjourney Video
Best for: animating existing Midjourney images, 5-21 second clips, artistic/stylized motion.
Integrates with Midjourney v7's Draft Mode and personalization.
Weaknesses: limited to Midjourney platform, no API.

## Quick Decision Matrix

### By Use Case
Product photography: GPT Image 1.5 (edit loops, brand preservation), Flux 2 (JSON structure, HEX colors), Nano Banana Pro (high-res 4K).
Fashion editorial: Flux 2 (multi-reference), Kling Image 3.0 (10 reference blend), GPT Image 1.5 (iterative).
Typography/poster: Ideogram 3.0 (best text), Flux 2 (with upsampling), Seedream 4.5 (strong text), GPT Image 1.5.
Cinematic still: Flux 2 (JSON + physics-first), GPT Image 1.5 (camera kit language), Midjourney v7 (artistic aesthetic).
Character consistency: Flux 2 (multi-reference by index), Kling Image 3.0 (10 references), Nano Banana 2 (5 characters, 14 objects).
Brand-accurate visuals: Nano Banana 2 (real-time grounding), GPT Image 1.5 (logo preservation), Flux 2 (HEX colors).
Rapid creative exploration: Midjourney v7 Draft Mode (half cost, 10x speed), Flux 2 Klein (sub-second).
Short cinematic clip: Sora 2 (15-25s, physics), Veo 3.1 (timestamped pacing, 4K).
Multi-shot narrative: Kling 3.0 (6 shots, 15s), Seedance 2.0 (narrative arc, 20s).
Long-form content: Veo 3.1 (scene extension, 60s+), Kling 3.0 (5-min avatar), Sora 2 (extensions).
Music video/emotional: Seedance 2.0 (dual-channel audio sync), Veo 3.1 (color script + native audio).
Product beauty shot: Veo 3.1 (negative prompt for defect control, 4K), Sora 2 (short controlled rotation).
Dialogue scene: Kling 3.0 (multi-language, voice reference, shot-reverse-shot), Veo 3.1 (quotes for dialogue).
Vertical/mobile content: Veo 3.1 (native 9:16), Kling 3.0 (via aspect ratio).
Quick social video: Grok Imagine 1.0 (fast, cheap at $0.05/s), Runway Gen-4.5 Turbo (30s generation).
