# AI Huevos — Client Instance

> Primer cliente del Growth Marketplace.
> Este directorio contiene toda la configuración específica de marca,
> prompts NLM, y exports generados para AI Huevos.

**Filosofía:** "Pa' emprender se necesitan huevos"
**Brand Skill:** `~/.claude/skills/ai-huevos-brand/`
**NLM Notebook:** `second-brain` (943410cf-1885-4802-a1e8-fe45cdfe6e26)
**Brand Assets:** `/Volumes/deathstar/Development/AI huevos/Brand/`

---

## Estructura

```
clients/ai-huevos/
├── README.md                    ← Este archivo
├── brand-config/
│   ├── brand-voice.md           ← Reglas de voz y vocabulario (DRAFT)
│   ├── nlm-prompts.md           ← Prompt templates bilingües para NLM
│   └── brand-qa-checklist.md    ← Criterios de validación QA
├── exports/                     ← Contenido exportado (por fecha)
│   └── YYYY-MM-DD-<slug>/
│       ├── raw/                 ← Output de NLM sin branding
│       ├── branded/             ← Output con marca aplicada
│       └── metadata.md          ← Trazabilidad
└── nlm-sources/                 ← Fuentes específicas del cliente
```

---

## Pipeline de Export

Ver `docs/second-brain/24-brand-export-pipeline.md` para el pipeline genérico.

### Quick Start

```bash
# 1. Generar reporte ejecutivo en español
echo y | nlm report create second-brain \
  -f "Create Your Own" \
  --prompt "$(cat clients/ai-huevos/brand-config/nlm-prompts.md | ...)" \
  --language es -y

# 2. Check status
nlm studio status second-brain

# 3. Invoke brand skill para aplicar marca
# (via /brand-export command cuando esté implementado)
```

---

## Estado

| Componente | Estado |
|------------|--------|
| Brand voice rules | DRAFT — pendiente validación con fundadores |
| NLM prompt templates | DRAFT — bilingües, 4 tipos de artifact |
| Brand QA checklist | DRAFT — scoring definido |
| /brand-export command | TODO — pipeline genérico en doc-24 |
| Voice discovery interview | Listo — ver docs/prompts/brand-voice-discovery.md |

---

## Próximos Pasos

1. **Fundadores completan entrevista de voz** (docs/prompts/brand-voice-discovery.md)
2. **Reconciliar outputs** → actualizar brand-voice.md de DRAFT a VALIDATED
3. **Implementar /brand-export** → command en el marketplace
4. **Test E2E** → generar primer export real con el pipeline completo
