# Image Prompting Techniques

## Overview
Battle-tested prompting patterns for current-gen image models (March 2026). The landscape has shifted: modern models are instruction-followers, not keyword-parsers. Paragraph-style natural language beats tag-stacking for GPT Image 1.5 and Nano Banana. JSON structure beats prose for Flux 2 multi-subject scenes. Midjourney v7 prefers short, high-signal phrases. Know your model.

## Directive Stack: Subject First, Then Constraints, Then Look
Put the non-negotiable subject and identity first. Then add hard constraints (framing, spatial layout). Then the aesthetic layer. Earlier prompt elements receive stronger weight in Flux 2 and Seedream 4.5.
Write composition as a simple spatial map: "foreground/midground/background", "left/right", "centered", "negative space." This forces layout compliance instead of letting the model invent one.
Example: "A red fox with a torn left ear, standing still, looking directly at camera. Foreground: snow drift with paw prints. Midground: fox centered. Background: dark pine trees, light fog. Natural wildlife photo, soft dawn light, muted palette, shallow depth of field."
Best for: Flux 2, Seedream 4.5, GPT Image 1.5, Z-Image Turbo. Photoreal portraits/products, cinematic stills.

## Camera-Kit Style Capsule
Add a compact "camera kit" block (lens, aperture, light direction, texture cues) and reuse it verbatim across a series to lock style. For natural photorealism, explicitly request micro-textures (pores, fabric wear) and avoid polished retouching language which pushes outputs toward AI beauty-ad aesthetics.
Model-specific behavior: GPT Image 1.5, Flux 2, Seedream 4.5, Veo 3.1 respond strongly to aperture and lens specs. Midjourney v7 largely ignores shutter speed, ISO, and specific aperture values but responds to lens focal length and named camera bodies.
Example: "Photoreal candid portrait, 35mm film look, 50mm lens, f/1.8. Soft overcast daylight, slight underexposure, natural skin pores, subtle grain, no beauty retouching. Handheld feel, shallow depth of field, background falloff with bokeh."
Best for: GPT Image 1.5, Flux 2, Seedream 4.5, Nano Banana Pro. Editorial, documentary, cinematic.

## JSON Structured Prompts for Complex Scenes
Switch from prose to JSON when you need multi-object compliance and deterministic prompt generation. Flux 2 explicitly supports JSON-formatted prompts with fields for scene, subjects, lighting, composition, camera. Reduces ambiguity and attribute leakage ("who's wearing what").
Treat each subject as an object with its own attributes and spatial role. Bind colors as hex codes inside the object they belong to, not floating in the prompt.
Example: {"scene":"late-night ramen bar, rain outside","subjects":[{"id":"A","type":"chef","description":"mid-30s, white apron, focused expression","position":"left third, foreground"},{"id":"B","type":"customer","description":"mid-30s, dark coat, smiling","position":"right third, midground"}],"lighting":"warm tungsten practicals + cool blue neon spill","camera":{"shot":"medium-wide","lens":"35mm","aperture":"f/2.0","depth_of_field":"shallow"}}
Best for: Flux 2 (Pro/Flex/Klein). Complex cinematic scenes, product layouts, automated pipelines.

## Typography as Data
Quote every in-image text string. Specify placement and font intent. Constrain "no extra text." Quoted strings plus explicit placement make text mandatory rather than decorative.
Model ranking for text rendering (March 2026): Ideogram 3.0 (best), Flux 2 (strong with upsampling), Seedream 4.5 (strong), GPT Image 1.5 (improved in 1.5), Nano Banana Pro (good with Thinking mode), Qwen Image 2 (good at structured layouts), Midjourney v7 (improved but still inconsistent).
Keep text under 25 characters for best results. Longer strings degrade across all models.
Guidance scale 4.0-5.0 range improves text fidelity on models that expose it.
Example: "Minimalist tech poster on textured off-white paper. Large headline at top: 'TYPOGRAPHY' in bold extra-condensed sans-serif, retro screen-printed texture. Small subheading bottom-right: 'SPRING 2026', thin sans-serif, dark ink. No other text, no logos, no watermark."
Best for: Ideogram 3.0, Flux 2, Seedream 4.5, GPT Image 1.5, Nano Banana Pro.

## Model-Aware Negative Control
Z-Image Turbo, Flux 2, GPT Image 1.5, Nano Banana Pro/2, Midjourney v7 do NOT support negative prompts. Express exclusions as positives.
Z-Image Base and Wan 2.2 support negative_prompt, where a short reusable list cuts common failures. Overlong negatives mute output.
Kling Image 3.0 supports negative_prompt in some deployments but overlong negatives mute output.
Runway Gen-4.5: negative phrasing not supported and may cause opposite results. Positive-phrasing rewrite pattern required.
Positive-only rewrite pattern: "clean blank background, crisp focus throughout, uncluttered scene, plain surfaces with no writing."
Negative field pattern (when supported): "no text, no watermark, no logo, no signature, no extra hands, no extra limbs, no border."
Best for: Z-Image Base (negative field), Wan 2.2 (negative field), Kling Image 3.0 (negative field). Positive rewrites for all others.

## Multi-Reference Roles and Invariants
Assign each reference image a role (identity, outfit, style, lighting), then spell out what must stay invariant. Flux 2 supports multi-image reference by index (up to 8). Kling Image 3.0 blends up to 10 references. Nano Banana 2 maintains resemblance of up to 5 characters and fidelity of up to 14 objects.
GPT Image 1.5: edit endpoint accepts up to 16 images with better brand/logo preservation than 1.0.
Example: "Using Reference Image 1 (the model) and Reference Image 2 (the silk gown): Generate a high-end fashion editorial. Preserve the model's facial features and skin tone exactly. Preserve the gown's fabric texture exactly. Change only environment: desert at golden hour, 16:9, cinematic color grade."
Best for: Flux 2, Nano Banana Pro/2, Kling Image 3.0, GPT Image 1.5. Fashion, character series, compositing.

## Seed-Based Iteration
Treat seed as version control. Fix it for the base, vary systematically for exploration, refine with single-delta edits. Once you have a good seed, edit one thing at a time instead of rewriting the whole prompt.
GPT Image 1.5: no seed support, but edit endpoint preserves composition/lighting through iterative edits (use edit loops instead).
Example: prompt + seed: 124500. Variation seeds: 124501, 124502. Edit pass: "Keep everything the same. Increase contrast slightly and warm the key light."
Best for: Wan 2.2 (ComfyUI), Flux 2 (Diffusers/API), Z-Image. Any workflow needing repeatability. GPT Image 1.5: use edit endpoint instead.

## Prompt Upsampling with Guardrails
Some pipelines auto-expand prompts via LLM before generation. Flux 2 exposes caption_upsample_temperature (recommended: 0.15). The key is controlling what the enhancer adds. Unconstrained expansion adds culturally loaded specifics that the image model overweights.
Guard the upsampler: "Do not introduce new entities, brands, logos, flags, weapons, or extra text. Do not use lists of clothing items. Preserve intended medium. Add only: composition, lighting direction, lens/f-stop, material/texture cues, and spatial depth cues."
Best for: Flux 2 with upsampling enabled. Complex reasoning-heavy tasks, text rendering, diagram-like generations.

## Syntax-Based Spatial Steering
Active vs passive voice changes where the "agent" appears in generated images. Tested across 4000 images on FLUX and DALL-E 3. Active sentences place the agent on the left significantly more. Passive sentences shift the agent rightward (odds ratio 4.12).
Use this to nudge blocking alongside explicit spatial wording.
Example: "The tourist is photographed by the street performer." (Passive = street performer framed right.) Add camera and lighting after the syntax manipulation.
Best for: Flux 2, GPT Image 1.5. Multi-subject compositions where spatial control matters.

## Native-Language Prompting for Cultural Fidelity
Flux 2 recommends prompting in the target culture's language for more authentic local detail (markets, architecture, atmosphere). Put the scene description in the target language, append technical tail (lens, exposure, composition) in English to keep cinematography control.
Nano Banana 2 with Google Search grounding can incorporate real-time location-specific details.
Example: Thai morning market description in Thai + "Documentary photo, eye level, 35mm lens, soft morning sunlight, natural skin texture, gentle film grain."
Best for: Flux 2, Nano Banana 2 (with grounding). Any culturally specific scene where English defaults flatten local detail.

## Physics-First Optical Signatures
Go beyond "85mm f/1.8 cinematic" by specifying optical artifacts from pro photography datasets: circular polarizers, anamorphic flare characteristics, Rembrandt lighting, material-light interactions (subsurface scattering, specular highlights, fabric reflectance).
Pick one dominant optical signature, one dominant lighting design, one camera spec. Do not stack contradictory physics.
Example: "Shot through a circular polarizer lens, deep saturated cerulean sky, reduced reflections on skin, crisp edges, zero haze. Full-frame, 35mm, f/2.8, natural high-noon sunlight, realistic skin with pores, accurate fabric weave, gentle film grain."
Best for: Flux 2, GPT Image 1.5, Seedream 4.5. Outdoor editorial, product photography, cinematic stills.

## Authentic Imperfection Prompting
The 2026 shift: audiences and algorithms favor authentic, human-centric aesthetics over AI-polished perfection. Explicitly prompt for imperfections that signal real capture.
Add: slight underexposure, natural grain, handheld micro-shake, visible pores, fabric wear, environmental dust, uneven practical lighting. Avoid: "perfect", "flawless", "ultra-detailed", "4K", "masterpiece."
This technique fights the uncanny "AI look" by pulling from photojournalism and documentary training clusters rather than stock photography.
Example: "Candid street portrait, slight motion blur on hands, grain visible in shadows, one eye slightly squinted against the sun, wrinkled linen shirt, scuffed leather bag strap."
Best for: GPT Image 1.5, Flux 2, Nano Banana Pro. Editorial, lifestyle, documentary, social media content.

## Iterative Edit Loops (GPT Image 1.5)
GPT Image 1.5's edit endpoint preserves lighting, composition, and facial likeness across edits. Use this for refinement instead of regenerating from scratch.
Workflow: generate base image, then use edit endpoint with natural language instructions to modify specific elements. Up to 16 reference images in edit mode.
Stronger brand/logo preservation makes this ideal for marketing asset iteration.
Example flow: Generate product shot. Edit: "Move the product 2 inches left." Edit: "Change background to matte black." Edit: "Add subtle rim light from the right."
Best for: GPT Image 1.5. Product photography, marketing assets, brand consistency, iterative refinement.

## Real-Time Grounding (Nano Banana 2)
Nano Banana 2 supports Google Search grounding during generation. This means the model can access current web information about brands, products, locations, and events while generating.
Use case: brand-accurate product visuals, location-specific scenes, current-event imagery without reverting to stock photography.
Enable google_search tool in the request. Describe the real-world entity you want accuracy for.
Best for: Nano Banana 2. Brand work, location photography, product catalogs with real-world accuracy.
