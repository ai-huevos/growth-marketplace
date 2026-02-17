---
name: funnel-optimization
description: Use when diagnosing funnel health, running A/B tests, optimizing conversion rates, planning scaling strategy, or building 90-day implementation plans. Activates for "funnel optimization", "optimización de funnel", "A/B test", "conversion rate", "tasa de conversión", "funnel health", "salud del funnel", "scaling strategy", "estrategia de escala", "90-day plan", "plan de 90 días", "funnel metrics", "métricas de funnel", "bottleneck", "cuello de botella".
version: 1.0.0
---

# Funnel Optimization

Diagnostica, optimiza y escala tu funnel con datos.

## Filosofia

> "No escales lo que no funciona. Optimiza antes de invertir mas."

La mayoria de las empresas B2B cometen el mismo error: invierten mas dinero en trafico cuando su funnel tiene fugas. Funnel Optimization invierte esa logica. Primero diagnosticas donde esta el cuello de botella, despues lo arreglas con tests basados en datos, y solo entonces escalas con confianza.

Este skill te da un sistema completo de 3 pilares para pasar de "estamos tirando dinero" a "cada peso invertido genera un retorno predecible".

## Los 3 Pilares

### 1. Diagnostico — Sabe exactamente donde esta el problema

Dashboard de metricas de salud del funnel en 3 niveles:

- **Nivel 1: Top of Funnel (Trafico)** — Volumen, costo, calidad y distribucion del trafico
- **Nivel 2: Middle of Funnel (Conversion)** — Opt-in rate, frontend conversion, engagement de email
- **Nivel 3: Bottom of Funnel (Monetizacion)** — AOV, LTV, CPA y el ratio critico LTV:CPA

Cada nivel tiene benchmarks claros y preguntas diagnosticas para identificar la causa raiz cuando una metrica esta por debajo del objetivo.

Para el dashboard completo con benchmarks y plantilla de seguimiento semanal, leer `frameworks/funnel-health-dashboard.md`.

### 2. Optimizacion — Mejora sistematica basada en datos

Ciclo semanal de testing que prioriza los cambios de mayor impacto:

- **Ciclo semanal** — Lunes a lunes: revisar → disenar hipotesis → lanzar test → monitorear → evaluar → implementar ganador
- **Priorizacion por impacto** — Oferta (50%) > Headline (30%) > CTA (10%) > Social proof (5%) > Design (5%)
- **Reglas de testing** — Minimo 100 conversiones por variante, un elemento a la vez, documentar todo

El sistema incluye un template de hipotesis estructurado y un checklist de check-in semanal para mantener la disciplina de optimizacion.

Para la metodologia completa del ciclo de optimizacion, leer `frameworks/optimization-cycle.md`.

### 3. Escala — Crece con confianza cuando los numeros lo justifican

Estrategia de 3 fases para escalar sin romper lo que funciona:

- **Fase 1: Escala Vertical (Mes 1-2)** — Mas presupuesto en lo que ya funciona, misma plataforma
- **Fase 2: Escala Horizontal (Mes 3-4)** — Nuevas plataformas, nuevos mercados, nuevos canales
- **Fase 3: Multiplicacion de Funnels (Mes 5-6)** — Clonar funnels exitosos para nuevos productos y mercados

Incluye checklist pre-scaling (5 condiciones que deben cumplirse antes de escalar) y consideraciones especificas para expansion en LATAM.

Para la estrategia de escala completa, leer `frameworks/scaling-strategy.md`.

## Templates

- **Funnel Audit Report** — Plantilla de auditoria de rendimiento con 6 secciones: resumen ejecutivo, metricas de trafico, metricas de conversion, metricas de revenue, analisis de cuello de botella, y plan de accion priorizado. Leer `templates/funnel-audit-report.md`.
- **Plan de Accion de 90 Dias** — Plan de implementacion semana a semana dividido en 3 meses: fundacion, construccion y escala. Cada semana con objetivos, checklist de acciones, KPIs target y entregables. Leer `templates/90-day-action-plan.md`.

## Patterns

- **A/B Test Playbook** — Biblioteca de tests probados organizados por elemento del funnel, con hipotesis pre-formuladas, metricas de exito y resultados esperados. Leer `patterns/ab-test-playbook.md`.

## Integracion PULSO

| PULSO | Conexion con Funnel Optimization |
|-------|----------------------------------|
| **Panorama** | El diagnostico del dashboard revela la situacion actual del funnel con datos concretos |
| **Urgencia** | Los cuellos de botella identificados son el dolor cuantificado — no opiniones, sino metricas |
| **Logro** | Cada optimizacion tiene un impacto proyectado medible en revenue |
| **Situación Crítica** | Los thresholds de escala funcionan como situaciones críticas: cuando se cumplen, se activa la siguiente fase |
| **Organización** | Los datos del dashboard y los resultados de tests informan las decisiones de inversion |

## Conexiones con otros skills

- **FLUJO** (motor-de-ofertas) → Funnel Optimization diagnostica y mejora los funnels disenados con FLUJO
- **ESCALA** (motor-de-ofertas) → Las metricas LTV:CAC del dashboard alimentan las decisiones de la escalera de valor
- **Pipeline Management** (sales-blueprint) → Los leads optimizados del funnel alimentan el pipeline para handoff a ventas
- **Copywriting Engine** → Los A/B tests de headlines, CTAs y emails se ejecutan con copy generado por el engine
- **Quiz Funnel** (growth-foundations) → Optimizar opt-in rates del quiz como lead magnet del funnel

## Output Esperado

Al completar el proceso de Funnel Optimization, el usuario obtiene:

1. **Funnel Health Score** — Puntuacion de salud del funnel basada en metricas de los 3 niveles vs benchmarks
2. **Lista de optimizaciones priorizada** — Tests ordenados por impacto esperado con hipotesis y metricas de exito
3. **Scaling Readiness Assessment** — Evaluacion de si el funnel cumple las 5 condiciones para escalar
4. **Plan de 90 dias** — Roadmap semana a semana desde fundacion hasta escala
5. **Dashboard semanal configurado** — Plantilla de seguimiento con todas las metricas relevantes
