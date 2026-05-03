# Claude Artifact Prompt — Movik Sales Deck v3

**Purpose:** Drop-in prompt for Claude (or Claude Code Artifact) to generate a single-file HTML sales deck that sells the Movik Marketing Deployment Playbook v3 to Juanfer + Tomás. Inherits the visual system from `movik-marketing-playbook-v3.html`. Generate in one shot, iterate from there.

**Where to paste this:** Claude.ai → New chat → "Build me an HTML artifact with this spec." Or: paste into Claude Code with an Artifact tool.

---

## PROMPT STARTS BELOW THIS LINE — COPY FROM HERE

Build me a single-file HTML sales deck (self-contained, no external build tools) that presents the AI Huevos Marketing Deployment Playbook to Movik. The deck has 12 slides. It will be presented on screen to Juanfer (Head of Growth) and Tomás (CEO). The goal is to close a $8K setup + $3.5K/mo + 8% closed-won rev-share engagement.

### Output format

- **Single HTML file.** Inline CSS + minimal JS for slide navigation (← → arrows + number keys).
- **Slide dimensions:** 16:9 aspect ratio, fluid to viewport, max-width 1280px, max-height 720px. Center on viewport. Letterbox gracefully.
- **Navigation:** Bottom-fixed minimal slide counter + dots. Arrow keys advance. Esc toggles presenter mode. Click-anywhere-on-right = next, left = prev.
- **One slide visible at a time.** Fade transition ~250ms. No auto-advance.
- **No external assets.** Inline SVG icons. Google Fonts CDN only.

### Brand system (INHERIT EXACTLY — matches existing Movik playbook HTML)

```
Colors (dark mode, one theme only):
  --bg:  #08090c        (deepest background)
  --sf:  #111318        (surface 1 — slide canvas)
  --sf2: #181b22        (surface 2 — cards)
  --bd:  #252932        (borders, 1px)

  --tx:  #d8d5cd        (primary text)
  --txm: #787580        (muted text)
  --txd: #555260        (deep muted / labels)

  --am:  #7c3aed        (accent primary — violet)
  --aml: #a78bfa        (accent light)
  --amd: #4c1d95        (accent deep)

  Channel tags:
  --bl:  #60a5fa  (Channel 1 Field Sales — blue)
  --gn:  #34d399  (Channel 2 Strategic Alliances — green)
  --or:  #f97316  (Channel 3 Digital/Inbound — orange)
  --yw:  #fbbf24  (measurement / KPI — yellow)
  --rd:  #f87171  (risk / out-of-scope — red)

Fonts (Google):
  Headings:  'Fraunces', serif — opsz 9..144, weights 600/800
  Body:      'DM Sans', sans-serif — 400/500/600/700
  Mono:      'JetBrains Mono', monospace — 400/600

Spacing + radii:
  Card radius: 10px
  Tag/badge radius: 4px
  Card padding: 22px
  Border: 1px solid var(--bd)
  Inter-card gap: 16px on grids
```

### Voice + language

- **Spanish** (Spanish-first, US LatAm tone — direct, concrete, B2B professional).
- **Zero corporate fluff.** No "leveraging synergies." Write like a senior Head of Marketing talking to another founder over coffee.
- **Numbers concrete.** Every claim backed by a number when possible (116, $10M, $2.5M, 417%, 70/20/10, $8K + $3.5K + 8%).
- **Tone reference:** same as the inherited playbook HTML. Short sentences. Occasional paisa flavor ok but do NOT caricature ("vamos al grano" yes, "chimba" no for a proposal deck).

### The 12 slides — full content spec

**Always show on every slide:** slim bottom-fixed bar with `AI HUEVOS × MOVIK · Marketing Deployment v3 · 2026-04-24` left-aligned in JetBrains Mono 10px, slide counter right-aligned `03 / 12`.

---

**SLIDE 1 — Cover**

```
Top-left: small logotype "AI HUEVOS" in Fraunces 800, 18px, violet (--aml).
Main title (Fraunces 800, 64px, white):  
  "El motor de crecimiento  
   2026 → 2027"
Subtitle (DM Sans 500, 20px, --txm):  
  "Playbook de despliegue de marketing para Movik"
Footer row (JetBrains Mono 11px, --txd):
  "PROPUESTA V3  ·  ABRIL 2026  ·  PARA: JUAN FERNANDO MONTOYA + TOMÁS"
Bottom-right: subtle violet gradient blob (radial, 40% opacity, blur 80px).
```

---

**SLIDE 2 — El objetivo 2026**

```
Heading: "Lo que tenemos que lograr este año"
Subhead: "El playbook está construido alrededor de estas cifras. Todo lo demás son actividades."

4 KPI cards in a grid (kg pattern from playbook HTML):
  — 116     M12 ACTIVE CARRIERS
  — $10M    PORTFOLIO TARGET
  — $2.5M   ARR TARGET
  — 1.93%   DEFAULT RATE CAP

Below the grid, a thin --amd border-top divider, then one "Critical insight" box (violet-tinted, the `.ab` pattern):
  Heading: "EL INSIGHT QUE CAMBIA LA CONVERSACIÓN"
  Body: "Digital representa solo 12 carriers en 2026 (10%), pero es la fundación de los 484 carriers en 2027 — un crecimiento de 417%. Lo que invertimos este año compone. Las KPIs de 2026 son de construcción de pipeline, no de conversión inmediata."
```

---

**SLIDE 3 — La asignación oficial**

*(This is the hero slide. Match the screenshot Daniel provided as closely as possible.)*

```
Heading: "Three-Channel GTM — Official Allocation"

Three cards in a 1+1 + full-width layout (mirrors strat-grid.full):

Card A (top-left, blue --bl tag):
  Badge top-right (monospace): "70%"
  Title (Fraunces 15px): "Channel 1: Field Sales"
  Body (DM Sans 12.5px, --txm):
    "81 carriers. Trust-first approach targeting fleets of 5–20 trucks. 
     Territory A (TX+FL, active, 2 reps) and Territory B (GA+NC+TN, M4 expansion, 2 reps). 
     Onboarding <24h. 1.07M registered carriers across 5 states, ~500K Latino owner-operators."
  Tag pill (teal bg, uppercase, mono): "OUR ROLE: ARM THE REPS"

Card B (top-right, green --gn tag):
  Badge: "20%"
  Title: "Channel 2: Strategic Alliances"
  Body:
    "23 carriers via 10 anchor 3PLs. Three verticals: Referral Ecosystem (process agents, 
     repair shops, trucking influencers), Anchor 3PLs (dispatchers, freight brokers, 
     forwarders), Hospitality & Complementary Services (MedCard/health)."
  Tag pill: "OUR ROLE: BUILD THE PROGRAM"

Card C (full-width, orange --or tag):
  Badge: "10%"
  Title: "Channel 3: Digital/Inbound"
  Body:
    "12 carriers in 2026 — but this is the foundation for 484+ in 2027 (417% growth). 
     Three steps: Building Community (Facebook Groups 10K–80K Hispanic trucking, 
     YouTube/TikTok Spanish content) → SEM/SEO ('factoring alternative owner operators' 
     — first mover in Spanish) → Conversion (WhatsApp bot, multi-step form, scheduling). 
     1 rep allocated."
  Two tag pills: "OUR ROLE: BUILD THE ENGINE" + "FOUNDATION FOR 2027 SCALE"
```

---

**SLIDE 4 — Nuestro rol por canal**

*(Clear statement of what AI Huevos does vs what Movik does.)*

```
Heading: "Qué hacemos nosotros · Qué hacen ustedes"

Two-column table (DM Sans 13px):

  Channel            | AI Huevos (nosotros)                              | Movik (ustedes)
  -------------------+---------------------------------------------------+-----------------------------------
  Ch1 Field Sales    | Armar al equipo: CRM, playbooks, materiales,      | Reclutar y gestionar los 4 reps,
  (70%)              | scripts, dashboards, post-reunión sequences       | cerrar los carriers
  -------------------+---------------------------------------------------+-----------------------------------
  Ch2 Alliances      | Diseñar el programa de partners (2 tiers), data   | Recruitment de los 10 anchor 3PLs,
  (20%)              | model, tracking, comunicación, onboarding kits    | relación ejecutiva con ellos
  -------------------+---------------------------------------------------+-----------------------------------
  Ch3 Digital        | Construir y operar: GHL, atomizador de contenido, | Aprobar narrativa, talent para
  (10% → foundation) | SEO/GEO, lead magnets, funnels, WhatsApp bot      | video (JuanFer + Road Crew)

Bottom note in the `.wb` orange-tinted pattern:
  "Todo lo que entregamos deja un activo operativo en el lado de Movik. Ningún deliverable 
   depende de que AI Huevos siga contratado para funcionar."
```

---

**SLIDE 5 — Lead Magnet Architecture (Channel 3 core)**

```
Heading: "Los 5 imanes que alimentan el funnel"
Subhead: "Cada uno con atribución propia. Sabemos cuál jala qué tipo de carrier."

5 compact cards in a 2-2-1 layout. Each card has:
  — Emoji + nombre (Fraunces 14px)
  — Tier pill (top/mid/base, color-coded)
  — 2-line description
  — source tag in mono code font

1. 🧮 QuickPay Calculator — TIER: TOFU — "Calcula lo que estás perdiendo con tu factor actual. Bilingüe." — source=magnet_calculator
2. 📋 Factoring Contract Escape Guide — TIER: TOFU — "Cómo revisar tu contrato y hacer el switch sin perder cashflow. Ataca el objetor #1: 'estoy bajo contrato'." — source=magnet_escape_guide
3. 📊 Free Broker Credit Check — TIER: MOFU — "Valor inmediato: check de riesgo gratis usando FMCSA + Carrier 411. Pre-califica al lead." — source=magnet_credit_check
4. 🎥 Movik Success Stories — TIER: MOFU — "Testimonios de 60-90s con clientes actuales. Conversión social de la comunidad hispana." — source=magnet_testimonial_*
5. 💳 MedCard / Health on the Road — TIER: TOFU — "Trojan horse: salud por $150/mes. Cross-sell a financing después de 30 días." — source=magnet_medcard

Tag pill at the bottom, yellow --yw: "TODAS TRACKEADAS EN GHL CON SOURCE ÚNICO"
```

---

**SLIDE 6 — System Map (cómo todo se conecta)**

*(Use the ASCII-art channel integration map from the playbook, rendered as a monospace `.arch` block. Large, center-aligned, uses JetBrains Mono 11px, line-height 1.8.)*

```
Heading: "Cómo fluye el sistema"
Subhead: "Cada actividad del playbook vuelve a uno de los tres canales. Nada flota solo."

Big ASCII block (from the playbook Integration Map section):

  Lead Magnets ───▶  Ch3: Digital/Inbound (10%) ──▶  GHL (source tag)
                       Calculator · Escape Guide ·       │
                       Credit Check · SEO · Social       │
                                                         ▼
                                                    1-a-1 pre-cualificado
                                                         │
  BTL + Trade Show ─▶ Ch1: Field Sales (70%) ─────▶  Sales Team Close
  Seasonality         (Armed with magnets + lanes)       │
                                                         │
  Partner Hub ──────▶ Ch2: Strategic Alliances (20%) ▶  Signing bonus +
  (Dispatchers,       (3PLs + repair shops +                Monthly residual
   Freight Brokers,   influencers Road Crew)
   Forwarders)

  ALL → GHL CRM · ALL → Monthly reporting · ALL → Attribution to partner or channel

Below, short callout:
  "El funnel digital hoy no cierra solo. Alimenta las conversaciones 1-a-1 del equipo 
   comercial ya pre-calificadas. En 2027 aprende a cerrar solo."
```

---

**SLIDE 7 — Strategic Alliance Hub (el programa de partners)**

```
Heading: "Partnership Hub: 100 cuentas, 10 anchors, 2 tiers"

Left column — Target account list (small bullet-style cards):
  100 target accounts, 10 anchor 3PLs priorizados en:
    — Dispatchers (10-50 carriers c/u)
    — Freight brokers
    — Freight forwarders
  NO por ahora: trucking influencers macro, process agents.
  Road Crew (micro-influencers) se lanza como programa separado después del setup.

Right column — Two-tier data model:

  TIER 1 — Referral Ecosystem
    Quién: repair shops, process agents, Road Crew (micro-influencers)
    Incentivo: Signing bonus única vez
    Atribución: partner_code en GHL

  TIER 2 — Strategic Partners
    Quién: Dispatchers, freight brokers, freight forwarders
    Incentivo: Signing bonus + monthly residual % del gross profit factorado
    Atribución: strategic_partner_id permanente en lead record

Bottom: a monospace data-model block (from Q5 of playbook) showing the Lead + Partner fields:
    source, referral_type, referred_by_code, partner_tier, 
    signing_bonus_paid, residual_active, monthly_factored_volume, ...
```

---

**SLIDE 8 — El hack SEO / GEO**

```
Heading: "First mover en español"
Subhead: "500K+ owner-operators latinos buscan en español. Cero competencia SEO."

Violet --ab box at top:
  "OTR Solutions, Triumph, Apex, RTS — todos crean contenido en inglés. 
   Movik puede adueñarse de todo el search space hispano con esfuerzo modesto. 
   Y con GEO (Generative Engine Optimization) Movik se vuelve la fuente que Claude, 
   ChatGPT y Perplexity citan cuando alguien pregunta en español sobre factoring."

Below, compact keyword table (5 rows, Territory column + Spanish keywords + landing page):
  TX: "factoring para camioneros en Texas" → movik.us/estados/texas
  FL: "factoring camioneros Miami" → movik.us/estados/florida
  GA: "factoring camioneros Atlanta" → movik.us/estados/georgia
  NC: "factoring para truckers Carolina del Norte" → movik.us/estados/carolina-del-norte
  TN: "factoring camioneros Nashville" → movik.us/estados/tennessee

Bottom row — 4 mini-cards (icons from inline SVG):
  FAQ con Schema · Comparación Movik vs Tradicional · Glossary en español · Autoridad en YouTube
```

---

**SLIDE 9 — Measurement Framework**

```
Heading: "Qué medimos. Cómo medimos. Cada mes."

One big table (DM Sans 13px):

  Canal                      | Target 2026     | Leading Indicators                    | Lagging Indicators
  ---------------------------+-----------------+---------------------------------------+--------------------------
  Ch1 Field Sales (70%)      | 81 carriers     | Meetings booked, proposals sent,      | Carriers signed, avg deal,
                             |                 | pipeline value                        | time-to-close
  Ch2 Strategic Alliances    | 23 carriers     | Partners signed, referrals submitted, | Carriers via partners,
  (20%)                      | via 10 3PLs     | partner engagement                    | residual payout, retention
  Ch3 Digital/Inbound (10%)  | 12 carriers     | Calculator completions, downloads,    | Carriers from digital,
                             | + 2027 pipeline | WhatsApp bot starts, SEO rankings     | CPL by magnet, pipeline

Below, a yellow-tinted `.wb` footer:
  "Reporte mensual en Supabase dashboard (vivo, no PDF). Juanfer y Tomás acceso directo.
   Reconciliación de revenue-share en call de 15 min el día 5 de cada mes."
```

---

**SLIDE 10 — Timeline (90 días + evolución 2026-2027)**

```
Heading: "Cómo se despliega"

Vertical timeline (`.tl` pattern from playbook) with 4 phases:

  Día 0-14  — FUNDACIÓN
    GHL provisionado · ICP refinado (RADAR) · baseline capturado · 
    Partner Hub data model · keyword research · contrato firmado

  Día 15-45 — BUILD
    Calculator live · Escape Guide published · 2 state SEO pages (TX+FL) ·
    Atomizador produciendo 10+ piezas/semana · WhatsApp bot en línea ·
    primeros 3 anchor 3PLs en onboarding

  Día 46-75 — ACTIVAR
    Testimonial videos shooting · Road Crew reclutamiento (5-10 truckers) ·
    CPL benchmarks · primer closed-won rastreado ·
    si Tomás aprueba paid experiment → WhatsApp funnel corre

  Día 76-90 — RECONCILIAR + DECIDIR
    Atribución reconciliada · primer payout de revenue-share ·
    dashboard estable · decision gate: continuar mensual, subir a
    más canales, o cerrar con runbook documentado

Milestones marked in violet dots. Sub-text in --txm DM Sans 12px.
```

---

**SLIDE 11 — Investment Structure**

```
Heading: "Cómo se paga"
Subhead: "Pagamos más cuando ustedes ganan. Punto."

Main block — three tiers in a kg grid:

  SETUP               RETAINER                  UPSIDE SHARED
  --------            --------                  -------------
  $8,000              $3,500 / mes              8% closed-won
  único               meses 1-3                 rastreado
                      (mes a mes después)       cap 2x retainer
                                                lookback 30 días

Below, a small comparison block (the economic reframe from the Movik v3 proposal):

  Escenario                          v2.0           v3.0 (esta propuesta)
  ---------------------------------  -------------  ---------------------
  Mes 0-3, sin cierres rastreados    ~$45-51K       $18.5K (−60%)
  Mes 0-3, con 10 cierres ($300K)    ~$45-51K       $39.5K

Tag pill yellow: "INCENTIVOS ALINEADOS: AI HUEVOS GANA CUANDO MOVIK GANA"

Bottom — optional add-on:

  "+ EXPERIMENTO DE PAID ADS (opcional, arranca mes 1 o mes 3)
   $1,000-1,500 / mes adicionales  ·  video → click-to-WhatsApp → conversion bot
   Propósito: testear value props con data real antes de escalar.
   Si se arranca mes 3, se usa el stack ya construido."
```

---

**SLIDE 12 — El siguiente paso**

```
Heading large (Fraunces 56px): "Firmamos. Arrancamos lunes."
Subhead (DM Sans 18px, --txm): "Esta propuesta vence el 2026-05-07."

Three inline action items (monospace 12px, --aml):

  01. Firmar SOW + MSA
  02. Pagar $8,000 setup (wire o ACH a AI Huevos)
  03. Kick-off call el lunes 2026-04-27, 10am EST

Bottom-right corner — small signature block:
  "Daniel Cardona · Head of AI Huevos
   hola@huevos.ai · [tu booking link]"

Bottom-left — tiny mono line:
  "AI HUEVOS · Construyendo motores de crecimiento para founders B2B en LatAm"
```

---

### Slide navigation JS (copy-paste this)

Keyboard: `ArrowRight` and `Space` → next; `ArrowLeft` → prev; number keys `1-9` jump; `Esc` toggles a presenter-mode with speaker notes placeholder (<aside> visible).

Click zones: right 50% of viewport → next, left 50% → prev. Disable on form elements (none here, so fine).

Animated dot indicator at bottom: 12 circles, 6px each, current = --am, others = --bd.

### Accessibility

- `role="region" aria-label="Slide N of 12"` on each slide section.
- Contrast: --tx on --bg = 13.5:1 (AAA). --txm on --bg = 5.1:1 (AA). Don't downgrade these.
- Skip link to slide content for screen readers.

### What NOT to include (to keep it simple)

- No gradient backgrounds except the subtle violet blob on Slide 1.
- No stock photography. No icons from icon libraries. Inline SVG only where absolutely needed (calculator/pdf/chart icons on Slide 5).
- No animations beyond fade transition between slides. No on-scroll reveal. No parallax.
- No multi-theme (light/dark toggle). One dark theme only.
- No print styles. This is a screen-presented deck.

### Sanity check before you return the artifact

- 12 slides exactly, in order 1-12.
- Every mentioned number matches the playbook: 116, $10M, $2.5M, 1.93%, 70/20/10, 81/23/12, 417%, 484, 500K, 1.07M, $8K, $3.5K, 8%, $1-1.5K, cap 2x, lookback 30.
- All body copy in Spanish. All design-system comments in English.
- File opens standalone in a browser with zero setup. Fonts load from Google CDN.

When done, return the full HTML as a single Artifact. I'll iterate from there.

## PROMPT ENDS ABOVE THIS LINE

---

## How to use this

1. Copy everything between "PROMPT STARTS BELOW THIS LINE" and "PROMPT ENDS ABOVE THIS LINE."
2. Paste into Claude (claude.ai, New chat) or a Claude Code Artifact tool.
3. Claude returns a single HTML file.
4. Open it in a browser. Iterate specific slides by telling Claude: "Slide 7 — make the right column a 2-col grid instead" etc.
5. When tight, export as PDF (Cmd+P → Save as PDF) for Juanfer + Tomás, or screen-share directly.

## What I might want to tweak after v1 generation

- **Add/remove a slide.** If you want a pure "our track record" slide (Finkargo $30M pipeline, Vozy ARR $4M→$8.5M), add it as Slide 2.5 and push others down.
- **Juanfer personalization.** Add a slide 0 with his name + a "for you specifically" framing if it feels right.
- **BTL slide.** We paused BTL per your direction, but you can add a "Phase 2: BTL when ready" slide (showing the calendar in the playbook Q3) as an optional appendix slide after Slide 12.
- **Road Crew influencer slide.** If Tomás wants to see the influencer play explicitly, add it between Slides 7 and 8 (5-slot card, 1K-50K followers criteria, comp options).

## Alternative targets (if Claude HTML doesn't fit)

Same prompt body works in:
- **v0.dev** — change "single HTML file" to "Next.js 14 + Tailwind CSS component" in the output format section.
- **Figma Make** — change "single HTML file" to "Figma design with 12 frames sized 1920x1080" and remove the JS navigation spec.
- **Tome / Gamma** — extract just the content per slide, paste as bullet prompts. Their templates will impose their own design; your brand system gets diluted. Only use if speed > fidelity.

My recommendation: **Claude HTML artifact first.** Fastest, you own it, it matches the playbook aesthetic exactly, and you can export PDF for anyone who doesn't present live.
