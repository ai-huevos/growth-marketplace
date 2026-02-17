# Hypothesis Card

Template para formular hipotesis testables que validan la efectividad de cada mejora en el sistema de ventas. Basado en el metodo cientifico aplicado a GTM.

## Output Contract

| Campo | Requisito |
|-------|-----------|
| **Formato** | Card individual por hipotesis — una pagina |
| **Campos obligatorios** | IF, THEN, BECAUSE, MEASURED BY, TIMEFRAME, CONFIDENCE, Status |
| **Metrica** | Debe ser especifica, cuantificable, con baseline y target |
| **Razonamiento** | Debe conectar la accion con el resultado via logica causal |
| **Validacion** | Include criteria de exito Y de fallo |

## Benchmark

Una hipotesis bien formada debe:
- Ser testable (puedes probar o refutar con datos)
- Tener metrica baseline (el "de donde partimos")
- Tener target realista (no 23% a 80% en 2 semanas)
- Explicar el POR QUE (razonamiento causal, no correlacion)
- Definir cuando evaluar (timeframe concreto)
- Incluir que hacer si falla (siguiente iteracion)

---

## GTM Hypothesis Loop

```
Observar Problema → Formar Hipotesis → Disenar Experimento → Ejecutar Test →
Medir Resultados → Analizar Data → Aprender + Iterar → Nueva Hipotesis
```

---

## Hypothesis Card Template

### Identificacion

| Campo | Valor |
|-------|-------|
| **ID** | H-[###] |
| **Fecha** | [YYYY-MM-DD] |
| **Autor** | [Nombre] |
| **Cliente** | [Empresa] |
| **Dominio** | [ ] Messaging [ ] Targeting [ ] Coverage [ ] Journey [ ] Process [ ] Discovery [ ] Closing |
| **Framework(s)** | [#s y nombres] |
| **Status** | [ ] Draft [ ] Active [ ] Validada [ ] Refutada [ ] Iterando |

### La Hipotesis

**IF** [Accion especifica basada en blueprint/playbook]

_Ejemplo: "IF implementamos Perfect Discovery Call + PULSO Framework y entrenamos al equipo en apertura AVE + diagnostico PULSO completo..."_

**THEN** [Resultado esperado con metrica especifica]

_Ejemplo: "THEN el win rate mejorara de 23% a 28-33% y las perdidas por 'no decision' bajaran de 45% a 30%..."_

**BECAUSE** [Razonamiento causal basado en contexto del negocio]

_Ejemplo: "BECAUSE el discovery actual promedia 25 minutos sin metodologia estructurada, llevando a calificacion debil y 45% de perdidas por 'no decision'. PULSO provee un framework sistematico para descubrir Panorama, Urgencia, Logro, Situación Crítica, y Organización — los elementos clave que faltan en nuestro approach actual."_

### Metricas de Medicion

**MEASURED BY**:

| Metrica | Baseline (Actual) | Target | Metodo de Tracking | Frecuencia |
|---------|-------------------|--------|--------------------|------------|
| [Metrica primaria] | [Valor actual] | [Valor target] | [Como se mide] | [Cada cuanto] |
| [Metrica secundaria] | [Valor actual] | [Valor target] | [Como se mide] | [Cada cuanto] |
| [Leading indicator] | [Valor actual] | [Valor target] | [Como se mide] | [Cada cuanto] |
| [Lagging indicator] | [Valor actual] | [Valor target] | [Como se mide] | [Cada cuanto] |

### Timeline

**TIMEFRAME**: [Duracion total]

| Fase | Dias | Actividad | Checkpoint |
|------|------|-----------|------------|
| Training | 1-[X] | Entrenar equipo en metodologia | 100% equipo entrenado |
| Adoption | [X]-[Y] | Implementar en calls reales | >70% adoption rate |
| Measurement | [Y]-[Z] | Medir resultados por cohorte | Data sufficient for analysis |
| Analysis | [Z]-[W] | Analizar resultados vs hipotesis | Conclusion: validada/refutada |

### Confidence Level

**CONFIDENCE**: [ ] Alta [ ] Media [ ] Baja

**Justificacion**:
- [ ] Framework probado en 1000+ empresas → Alta
- [ ] Framework probado pero contexto diferente → Media
- [ ] Nuevo approach sin precedente claro → Baja
- [ ] Gaps claros que la accion resuelve directamente → +1 nivel
- [ ] Multiples variables no controladas → -1 nivel

---

## Criterios de Decision

### Exito (Hipotesis Validada)
- [ ] Metrica primaria alcanzo target (o >80% del target)
- [ ] Leading indicators muestran tendencia positiva sostenida
- [ ] Equipo adopto la metodologia (>70% compliance)
- [ ] **Accion**: Escalar al equipo completo, documentar en playbook

### Fallo Parcial (Iterar)
- [ ] Metrica primaria mejoro pero no alcanzo target
- [ ] Algunos leading indicators positivos, otros no
- [ ] Adoption fue desigual
- [ ] **Accion**: Analizar que funciono, refinar hipotesis, crear H-[###]+1

### Fallo Total (Pivotar)
- [ ] Metrica primaria no mejoro o empeoro
- [ ] Leading indicators negativos o sin cambio
- [ ] Equipo resistio adopcion
- [ ] **Accion**: Root cause analysis, seleccionar blueprints diferentes, nueva hipotesis

---

## Resultados (Completar Post-Test)

### Data Recopilada

| Metrica | Baseline | Target | Resultado Real | Delta | Status |
|---------|----------|--------|---------------|-------|--------|
| [Metrica 1] | [___] | [___] | [___] | [+/-___] | [ ] Hit [ ] Miss |
| [Metrica 2] | [___] | [___] | [___] | [+/-___] | [ ] Hit [ ] Miss |
| [Metrica 3] | [___] | [___] | [___] | [+/-___] | [ ] Hit [ ] Miss |

### Analisis

**Que funciono**:
- [___]

**Que no funciono**:
- [___]

**Por que** (root cause del delta):
- [___]

**Variables no controladas que afectaron**:
- [___]

### Decision

- [ ] **VALIDADA**: Escalar. Siguiente paso: [___]
- [ ] **PARCIAL**: Iterar. Nueva hipotesis: H-[###]
- [ ] **REFUTADA**: Pivotar. Seleccionar frameworks diferentes: [___]

### Aprendizajes para el Sistema

**Agregar al playbook**: [___]
**Modificar en proceso**: [___]
**Comunicar al equipo**: [___]

---

## Anti-Patrones: Hipotesis Mal Formadas

### Demasiado vaga
```
IF entrenamos al equipo THEN las cosas mejoraran
Problema: Sin accion especifica, sin metrica, sin razonamiento causal
```

### Irrealista
```
IF implementamos PULSO THEN win rate ira de 23% a 80% en 2 semanas
Problema: Target irrealista y timeline imposible
```

### No medible
```
IF mejoramos discovery THEN los clientes nos quieren mas
Problema: "Nos quieren mas" no es medible
```

### Sin causalidad
```
IF pintamos la oficina de azul THEN vendemos mas
Problema: Sin conexion causal entre accion y resultado
```

### Bien formada
```
IF implementamos PULSO + ACE
THEN win rate mejora de 23% a 28-33% en 90 dias
BECAUSE discovery actual de 25 min sin estructura = calificacion debil
MEASURED BY win rate por cohorte, "no decision" rate, PULSO completion
TIMEFRAME 90 dias (30 training + 60 medicion)
CONFIDENCE Alta — PULSO probado en 1000+ empresas, gaps claros
```

---

*Template basado en el Hypothesis Testing Framework del AI Sales Coach System. Cada mejora al sistema de ventas debe tener una hypothesis card antes de implementarse.*
