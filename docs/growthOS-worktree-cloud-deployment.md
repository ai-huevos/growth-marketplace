# GrowthOS Migration — Deploy with Worktrees in the Cloud

Run the migration in [growthOS-migration-plan.md](growthOS-migration-plan.md) using **git worktrees** so that:

- Multiple cloud agents can work in parallel without sharing the same working directory
- Each phase (or parallel wave) has its own branch and worktree
- All work integrates into `development` in an order that respects the phase DAG

## Branch strategy

Keep `development` as the single integration branch. Create **one branch per phase** (or per parallel batch) so each worktree has a clear target:

| Branch     | Purpose                            | Created from                                              |
| ---------- | ---------------------------------- | --------------------------------------------------------- |
| `phase-2`  | dotcom-secrets → motor-de-ofertas   | `development`                                             |
| `phase-3a` | ASK→SONDA, SMIQ→PREGUNTA RAÍZ       | `development`                                             |
| `phase-3b` | REKS→ROCA, Bowtie→CICLO            | `development`                                             |
| `phase-3c` | ACE→AVE                            | `development`                                             |
| `phase-3d` | Content cluster (ORIGEN, PULSAR…)  | `development` (after Phase 2 merged)                      |
| `phase-4`  | P2 renames + Content Mavericks      | `development` (after 3A/3B/3C/3D merged)                  |
| `phase-5`  | GrowthOS os/ layer                  | `phase-4`                                                 |
| `phase-6`  | PM evolution                       | `phase-5`                                                 |
| `phase-7`  | MCP bridge doc                     | `phase-5`                                                 |

**Merge order into `development`**:  
Phase 2 → then 3A, 3B, 3C (any order) → then 3D → then 4 → 5 → then 6 and 7 (any order). Phase 8 runs interactively on `development` after 6 and 7 are merged.

## Worktree layout (single cloud environment)

Assume one cloud workspace (e.g. Cursor, Codespaces, or a VM) with one clone. Create worktrees in sibling directories so each agent has a separate working tree and branch:

```text
growth-marketplace/           ← main worktree (development)
../growth-wt-phase2/          ← worktree on branch phase-2
../growth-wt-phase3a/         ← worktree on branch phase-3a
../growth-wt-phase3b/         ← worktree on branch phase-3b
../growth-wt-phase3c/         ← worktree on branch phase-3c
../growth-wt-phase3d/         ← worktree on branch phase-3d (created after phase-2 merged)
../growth-wt-phase4/          ← worktree on branch phase-4
../growth-wt-phase5/          ← worktree on branch phase-5
../growth-wt-phase6/          ← worktree on branch phase-6
../growth-wt-phase7/          ← worktree on branch phase-7
```

**Why worktrees**: One clone, one `.git`; each worktree is a separate directory with its own branch and working copy. No need to clone N times; fetches/merges stay in one object store.

## Setup (one-time in cloud)

1. **Clone** (if starting from scratch in cloud):

   ```bash
   git clone -b development https://github.com/ai-huevos/growth-marketplace.git
   cd growth-marketplace
   ```

2. **Create branches** (from current `development`):

   ```bash
   git fetch origin development
   git branch phase-2 origin/development
   git branch phase-3a origin/development
   git branch phase-3b origin/development
   git branch phase-3c origin/development
   # phase-3d, phase-4, phase-5, phase-6, phase-7 created after their deps are merged
   ```

3. **Add worktrees** (from repo root):

   ```bash
   git worktree add ../growth-wt-phase2 phase-2
   git worktree add ../growth-wt-phase3a phase-3a
   git worktree add ../growth-wt-phase3b phase-3b
   git worktree add ../growth-wt-phase3c phase-3c
   ```

   Or use the script: `./scripts/growthOS-worktree-setup.sh wave1` then `wave2`, etc.

4. **Agent assignment**: Open or attach each cloud agent/session to one worktree path and give it only that phase’s section from [growthOS-migration-plan.md](growthOS-migration-plan.md) (e.g. “Execute Phase 2 per docs/growthOS-migration-plan.md”).

## Execution waves (aligned with migration plan)

- **Wave 1**: One agent in `../growth-wt-phase2`. Execute Phase 2, commit, push `phase-2`, merge `phase-2` into `development`, push `development`.
- **Wave 2**: Three agents in `../growth-wt-phase3a`, `../growth-wt-phase3b`, `../growth-wt-phase3c`. Each pulls latest `development`, executes 3A / 3B / 3C, commits, pushes. Merge 3A, 3B, 3C into `development` (order arbitrary), push `development`.
- **Wave 3**: One agent. Create branch `phase-3d` from `development`, add worktree `../growth-wt-phase3d`. Run Phase 3D, push, merge to `development`. Then create `phase-4` from `development`, add `../growth-wt-phase4`, run Phase 4, merge. Then `phase-5` and `../growth-wt-phase5`, run Phase 5, merge.
- **Wave 4**: Two agents. Create `phase-6` and `phase-7` from `development`, add `../growth-wt-phase6` and `../growth-wt-phase7`. Run Phase 6 and 7 in parallel, push, merge both into `development`.
- **Wave 5**: No worktree needed. On `development`, run Phase 8 (dog-fooding) interactively.

## Conflict mitigation

- **Phase 2** is the only renamer (`plugins/dotcom-secrets` → `motor-de-ofertas`). No one else should touch that path until Phase 2 is merged.
- **3A, 3B, 3C** touch mostly disjoint skill trees (quiz-funnel, coaching cluster, discovery cluster). Possible overlap: shared registries (e.g. `CLAUDE.md`, `docs/template-catalog.md`). If a phase only updates the lines it owns, conflicts are reduced; otherwise resolve at merge (take both sides and re-check tables).
- **3D** depends on Phase 2; branch `phase-3d` must be created from `development` after Phase 2 is merged so that `motor-de-ofertas/` exists.
- **Registry files**: Plan already says “update if affected.” Recommendation: after each merge to `development`, run a quick sanity check (e.g. grep verification from the plan) and fix any duplicate or missing registry entries in a follow-up commit if needed.

## Optional: multiple cloud instances

If agents run in **separate** cloud environments (e.g. different Cursor cloud projects or VMs):

- Each environment **clones** the repo (no shared worktrees).
- Each uses a **single branch** per phase (e.g. one clone on `phase-2`, one on `phase-3a`, etc.).
- Flow: clone → checkout or create branch from `development` → do phase work → push branch → merge to `development` from a single “orchestrator” clone or via GitHub (PRs or local merge then push).
- Merge order remains the same; worktrees are not required but branches and merge order are.

## Checklist for each phase (agent-facing)

1. Open worktree (or clone) for this phase’s branch; ensure branch is up to date with `development` (merge or rebase as agreed).
2. Execute only that phase’s section of [growthOS-migration-plan.md](growthOS-migration-plan.md) (agent instructions, replacements, renames).
3. Run the phase’s **Verification** commands from the plan; fix until they pass.
4. Commit with message `feat: <phase description> (Phase N)`.
5. Push branch to `origin`.
6. Merge into `development` (in the right order), push `development`, then remove worktree if done or repurpose for next wave.

## Summary

- **One repo, one integration branch** (`development`).
- **One branch per phase** (or per parallel batch); **one worktree per branch** when using a single cloud environment.
- **Merge order** follows the DAG: 2 → 3A/3B/3C → 3D → 4 → 5 → 6 & 7; then Phase 8 on `development`.
