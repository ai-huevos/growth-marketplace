---
description: Show current GrowthOS state — phase, completed skills, outputs, and next steps
argument-hint: (none — shows current state from GCO)
allowed-tools: all
---

# Command: /estado

Muestra el estado actual del usuario en GrowthOS: fase actual, skills completados, outputs generados, y próximos pasos sugeridos.

## Uso

```
/estado
```

No requiere argumentos. Lee el GCO y muestra el estado.

## Flujo

1. **Carga GCO**: Lee el GrowthOS Context Object del usuario
   - Si no existe GCO, sugiere ejecutar `/os` primero

2. **Muestra estado**:
   - Fase actual y progreso (0-100%)
   - Skills completados con timestamps
   - Outputs generados (archivos)
   - PULSO diagnóstico (si existe)
   - Meeting data (si está conectado a MCP)

3. **Sugiere próximos pasos**:
   - ¿Qué skill debería activarse siguiente?
   - ¿Qué falta para completar la fase actual?
   - ¿Hay outputs que pueden usarse como input para otros skills?

## Formato de Salida

```
## Estado Actual — GrowthOS

### Información de la Empresa
- Nombre: [company.name]
- Industria: [company.industry]
- Tamaño: [company.size]

### Fase Actual
- Fase: [phase.current]
- Progreso: [phase.progress]%
- Iniciada: [phase.started_at]

### Skills Completados ([count])
1. [skill] — [completed_at]
   Output: [output.file]
2. [skill] — [completed_at]
   Output: [output.file]
[...]

### Outputs Generados
- [output.type]: [output.file] (creado [created_at])
- [output.type]: [output.file] (creado [created_at])
[...]

### Diagnóstico PULSO
- Panorama: [score]/100 ([status])
- Urgencia: [score]/100 ([status])
- Logro: [score]/100 ([status])
- Situación Crítica: [score]/100 ([status])
- Organización: [score]/100 ([status])

### Próximos Pasos Sugeridos
1. [Siguiente skill a activar] — [razón]
2. [Output a usar como input] — [para qué skill]
3. [Checkpoint recomendado] — [cuándo]

### Comandos Disponibles
- `/roadmap` — Ver roadmap de 90 días
- `/os` — Reiniciar intake (si quieres cambiar fase)
- [skill-specific commands según fase]
```

## Ejemplo

```
Usuario: /estado

PM: "## Estado Actual — GrowthOS

### Información de la Empresa
- Nombre: DataFlow
- Industria: Consultoría de analytics
- Tamaño: 8 personas, $300K revenue anual

### Fase Actual
- Fase: ATRAER
- Progreso: 40%
- Iniciada: 2026-02-17

### Skills Completados (2)
1. icp-analysis — 2026-02-17T11:00:00Z
   Output: icp_profile.md (score: 75)
2. positioning — 2026-02-17T12:00:00Z
   Output: positioning_statement.md

### Outputs Generados
- ICP: icp_profile.md (creado 2026-02-17T11:00:00Z)
- Positioning: positioning_statement.md (creado 2026-02-17T12:00:00Z)

### Próximos Pasos Sugeridos
1. content-strategy — Tienes ICP y positioning, ahora necesitas plan de contenido
2. escala — Define tu escalera de valor antes de crear contenido
3. Checkpoint Día 30 — Revisar progreso de fase ATRAER

### Comandos Disponibles
- `/roadmap` — Ver roadmap de 90 días
- `/quiz` — Crear quiz funnel con SONDA
- `/escala` — Definir escalera de valor"
```

## Referencias

- GCO schema: `os/intake/context-object.md`
- Master orchestrator: `os/growthOS.md`
- Fases: `os/phases/definir.md`, `os/phases/atraer.md`, `os/phases/convertir.md`, `os/phases/escalar.md`
