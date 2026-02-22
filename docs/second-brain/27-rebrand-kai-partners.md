# 27 — Rebrand: AI Huevos → KAI Partners

> Documento de referencia para la ejecución completa del rebrand.
> Actualizado conforme se ejecutan las fases del plan.

## Estado General

| Campo | Valor |
|-------|-------|
| **Fecha inicio** | 2026-02-21 |
| **Nombre anterior** | AI Huevos |
| **Nombre nuevo** | KAI Partners |
| **Panel canónico** | `/Users/tatooine/Downloads/Brand/kai-panel-reference.md` |
| **GCO actual** | `~/.growthos/contexts/ai-huevos.yaml` (DEFINIR, 0%) |
| **GCO nuevo** | `~/.growthos/contexts/kai-partners.yaml` (pendiente) |
| **Intelligence brief** | `docs/rebrand-intelligence-brief.md` |

---

## Decisión de Naming

### Por qué KAI Partners
- **KAI**: Monosílabo con peso semántico extraordinario — japonés 改 (cambio/mejora, Kaizen), Ki 気 (energía), hawaiano (océano), escandinavo (guerrero), persa (rey)
- **Partners**: Palabra relacional — "trabajamos CONTIGO, no SOBRE ti". Apareció orgánicamente en sesión del 7 de febrero antes de que nadie pensara en naming
- **La K**: Preserva el hilo Cardona/Konfie que ambos fundadores exigían
- **AI oculto**: K-**AI** — las letras A-I embebidas sin ser explícitas

### Panel de validación
- 6 panelistas expertos evaluaron el nombre
- Resultado: 5/6 aprobación fuerte, 1/6 proceder con cautela
- Documento canónico: `kai-panel-reference.md` (STATUS: CANONICAL)

### Nombres rechazados (sesión Feb 19)
Cortex, Context, Catalyst, Katalystia, Kaleido, Kriya, Prana, Danksy, Kinetic — todos explorados y descartados por diversos motivos (dominios caros, falta de resonancia, demasiado genéricos)

---

## Inteligencia Recopilada (Phase 0)

### Fuentes MCP
- **Fireflies**: 12 transcripciones analizadas (EOS sessions, Daily Scrambles, client calls, brand interviews)
- **Notion**: 7 páginas del workspace referenciando "AI Huevos" — necesitan actualización
- **Figma**: Design system completo en file Z2oWxiu7yyEJFy9TbwIQyZ (235K metadata)

### Voice Mining — Patrones de Fundadores
| Fundador | Energía | Vocabulario clave | Valores |
|----------|---------|-------------------|---------|
| Daniel Restrepo | Técnica/infraestructura | parametrización, pipeline, APIs, Data Lake | Transparencia, profundidad técnica, crecimiento sostenible |
| Danny Cardona | Relacional/transformación | movilizar, conectar, arqueología, rieles | Coraje, empoderamiento, velocidad |

### Línea de Tiempo del Naming
1. Feb 7 — "Partner that builds with you" (orgánico)
2. Feb 10 — "Build to Discover" (metodología)
3. Feb 13 — "Cambio de razón social" (trigger legal)
4. Feb 17 — Naming + tono de voz asignado a Danny
5. Feb 18 — Workshop de naming planificado
6. Feb 19 — Sesión completa: 15+ nombres, KAI emerge como favorito
7. Feb 21 — Decisión final: KAI Partners

---

## Voice Migration Map

| Elemento | Decisión | Notas |
|----------|----------|-------|
| Bold-First (BOLD>SMART>WARM>RELIABLE) | **MANTENER** | ADN de voz fundamental |
| GOLPE-DOLOR-PUENTE-PRUEBA-ACCIÓN | **MANTENER** | Estructura narrativa |
| "Pa' emprender se necesitan huevos" | **RETIRAR** | Nuevo tagline de panel |
| "AI tastes better with eggs" | **RETIRAR** | Nuevo tagline en inglés |
| Vocabulario (conectar, rieles, arqueología) | **EVALUAR** | Decisión por palabra |
| Paleta (#FFD826, #3988FF, #030102) | **MANTENER** | Independiente del nombre |
| Tipografía (Scandia + Geist Mono) | **MANTENER** | Independiente del nombre |
| Egg characters (22 SVGs) | **EVOLUCIONAR** | → Formas geométricas abstractas de energía |
| Logo wordmark | **REDISEÑAR** | Nuevo para "KAI Partners" |

---

## Plan de Ejecución (7 Fases)

### Phase 0: MCP Intelligence Gathering ✅
- Intelligence brief generado: `docs/rebrand-intelligence-brief.md`
- Fireflies, Notion, Figma auditados

### Phase 1: DEFINIR — Brand Foundation (Semanas 1-2)
- [x] `/icp` → ICP scoring actualizado para KAI Partners → `docs/rebrand-icp-analysis.md`
- [x] `competitive-analysis` → Landscape vs KAI Partners positioning → `docs/rebrand-competitive-analysis.md`
- [x] `positioning` → Nuevo positioning statement + value prop canvas → `docs/rebrand-positioning.md`
- [x] `product-marketing` → Hero's Journey + Messaging Architecture Matrix → `docs/rebrand-product-marketing.md`

### Phase 2: ALMA — Brand Character (Semana 2)
- [ ] `alma` ACF 10-step → Perfil de carácter completo
- [ ] Voice migration → Mapa de migración de voz
- [ ] `alma` IMAN → Secuencia ORIGEN (5 emails rebrand)
- [ ] Egg character evolution → Brief de diseño para nuevos personajes

### Phase 3: ATRAER — Messaging & Copy (Semanas 2-3)
- [ ] `/copy` → Website copy completo
- [ ] `/headline` → Headlines para todos los touchpoints
- [ ] `/email-sequence` → Secuencia de anuncio de rebrand
- [ ] `landing-pages` → Arquitectura de conversión
- [ ] `psychological-triggers` → Auditoría de triggers

### Phase 4: CONVERTIR — Offers, Funnels & Sales (Semana 3)
- [ ] `/escala` → Value ladder FREE→FRONTEND→MIDDLE→BACKEND
- [ ] `flujo` → Arquitectura de funnel 7 fases
- [ ] `discovery-mastery` → Talk track actualizado
- [ ] `customer-journey` → 7 Key Moments para KAI Partners

### Phase 5: Archive + Build Architecture (Semana 3)
- [ ] `clients/ai-huevos/` → `archive/ai-huevos/`
- [ ] Crear `clients/kai-partners/brand-config/`
- [ ] Nuevo brand skill `kai-partners-brand`
- [ ] Nuevo GCO `kai-partners.yaml`
- [ ] Actualizar marketplace.json, CLAUDE.md, plugin manifests
- [ ] `git branch archive/ai-huevos`
- [ ] Sweep de referencias restantes

### Phase 6: Digital Presence (Semana 4)
- [ ] Website KAI Partners
- [ ] Pitch deck actualizado
- [ ] Templates de email con nueva marca
- [ ] Propuestas branded
- [ ] Artefactos NLM regenerados
- [ ] Notion workspace actualizado

---

## Dog-Food Scoring

Cada skill invocado se evalúa (1-5):

| Skill | Funcionó? | Adaptación? | Gap? | Score | Notas |
|-------|-----------|-------------|------|-------|-------|
| (pendiente ejecución) | | | | | |

### Gaps Anticipados (Skills Nuevos)
| Gap | Descripción | Prioridad |
|-----|-------------|----------|
| `brand-migration` | Automatizar archive + new brand + GCO migration + ref sweep | ALTA |
| `voice-mining` | Extraer patrones de voz de Fireflies → voice DNA estructurado | ALTA |
| `mcp-intelligence-brief` | Coordinar múltiples MCPs en brief unificado | MEDIA |
| `launch-orchestrator` | Anuncio coordinado multi-canal | MEDIA |
| `character-evolution` | Evolución guiada de design system | BAJA |

---

## Documentos Relacionados
- `docs/rebrand-intelligence-brief.md` — Brief de inteligencia MCP
- `clients/ai-huevos/brand-config/brand-voice.md` — Voz actual (DRAFT)
- `os/intake/context-object.md` — Schema GCO
- `docs/second-brain/24-brand-export-pipeline.md` — Pipeline de exportación
- `docs/second-brain/00-proyecto-overview.md` — Overview del proyecto
