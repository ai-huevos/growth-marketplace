# GrowthOS — Master Orchestrator Protocol

GrowthOS es el sistema operativo que orquesta todos los plugins del marketplace. En lugar de que el usuario navegue manualmente entre 29 skills, GrowthOS diagnostica su necesidad y activa automáticamente las habilidades correctas en el orden correcto.

## Filosofía: Need-Driven, No Plugin-Driven

> "No preguntes qué plugin necesitas. Pregunta qué problema quieres resolver."

GrowthOS transforma el marketplace de una colección de herramientas a un sistema que entiende el contexto del usuario y guía su progreso a través de las 5 fases del crecimiento B2B.

## El Modelo de 5 Fases

```
DEFINIR → ATRAER → CONVERTIR → ESCALAR → REFERIR
```

Cada fase tiene:
- **Señales de usuario** que activan la fase
- **Skills específicos** que se activan automáticamente
- **Criterios de entrada** (qué necesitas antes de empezar)
- **Criterios de salida** (qué logras al completar)

### DEFINIR (Fase 1)
**Problema**: "No sé quién es mi cliente ideal" / "Cómo me diferencio" / "Quién compite conmigo"

**Skills activados**: `icp-analysis`, `icp-tal`, `positioning`, `competitive-analysis`, `product-marketing`, `alma`

**Entrada**: Seed data (firmográfico, oferta, dolor, activos)

**Salida**: ICP validado, statement de posicionamiento, landscape competitivo mapeado

Ver `phases/definir.md` para detalles completos.

### ATRAER (Fase 2)
**Problema**: "Nadie me conoce" / "Qué contenido crear" / "Necesito un funnel"

**Skills activados**: `content-strategy`, `quiz-funnel` (SONDA), `escala`, `flujo`, `headline-mastery`, `landing-pages`

**Entrada**: ICP + posicionamiento de DEFINIR

**Salida**: Plan de contenido, arquitectura de funnel, lead magnet activo

Ver `phases/atraer.md` para detalles completos.

### CONVERTIR (Fase 3)
**Problema**: "No cierro deals" / "Mejorar mi pipeline" / "Preparar llamada"

**Skills activados**: `discovery-mastery`, `discovery-demo`, `pipeline-management`, `proposal-generation`, `deal-strategy`, `relationship-mapping`, `pre-discovery-research`, `advanced-techniques`, `email-sequences`, `psychological-triggers`

**Entrada**: Leads entrando al pipeline

**Salida**: Win rate mejorado, velocidad de deal aumentada

Ver `phases/convertir.md` para detalles completos.

### ESCALAR (Fase 4)
**Problema**: "Cierro pero no retengo" / "Renovar cuentas" / "Mejorar equipo"

**Skills activados**: `customer-success-ops`, `renewal-expansion`, `coaching-cadence`, `sales-transformation`, `customer-journey`, `funnel-optimization`

**Entrada**: Clientes onboarded

**Salida**: NRR >100%, churn reducido, capacidad del equipo medida

Ver `phases/escalar.md` para detalles completos.

### REFERIR (Fase 5)
**Problema**: "Cierro pero no retengo" resuelto, ahora: "Cómo convierto clientes felices en pipeline nuevo" / "Quiero referidos de clientes satisfechos" / "Case studies de clientes"

**Skills activados**: `advocacy-scoring`, `referral-ladder`, `case-study-engine`

**Entrada**: Cliente en ESCALAR con NPS≥9 o milestone completo

**Salida**: `referred_pipeline` > 0

Ver `phases/referir.md` para detalles completos.

## Flujo de Activación

### Para Usuarios Nuevos

1. **Intake**: Ejecutar `intake/seed-questionnaire.md` para recopilar 4 seed data points
2. **Diagnóstico**: GrowthOS determina la fase inicial basándose en el bottleneck identificado
3. **Activación**: Se activan los skills de la fase correspondiente
4. **Progreso**: El usuario avanza a través de las fases según sus necesidades

### Para Usuarios Existentes

1. **Contexto**: GrowthOS carga el GCO (GrowthOS Context Object) de sesiones anteriores
2. **Señal**: El usuario expresa una necesidad o problema
3. **Routing**: GrowthOS identifica la fase y skill correctos
4. **Activación**: Se activa el skill con el contexto completo del usuario

## GrowthOS Context Object (GCO)

El GCO es el estado persistente que GrowthOS mantiene para cada usuario/cliente. Incluye:

- **company**: Información firmográfica básica
- **pulso**: Diagnóstico PULSO completo (Panorama, Urgencia, Logro, Situación Crítica, Organización)
- **phase**: Fase actual (DEFINIR, ATRAER, CONVERTIR, ESCALAR, REFERIR)
- **completed_skills**: Lista de skills completados con outputs
- **outputs**: Artefactos generados (ICP, positioning statement, funnel architecture, etc.)
- **meeting_data**: Datos de reuniones (si está conectado a Meeting Intelligence MCP)

Ver `intake/context-object.md` para el schema completo del GCO.

## Integración con Plugins

GrowthOS NO reemplaza los plugins. Los orquesta:

- **Plugins** = Las herramientas individuales (29 skills, 8 agents, 15 commands)
- **GrowthOS** = El sistema que decide cuándo usar cada herramienta

Ejemplo:
- Usuario dice: "No sé quién es mi cliente ideal"
- GrowthOS activa: `plugins/growth-foundations/skills/icp-analysis/`
- El skill genera: ICP con scoring 0-100
- GrowthOS guarda: ICP en GCO.outputs.icp
- GrowthOS sugiere: "Ahora que tienes ICP, ¿quieres definir tu posicionamiento?" → activa `positioning`

## Comandos GrowthOS

- `/os` — Iniciar intake de GrowthOS (nuevos usuarios)
- `/roadmap` — Generar/actualizar roadmap de 90 días basado en fase actual
- `/estado` — Mostrar estado actual (fase, skills completados, outputs, próximos pasos)

Estos comandos están implementados en `plugins/conversational-pm/commands/`.

## Governance

La **Constitución Agéntica** (`governance/agentic-constitution.md`) es el documento vinculante de gobernanza para todo el marketplace. Establece:

- **Reglas NEVER**: Límites inviolables que ningún agente puede traspasar (comunicación externa, PII, anti-alucinación, brand safety)
- **Reglas ALWAYS**: Imperativos operativos obligatorios (output estructurado, PULSO como lingua franca, español-first, audit trail)
- **Zonas de Ejecución**: Clasificación Green/Yellow/Red para los 31 skills y 18 comandos
- **Escalación**: 5 triggers automáticos con protocolo de resolución
- **Graduación de Confianza**: HITL → HOTL → HOOTL con criterios medibles
- **Quality Gates**: Marco unificado pre/in/post ejecución que estandariza los gates dispersos en playbook-coach, agent-roster e ideation-agent

### Integración con el Flujo GrowthOS

Cuando `/os` inicia un intake o `/roadmap` genera un plan:

1. El GCO carga los `trust_levels` del cliente para determinar qué skills pueden ejecutarse en modo autónomo
2. Cada skill verifica su zona (Art. III) y nivel de confianza (Art. V) antes de ejecutar
3. Los quality gates (Art. VII) validan entrada, proceso y salida
4. Las escalaciones (Art. IV) se registran en `escalation_log` del GCO
5. El `/estado` muestra progreso de graduación de confianza por skill

### Compliance

Todo plugin listado en `marketplace.json` está sujeto a la Constitución. Plugins nuevos deben incluir clasificación de zona para cada skill/comando en su PR de incorporación.

## Referencias

- **Intake protocol**: `intake/seed-questionnaire.md`
- **GCO schema**: `intake/context-object.md`
- **Fases**: `phases/definir.md`, `phases/atraer.md`, `phases/convertir.md`, `phases/escalar.md`
- **Constitución Agéntica**: `governance/agentic-constitution.md`
- **Framework registry**: `naming/framework-registry.md`
- **Meeting Intelligence bridge**: `bridges/meeting-intelligence.md`
