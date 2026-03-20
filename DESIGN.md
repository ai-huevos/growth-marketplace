# Design System: GrowthOS Kinetic Conversation
**Project Context:** Simplification, Inline Context, and Empowering Enthusiasm

## 1. Overview & Creative North Star
**Creative North Star: "The Enthusiast's Living Chat"**
This system pivots away from the heavy "Command Center" dashboards of traditional B2B SaaS. Modeled after simpler apps (like Notion or minimal chat interfaces), the interface is fundamentally a **Conversational Workspace**. 

We embed the "power of the enthusiast"—the UI acts as a highly motivated, energetic Growth Assistant. We achieve this through:
- **Zero Static Noise:** There are no permanent, complex dashboards or right-panes filling the screen. The primary view is the chat.
- **Contextual Accompaniment:** Data, charts, and PULSO diagnostics only appear when relevant to the conversation, either as *Inline Metric Bubbles* or a dynamic *Contextual Side-Panel* that smoothly slides in only when summoned.
- **Organic Momentum:** Using vibrant, energetic accents (warm yellows and thriving greens) to propel the founder forward with positivity.

## 2. Colors & Surface Architecture
The palette merges a sleek, deep background for focus with high-octane, enthusiastic accents to drive action.

### Foundation & Focus
- **Obsidian Base:** `#0c0e12` - Absolute background, reducing eye strain and hiding the UI machinery.
- **Workspace Canvas:** `#111318` - The conversational feed background.

### Enthusiastic Accents (The "Power" Palette)
- **Kinetic Green (Primary):** `#22C55E` - High-energy green used for success metrics, primary empowering actions, and positive momentum.
- **Sunburst Yellow (Secondary):** `#FACC15` - A warm, enthusiastic yellow used for "Ah-ha!" insight moments, strategy propositions, and high-priority callouts.
- **Electric Cyan (Tertiary):** `#00E5FF` - Used sparingly for interactive data points inside charts to provide a crisp, modern tech feel.

## 3. Typography: The Motivating Coach
We use dual fonts to balance "marketing authority" with "approachable enthusiasm."
- **Display & Headlines (Manrope):** Geometric, warm, and highly legible. Used for the bold "Achievement Unlocked" style metric headers.
- **Body & Chat (Plus Jakarta Sans):** Clean, modern, wider apertures. Used for all conversational text, ensuring high legibility even when chatting continuously.

## 4. Component Stylings

### The "Accompaniment" Rule (No Static Noise)
- **Metric Bubbles (Inline Data):** Instead of a static analytics dashboard, data points sent by the Growth Assistant appear as pill-shaped (`rounded-full`) bubbles *inside* the chat stream. These use vibrant `Secondary` (Yellow) or `Primary` (Green) backgrounds with a subtle 4px Y-axis float animation.
- **The Contextual Slide-Panel:** When analyzing complex data (like a full PULSO diagnostic or a Funnel), a sleek glassmorphic panel (`#171a1f` with 24px `backdrop-blur`) smoothly slides in from the right. It acts as an overlay and can be instantly dismissed back into the chat.

### Conversational Architecture
- **Founder Bubbles:** Deep, focused colors (`#1d2025`).
- **Growth Assistant Bubbles:** Uses Glassmorphism with a subtle Kinetic Green or Sunburst Yellow ambient shadow (40px blur, 6% opacity) to feel "alive" and responsive.

### Inputs and CTAs
- **Input Field:** Simply a `surface-container-lowest` text box with a "Ghost Border" that ignites with a 2px Electric Cyan glow when focused. 
- **Primary Action Buttons:** High-gloss energetic gradients. No sharp corners (`md` or `xl` roundedness) to maintain the friendly, empowering vibe. 

## 5. Layout Principles
- **Simplicity First:** The layout must look as simple as a standard messaging app upon first load.
- **Intentional Asymmetry:** When data accompanies a message, it can break the standard chat bubble grid, floating slightly to the right or expanding into a full-width inline card to draw maximum attention to the insight.
- **Breathable:** Massive vertical spacing (`3rem` or `12` scale) between major strategy shifts in the conversation to allow the founder to digest the enthusiasm and act accordingly.
