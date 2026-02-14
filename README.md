# AI Huevos Growth Marketplace

Un marketplace de plugins para Claude Code que empaqueta frameworks de B2B growth, marketing, ventas y operaciones como skills, agentes, comandos y hooks instalables.

## Instalación

```bash
# Añadir el marketplace
/plugin marketplace add ai-huevos/growth-marketplace

# Ver plugins disponibles
/plugin discover

# Instalar un plugin
/plugin install growth-foundations@growth-marketplace
```

## Plugins Disponibles

### growth-foundations (Gratis)

Frameworks fundamentales de B2B growth para cualquier equipo.

| Componente | Tipo | Descripción |
|-----------|------|-------------|
| `icp-analysis` | Skill | Análisis de Ideal Customer Profile con scoring SPICED |
| `positioning` | Skill | Propuesta de valor, diferenciación, messaging framework |
| `competitive-analysis` | Skill | Análisis competitivo con Five Forces + mapa de mercado |
| `/diagnostico` | Command | Assessment ClarQ: GTM, Revenue, Q2C, Capabilities |
| `/icp` | Command | Workshop interactivo para definir y scorear ICP |

## Uso

Los skills se activan automáticamente cuando Claude detecta tareas relevantes. Los commands se invocan con `/`:

```
/diagnostico Empresa XYZ
/icp SaaS B2B en LATAM
```

## Para quién

- Equipos de ventas B2B que necesitan frameworks de discovery, qualification y pipeline
- Equipos de marketing que buscan positioning y competitive analysis
- Consultores que usan Claude Code para servir clientes empresariales
- Empresas LATAM ($50M+) buscando institucionalizar operaciones comerciales

## Contribuir

Este marketplace es mantenido por [AI Huevos](https://huevos.ai). Para reportar issues o sugerir mejoras, abre un issue en este repositorio.

## Licencia

MIT
