# Webflow Landing Page Build Spec

```yaml
client: AI Huevos
document: webflow-landing-build-spec
version: 1.0
status: DRAFT
date: 2026-02-22
platform: Webflow
source-spec: clients/ai-huevos/website/landing-page.md
mcp: webflow (configured in .mcp.json, OAuth)
design-approach: Relume template + KAI aesthetic adaptation
```

> **Three-step landing page build:**
> 1. Human selects + adapts Relume template (2-4h)
> 2. Claude Code populates content via Webflow MCP
> 3. Claude Code + Figma MCP pulls KAI visual tokens

---

## Step 1: Template Selection (Human Action)

### Requirements for Relume Template

- **Style:** Dark B2B SaaS
- **Sections:** 10+ section layout (expandable)
- **Mobile:** Fully responsive out of the box
- **CMS:** Not needed (static page)
- **Interactions:** Minimal (scroll animations ok, no heavy JS)

### KAI Aesthetic Adaptation

After importing Relume template to Webflow:

**Colors:**
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#030102` | Page background |
| `--bg-secondary` | `#0A0A0A` | Section alternating bg |
| `--text-primary` | `#FFFFFF` | Headlines, body |
| `--text-secondary` | `#A0A0A0` | Subheadlines, captions |
| `--accent-yellow` | `#FFD826` | CTAs, highlights, progress |
| `--accent-blue` | `#3988FF` | Links, secondary accent |
| `--danger` | `#FF4444` | Alert icons, problem section |

**Typography:**
| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 (hero) | Scandia Bold | 700 | 72-96px |
| H2 (section) | Scandia Bold | 700 | 48-56px |
| H3 (subsection) | Scandia Medium | 500 | 32-36px |
| Body | Scandia Light | 300 | 18-20px |
| Mono (stats) | Geist Mono | 400 | 16px |
| CTA button | Scandia Bold | 700 | 18px |

**Buttons:**
- Primary: `#FFD826` bg, `#030102` text, rounded-lg
- Secondary: transparent bg, `#FFD826` border, `#FFD826` text

---

## Step 2: Content Population via Webflow MCP

### Section Map

Copy source: `clients/ai-huevos/website/landing-page.md`

| # | Section | Source Section | Key Content |
|---|---------|---------------|-------------|
| S1 | Hero | SECCION 1 | "$15M estaban escondidos..." headline, quiz CTA |
| S2 | Problema | SECCION 2 | "Tu empresa gasta en AI que nadie usa" |
| S3 | Metáfora del Sol | SECCION 3 | "AI es como el sol" visual metaphor |
| S4 | Qué Descubrirás | SECCION 4 | 4 dimensions of Energy Score |
| S5 | Cómo Funciona | SECCION 5 | 3-step process (Responde → Descubre → Actúa) |
| S6 | Prueba Social | SECCION 6 | Finkargo stats + metrics bar |
| S7 | Para Quién Es | SECCION 7 | ICP description in their language |
| S8 | FAQ | SECCION 8 | 6-8 objection-handling FAQs |
| S9 | Testimonio | SECCION 9 | Roberto Mendez quote (Gate 1B) |
| S10 | CTA Final | SECCION 10 | Dual CTA: quiz + Sprint booking |

### Embedded Elements

**Quiz Embed (S1 + S10):**
```html
<!-- Tally embed at #diagnostico anchor -->
<iframe
  data-tally-src="https://tally.so/embed/{{FORM_ID}}?alignLeft=1&hideTitle=1&transparentBackground=1"
  width="100%"
  height="600"
  frameBorder="0"
  title="Diagnóstico de Energía AI"
></iframe>
```

**Cal.com Embed (Sprint CTA):**
```html
<!-- Cal.com inline embed for Sprint booking -->
<cal-inline
  calLink="kaipartners/sprint"
  style="width:100%;height:100%;overflow:scroll"
></cal-inline>
```

### Tracking Pixels

**LinkedIn Insight Tag:**
```html
<script type="text/javascript">
_linkedin_partner_id = "{{LINKEDIN_PARTNER_ID}}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript" src="https://snap.licdn.com/li.lm-sdk-web/sdktag.js" async></script>
```

**Meta Pixel:**
```html
<script>
!function(f,b,e,v,n,t,s){...}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '{{META_PIXEL_ID}}');
fbq('track', 'PageView');
</script>
```

**Mixpanel:**
```html
<script>
(function(c,a){...})(document,window.mixpanel||[]);
mixpanel.init("{{MIXPANEL_TOKEN}}", {track_pageview: true});
</script>
```

**Custom Events (Mixpanel):**
```javascript
// Track quiz start
mixpanel.track('Quiz Started', { source: 'landing_page' });

// Track CTA clicks
mixpanel.track('CTA Clicked', { cta: 'quiz_primary', section: 'hero' });
mixpanel.track('CTA Clicked', { cta: 'sprint_booking', section: 'final' });

// Track scroll depth
// 25%, 50%, 75%, 100% scroll milestones
```

---

## Step 3: Visual Tokens from Figma MCP

Use Figma MCP to pull from KAI design system:

| Asset | Figma Location | Usage |
|-------|---------------|-------|
| K mark (logo) | KAI Design System → Logos | Hero top-left, footer |
| Geometric energy forms | KAI Design System → Illustrations | Hero background, section dividers |
| Icon set | KAI Design System → Icons | Feature icons (S4, S5) |
| Color tokens | KAI Design System → Styles | Verify CSS variables match Figma |
| Social proof badge | — | Create: "$650M | 110+ | 3 países" |

---

## SEO Configuration

```
Page title: "Diagnóstico de Energía AI — AI Huevos"
Meta description: "Descubre cuánta energía AI tiene tu empresa escondida. Quiz gratuito de 5 minutos. Score personalizado + 3 quick wins para tu operación."
OG title: "$15M estaban escondidos en su operación. ¿Cuánto esconde la tuya?"
OG description: "Quiz gratuito de 5 minutos. Diagnóstico personalizado."
OG image: KAI social card (dark bg + K mark + energy forms)
Canonical URL: https://kaipartners.com/diagnostico
```

---

## Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Page load time | < 3 seconds | Webflow + Lighthouse |
| Mobile Lighthouse score | > 85 | Lighthouse |
| CLS (Cumulative Layout Shift) | < 0.1 | Web Vitals |
| FCP (First Contentful Paint) | < 1.5s | Lighthouse |

---

## Launch Checklist

- [ ] Template imported and adapted (human, 2-4h)
- [ ] All 10 sections populated with copy from spec
- [ ] Quiz embed working at #diagnostico
- [ ] Cal.com embed working for Sprint CTA
- [ ] LinkedIn Insight Tag installed
- [ ] Meta Pixel installed
- [ ] Mixpanel tracking installed + events configured
- [ ] Mobile responsive verified (iPhone, Android, tablet)
- [ ] Page speed < 3 seconds (Lighthouse audit)
- [ ] SEO meta tags configured
- [ ] Custom domain connected (Gate 1D)
- [ ] SSL active
- [ ] 404 page configured
- [ ] Favicon set (K mark)

---

*Content source of truth: `website/landing-page.md`*
*Visual tokens: Figma KAI Design System*
