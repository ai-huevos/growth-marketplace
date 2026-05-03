# docs/Agents — Triage & Verdicts

> Status: 2026-05-02 · Phase 0 of the lens-library integration plan
> Plan reference: `~/.claude/plans/i-have-this-folder-radiant-horizon.md`

This folder is an **incubator**, not a marketplace surface. Each agent gets one of five verdicts:

- **PROMOTE-TO-PLUGIN** → ships as a new entry in `plugins/`
- **MERGE-INTO-EXISTING** → ports as a skill inside an existing plugin
- **PROMOTE-TO-TOOL** → ships as a meta-tool in `tools/`, symlinked to `~/.claude/skills/`
- **PARK-AS-REFERENCE** → stays here as a design reference, not promoted
- **QUARANTINE-CLIENT-WORK** → live deliverables; move to `clients/<client>/`, do not publish

---

## Verdicts (8 agents + 1 quarantine bucket)

| Folder | Verdict | Target | Why |
|---|---|---|---|
| `business-architect/` | PROMOTE-TO-PLUGIN | new `plugins/business-architect/` | ICP → offer → pricing → acquisition → roadmap is a higher-order orchestrator that doesn't fit any single existing plugin. Refactor as orchestrator skill that *calls* existing skills (icp-analysis, positioning, escala, flujo) — owns no methodology of its own. |
| `business-architect/Insigths/` | QUARANTINE-CLIENT-WORK | `clients/<client>/business-architect-deliverables/` | Movik / Energy Master / Grupo Doria Medina / G3 Logistica / AI Huevos own client materials. Live deliverables; do not publish in shared docs. **Action taken in Phase 0.** |
| `scroll-stopping-hooks/` | MERGE-INTO-EXISTING | new skill `plugins/copywriting-engine/skills/hook-mastery/` | Distinct from headline-mastery (hooks are *openings*; headlines are *summaries*). Lives well as a sibling skill. Add `lenses: [schwartz, cialdini]`. |
| `meeting-to-prd/` | MERGE-INTO-EXISTING | new skill `plugins/conversational-pm/skills/meeting-to-prd/` | Transcript → PRD/Epic/Story is exactly conversational-pm's technical-build mode. Port templates (`PRD`, `Epic`, `User Story`, `Hypothesis Card`) into the skill's `templates/`. Add `lenses: [christensen, tetlock]`. |
| `agent-forge/` | PROMOTE-TO-TOOL | `tools/agent-forge/` | Meta-tool for designing new agents. Symlink to `~/.claude/skills/agent-forge/` like `plugin-factory`. Also: this is the **canonical pattern** for the eventual agent format unification (XML-tagged CLAUDE.md + numbered playbooks). |
| `prompt-engineer/` | PROMOTE-TO-TOOL | `tools/prompt-engineer/` | Meta-tool. Same pattern as agent-forge. |
| `vibe-coding-copilot/` | PROMOTE-TO-TOOL | `tools/vibe-coding-copilot/` | Meta-tool for tool-specific build planning (Cursor/v0/Bolt/Claude Code). |
| `learn-fast/` | PARK-AS-REFERENCE | stays in `docs/Agents/learn-fast/` | Education-domain agent. No marketplace fit yet. Strong design; revisit when education plugin is on the roadmap. |
| `image-video-director/` | PARK-AS-REFERENCE | stays in `docs/Agents/image-video-director/` | Strong design. No plugin home yet. Revisit when building a Visual & Brand plugin. |

---

## Insigths/ quarantine — file-by-file

The `business-architect/Insigths/` folder mixed three categories that need different homes.

### A. Client-named subfolders → individual clients

| Source | Target |
|---|---|
| `Movik/` (5 files: 2 proposals, research, marketing playbook, engagement model) | `clients/movik/business-architect-deliverables/` |
| `Energy Master/` (1 PDF) | `clients/energy-master/business-architect-deliverables/` |
| `Grupo Doria Medina/` (proposal docx + budget csv) | `clients/grupo-doria-medina/business-architect-deliverables/` |
| `G3 Logistica/` (proposal PDF) | `clients/g3-logistica/business-architect-deliverables/` |

### B. AI Huevos own materials → `clients/ai-huevos/`

These are AI Huevos' own internal artifacts (founder personal docs, internal pitch material, own offers/playbooks). Already overlaps with `clients/ai-huevos/voc/` (PREGUNTAS xlsx is in both places — duplicate already exists in the canonical home).

| Source | Target |
|---|---|
| `DANIEL.MD`, `DC's reflection - La reconstrucción de Cardona.csv` | `clients/ai-huevos/01-story/` (founder personal) |
| `Human_Design_Findings.md`, `VIA_Character_Strengths_Findings.md`, `Kolbe_A_Index_Findings.md`, `Gallup_CliftonStrengths_Findings.md`, `Cognitive_Audit_Cardona_March2026.docx` | `clients/ai-huevos/01-story/founder-assessments/` |
| `AI_Huevos_Pricing_Grid.md`, `AI_Huevos_Three_Offers_Spec.md`, `AI_Huevos_Free_Diagnostic_Playbook.md`, `AI_Huevos_90Day_Roadmap.md`, `AI_Huevos_DogFood_Case_Study.md`, `AI_Huevos_Media_Engine_Spec.md` | `clients/ai-huevos/business-architect-deliverables/` |
| `AI_Huevos_Pitch_Update_Movik.md`, `AI_Huevos_Pitch_Update_EnergyMaster.md` | move to the relevant client's `business-architect-deliverables/` (cross-references) |
| `Assessment_Stack_Index.md` | `clients/ai-huevos/01-story/founder-assessments/` |
| `analisis_audiencia_sesion.jsx`, `postmortem_endeavor_masterclass.jsx` | already exist as duplicates in `clients/ai-huevos/voc/`. **Delete from Insigths after verifying parity.** |
| `PREGUNTAS - DANIEL CARDONA.xlsx` | already in `clients/ai-huevos/voc/`. **Delete from Insigths.** |

### C. Phase 0 execution scope

In this Phase 0 pass, only the **client-named subfolders** (category A) move automatically — those are unambiguous client deliverables. Category B (AI Huevos own materials) requires founder review of overlap with the existing `clients/ai-huevos/` tree before consolidating, and is left in place with this triage as the action plan.

---

## Phase 2 promotion sequencing (after Phase 1 lens MVP validates)

The plan promotes 3 agents + 3 tools in Phase 2 in this order:

1. `scroll-stopping-hooks` → `hook-mastery` skill (smallest scope, fastest validation)
2. `meeting-to-prd` → conversational-pm skill (template-rich, easy port)
3. `business-architect` → new plugin (largest scope; refactor as orchestrator, not parallel stack)
4. `agent-forge` / `prompt-engineer` / `vibe-coding-copilot` → `tools/` symlinks

Each promotion adds `lenses:` frontmatter from the matching expert(s) in `os/lenses/registry.md`.
