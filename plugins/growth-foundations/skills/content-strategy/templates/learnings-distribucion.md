# Learnings — Loop de Distribución de Contenido

**Cliente**: {{CLIENT_SLUG}}
**Primer turno**: {{FECHA_PRIMER_TURNO}}
**Última actualización**: {{FECHA_ULTIMA_ACTUALIZACION}}
**Turno actual (N)**: {{NUMERO_TURNO}}

> Este archivo lo lee y reescribe `/distribuir` en cada turno semanal, siguiendo el protocolo de `frameworks/contrato-de-ejecucion.md` §5. No reescribir manualmente la tabla de estado sin actualizar también el log de decisiones — pierde trazabilidad.

---

## 1. Estado por canal

| Canal | Piezas publicadas (total) | Score turno actual (1-5) | Score últimos 3 turnos | Yield medido | Estado | Última acción |
|-------|---------------------------|---------------------------|------------------------|--------------|--------|----------------|
| SEO orgánico | {{N}} | {{1-5}} | {{ej: 3,3,4}} | {{métrica: tráfico/opt-in/etc}} | ACTIVO / GANADOR / OBSERVAR / RETIRADO | {{fecha + acción}} |
| Red Packet Partnerships | {{N}} | {{1-5}} | {{...}} | {{...}} | {{...}} | {{...}} |
| Paid Amplification | {{N}} | {{1-5}} | {{...}} | {{...}} | {{...}} | {{...}} |
| Email a lista propia | {{N}} | {{1-5}} | {{...}} | {{...}} | {{...}} | {{...}} |
| Redes sociales orgánicas | {{N}} | {{1-5}} | {{...}} | {{...}} | {{...}} | {{...}} |
| {{canal adicional}} | | | | | | |

**Reglas de estado** (ver `frameworks/contrato-de-ejecucion.md` §5):
- `GANADOR` = score 5 en 2 turnos consecutivos → recibe Oleada 2 completa el próximo turno
- `RETIRADO` = score 1 en 3 turnos consecutivos (N=3 default) → productor no le asigna piezas hasta reactivación manual
- `OBSERVAR` = score 2, un turno más antes de decidir
- `ACTIVO` = score 3-4, mantener cadencia actual

---

## 2. Log de decisiones (append-only — no borrar historial)

| Fecha / Turno | Decisión | Canal(es) afectado(s) | Razón | Quién decidió |
|---------------|----------|------------------------|-------|-----------------|
| {{turno 1}} | {{ej: "Retirar Email a lista propia"}} | {{canal}} | {{"3 turnos en score 1, lista aún muy pequeña para señal"}} | Loop (regla automática) / {{nombre humano}} |

---

## 3. Hipótesis para el próximo ciclo

Generadas al cierre de cada turno, basadas en patrones observados en §1. Máximo 3, accionables, con métrica de validación.

1. **Hipótesis**: {{ej: "Los Black Diamond con calculadora ROI generan ~2x el opt-in de los que no la tienen"}}
   - **Cómo se prueba**: {{ej: "Próximas 2 piezas BOFU incluyen calculadora vs. control"}}
   - **Métrica de validación**: {{ej: "opt-in rate por pieza"}}
   - **Turno en que se revisa**: {{N+2}}

2. **Hipótesis**: {{...}}

3. **Hipótesis**: {{...}}

---

## 4. Resumen del turno actual (se sobrescribe cada semana, historial vive en §2)

**Gate de calendario**: {{ABIERTO — el humano tocó el calendario / CERRADO — no hubo edición, turno saltado}}

**Oleada 1 (pieza pilar)**:
- Tema: {{tema del TRIÁNGULO DE INGRESOS}}
- Nivel PENDIENTE: {{Green Circle / Blue Square / Black Diamond}}
- Modelo usado: {{modelo caro}}
- Estado: {{en cola de revisión / aprobado / rechazado}}

**Oleada 2 (formatos derivados)**:
- Formatos generados: {{lista}}
- Modelo usado: {{modelo barato}}
- Estado: {{en cola de revisión / aprobado / rechazado}}

**Piezas aprobadas este turno** (para instrumentación `content_published`): {{N}}

**Presupuesto consumido este turno**: {{USD}} (cap declarado: {{USD}})

---

## 5. Próximo turno — qué cambia

{{Resumen en 2-3 líneas de qué se ajusta para el siguiente turno según §1-3: canales retirados, canales doblados, hipótesis a probar}}
