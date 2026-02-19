# TalentFlow — Test Fixture

## Company Profile

| Campo | Valor |
|-------|-------|
| **Nombre** | TalentFlow |
| **Industria** | HR SaaS |
| **Ubicación** | Ciudad de México, México |
| **Tamaño** | 50 empleados |
| **Fundación** | 2021 |
| **ARR** | $2M USD |
| **Modelo** | SaaS B2B, suscripción mensual |
| **Ticket promedio** | $500 USD/mes |
| **Clientes activos** | ~333 empresas |

---

## Problema Principal

**Churn mensual: 8%** (vs benchmark industria: 2-3%)

### Síntomas
- Clientes cancelan después de 3-4 meses
- NPS bajo (25 vs industria 40+)
- Soporte reactivo, no proactivo
- Sin Customer Success formal
- Pipeline de ventas depende de 2 reps

### Impacto Financiero
- Pérdida mensual: ~27 clientes
- Revenue loss: ~$13,500 USD/mes
- CAC recovery: 6 meses (pero churn mata en 4)
- LTV actual: $2,000 | LTV objetivo: $6,000

---

## Mercado Target

### Perfil Ideal (Hipótesis)
- **Empresa**: Mid-market mexicana (200-1000 empleados)
- **Industria**: Manufactura, retail, servicios profesionales
- **Buyer**: Director de Capital Humano / CHRO
- **Presupuesto**: $400-800 USD/mes para HR tech
- **Dolor**: Rotación de personal >15% anual

### Competencia
- **Directa**: Worky, Runa, Factorial (LATAM)
- **Indirecta**: Excel, procesos manuales
- **Sustitutos**: Consultorías de RRHH

---

## Oferta Actual

### Producto Core
**TalentFlow Platform** — Suite de gestión de talento
- Onboarding automatizado
- Evaluaciones de desempeño
- Encuestas de clima
- Reportes de rotación
- Integración con nómina

### Pricing
| Plan | Precio | Incluye |
|------|--------|---------|
| Starter | $300/mes | Hasta 100 empleados |
| Growth | $500/mes | Hasta 500 empleados |
| Enterprise | $1,000+/mes | Ilimitado + soporte dedicado |

---

## Activos Existentes

### Marketing
- [ ] Blog (5 artículos, sin estrategia)
- [ ] LinkedIn (2,000 seguidores)
- [ ] Email list: 1,500 contactos (frío)
- [ ] Webinars: 0

### Ventas
- 2 SDRs (50% de cuota)
- Sin playbook de discovery
- CRM: HubSpot (básico)
- Pipeline: 12 deals, $500K total

### Customer Success
- 1 persona de soporte (reactivo)
- Sin health score
- Sin QBRs estructurados
- Sin proceso de renewal

---

## Contexto para Tests

### Para `/diagnostico` (T-001)
Evaluar madurez GTM de TalentFlow en 4 dimensiones:
- GTM: ¿Tienen ICP claro? ¿Posicionamiento diferenciado?
- Revenue: ¿Unit economics sanos? ¿Pipeline predecible?
- Q2C: ¿Proceso de venta estructurado? ¿Tiempo de cierre?
- Capabilities: ¿Equipo capacitado? ¿Herramientas adecuadas?

### Para `/icp` (T-003)
Validar y scorear el ICP hipotético:
- ¿Mid-market mexicana es el mejor fit?
- ¿Director de Capital Humano es el buyer correcto?
- ¿Qué triggers de compra identificar?

### Para `/discovery` (T-009)
Simular llamada con prospecto:
- **Empresa ficticia**: CEMEX (Director de Capital Humano)
- **Contexto**: 5,000 empleados, rotación 18%, buscan tecnología
- **PULSO esperado**: Score alto en Urgencia, medio en Panorama

### Para `/propuesta` (T-011)
Generar propuesta para CEMEX:
- Deal size: $15,000/año
- Timeline: Implementación Q2 2026
- Stakeholders: CHRO + CFO + HRBP

### Para `/playbook` (T-015)
Objetivo: Reducir churn de 8% a 3% en 90 días
- Requiere: CS ops, health scoring, renewal process
- Métricas: NPS, time-to-value, renewal rate

---

## Datos de Pipeline (para T-010)

| Deal | Empresa | Valor | Stage | Días en stage | PULSO |
|------|---------|-------|-------|---------------|-------|
| 1 | Grupo Bimbo | $12K | Propuesta | 45 | 28 |
| 2 | CEMEX | $15K | Discovery | 10 | 24 |
| 3 | Femsa | $8K | Negociación | 30 | 31 |
| 4 | Liverpool | $10K | Propuesta | 60 | 19 |
| 5 | Alsea | $6K | Qualification | 5 | -- |
| 6 | Coppel | $9K | Discovery | 20 | 22 |
| 7 | Soriana | $7K | Propuesta | 35 | 25 |
| 8 | Elektra | $5K | Cerrado-Perdido | -- | 15 |
| 9 | Bachoco | $4K | Qualification | 8 | -- |
| 10 | Gruma | $11K | Discovery | 15 | 26 |
| 11 | Arca Continental | $8K | Propuesta | 25 | 27 |
| 12 | Sigma Alimentos | $5K | Cerrado-Perdido | -- | 18 |

**Pipeline total**: $100K (excluyendo perdidos)
**Deals stuck** (>30 días): 3 (Liverpool, Femsa, Soriana)
**Win rate histórico**: 25%

---

## Rep para Coaching (T-012)

**Nombre**: María González
**Rol**: Account Executive
**Tenure**: 8 meses
**Cuota**: $50K/trimestre
**Attainment**: 60% (último trimestre)

### Diagnóstico Inicial
- Buena en rapport y relación
- Débil en discovery (no profundiza en dolor)
- Salta a demo demasiado rápido
- No califica bien (PULSO incompleto)
- Cierra deals pequeños, pierde enterprise

### Coaching Needed
- Disciplina de discovery
- Framework PULSO completo
- Qualification más riguroso
- Deal strategy para enterprise

---

## Deal Perdido para Análisis (T-014)

**Empresa**: Grupo Bimbo (ficticio para test)
**Valor**: $12K/año
**Stage final**: Propuesta enviada, sin respuesta
**Días en pipeline**: 90

### Datos del Deal
- Champion: Gerente de Desarrollo Organizacional
- Economic Buyer: CFO (nunca contactado)
- Competencia: Worky (precio 30% menor)
- Timeline: Q1 2026 (pasó)

### Hipótesis de Pérdida
- PULSO incompleto (solo 2 de 5 dimensiones)
- No se identificó Economic Buyer
- Propuesta genérica, sin Business Case
- Sin seguimiento estructurado

---

*Fixture generado: 2026-02-18 | Propósito: E2E Test Harness | Test Subject: TalentFlow*
