# T-001: Diagnóstico PlainIQ — TalentFlow

**Test ID**: T-001
**Command**: `/diagnostico`
**Input**: "TalentFlow: SaaS de RRHH en México, 50 empleados, $2M ARR, 8% churn mensual"
**Executed**: 2026-02-18

---

## Análisis por Dimensión

### Dimensión 1: Go-to-Market (GTM) Strategy

| Criterio | Evaluación | Score |
|----------|------------|-------|
| **Adquisición** | Modelo "hunting" — depende de 2 SDRs que operan sin playbook documentado. Hero-dependent. | 3/10 |
| **Documentación** | No existe playbook de ventas. Proceso tribal, no escalable. | 2/10 |
| **Predictibilidad** | Win rate histórico 25%, pipeline de $100K con 3 deals stuck >30 días. Poca predictibilidad. | 4/10 |
| **Canales** | Un solo canal dominante (outbound frío). Sin diversificación de canales de adquisición. | 3/10 |

**Score GTM**: 3/10 🔴
**Diagnóstico**: Adquisición depende de individuos, no de procesos. ICP no documentado formalmente. Alta vulnerabilidad.

---

### Dimensión 2: Revenue Streams

| Criterio | Evaluación | Score |
|----------|------------|-------|
| **Tipo** | Revenue recurrente (SaaS mensual $500/cliente promedio). Modelo correcto. | 7/10 |
| **Concentración** | ~333 clientes activos, distribución aparentemente sana. No hay dependencia de top 5. | 6/10 |
| **Diversificación** | Una sola línea de producto (plataforma de gestión de talento). Sin upsell estructurado. | 4/10 |
| **Predecibilidad** | Churn de 8% mensual destruye predictibilidad. LTV actual $2K vs objetivo $6K. | 3/10 |

**Score Revenue**: 5/10 🟡
**Diagnóstico**: Modelo de negocio correcto pero unit economics destruidos por churn. LTV:CAC invertido.

---

### Dimensión 3: Quota-to-Cash (Q2C)

| Criterio | Evaluación | Score |
|----------|------------|-------|
| **Proceso** | HubSpot básico implementado. Algunos pasos manuales visibles en pipeline management. | 5/10 |
| **Fricción** | Sin health score automatizado. Renewals manuales. Excel para seguimiento de churn. | 4/10 |
| **Visibilidad** | GM puede ver pipeline pero sin forecast estructurado. Sin Commit/Best Case/Pipeline. | 4/10 |
| **Integridad** | Reportes financieros no reflejan realidad operativa (churn no anticipado). | 3/10 |

**Score Q2C**: 4/10 🟡
**Diagnóstico**: Herramientas básicas implementadas pero proceso de Q2C no integrado. Caja Negra en Customer Success.

---

### Dimensión 4: Capabilities

| Criterio | Evaluación | Score |
|----------|------------|-------|
| **Skills** | 2 SDRs al 50% de cuota. Debilidad en discovery (no profundizan en dolor). | 4/10 |
| **Tools** | HubSpot básico. Sin herramientas de CS, analytics, o enablement. | 4/10 |
| **Documentation** | ~10% de procesos documentados. Conocimiento tribal. | 2/10 |
| **Dependency** | Alta dependencia de individuos. María (AE) tiene contexto de 8 meses sin documentar. | 3/10 |

**Score Capabilities**: 3/10 🔴
**Diagnóstico**: Equipo pequeño operando sin estructura. "Juan Guillermo Problem" visible — conocimiento en cabezas, no en sistemas.

---

## Heatmap de Resultados

```
╔══════════════════════════════════════════════════╗
║           DIAGNÓSTICO PLAINIQ: TALENTFLOW          ║
╠══════════════════════════════════════════════════╣
║                                                  ║
║  GTM Strategy    🔴 ███░░░░░░░  3/10             ║
║  Revenue Streams 🟡 █████░░░░░  5/10             ║
║  Quota-to-Cash   🟡 ████░░░░░░  4/10             ║
║  Capabilities    🔴 ███░░░░░░░  3/10             ║
║                                                  ║
║  Score Total: 15/40                              ║
║  Nivel: Fragile Giant                            ║
╚══════════════════════════════════════════════════╝
```

---

## Interpretación

### Nivel: Fragile Giant (15/40)

TalentFlow opera como un **Gigante Frágil**:
- Revenue de $2M USD sugiere tracción inicial
- Pero operaciones frágiles que dependen de héroes
- Churn de 8% mensual indica ruptura en la promesa de valor
- Alto riesgo de disruption si un empleado clave se va

### Patrones Detectados

1. **"Juan Guillermo Problem"**: María (AE de 8 meses) tiene contexto de cuentas no documentado. Si se va, se pierde conocimiento crítico.

2. **"Caja Negra"**: No hay visibilidad sobre por qué los clientes cancelan. Sin health score, el churn sorprende.

3. **"Barbacha" Operativo**: Procesos manuales en renewal, Excel para tracking de churn, soporte reactivo. Leakage constante.

---

## Recomendaciones

### Top 3 Acciones Inmediatas (30 días)

1. **Implementar Health Score básico** — Definir 5-7 indicadores de salud de cuenta (uso, NPS, tickets, engagement). Prioridad: Retención.

2. **Documentar ICP** — Perfil ideal basado en clientes de bajo churn. ¿Quiénes renuevan? ¿Por qué?

3. **Estructurar proceso de Discovery** — Framework PULSO para los 2 SDRs. Calificar mejor para cerrar mejor.

### Top 3 Acciones Mediano Plazo (90 días)

1. **Crear Customer Success formal** — Pasar de soporte reactivo a CS proactivo. QBRs estructurados.

2. **Playbook de Ventas** — Documentar el proceso actual, estandarizar discovery, crear enablement.

3. **Forecast estructurado** — Implementar Commit/Best Case/Pipeline en HubSpot. Reuniones de pipeline semanales.

### Riesgos si No Actúan

| Riesgo | Probabilidad | Impacto |
|--------|--------------|---------|
| Churn se mantiene en 8% → quiebra en 24 meses | Alta | Crítico |
| María renuncia → se pierde pipeline activo | Media | Alto |
| Competidor (Worky) captura mercado con mejor onboarding | Media | Alto |

---

## Fase GrowthOS Recomendada

Basado en el diagnóstico PlainIQ:

| Fase | Relevancia | Razón |
|------|------------|-------|
| **ESCALAR** | 🔴 Crítica | Churn es el problema #1. Necesitan CS ops antes de crecer más. |
| CONVERTIR | 🟡 Alta | Pipeline débil, discovery sin estructura. |
| DEFINIR | 🟡 Media | ICP no documentado formalmente. |
| ATRAER | ⬜ Baja | No es momento de generar más leads si no pueden retener. |

**Recomendación**: Iniciar en **ESCALAR** con foco en reducir churn, luego iterar a CONVERTIR para mejorar pipeline.

---

## Validación de Criterios

| Criterio | Status | Notas |
|----------|--------|-------|
| PlainIQ score en rango 0-40 | ✅ PASS | 15/40 |
| 4 dimensiones con heatmap | ✅ PASS | GTM, Revenue, Q2C, Capabilities |
| Fase recomendada | ✅ PASS | ESCALAR (basado en churn) |
| Spanish-first | ✅ PASS | Sin mezcla de inglés excepto términos técnicos |
| TalentFlow-específico | ✅ PASS | Referencias a datos del fixture |

**Resultado T-001**: ✅ PASS

---

*Output generado: 2026-02-18 | Framework: PlainIQ | Test Harness: E2E Wave 1*
