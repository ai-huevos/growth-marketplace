# Blueprint Combinations: Combinaciones Probadas por Tipo de Problema

Biblioteca de combinaciones de blueprints optimizadas para problemas especificos de ventas B2B. Cada combinacion ha sido validada como sinergica — los blueprints se refuerzan mutuamente.

## Como Usar Este Patron

1. **Identifica el problema** usando la taxonomia de problemas (`frameworks/problem-taxonomy.md`)
2. **Selecciona la combinacion** que mejor matchea los sintomas observados
3. **Verifica pre-requisitos** — algunos combos requieren que otra fase este resuelta
4. **Genera hipotesis** usando `templates/hypothesis-card.md`
5. **Ejecuta** siguiendo el orden de la combinacion (no son intercambiables)

---

## Combinaciones por Problema

### Deal Velocity: "Los deals tardan demasiado en cerrar"

**Sintomas**: Sales cycle > benchmark, deals atorados en "evaluation", prospects going dark despues de demo.

| Blueprint | Nombre | Rol en la Combinacion | Orden |
|-----------|--------|----------------------|-------|
| **18** | Decision Process Mapping | Mapear el proceso de compra del prospect | 1ro |
| **08** | Critical Event Creation | Crear urgencia genuina con timeline backward | 2do |
| **25** | Perfect Discovery Call | Descubrir CE + D temprano en el proceso | 3ro |

**Logica**: Deals lentos = no se mapeo el decision process (BP 18) + no hay urgencia (BP 08). Discovery (BP 25) es el vehiculo para descubrir ambos temprano.

**Metricas esperadas**: Sales cycle -15-25%, "stuck in evaluation" -30%, "went dark" rate -20%.

**Pre-requisito**: Fase 0 (messaging) + Fase 1 (ICP) deben estar resueltos. Si el pipeline esta lleno de bad-fits, arreglar targeting primero.

---

### Low Win Rate: "Perdemos demasiados deals"

**Sintomas**: Win rate < 20%, muchos "no decision", discovery calls < 25 min, demos genericos.

| Blueprint | Nombre | Rol en la Combinacion | Orden |
|-----------|--------|----------------------|-------|
| **25** | Perfect Discovery Call | Diagnostico profundo con SPICED | 1ro |
| **10** | SPICED Framework | Lenguaje comun de diagnostico | 2do |
| **26** | Diagnose Don't Prescribe | Cambiar mindset de pitch a diagnostico | 3ro |
| **22** | Storytelling / Hero's Journey | Credibilidad via tercera persona | 4to |

**Logica**: Win rate bajo = calificacion debil. La raiz es discovery superficial (BP 25 + 26) sin framework (BP 10). Stories (BP 22) aumentan credibilidad y engagement durante discovery.

**Metricas esperadas**: Win rate +5-15%, "no decision" losses -10-15%, SPICED completion >90%.

**Pre-requisito**: ICP definido (Fase 1). Sin ICP, no puedes calificar correctamente.

---

### Discounting Problem: "Damos descuentos muy altos"

**Sintomas**: Average discount > 15%, reps ceden sin obtener nada, precio es la objecion #1, se negocia en vez de tradear.

| Blueprint | Nombre | Rol en la Combinacion | Orden |
|-----------|--------|----------------------|-------|
| **21** | Trading Framework | 9 pasos para win-win sin descuentos | 1ro |
| **23** | Decision Criteria Influence | Cambiar evaluacion de precio a valor | 2do |
| **27** | Impact Selling | Cuantificar impacto para justificar precio | 3ro |

**Logica**: Descuentos altos = no se establecio valor (BP 27) + el prospect evalua por precio porque no influenciamos criteria (BP 23). Trading (BP 21) reemplaza negociacion.

**Metricas esperadas**: Average discount de ~20% a <10%, deal margin +10-15%, trading adoption >90%.

**Pre-requisito**: Discovery fuerte (Fase 5). Si no cuantificaste impacto en discovery, no hay base para resistir descuentos.

---

### Pipeline Generation: "No hay suficientes deals entrando"

**Sintomas**: Pipeline coverage < 3x quota, reps sin cuentas asignadas, outreach response rate < 5%.

| Blueprint | Nombre | Rol en la Combinacion | Orden |
|-----------|--------|----------------------|-------|
| **16** | ICP Development | Definir a quien targetear | 1ro |
| **15** | TAL Sizing | Calcular cuantas cuentas por rep | 2do |
| **14** | Account Prioritization | Tiering fit + intent | 3ro |
| **13** | Stakeholder Mapping | Multi-threading desde el inicio | 4to |

**Logica**: Pipeline debil = targeting incorrecto (BP 16) + cobertura insuficiente (BP 15) + sin priorizacion (BP 14). Multi-threading (BP 13) acelera engagement.

**Metricas esperadas**: Pipeline generation +40-60%, response rate +2-3x, Tier 1 coverage 100%.

**Pre-requisito**: Fase 0 (messaging). Sin messaging claro, el outreach no resuena.

---

### Messaging Inconsistency: "Cada vendedor dice algo diferente"

**Sintomas**: Prospects confundidos, pitch inconsistente, website no alineado con ventas, sin stories documentadas.

| Blueprint | Nombre | Rol en la Combinacion | Orden |
|-----------|--------|----------------------|-------|
| **22** | Storytelling / Hero's Journey | Crear stories consistentes | 1ro |
| **27** | Impact Selling / Taglines | Cuantificar messaging | 2do |

**Logica**: Inconsistencia = no hay messaging documentado. Stories (BP 22) crean la narrativa, impact (BP 27) la cuantifica.

**Metricas esperadas**: Message consistency >90%, story usage rate >80%, conversion lift +15%.

**Pre-requisito**: Ninguno. Esta es la combinacion fundacional.

---

### Handoff Failures: "Clientes se pierden entre equipos"

**Sintomas**: Info se pierde entre SDR y AE, clientes se quejan de repetir, NPS bajo en transiciones, deals mueren en handoff.

| Blueprint | Nombre | Rol en la Combinacion | Orden |
|-----------|--------|----------------------|-------|
| **10** | SPICED Across Customer Journey | Framework para transferir contexto | 1ro |
| **28** | SaaS Sales Method | Definir etapas con entry/exit criteria | 2do |

**Logica**: Handoffs rotos = no hay framework de transferencia (BP 10) + no hay criterios claros de etapa (BP 28).

**Metricas esperadas**: Info retention >90%, customer frustration <5%, handoff completion 95%.

**Pre-requisito**: Journey mapeado (Fase 3).

---

### Team Performance Inconsistency: "Solo 2-3 reps logran quota"

**Sintomas**: Alta varianza entre top y bottom performers, coaching ad-hoc, 6+ meses de ramp, sin playbook.

| Blueprint | Nombre | Rol en la Combinacion | Orden |
|-----------|--------|----------------------|-------|
| **07** | REKS Goal Setting | Diagnosticar gaps por nivel | 1ro |
| **09** | Sales Playbook | Documentar proceso repetible | 2do |
| **11** | Coaching Methods | Implementar coaching sistematico | 3ro |

**Logica**: Varianza alta = no hay proceso estandarizado (BP 09) + coaching basado en opinion no datos (BP 07 + 11).

**Metricas esperadas**: Quota attainment de ~50% a >85%, ramp time -30-40%, coaching effectiveness >80%.

**Pre-requisito**: Journey + Discovery resueltos (Fases 3-5). No puedes documentar un playbook sin tener el proceso.

---

### Competitive Losses: "Perdemos contra la competencia"

**Sintomas**: "Todos se ven iguales", prospect evalua con criterios del competidor, perdemos en feature comparisons.

| Blueprint | Nombre | Rol en la Combinacion | Orden |
|-----------|--------|----------------------|-------|
| **23** | Decision Criteria Influence | Insertar/deprioritizar criterios | 1ro |
| **22** | Storytelling | Diferenciarse via experiencia de cliente | 2do |
| **08** | Critical Events | Crear urgencia que favorece accion | 3ro |

**Logica**: Perdidas competitivas = evaluacion con criterios del competidor (BP 23) + no diferenciacion (BP 22) + prospect puede esperar (BP 08).

**Metricas esperadas**: Criteria wins >50%, competitive win rate +10-15%, new criteria inserted in 50% deals.

**Pre-requisito**: Demo framework (Fase 6) para ejecutar influence durante la demo.

---

### Stalled Deals: "Deals se atoran y mueren"

**Sintomas**: >30% de deals en "stalled" status, prospects going dark, "te llamamos despues".

| Blueprint | Nombre | Rol en la Combinacion | Orden |
|-----------|--------|----------------------|-------|
| **08** | Critical Event Creation | Crear urgencia genuina | 1ro |
| **13** | Stakeholder Mapping | Multi-thread para no depender de un contacto | 2do |
| **25** | Perfect Discovery | Re-discovery para descubrir CE real | 3ro |

**Logica**: Deals atorados = sin urgencia real (BP 08) + single-threaded (BP 13). Re-discovery (BP 25) puede desbloquear al encontrar CE que se perdio.

**Metricas esperadas**: Stalled deals -30-40%, deal velocity +20%, multi-threading rate >60%.

**Pre-requisito**: Discovery framework (Fase 5) para poder hacer re-discovery.

---

## Matriz Resumen

| Problema | Blueprints | Fase Pre-requisito | Metricas Clave |
|----------|-----------|-------------------|----------------|
| Deal Velocity | 18 + 08 + 25 | 0, 1 | Cycle -15-25% |
| Low Win Rate | 25 + 10 + 26 + 22 | 1 | Win rate +5-15% |
| Discounting | 21 + 23 + 27 | 5 | Discount <10% |
| Pipeline Gen | 16 + 15 + 14 + 13 | 0 | Pipeline +40-60% |
| Messaging | 22 + 27 | Ninguno | Consistency >90% |
| Handoff Failures | 10 + 28 | 3 | Retention >90% |
| Team Performance | 07 + 09 + 11 | 3, 4, 5 | Quota >85% |
| Competitive Losses | 23 + 22 + 08 | 6 | Comp win rate +10% |
| Stalled Deals | 08 + 13 + 25 | 5 | Stalled -30-40% |

---

## Reglas de Combinacion

### Principios

1. **Maximo 4 blueprints por combinacion**: Mas de 4 = demasiada complejidad para implementar
2. **Orden importa**: Los blueprints tienen dependencias internas en cada combinacion
3. **Pre-requisitos primero**: Nunca saltar fases upstream
4. **Una hipotesis por combinacion**: Cada combo tiene una sola H-card
5. **90 dias maximo**: Si toma mas, dividir en 2 combinaciones secuenciales

### Anti-Patrones

- **Boil the ocean**: Intentar implementar 10+ blueprints a la vez
- **Skip upstream**: Implementar discovery sin tener ICP/messaging
- **Copy-paste**: Usar la misma combinacion para todos los clientes sin diagnostico
- **No medir**: Implementar sin hypothesis card = no sabes si funciono
- **Feature creep**: Agregar blueprints mid-implementation porque "tambien necesitamos esto"

---

*Combinaciones basadas en la sintesis de 31 blueprints de Winning by Design. Cada combinacion ha sido disenada para ser sinergica — los blueprints se refuerzan mutuamente cuando se implementan en orden.*
