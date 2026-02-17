# Seed Questionnaire — Protocolo de Intake Conversacional

Protocolo para recopilar los 4 seed data points que GrowthOS necesita para diagnosticar la fase inicial y activar los skills correctos.

## Filosofía: Conversacional, No Formulario

> "No es un formulario. Es una conversación que descubre el bottleneck real."

El intake NO es una lista de preguntas que el usuario completa. Es un protocolo conversacional donde GrowthOS hace preguntas inteligentes basadas en las respuestas anteriores.

## Los 4 Seed Data Points

### 1. Firmográfico

**Pregunta clave**: "Cuéntame sobre tu empresa"

**Datos a extraer**:
- Nombre de empresa
- Industria/sector
- Tamaño (revenue, empleados)
- Ubicación (país, región)
- Años en el mercado

**Ejemplo de flujo**:
```
GrowthOS: "¿Cuál es el nombre de tu empresa y en qué industria operas?"
Usuario: "Somos TechFlow, una SaaS de gestión de proyectos para agencias de marketing en LATAM"
GrowthOS: "Perfecto. ¿Cuántos años llevan en el mercado y qué tamaño tienen?"
Usuario: "3 años, somos 15 personas, facturamos alrededor de $500K anuales"
```

### 2. Oferta

**Pregunta clave**: "¿Qué vendes exactamente?"

**Datos a extraer**:
- Tipo de oferta (producto, servicio, híbrido)
- Precio/rango de precios
- Modelo de negocio (one-time, recurring, usage-based)
- Diferencia principal vs competencia

**Ejemplo de flujo**:
```
GrowthOS: "¿Qué ofreces a tus clientes? ¿Es un producto, servicio, o ambos?"
Usuario: "Es un SaaS, cobramos $99/mes por usuario"
GrowthOS: "¿Qué hace que tu solución sea diferente de otras herramientas similares?"
Usuario: "Nos enfocamos específicamente en agencias, no en empresas generales"
```

### 3. Dolor

**Pregunta clave**: "¿Cuál es tu mayor desafío ahora mismo?"

**Datos a extraer**:
- Bottleneck principal (atracción, conversión, retención, escalamiento)
- Dolor específico (no tengo leads, no cierro deals, pierdo clientes, etc.)
- Impacto cuantificado si es posible

**Ejemplo de flujo**:
```
GrowthOS: "De todo lo que podrías mejorar en tu negocio, ¿qué te quita más el sueño?"
Usuario: "No tengo suficientes leads. Tengo un buen producto pero nadie me conoce"
GrowthOS: "¿Cuántos leads necesitarías para alcanzar tus metas?"
Usuario: "Necesito al menos 50 leads/mes para cerrar 5-10 clientes"
```

### 4. Activos

**Pregunta clave**: "¿Qué ya tienes construido?"

**Datos a extraer**:
- Contenido existente (blog, social, etc.)
- Herramientas/tecnología
- Equipo/capacidades
- Clientes existentes (si aplica)

**Ejemplo de flujo**:
```
GrowthOS: "¿Qué activos de marketing o ventas ya tienes?"
Usuario: "Tengo un blog con 20 posts, pero no genera tráfico. Tengo un equipo de 2 vendedores"
GrowthOS: "¿Tienes clientes actuales? ¿Cuántos?"
Usuario: "Sí, tengo 12 clientes activos, pero algunos están en riesgo de churn"
```

## Derivaciones del Intake

Una vez recopilados los 4 seed data points, GrowthOS deriva:

### growth_stage
- **Early**: <$100K revenue, <10 clientes
- **Growth**: $100K-$1M revenue, 10-50 clientes
- **Scale**: >$1M revenue, >50 clientes

### icp_draft
- Industria + tamaño + ubicación = ICP inicial
- Se refina con `icp-analysis` skill

### bottleneck
- **Atracción**: "No tengo leads" → Fase ATRAER
- **Conversión**: "No cierro deals" → Fase CONVERTIR
- **Retención**: "Pierdo clientes" → Fase ESCALAR
- **Identidad**: "No sé quién es mi cliente" → Fase DEFINIR

### team_constraints
- Tamaño del equipo
- Capacidades disponibles
- Presupuesto (si mencionado)

### asset_inventory
- Lista de activos existentes
- Gaps identificados

## Routing a Primera Fase

Basándose en el bottleneck identificado:

| Bottleneck | Fase Inicial | Razón |
|------------|--------------|-------|
| "No sé quién es mi cliente" | DEFINIR | Necesita ICP antes de todo |
| "No tengo leads" | ATRAER | Necesita contenido/funnel |
| "No cierro deals" | CONVERTIR | Necesita optimizar ventas |
| "Pierdo clientes" | ESCALAR | Necesita CS/retention |

Si el bottleneck no es claro, GrowthOS pregunta:
> "Si pudieras resolver solo UNA cosa esta semana, ¿cuál sería?"

## Ejemplo Completo de Intake

```
GrowthOS: "Hola, soy GrowthOS. Voy a hacerte algunas preguntas para entender tu situación y sugerirte los próximos pasos. ¿Empezamos?"

Usuario: "Sí, vamos"

GrowthOS: "Perfecto. ¿Cuál es el nombre de tu empresa y en qué industria operas?"

Usuario: "Somos DataFlow, una consultoría de analytics para e-commerce en México"

GrowthOS: "Excelente. ¿Cuántos años llevan y qué tamaño tienen?"

Usuario: "2 años, somos 8 personas, facturamos alrededor de $300K anuales"

GrowthOS: "Entendido. ¿Qué ofrecen exactamente a sus clientes?"

Usuario: "Consultoría de implementación de analytics, cobramos por proyecto, típicamente $15K-$30K por cliente"

GrowthOS: "Perfecto. Ahora, de todo lo que podrían mejorar, ¿qué les quita más el sueño?"

Usuario: "No tenemos suficientes leads. Tenemos buenos resultados con los clientes que tenemos, pero no sabemos cómo atraer más"

GrowthOS: "¿Cuántos leads necesitarían para alcanzar sus metas?"

Usuario: "Necesitamos al menos 10-15 leads/mes para cerrar 2-3 proyectos"

GrowthOS: "Última pregunta: ¿Qué activos de marketing ya tienen?"

Usuario: "Tenemos un blog con algunos posts, pero no genera tráfico. Tenemos LinkedIn pero no lo usamos mucho"

GrowthOS: "Perfecto, tengo suficiente información. Basándome en lo que me contaste:
- Tu bottleneck principal es ATRAER leads
- Tienes un buen producto (resultados con clientes existentes)
- Necesitas contenido y funnel

Te sugiero empezar con la fase ATRAER. ¿Quieres que te ayude a crear un plan de contenido y estructura de funnel?"
```

## Integración con GCO

Los 4 seed data points se guardan en el GCO:

```yaml
company:
  name: "DataFlow"
  industry: "Consultoría de analytics"
  size: "8 personas, $300K revenue"
  location: "México"
  
offer:
  type: "Servicio (consultoría)"
  price_range: "$15K-$30K por proyecto"
  model: "Project-based"
  
pain:
  bottleneck: "atracción"
  specific: "No tengo suficientes leads"
  quantified: "Necesito 10-15 leads/mes"
  
assets:
  content: ["Blog con algunos posts"]
  tools: []
  team: ["8 personas"]
  clients: ["Algunos clientes existentes con buenos resultados"]
```

## Referencias

- Master orchestrator: `../growthOS.md`
- GCO schema: `context-object.md`
- Fases: `../phases/definir.md`, `../phases/atraer.md`, `../phases/convertir.md`, `../phases/escalar.md`
