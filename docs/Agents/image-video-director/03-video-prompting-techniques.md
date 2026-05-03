# Video Prompting Techniques

## Overview
Practitioner and edge-level techniques for AI video generation (March 2026). The 2026 breakthrough: native audio generation across all major models, multi-shot storyboarding in a single generation, and durations reaching 15-25 seconds. The core principle remains: treat the prompt like a shot list, not a description. Models are strongest when given filmable constraints: one shot's framing, one camera behavior, one subject action, a clear timeline. But now you can also script dialogue, sound effects, and music directly.

## Cinematography-First Camera Language
Put camera framing and movement in the first clause, then subject, then action. Models parse filmmaker vocabulary best: "crane shot," "tracking shot," "over-the-shoulder," "handheld," "dolly zoom," "arc shot." Add lens and depth-of-field when focus behavior matters.
2026 update: camera specifications now take priority in prompt interpretation across Veo 3.1, Kling 3.0, and Sora 2. Professional vocabulary (dolly, crane, orbit, tracking) translates to distinct operations with appropriate parallax and perspective shifts.
Pitfall: Stacking multiple moves ("dolly + pan + zoom + crane") causes floaty, game-like camera. One move per shot.
Example: "Crane shot starting low on a lone hiker and ascending high above the ridge."
Works across: Sora 2, Veo 3.1, Kling 3.0, Grok Imagine 1.0, Seedance 2.0, Runway Gen-4.5, Midjourney Video.

## One Camera Move Plus One Subject Action in Beats
Constrain each shot to a single camera behavior and a single subject action. Express action as beats (counts, pauses, "final second") so motion fits the available seconds.
Pitfall: "Actor walks across the room" is underspecified. The model guesses pace, path, camera relationship. That causes drift, weird gait, jump cuts.
Example: "Actor takes four steps to the window, pauses, and pulls the curtain in the final second."
Best for: Sora 2, Kling 3.0, Seedance 2.0.

## Timestamped Shot Blocks for Pacing
When the system supports it, assign actions to explicit time ranges. Each time block is a miniature shot card: framing, action, SFX, emotion.
Pitfall: Too many shots for too little runtime forces rushed transitions (smeary crossfades, frantic camera snaps). Give each beat enough seconds to physically happen.
Example: "[00:00-00:02] Medium shot, explorer pushes aside a large jungle vine to reveal a hidden path."
Best for: Veo 3.1, Seedance 2.0, Kling 3.0.

## Multi-Shot Storyboarding (2026 Breakthrough)
Kling 3.0 and Seedance 2.0 now support native multi-shot generation in a single prompt. Define shots explicitly: "Shot 1:", "Shot 2:", etc. The model interprets these as a logical narrative sequence with automatic camera angle adjustments, shot transitions, and continuity.
Kling 3.0: up to 6 shots within 15 seconds. Supports shot-reverse-shot dialogues, cross-cutting, and voice-over natively.
Seedance 2.0: multi-shot narrative with introduction, development, and climax in one generation cycle. Up to ~20 seconds.
Veo 3.1: Scene Extension for 60+ second sequences by chaining clips (each new clip connects to the final second of the previous).
Sora 2: Extensions endpoint for continuation/remix of existing video.
Lock continuity with anchor strings (character descriptions, props) that repeat verbatim at each shot change.
Example: "SHOT 1: Wide establishing, detective enters dimly lit bar. SHOT 2: Over-the-shoulder, bartender looks up. SHOT 3: Close-up, detective slides a photo across the counter. SHOT 4: Reverse shot, bartender's eyes widen."
Best for: Kling 3.0 (native, up to 6 shots), Seedance 2.0 (narrative arcs), Veo 3.1 (via extension chaining).

## First-Frame and Last-Frame Keyframing
Provide a start image and end image, then prompt the camera path and transformation between them. Turns ambiguous prompts into solvable interpolation problems. Excellent for arc shots, reveals, match-cuts.
Pitfall: If endpoints disagree on identity, wardrobe, or geography, the model morphs instead of transitions. Make endpoints compatible or use identity references.
Best for: Veo 3.1, Seedance 2.0, Kling 3.0.

## Identity Anchoring with References
Use the model's strongest identity lock: input reference image (Sora 2), ingredient images (Veo 3.1, up to 3), element references (Kling 3.0, with voice reference), @Image reference (Seedance 2.0). Keep text prompt focused on motion, camera, and beats.
2026 update: Kling 3.0 achieves "universe-strongest consistency" across camera angles, shot transitions, and scene changes even with voice synchronization. Runway Gen-4.5 leads benchmarks for character consistency across scenes.
Pitfall: Changing phrasing for the "same" character across shots causes identity drift. Pushing too much action into a reference-anchored clip weakens the anchor.
Example: "She turns around and smiles, then slowly walks out of the frame."
Works across: Sora 2, Veo 3.1, Kling 3.0, Grok Imagine 1.0, Seedance 2.0, Runway Gen-4.5.

## Temporal Coherence Through Exact Descriptor Reuse
Pick a stable "identity sentence" for each subject (hair, wardrobe, distinctive traits) and reuse it verbatim across shots. For multi-character scenes, label characters consistently because models bind dialogue, faces, and actions to labels.
Pitfall: Switching between "the detective," "the man," "he," "the investigator" causes role swaps, merged faces, misassigned lines. Consistency beats poetry.
Example: "[Character A: Lead Detective, controlled serious voice]: 'Let's stop pretending.'"
Works across: Sora 2, Kling 3.0, Veo 3.1, Seedance 2.0.

## Reference Video for Motion and Camera
When language fails for a specific handheld feel, choreography, or transition rhythm, provide a reference clip. Tell the system what to extract: camera moves, choreography, pacing.
Seedance 2.0: @-referenced video. Kling 3.0 Omni: video_url as @Video1.
Pitfall: Without specifying what to copy, the model may pull style instead of motion. Watch format/resolution/fps constraints.
Example: "Follow @Video1's camera movements and transitions."
Best for: Seedance 2.0, Kling 3.0.

## Native Audio Generation (2026 Breakthrough)
Every major video model now generates synchronized audio. This changes prompting fundamentally: you must script what the audience hears, not just sees.
Sora 2: native audio (dialogue, SFX, ambient, music). Structure prompt with "what happens, how it looks, what we hear."
Veo 3.1: richer native audio. Use quotes for dialogue, describe SFX explicitly. Single-pass unified audio-visual generation.
Kling 3.0: multi-language, multi-dialect, multi-accent audio. Voice reference (upload video for consistent voices). Dialogue, narration, ambient, SFX in single pass.
Seedance 2.0: dual-channel multi-track (BGM, ambience, voiceover) aligned to visual rhythm.
Grok Imagine 1.0: synchronized audio at 720p.
Prompting pattern: Write audio as a sequence of diegetic events. Bind visible actions to sound events using timing language ("as," "immediately," "on the last word," "pause"). Keep dialogue short. Assign speaker identity plus delivery tempo and tone.
Add sync anchors: object impact, chair scrape, door latch. These reduce floaty motion.
Separate BGM, ambience, and SFX when model supports multi-track.
Example: "SFX anchor: ceramic mug taps the counter. [Character A, whispering]: 'I can't keep doing this.' Pause. [Character B, quiet]: 'Then don't.' As B says 'don't,' A flinches. Chair scrapes. Music: single low piano note enters after the pause."
Best for: Kling 3.0 (multi-language audio, voice reference), Veo 3.1 (unified audio-visual), Seedance 2.0 (dual-channel), Sora 2 (native audio).

## Guidance and Negative Prompts as Stability Controls
In deployments exposing cfg_scale (Kling 3.0): tune upward for stricter prompt adherence, downward for improvisation. Combine with short negative prompts for defect reduction.
Veo 3.1: supports negativePrompt but use comma-separated descriptors, NOT "no/don't" phrasing.
Sora 2: negatives can work but long lists get ignored. Keep brief.
Runway Gen-4.5: negative phrasing NOT supported. May cause opposite results. Use positive rewrites only.
Example: cfg_scale: 0.5 with negative_prompt: "blur, distort, low quality"

## Beat-Sheet Prompting (Narrative Arc in One Clip)
Write the clip as a chain of causal beats. Setup, disruption, adaptation, resolution. Add one "imperfection beat" (a slip, a hesitation) because models render story momentum better when there's a problem to solve. Tie the final beat to an unmistakable physical marker.
2026 update: Seedance 2.0 is now the clear leader for narrative arcs, able to generate complete story structures in one ~20 second clip.
Example: "Opening: pianist begins confidently. Disruption: hits one wrong note, winces. Adaptation: regains composure, melody returns. Climax: fast run lands perfectly. End: sustained final chord, small relieved smile, applause swells."
Best for: Seedance 2.0 (strongest, ~20s), Kling 3.0 (15s, 6 shots), Sora 2 (15-25s), Veo 3.1 (8s + extension). Grok Imagine: fewer beats, make each visually loud.

## Editor Brain: Coverage Grammar + Continuity Anchors
Write like a shot list. Label shots with recognized coverage terms (POV, profile, macro close-up, tracking shot, shot-reverse-shot). Lock continuity with a short "anchor string" per character/object repeated at each shot change.
Example structure: ANCHORS (character descriptions and props) then SHOT 1 (wide establishing) then SHOT 2 (shot-reverse-shot) then SHOT 3 (macro insert) then SHOT 4 (profile tracking). Each shot: one emotional beat, one primary action, one camera idea.
Best for: Kling 3.0 (native multi-shot up to 6), Seedance 2.0 (multi-shot), Veo 3.1 (via extension).

## Color Script + Performance Micro-Beats for Emotional Control
Mood is carried by lighting, palette, and micro-performance (eye-line, breath, posture), NOT by saying "sad" or "epic." Pick palette and light motivation first. Specify body broadcasting emotion (tight jaw, shallow breathing). Use a controlled shift in palette across the clip (blue isolation to warmer relief).
Every emotional word must be paired with something the camera can see.
Example: "Palette start: cool blue tones, high contrast. Woman sits alone, eyes glassy, jaw clenched. Micro-beat: she exhales, shoulders drop. Palette end: warmer orange light washes her face, expression softens."
Works across: Veo 3.1, Seedance 2.0, Sora 2, Kling 3.0.

## Scene Extension for Long-Form Content
For content exceeding single-generation limits, use scene extension/continuation features.
Veo 3.1: Scene Extension generates new clips connecting to the final second of the previous clip. Can exceed 60 seconds.
Sora 2: Extensions endpoint continues/remixes existing generated video.
Grok Imagine 1.0: carries forward scene context from last frame for multi-clip sequences.
Kling 3.0: for long-form avatar consistency, 5-minute generation supported.
Key: maintain identity anchors and stylistic consistency across extensions. Reuse the same descriptor strings.

## Negative Constraints as Exclusion Lists
Put constraints in a dedicated negative field when supported. Use comma-separated descriptors. Do NOT use "no/don't" phrasing in Veo's negative field. Runway Gen-4.5 does not support negative phrasing at all. Treat constraints as artifact prevention, not moral lectures.
Example negative field: "low quality, cartoon, warped geometry, distorted logo, extra hands, motion jitter, camera shake, illegible text"
Keep brief. Long exclusion lists often get ignored (especially Sora 2).

## Image-to-Video: Motion-Only Prompting
When starting from a reference image, do NOT describe the image contents in the prompt. The image IS the visual prompt. Your text prompt should focus exclusively on:
1. Camera movement and framing changes
2. Subject motion and action
3. Timing and pacing
4. Audio/sound events
Restating image contents reduces motion quality or creates unexpected results.
Example: "Slow push-in on subject's face, slight breeze moves hair, ambient city noise."
Works across: Sora 2, Veo 3.1, Kling 3.0, Grok Imagine 1.0, Seedance 2.0, Runway Gen-4.5.
