# GrowthOS Context Object (GCO) — Schema Definition

El GCO es el estado persistente que GrowthOS mantiene para cada usuario/cliente. Permite que GrowthOS "recuerde" el contexto entre sesiones y active los skills correctos con la información completa.

## Schema YAML

```yaml
# GrowthOS Context Object
version: "1.0"
created_at: "2026-02-17T10:00:00Z"
updated_at: "2026-02-17T15:30:00Z"

# Información de la empresa (de seed questionnaire)
company:
  name: "DataFlow"
  industry: "Consultoría de analytics"
  size: "8 personas, $300K revenue anual"
  location: "México"
  years_in_market: 2

# Oferta (de seed questionnaire)
offer:
  type: "Servicio" # Producto, Servicio, Híbrido
  description: "Consultoría de implementación de analytics para e-commerce"
  price_range: "$15K-$30K por proyecto"
  model: "Project-based" # One-time, Recurring, Usage-based, Project-based

# Dolor/Bottleneck (de seed questionnaire)
pain:
  bottleneck: "atracción" # atracción, conversión, retención, identidad
  specific: "No tengo suficientes leads"
  quantified: "Necesito 10-15 leads/mes para cerrar 2-3 proyectos"
  impact: "Sin leads, no puedo crecer"

# Activos existentes (de seed questionnaire)
assets:
  content:
    - "Blog con algunos posts (bajo tráfico)"
    - "LinkedIn (poco uso)"
  tools:
    - "CRM básico"
  team:
    - "8 personas"
    - "2 vendedores"
  clients:
    - "Algunos clientes existentes con buenos resultados"

# Diagnóstico PULSO completo
pulso:
  panorama:
    score: 65
    status: "moderate"
    notes: "Tiene algunos clientes pero no escala"
  urgencia:
    score: 80
    status: "high"
    notes: "Necesita leads urgentemente"
  logro:
    score: 70
    status: "moderate"
    notes: "Buenos resultados con clientes existentes"
  situacion_critica:
    score: 60
    status: "moderate"
    notes: "No hay crisis pero hay presión"
  organizacion:
    score: 55
    status: "low"
    notes: "Falta estructura de marketing"

# Fase actual
phase:
  current: "atraer" # definir, atraer, convertir, escalar
  started_at: "2026-02-17T10:30:00Z"
  progress: 0.4 # 0.0 a 1.0

# Skills completados
completed_skills:
  - skill: "icp-analysis"
    completed_at: "2026-02-17T11:00:00Z"
    output: "icp_profile.md"
  - skill: "positioning"
    completed_at: "2026-02-17T12:00:00Z"
    output: "positioning_statement.md"

# Outputs generados (artefactos)
outputs:
  icp:
    file: "icp_profile.md"
    created_at: "2026-02-17T11:00:00Z"
    score: 75
    validated: true
  positioning:
    file: "positioning_statement.md"
    created_at: "2026-02-17T12:00:00Z"
    statement: "DataFlow es la consultoría de analytics que implementa sistemas de medición para e-commerce en México, ayudando a empresas a tomar decisiones basadas en datos en lugar de intuición."
  competitive_landscape:
    file: "competitive_landscape.md"
    created_at: "2026-02-17T13:00:00Z"
    competitors: 5

# Datos de reuniones (si está conectado a Meeting Intelligence MCP)
meeting_data:
  last_meeting: "2026-02-17T14:00:00Z"
  total_meetings: 3
  transcripts: [] # Array de transcript IDs del MCP
  insights: [] # Insights extraídos de reuniones

# Governance (Constitución Agéntica — os/governance/agentic-constitution.md)
trust_levels:
  # Nivel de confianza por skill: HITL (default), HOTL, HOOTL
  # Se actualiza según criterios de graduación del Art. V
  icp-analysis: "HOTL"        # Green zone, graduado tras 50+ ejecuciones exitosas
  positioning: "HITL"          # Yellow zone, requiere validación estratégica
  competitive-analysis: "HOTL" # Green zone, graduado
  content-strategy: "HITL"     # Yellow zone
  quiz-funnel: "HITL"          # Yellow zone
  plainiq-diagnostic: "HOTL"     # Green zone, scoring formulaico
  # ... (se expande con cada skill usado por el cliente)

escalation_log:
  # Registro de escalaciones (Art. IV) — alimenta graduación de confianza
  - timestamp: "2026-02-17T14:30:00Z"
    trigger: "low_confidence"
    skill: "proposal-generation"
    confidence: 62
    resolution: "Usuario proporcionó contexto adicional sobre decisor"
    resolved_by: "human"
    impact: "Output regenerado con confidence 89%"

quality_metrics:
  # Métricas por skill para tracking de graduación y drift detection
  icp-analysis:
    total_executions: 12
    avg_confidence: 88
    avg_quality_score: 8.1
    escalation_rate: 0.08  # 8% — dentro de rango normal
    human_edit_rate: 0.05  # 5% — bajo, candidato a graduación
    last_execution: "2026-02-17T11:00:00Z"
    cost_total_usd: 2.40
  proposal-generation:
    total_executions: 3
    avg_confidence: 74
    avg_quality_score: 7.8
    escalation_rate: 0.33  # 33% — alto, mantener HITL
    human_edit_rate: 0.25
    last_execution: "2026-02-17T15:00:00Z"
    cost_total_usd: 1.80

# Metadatos
metadata:
  growth_stage: "growth" # early, growth, scale
  icp_draft: "E-commerce en México, $1M-$10M revenue, 20-100 empleados"
  team_constraints: "Equipo pequeño, presupuesto limitado"
  asset_inventory: "Blog básico, LinkedIn sin usar, sin funnel"
```

## Campos Principales

### company
Información firmográfica básica recopilada en el seed questionnaire.

### offer
Descripción de la oferta: qué vende, a qué precio, qué modelo de negocio.

### pain
El bottleneck principal identificado. Determina la fase inicial.

### assets
Inventario de activos existentes (contenido, herramientas, equipo, clientes).

### pulso
Diagnóstico PULSO completo con 5 dimensiones:
- **Panorama**: Situación general del negocio
- **Urgencia**: Nivel de urgencia del problema
- **Logro**: Resultados logrados hasta ahora
- **Situación Crítica**: Si hay una crisis inminente
- **Organización**: Nivel de estructura y procesos

Cada dimensión tiene:
- `score`: 0-100
- `status`: "low", "moderate", "high"
- `notes`: Observaciones específicas

### phase
Fase actual del usuario:
- `current`: definir, atraer, convertir, escalar
- `started_at`: Cuándo entró a esta fase
- `progress`: 0.0 a 1.0 (cuánto ha completado)

### completed_skills
Lista de skills que el usuario ya completó, con:
- `skill`: ID del skill (ej: "icp-analysis")
- `completed_at`: Timestamp
- `output`: Archivo generado

### outputs
Artefactos generados por los skills. Cada output tiene:
- `file`: Nombre del archivo
- `created_at`: Timestamp
- Datos específicos del output (varía por tipo)

### trust_levels
Nivel de confianza por skill, gestionado por la Constitución Agéntica (`os/governance/agentic-constitution.md`, Art. V):
- `HITL` (Human-In-The-Loop): Default — humano aprueba antes de ejecución
- `HOTL` (Human-On-The-Loop): Humano monitorea, interviene por excepción (>95% accuracy, 30 días)
- `HOOTL` (Human-Out-Of-The-Loop): Ejecución autónoma (>99% accuracy, 90 días)

Se actualiza automáticamente según criterios de graduación. Puede degradarse si baja la precisión.

### escalation_log
Registro cronológico de escalaciones (Art. IV). Cada entrada captura:
- `trigger`: Tipo de escalación (low_confidence, critical_score, sentiment_risk, quality_failure, fragile_giant)
- `skill`: Skill que generó la escalación
- `confidence`: Score de confianza al momento del trigger
- `resolution`: Cómo se resolvió
- `impact`: Resultado de la resolución

Alimenta los criterios de graduación de confianza — escalaciones frecuentes bloquean graduación.

### quality_metrics
Métricas acumuladas por skill para tracking de rendimiento y drift detection:
- `total_executions`: Conteo total
- `avg_confidence`: Confianza promedio (0-100)
- `avg_quality_score`: Quality score promedio del output
- `escalation_rate`: Porcentaje de ejecuciones que generaron escalación
- `human_edit_rate`: Porcentaje de outputs editados por el humano
- `cost_total_usd`: Costo acumulado en tokens

### meeting_data
Datos de reuniones si está conectado a Meeting Intelligence MCP:
- `last_meeting`: Última reunión registrada
- `total_meetings`: Total de reuniones
- `transcripts`: IDs de transcripts del MCP
- `insights`: Insights extraídos de las reuniones

## Persistencia del GCO

El GCO se guarda en:
- **Local**: `~/.growthos/contexts/{company_name}.yaml`
- **Cloud** (futuro): Sincronización opcional

## Uso del GCO

### Al iniciar sesión
1. GrowthOS carga el GCO del usuario
2. Identifica la fase actual
3. Muestra progreso y próximos pasos

### Al activar un skill
1. GrowthOS pasa el GCO completo al skill
2. El skill usa el contexto para personalizar su output
3. El skill actualiza el GCO con nuevos outputs

### Al completar una fase
1. GrowthOS actualiza `phase.current` a la siguiente fase
2. Resetea `phase.progress` a 0.0
3. Sugiere skills de la nueva fase

## Integración con Meeting Intelligence

El GCO se conecta con el Universal Context Object (UCO) de Meeting Intelligence:

```yaml
# Mapeo UCO → GCO
meeting_data:
  uco_id: "meeting-123"
  participants: ["Juan", "María"]
  topics: ["ICP", "Positioning"]
  action_items: ["Validar ICP con 3 clientes"]
  next_meeting: "2026-02-24T10:00:00Z"
```

Ver `../bridges/meeting-intelligence.md` para detalles completos del bridge.

## Referencias

- Master orchestrator: `../growthOS.md`
- Seed questionnaire: `seed-questionnaire.md`
- Meeting Intelligence bridge: `../bridges/meeting-intelligence.md`
