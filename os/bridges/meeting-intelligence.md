# Meeting Intelligence MCP Bridge

Documentación del bridge entre GrowthOS y Meeting Intelligence MCP server. Permite que GrowthOS acceda a datos de reuniones, transcripts, y insights para enriquecer el GCO y activar skills basados en conversaciones reales.

## Arquitectura MCP

Meeting Intelligence es un MCP server construido con FastMCP que proporciona acceso a:
- Transcripts de reuniones
- Insights extraídos de conversaciones
- Workflows de agentes activados por reuniones

### MCP Server

- **Repositorio**: Meeting Intelligence repo (FastMCP-based)
- **Protocolo**: MCP (Model Context Protocol)
- **Herramientas disponibles**: Ver sección "Tools Disponibles"

## Tools Disponibles

### 1. `search_transcripts`

Busca transcripts de reuniones por criterios.

**Parámetros**:
- `query`: Texto a buscar
- `date_range`: Rango de fechas (opcional)
- `participants`: Lista de participantes (opcional)

**Retorna**: Lista de transcripts que coinciden con los criterios

**Uso en GrowthOS**: Buscar reuniones donde se mencionó un tema específico (ej: "ICP", "pipeline", "churn")

### 2. `get_transcript`

Obtiene un transcript completo de una reunión específica.

**Parámetros**:
- `transcript_id`: ID del transcript

**Retorna**: Transcript completo con:
- Participantes
- Timestamps
- Conversación completa
- Action items (si están extraídos)

**Uso en GrowthOS**: Obtener contexto completo de una reunión para enriquecer GCO

### 3. `trigger_agent_workflow`

Activa un workflow de agente basado en eventos de reunión.

**Parámetros**:
- `workflow_name`: Nombre del workflow
- `transcript_id`: ID del transcript que activa el workflow
- `context`: Contexto adicional (opcional)

**Retorna**: ID del workflow activado

**Uso en GrowthOS**: Activar workflows automáticos después de reuniones (ej: crear PIC después de kickoff call)

## Mapeo Fase → MCP Tools

### Fase DEFINIR

| Skill | MCP Tool | Uso |
|-------|----------|-----|
| `icp-analysis` | `search_transcripts` | Buscar reuniones donde se mencionó "cliente ideal", "target market" |
| `positioning` | `get_transcript` | Obtener transcript de reunión donde se discutió diferenciación |
| `competitive-analysis` | `search_transcripts` | Buscar menciones de competidores en reuniones |

### Fase ATRAER

| Skill | MCP Tool | Uso |
|-------|----------|-----|
| `content-strategy` | `search_transcripts` | Buscar preguntas frecuentes en reuniones con clientes |
| `quiz-funnel` | `get_transcript` | Analizar discovery calls para identificar PREGUNTA RAÍZ |
| `escala` | `search_transcripts` | Buscar discusiones sobre pricing y ofertas |

### Fase CONVERTIR

| Skill | MCP Tool | Uso |
|-------|----------|-----|
| `discovery-mastery` | `get_transcript` | Analizar discovery calls para extraer PULSO |
| `discovery-demo` | `get_transcript` | Obtener transcript completo de discovery→demo progression |
| `pipeline-management` | `search_transcripts` | Buscar reuniones sobre pipeline, forecasting |
| `proposal-generation` | `get_transcript` | Obtener contexto de reunión para personalizar propuesta |
| `deal-strategy` | `search_transcripts` | Buscar win/loss patterns en reuniones |

### Fase ESCALAR

| Skill | MCP Tool | Uso |
|-------|----------|-----|
| `customer-success-ops` | `get_transcript` | Obtener transcript de kickoff call para crear PIC |
| `renewal-expansion` | `search_transcripts` | Buscar reuniones sobre renovación, expansión |
| `coaching-cadence` | `get_transcript` | Analizar coaching calls para ROCA assessment |

## Bridge UCO → GCO

Meeting Intelligence usa el **Universal Context Object (UCO)** para almacenar contexto de reuniones. GrowthOS usa el **GrowthOS Context Object (GCO)**. El bridge mapea campos entre ambos.

### Mapeo de Campos

| UCO Field | GCO Field | Descripción |
|-----------|-----------|-------------|
| `meeting.id` | `meeting_data.transcripts[]` | ID del transcript |
| `meeting.participants` | `meeting_data.participants` | Lista de participantes |
| `meeting.date` | `meeting_data.last_meeting` | Fecha de la reunión |
| `insights.topics` | `meeting_data.insights[]` | Topics extraídos |
| `insights.action_items` | `outputs.action_items[]` | Action items de la reunión |
| `insights.pulso` | `pulso.*` | Diagnóstico PULSO extraído (si aplica) |

### Ejemplo de Bridge

```yaml
# UCO (de Meeting Intelligence)
meeting:
  id: "meeting-123"
  participants: ["Juan", "María"]
  date: "2026-02-17T10:00:00Z"
  
insights:
  topics: ["ICP", "Positioning"]
  action_items:
    - "Validar ICP con 3 clientes"
    - "Crear positioning statement"
  pulso:
    panorama: 65
    urgencia: 80

# GCO (en GrowthOS)
meeting_data:
  last_meeting: "2026-02-17T10:00:00Z"
  total_meetings: 1
  transcripts: ["meeting-123"]
  insights:
    - topic: "ICP"
      action_item: "Validar ICP con 3 clientes"
    - topic: "Positioning"
      action_item: "Crear positioning statement"

pulso:
  panorama:
    score: 65
    status: "moderate"
  urgencia:
    score: 80
    status: "high"
```

## Flujos de Integración

### Flujo 1: Enriquecer GCO con Reunión

```
1. Usuario tiene reunión (grabada en Meeting Intelligence)
2. Meeting Intelligence extrae UCO
3. GrowthOS ejecuta: `get_transcript(transcript_id)`
4. GrowthOS extrae insights relevantes
5. GrowthOS actualiza GCO con meeting_data
6. GrowthOS sugiere skills basados en insights
```

### Flujo 2: Activar Skill Basado en Reunión

```
1. Reunión de kickoff call (grabada)
2. Meeting Intelligence activa workflow: "extract_pic_data"
3. GrowthOS ejecuta: `trigger_agent_workflow("pic_creation", transcript_id)`
4. GrowthOS crea PIC basado en transcript
5. GrowthOS actualiza GCO.outputs.pic
```

### Flujo 3: Búsqueda de Contexto Histórico

```
1. Usuario pregunta: "¿Qué dijimos sobre el ICP en la última reunión?"
2. GrowthOS ejecuta: `search_transcripts(query="ICP", date_range="last_30_days")`
3. GrowthOS obtiene transcripts relevantes
4. GrowthOS muestra extractos relevantes al usuario
```

## Instrucciones de Setup

### 1. Instalar MCP Server

El MCP server de Meeting Intelligence debe estar instalado y configurado en el entorno de Claude Code.

**Requisitos**:
- FastMCP instalado
- Meeting Intelligence repo clonado
- Configuración de MCP en Claude Code settings

### 2. Configurar Bridge en GrowthOS

El bridge se activa automáticamente cuando:
- MCP server está disponible
- GCO tiene `meeting_data` habilitado

**No requiere configuración adicional** — GrowthOS detecta el MCP server y habilita las herramientas.

### 3. Verificar Conexión

Para verificar que el bridge funciona:

```
1. Ejecutar `/estado` en GrowthOS
2. Verificar que `meeting_data` aparece en el GCO
3. Si hay reuniones, deberían aparecer en `meeting_data.transcripts`
```

## Limitaciones y Consideraciones

### Privacidad

- Los transcripts contienen información sensible
- GrowthOS solo accede a transcripts cuando el usuario lo autoriza explícitamente
- Los datos de reuniones se almacenan localmente en el GCO

### Performance

- `search_transcripts` puede ser lento con muchos transcripts
- Usar `date_range` para limitar búsquedas
- Cachear resultados cuando sea posible

### Dependencias

- El bridge requiere que Meeting Intelligence MCP esté activo
- Si el MCP no está disponible, GrowthOS funciona sin él (sin meeting_data)

## Referencias

- Master orchestrator: `../growthOS.md`
- GCO schema: `../intake/context-object.md`
- Meeting Intelligence repo: (URL del repo)
- MCP Protocol: (URL de documentación MCP)
