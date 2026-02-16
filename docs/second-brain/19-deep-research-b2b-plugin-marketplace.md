# Deep Research: B2B Growth Marketplace as Claude Code Plugin Ecosystem

**Date**: 2026-02-13
**Status**: Complete
**Confidence Level**: High (85-95%) - Based on official documentation and current market data

---

## Table of Contents

1. [Claude Code Plugin Architecture](#1-claude-code-plugin-architecture)
2. [What Exists in the Wild](#2-what-exists-in-the-wild)
3. [Plugin Marketplace Success Patterns](#3-plugin-marketplace-success-patterns)
4. [B2B Companies Using Claude/AI for Growth](#4-b2b-companies-using-claudeai-for-growth)
5. [Framework-to-Plugin Transformation](#5-framework-to-plugin-transformation)
6. [Strategic Recommendations](#6-strategic-recommendations)

---

## 1. Claude Code Plugin Architecture

### 1.1 What Plugins Contain

A Claude Code plugin is a shareable package that bundles up to **six component types** into a single installable unit:

| Component | Purpose | Location | Format |
|-----------|---------|----------|--------|
| **Skills** | Extend Claude's capabilities; model-invoked automatically or via `/name` | `skills/<name>/SKILL.md` | Markdown with YAML frontmatter |
| **Commands** | Legacy slash commands (now merged into skills) | `commands/*.md` | Markdown files |
| **Agents** | Specialized subagents for delegation | `agents/*.md` | Markdown with YAML frontmatter |
| **Hooks** | Event handlers that fire on system events | `hooks/hooks.json` | JSON configuration |
| **MCP Servers** | Connect to external tools/APIs/databases | `.mcp.json` | Standard MCP config |
| **LSP Servers** | Language intelligence (go-to-def, find refs) | `.lsp.json` | JSON configuration |

### 1.2 Directory Structure (Official Spec)

```
plugin-name/
├── .claude-plugin/           # Metadata directory (only plugin.json goes here)
│   └── plugin.json           # Required manifest file
├── skills/                   # Agent Skills (primary mechanism)
│   ├── skill-one/
│   │   ├── SKILL.md          # Required: main instructions
│   │   ├── reference.md      # Optional: loaded on-demand
│   │   ├── examples.md       # Optional: loaded on-demand
│   │   └── scripts/          # Optional: executable utilities
│   │       └── helper.py
│   └── skill-two/
│       └── SKILL.md
├── commands/                 # Slash commands (legacy, still supported)
│   └── review.md
├── agents/                   # Subagent definitions
│   ├── security-reviewer.md
│   └── compliance-checker.md
├── hooks/                    # Event handlers
│   └── hooks.json
├── .mcp.json                 # MCP server definitions
├── .lsp.json                 # LSP server configurations
├── scripts/                  # Shared utility scripts
│   └── format-code.sh
├── LICENSE
├── README.md
└── CHANGELOG.md
```

**Critical rule**: Only `plugin.json` goes inside `.claude-plugin/`. All other directories MUST be at the plugin root.

### 1.3 plugin.json Manifest (Complete Schema)

```json
{
  "name": "plugin-name",           // Required: kebab-case, unique, no spaces
  "version": "1.2.0",              // Semantic versioning (MAJOR.MINOR.PATCH)
  "description": "Brief purpose",  // Shown in plugin manager
  "author": {
    "name": "Author Name",
    "email": "author@example.com",
    "url": "https://github.com/author"
  },
  "homepage": "https://docs.example.com/plugin",
  "repository": "https://github.com/author/plugin",
  "license": "MIT",
  "keywords": ["keyword1", "keyword2"],  // Discovery tags
  "commands": ["./custom/commands/"],     // Custom paths (supplement defaults)
  "agents": "./custom/agents/",
  "skills": "./custom/skills/",
  "hooks": "./config/hooks.json",
  "mcpServers": "./mcp-config.json",
  "outputStyles": "./styles/",
  "lspServers": "./.lsp.json"
}
```

- The manifest is optional. If omitted, Claude Code auto-discovers components in default locations.
- All paths must be relative and start with `./`.
- Custom paths **supplement** default directories; they do not replace them.

### 1.4 SKILL.md Specification (Complete)

```yaml
---
name: my-skill                     # Optional: lowercase, hyphens, max 64 chars
description: What and when         # Recommended: max 1024 chars, third person
argument-hint: "[issue-number]"    # Optional: autocomplete hint
disable-model-invocation: true     # Optional: manual-only invocation
user-invocable: false              # Optional: hide from / menu
allowed-tools: Read, Grep, Glob   # Optional: tool restrictions
model: claude-sonnet-4-5-20250514 # Optional: model override
context: fork                      # Optional: run in isolated subagent
agent: Explore                     # Optional: which subagent type (if context: fork)
hooks: {...}                       # Optional: skill-scoped lifecycle hooks
---

Your skill instructions in Markdown...

Use $ARGUMENTS for user input.
Use $ARGUMENTS[0], $ARGUMENTS[1] or $0, $1 for positional args.
Use ${CLAUDE_SESSION_ID} for session tracking.
Use !`shell-command` for dynamic context injection (preprocessed).
```

**Progressive Disclosure Architecture**:
- At session start: only name + description loaded (~100 tokens per skill)
- When triggered: SKILL.md content loaded
- On-demand: referenced files loaded only when Claude needs them
- Scripts: executed without loading source into context
- **No context penalty** for large bundled reference files until accessed

**Size guidelines**:
- SKILL.md body: under 500 lines
- Description budget: 15K chars total across all skills
- Dynamic budget: 2% of context window (fallback: 16,000 chars)
- Override via `SLASH_COMMAND_TOOL_CHAR_BUDGET` env var

### 1.5 Hooks System

Available hook events:

| Event | When It Fires |
|-------|---------------|
| `PreToolUse` | Before Claude uses any tool |
| `PostToolUse` | After successful tool use |
| `PostToolUseFailure` | After tool execution fails |
| `PermissionRequest` | When permission dialog shows |
| `UserPromptSubmit` | When user submits prompt |
| `Notification` | When Claude sends notifications |
| `Stop` | When Claude attempts to stop |
| `SubagentStart` | When a subagent starts |
| `SubagentStop` | When a subagent stops |
| `SessionStart` | At session beginning |
| `SessionEnd` | At session end |
| `TeammateIdle` | When a teammate is about to go idle |
| `TaskCompleted` | When a task is marked complete |
| `PreCompact` | Before conversation compaction |

Hook types: `command` (shell), `prompt` (LLM evaluation), `agent` (agentic verifier with tools).

### 1.6 Plugin Installation & Marketplace

**Installation commands**:
```bash
# From marketplace
claude plugin install <plugin-name>@<marketplace-name>
claude plugin install formatter@my-marketplace --scope project

# Local development
claude --plugin-dir ./my-plugin

# Management
claude plugin uninstall <plugin>
claude plugin enable <plugin>
claude plugin disable <plugin>
claude plugin update <plugin>
claude plugin validate .
```

**Installation scopes**:

| Scope | Settings File | Use Case |
|-------|--------------|----------|
| `user` | `~/.claude/settings.json` | Personal, all projects (default) |
| `project` | `.claude/settings.json` | Team, via version control |
| `local` | `.claude/settings.local.json` | Project-specific, gitignored |
| `managed` | `managed-settings.json` | Org-managed (read-only) |

**Marketplace creation**: Any Git repo with `.claude-plugin/marketplace.json`:

```json
{
  "name": "company-tools",
  "owner": { "name": "Team", "email": "team@co.com" },
  "plugins": [
    {
      "name": "my-plugin",
      "source": "./plugins/my-plugin",
      "description": "Description",
      "version": "1.0.0"
    }
  ]
}
```

**Plugin sources supported**: relative paths, GitHub repos, Git URLs (GitLab/Bitbucket), npm, pip.

**Marketplace distribution**:
```bash
# Users add your marketplace
/plugin marketplace add owner/repo           # GitHub
/plugin marketplace add https://gitlab.com/team/plugins.git  # Git URL
/plugin marketplace add ./local-marketplace  # Local path

# Then install plugins from it
/plugin install my-plugin@company-tools
```

**Team configuration** (auto-prompt on folder trust):
```json
// .claude/settings.json
{
  "extraKnownMarketplaces": {
    "company-tools": {
      "source": { "source": "github", "repo": "your-org/claude-plugins" }
    }
  },
  "enabledPlugins": {
    "code-formatter@company-tools": true
  }
}
```

### 1.7 Technical Limits

| Constraint | Limit |
|-----------|-------|
| MCP output warning | 10,000 tokens |
| MCP output max | 25,000 tokens (configurable via `MAX_MCP_OUTPUT_TOKENS`) |
| Context window | 200K tokens (Sonnet 4.5) |
| MCP tools context usage | Can consume 66K+ tokens before conversation starts |
| Skill description budget | 2% of context window (~15K chars) |
| SKILL.md body | Recommended under 500 lines |
| Plugin name | Kebab-case, no spaces, unique across installed plugins |
| Skill name | Max 64 chars, lowercase letters/numbers/hyphens |
| Skill description | Max 1024 chars |
| File upload | 30MB (UI), 500MB (API) |
| Plugin caching | Copied to cache dir; cannot reference files outside plugin root |

### 1.8 Plugin Interaction & Composability

**Current state**: Plugins are completely independent units. No dependency system exists yet.

- There is an open feature request (Issue #9444) for plugin dependencies and shared resources.
- Each plugin that needs shared utilities must duplicate them.
- Multiple plugins' MCP servers work together seamlessly.
- Skills are composable: Claude can load multiple skills in one session.
- Namespacing prevents conflicts (`/plugin-name:skill-name`).

**Environment variable**: `${CLAUDE_PLUGIN_ROOT}` resolves to the plugin's absolute install path, enabling portable paths in hooks and MCP configs.

---

## 2. What Exists in the Wild

### 2.1 Community Plugin Marketplaces

| Marketplace | Description | Install Command |
|------------|-------------|----------------|
| **anthropics/claude-plugins-official** | Anthropic-curated, high-quality plugins | Pre-configured |
| **anthropics/claude-code** | Bundled plugins shipped with Claude Code | Pre-configured |
| **ananddtyagi/claude-code-marketplace** | Community commands marketplace | `/plugin marketplace add ananddtyagi/claude-code-marketplace` |
| **jmanhype/claude-code-plugins** | 19 production-grade plugins (trading, swarm, GitHub) | `/plugin marketplace add jmanhype/claude-code-plugins` |
| **claudemarketplaces.com** | Web directory of plugins and marketplaces | Web browsing |
| **claudecodemarketplace.com** | Another web directory | Web browsing |
| **ComposioHQ/awesome-claude-plugins** | Curated list | GitHub reference |

**Key observation**: The ecosystem is already fragmenting into multiple competing directories. No single dominant third-party marketplace has emerged yet, creating a window of opportunity.

### 2.2 B2B AI Agent Platforms (Competitors & Inspiration)

#### Data & Enrichment Layer
| Platform | Focus | Key Differentiator |
|----------|-------|-------------------|
| **Clay** | AI-powered GTM, data enrichment | $500M valuation, workflow automation, 80+ data providers |
| **Apollo.io** | Sales intelligence + engagement | 275M+ contacts, AI SDR assistant (late 2025) |
| **ZoomInfo** | B2B database + intent signals | 500M+ contacts, firmographic + technographic data |
| **Clearbit** (HubSpot) | Data enrichment | Embedded in HubSpot ecosystem |

#### AI-Native Sales Platforms
| Platform | Focus | Key Differentiator |
|----------|-------|-------------------|
| **Salesforce Agentforce** | Enterprise CRM + AI agents | Agentic AI push (2024-2025), Einstein Conversation Insights |
| **HubSpot AI** | Inbound marketing + CRM | Breeze AI agents, content generation |
| **Gong** | Revenue intelligence | Conversation analytics, deal forecasting |
| **6sense** | ABM + intent data | AI agents for marketing automation |
| **Salesloft** | Sales engagement | AI workflow agents |
| **Empler** | AI Agent Teams for GTM | Multi-step autonomous task execution |
| **Tapistro** | AI-powered lead gen | Clay alternative |

#### Consulting/Methodology-Adjacent
| Platform | Focus | Key Differentiator |
|----------|-------|-------------------|
| **SAP Joule for Consultants** | Consulting methodology AI | 9TB knowledge base, 3M non-public docs |
| **McKinsey Lilli** | Internal consulting AI | Century of firm knowledge, saves 30% time |
| **BCG Deckster/GENE** | Content creation + brainstorming | Consulting process automation |

### 2.3 What Is Missing

1. **No B2B growth-specific Claude Code plugin marketplace exists**. Current marketplaces are developer-tool focused (linting, testing, deployment).
2. **No "methodology-as-code" products** exist as Claude plugins. The concept of encoding a sales playbook or consulting framework into an installable skill package is novel.
3. **No bridge between B2B SaaS tools and Claude Code**. Clay, Apollo, HubSpot data is not accessible via Claude Code plugins.
4. **LATAM-specific B2B growth tooling is virtually nonexistent** in the plugin ecosystem.

---

## 3. Plugin Marketplace Success Patterns

### 3.1 Lessons from Successful Marketplaces

#### VS Code Extensions
- 50,000+ extensions, 30M+ active users
- Developers earned $25M+ selling extensions in 2024
- Paid extensions introduced in 2023, only 15% are paid
- Average price: $4.99 individual, $12.99 packs
- Sponsor links as alternative monetization
- Private marketplace feature launched Nov 2025

#### Shopify App Store
- 16,000+ apps, $1B in developer payouts (2024)
- **0% commission** for developers under $1M annual revenue (down from 20%)
- 80%+ of merchants use third-party apps
- Winner-takes-most: top 0.18% earn $1M+, 54.53% make <$1K/month
- Median developer: $8,700/year
- Key performance stat: each app adds ~1.2 seconds load time, 400KB JS

#### Bubble.io Marketplace
- Grew 40% in 14 months (5K to 7K+ plugins)
- One company controls 60% of marketplace revenue
- "Featured plugins" section needed to surface quality amid volume

### 3.2 Critical Success Factors

**Discoverability**:
- Category tagging + keyword filters + use-case groupings
- Algorithms weighing: keyword optimization, engagement metrics, ratings (4.5+ rank higher)
- "Featured" curation to prevent quality content from being buried

**Adoption Drivers**:
- Time-to-value: install in <30 seconds, see results immediately
- Quality signals: ratings, reviews, install counts, verified badges
- Documentation quality directly correlates with adoption
- Community reputation: 3-6 months of forum participation before launch builds trust

**Stickiness Factors**:
- Workflow integration (becomes part of daily process)
- Data lock-in (stored configurations, historical data)
- Network effects (team adoption, shared workflows)
- Cohort retention monitoring to identify churn patterns

**Revenue Models for Plugin Marketplaces**:
| Model | Best For | Examples |
|-------|----------|---------|
| Freemium | Broad adoption, upsell to premium | Most VS Code extensions |
| Per-seat/subscription | Team/enterprise plugins | Shopify premium apps |
| Usage-based | API-heavy plugins, data access | Clay credits, Apollo credits |
| Enterprise licensing | Custom deployments, SLA guarantees | Salesforce AppExchange |
| Commission/rev-share | Marketplace operator revenue | Shopify (0-20%), Apple (15-30%) |
| Sponsorship/tips | Open-source plugins | VS Code sponsor links |

### 3.3 Distribution for B2B

How B2B companies discover plugin marketplaces:
1. **Embedded in workflow**: marketplace accessible from within the tool itself
2. **Content marketing**: SEO-optimized tutorials, use-case articles
3. **Community channels**: Slack communities, Discord servers, forums
4. **Partner programs**: system integrators, consultants recommending plugins
5. **Enterprise sales**: direct outreach to team leads/engineering managers
6. **Conference/event presence**: demos at industry events

---

## 4. B2B Companies Using Claude/AI for Growth

### 4.1 Documented Claude Usage

- **Advolve** (Brazil): Uses Claude as central orchestrator for AI-powered digital customer acquisition. Managing $100M+ ad budgets. Clients include iFood, Cogna. Key model: Service-as-a-Software.
- **ClaudeKit Marketing**: 32 AI agents, 68 skills, 119 commands, 8 MCP integrations for marketing automation on Claude Code.
- **Digital marketing agencies**: Using Claude Code subagents to automate content audits, keyword research, campaign analysis. 8-hour workflows reduced to 2 hours.

### 4.2 Pain Points AI Agents Solve in B2B Growth

| Pain Point | Current State | AI Agent Solution |
|-----------|--------------|-------------------|
| MQL-to-SQL conversion | Low conversion rates, manual qualification | Dynamic lead scoring based on real-time signals |
| Sales-marketing alignment | Siloed data, different systems | Shared AI-enhanced data, unified engagement history |
| Personalization at scale | Token insertion, generic messaging | Narrative-level personalization per account |
| Outreach quality | Static playbooks, high volume/low quality | AI SDRs trained on sales playbooks, contextual messaging |
| Meeting preparation | Manual research, 30+ min per meeting | AI prep in minutes, 33% faster, 10% higher win rates |
| Pipeline forecasting | Spreadsheet-based, gut feeling | AI-powered deal scoring, conversation analytics |
| Content creation | Slow, expensive, inconsistent | AI-generated, brand-consistent, personalized |
| Data enrichment | Manual lookup, outdated info | Real-time enrichment from 80+ data sources |

### 4.3 What Is Missing in Current Tooling

1. **Methodology execution**: No tool turns a consulting framework into an automated workflow
2. **Cross-tool orchestration**: No way to chain Clay enrichment -> HubSpot sequences -> Gong insights in one agent
3. **LATAM localization**: B2B tools built for US market; LATAM needs WhatsApp-first, Portuguese/Spanish, local data
4. **Small team enablement**: Enterprise tools are expensive; SMBs need affordable AI-powered GTM
5. **Knowledge capture**: Tribal knowledge dies when people leave; no tool captures and operationalizes it

### 4.4 LATAM AI Adoption Landscape

**Market size**: $5.79B (2025) projected to $34.62B (2034), CAGR 22.0%

**Key facts**:
- Third-largest market worldwide for generative AI app downloads
- Brazil is LATAM's AI leader
- 55% of decision-makers planning to increase AI investment
- 43% report tangible benefits, 47% anticipate major impact
- **Barriers**: 34% lack clarity on integration, 26% shortage of qualified professionals

**High-opportunity use cases in LATAM**:
- WhatsApp-first customer support automation
- Logistics routing and optimization
- Fraud detection and KYC
- Dynamic pricing
- CRM automation
- Collections automation

**Strategic insight**: The discussion has shifted from "if we'll use AI" to "how to operationalize, govern, and monetize AI." AI-native startups grow faster across all revenue bands. The biggest shift is productivity multipliers that expand what each employee can accomplish.

---

## 5. Framework-to-Plugin Transformation

### 5.1 The Agent Skills Standard

Agent Skills was published as an **open standard** on December 18, 2025, for cross-platform portability. It is a "composable, portable, on-demand procedural knowledge encapsulation mechanism."

**Core concept**: Transform organizational SOPs, review checklists, writing standards, and operational workflows into reusable "training manuals + toolboxes" that AI agents consume on-demand.

### 5.2 Converting a 45K-Word Sales Playbook into Skills

#### Architecture Pattern: Progressive Disclosure Library

```
b2b-growth-playbook/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── icp-analysis/              # Ideal Customer Profile
│   │   ├── SKILL.md               # Overview + navigation (< 500 lines)
│   │   ├── frameworks/
│   │   │   ├── scoring-model.md   # ICP scoring methodology
│   │   │   └── segments.md        # Segment definitions
│   │   └── templates/
│   │       └── icp-worksheet.md   # Template for Claude to fill
│   │
│   ├── outreach-sequences/        # Email/message sequences
│   │   ├── SKILL.md               # Sequence strategy overview
│   │   ├── cold-email/
│   │   │   ├── templates.md       # Email templates by persona
│   │   │   └── examples.md        # Real examples with results
│   │   ├── linkedin/
│   │   │   └── templates.md
│   │   └── whatsapp/
│   │       └── templates.md       # LATAM-specific
│   │
│   ├── discovery-call/            # Discovery methodology
│   │   ├── SKILL.md               # Call framework
│   │   ├── questions.md           # Question bank by vertical
│   │   ├── objections.md          # Objection handling playbook
│   │   └── scripts/
│   │       └── call-prep.py       # Auto-generate call prep doc
│   │
│   ├── proposal-generation/       # Proposal creation
│   │   ├── SKILL.md
│   │   ├── templates/
│   │   │   ├── enterprise.md
│   │   │   └── mid-market.md
│   │   └── pricing/
│   │       └── models.md
│   │
│   └── pipeline-review/           # Pipeline analysis
│       ├── SKILL.md
│       ├── scoring-criteria.md
│       └── scripts/
│           └── pipeline-health.py
│
├── agents/
│   ├── sdr-agent.md               # SDR workflow agent
│   ├── account-researcher.md      # Company research agent
│   └── deal-strategist.md         # Deal strategy advisor
│
├── hooks/
│   └── hooks.json                 # Auto-log activities, validate data
│
└── .mcp.json                      # CRM, enrichment API connections
```

#### Transformation Process

**Step 1: Decompose the playbook into skill domains**
- Each major chapter/section becomes a skill directory
- Each skill has a single, clear purpose
- Target: 8-15 skills for a comprehensive playbook

**Step 2: Write concise SKILL.md files (< 500 lines each)**
- Start with what Claude does NOT already know (your unique methodology)
- Use third-person descriptions for discoverability
- Include workflow steps with clear decision points

**Step 3: Move reference material to supporting files**
- Templates, examples, question banks, objection scripts -> separate .md files
- Keep references one level deep from SKILL.md
- Add table of contents to files > 100 lines

**Step 4: Create executable scripts for deterministic tasks**
- Call prep document generation
- Pipeline health scoring
- ICP scoring calculations
- Data validation

**Step 5: Build agents for complex workflows**
- SDR agent: combines outreach + research + qualification skills
- Deal strategist: combines discovery + proposal + pipeline skills

### 5.3 RAG vs. Embedded Knowledge vs. Dynamic Retrieval

| Approach | Best For | Pros | Cons |
|----------|----------|------|------|
| **Embedded in SKILL.md** | Core methodology, frameworks, decision trees | Zero latency, always available, no infrastructure | Context window limits, update requires new version |
| **Progressive Disclosure (files)** | Reference material, templates, examples | Efficient token use, large knowledge bases, no context penalty | Requires good file organization |
| **RAG (MCP + vector DB)** | Large document corpora, frequently updated content | Handles massive knowledge bases, real-time updates | Infrastructure overhead, retrieval quality concerns |
| **Dynamic Retrieval (MCP + APIs)** | Live data (CRM records, enrichment, market data) | Always current, integrates with existing tools | API dependencies, latency, cost |
| **Hybrid** | Production deployments | Best of all worlds | Complexity |

**Recommended approach for a methodology plugin**:

1. **Core frameworks** -> Embedded in SKILL.md (the "what" and "how")
2. **Templates, examples, scripts** -> Progressive disclosure files (loaded on demand)
3. **Company/contact data** -> MCP server connecting to CRM/enrichment APIs
4. **Market intelligence** -> MCP server connecting to data providers
5. **Historical performance data** -> RAG over past proposals, call transcripts

### 5.4 Best Practices for Encoding Business Knowledge

1. **Start with evaluation**: Run Claude on real tasks WITHOUT the skill first. Document specific failures. Build skills to address those gaps only.

2. **Assume intelligence**: Only add what Claude does not know. Your ICP scoring model is unique; the concept of ICP scoring is not.

3. **Use the observe-refine-test cycle**:
   - Claude A (author) creates the skill
   - Claude B (fresh instance with skill) tests on real tasks
   - Observe failures, bring back to Claude A for refinement
   - Iterate until Claude B handles edge cases

4. **Match freedom to fragility**:
   - High freedom: strategy, research, analysis (many valid approaches)
   - Medium freedom: outreach templates, call scripts (preferred pattern exists)
   - Low freedom: data entry, CRM updates, scoring calculations (exact process required)

5. **Build feedback loops**: validator -> fix -> validate again. For proposals: generate -> score against criteria -> revise -> re-score.

6. **Test across models**: What works for Opus may need more detail for Haiku. Design for the lowest model you plan to support.

---

## 6. Strategic Recommendations

### 6.1 Market Opportunity Assessment

**The gap**: No one has built a **B2B growth-specific Claude Code plugin marketplace**. Current marketplaces are generic developer tooling. The B2B growth space (worth $16B+ in sales automation alone) has no presence in the Claude Code ecosystem.

**Timing**: The plugin ecosystem is early (launched mid-2025, standardized late 2025). Community marketplaces are fragmenting. Anthropic's official marketplace is still maturing. First-mover advantage is real.

### 6.2 Recommended Architecture

```
system0-marketplace/                     # Git repo = marketplace
├── .claude-plugin/
│   └── marketplace.json                 # Registry of all plugins
├── plugins/
│   ├── b2b-growth-foundations/          # Free: ICP, messaging frameworks
│   ├── outbound-engine/                 # Paid: SDR automation, sequences
│   ├── discovery-mastery/              # Paid: call methodology
│   ├── proposal-accelerator/           # Paid: proposal generation
│   ├── pipeline-intelligence/          # Paid: deal scoring, forecasting
│   ├── latam-growth-kit/              # Paid: LATAM-specific playbooks
│   └── enterprise-account-strategy/    # Enterprise: ABM methodology
└── README.md
```

### 6.3 Monetization Strategy

| Tier | Price | Content |
|------|-------|---------|
| **Free** | $0 | Core frameworks, basic ICP analysis, intro templates |
| **Professional** | $49-99/seat/month | Full playbook skills, SDR agent, proposal generator |
| **Enterprise** | $199-499/seat/month | Custom methodology encoding, private MCP integrations, SLA |
| **Consulting** | Custom | Full methodology transformation service |

### 6.4 Competitive Moat Factors

1. **Methodology depth**: 45K-word playbook encoded as skills is hard to replicate
2. **Progressive knowledge**: Skills improve via observe-refine-test cycles with real client data
3. **LATAM specialization**: WhatsApp-first, Portuguese/Spanish, local market knowledge
4. **Ecosystem lock-in**: MCP integrations with client CRMs create switching costs
5. **Network effects**: Team adoption means shared skills, agents, and workflows
6. **First-mover in B2B growth x Claude Code**: No competitors in this specific niche

### 6.5 Go-to-Market Priorities

1. **Phase 1 (Month 1-2)**: Build 3-5 core free skills demonstrating value. Publish marketplace on GitHub. Submit to awesome-claude-code lists.
2. **Phase 2 (Month 2-4)**: Build paid professional tier. Create MCP integrations (HubSpot, Apollo, Clay). Target early B2B teams using Claude Code.
3. **Phase 3 (Month 4-6)**: Enterprise tier with custom methodology encoding. Build case studies. Target LATAM enterprises specifically.
4. **Phase 4 (Month 6+)**: Platform play. Enable other consultants/agencies to publish their methodologies through your marketplace.

### 6.6 Key Technical Decisions

1. **Plugin source**: Use GitHub repos for distribution (best support, private repo auth)
2. **Marketplace scope**: Start as `project` scope for team adoption, offer `user` scope for individuals
3. **MCP servers**: Build custom MCP servers for CRM integration (HubSpot, Salesforce, Pipedrive)
4. **Skills vs RAG**: Start with embedded skills (no infrastructure). Add MCP-based RAG later for live data.
5. **Agent design**: Create specialized subagents (SDR, researcher, strategist) that compose skills
6. **Hooks**: Use PostToolUse hooks for activity logging, data validation, CRM sync

---

## Sources

### Official Documentation
- [Create plugins - Claude Code Docs](https://code.claude.com/docs/en/plugins)
- [Plugins reference - Claude Code Docs](https://code.claude.com/docs/en/plugins-reference)
- [Create and distribute a plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces)
- [Extend Claude with skills](https://code.claude.com/docs/en/skills)
- [Skill authoring best practices](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices)
- [Plugins in the SDK](https://platform.claude.com/docs/en/agent-sdk/plugins)
- [anthropics/claude-plugins-official (GitHub)](https://github.com/anthropics/claude-plugins-official)
- [anthropics/claude-code plugins (GitHub)](https://github.com/anthropics/claude-code/tree/main/plugins)

### Plugin Ecosystem
- [Understanding Claude Code's Full Stack (alexop.dev)](https://alexop.dev/posts/understanding-claude-code-full-stack/)
- [Claude Agent Skills: A First Principles Deep Dive](https://leehanchung.github.io/blogs/2025/10/26/claude-skills-deep-dive/)
- [The Agent Skills Standard (Medium)](https://medium.com/@loccarrre/the-agent-skills-standard-how-a-simple-skill-md-file-turns-ai-agents-into-on-demand-specialists-172af1d9737d)
- [Claude Skills Solve the Context Window Problem](https://tylerfolkman.substack.com/p/the-complete-guide-to-claude-skills)
- [awesome-claude-code-plugins (GitHub)](https://github.com/ccplugins/awesome-claude-code-plugins)
- [ClaudeKit Marketing](https://claudekit.cc/marketing)
- [claude-tools: A Plugin Marketplace](https://paddo.dev/blog/claude-tools-plugin-marketplace/)
- [Claude Code Plugin Marketplace](https://claudemarketplaces.com/)

### B2B AI & Sales Tools
- [25 Best AI Sales Tools in 2026 (oliv.ai)](https://www.oliv.ai/blog/best-ai-sales-tools)
- [How AI Agents Will Transform B2B Sales (BCG)](https://www.bcg.com/publications/2025/how-ai-agents-will-transform-b2b-sales)
- [AI Agents Revolutionized B2B Marketing in 2025 (Demand Gen Report)](https://www.demandgenreport.com/industry-news/feature/ai-agents-revolutionize-b2b-marketing-in-2025-from-automation-to-strategy/51106/)
- [Advolve automates digital marketing with Claude](https://claude.com/customers/advolve)
- [Rethinking B2B Software Pricing in the Agentic AI Era (BCG)](https://www.bcg.com/publications/2025/rethinking-b2b-software-pricing-in-the-era-of-ai)
- [Top 10 Clay Alternatives (Empler AI)](https://www.empler.ai/blog/top-10-clay-alternatives-competitors-b2b-sales-for-2025)

### LATAM Market
- [LatAm 2025 + 2026: The market is back to normal (TechFinitive)](https://www.techfinitive.com/features/latam-2025-2026-the-market-is-back-to-normal-now-only-those-who-execute-survive/)
- [Latin America's AI market set to hit $30.20 billion by 2033](https://www.intelligentcio.com/latam/2025/11/27/latin-americas-ai-market-set-to-hit-us-30-20-billion-by-2033/)
- [Brazil emerges as Latin America's AI leader](https://www.intelligentcio.com/latam/2025/11/26/brazil-emerges-as-latin-americas-ai-leader-but-investment-and-innovation-gaps-remain/)
- [AI adoption in Latin America and the Caribbean](https://www.intelligentcio.com/latam/2025/11/14/latin-america-and-the-caribbean-accelerate-ai-adoption-despite-investment-talent-and-governance-challenges/)

### Marketplace Patterns
- [How Much Money Can You Make With Shopify Apps in 2025](https://mktclarity.com/blogs/news/shopify-app-make-money)
- [Revenue share for Shopify App Store developers](https://shopify.dev/docs/apps/launch/distribution/revenue-share)
- [Are Bubble Plugins Profitable in 2025](https://mktclarity.com/blogs/news/bubble-plugins-profitable)
- [20+ SaaS Marketplaces for Developers in 2025](https://monday.com/appdeveloper/blog/saas-marketplaces-for-developers/)
- [VS Code Private Marketplace (Nov 2025)](https://code.visualstudio.com/blogs/2025/11/18/privatemarketplace)

### Knowledge Encoding & RAG
- [Traditional RAG vs. Agentic RAG (NVIDIA)](https://developer.nvidia.com/blog/traditional-rag-vs-agentic-rag-why-ai-agents-need-dynamic-knowledge-to-get-smarter/)
- [RAG in 2025: Enterprise Guide (Data Nucleus)](https://datanucleus.dev/rag-and-agentic-ai/what-is-rag-enterprise-guide-2025)
- [LLM fine-tuning vs. RAG vs. agents (MITRIX)](https://mitrix.io/blog/llm-fine%E2%80%91tuning-vs-rag-vs-agents-a-practical-comparison/)
- [Stop Bloating Your CLAUDE.md: Progressive Disclosure (alexop.dev)](https://alexop.dev/posts/stop-bloating-your-claude-md-progressive-disclosure-ai-coding-tools/)
- [GitHub Copilot Skills: Teaching AI Your Team's Playbook](https://asklar.dev/ai/engineering/copilot/2025/12/23/github-copilot-skills)
