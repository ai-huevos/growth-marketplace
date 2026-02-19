# T-013: Kickoff Call — CEMEX

**Test ID**: T-013
**Command**: `/kickoff`
**Input**: "Kickoff call con CEMEX"
**Executed**: 2026-02-18

---

## Contexto del Kickoff

| Campo | Valor |
|-------|-------|
| **Cliente** | CEMEX México |
| **Deal** | TalentFlow Enterprise - $150K |
| **AE** | [AE TalentFlow] |
| **CSM asignado** | [CSM por asignar] |
| **Fecha de firma** | 2026-02-18 |
| **Go-live target** | 2026-04-15 (8 semanas) |

---

## Fase 1: Pre-Kickoff Checklist

### Documentos a Preparar

| Documento | Status | Owner |
|-----------|--------|-------|
| Contrato firmado | ✅ | Legal |
| SOW (Statement of Work) | ✅ | PM |
| Internal Brief (AE → CSM) | ✅ | AE |
| Stakeholder map | 🔲 | CSM |
| Technical requirements | 🔲 | Technical Lead |
| Success metrics acordadas | ✅ | AE |

### Internal Brief: AE → CSM

**Resumen del deal**:
- CEMEX compró TalentFlow Enterprise para reducir rotación de 18% a 12%
- Trigger: Perdieron 3 gerentes clave en Q4 + CFO pidió plan de retención
- Champion: Director de Capital Humano (muy comprometido)
- Sponsor ejecutivo: CFO (aprobó presupuesto)
- PULSO score: 39/50 — deal de alta calidad

**Sensibilidades**:
- IT de CEMEX es conservador — necesitan tiempo para validar seguridad
- Uniones sindicales en plantas — comunicación sensible requerida
- Competencia interna: Algunos gerentes prefieren status quo

**Quick wins necesarios**:
- Mostrar valor en primeras 2 semanas (piloto en área pequeña)
- Dashboard ejecutivo para CFO antes de QBR Q2

---

## Fase 2: Agenda del Kickoff (60 min)

```
KICKOFF CALL — CEMEX × TALENTFLOW
═══════════════════════════════════════════════════════

BLOQUE 1: ALINEACIÓN (20 min)
├── Bienvenida y presentaciones (5 min)
├── Recapitulación de objetivos acordados (5 min)
├── Validación de success metrics (5 min)
└── Confirmación de stakeholders y roles (5 min)

BLOQUE 2: PLAN DE IMPACTO (25 min)
├── Presentación del JIP - Joint Impact Plan (10 min)
├── Timeline de implementación (5 min)
├── Hitos y checkpoints (5 min)
└── Riesgos y mitigaciones (5 min)

BLOQUE 3: OPERACIONES (15 min)
├── Proceso de soporte y escalación (5 min)
├── Canales de comunicación (5 min)
└── Próximos pasos y tareas inmediatas (5 min)

═══════════════════════════════════════════════════════
```

---

## Fase 3: Joint Impact Plan (JIP)

### Objetivos del Proyecto

| Objetivo | Métrica | Baseline | Target | Timeline |
|----------|---------|----------|--------|----------|
| Reducir rotación | Tasa anual | 18% | 12% | 12 meses |
| Predecir renuncias | Días de anticipación | 0 | 30 días | 3 meses |
| Mejorar engagement | NPS interno | 32 | 45 | 12 meses |
| Adopción del sistema | % managers activos | 0% | 90% | 3 meses |

### Hitos del Proyecto

| Hito | Semana | Entregable | Responsable |
|------|--------|------------|-------------|
| **Kickoff completado** | 1 | Roles confirmados, accesos solicitados | CSM |
| **Integración SAP** | 2-3 | Data fluyendo, sync diario | Tech Lead |
| **Piloto lanzado** | 4 | 500 empleados activos (1 área) | CSM |
| **Primeras alertas** | 5 | Sistema generando flags de riesgo | CSM |
| **Training HRBPs** | 6 | 100% HRBPs capacitados | CSM |
| **Rollout completo** | 8 | 6,200 empleados activos | CSM |
| **QBR Q2** | 12 | Reporte de impacto a CFO | CSM + Dir CH |

### Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación | Owner |
|--------|--------------|---------|------------|-------|
| Delay en integración SAP | Media | Alto | Tech lead dedicado, buffer de 1 semana | Tech Lead |
| Baja adopción de managers | Media | Alto | Training obligatorio + gamification | CSM |
| Resistencia en plantas | Media | Medio | Comunicación sindical previa | Dir CH |
| Data incompleta en histórico | Baja | Medio | Algoritmo adaptativo | Tech Lead |

---

## Fase 4: Stakeholder Map

### CEMEX

| Rol | Nombre | Responsabilidad | Engagement |
|-----|--------|-----------------|------------|
| **Sponsor Ejecutivo** | CFO | Aprobación de presupuesto, QBRs | Trimestral |
| **Champion** | Director CH | Decisiones operativas, adopción | Semanal |
| **Technical Owner** | [Por definir] | Integración SAP, seguridad | Semanal |
| **HRBPs** | [5 personas] | Usuarios principales, intervenciones | Diario |
| **IT Security** | [Por definir] | Validación de seguridad | Fase 1 |

### TalentFlow

| Rol | Nombre | Responsabilidad | Engagement |
|-----|--------|-----------------|------------|
| **CSM** | [Por asignar] | Éxito del cliente, QBRs | Semanal |
| **Technical Lead** | [Por asignar] | Implementación, integraciones | Fase 1-2 |
| **PM** | [Por asignar] | Coordinación, timeline | Semanal |
| **Soporte** | Equipo | Tickets, SLA 4h | On-demand |
| **Executive Sponsor** | VP CS | Escalación, strategic reviews | Mensual |

---

## Fase 5: Primeros 30 Días

### Semana 1: Setup

| Día | Actividad | Owner |
|-----|-----------|-------|
| 1 | Kickoff call (esta reunión) | CSM |
| 2 | Envío de accesos y credenciales | Tech Lead |
| 3 | Call técnico con IT CEMEX | Tech Lead |
| 4 | Definición de área piloto | Dir CH |
| 5 | Solicitud de data histórica | Tech Lead |

### Semana 2: Integración

| Día | Actividad | Owner |
|-----|-----------|-------|
| 8-9 | Configuración de conexión SAP | Tech Lead |
| 10 | Prueba de sync de data | Tech Lead |
| 11 | Validación de seguridad con IT | Tech Lead |
| 12 | Sign-off de integración | Dir CH |

### Semana 3: Piloto

| Día | Actividad | Owner |
|-----|-----------|-------|
| 15 | Onboarding de HRBPs del piloto | CSM |
| 16 | Activación de 500 empleados | Tech Lead |
| 17 | Configuración de umbrales de alerta | CSM |
| 18 | Primera revisión de data | CSM |
| 19 | Ajustes basados en feedback | Tech Lead |

### Semana 4: Optimización

| Día | Actividad | Owner |
|-----|-----------|-------|
| 22 | Revisión de primeras alertas | CSM |
| 23 | Training adicional si necesario | CSM |
| 24 | Preparación de rollout | PM |
| 25 | Comunicación a toda la org | Dir CH |
| 26 | Check-point de 30 días | CSM + Dir CH |

---

## Fase 6: Success Metrics

### Métricas de Implementación (0-60 días)

| Métrica | Target | Medición |
|---------|--------|----------|
| Integración completada | Semana 3 | On-time/delayed |
| Usuarios activos (managers) | 90% | Login en últimos 7 días |
| HRBPs capacitados | 100% | Completaron training |
| Primeras alertas generadas | Semana 5 | # de alerts |

### Métricas de Impacto (60-365 días)

| Métrica | Target 90 días | Target 12 meses |
|---------|----------------|-----------------|
| Rotación | 16% (-2pp) | 12% (-6pp) |
| Alertas accuracy | 70% | 85% |
| Intervenciones por alerta | 50% | 80% |
| NPS interno | 38 (+6) | 45 (+13) |
| Tiempo promedio de flag | 15 días | 30 días |

---

## Fase 7: Comunicación y Soporte

### Canales de Comunicación

| Canal | Uso | Frecuencia |
|-------|-----|------------|
| Slack (canal dedicado) | Operaciones diarias, preguntas rápidas | Diario |
| Email | Documentación, decisiones formales | Semanal |
| Call semanal | Check-in de status, blockers | Semanal (30 min) |
| QBR | Review ejecutiva de impacto | Trimestral (60 min) |

### Proceso de Escalación

```
Nivel 1: CSM (respuesta 4h)
    ↓
Nivel 2: PM (respuesta 24h)
    ↓
Nivel 3: VP CS (respuesta 48h)
    ↓
Nivel 4: CEO (casos críticos)
```

### SLA de Soporte

| Severidad | Descripción | Tiempo de Respuesta | Tiempo de Resolución |
|-----------|-------------|--------------------|--------------------|
| P1 - Crítico | Sistema caído, data perdida | 1 hora | 4 horas |
| P2 - Alto | Funcionalidad core afectada | 4 horas | 24 horas |
| P3 - Medio | Bug que afecta algunos usuarios | 24 horas | 72 horas |
| P4 - Bajo | Mejora, pregunta | 48 horas | Best effort |

---

## Resumen y Próximos Pasos

### Tareas Inmediatas Post-Kickoff

| Tarea | Owner | Due |
|-------|-------|-----|
| Enviar resumen de kickoff por email | CSM | Hoy |
| Definir Technical Owner de CEMEX | Dir CH | 48h |
| Agendar call técnico con IT | Tech Lead | 48h |
| Compartir credenciales de sandbox | Tech Lead | 48h |
| Definir área piloto | Dir CH | 1 semana |
| Kick-off interno TalentFlow | PM | 48h |

### Siguiente Reunión

| Campo | Valor |
|-------|-------|
| Nombre | Check-in Semana 1 |
| Fecha | [1 semana desde kickoff] |
| Duración | 30 min |
| Asistentes | CSM + Dir CH + Tech Owner |
| Agenda | Status de integración, blockers |

---

## Validación de Criterios

| Criterio | Status | Notas |
|----------|--------|-------|
| Agenda present | ✅ PASS | 60 min estructurados en 3 bloques |
| JIP template complete | ✅ PASS | Objetivos, hitos, riesgos, stakeholders |
| Roles defined | ✅ PASS | CEMEX + TalentFlow stakeholder map |
| Timeline clear | ✅ PASS | 8 semanas + primeros 30 días detallados |
| Success metrics | ✅ PASS | Implementación + Impacto |
| First 30 days plan | ✅ PASS | Día por día, semana 1-4 |

**Resultado T-013**: ✅ PASS

---

*Output generado: 2026-02-18 | Framework: Kickoff Orchestration + JIP | Test Harness: E2E Wave 8*
