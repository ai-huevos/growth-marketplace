# Fase DEFINIR — Identidad, ICP y Posicionamiento

Primera fase del modelo GrowthOS. Responde a la pregunta fundamental: "¿Quién soy y para quién resuelvo?"

## Señales de Usuario

GrowthOS activa esta fase cuando detecta:

- "No sé quién es mi cliente ideal"
- "Cómo me diferencio de la competencia"
- "Quién compite conmigo"
- "Cómo posicionarme en el mercado"
- "Necesito definir mi propuesta de valor"
- "Qué mensaje usar para comunicar"

## Skills Activados

| Skill | Plugin | Propósito |
|-------|--------|-----------|
| `icp-analysis` | growth-foundations | ICP con scoring 0-100, validación de fit |
| `icp-tal` | play-to-win | ICP para equipos de ventas (Target Account List) |
| `positioning` | growth-foundations | Statement de posicionamiento único |
| `competitive-analysis` | growth-foundations | Landscape competitivo, battle cards |
| `product-marketing` | play-to-win | Messaging de producto, ARCO DE TRANSFORMACIÓN |
| `alma` | motor-de-ofertas | Voz de marca, Attractive Character Framework |

## Criterios de Entrada

- **Seed data recopilada**: Firmográfico, oferta, dolor, activos (via `intake/seed-questionnaire.md`)
- **Contexto básico**: Nombre de empresa, industria, tipo de oferta

## Criterios de Salida

- ✅ **ICP validado**: Scoring >70, 3-5 empresas de ejemplo identificadas
- ✅ **Posicionamiento definido**: Statement claro, diferenciadores identificados
- ✅ **Competencia mapeada**: 3-5 competidores directos/indirectos, battle cards creados
- ✅ **Voz de marca**: ACF profile completado (si aplica)

## Flujo Típico

```
1. ICP Analysis (icp-analysis)
   ↓
2. Positioning Statement (positioning)
   ↓
3. Competitive Landscape (competitive-analysis)
   ↓
4. Brand Voice (alma) [opcional]
   ↓
5. Product Messaging (product-marketing) [opcional]
```

## Outputs Generados

- `icp_profile.md` — ICP con scoring y validación
- `positioning_statement.md` — Statement de posicionamiento
- `competitive_landscape.md` — Mapa de competencia
- `acf_profile.md` — Perfil de Attractive Character (si aplica)
- `product_messaging.md` — Arquitectura de mensajes (si aplica)

## Transición a ATRAER

Una vez completada DEFINIR, GrowthOS sugiere:

> "Ahora que tienes ICP y posicionamiento, ¿quieres crear contenido que atraiga a tu cliente ideal?"

Esto activa la fase ATRAER con:
- ICP como input para `content-strategy`
- Posicionamiento como input para `headline-mastery` y `landing-pages`

## Comandos Relacionados

- `/icp` — Workshop interactivo de ICP
- `/diagnostico` — ClarQ assessment (incluye diagnóstico de capabilities)

## Referencias

- Master orchestrator: `../growthOS.md`
- Intake protocol: `../intake/seed-questionnaire.md`
- Siguiente fase: `atraer.md`
