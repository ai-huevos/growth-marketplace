# T-003: ICP Workshop — TalentFlow

**Test ID**: T-003
**Command**: `/icp`
**Input**: "Software de RRHH para empresas mexicanas medianas"
**Executed**: 2026-02-18

---

## Fase 1: Contexto

### Pregunta 1: ¿Qué vendes y a quién?
**Respuesta**: Suite SaaS de gestión de talento (onboarding, evaluaciones, encuestas de clima, reportes de rotación). B2B, modelo de suscripción mensual recurrente. Ticket promedio $500 USD/mes.

### Pregunta 2: ¿Cuántos clientes tienes actualmente?
**Respuesta**: ~333 clientes activos. ACV ~$6,000/año pero LTV real es $2,000 por churn de 8%.

### Pregunta 3: ¿Quiénes son tus 3 mejores clientes y por qué?
**Respuesta**:
1. **Femsa** — Enterprise, $12K/año, 2 años con nosotros, usan todas las funcionalidades
2. **Grupo Bimbo** — Mid-market, $8K/año, baja rotación de personal desde implementación
3. **Arca Continental** — Enterprise, $10K/año, excelente NPS, nos refieren frecuentemente

**Patrón detectado**: Los mejores clientes son empresas mexicanas grandes (500+ empleados), con presupuesto dedicado a RRHH, y que implementan la suite completa (no solo 1-2 módulos).

---

## Fase 2: Diagnóstico PULSO

### P — Panorama
**Pregunta**: ¿Qué tienen en común tus mejores clientes?
**Respuesta**:
- Industria: Manufactura, retail, alimentos/bebidas
- Tamaño: 500-5,000 empleados
- Ubicación: México (principalmente CDMX, Monterrey, Guadalajara)
- Tecnología: Ya tienen ERP, buscan integrar HR tech
- Etapa: Empresas establecidas con procesos formales

### U — Urgencia
**Pregunta**: ¿Cuál es el dolor principal que resuelves? ¿Cuánto les cuesta no resolverlo?
**Respuesta**:
- Dolor: Rotación de personal alta (>15% anual)
- Costo: $10,000-50,000 USD por empleado que se va (reclutamiento + capacitación + productividad perdida)
- Impacto: Una empresa de 1,000 empleados con 20% rotación pierde $2-10M USD anuales

### L — Logro
**Pregunta**: ¿Qué resultados logran tus clientes contigo?
**Respuesta**:
- Reducción de rotación: De 20% a 12% promedio (-8pp)
- Mejora de NPS interno: +15 puntos
- Tiempo de onboarding: De 30 a 15 días (-50%)
- Visibilidad: Dashboard en tiempo real vs reportes mensuales manuales

### S — Situación Crítica
**Pregunta**: ¿Qué evento los empuja a comprar?
**Respuesta**:
- Nueva ley laboral (outsourcing reform 2021 en México)
- Rotación que supera 25% (crisis)
- Cambio de CHRO con mandato de modernizar
- Post-M&A — integrar culturas
- Crecimiento rápido (+50% headcount)

### O — Organización
**Pregunta**: ¿Quién toma la decisión de compra?
**Respuesta**:
- Champion: Director de Desarrollo Organizacional / HRBP
- Economic Buyer: CFO (en empresas pequeñas) o CHRO (en enterprise)
- Influencer: Gerentes de área que sufren la rotación
- Ciclo de venta: 45-90 días típico

---

## Fase 3: Análisis Firmográfico

### Criterios Propuestos

| Criterio | Rango Ideal (Tier 1) | Peso |
|----------|---------------------|------|
| **Industria** | Manufactura, retail, alimentos/bebidas, servicios profesionales | 20% |
| **Revenue** | $10M - $500M USD | 15% |
| **Empleados** | 500 - 5,000 | 20% |
| **Crecimiento** | >10% anual (headcount o revenue) | 10% |
| **Tecnología** | ERP implementado, busca HR tech | 10% |
| **Geografía** | México (CDMX, MTY, GDL prioritarios) | 15% |
| **Estructura** | HR department formalizado, CHRO o Director | 10% |

### Rangos por Tier

| Tier | Empleados | Revenue | Industria | Score |
|------|-----------|---------|-----------|-------|
| **Tier 1** | 500-5,000 | $10M-$500M | Manufactura, retail | 80-100 |
| **Tier 2** | 200-500 | $5M-$10M | Servicios profesionales | 60-79 |
| **Tier 3** | 100-200 | $2M-$5M | Cualquier B2B | 40-59 |
| **No ICP** | <100 | <$2M | B2C, gobierno | 0-39 |

---

## Fase 4: Anti-ICP

### Criterios de Exclusión

| Señal de Alerta | Por qué evitar |
|-----------------|----------------|
| **Empresas <100 empleados** | No tienen presupuesto, proceso de compra informal, churn alto |
| **Gobierno / sector público** | Ciclo de venta >12 meses, licitaciones, márgenes bajos |
| **Startups early-stage** | Prioridades cambiantes, rotación intencional, no valoran HR tech |
| **Empresas sin HR formal** | No hay champion interno, dependen de dueño para todo |
| **Competidor instalado <6 meses** | Switching cost alto, no van a cambiar tan pronto |
| **"Solo queremos el módulo de nómina"** | Bajo ticket, no usan la suite, no ven valor completo |

### Deal Desastroso (Caso Real)
**Empresa**: Startup de 30 empleados, sin RRHH formal
**Resultado**: Churn a los 2 meses. No tenían procesos que automatizar. Compraron por el precio, no por el valor.
**Lección**: Empresas sin dolor real de rotación no ven ROI.

---

## Fase 5: Scoring y Segmentación

### Modelo de Scoring (100 puntos)

| Criterio | Peso | Tier 1 | Tier 2 | Tier 3 | No ICP |
|----------|------|--------|--------|--------|--------|
| Empleados | 20 | 500-5K (20) | 200-500 (15) | 100-200 (10) | <100 (0) |
| Revenue | 15 | $10M+ (15) | $5-10M (10) | $2-5M (5) | <$2M (0) |
| Industria | 20 | Core (20) | Adjacent (15) | Other B2B (10) | B2C/Gov (0) |
| Geografía | 15 | MX Top 3 (15) | MX Other (10) | LATAM (5) | Outside (0) |
| Rotación | 10 | >20% (10) | 15-20% (7) | 10-15% (4) | <10% (0) |
| HR Formal | 10 | CHRO (10) | Director (7) | Gerente (4) | Ninguno (0) |
| Trigger | 10 | Crisis activa (10) | Mandato nuevo (7) | Exploración (4) | Sin urgencia (0) |

### Ejemplo de Scoring

| Prospect | Empleados | Revenue | Industria | Geo | Rotación | HR | Trigger | **Total** | **Tier** |
|----------|-----------|---------|-----------|-----|----------|-----|---------|-----------|----------|
| CEMEX | 20 | 15 | 20 | 15 | 10 | 10 | 7 | **97** | Tier 1 |
| Liverpool | 20 | 15 | 20 | 15 | 4 | 10 | 4 | **88** | Tier 1 |
| PyME Servicios | 10 | 5 | 10 | 10 | 7 | 4 | 4 | **50** | Tier 3 |

---

## Fase 6: Output Final — ICP Document

### Positioning Statement

> **TalentFlow es para empresas mexicanas de 500-5,000 empleados en manufactura, retail, y alimentos/bebidas que sufren rotación de personal >15% anual y quieren reducirla en 6 meses usando una suite integrada de gestión de talento.**

### Persona del Decision Maker

**Nombre**: Patricia Hernández
**Título**: Directora de Desarrollo Organizacional / CHRO
**Empresa tipo**: Empresa mexicana mid-market a enterprise (500-2,000 empleados)
**Edad**: 38-50 años
**Background**: HR tradicional evolucionando a People Analytics

**Prioridades**:
1. Reducir rotación de personal (KPI principal)
2. Mejorar engagement y NPS interno
3. Modernizar procesos de HR (de Excel a SaaS)
4. Demostrar ROI al CFO

**Miedos**:
- Implementación fallida que la haga quedar mal
- Resistencia al cambio del equipo
- No poder demostrar impacto en números
- Comprar algo que nadie usa

**Aspiraciones**:
- Ser vista como strategic partner, no solo administrativa
- Tener datos para tomar decisiones
- Automatizar lo repetitivo para enfocarse en estrategia
- Crear una cultura que atraiga talento

### Buying Triggers

| Trigger | Probabilidad | Timing |
|---------|--------------|--------|
| Rotación supera 25% | Alta | Inmediato |
| Nuevo CHRO con mandato | Alta | Q1 fiscal |
| Cambio regulatorio (ley laboral) | Media | Pre-deadline |
| Post-M&A (integrar culturas) | Media | 3-6 meses post-cierre |
| Crecimiento >50% headcount | Media | Durante crecimiento |

### Resumen de Segmentos

| Tier | Perfil | Acción | CAC Esperado |
|------|--------|--------|--------------|
| **Tier 1** | Enterprise MX, 500-5K emp, manufactura/retail, rotación >15%, CHRO | **Perseguir activamente** — outbound + ABM | $2,000 |
| **Tier 2** | Mid-market MX, 200-500 emp, servicios profesionales, HR Director | **Discovery call** — calificar profundo | $1,000 |
| **Tier 3** | SMB MX, 100-200 emp, cualquier B2B, HR Gerente | **Solo inbound** — nutrir con contenido | $500 |
| **No ICP** | <100 emp, B2C, gobierno, sin HR formal | **No invertir tiempo** | N/A |

---

## Próximos Pasos

1. **Validar scoring con pipeline actual** — Aplicar el modelo a los 12 deals actuales y verificar correlación con win rate
2. **Crear Target Account List (TAL)** — Usar Tier 1 criteria para generar lista de 50-100 cuentas enterprise
3. **Actualizar outbound messaging** — Ajustar cold email y LinkedIn para resonar con Patricia (persona)
4. **Documentar en CRM** — Agregar campos de scoring en HubSpot para calificar automáticamente

---

## Validación de Criterios

| Criterio | Status | Notas |
|----------|--------|-------|
| ICP score 0-100 | ✅ PASS | Modelo de scoring completo |
| Tier assignment (1/2/3) | ✅ PASS | Tier 1: 80-100, Tier 2: 60-79, Tier 3: 40-59 |
| 3+ pain points | ✅ PASS | Rotación, visibilidad, onboarding, compliance |
| Buying triggers identified | ✅ PASS | 5 triggers con probabilidad y timing |
| Firmographics complete | ✅ PASS | 7 criterios con pesos |
| Psychographics present | ✅ PASS | Persona Patricia con miedos y aspiraciones |

**Resultado T-003**: ✅ PASS

---

*Output generado: 2026-02-18 | Framework: ICP Analysis + PULSO | Test Harness: E2E Wave 2*
