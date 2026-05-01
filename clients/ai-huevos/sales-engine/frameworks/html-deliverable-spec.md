---
framework: html-deliverable-spec
version: 1.0
description: Specification for KAI-branded HTML discovery reports. Defines layout, CSS, Mermaid diagram patterns, section structure, and responsive breakpoints.
brand-reference: clients/ai-huevos/brand-config/brand-reference.md
---

# HTML Deliverable Spec — KAI Discovery Report

> Spec for generating branded HTML reports from business-context.md data.
> The HTML report is the **hero deliverable** — what the prospect receives and shares internally.

---

## Design Philosophy

1. **Dark-mode first** — matches KAI brand (deep navy backgrounds, energy red accents)
2. **Data-dense, not slide-ware** — tables, diagrams, and numbers over paragraphs
3. **Self-contained** — single .html file, no external dependencies (inline CSS, Mermaid CDN only)
4. **Shareable** — prospect forwards it to their CEO; it must stand alone without context
5. **Mobile-readable** — responsive breakpoints for tablet/phone review

---

## Color System

```css
:root {
  --kai-navy:      #1A1A2E;
  --kai-dark:      #16213E;
  --kai-midnight:  #0F3460;
  --kai-red:       #E94560;
  --kai-white:     #FFFFFF;
  --kai-gray:      #A0AEC0;
  --kai-light-bg:  #F7FAFC;
  --kai-success:   #48BB78;
  --kai-warning:   #ECC94B;
  --kai-danger:    #FC8181;
}
```

## Typography

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: var(--kai-white);
  background: var(--kai-navy);
}

h1 { font-size: 2.5rem; font-weight: 800; letter-spacing: -0.02em; }
h2 { font-size: 1.75rem; font-weight: 700; border-bottom: 2px solid var(--kai-red); padding-bottom: 0.5rem; }
h3 { font-size: 1.25rem; font-weight: 600; color: var(--kai-red); }

.stat-number { font-size: 3rem; font-weight: 800; color: var(--kai-red); }
.stat-label  { font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--kai-gray); }
```

## Layout Structure

```
+----------------------------------------------------------+
| HEADER: KAI Logo | Report Title | Date | Company         |
+----------------------------------------------------------+
| HERO STATS: 3-4 key numbers in large type                |
|   PULSO Score | Pain Points | Estimated Savings | Tier   |
+----------------------------------------------------------+
| SECTION 1: Company Profile (table)                       |
+----------------------------------------------------------+
| SECTION 2: Stakeholder Map (cards)                       |
+----------------------------------------------------------+
| SECTION 3: PULSO Diagnostic (visual bar chart)           |
+----------------------------------------------------------+
| SECTION 4: Pain Points (cards with quotes)               |
+----------------------------------------------------------+
| SECTION 5: Systems Landscape (Mermaid diagram)           |
+----------------------------------------------------------+
| SECTION 6: Buying Signals (positive/negative indicators) |
+----------------------------------------------------------+
| SECTION 7: Opportunity Sizing + Recommended Tier         |
+----------------------------------------------------------+
| SECTION 8: Recommended Next Steps                        |
+----------------------------------------------------------+
| FOOTER: KAI tagline + contact                            |
+----------------------------------------------------------+
```

## Component Patterns

### Hero Stats Bar

```html
<div class="hero-stats">
  <div class="stat">
    <span class="stat-number">{{PULSO_TOTAL}}/25</span>
    <span class="stat-label">PULSO Score</span>
  </div>
  <div class="stat">
    <span class="stat-number">{{NUM_PAIN_POINTS}}</span>
    <span class="stat-label">Pain Points</span>
  </div>
  <div class="stat">
    <span class="stat-number">{{FIT_TOTAL}}/35</span>
    <span class="stat-label">KAI Fit</span>
  </div>
  <div class="stat">
    <span class="stat-number">{{RECOMMENDED_TIER}}</span>
    <span class="stat-label">Tier Recomendado</span>
  </div>
</div>
```

CSS for hero stats:
```css
.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  background: var(--kai-dark);
  border-radius: 12px;
  margin: 2rem 0;
}
```

### PULSO Visual Bar

Each dimension as a horizontal bar, scored 0-5:

```html
<div class="pulso-bar">
  <div class="pulso-dimension">
    <span class="pulso-letter">P</span>
    <span class="pulso-name">Panorama</span>
    <div class="pulso-track">
      <div class="pulso-fill" style="width: {{P_SCORE_PCT}}%; background: var(--kai-red);"></div>
    </div>
    <span class="pulso-score">{{P_SCORE}}/5</span>
  </div>
  <!-- repeat for U, L, S, O -->
</div>
```

Score-to-percentage: `score / 5 * 100`

Color coding:
- 4-5: `var(--kai-success)` (green)
- 3: `var(--kai-warning)` (yellow)
- 0-2: `var(--kai-danger)` (red)

### Stakeholder Cards

```html
<div class="stakeholder-grid">
  <div class="stakeholder-card">
    <div class="stakeholder-header">
      <span class="stakeholder-name">{{NAME}}</span>
      <span class="stakeholder-role">{{TITLE}}</span>
    </div>
    <div class="stakeholder-meta">
      <span class="badge badge-{{INFLUENCE_CLASS}}">{{INFLUENCE}}</span>
      <span class="badge badge-{{ATTITUDE_CLASS}}">{{ATTITUDE}}</span>
    </div>
    <blockquote class="stakeholder-quote">"{{QUOTE}}"</blockquote>
  </div>
</div>
```

Attitude classes: `entusiasta` (green), `neutral` (yellow), `resistente` (red)

### Pain Point Cards

```html
<div class="pain-card">
  <div class="pain-header">
    <span class="pain-number">D{{N}}</span>
    <span class="pain-dept">{{DEPARTMENT}}</span>
  </div>
  <p class="pain-desc">{{DESCRIPTION}}</p>
  <blockquote class="pain-quote">"{{VERBATIM_QUOTE}}"</blockquote>
  <div class="pain-meta">
    <span>Cuantificacion: {{QUANTIFICATION}}</span>
    <span>Frecuencia: {{FREQUENCY}}</span>
  </div>
</div>
```

### Mermaid Diagrams

Use Mermaid.js CDN for rendering. Include via `<script>` tag at end of body.

**Systems Landscape diagram:**
```mermaid
graph TD
    subgraph "Sistemas Actuales"
        A[{{SYSTEM_1}}] -->|{{CONNECTION_TYPE}}| B[{{SYSTEM_2}}]
        A -->|Manual| C[{{SYSTEM_3}}]
        B -.->|No existe| D[fa:fa-ban Dato perdido]
    end

    style A fill:#0F3460,stroke:#E94560,color:#fff
    style B fill:#0F3460,stroke:#E94560,color:#fff
    style D fill:#E94560,stroke:#fff,color:#fff
```

**Proposed Architecture diagram:**
```mermaid
graph TD
    subgraph "Propuesta: AI-OS"
        A[{{SYSTEM_1}}] -->|API| AIOS[AI-OS KAI]
        B[{{SYSTEM_2}}] -->|API| AIOS
        C[{{SYSTEM_3}}] -->|API| AIOS
        AIOS -->|Real-time| DASH[Dashboard]
        AIOS -->|Alertas| TEAM[Equipo]
    end

    style AIOS fill:#E94560,stroke:#fff,color:#fff,stroke-width:3px
    style DASH fill:#48BB78,stroke:#fff,color:#fff
```

**PULSO Coverage Radar (as bar chart):**
```mermaid
xychart-beta
    title "PULSO Coverage"
    x-axis ["Panorama", "Urgencia", "Logro", "Sit. Critica", "Organizacion"]
    y-axis "Score" 0 --> 5
    bar [{{P_SCORE}}, {{U_SCORE}}, {{L_SCORE}}, {{SC_SCORE}}, {{O_SCORE}}]
```

## Mermaid CDN

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
<script>
  mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    themeVariables: {
      primaryColor: '#0F3460',
      primaryTextColor: '#FFFFFF',
      primaryBorderColor: '#E94560',
      lineColor: '#A0AEC0',
      secondaryColor: '#16213E',
      tertiaryColor: '#1A1A2E'
    }
  });
</script>
```

## Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 768px) {
  .hero-stats { grid-template-columns: repeat(2, 1fr); }
  .stakeholder-grid { grid-template-columns: 1fr; }
  h1 { font-size: 1.75rem; }
  .stat-number { font-size: 2rem; }
}

/* Mobile */
@media (max-width: 480px) {
  .hero-stats { grid-template-columns: 1fr; }
  body { font-size: 14px; padding: 1rem; }
}
```

## Print Styles

```css
@media print {
  body { background: white; color: #1A1A2E; }
  .hero-stats { border: 1px solid #1A1A2E; }
  .mermaid { page-break-inside: avoid; }
  a { text-decoration: none; color: #1A1A2E; }
}
```

## HTML Skeleton

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Discovery Report — {{COMPANY_NAME}} | AI Huevos</title>
  <style>/* inline all CSS above */</style>
</head>
<body>
  <header><!-- KAI logo + report meta --></header>
  <section class="hero-stats"><!-- 4 key stats --></section>
  <section id="company-profile"><!-- table --></section>
  <section id="stakeholders"><!-- cards --></section>
  <section id="pulso"><!-- visual bars --></section>
  <section id="pain-points"><!-- cards with quotes --></section>
  <section id="systems"><!-- Mermaid diagram --></section>
  <section id="buying-signals"><!-- positive/negative list --></section>
  <section id="opportunity"><!-- sizing + tier --></section>
  <section id="next-steps"><!-- action items --></section>
  <footer><!-- KAI tagline + contact --></footer>
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>mermaid.initialize({startOnLoad:true, theme:'dark'});</script>
</body>
</html>
```

## Quality Gates

1. All `{{PLACEHOLDER}}` variables must be populated from business-context.md
2. At least 1 Mermaid diagram (systems landscape) must render
3. All prospect quotes must be verbatim (no editing)
4. Anti-word check: scan output for brand anti-words before delivery
5. PULSO bars must match scores in business-context.md exactly
6. File must open correctly in Chrome, Safari, and Firefox
7. File size < 500KB (no embedded images — use CSS shapes and Mermaid)

## Deployment (Optional)

If Netlify MCP is available, deploy as static page:
- Path: `kai-reports/{{COMPANY_SLUG}}/index.html`
- Share URL with prospect (time-limited if needed)
- Otherwise, attach .html file to email via Gmail MCP
