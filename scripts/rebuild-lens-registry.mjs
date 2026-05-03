#!/usr/bin/env node
// Rebuild os/lenses/registry.md from the actual converted lens files.
// Preserves skill/agent bindings and ad-hoc diagnostic-run history.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = "os/lenses";
const REGISTRY_PATH = `${ROOT}/registry.md`;

const DOMAIN_TITLES = {
  "offer-engineering": "Offer Engineering & Value Architecture",
  "persuasion": "Persuasion, Copy & Influence",
  "positioning": "Strategic Positioning & Branding",
  "ux-research": "UX Research & Information Clarity",
  "thinking-models": "Thinking Models & Epistemology",
  "product-design": "Product Design & Audience Calibration",
  "seo-search": "SEO & Search Discovery",
  "trust-ethics": "Trust & Ethics",
  "strategy-innovation": "Strategy & Innovation",
  "data-viz": "Data Visualization & Information Design",
  "forecasting": "Forecasting & Decision-Making",
  "business-model": "Business Model & SaaS Economics",
  "quality": "Software Quality & Operational Discipline",
  "ai-future": "AI Architecture & Agents",
  "visual-design": "Visual & Interaction Design",
};

const DOMAIN_ORDER = Object.keys(DOMAIN_TITLES);

// Skill/agent bindings — manually maintained (extracted from current marketplace state)
const SKILL_BINDINGS = {
  hormozi: ["copywriting-engine/headline-mastery"],
  schwartz: ["copywriting-engine/headline-mastery"],
};
const AGENT_BINDINGS = {};

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  const lines = m[1].split("\n");
  for (const line of lines) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) {
      fm[kv[1]] = kv[2].replace(/^['"](.*)['"]$/, "$1").trim();
    }
  }
  return fm;
}

function collectLenses() {
  const out = {};
  for (const dom of DOMAIN_ORDER) out[dom] = [];

  for (const dom of DOMAIN_ORDER) {
    const dir = join(ROOT, dom);
    let files;
    try {
      files = readdirSync(dir).filter(f => f.endsWith(".md") && f !== "README.md");
    } catch {
      continue;
    }
    for (const f of files) {
      const path = join(dir, f);
      const text = readFileSync(path, "utf8");
      const fm = parseFrontmatter(text);
      if (!fm) continue;
      out[dom].push({
        lens_id: fm.lens_id || f.replace(/\.md$/, ""),
        expert: fm.expert_name || "",
        domain_full: fm.domain || "",
        domain_slug_field: fm.domain_slug || dom,
        path,
        skills: SKILL_BINDINGS[fm.lens_id] || [],
        agents: AGENT_BINDINGS[fm.lens_id] || [],
      });
    }
    out[dom].sort((a, b) => a.lens_id.localeCompare(b.lens_id));
  }
  return out;
}

function renderTable(rows) {
  if (!rows.length) return "_No lenses converted in this domain yet._\n";
  const header = "| lens_id | expert | domain (JSON) | path | skills_using | agents_using | status |";
  const sep = "|---|---|---|---|---|---|---|";
  const lines = [header, sep];
  for (const r of rows) {
    const skills = r.skills.length ? r.skills.join(", ") : "—";
    const agents = r.agents.length ? r.agents.join(", ") : "—";
    const status = r.skills.length || r.agents.length ? "active" : "draft";
    const slugNote = r.domain_slug_field !== r.path.split("/")[2]
      ? ` *(slug: ${r.domain_slug_field})*` : "";
    lines.push(`| ${r.lens_id} | ${r.expert}${slugNote} | ${r.domain_full} | \`${r.path}\` | ${skills} | ${agents} | ${status} |`);
  }
  return lines.join("\n") + "\n";
}

function renderReverseLookup(domains) {
  const skillToLenses = {};
  for (const dom of DOMAIN_ORDER) {
    for (const r of domains[dom]) {
      for (const s of r.skills) {
        if (!skillToLenses[s]) skillToLenses[s] = [];
        skillToLenses[s].push(r.lens_id);
      }
    }
  }
  if (Object.keys(skillToLenses).length === 0) return "_No skill consumers wired yet._\n";
  const lines = ["| Skill | Lenses applied |", "|---|---|"];
  for (const [skill, lenses] of Object.entries(skillToLenses).sort()) {
    lines.push(`| \`${skill}\` | ${lenses.join(", ")} |`);
  }
  return lines.join("\n") + "\n";
}

function build() {
  const domains = collectLenses();
  const totalLenses = DOMAIN_ORDER.reduce((sum, d) => sum + domains[d].length, 0);

  let md = "# Expert Lens Registry\n\n";
  md += "> Authoritative join table: which lens lives where, which skills/agents use it.\n";
  md += "> One row per lens. Rebuilt from actuals via `node scripts/rebuild-lens-registry.mjs`.\n\n";
  md += `**Status**: ${totalLenses} lenses converted across ${DOMAIN_ORDER.filter(d => domains[d].length > 0).length}/15 domains.\n\n`;

  md += "## How to read this\n\n";
  md += "- **lens_id** — the slug used in `lenses:` frontmatter declarations\n";
  md += "- **expert** — full name from the source JSON\n";
  md += "- **domain (JSON)** — the original `expert.domain` string from the JSON source\n";
  md += "- **path** — relative to repo root\n";
  md += "- **skills_using** — every SKILL.md that declares this lens\n";
  md += "- **agents_using** — every agent .md that declares this lens\n";
  md += "- **status** — `active` (consumed by ≥1 skill/agent) or `draft` (converted but not yet wired)\n";
  md += "- **slug note** — appears when the YAML `domain_slug` field differs from the file's parent folder (intentional override)\n\n";

  for (const dom of DOMAIN_ORDER) {
    md += `## ${DOMAIN_TITLES[dom]}\n\n`;
    md += renderTable(domains[dom]);
    md += "\n";
  }

  md += "---\n\n";
  md += "## Skill → Lens index (reverse lookup)\n\n";
  md += renderReverseLookup(domains);
  md += "\n";

  md += "## Ad-hoc diagnostic runs (lens-as-tool, not lens-as-skill-input)\n\n";
  md += "Lenses can be invoked directly on any artifact for diagnostic purposes via the `tools/lens-loader.md` protocol — either standalone or through `tools/business-panel/` which orchestrates multi-lens 3-round panels.\n\n";
  md += "| Date | Artifact | Lenses applied | Output | Notes |\n";
  md += "|---|---|---|---|---|\n";
  md += "| 2026-05-02 | `clients/ai-huevos/positioning-master.md` v1.0 | dunford, hormozi, schwartz, christensen | `clients/ai-huevos/diagnostics/positioning-multilens-2026-05-02.md` | MVP validation (Round 1 only). 4 parallel agents. 8 convergent findings + 3 cross-lens conflicts surfaced. |\n";
  md += "| 2026-05-02 | `clients/ai-huevos/positioning-master.md` v1.0 → v1.1 polish | dunford, hormozi, schwartz, christensen | `clients/ai-huevos/diagnostics/business-panel-2026-05-02.md` | First `tools/business-panel/` production run. Stage: `positioning`. 3-round protocol. 7 consensus, 2 dissents, 2 groupthink-checks, 5 fresh findings. Verdict: Candidate C (\"Reality-based OS\"). Successor: `clients/ai-huevos/positioning-master-v1.1-draft.md`. |\n";
  md += "\n";

  md += "---\n\n";
  md += "*Rebuilt: " + new Date().toISOString().slice(0, 10) + " via `scripts/rebuild-lens-registry.mjs`. To update skill/agent bindings, edit `SKILL_BINDINGS` / `AGENT_BINDINGS` in the rebuild script and re-run.*\n";

  writeFileSync(REGISTRY_PATH, md);
  console.log(`✓ Wrote ${REGISTRY_PATH} — ${totalLenses} lenses across ${DOMAIN_ORDER.filter(d => domains[d].length > 0).length}/15 domains`);
}

build();
