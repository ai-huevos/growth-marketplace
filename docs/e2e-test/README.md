# E2E Dog Food Test — AI Huevos como Primer Cliente

> **Fecha**: 2026-02-16
> **Método**: La PM orquesta el flujo completo usando AI Huevos como input real
> **Objetivo**: Validar que los 5 plugins producen outputs conectados y accionables

---

## Secuencia de Tests

| # | Test | Plugin/Command | Input | Output Esperado |
|---|------|----------------|-------|-----------------|
| 1 | `/diagnostico` | growth-foundations | AI Huevos contexto completo | ClarQ heatmap (GTM/Revenue/Q2C/Capabilities) |
| 2 | `/icp` | growth-foundations | Datos reales de AI Huevos | ICP scoring con Tier 1 (GTM Engineer LATAM) |
| 3 | `/escala` | dotcom-secrets | 5 plugins como oferta base | Value Ladder (Bait→Frontend→Backend) |
| 4 | `content-strategy` | growth-foundations | ICP + positioning de Tests 1-2 | Ski Slope plan + Topic Triangle |
| 5 | `/copy` | copywriting-engine | ICP + positioning + value prop | Landing page copy + email sequence |
| 6 | `/discovery` + `/propuesta` | sales-blueprint | Prospect ficticio | PULSO prep + propuesta comercial |

## AI Huevos — Input Data

```
Producto: Marketplace de plugins para Claude Code
ICP Target: GTM Engineers, B2B consultores, equipos de growth LATAM
Team Size: 2 personas
Revenue Stage: Pre-Revenue (en validación)
Precio: Freemium → consultoría (value ladder por diseñar)
Pain: Los equipos no tienen frameworks estructurados para Claude Code
Canal: Claude Code marketplace + distribución directa
```

## Criterios de Éxito

- [ ] Cada comando genera output completo sin errores
- [ ] Los outputs se conectan (ICP → positioning → copy → propuesta)
- [ ] PULSO score fluye consistentemente entre plugins
- [ ] Los templates producen documentos que un consultor usaría con un cliente real
- [ ] El flujo completo se ejecuta en < 2 horas de sesión
- [ ] El roadmap de 90 días es ejecutable por 2 personas

## Archivos de Output

- `test-01-diagnostico.md` — ClarQ heatmap de AI Huevos
- `test-02-icp.md` — ICP scoring y tiers
- `test-03-escala.md` — Value Ladder
- `test-04-content-strategy.md` — Ski Slope + Topic Triangle
- `test-05-copy.md` — Landing page + email sequence
- `test-06-discovery-propuesta.md` — PULSO prep + propuesta
- `gap-report.md` — Qué falló, qué necesita ajuste

## Instrucciones de Ejecución

1. Activar la PM en modo Diagnostic: "diagnosticar negocio de AI Huevos"
2. La PM conduce ingesta PULSO con los datos de arriba
3. La PM diagnostica growth stage → Pre-Revenue
4. La PM rutea secuencialmente: /diagnostico → /icp → /escala → content-strategy → /copy → /discovery + /propuesta
5. Cada output se guarda en este directorio
6. Al final, la PM sintetiza un roadmap de 90 días
7. Documentar gaps en gap-report.md
