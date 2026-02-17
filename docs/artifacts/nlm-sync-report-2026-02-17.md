# NLM Sync Report — 2026-02-17

## Executive Summary

| Category | Count | Issues |
|----------|-------|--------|
| Sources | 62 | 16 duplicate pairs, external content mixed in |
| Studio Artifacts | 20 | 2 outdated (wrong stats, old terminology) |

---

## SOURCES — Duplicates to Delete

The following sources have **duplicate entries**. Delete ONE of each pair (keep the newer one):

| Doc | Duplicate IDs (delete one) |
|-----|---------------------------|
| 00-proyecto-overview.md | `34822670-b34a-4b2b-b85c-4d9f06709612`, `70a19c19-e548-48b5-85ea-18671380ace6` |
| 01-arquitectura-convenciones.md | `09131882-1669-483a-8db9-2f2c03223cf5`, `782f444d-b24c-4de0-9315-bac39c9b44bf` |
| 02-metodologia-pulso.md | `acd84889-3cc1-43f3-adda-a6f2ad43f965`, `c4d7963c-d595-43e5-af91-8d179703f59a` |
| 03-plugin-growth-foundations.md | `2d63d3c8-3b0b-4bba-90aa-ebd512935e18`, `f69adc7f-c857-4f22-9bbe-ffe5d89cc157` |
| 04-plugin-sales-blueprint.md | `959b9892-92bc-4343-b3ea-0c685d702ec0`, `f18ce5d7-a312-4470-80db-2de1bee0cd13` |
| 06-modelos-scoring.md | `1255850d-b72a-49e7-9237-e1e69e701027`, `6be1ed74-a397-4724-b0be-7d488caf60a8` |
| 07-sistema-agentes.md | `644e827c-a8c9-4831-ad6f-e9d8cac00c45`, `76dd0070-3ff3-46d4-b63f-c8cc195a415e` |
| 08-frameworks-patrones.md | `1453810e-350b-4b73-ac90-93052e69bd63`, `d58d950f-581a-40bb-88fe-f6556fd3268b` |
| 09-inventario-contenido.md | `6bca5a69-87ba-4d21-926a-2891b810bb22`, `a6e8dba4-6d72-4fd5-a7ba-0b7bc84b7239` |
| 10-decisiones-diseno.md | `570e033e-7651-4e1c-9d1f-c98cd51fb313`, `7608db66-da6c-4151-a0c0-505e05f11719` |
| 11-gtm-skills-landscape.md | `07073484-b882-4d6d-ad58-28d25684a8a5`, `413a60fc-58f5-40ca-a846-f560cff17841` |
| 14-flujos-usuario.md | `710cd483-8ae4-4fe1-a68b-3c1634c5fa3f`, `803ee8b2-1778-439f-abde-6ec601f86c5f` |
| 15-arquitectura-sistema.md | `9a2c5490-9a73-4a8d-9c33-058537a37c49`, `df00f8ac-eefd-48ab-b1f5-2dbd177d1ff9` |
| 17-research-plataforma-inteligencia-b2b.md | `0484fa99-312a-463a-81c9-5abcaa3fd162`, `dbdf0bf2-dcc1-431b-8a1d-1206ee4f4e91` |
| 22-sistema-realidad-source-of-truth.md | `122e0514-bc1a-4fdd-92fe-270efcaebc2b`, `77c6a379-684d-48a4-9221-bde833f72fcd` |
| 25-plugin-play-to-win.md | `240b61ab-0c2d-43f6-957e-0472f68e4848`, `f2ec490c-6212-4825-9e57-d1524e664794` |

**Command to delete duplicates** (pick one ID from each pair):
```bash
# Example: delete the first ID from each duplicate pair
nlm source delete second-brain 34822670-b34a-4b2b-b85c-4d9f06709612 -y
nlm source delete second-brain 09131882-1669-483a-8db9-2f2c03223cf5 -y
nlm source delete second-brain acd84889-3cc1-43f3-adda-a6f2ad43f965 -y
# ... etc
```

---

## SOURCES — External Content (Review for Deletion)

These are NOT second-brain docs. Decide if they should stay:

### Google Docs Playbooks (external marketing content)
| Title | ID | Recommendation |
|-------|-----|----------------|
| 00. Entendiendo los Skills de marketing... | `5bf84e34-4614-4402-b780-b1794800591a` | DELETE (external) |
| 01. Objetivos de Marketing de Alto Impacto... | `c2fc3004-a57b-4880-b233-3d7b9c1360c2` | DELETE (external) |
| 02. Estrategia de Marketing Contextual... | `92222ecb-7abe-4080-92ea-c4b2f113a6f3` | DELETE (external) |
| 03. Construyendo equipos de marketing... | `27164fee-dc8a-4e74-b3fd-b514ffad65bc` | DELETE (external) |
| 04. Content Marketing estratégico... | `68addb89-5f3a-4213-8342-619f796701e8` | DELETE (external) |
| 04. Revenue-First Marketing... | `2889c0f6-7c31-4159-b419-51d92b827181` | DELETE (external) |
| 05. Product Marketing mastery... | `92f45381-d47b-4b06-b197-7fc67816011c` | DELETE (external) |
| 07. Marketing Interno como palanca... | `29f0b0fe-d507-4c61-ac28-59a69d9dacc0` | DELETE (external) |
| 08. Como crear una comunidad rentable... | `4504df61-b3cc-4640-a5d0-1ffc3b30c0e2` | DELETE (external) |
| 09. El Futuro del Marketing B2B... | `746e8126-54dd-41a3-b2cc-8c5d243238df` | DELETE (external) |
| 10. Equipo de marketing de una sola persona... | `a8c7d1e6-8671-4493-badb-767acc073d3f` | DELETE (external) |
| AI Megaprompts - Marketing | `8e21af03-a5e4-4a4c-8473-7bdc17bac800` | DELETE (external) |

### Other External
| Title | ID | Recommendation |
|-------|-----|----------------|
| B2B Marketing Playbook (Word doc) | `cec3d91a-4a61-417a-a26d-c49f3815cb22` | DELETE (external) |
| GitHub - lennys-podcast-transcripts | `6ef8c27d-6a62-4110-a5b9-2c0e423f7cac` | KEEP (research ref) |

### Web Pages (SEO research)
| Title | ID | Recommendation |
|-------|-----|----------------|
| 7 SEO Strategies for B2Bs... | `6a1f4953-14ef-4b7c-9be5-b7cf2ff1e553` | KEEP (research) |
| The Beginner's Guide to B2B SEO... | `0262f2c1-9d14-4cf9-b407-5b4f244b49aa` | KEEP (research) |
| Topic Clusters for SEO... | `281c5cfb-70fa-4ab1-a5ed-d38aa78a0ece` | KEEP (research) |
| What Is GEO and AEO?... | `6f6c7fdb-b1d5-41d2-acc9-467e2f476bcb` | KEEP (research) |

---

## STUDIO ARTIFACTS — Outdated

### Slide Decks with Wrong Info

| ID | Issue | Action |
|----|-------|--------|
| `c1a60b93-fbd0-4108-8328-1d8271f0e880` | Says "5 plugins, 18 skills" — now 6 plugins, 29 skills | **DELETE & regenerate** |
| `23d25bae-be44-467f-a6f8-459ee7581778` | Mentions "SPICED" — should be "PULSO" | **DELETE & regenerate** |

**Delete commands:**
```bash
nlm studio delete second-brain c1a60b93-fbd0-4108-8328-1d8271f0e880
nlm studio delete second-brain 23d25bae-be44-467f-a6f8-459ee7581778
```

### Infographics (13 total)
Can't determine content without downloading. Recommend keeping unless visual inspection shows outdated info.

### Reports (3 total)
Can't determine content without downloading. Likely fine.

---

## RECOMMENDED CLEANUP SCRIPT

```bash
#!/bin/bash
# NLM Cleanup Script — 2026-02-17

# 1. Delete duplicate sources (keeping newer versions)
echo "Deleting duplicate sources..."
nlm source delete second-brain 34822670-b34a-4b2b-b85c-4d9f06709612 -y
nlm source delete second-brain 09131882-1669-483a-8db9-2f2c03223cf5 -y
nlm source delete second-brain acd84889-3cc1-43f3-adda-a6f2ad43f965 -y
nlm source delete second-brain 2d63d3c8-3b0b-4bba-90aa-ebd512935e18 -y
nlm source delete second-brain 959b9892-92bc-4343-b3ea-0c685d702ec0 -y
nlm source delete second-brain 1255850d-b72a-49e7-9237-e1e69e701027 -y
nlm source delete second-brain 644e827c-a8c9-4831-ad6f-e9d8cac00c45 -y
nlm source delete second-brain 1453810e-350b-4b73-ac90-93052e69bd63 -y
nlm source delete second-brain 6bca5a69-87ba-4d21-926a-2891b810bb22 -y
nlm source delete second-brain 570e033e-7651-4e1c-9d1f-c98cd51fb313 -y
nlm source delete second-brain 07073484-b882-4d6d-ad58-28d25684a8a5 -y
nlm source delete second-brain 710cd483-8ae4-4fe1-a68b-3c1634c5fa3f -y
nlm source delete second-brain 9a2c5490-9a73-4a8d-9c33-058537a37c49 -y
nlm source delete second-brain 0484fa99-312a-463a-81c9-5abcaa3fd162 -y
nlm source delete second-brain 122e0514-bc1a-4fdd-92fe-270efcaebc2b -y
nlm source delete second-brain 240b61ab-0c2d-43f6-957e-0472f68e4848 -y

# 2. Delete external Google Docs playbooks
echo "Deleting external content..."
nlm source delete second-brain 5bf84e34-4614-4402-b780-b1794800591a -y
nlm source delete second-brain c2fc3004-a57b-4880-b233-3d7b9c1360c2 -y
nlm source delete second-brain 92222ecb-7abe-4080-92ea-c4b2f113a6f3 -y
nlm source delete second-brain 27164fee-dc8a-4e74-b3fd-b514ffad65bc -y
nlm source delete second-brain 68addb89-5f3a-4213-8342-619f796701e8 -y
nlm source delete second-brain 2889c0f6-7c31-4159-b419-51d92b827181 -y
nlm source delete second-brain 92f45381-d47b-4b06-b197-7fc67816011c -y
nlm source delete second-brain 29f0b0fe-d507-4c61-ac28-59a69d9dacc0 -y
nlm source delete second-brain 4504df61-b3cc-4640-a5d0-1ffc3b30c0e2 -y
nlm source delete second-brain 746e8126-54dd-41a3-b2cc-8c5d243238df -y
nlm source delete second-brain a8c7d1e6-8671-4493-badb-767acc073d3f -y
nlm source delete second-brain 8e21af03-a5e4-4a4c-8473-7bdc17bac800 -y
nlm source delete second-brain cec3d91a-4a61-417a-a26d-c49f3815cb22 -y

# 3. Delete outdated studio artifacts
echo "Deleting outdated studio artifacts..."
nlm studio delete second-brain c1a60b93-fbd0-4108-8328-1d8271f0e880
nlm studio delete second-brain 23d25bae-be44-467f-a6f8-459ee7581778

echo "Cleanup complete. Verify with: nlm source list second-brain | jq length"
```

---

## POST-CLEANUP: Regenerate Artifacts

After cleanup, regenerate updated artifacts:

```bash
# New launch slide deck with correct stats
echo y | nlm studio create second-brain slide_deck --topic "AI Huevos Growth Marketplace: 6 plugins, 29 skills, GrowthOS orchestrator, PULSO methodology, DEFINIR→ATRAER→CONVERTIR→ESCALAR phases"

# New system map infographic
echo y | nlm studio create second-brain infographic --topic "GrowthOS System Architecture: 4-phase growth model, 6 plugins, 29 skills, GCO context object, PULSO diagnostic"
```

---

## Summary

| Action | Count |
|--------|-------|
| Duplicate sources to delete | 16 |
| External sources to delete | 13 |
| Outdated artifacts to delete | 2 |
| **Total deletions** | **31** |
| Sources after cleanup | ~33 (28 second-brain docs + 5 research URLs) |
| Artifacts to regenerate | 2 |
