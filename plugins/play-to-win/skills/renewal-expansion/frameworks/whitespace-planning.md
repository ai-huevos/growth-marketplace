# Whitespace Planning — Analisis y Priorizacion de Expansion

## Que es Whitespace

Whitespace es el espacio no explotado dentro de tu base de clientes existente. Representa revenue potencial que ya tienes "a la mano" porque ya tienes una relacion, ya demostraste valor, y ya conoces la organizacion.

**Tipos de whitespace**:
- **Departamental**: Otros departamentos que no usan tu solucion
- **Funcional**: Features o modulos que no han adoptado
- **Geografico**: Oficinas o regiones donde no estan desplegados
- **Vertical**: Casos de uso adyacentes que tu solucion puede resolver
- **Volumen**: Mas usuarios/licencias en el mismo equipo

> "Expandir una cuenta existente es 5-7x mas barato que adquirir una nueva. El whitespace es tu oportunidad mas eficiente de crecimiento."

---

## Proceso de Whitespace Analysis

### Paso 1: Inventariar la cuenta completa

Para cada cuenta, documenta:

| Dimension | Estado actual | Potencial maximo | Gap (whitespace) |
|-----------|--------------|-----------------|-----------------|
| **Departamentos** | Ventas (20 usuarios) | Ventas + Marketing + CS (60 usuarios) | 40 usuarios |
| **Features/Modulos** | Modulo basico | Basico + Analytics + Automation | 2 modulos |
| **Regiones** | Mexico | Mexico + Colombia + Chile | 2 regiones |
| **Casos de uso** | Pipeline management | Pipeline + Forecasting + Coaching | 2 casos de uso |
| **Tier/Plan** | Professional | Enterprise | 1 nivel |

### Paso 2: Cuantificar el potencial

Para cada oportunidad de whitespace:

| Oportunidad | Revenue incremental estimado | Esfuerzo de venta (1-5) | Probabilidad de exito (%) | Revenue ponderado |
|-------------|-------|---------|--------|---------|
| Marketing team (20 users) | $24K/ano | 3 | 60% | $14.4K |
| Analytics module | $12K/ano | 2 | 75% | $9K |
| Colombia office | $18K/ano | 4 | 40% | $7.2K |

### Paso 3: Priorizar con Logro x Situación Crítica

La priorizacion no se basa solo en revenue potencial. Usa dos ejes:

**Eje X — Logro**: Que tan significativo es el logro de negocio para el cliente si adoptan esta expansion?
- Alto: Resuelve una urgencia critica del negocio
- Medio: Mejora eficiencia o agrega funcionalidad util
- Bajo: Nice-to-have sin urgencia de negocio

**Eje Y — Situación Crítica**: Hay un evento que genera urgencia para esta expansion?
- Alto: Deadline externo, restructuracion, nueva regulacion, board review
- Medio: Objetivo trimestral, hiring plan, presupuesto que vence
- Bajo: Sin timeline externo, decision discrecional

### Matriz de Priorizacion

```
                    SITUACIÓN CRÍTICA
                    Alta            Baja
                ┌───────────┬───────────┐
    Alto        │ PRIORIDAD │ PRIORIDAD │
LOGRO           │     1     │     2     │
                │ Ejecutar  │   Crear   │
                │   ahora   │ urgencia  │
                ├───────────┼───────────┤
    Bajo        │ PRIORIDAD │           │
                │     3     │ DEPRIORI- │
                │ Quick win │   TIZAR   │
                │ si facil  │           │
                └───────────┴───────────┘
```

### Prioridad 1: Logro Alto + SC Alta
- **Accion**: Ejecutar inmediatamente
- **Enfoque**: Proposal directo, reunión con decision maker
- **Timeline**: 30 dias para propuesta, 60 dias para cierre

### Prioridad 2: Logro Alto + SC Baja
- **Accion**: Crear urgencia
- **Enfoque**: Educacion, business case, ROI modeling
- **Tactic**: Conectar con una Situación Crítica futura ("Si no hacen esto antes de Q4...")

### Prioridad 3: Logro Bajo + SC Alta
- **Accion**: Quick win si el esfuerzo es bajo
- **Enfoque**: Expansion sencilla (mas licencias, feature add-on)
- **Precaucion**: No invertir demasiado esfuerzo

### Deprioritizar: Logro Bajo + SC Baja
- **Accion**: No invertir esfuerzo ahora
- **Enfoque**: Monitorear para cambios en el futuro
- **Excepcion**: Si es una expansion trivial (ej. activar un modulo gratis), hacerlo como buena voluntad

---

## Fuentes de Intel para Whitespace

### Del cliente directamente
- EBRs (Executive Business Reviews) — pregunta sobre planes de crecimiento, nuevos equipos, presupuestos
- Support tickets — si preguntan por funcionalidad que no tienen, es whitespace
- Feature requests — especialmente de otros departamentos
- Cambios organizacionales — nuevos VPs, restructuraciones, adquisiciones

### De tu plataforma
- Usage analytics — areas de alto uso que sugieren expansion (ej. equipo de 5 usando feature de 20)
- Low adoption features — oportunidad de training + activacion
- Login patterns — personas que no deberian tener acceso pero lo buscan = demanda latente

### Del mercado
- Noticias de la empresa (funding, expansion, IPO, adquisicion)
- Movimientos de su competencia (si la competencia adopta tu solucion, ellos tambien querran)
- Regulaciones de industria que crean nuevas necesidades

---

## Integracion con Account Planning

El whitespace analysis se integra con el mapeo de relaciones:

1. **Identifica la oportunidad** (whitespace)
2. **Mapea los stakeholders** del area de expansion (usar `../relationship-mapping/frameworks/org-mapping-process.md`)
3. **Identifica Logro y SC** para los nuevos stakeholders
4. **Ejecuta las jugadas tacticas** para llegar al decision maker del nuevo area (usar `../relationship-mapping/frameworks/four-plays.md`)
5. **Planifica relaciones 3x3** con los nuevos stakeholders

### Cross-references clave
- Para mapeo de org del nuevo area: `../relationship-mapping/templates/org-mapping-worksheet.md`
- Para plan de relaciones: `../relationship-mapping/templates/three-by-three-canvas.md`
- Para jugadas de penetracion: `../relationship-mapping/frameworks/four-plays.md`

---

## Secuencia de Ejecucion de Expansion

```
1. DESCUBRIR whitespace (inventario + cuantificacion)
           ↓
2. PRIORIZAR (Logro x SC matrix)
           ↓
3. MAPEAR stakeholders del area de expansion
           ↓
4. DISCOVERY con nuevos stakeholders (PULSO)
           ↓
5. PROPONER expansion (usando trade options, no descuentos)
           ↓
6. CERRAR y onboardear al nuevo equipo/departamento/region
           ↓
7. DOCUMENTAR y actualizar whitespace map
```

---

## Whitespace Review Cadence

| Frecuencia | Actividad |
|-----------|-----------|
| **Trimestral** | Whitespace analysis completo de top 20% cuentas por ACV |
| **Mensual** | Revision de pipeline de expansion (oportunidades activas) |
| **En cada EBR** | Preguntas de whitespace integradas en la agenda |
| **Post-renewal** | Actualizar whitespace map con nuevas oportunidades descubiertas |
| **Trigger-based** | Cuando hay noticias de la cuenta (funding, restructuracion, nuevo liderazgo) |

---

## Template Rapido de Whitespace Map

| Cuenta | ACV actual | Whitespace #1 | Est. Revenue | Prioridad | Owner | Status |
|--------|-----------|--------------|-------------|-----------|-------|--------|
| | | | | P1/P2/P3 | | Discovery / Proposal / Negotiation / Closed |
| | | | | | | |
| | | | | | | |

## Metricas de Whitespace

| Metrica | Target | Formula |
|---------|--------|---------|
| **Whitespace coverage** | 100% de top 20% cuentas | Cuentas con whitespace analysis / Total top cuentas |
| **Expansion pipeline** | 3x del target de expansion | Pipeline activo / Target de expansion revenue |
| **Expansion win rate** | >40% | Expansiones cerradas / Oportunidades creadas |
| **Time to expand** | <90 dias | Dias desde discovery hasta cierre de expansion |
| **Net Revenue Retention** | >110% | (Revenue renovado + expansion) / Revenue del periodo anterior |
