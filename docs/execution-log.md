# Execution Log — Registro de Ejecuciones de Templates

## Formato

Cada vez que un agente ejecuta un template, registra una entrada aquí con:
- **Fecha**: Cuándo se ejecutó
- **Template**: ID del template (ver `docs/template-catalog.md`)
- **Agente**: Qué agente ejecutó
- **Contexto**: Cliente o situación específica
- **Adaptaciones**: Qué se adaptó de la forma estándar y por qué
- **Resultado**: Outcome medible contra el benchmark
- **Notas**: Observaciones para evolución futura

## Cómo Usar Este Log

1. **Agentes**: Después de ejecutar un template, append una fila al log
2. **Revisión periódica**: Buscar patrones — si un template se adapta consistentemente en el mismo punto, ese punto necesita evolucionar
3. **Regla de evolución**: 3+ ejecuciones que no alcanzan el benchmark → flag el template para revisión en `docs/template-catalog.md`

---

## Log

| Fecha | Template | Agente | Contexto | Adaptaciones | Resultado | Notas |
|-------|----------|--------|----------|--------------|-----------|-------|
| | | | | | | |
