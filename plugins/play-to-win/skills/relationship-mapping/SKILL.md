---
name: relationship-mapping
description: Use when mapping buying centers, planning multi-threading strategies, creating org maps, analyzing stakeholder power dynamics, or planning relationship development. Activates for "mapear relaciones", "buying center", "multi-threading", "mapeo organizacional", "3x3", "relationship mapping", "org mapping", "account planning", "power mapping", "stakeholder analysis".
version: 1.0.0
---

# Relationship Mapping

Sistema completo de mapeo de relaciones en cuentas B2B basado en la metodologia Winning by Design. Cubre el buying center avanzado de 7 roles, 4 jugadas tacticas de penetracion, mapeo organizacional de 6 pasos, y planificacion 3x3 de relaciones.

## Cuando usar este skill

- El usuario necesita mapear el buying center de una cuenta
- Quiere planificar una estrategia de multi-threading
- Necesita construir un org map con sentiment y poder
- Quiere ejecutar una jugada tactica para llegar a un decision maker
- Necesita un plan 3x3 de desarrollo de relaciones
- Esta planificando la penetracion de una cuenta clave (account planning)
- Quiere analizar stakeholders y su dinamica de poder

## Filosofia: Multi-Threading es Seguro de Vida

> "Si solo tienes un contacto en la cuenta, no tienes una relacion — tienes un riesgo."

El mapeo de relaciones no es un ejercicio academico. Es la diferencia entre ganar y perder. Los deals que se cierran tienen en promedio 5-7 contactos activos del lado del comprador. Los deals que se pierden tienen 1-3.

**Principio central**: Nunca dependas de un solo champion. Las personas cambian de trabajo, pierden influencia, o simplemente dejan de responder. Tu estrategia de cuenta debe sobrevivir la salida de cualquier individuo.

## Buying Center Avanzado — 7 Roles

El modelo basico de 4 roles (Champion, Decision Maker, User, Influencer) es insuficiente para deals complejos. El modelo avanzado identifica 7 roles criticos:

| Rol | Que hace | Como identificarlo | Riesgo si lo ignoras |
|-----|----------|-------------------|---------------------|
| **Champion** | Vende internamente por ti | Te da info privilegiada, invierte tiempo en tu deal | Sin champion = sin traccion interna |
| **Economic Buyer** | Firma el cheque, controla presupuesto | Habla de ROI, presupuesto, prioridades del board | Pierdes en la linea de meta |
| **Technical Buyer** | Evalua viabilidad tecnica, integraciones | Hace preguntas de arquitectura, seguridad, compliance | Veto tecnico inesperado |
| **User** | Usara la solucion dia a dia | Habla de workflows, usabilidad, curva de aprendizaje | Adopcion fallida post-venta |
| **Coach** | Te guia sobre la politica interna | Comparte intel sobre proceso, competencia interna, timing | Navegas a ciegas |
| **Blocker** | Resiste el cambio o favorece a la competencia | Evita reuniones, hace preguntas hostiles, retrasa | Sabotaje silencioso |
| **Mobilizer** | Construye consenso y mueve a otros a actuar | Organiza reuniones internas, escala problemas, crea urgencia | Consensus stalls sin alguien que empuje |

Para el modelo completo con estrategias de engagement por rol, leer `frameworks/buying-center-advanced.md`.

## 4 Jugadas Tacticas de Penetracion

Dependiendo de tu situacion y nivel de acceso, elige la jugada correcta:

| Jugada | Cuando usarla | Nivel de intrusion | Efectividad |
|--------|--------------|-------------------|-------------|
| **Play 1: LinkedIn Research** | Siempre, como primer paso | Baja | Media — crea awareness |
| **Play 2: RRR (Referral Request Response)** | Cuando identificaste a la persona correcta | Media | Alta — cuando se ejecuta bien |
| **Play 3: Provocative** | Cuando no te responden, o no sabes quien decide | Alta | Muy alta — pero requiere maestria |
| **Play 4: Bottom-up** | Cuando ofreces un servicio user-driven (ej. extension, freemium) | Baja | Alta — pero toma tiempo |

**Regla de oro**: Las jugadas se pueden combinar secuencialmente. Play 1 siempre primero para crear awareness. Luego Play 2 o 3 dependiendo del contexto. Play 4 es una estrategia paralela de largo plazo.

Para scripts, templates y guia paso-a-paso de cada jugada, leer `frameworks/four-plays.md`.

## Proceso de Mapeo Organizacional — 6 Pasos

El mapeo no es dibujar un org chart. Es entender como fluye el poder y las decisiones dentro de la organizacion:

### Paso 1: Identificar cuentas e informacion clave
Usa Impacts y Critical Events de un win reciente similar para seleccionar las cuentas prioritarias.

### Paso 2: Bosquejar el Org Chart
Construye la estructura jerarquica: CxO → VP → Director → Manager → User.

### Paso 3: Identificar Impact y Critical Event por rol
Para cada rol clave (minimo 3, maximo 5), documenta su Impact especifico y su Critical Event personal.

### Paso 4: Entender el proceso de decision
Mapea como fluye la decision: Initiator → Decider → Buyer → Influencer → User → Gatekeeper. Cada rol tiene un peso diferente.

### Paso 5: Establecer sentiment por rol
Clasifica cada contacto: Loves Us, Positive, Neutral, Unknown, Negative, Enemy. Identifica donde concentrar esfuerzos.

### Paso 6: Orquestar un Account Development Plan
Coreografia de acciones basada en gaps de sentiment y cobertura. Asignar dueno de cada relacion de tu lado.

Para el proceso completo con diagramas y ejemplos, leer `frameworks/org-mapping-process.md`.

## Matriz Power/Interest para Priorizacion

No todos los stakeholders merecen el mismo esfuerzo. Prioriza con esta matriz:

| | Alto Interes | Bajo Interes |
|---|---|---|
| **Alto Poder** | **Gestionar de cerca** — reunion 1:1, updates frecuentes, personalizar mensaje | **Mantener satisfecho** — informar, no abrumar, activar cuando sea necesario |
| **Bajo Poder** | **Mantener informado** — incluir en comunicaciones grupales, usar como intel | **Monitorear** — check-in periodico, no invertir tiempo desproporcionado |

**Tip**: Los Blockers de alto poder requieren una estrategia especial — nunca los confrontes directamente. Rodealos con aliados de mayor poder o neutraliza su influencia con datos.

## Metodologia 3x3 de Planificacion de Relaciones

Orquesta relaciones entre **3 personas de tu equipo** con **3 contactos del lado del cliente**:

```
           CLIENTE                    TU EQUIPO
    1. CEO/CxO          ←→     1. Tu CEO/Founder
    2. VP Funcional      ←→     2. Tu VP de Producto/Ingenieria
    3. Manager/User      ←→     3. Tu (AE/CSM)
```

**Por que funciona**: Crea multiples conexiones que sobreviven si un contacto se va. Ademas, las conversaciones ejecutivo-a-ejecutivo tienen una dinamica diferente que las conversaciones rep-a-VP.

**Regla**: Cada celda del 3x3 necesita 3 acciones concretas en 3 periodos de tiempo (30/60/90 dias).

Para el canvas completo de planificacion, leer `templates/three-by-three-canvas.md`.

## 5 Plays de Multi-Threading

Una vez que tienes una reunion agendada, expande tu plataforma:

1. **Pedir al champion**: "Danny, quien mas podria beneficiarse de asistir?"
2. **Sugerir nombres especificos**: "Creo que Maria y Juan podrian beneficiarse. Danny, puedes invitarlos?"
3. **Invitar directamente**: "Maria/Juan — nos reunimos la proxima semana con Danny. Pense que podrian beneficiarse..."
4. **Usar social proof**: "Danny, otras empresas con las que he trabajado encontraron que invitar al VP de Producto y al Director de Marketing les beneficio enormemente."
5. **Llamada telefonica directa**: Llamar a Juan y Maria por telefono e invitarlos personalmente.

**Escalacion**: Empieza por Play 1, escala a Play 5 solo si los anteriores no funcionan. Cada play es mas intrusivo pero mas efectivo.

## Cuentas existentes vs. Cuentas nuevas

| Escenario | Enfoque |
|-----------|---------|
| **Cuenta nueva (new logo)** | Usa las 4 Jugadas de Penetracion, empezando por Play 1 |
| **Expansion (cross-sell)** | Apoyate en tu champion actual para mapear la organizacion, luego usa las jugadas para el nuevo decision maker |
| **Upsell al mismo equipo** | Multi-threading para incluir al Economic Buyer si aun no esta involucrado |
| **Renewal** | Mapear cambios en el org chart — personas que se fueron, nuevos stakeholders, cambios de poder |

## Output esperado

Al ejecutar un mapeo de relaciones, generar:

1. **Org Map completo** con los 7 roles identificados (o marcados como desconocidos)
2. **Sentiment map** — clasificacion de cada contacto (Loves Us → Enemy)
3. **Gap analysis** — roles sin cobertura, areas de riesgo
4. **Plan de accion** con jugadas tacticas asignadas a cada gap
5. **Canvas 3x3** con acciones concretas a 30/60/90 dias
6. **Multi-threading checklist** con proximos pasos priorizados

## Archivos de referencia

- `frameworks/buying-center-advanced.md` — Modelo completo de 7 roles con estrategias
- `frameworks/four-plays.md` — 4 jugadas tacticas con scripts y templates
- `frameworks/org-mapping-process.md` — Proceso de 6 pasos para mapeo organizacional
- `templates/org-mapping-worksheet.md` — Worksheet de mapeo para una cuenta
- `templates/three-by-three-canvas.md` — Canvas de planificacion 3x3
