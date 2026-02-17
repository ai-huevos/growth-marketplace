# Brand QA Checklist — AI Huevos

> Criterios de validación para todo export branded.
> Score mínimo: 90/100

**Estado:** DRAFT
**Fecha:** 2026-02-16

---

## Checklist

### Visual (40 puntos)

- [ ] Colores del semantic.tokens.json (no hardcoded) — 10 pts
- [ ] Tipografía: Scandia Medium para títulos, Regular para body — 10 pts
- [ ] Logo: posición correcta según tipo (ver slides.md placement rules) — 10 pts
- [ ] Contraste: WCAG 2.1 AA mínimo (ver contrast reference en SKILL.md) — 5 pts
- [ ] Máximo 3 colores prominentes por composición (60/30/10) — 5 pts

### Voz (35 puntos)

- [ ] Sigue Bold Pattern (GOLPE → DOLOR → PUENTE → PRUEBA → ACCIÓN) — 15 pts
- [ ] Sin palabras prohibidas (ver brand-voice.md §Nunca usar) — 10 pts
- [ ] Vocabulario de marca respetado (conectar, encontrar, rieles) — 5 pts
- [ ] CTA presente al final — 5 pts

### Estructura (25 puntos)

- [ ] Cada sección/slide = 1 idea — 10 pts
- [ ] Títulos ≤ 6 palabras — 5 pts
- [ ] Métricas en formato destacado (no enterradas en párrafos) — 5 pts
- [ ] metadata.md completo — 5 pts

---

## Score mínimo: 90/100

| Score | Acción |
|-------|--------|
| 90-100 | Aprobado para entrega |
| 75-89 | Revisión menor, corregir y re-validar |
| < 75 | Rechazado, regenerar desde pipeline |

---

## Assets de Referencia

| Asset | Ubicación |
|-------|-----------|
| Brand Skill | `~/.claude/skills/ai-huevos-brand/SKILL.md` |
| Brand Identity | `~/.claude/skills/ai-huevos-brand/references/foundations/01-brand-identity.md` |
| Color System | `~/.claude/skills/ai-huevos-brand/references/foundations/03-color-system.md` |
| Slide Patterns | `/Volumes/deathstar/Development/AI huevos/Brand/guidelines/design-system/slides.md` |
| Document Builder | `~/.claude/skills/ai-huevos-brand/references/document-builder/SKILL.md` |
| Design Tokens | `~/.claude/skills/ai-huevos-brand/references/design-lead/brand-foundation/tokens/` |
