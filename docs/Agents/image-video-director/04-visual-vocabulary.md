# Visual Vocabulary: Translating Intent to Prompt Language

## Overview
Tested vocabulary for converting visual intent into prompt language that current-gen models actually respond to (March 2026). Every term listed has been validated against real model output. The core rule: named "vibes" are weak unless you cash them out into camera, light, color, and placement. The 2026 shift: models now crave context and texture rather than keyword lists. Write like a creative director briefing a cinematographer, not like tagging a database.

## Lighting Terms That Work

### Direction and Relation to Subject
back lit, side lit, silhouette. These reliably change output because they describe physical light placement.

### Quality and Modifier Language
diffused lighting, softbox key light, rim light, lens flare. Each maps to a recognizable lighting condition.

### Named Setups (Pair with Visible Cues)
"Rembrandt lighting setup" works when paired with "triangle of light on cheek, deep shadows on one side." Named setups alone are unreliable without physical evidence.

### Noir and Structured Shadows
Venetian lighting (also "venetian blind shadow patterns"), 10:1 lighting ratio, single-source street lamp. High contrast language that models can map to specific training clusters.

### Motivated Practicals
"practical lighting from warm bar lamps and neon signs," "lamp light coming in through windows." Naming the source object helps the model place the light logically in the scene.

### Combined Direction, Quality, and Temperature
"soft side lighting during the golden hour" carries direction, quality, and color temperature in a single phrase. This is the most efficient lighting prompting pattern: combine all three dimensions.

### Niche-Specific Vocabulary
Fashion: "soft beauty lighting, minimal shadows, catchlights in the eyes."
Product: "uniform and clean light, soft contour, blurred white background."
Architecture: "natural light flowing through large windows, creating geometric shadow patterns."

### What to Avoid in Lighting
"Dramatic lighting" without direction or fixture. Generic lighting adjectives do not steer output. "Stunning," "breathtaking," and "ultra-detailed" are wasted words. Describe lighting early in your prompt for better results. Negative phrasing for lighting constraints in Runway Gen-4.5 (may invert the result).

## Camera and Lens Terms That Work

### Focal Length and Lens Class
"35mm," "85mm," "100mm macro lens," "50mm lens." Works as an anchor for perspective and background separation.

### Aperture and Depth Control
"f/2.8," "f/11," "T-stop 2.0." Pair with intended effect: "shallow depth of field," "deep focus."
Model-specific: GPT Image 1.5, Flux 2, Seedream 4.5, Veo 3.1 respond to aperture specs. Midjourney v7 largely ignores shutter speed, ISO, and specific aperture values.

### Cinematic Optics
"anamorphic lens flares," "oval bokeh," "2.39:1 aspect ratio." These tap cinematic training distributions.

### Video Camera Movement and Shot Types
"low angle," "high angle," "overhead," "handheld," "tracking," "establishing wide," "macro cinematography," "FPV," "SnorriCam," "dolly," "crane," "orbit."
2026 update: professional cinematography vocabulary (dolly, crane, orbit, tracking) now translates to distinct operations with appropriate parallax and perspective shifts. Camera specs take priority in prompt interpretation.

### Named Camera Bodies as Style Anchors
"shot on Sony A7R IV," "shot on Arri Alexa Mini," "RED Komodo 6K," "Phase One XF IQ4," "Leica M11." These pull coherent visual clusters from training data. Do not mix incompatible capture metaphors (smartphone + Panavision anamorphics).

### What to Avoid in Camera
Contradictory technical constraints (mixing incompatible lens claims). Stacking ISO, shutter speed, and aperture in Midjourney v7 (ignored). Negative prompts in models that reject them (Flux 2, GPT Image 1.5, Midjourney v7 have no negative prompts).

## Color Terms That Work

### Film-Stock Anchors
"Kodak Portra 400," "Kodak Portra 160," "Fuji Pro 400H," "Kodak Ektachrome 64," "Kodak Double-X black and white film stock." Well-known stocks steer most reliably because they have strong training representation.

### Explicit Grade Names
"cinematic teal and orange color grade," "10-bit color grade." Maps to recognized post-production looks.

### Monochromatic with Specific Hue
"purple monochromatic colour scheme" with clarification "in shades of purple, not black and white with some purple." Several models fail the monochrome vs monochromatic distinction without explicit guidance.

### Concrete Palette Descriptions
"deep saturated cerulean sky," "warm amber and magenta tones," "slight desaturation," "grainy black and white."

### HEX Colors
Flux 2 supports HEX color control for brand accuracy. Bind colors to the specific object: {"colors":["#FF2D55"],"position":"neon sign"}.

### What to Avoid in Color
"Monochrome" used loosely when you need monochromatic plus a specific hue. Obscure film stocks with weak training representation (effects are weaker for unknown stocks).

## Atmosphere Terms That Work

### Particulate and Air as Renderable Objects
"heavy atmospheric haze," "dust particles dancing in a single beam of light," "cigarette smoke catching light." These give the model physical material to render.

### Weather Plus Surface Interaction
"street scene at night in the rain," "wet asphalt reflecting neon signage." Wet surfaces create reflections models handle well.

### Mood Words Validated for Video Models
"moody," "cinematic," "iridescent," "home video VHS," "glitchcore." These are tested keywords from Runway's prompt guide.

### Declared Mood Plus Anchored Scene Cues
"melancholic atmosphere" works when paired with specific practical lighting. Mood alone without physical scene anchors is unreliable.

### Authentic Imperfection Cues
"slight underexposure," "natural grain," "handheld micro-shake," "visible pores," "fabric wear," "environmental dust," "uneven practical lighting." The 2026 trend: audiences favor authentic, human-centric aesthetics over polished AI output. Pull from photojournalism training clusters.

### What to Avoid in Atmosphere
Conceptual prompts instead of depictable events. "Hacking into the mainframe" fails; "typing on a keyboard" works. "Cinematic" alone without props, light sources, and placement is insufficient. Generic intensifiers: "stunning," "breathtaking," "ultra-detailed," "best quality," "masterpiece."

## Composition Terms That Work

### Depth Staging
"foreground," "mid-ground," "background" with concrete objects assigned to each layer. Multi-model tests confirm correct placement even when models fail other criteria.

### Partial Framing Language
"head and shoulders photograph," "only half of her face is shown," "positioned on the right of frame." Achievable by newer models. Avoid "cut off" phrasing (risk of literal interpretation).

### Rule of Thirds by Placement, Not Name
Describe element placement directly: "horizon in upper third," "subject on right third." Do NOT use the phrase "rule of thirds" because it can cause literal grid lines to appear in outputs.

### Aspect Ratio as Composition Constraint
Set aspect ratio via parameter when available. Use it to enforce framing similarity across a series. "2.39:1 widescreen" for cinematic. "9:16" for mobile/vertical (Veo 3.1 supports native vertical).

## Reference Language That Works

### Gear References
"Panavision C-Series anamorphic lenses," "Cooke Panchro lenses," "Rolleiflex TLR." These pull coherent visual clusters. Do not mix incompatible capture metaphors (smartphone + Panavision anamorphics).

### Film-Era and Capture-Format References
"2000s film camera-style photo," "2000s digicam style," "80s vintage photo," "analogue film," "vintage cellphone selfie." Period references anchor aesthetic.

### Iterative Reconstruction Pattern
For specific looks, iterate by describing subject, period, and capture constraints (aspect ratio, film stock, camera body) rather than relying on vibe words. Prompt-order matters: details placed later in the prompt receive less weight.

### Editing Workflow Preservation
GPT Image 1.5 preserves lighting and composition through iterative edits. Edit loops refine rather than regenerate from scratch. Brand/logo preservation improved in 1.5 over 1.0.

### What to Avoid in References
Overloading with mismatched reference stacks. Assuming a single style keyword substitutes for concrete capture direction.

## Audio Terms That Work (Video Models, 2026)

### Diegetic Sound Events
"ceramic mug taps the counter," "door latch clicks," "footsteps on gravel," "rain hitting a window." Specific physical events that models can synchronize to visual actions.

### Dialogue Formatting
"[Character A, whispering]: 'text here'" with speaker identity, delivery style, and timing. Keep lines short. Assign delivery tempo and tone.

### Ambient and Music
"ambient city traffic," "distant thunder," "single low piano note," "swelling orchestral." Separate BGM from SFX when model supports multi-track (Seedance 2.0, Kling 3.0).

### Sync Anchors
Bind sound to visible action: "as the glass shatters, sharp crack," "on the last word, eyes close." These reduce floaty motion and improve temporal alignment.
