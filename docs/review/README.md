# Markdown review — AI Huevos (dark & claro)

Review markdown in **dark** or **clear (light)** mode using the AI Huevos brand. Code blocks use **Highlight.js** (built by others); we only adapt colors to the brand so code is readable and on-theme in both modes.

**Where to find everything**
- **This README:** `docs/review/README.md`
- **Theme CSS (in-editor):** `docs/review/ai-huevos-dark.css` — dark by default, light when OS/IDE is light (`prefers-color-scheme`)
- **Standalone viewer (with toggle):** `docs/review/markdown-dark-preview.html`
- **Workspace setting:** `.vscode/settings.json` → `markdown.styles` → points to the CSS above

---

## Toggle Dark / Claro (standalone viewer only)

1. Open `docs/review/markdown-dark-preview.html` in your browser.
2. Load a `.md` file (drag-and-drop or click to choose).
3. Use **Dark** | **Claro** in the toolbar to switch. Choice is saved in `localStorage` and restored on the next visit.

In-editor preview (Cursor/VS Code) does not have a clickable toggle; it follows your **system/IDE color scheme** (light OS → clear mode, dark OS → dark mode).

---

## Option 1: In-editor preview (Cursor / VS Code)

1. Open any `.md` file.
2. **Markdown: Open Preview** (`Cmd+Shift+V` or right‑click → Open Preview).
3. Theme comes from `docs/review/ai-huevos-dark.css`:
   - **Dark** when your OS/IDE is in dark mode.
   - **Claro** when your OS/IDE is in light mode.

## Option 2: Standalone HTML viewer

1. Open `docs/review/markdown-dark-preview.html` in your browser.
2. Drag a `.md` file onto the page (or click to choose).
3. Toggle **Dark** / **Claro** as needed. Use **Cambiar archivo** to load another doc.

Code blocks are syntax-highlighted with **Highlight.js**; we override its palette with AI Huevos tokens so contrast is strong in both themes (no faint gray on gray).

---

## Code blocks: “built by others, adapted to our brand”

We use **Highlight.js** for parsing and token classes (`.hljs`, `.hljs-keyword`, `.hljs-string`, etc.) and only override colors in our CSS:

- **Dark:** Gray-800 background, white base text; keywords blue, strings yellow, comments gray, numbers violet.
- **Claro:** Same structure with light surfaces and dark text.

That keeps code readable and consistent with the rest of the doc in both modes.

---

## Brand tokens (color symmetry)

| Role | Color | Hex (dark) | Use in preview |
|------|--------|------------|----------------|
| Background | Black / White | `#030102` / `#FFFFFF` | Page (dark / claro) |
| Text | White / Black | `#FFFFFF` / `#030102` | Body, headings |
| Primary accent | Yellow | `#FFD826` | H1/H2 borders, code, bullets |
| Primary accent | Blue | `#3988FF` | Links, table accent, code keywords |
| Detail | Violet | `#B59EF9` | Blockquote, TOC numbers, hr, code numbers |
| CTA / minimal | Orange | `#FF5C23` | Link hover, buttons |

**Typography:** Scandia (headings/body), Geist Mono (code), medium (500) for headings.
