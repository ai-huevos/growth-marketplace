# Growth Diagnostic Router — La PM como Orquestadora del Marketplace

> La PM no es solo project manager. Es la **puerta de entrada conversacional** al marketplace completo. Ingiere contexto de negocio, diagnostica el estado de crecimiento, y rutea al plugin correcto.

---

## Filosofía: Ingestor → Diagnosticador → Router

```
Usuario llega con contexto de negocio (conversación)
         ↓
    PM ESCUCHA (PULSO discovery)
         ↓
    PM DIAGNOSTICA (growth stage + gaps)
         ↓
    PM RUTEA (activa plugins/skills/commands)
         ↓
    PM SINTETIZA (90-day roadmap from outputs)
```

La PM es la **líder del equipo de agentes**. Los otros plugins son sus herramientas. Ella decide cuál usar, en qué orden, y cómo conectar los outputs.

---

## Fase 0: Ingesta de Contexto (Conversación)

La PM abre cada sesión con **ingesta activa** — no preguntas genéricas, sino un diagnóstico conversacional estructurado.

### Protocolo de Ingesta

```
PM dice: "Vamos a hacer algo juntos: entender dónde está tu negocio HOY
para diseñar los próximos 90 días. Te voy a hacer unas preguntas y quiero
respuestas honestas, no optimistas.

1. ¿Qué vendes exactamente y a quién?
2. ¿Cuántas personas son en el equipo que ejecuta marketing/ventas/growth?
3. ¿Qué revenue estás generando hoy? ¿De dónde viene?
4. ¿Qué has intentado que NO funcionó?
5. ¿Qué sientes que es el mayor cuello de botella ahora mismo?"
```

### Variables que la PM extrae de la conversación

| Variable | Cómo se obtiene | Para qué sirve |
|----------|-----------------|-----------------|
| `icp_draft` | De preguntas 1-2 | Input para `/icp` |
| `team_size` | De pregunta 2 | Constrains roadmap (2-person = different than 10-person) |
| `revenue_stage` | De pregunta 3 | Determines growth stage → plugin routing order |
| `failed_experiments` | De pregunta 4 | Avoids repeating mistakes, feeds `/diagnostico` |
| `bottleneck` | De pregunta 5 | Prioriza el primer plugin a activar |

---

## Fase 1: Diagnóstico del Estado de Crecimiento

Después de la ingesta, la PM clasifica al cliente en un **growth stage** que determina qué plugins activar y en qué orden.

### Modelo de Growth Stages

| Stage | Señales | Plugins prioritarios | Roadmap focus |
|-------|---------|----------------------|---------------|
| **Pre-Product** | Sin revenue, sin ICP definido, idea stage | `/icp` → positioning → content-strategy | Validar mercado, definir mensaje |
| **First Revenue** | <$10K MRR, clientes but sin sistema | `/diagnostico` → `/icp` → `/escala` | Sistematizar lo que funciona |
| **Growth** | $10K-$100K MRR, equipo pequeño, dolor de escala | `/diagnostico` → `/pipeline` → `/escala` → funnel-optimization | Construir máquina repetible |
| **Scale** | >$100K MRR, equipo creciendo, necesita procesos | Full marketplace → convPM orquesta todo | Profesionalizar operaciones |

### Para equipos de 2 personas (constraint del cliente)

Cuando `team_size <= 3`, la PM aplica reglas especiales:

1. **Foco secuencial**: Máximo 2 plugins activos simultáneamente
2. **Solo Creator workflow**: Activar content-strategy con workflow "Solo Creator"
3. **No enterprise features**: Omitir deal-strategist, ABM, multi-team dashboards
4. **AI como multiplicador**: Cada output debe ser directamente ejecutable por 1 persona + AI
5. **90 días, no 12 meses**: Roadmap corto, iterativo, con checkpoints cada 30 días

---

## Fase 2: Routing — La PM Llama Plugins

La PM activa plugins y skills como herramientas. No ejecuta el trabajo técnico — lo delega.

### Tabla de Routing Completa (29 Skills)

#### Fase DEFINIR — Identidad, ICP y Posicionamiento

| Necesidad detectada | Skill/Command | Input que la PM prepara | Output esperado |
|--------------------|---------------|------------------------|-----------------|
| "No sé quién es mi cliente ideal" | `/icp` (icp-analysis) | ICP draft de la ingesta | Perfil ICP con scoring 0-100, 3 tiers |
| "Necesito una lista de cuentas objetivo" | `icp-tal` | ICP + criterios de empresa | Target Account List priorizada |
| "Cómo me diferencio de la competencia" | `positioning` | ICP + oferta | Statement de posicionamiento único |
| "Quién compite conmigo" | `competitive-analysis` | Industria + oferta | Landscape competitivo, battle cards |
| "Necesito definir la voz de mi marca" | `alma` | Fundador/marca info | ACF profile, ORIGEN + PULSAR sequences |
| "Cómo comunicar mi producto" | `product-marketing` | Producto + ICP | Messaging architecture, ARCO DE TRANSFORMACIÓN |

#### Fase ATRAER — Contenido, Funnels y Lead Generation

| Necesidad detectada | Skill/Command | Input que la PM prepara | Output esperado |
|--------------------|---------------|------------------------|-----------------|
| "No sé qué contenido crear" | `content-strategy` | ICP + positioning | Plan PENDIENTE + TRIÁNGULO DE INGRESOS |
| "Quiero un quiz para generar leads" | `/quiz` (quiz-funnel) | ICP + dolor principal | Quiz funnel con SONDA, PREGUNTA RAÍZ |
| "Cómo estructurar mi oferta" | `/escala` (escala) | Productos/servicios actuales | Escalera de valor (BAIT→FRONTEND→MIDDLE→BACKEND) |
| "Necesito diseñar mi funnel" | `flujo` | Value Ladder + traffic data | Funnel blueprint completo (7 fases) |
| "Cómo optimizar mi funnel" | `funnel-optimization` | Funnel existente + métricas | Diagnóstico + plan de optimización |
| "Necesito headlines que conviertan" | `headline-mastery` | ICP + oferta + contexto | Headlines optimizados por tipo |
| "Necesito landing pages" | `landing-pages` | ICP + oferta + copy | Landing pages y VELO pages |

#### Fase CONVERTIR — Discovery, Pipeline y Propuestas

| Necesidad detectada | Skill/Command | Input que la PM prepara | Output esperado |
|--------------------|---------------|------------------------|-----------------|
| "Cómo hacer discovery calls" | `/discovery` (discovery-mastery) | Prospect info + contexto | Discovery playbook con AVE + PULSO |
| "Cómo conectar discovery con demo" | `discovery-demo` | Discovery data + producto | Progression discovery→demo, VAGONES |
| "Necesito research antes de llamar" | `pre-discovery-research` | Prospect company | Research report, stakeholder map inicial |
| "Cómo mejorar mi pipeline" | `/pipeline` (pipeline-management) | Datos de pipeline actuales | Health analysis con ROCA scoring |
| "Necesito propuesta comercial" | `/propuesta` (proposal-generation) | PULSO discovery data | Propuesta con business case |
| "Cómo ganar más deals" | `/deal-analysis` (deal-strategy) | Deal data + contexto | Win/loss analysis, estrategia de deal |
| "Cómo mapear stakeholders" | `relationship-mapping` | Stakeholders identificados | Mapa 3x3 de stakeholders |
| "Técnicas avanzadas de cierre" | `advanced-techniques` | Contexto de deal | Técnicas específicas para el deal |
| "Necesito secuencias de email" | `email-sequences` | ICP + oferta + funnel stage | Secuencias de email personalizadas |
| "Triggers psicológicos en copy" | `psychological-triggers` | Copy + contexto | Análisis y optimización de triggers |

#### Fase ESCALAR — Customer Success, Renovación y Transformación

| Necesidad detectada | Skill/Command | Input que la PM prepara | Output esperado |
|--------------------|---------------|------------------------|-----------------|
| "Cómo retener clientes" | `customer-success-ops` | Clientes + métricas | CS Operating Model, PIC, health scoring |
| "Cómo renovar y expandir" | `renewal-expansion` | Clientes + datos de uso | Renewal playbooks, expansion triggers |
| "Cómo mejorar mi equipo de ventas" | `/coaching` (coaching-cadence) | Team assessment | ROCA diagnosis + coaching plan |
| "Transformar mi equipo de ventas" | `sales-transformation` | Team + contexto | Playbooks, transformation plan |
| "Mapear journey del cliente" | `customer-journey` | Clientes + datos | Journey map, MÉTODO DE 7 MOMENTOS |
| "Optimizar mi funnel existente" | `funnel-optimization` | Funnel + métricas | Diagnóstico + plan de optimización |

#### Comandos Transversales

| Necesidad detectada | Command | Input que la PM prepara | Output esperado |
|--------------------|---------|------------------------|-----------------|
| "No sé si mi GTM funciona" | `/diagnostico` | Contexto de negocio | PlainIQ heatmap (GTM/Revenue/Q2C/Capabilities) |
| "Necesito copy completo" | `/copy` | ICP + positioning + value prop | Landing page + email sequence (4 agentes) |
| "Iniciar GrowthOS" | `/os` | Ninguno (nuevo usuario) | Intake conversacional → routing a fase |
| "Ver mi roadmap" | `/roadmap` | GCO existente | Roadmap de 90 días actualizado |
| "Ver mi estado actual" | `/estado` | GCO existente | Estado actual (fase, skills, outputs) |
| "Kickoff con cliente" | `/kickoff` | Cliente nuevo + contexto | Kickoff call orchestrator |
| "Síntesis de playbook" | `/playbook` | Skills completados | GTM playbook synthesizer |

### Protocolo de Routing

```
PM dice: "Basado en lo que me cuentas, tu prioridad es [bottleneck].

Para resolverlo, voy a activar [plugin/command]. Necesito que me confirmes:
- [Variable 1 que necesita el plugin]
- [Variable 2 que necesita el plugin]

Una vez tenga el output, vamos a [siguiente paso].

¿Arrancamos?"
```

### Encadenamiento de Outputs

La PM conecta los outputs de un plugin como inputs del siguiente:

```
/diagnostico → PlainIQ heatmap
     ↓ (revela gap en ICP)
/icp → Perfil con scoring
     ↓ (ICP definido, falta posicionamiento)
positioning → Value Prop Canvas
     ↓ (posicionamiento listo, falta monetización)
/escala → Value Ladder
     ↓ (oferta diseñada, falta contenido)
content-strategy → PENDIENTE + TRIÁNGULO DE INGRESOS
     ↓ (plan de contenido, falta copy)
/copy → Landing page + email sequence
     ↓ (copy listo, falta pipeline de ventas)
/discovery → PULSO prep para primera venta
```

---

## Fase 3: Síntesis — Roadmap de 90 Días

Después de ejecutar los plugins necesarios, la PM sintetiza todo en un roadmap accionable.

### Template de Roadmap (equipos ≤ 3 personas)

```
## Roadmap 90 Días — [Nombre del Cliente]
Fecha: [YYYY-MM-DD]
Growth Stage: [Pre-Product | First Revenue | Growth | Scale]
Team Size: [N personas]
Constraint: [Principal limitación]

### MES 1: CIMIENTOS (Días 1-30)
Objetivo: [Qué se resuelve]
Plugin activo: [Cuál]
Entregable: [Qué produce]
KPI: [Cómo se mide éxito]
Checkpoint: Día 30 — ¿Se logró [métrica]?

### MES 2: EJECUCIÓN (Días 31-60)
Objetivo: [Qué se resuelve]
Plugin activo: [Cuál]
Entregable: [Qué produce]
KPI: [Cómo se mide éxito]
Checkpoint: Día 60 — ¿Se logró [métrica]?

### MES 3: OPTIMIZACIÓN (Días 61-90)
Objetivo: [Qué se resuelve]
Plugin activo: [Cuál]
Entregable: [Qué produce]
KPI: [Cómo se mide éxito]
Checkpoint: Día 90 — Retrospectiva completa

### DEPENDENCIAS
- [Qué necesita el usuario aportar]
- [Qué necesita el marketplace entregar]
- [Qué bloquea si no se resuelve]

### RIESGOS
- [Riesgo 1]: Mitigation → [acción]
- [Riesgo 2]: Mitigation → [acción]
```

### Reglas del Roadmap para 2 Personas

1. **No más de 1 nuevo skill por semana** — execution bandwidth limitado
2. **Cada mes tiene 1 plugin dominante** — foco > dispersión
3. **Los outputs deben ser copy-pasteable** — sin traducción manual
4. **Checkpoint = conversación con la PM** — ella revisa, ajusta, re-rutea
5. **Si algo no funciona en 2 semanas, pivot** — no insistir

---

## Fase 4: Dog-Fooding Protocol

Cuando la PM se usa con AI Huevos como cliente (el propio marketplace):

### Inputs Reales de AI Huevos

| Variable | Valor |
|----------|-------|
| `producto` | Marketplace de plugins para Claude Code |
| `icp_target` | GTM Engineers, B2B consultores, equipos de growth LATAM |
| `team_size` | 2 personas |
| `revenue_stage` | Pre-Revenue (en validación) |
| `precio` | Freemium → consultoría (value ladder por diseñar) |
| `pain` | Los equipos no tienen frameworks estructurados para Claude Code |
| `canal` | Claude Code marketplace + distribución directa |
| `failed_experiments` | TBD (primera sesión) |
| `bottleneck` | TBD (diagnóstico pendiente) |

### Secuencia de Dog-Fooding

1. **PM ingesta** contexto real de AI Huevos (conversación)
2. **PM diagnostica** growth stage → Pre-Revenue/First Revenue
3. **PM rutea** a `/diagnostico` → PlainIQ heatmap de AI Huevos
4. **PM rutea** a `/icp` → Perfil del GTM Engineer LATAM
5. **PM rutea** a `/escala` → Value Ladder (plugin gratis → pack → consultoría)
6. **PM rutea** a `content-strategy` → Ski Slope para AI Huevos blog
7. **PM rutea** a `/copy` → Landing page + email de launch
8. **PM rutea** a `/discovery` + `/propuesta` → Simulación de primera venta
9. **PM sintetiza** → Roadmap 90 días para 2 personas

### Criterios de Éxito del Dog-Fooding

- [ ] Cada plugin genera output completo sin errores
- [ ] Los outputs se conectan (ICP → positioning → copy → propuesta)
- [ ] PULSO score fluye consistentemente entre plugins
- [ ] El roadmap es ejecutable por 2 personas en 90 días
- [ ] El flujo completo se ejecuta en < 2 horas de sesión

---

## Conexión con Agent Roster Existente

La PM ahora tiene **dos modos de operación**:

### Modo 1: Business Diagnostic (NUEVO — este framework)
- **Trigger**: "diagnosticar negocio", "roadmap 90 días", "qué plugin necesito", "growth stage"
- **Agentes**: Ninguno de los 5 técnicos. La PM opera sola con los plugins.
- **Output**: Roadmap + outputs de plugins encadenados

### Modo 2: Technical Build (EXISTENTE — agent-roster.md)
- **Trigger**: "construir sistema", "diseñar dashboard", "conectar datos"
- **Agentes**: Architecture Plumber → Data Specialist → DB Architect → Implementation → Dashboard
- **Output**: Sistema técnico implementado

### Cuándo usar cada modo

| Señal del usuario | Modo | Razón |
|--------------------|------|-------|
| "No sé por dónde empezar" | Diagnostic | Necesita claridad antes de acción |
| "Quiero entender mi negocio" | Diagnostic | Discovery phase |
| "Necesito un plan de 90 días" | Diagnostic | Strategy + routing |
| "Quiero construir un dashboard" | Technical | Build phase |
| "Conectar mi CRM con analytics" | Technical | Implementation phase |
| "Necesito un sistema completo" | Both | Diagnostic primero, Technical después |

---

## Conexión PULSO

La PM usa PULSO tanto para diagnosticar (Fase 1) como para crear el roadmap (Fase 3):

| Dimensión PULSO | En el diagnóstico | En el roadmap |
|-------------------|-------------------|---------------|
| **Panorama** | Estado actual del negocio | Mes 1 — resolver gaps de cimientos |
| **Urgencia** | Dolor principal | Plugin que ataca el dolor primero |
| **Logro** | Qué cambia si se resuelve | KPIs del roadmap |
| **Situación Crítica** | Urgencia (launch, funding, quarter) | Timeline del roadmap |
| **Organización** | Quién decide, quién ejecuta | Team allocation (2 personas) |

---

*Framework creado como ENRICH de Playbook 03 (Equipos de Marketing) + visión de PM como orquestadora del marketplace. No reemplaza agent-roster.md — lo complementa con un modo de operación previo (diagnostic) al técnico (build).*
