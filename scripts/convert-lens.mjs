#!/usr/bin/env node
// Convert a Context Profile JSON file into an MD lens file with YAML frontmatter.
//
// Usage:
//   node scripts/convert-lens.mjs <source.json> <target.md>
//
// Example:
//   node scripts/convert-lens.mjs \
//     '/Users/naboo/Downloads/AIHUEVOS_BRANDBOOK/Context Profiles Collection/1-hormozi.json' \
//     os/lenses/offer-engineering/hormozi.md
//
// Idempotent: overwrites target. Lossless: every JSON field lands somewhere
// (frontmatter for queryable metadata, body for prose-rendered frameworks).

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, basename } from "node:path";

function slugFromFilename(jsonPath) {
  return basename(jsonPath, ".json").replace(/^\d+-/, "");
}

function domainSlug(domainString = "") {
  const lower = domainString.toLowerCase();
  if (lower.includes("offer")) return "offer-engineering";
  if (lower.includes("persuasion") || lower.includes("conversion")) return "persuasion";
  if (lower.includes("positioning") || lower.includes("brand")) return "positioning";
  if (lower.includes("research") || lower.includes("usability")) return "ux-research";
  if (lower.includes("thinking") || lower.includes("epistem")) return "thinking-models";
  if (lower.includes("product design")) return "product-design";
  if (lower.includes("sales") || lower.includes("influence")) return "sales-influence";
  if (lower.includes("trust") || lower.includes("ethics")) return "trust-ethics";
  if (lower.includes("strategy") || lower.includes("innovation")) return "strategy-innovation";
  if (lower.includes("data") || lower.includes("information design")) return "data-viz";
  if (lower.includes("forecast") || lower.includes("decision")) return "forecasting";
  if (lower.includes("systems") || lower.includes("operations")) return "systems-ops";
  if (lower.includes("quality") || lower.includes("measurement")) return "quality";
  if (lower.includes("ai") || lower.includes("future")) return "ai-future";
  if (lower.includes("visual") || lower.includes("interaction design")) return "visual-design";
  return "uncategorized";
}

function escapeYamlString(str) {
  if (typeof str !== "string") return JSON.stringify(str);
  // Use single-quoted YAML; double internal single quotes.
  return `'${str.replace(/'/g, "''")}'`;
}

function yamlList(items, indent = "  ") {
  if (!Array.isArray(items) || items.length === 0) return " []";
  return "\n" + items.map((s) => `${indent}- ${escapeYamlString(s)}`).join("\n");
}

function buildFrontmatter(source, lensId, domSlug) {
  const e = source.expert || {};
  const frameworks = source.frameworks || [];
  const fmFrameworks = frameworks
    .map((f) => {
      const rules = (f.decision_rules || [])
        .map((r) => `      - ${escapeYamlString(r)}`)
        .join("\n");
      return [
        `  - name: ${escapeYamlString(f.name || "")}`,
        `    source: ${escapeYamlString(f.source || "")}`,
        `    purpose: ${escapeYamlString(f.purpose || "")}`,
        rules
          ? `    decision_rules:\n${rules}`
          : `    decision_rules: []`,
      ].join("\n");
    })
    .join("\n");

  return [
    "---",
    `lens_id: ${lensId}`,
    `expert_name: ${escapeYamlString(e.name || "")}`,
    `domain: ${escapeYamlString(e.domain || "")}`,
    `domain_slug: ${domSlug}`,
    `active_period: ${escapeYamlString(e.active_period || "")}`,
    `core_thesis: ${escapeYamlString(e.core_thesis || "")}`,
    `key_questions:${yamlList(e.key_questions)}`,
    `operating_beliefs:${yamlList(e.operating_beliefs)}`,
    `biases:${yamlList(e.biases)}`,
    `limitations:${yamlList(e.limitations)}`,
    `frameworks:`,
    fmFrameworks,
    "---",
    "",
  ].join("\n");
}

function renderComponent(c) {
  const lines = [];
  lines.push(`- **${c.name}** — ${c.definition || ""}`);
  if (Array.isArray(c.key_questions) && c.key_questions.length) {
    lines.push(`  - Key questions:`);
    for (const q of c.key_questions) lines.push(`    - ${q}`);
  }
  if (c.red_flags) lines.push(`  - Red flags: ${c.red_flags}`);
  return lines.join("\n");
}

function renderFramework(f) {
  const out = [];
  out.push(`### ${f.name}`);
  if (f.source) out.push(`**Source**: ${f.source}\n`);
  if (f.purpose) out.push(`**Purpose**: ${f.purpose}\n`);
  if (f.mechanics?.description) out.push(`${f.mechanics.description}\n`);
  if (Array.isArray(f.mechanics?.components) && f.mechanics.components.length) {
    out.push(`#### Components`);
    out.push(f.mechanics.components.map(renderComponent).join("\n"));
    out.push("");
  }
  if (Array.isArray(f.decision_rules) && f.decision_rules.length) {
    out.push(`#### Decision rules`);
    out.push(f.decision_rules.map((r) => `- ${r}`).join("\n"));
    out.push("");
  }
  if (f.vocabulary && typeof f.vocabulary === "object") {
    out.push(`#### Vocabulary`);
    for (const [term, def] of Object.entries(f.vocabulary)) {
      out.push(`- **${term}**: ${typeof def === "string" ? def : JSON.stringify(def)}`);
    }
    out.push("");
  }
  return out.join("\n");
}

function buildBody(source) {
  const e = source.expert || {};
  const frameworks = source.frameworks || [];
  const out = [];
  out.push(`# ${e.name || "Unknown Expert"} — ${e.domain || ""}`);
  out.push("");
  if (e.core_thesis) {
    out.push(`> ${e.core_thesis}`);
    out.push("");
  }
  if (e.active_period) {
    out.push(`*Active period*: ${e.active_period}`);
    out.push("");
  }
  if (Array.isArray(e.operating_beliefs) && e.operating_beliefs.length) {
    out.push(`## Operating beliefs`);
    out.push(e.operating_beliefs.map((b) => `- ${b}`).join("\n"));
    out.push("");
  }
  if (Array.isArray(e.key_questions) && e.key_questions.length) {
    out.push(`## Key questions (use as self-check before finalizing output)`);
    out.push(e.key_questions.map((q) => `- ${q}`).join("\n"));
    out.push("");
  }
  if (Array.isArray(e.biases) && e.biases.length) {
    out.push(`## Biases (disclose in output footer)`);
    out.push(e.biases.map((b) => `- ${b}`).join("\n"));
    out.push("");
  }
  if (Array.isArray(e.limitations) && e.limitations.length) {
    out.push(`## Limitations (suppress lens application in these contexts)`);
    out.push(e.limitations.map((l) => `- ${l}`).join("\n"));
    out.push("");
  }
  if (frameworks.length) {
    out.push(`## Frameworks`);
    out.push("");
    out.push(frameworks.map(renderFramework).join("\n"));
  }
  return out.join("\n");
}

function main() {
  const [, , src, dst] = process.argv;
  if (!src || !dst) {
    console.error("Usage: node scripts/convert-lens.mjs <source.json> <target.md>");
    process.exit(2);
  }
  const json = JSON.parse(readFileSync(src, "utf8"));
  const lensId = slugFromFilename(src);
  const domSlug = domainSlug(json?.expert?.domain || "");
  const md = buildFrontmatter(json, lensId, domSlug) + buildBody(json) + "\n";
  mkdirSync(dirname(dst), { recursive: true });
  writeFileSync(dst, md, "utf8");
  console.log(`✓ wrote ${dst}  (lens_id=${lensId}, domain=${domSlug})`);
}

main();
