---
name: lens-library-readme
description: Contract and governance for the os/lenses/ expert reasoning library
type: orchestrator-doc
---

# Expert Lens Library — `os/lenses/`

> "How we reason." Cross-cutting expert reasoning lenses that any skill or agent can opt into via `lenses:` frontmatter.

## What lives here

Canonical thinkers' reasoning systems — Hormozi on offers, Schwartz on awareness, Dunford on positioning, Cialdini on trust, Tetlock on forecasting, etc. **Not buyer personas. Not brand voice.** They are reasoning frameworks meant to bias an LLM's analysis toward an expert's mental model.

Source: 43 JSON profiles in `Context Profiles Collection`, converted via `scripts/convert-lens.mjs` into MD with YAML frontmatter.

## Layout

```
os/lenses/
  README.md                    ← this file
  registry.md                  ← join table: lens_id → skills/agents using it
  <domain-slug>/               ← one folder per methodological domain
    <lastname>.md              ← one file per expert
```

Domain slugs match the 15-domain taxonomy from the Context Profiles Collection (offer-engineering, persuasion, positioning, ux-research, thinking-models, product-design, sales-influence, trust-ethics, strategy-innovation, data-viz, forecasting, systems-ops, quality, ai-future, visual-design).

## Lens file format

Each `<lastname>.md` follows this contract:

```markdown
---
lens_id: <slug>                    # e.g. hormozi, schwartz, cialdini
expert_name: <Full Name>
domain: <Domain string from JSON>
domain_slug: <folder name>         # e.g. offer-engineering
active_period: <string>
core_thesis: <one paragraph>
key_questions:                     # questions an expert asks when evaluating
  - "..."
operating_beliefs:                 # principles the expert holds
  - "..."
biases:                            # where the expert systematically over/under-weights
  - "..."
limitations:                       # contexts where this lens does not apply
  - "..."
frameworks:                        # list of named decision-making systems
  - name: <framework name>
    source: <citation>
    purpose: <one sentence>
    decision_rules:
      - "IF X THEN Y"
---

# <Expert Name> — <Domain>

<Core thesis as prose intro>

## Frameworks

### <Framework Name>
**Source**: ...
**Purpose**: ...

<Mechanics description>

#### Components
- **<Component>** — definition. Key questions: ...

#### Decision rules
- IF ... THEN ...

## Vocabulary
<term-by-term, when present in source JSON>
```

## Loader contract (Phase 1)

A skill that wants a lens declares it in its own SKILL.md frontmatter:

```yaml
---
name: headline-mastery
lenses:
  - hormozi
  - schwartz
---
```

At skill invocation time:

1. Skill reads its own `lenses:` frontmatter.
2. For each `lens_id`, resolve path via `os/lenses/registry.md`.
3. Read the lens MD. From the frontmatter, extract:
   - `expert.key_questions` — used as a self-check pass before finalizing output
   - `expert.biases` — disclosed in output footer
   - First framework's `decision_rules` — applied to candidate outputs
4. Generate output as the skill normally would, but biased by the lens reasoning.
5. Append a footer: `Lenses applied: [hormozi, schwartz]`. This is a **bias-disclosure rule** (see governance below).

Phase 3 replaces this file-read pattern with `sdk-app/src/core/lenses/resolver.ts`.

## Governance

- **One lens, one file.** Cialdini lives once at `trust-ethics/cialdini.md` even though multiple skills reference it.
- **Registry is the join table.** `os/lenses/registry.md` maps `lens_id → [skills_using, agents_using]`. Always update the registry when adding/removing a lens consumer.
- **Bias disclosure is mandatory.** Every lens-touched output declares which lenses biased it. Per Phase 3, this becomes a rule in `os/governance/agentic-constitution.md`.
- **Limitations are first-class.** A lens's `limitations` array tells the reasoner when *not* to apply it. Skills SHOULD check limitations before activating the lens (e.g., Hormozi's "regulated markets" limitation should suppress aggressive guarantee language for a healthcare client).

## How to add a new lens

1. Pick a JSON profile from `Context Profiles Collection`.
2. Run `node scripts/convert-lens.mjs <source.json> os/lenses/<domain-slug>/<lastname>.md`.
3. Verify YAML frontmatter is valid and frameworks rendered cleanly.
4. Add a row to `os/lenses/registry.md` under the appropriate domain.
5. (Optional) Wire `lenses: [<lens_id>]` into the SKILL.md of any skill that should use it.
6. Run an A/B test (with vs without lens) on a representative input before declaring the integration done.

## How to add a new lens consumer

1. Identify which lens(es) match the skill's reasoning need.
2. Add `lenses:` array to the skill's SKILL.md frontmatter.
3. Add a "## Lens Activation" section that describes how the skill applies the lens (which `key_questions` it self-checks, which `decision_rules` it enforces, which `biases` it discloses).
4. Update `os/lenses/registry.md` `skills_using` column.
5. A/B test before merging.

## Phase status

- ✅ Phase 0: triage of `docs/Agents/` complete (`docs/Agents/TRIAGE.md`)
- 🔄 Phase 1: scaffolding + Hormozi/Schwartz + headline-mastery MVP
- ⏳ Phase 2: 10 more lenses + 4 more skills + 3 promoted agents
- ⏳ Phase 3: SDK resolver + auto-select + GCO persistence + agent format unification
