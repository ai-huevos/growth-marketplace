---
template: discovery-report-html
version: 1.0
description: Complete HTML template for the Discovery Report (generic, per-install branding). Populate all {{PLACEHOLDER}} variables from business-context.md. Renders Mermaid diagrams for systems landscape.
spec: os/skills/sales-orchestrator/frameworks/html-deliverable-spec.md
---

# Discovery Report HTML Template

> Generate a self-contained .html file by replacing all `{{PLACEHOLDER}}` variables with data from `business-context.md`.
> Save output to: `clients/{{CLIENT_SLUG}}/deals/<company-slug>/discovery-report.html`
>
> **Nota de instalacion**: este template deja fijos algunos textos/estilos de marca (titulo, footer, contacto, variables CSS `--kai-*`) como spec de referencia — de-scoping fuera de alcance de este pase (ver flag en el reporte de la tarea G6). El cliente instalado debe sobreescribir esos valores con su propia marca antes de usar el template en produccion.

## Complete HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Discovery Report — {{COMPANY_NAME}} | {{CLIENT_DISPLAY_NAME}}</title>
  <style>
    :root {
      --kai-navy: #1A1A2E;
      --kai-dark: #16213E;
      --kai-midnight: #0F3460;
      --kai-red: #E94560;
      --kai-white: #FFFFFF;
      --kai-gray: #A0AEC0;
      --kai-light-bg: #F7FAFC;
      --kai-success: #48BB78;
      --kai-warning: #ECC94B;
      --kai-danger: #FC8181;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: var(--kai-white);
      background: var(--kai-navy);
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
    }

    h1 { font-size: 2.5rem; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 0.5rem; }
    h2 { font-size: 1.75rem; font-weight: 700; border-bottom: 2px solid var(--kai-red); padding-bottom: 0.5rem; margin: 2.5rem 0 1.5rem; }
    h3 { font-size: 1.25rem; font-weight: 600; color: var(--kai-red); margin: 1.5rem 0 0.75rem; }

    /* Header */
    .header {
      text-align: center;
      padding: 3rem 0 2rem;
      border-bottom: 3px solid var(--kai-red);
      margin-bottom: 2rem;
    }
    .header .kai-mark { font-size: 3rem; font-weight: 900; color: var(--kai-red); letter-spacing: 0.1em; }
    .header .subtitle { color: var(--kai-gray); font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 0.5rem; }
    .header .meta { color: var(--kai-gray); font-size: 0.875rem; margin-top: 1rem; }

    /* Hero Stats */
    .hero-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      padding: 2rem;
      background: var(--kai-dark);
      border-radius: 12px;
      margin: 2rem 0;
      text-align: center;
    }
    .stat-number { display: block; font-size: 2.5rem; font-weight: 800; color: var(--kai-red); }
    .stat-label { display: block; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--kai-gray); margin-top: 0.25rem; }

    /* Tables */
    table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
    th { background: var(--kai-dark); text-align: left; padding: 0.75rem 1rem; font-weight: 600; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.03em; }
    td { padding: 0.75rem 1rem; border-bottom: 1px solid rgba(160,174,192,0.2); }
    tr:hover td { background: rgba(15,52,96,0.3); }

    /* Cards */
    .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0; }
    .card {
      background: var(--kai-dark);
      border-radius: 10px;
      padding: 1.5rem;
      border-left: 4px solid var(--kai-red);
    }
    .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; }
    .card-name { font-weight: 700; font-size: 1.1rem; }
    .card-role { color: var(--kai-gray); font-size: 0.875rem; }

    /* Badges */
    .badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    .badge-green { background: rgba(72,187,120,0.2); color: var(--kai-success); }
    .badge-yellow { background: rgba(236,201,75,0.2); color: var(--kai-warning); }
    .badge-red { background: rgba(252,129,129,0.2); color: var(--kai-danger); }
    .badge-blue { background: rgba(15,52,96,0.5); color: var(--kai-white); }

    /* PULSO bars */
    .pulso-bar { margin: 0.75rem 0; display: flex; align-items: center; gap: 0.75rem; }
    .pulso-letter { font-size: 1.25rem; font-weight: 800; color: var(--kai-red); width: 2rem; text-align: center; }
    .pulso-name { width: 120px; font-size: 0.875rem; color: var(--kai-gray); }
    .pulso-track { flex: 1; height: 24px; background: rgba(160,174,192,0.15); border-radius: 12px; overflow: hidden; }
    .pulso-fill { height: 100%; border-radius: 12px; transition: width 0.5s ease; }
    .pulso-score { width: 3rem; text-align: right; font-weight: 700; }

    /* Quotes */
    blockquote {
      border-left: 3px solid var(--kai-red);
      padding: 0.5rem 1rem;
      margin: 0.75rem 0;
      color: var(--kai-gray);
      font-style: italic;
      font-size: 0.9rem;
    }

    /* Pain cards */
    .pain-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      background: var(--kai-red);
      color: var(--kai-white);
      border-radius: 50%;
      font-weight: 700;
      font-size: 0.875rem;
    }
    .pain-meta { display: flex; gap: 1rem; margin-top: 0.75rem; font-size: 0.8rem; color: var(--kai-gray); }

    /* Signals */
    .signal-positive { border-left-color: var(--kai-success); }
    .signal-negative { border-left-color: var(--kai-danger); }

    /* Mermaid */
    .mermaid {
      background: var(--kai-dark);
      border-radius: 10px;
      padding: 1.5rem;
      margin: 1.5rem 0;
      text-align: center;
    }

    /* Footer */
    .footer {
      text-align: center;
      padding: 3rem 0 1rem;
      margin-top: 3rem;
      border-top: 2px solid var(--kai-red);
      color: var(--kai-gray);
      font-size: 0.875rem;
    }
    .footer .tagline { font-size: 1rem; color: var(--kai-white); font-weight: 600; margin-bottom: 0.5rem; }

    /* Responsive */
    @media (max-width: 768px) {
      .hero-stats { grid-template-columns: repeat(2, 1fr); }
      .card-grid { grid-template-columns: 1fr; }
      h1 { font-size: 1.75rem; }
      .stat-number { font-size: 2rem; }
      .pulso-name { width: 80px; font-size: 0.75rem; }
    }
    @media (max-width: 480px) {
      .hero-stats { grid-template-columns: 1fr; }
      body { font-size: 14px; padding: 1rem; }
    }
    @media print {
      body { background: white; color: #1A1A2E; }
      .hero-stats { border: 1px solid #1A1A2E; }
      .card { border: 1px solid #A0AEC0; }
      .mermaid { page-break-inside: avoid; }
    }
  </style>
</head>
<body>

  <!-- ═══════════════════════════════════════════ HEADER ═══ -->
  <header class="header">
    <div class="kai-mark">K</div>
    <h1>Discovery Report</h1>
    <div class="subtitle">{{COMPANY_NAME}}</div>
    <div class="meta">
      {{CALL_DATE}} &middot; {{CALL_DURATION}} min &middot; Prepared by {{CLIENT_DISPLAY_NAME}}
    </div>
  </header>

  <!-- ═══════════════════════════════════════════ HERO STATS ═══ -->
  <div class="hero-stats">
    <div>
      <span class="stat-number">{{PULSO_TOTAL}}/25</span>
      <span class="stat-label">PULSO Score</span>
    </div>
    <div>
      <span class="stat-number">{{NUM_PAIN_POINTS}}</span>
      <span class="stat-label">Pain Points</span>
    </div>
    <div>
      <span class="stat-number">{{FIT_TOTAL}}/35</span>
      <span class="stat-label">Fit Score</span>
    </div>
    <div>
      <span class="stat-number">{{RECOMMENDED_TIER}}</span>
      <span class="stat-label">Tier Recomendado</span>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════ COMPANY PROFILE ═══ -->
  <h2>1. Company Profile</h2>
  <table>
    <tr><th>Campo</th><th>Dato</th></tr>
    <tr><td><strong>Empresa</strong></td><td>{{COMPANY_NAME}}</td></tr>
    <tr><td><strong>Industria</strong></td><td>{{INDUSTRY}}</td></tr>
    <tr><td><strong>Producto/Servicio</strong></td><td>{{PRODUCT_SERVICE}}</td></tr>
    <tr><td><strong>Modelo de negocio</strong></td><td>{{BUSINESS_MODEL}}</td></tr>
    <tr><td><strong>Revenue</strong></td><td>{{ANNUAL_REVENUE}}</td></tr>
    <tr><td><strong>Mercados</strong></td><td>{{MARKETS}}</td></tr>
    <tr><td><strong>Stage</strong></td><td>{{STAGE}}</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════ STAKEHOLDERS ═══ -->
  <h2>2. Stakeholders</h2>
  <div class="card-grid">
    {{STAKEHOLDER_CARDS}}
    <!--
    For each stakeholder, generate:
    <div class="card">
      <div class="card-header">
        <span class="card-name">{{NAME}}</span>
        <span class="card-role">{{TITLE}}</span>
      </div>
      <div>
        <span class="badge badge-{{INFLUENCE_COLOR}}">{{INFLUENCE}}</span>
        <span class="badge badge-{{ATTITUDE_COLOR}}">{{ATTITUDE}}</span>
      </div>
      <blockquote>"{{QUOTE}}"</blockquote>
    </div>

    Color mapping:
      Decision maker / Entusiasta = badge-green
      Conector / Neutral = badge-yellow
      Bloqueador / Resistente = badge-red
      Operador = badge-blue
    -->
  </div>

  <!-- ═══════════════════════════════════════════ PULSO ═══ -->
  <h2>3. PULSO Diagnostic</h2>
  <p style="color: var(--kai-gray); margin-bottom: 1rem;">
    Total: <strong style="color: var(--kai-red);">{{PULSO_TOTAL}}/25</strong> &mdash; {{PULSO_CLASSIFICATION}}
  </p>

  <div class="pulso-bar">
    <span class="pulso-letter">P</span>
    <span class="pulso-name">Panorama</span>
    <div class="pulso-track"><div class="pulso-fill" style="width: {{P_SCORE_PCT}}%; background: {{P_COLOR}};"></div></div>
    <span class="pulso-score">{{P_SCORE}}/5</span>
  </div>
  <div class="pulso-bar">
    <span class="pulso-letter">U</span>
    <span class="pulso-name">Urgencia</span>
    <div class="pulso-track"><div class="pulso-fill" style="width: {{U_SCORE_PCT}}%; background: {{U_COLOR}};"></div></div>
    <span class="pulso-score">{{U_SCORE}}/5</span>
  </div>
  <div class="pulso-bar">
    <span class="pulso-letter">L</span>
    <span class="pulso-name">Logro</span>
    <div class="pulso-track"><div class="pulso-fill" style="width: {{L_SCORE_PCT}}%; background: {{L_COLOR}};"></div></div>
    <span class="pulso-score">{{L_SCORE}}/5</span>
  </div>
  <div class="pulso-bar">
    <span class="pulso-letter">S</span>
    <span class="pulso-name">Sit. Critica</span>
    <div class="pulso-track"><div class="pulso-fill" style="width: {{SC_SCORE_PCT}}%; background: {{SC_COLOR}};"></div></div>
    <span class="pulso-score">{{SC_SCORE}}/5</span>
  </div>
  <div class="pulso-bar">
    <span class="pulso-letter">O</span>
    <span class="pulso-name">Organizacion</span>
    <div class="pulso-track"><div class="pulso-fill" style="width: {{O_SCORE_PCT}}%; background: {{O_COLOR}};"></div></div>
    <span class="pulso-score">{{O_SCORE}}/5</span>
  </div>

  <!--
  Score-to-percentage: (score / 5) * 100
  Color mapping:
    4-5: var(--kai-success) = #48BB78
    3:   var(--kai-warning) = #ECC94B
    0-2: var(--kai-danger)  = #FC8181
  -->

  <!-- ═══════════════════════════════════════════ PAIN POINTS ═══ -->
  <h2>4. Pain Points</h2>
  <div class="card-grid">
    {{PAIN_POINT_CARDS}}
    <!--
    For each pain point, generate:
    <div class="card">
      <div class="card-header">
        <span class="pain-number">{{N}}</span>
        <span class="badge badge-blue">{{DEPARTMENT}}</span>
      </div>
      <p style="margin: 0.75rem 0; font-weight: 600;">{{DESCRIPTION}}</p>
      <blockquote>"{{VERBATIM_QUOTE}}"</blockquote>
      <div class="pain-meta">
        <span>{{QUANTIFICATION}}</span>
        <span>{{FREQUENCY}}</span>
      </div>
    </div>
    -->
  </div>

  <!-- ═══════════════════════════════════════════ SYSTEMS ═══ -->
  <h2>5. Systems Landscape</h2>

  <h3>Current State</h3>
  <div class="mermaid">
    {{MERMAID_CURRENT_STATE}}
    <!--
    Generate a Mermaid graph TD showing:
    - All systems from business-context.md section 5
    - Connection types (solid = API, dashed = manual, dotted = missing)
    - Mark friction points with red styling

    Example:
    graph TD
      A["Plataforma Forte<br/><small>SaaS propio</small>"] --> B["LinkedIn CEO<br/><small>20K followers</small>"]
      A -.->|"No existe"| C["Stack de Marketing<br/><small>AUSENTE</small>"]
      style A fill:#0F3460,stroke:#E94560,color:#fff
      style C fill:#E94560,stroke:#fff,color:#fff
    -->
  </div>

  <h3>Proposed: AI-OS Architecture</h3>
  <div class="mermaid">
    {{MERMAID_PROPOSED}}
    <!--
    Generate a Mermaid graph TD showing:
    - Same systems connected through AI-OS hub
    - {{CLIENT_SLUG}} AI-OS node in center (accent color)
    - Dashboard and team outputs

    Example:
    graph TD
      A["{{SYSTEM_1}}"] -->|API| AIOS["AI-OS {{CLIENT_SLUG}}"]
      B["LinkedIn"] -->|Automation| AIOS
      C["Growth Stack"] -->|Integration| AIOS
      AIOS -->|"Real-time"| D["Dashboard"]
      AIOS -->|"Alertas"| E["Equipo"]
      style AIOS fill:#E94560,stroke:#fff,color:#fff,stroke-width:3px
      style D fill:#48BB78,stroke:#fff,color:#fff
    -->
  </div>

  <!-- ═══════════════════════════════════════════ BUYING SIGNALS ═══ -->
  <h2>6. Buying Signals</h2>
  <div class="card-grid">
    {{BUYING_SIGNAL_CARDS}}
    <!--
    For each signal, generate:
    <div class="card signal-{{TYPE}}">
      <div class="card-header">
        <span class="badge badge-{{COLOR}}">{{TYPE}}</span>
        <span class="badge badge-blue">{{WEIGHT}}</span>
      </div>
      <p style="font-weight: 600;">{{SIGNAL_DESC}}</p>
      <blockquote>"{{QUOTE}}"</blockquote>
    </div>

    Type mapping:
      Positiva = signal-positive, badge-green
      Negativa = signal-negative, badge-red
    -->
  </div>

  <!-- ═══════════════════════════════════════════ OPPORTUNITY ═══ -->
  <h2>7. Opportunity</h2>
  <table>
    <tr><th>Campo</th><th>Dato</th></tr>
    <tr><td><strong>Tier recomendado</strong></td><td>{{RECOMMENDED_TIER}}</td></tr>
    <tr><td><strong>Rango de precio</strong></td><td>{{PRICE_RANGE}}</td></tr>
    <tr><td><strong>Ciclo de venta</strong></td><td>{{SALES_CYCLE}}</td></tr>
    <tr><td><strong>Probabilidad de cierre</strong></td><td>{{CLOSE_PROBABILITY}}</td></tr>
    <tr><td><strong>Razon</strong></td><td>{{PROBABILITY_REASON}}</td></tr>
  </table>

  <!-- ═══════════════════════════════════════════ NEXT STEPS ═══ -->
  <h2>8. Next Steps</h2>
  <table>
    <tr><th>#</th><th>Accion</th><th>Responsable</th><th>Deadline</th></tr>
    {{ACTION_ROWS}}
    <!--
    For each action item from business-context.md:
    <tr>
      <td>{{N}}</td>
      <td>{{ACTION}}</td>
      <td>{{OWNER}}</td>
      <td>{{DATE}}</td>
    </tr>
    -->
  </table>

  <!-- ═══════════════════════════════════════════ FOOTER ═══ -->
  <footer class="footer">
    <div class="tagline">{{CLIENT_TAGLINE}}</div>
    <p>{{CLIENT_DISPLAY_NAME}}</p>
    <p style="margin-top: 1rem;">{{CLIENT_CONTACT_EMAIL}} &middot; {{CLIENT_WEBSITE}}</p>
  </footer>

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

</body>
</html>
```

## Population Instructions

1. Read `clients/{{CLIENT_SLUG}}/deals/<company-slug>/business-context.md`
2. Read `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` to resolve `{{CLIENT_DISPLAY_NAME}}`, `{{CLIENT_TAGLINE}}`, `{{CLIENT_CONTACT_EMAIL}}`, `{{CLIENT_WEBSITE}}`
3. Map each section to the corresponding HTML section above
4. For PULSO bars, calculate:
   - `{{X_SCORE_PCT}}` = score / 5 * 100
   - `{{X_COLOR}}` = #48BB78 (4-5), #ECC94B (3), #FC8181 (0-2)
5. For Mermaid diagrams, generate valid Mermaid syntax from the systems landscape data
6. For stakeholder/pain/signal cards, generate one `<div class="card">` per item
7. Save the complete HTML to `clients/{{CLIENT_SLUG}}/deals/<company-slug>/discovery-report.html`

**Modo de falla**: si `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md` no existe, detente y pide al operador que configure el cliente antes de generar el reporte.

## Quality Gates

1. All {{PLACEHOLDER}} variables must be resolved (no raw placeholders in output)
2. Mermaid diagrams must use valid syntax (test with mermaid.live if unsure)
3. All quotes must be verbatim from the transcript
4. No anti-words in any text (check `clients/{{CLIENT_SLUG}}/brand-config/brand-voice.md`)
5. File must be < 500KB
6. Must render correctly when opened directly in a browser
