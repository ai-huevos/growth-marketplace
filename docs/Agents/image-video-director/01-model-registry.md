# Model Registry: API Schemas, Parameters, and Routing Data

## Overview
Technical specifications for every supported image and video generation model. Use this to generate valid JSON prompts with correct parameter names, value ranges, and format constraints. This is the ground truth for model routing. Last updated: March 2026.

## Image Models

### Nano Banana Pro (Google Gemini 3 Pro Image Preview)
Endpoint: POST /v1beta/models/gemini-3-pro-image-preview:generateContent
Input format: Gemini content envelope with parts array (text, inlineData).
Prompt field: contents[].parts[].text (natural language, no JSON structure required).
Aspect ratios: "1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9".
Image sizes: "1K", "2K", "4K" (uppercase K required). Output resolution is fixed per aspect ratio and size.
Reference images: Flash works best with up to 3 images, Pro supports 5 images with high fidelity and up to 14 total. Images sent as inlineData with mimeType and base64 data.
Unique features: Optional tool grounding (google_search) in same request. SynthID watermarking on all outputs. Advanced reasoning ("Thinking") mode for complex instruction following and high-fidelity text rendering.
No negative prompt field. No seed. No steps. No guidance parameter.
Negative constraints must be expressed as positive descriptions in the prompt text.
Source: https://ai.google.dev/gemini-api/docs/image-generation

### Nano Banana 2 (Google Gemini 3.1 Flash Image)
Released: February 26, 2026.
Model: gemini-3.1-flash-image. Delivers Pro-tier output quality at Flash-tier speed and cost.
Prompt field: Same Gemini content envelope as Pro.
Resolution: Scalable from 512px to 4K.
Reference images: Maintains character resemblance of up to 5 characters and fidelity of up to 14 objects in a single workflow.
Unique features: Google Search grounding for real-time web knowledge during generation (brand-specific, product-specific, location-accurate visuals). Faster than Pro with comparable quality.
Same parameter constraints as Pro: no negative prompt, no seed, no steps, no guidance.
Source: https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/

### GPT Image 1.5 (OpenAI)
Released: December 16, 2025.
Endpoint: POST https://api.openai.com/v1/images/generations
Model values: "gpt-image-1.5", "gpt-image-1", "gpt-image-1-mini".
Prompt: string, up to 32000 characters. Natural language, instruction-following style.
Sizes: "auto", "1024x1024", "1536x1024", "1024x1536".
Quality: "auto", "low", "medium", "high".
Background: "transparent", "opaque", "auto" (transparent requires png or webp output).
Output format: "png", "jpeg", "webp". Compression: 0-100 for jpeg/webp.
Count: n, integer 1-10.
Streaming: stream boolean, partial_images 0-3.
Moderation: "low" or "auto".
Edit endpoint: POST /v1/images/edits with images array (up to 16), optional mask, input_fidelity "high" or "low".
Key upgrades from 1.0: 4x faster generation, 20% cheaper, better image preservation across edits, stronger brand/logo consistency, improved dense text rendering, more expressive transformations.
No seed. No steps. No guidance. No negative prompt field.
Photorealism steers via camera, composition, and lighting terms, not quality incantations.
Source: https://developers.openai.com/api/reference/resources/images/methods/generate

### Flux 2 (Black Forest Labs)
Released: November 25, 2025.
Endpoints: POST https://api.bfl.ai/v1/flux-2-pro (also flux-2-flex, flux-2-klein-4b, flux-2-klein-9b). Async job model.
Prompt: string (required). Supports both natural language AND JSON-structured prompts for complex scenes.
Input images: input_image, input_image_2 through input_image_8.
Width/height: integer, minimum 64. Up to 4 megapixel resolution.
Seed: integer (for reproducibility).
Safety tolerance: integer 0-5 (strict to permissive).
Output format: "jpeg" or "png".
Webhooks: webhook_url, webhook_secret.
Flux 2 Flex additional parameters: prompt_upsampling (boolean, default true), guidance (number 1.5-10), steps (integer 1-50).
Flux 2 Klein: sub-second generation on consumer hardware, Apache 2.0 licensed (klein), unified generation and editing in one model. Released January 15, 2026.
No negative prompt field. Negative constraints must be expressed positively.
Supports HEX color control for brand accuracy.
JSON structured prompting recommended for multi-subject scenes: {"scene":..., "subjects":[...], "lighting":..., "camera":...}
Built-in typography model for reliable text-in-image rendering.
Understands multiple languages. Native-language prompting recommended for culturally authentic results.
Improved handling of subsurface scattering, specular highlights, and material response.
Generates high-quality images in 3-5 seconds (Pro). Klein generates in under 1 second.
Source: https://docs.bfl.ai/api-reference/models/

### Seedream 4.5 (ByteDance via Volcengine)
Released: December 2025.
Endpoint: Volcengine Ark/LAS operator interface, model "doubao-seedream-4.5".
Prompt field: prompts (array of strings).
Reference images: reference_images (None, string URL, or list of URLs).
Size: default "2048x2048", server supports "2K".
Watermark: boolean, default true.
Response format: "url" (expires 24h) or "b64_json".
Batch mode: sequential_image_generation "disabled" or "auto" with max_images.
Prompt optimization: optimize_prompt_options with mode "standard" or "fast" (version-dependent).
Exceptional text rendering capability for typography within images.
LM Arena leaderboard rank: #10, score 1147.
No negative prompt field documented. No seed, steps, or guidance in accessible docs.
Note: Seedream 5.0 reportedly launched February 2026, focusing on physics-aware generation.
Source: https://www.volcengine.com/docs/6492/2221472?lang=zh, https://seed.bytedance.com/en/seedream4_5

### Midjourney v7
Released: April 3, 2025. Default since June 17, 2025.
Platform: Discord bot + web interface (midjourney.com). No public REST API.
Architecture: Completely new architecture from v6. "Much smarter with text prompts."
Modes: Turbo (2x cost, fastest), Standard (optimized later), Draft (half cost, 10x speed), Relax.
Key parameters: --ar (aspect ratio), --stylize (0-1000, prompt adherence vs creativity), --chaos (0-100), --weird (0-3000), --quality (0.25-2), --style raw (reduces creative auto-pilot), --personalize (default on in v7).
Draft Mode: conversational prompt bar on web, swap elements naturally ("replace the cat with an owl").
Voice prompting: speak to alpha website, model generates text prompts from audio.
Personalization: on by default, unlock required (~5 minutes), unique aesthetic fingerprint per user.
Video generation: launched June 2025, 5-21 second animated clips from static images.
Niji 7: launched January 9, 2026. Major coherency boost for anime/illustration.
Prompting style: SHORT high-signal phrases with reference images work best. Paragraph-style prompts dilute signal. Camera/lighting terms work but aperture/ISO/shutter speed are largely ignored.
Source: https://docs.midjourney.com, https://updates.midjourney.com/v7-alpha/

### Ideogram 3.0
Best-in-class text rendering and typography. Recommended when accurate text in images is the primary requirement.
Supports detailed font, size, placement, and styling specifications in prompt text.
Strong at structured layouts, infographics, and UI mockups.
Source: Third-party benchmarks and community testing.

### Recraft V4
Released: February 17, 2026. Ground-up rebuild emphasizing design taste and production-ready output.
Native vector SVG output: real paths, structured layers, clean geometry. Only model producing editable SVG.
V4: ~10 seconds, lower cost (everyday iteration). V4 Pro: ~28 seconds, print-ready resolution.
Exploration Mode: surfaces inventive directions from a single prompt.
Readable text generation for infographics, menus, signage, packaging.
Aspect ratios: 1:1, 16:9, 9:16, 4:3, 3:4.
Built-in Prompt Enhancer tool.
Pricing: raster $0.04/image, vector $0.08/image.
#1 on HuggingFace image generation benchmarks for logos/vectors.
Source: https://www.recraft.ai/blog/introducing-recraft-v4-design-taste-meets-image-generation

### Qwen Image 2 (Alibaba)
Excels at text rendering and structured layouts.
Good alternative for typography-heavy tasks.
Source: https://fal.ai/learn/tools/how-to-use-qwen-image-2

### Z-Image (Alibaba Tongyi Lab)
Architecture: 6B-parameter Scalable Single-Stream Diffusion Transformer (S3-DiT).
Z-Image Base: released January 27, 2026. Non-distilled foundation model for fine-tuning. Supports negative_prompt. Short negative lists effective.
Z-Image Turbo: sub-second inference on H800 GPUs, fits 16GB VRAM consumer devices. Does NOT support negative prompts.
Z-Image Omni-Base: generation and editing in one model.
Z-Image Edit: instruction-following image editing.
Bilingual text rendering (Chinese and English).
Both expose seed parameter for reproducibility.
#1 open-source model on Artificial Analysis Text-to-Image Leaderboard (#8 overall).
Source: https://github.com/Tongyi-MAI/Z-Image, https://z-image.ai/

### Kling Image 3.0 (Kuaishou)
Released: February 2026 as part of Kling 3.0 launch.
Supports 2K and 4K ultra-high-definition output.
Multi-image reference: blend features from up to 10 reference images while preserving unique characteristics.
Image 3.0 Omni: unified multimodal variant with text, image, and video understanding.
Third-party implementations support @Image1/@Image2 reference syntax.
Supports negative_prompt in some deployments but overlong negatives mute output.
Treat as provider-adapter dependent.
Source: https://ir.kuaishou.com/news-releases/

### Wan 2.2 Image (Alibaba)
Creator schema not publicly available. Provider schemas exist.
Seed parameter available and recommended for reproducible iteration.
Best used in ComfyUI workflows with manual seed control.
Single-delta editing workflow: fix seed, change one thing at a time.
Source: https://stable-diffusion-art.com/wan-2-2-text-to-image/

## Video Models

### Sora 2 (OpenAI)
Endpoint: POST https://api.openai.com/v1/videos
Models: "sora-2" (speed/flexibility) and "sora-2-pro" (higher quality, longer duration).
Prompt: string, 1-32000 characters.
Duration: sora-2: "4", "8", "12" seconds. sora-2-pro: "10", "15", "25" seconds. Set via parameter, NOT in prompt text.
Sizes: 480x480, 720x720, 1080x1080, 1280x720, 1920x1080. Set via parameter.
Aspect ratio: "16:9", "9:16", "1:1".
Input reference: image file for first-frame guidance (input_reference field).
Extensions endpoint: continue/remix existing generated video. Character cameos supported.
Native audio generation: synchronized dialogue, sound effects, ambient noise, music.
Better physics simulation: realistic rebounds, interactions, world state persistence.
Multi-shot instruction following: intricate instructions spanning multiple shots with accurate world state.
Pricing: $0.30/sec (720p), $0.50/sec (1024p).
Response: job ID with status polling (GET /videos/{video_id}) or webhooks.
Prompt is responsible for: subjects, camera, lighting, motion, audio. Container attributes (resolution, duration) are parameter-only.
Source: https://developers.openai.com/api/reference/resources/videos/methods/create

### Veo 3.1 (Google DeepMind)
SDK: generate_videos(model="veo-3.1-generate-preview", prompt=..., config=GenerateVideosConfig(...))
REST: POST /v1beta/models/veo-3.1-generate-preview:predictLongRunning
Aspect ratio: "16:9" (default) or "9:16" (native vertical for YouTube Shorts, mobile).
Resolution: "720p" (default), "1080p" (8s only), "4k" (8s only, via upscaling). State-of-the-art 4K upscaling.
Duration: "4", "6", "8" seconds. "8" required for extension, reference images, 1080p/4k.
Negative prompt: supported via negativePrompt string. Use comma-separated descriptors, NOT "no/don't" phrasing.
Seed: available but not guaranteed deterministic.
Reference images: up to 3 (Veo 3.1 only). Maintains character appearance across scenes.
First/last frame: image plus lastFrame for controlled interpolation.
Scene Extension: create longer videos (60+ seconds) by generating clips that connect to previous video's final second.
Native audio generation: natural conversations, synchronized SFX, ambient soundscapes, music. Single-pass unified audio-visual generation.
Timestamped shot blocks supported for pacing control.
Physics simulation: motion, fluid dynamics, lighting behavior, object interaction.
Available in: Gemini app, YouTube Shorts, Flow, Gemini API, Vertex AI, Google Vids.
Source: https://ai.google.dev/gemini-api/docs/video

### Kling 3.0 (Kuaishou)
Released: February 4, 2026.
Duration: up to 15 seconds. Multi-shot sequences: up to 6 shots within a single clip.
Resolution: native 4K, 60 FPS.
Native audio: dialogue, narration, ambient sound, SFX synthesized alongside visual output in single pass. Multi-language, multi-dialect, multi-accent support. Voice reference (upload video for consistent voices).
Multi-shot: dynamically adjusts camera angles and shots. Shot-reverse-shot dialogues, cross-cutting, voice-over.
Subject consistency: "universe-strongest consistency" across camera angles, shot transitions, scene changes, even with voice synchronization.
Element references for subject consistency. @Video1 syntax for reference videos.
API parameters: multi_shot (boolean), multi_prompt (array of scene objects with prompt and duration, min 3s per shot), image_list (reference images with type "first_frame" or "end_frame"), cfg_scale (0-1, default 0.5), negative_prompt, motion_intensity (0.1-1.0).
Motion Brush: paint motion paths directly onto source images.
Coverage grammar (shot-reverse-shot, tracking shot, etc.) explicitly understood.
Pricing: ~$0.029/sec via third-party providers (cheapest major model). Free tier with 66 daily credits.
Kling 3.0 Omni: unified multimodal variant.
Text-to-video, image-to-video, multi-shot storyboarding, reference-based generation.
For long-form avatar consistency, Kling 3.0's 5-minute generation is unmatched.
Source: https://ir.kuaishou.com/news-releases/, third-party providers (fal.ai)

### Seedance 2.0 (ByteDance)
Released: February 10, 2026.
Duration: approximately 20 seconds with temporal consistency.
Resolution: 1080p.
Architecture: unified multimodal audio-video joint generation. Supports text, image, audio, and video inputs.
Multi-Shot Narrative: define "Shot 1", "Shot 2", "Shot 3" etc. Model interprets as logical narrative sequence. Generate short stories with introduction, development, climax in one generation cycle.
Audio: dual-channel multi-track (BGM, ambience, voiceover) aligned to visual rhythm.
Multimodal reference system: images, video, audio with @-style asset referencing.
"Directorial thinking" prompt style. Unusually responsive to complete narrative beats.
Strong at single-scene reference adherence.
Treat parameters as interface-dependent. Generate prompts that degrade gracefully without references.
Source: https://seed.bytedance.com/en/seedance2_0

### Grok Imagine 1.0 (xAI)
Updated: February 2, 2026 (version 1.0).
Duration: up to 15 seconds at 720p with synchronized audio.
Pricing: $0.05 per second via API.
Text-to-video: describe scene in plain language.
Image-to-video: animate still image with motion, atmosphere, camera movement.
Scene extension: carries forward scene context from last frame for multi-clip sequences.
Volume: 1.245 billion videos generated in last 30 days.
Future roadmap: 30-minute video by late 2026, full-length films by 2027.
Keep prompts declarative and concise. Shorter beat lists work best.
Source: https://x.ai/news/grok-imagine-api

### Runway Gen-4.5
Runway's latest flagship. Available for all paid plans.
Leads benchmarks for character consistency across scenes.
Gen-4 Turbo: 10-second clips in ~30 seconds (5x faster than standard Gen-4). 5 credits/second.
Gen-4 Image: also available (Gen-4 Image Turbo for all users).
Enhanced prompt adherence and motion realism. Character, style, and object consistency.
Positive-only prompting: negative phrasing not supported and may cause opposite results. Use positive-phrasing rewrite pattern.
Source: https://runwayml.com/changelog

### Midjourney Video
Launched: June 2025.
Generates 5-21 second animated clips from static Midjourney images.
Integrates with Midjourney v7's Draft Mode and personalization features.
Source: https://docs.midjourney.com

## Schema Validation Strategy
Models with strict schemas (GPT Image 1.5, Sora 2, Nano Banana Pro/2, Veo 3.1, Flux 2): generate validated JSON with enum checks before output.
Models without creator schemas (Kling Image 3.0, Kling 3.0, Z-Image, Wan 2.2, Seedance 2.0, Grok Imagine): pin to a specific provider endpoint. Use passthrough maps for rapid updates. Flag when operating on third-party schemas.
Platform-only models (Midjourney v7, Midjourney Video): no API. Generate prompt text with parameter flags (--ar, --stylize, etc.).
