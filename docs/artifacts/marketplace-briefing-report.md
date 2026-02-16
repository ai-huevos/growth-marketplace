# AI Huevos Growth Marketplace: Comprehensive Briefing

## Executive Summary

The **AI Huevos Growth Marketplace** is a specialized ecosystem of Claude Code plugins designed to institutionalize B2B growth, sales, marketing, and operations frameworks. Positioned as a "framework-as-code" solution, the repository packages world-class methodologies—such as Winning by Design’s SPICED and Porter’s Five Forces—into installable skills, agents, and interactive commands.

The system is built on a **content-only architecture**, where Claude Code interprets structured Markdown files as executable instructions. It is explicitly **Spanish-first**, targeting the underserved LATAM B2B market ($50M+ revenue segment). The marketplace currently consists of three core plugins: `growth-foundations`, `sales-blueprint`, and `copywriting-engine`, all interconnected by a common diagnostic language (SPICED).

---

## 1. System Architecture and Conventions

The marketplace operates under a "Content-as-Code" philosophy, eliminating technical friction for non-developers while maintaining the rigor of a version-controlled repository.

### Core Architectural Principles
*   **Content-Only Repository:** There is no build system, no executable code, and no dependencies. The logic resides in Markdown files with YAML frontmatter and JSON configurations.
*   **Spanish-First:** All base content is created in Spanish to serve the LATAM market, with a multi-language roadmap (English, Portuguese) planned for Phase 2.
*   **Progressive Loading:** Claude only loads skill definitions initially and reads deeper into resources (frameworks/templates) only when relevant to the conversation.
*   **Agent Skills Standard:** The skills follow the `agentskills.io` open standard, making them compatible with over 12 AI platforms, including OpenAI Codex and Cursor.

### Repository Anatomy
| Component | Format | Purpose |
| :--- | :--- | :--- |
| **Plugins** | `.claude-plugin/plugin.json` | Manifest for discovery and versioning. |
| **Skills** | `SKILL.md` | Defined via YAML triggers (e.g., "ICP", "Pipeline"). |
| **Commands** | `.md` | Interactive multi-phase workflows (e.g., `/diagnostico`). |
| **Agents** | `.md` | Specialized roles with fixed workflows and quality gates. |

---

## 2. Core Methodology: The SPICED Framework

SPICED is the "lingua franca" of the marketplace, connecting discovery, pipeline management, and proposal generation. It moves sales from a "checklist" mentality to a "diagnostic" one.

### The 5 Dimensions of SPICED
1.  **S — Situation:** Objective facts (Industry, size, tools).
2.  **P — Pain:** Both **Quantifiable** (lost hours/money) and **Qualitative** (frustration/fear).
3.  **I — Impact:** Rational (ROI) and Emotional (personal gain/safety).
4.  **CE — Critical Event:** A deadline with a **consequence**. Without a consequence, it is merely a "compelling event."
5.  **D — Decision:** The process, criteria, and buying center roles (Initiator, Champion, Decider, etc.).

### Consolidated Scoring & Actions
| Score (5-30) | Classification | Recommended Action |
| :--- | :--- | :--- |
| **5-14** | Unqualified | Discard or long-term nurture; do not invest sales resources. |
| **15-22** | Nurture | Continue educating; no real urgency yet. |
| **23-30** | Active Opportunity | Advance in pipeline; assign AE; create Mutual Action Plan (MAP). |

---

## 3. Detailed Plugin Analysis

### A. growth-foundations (Entry Point)
Provides fundamental frameworks for B2B strategy.
*   **Key Skills:** `icp-analysis` (SPICED-based scoring), `positioning` (Value Prop Canvas), and `competitive-analysis`.
*   **Command `/diagnostico`:** Uses the **ClarQ framework** to assess operational maturity (0-40 score) across four dimensions: GTM Strategy, Revenue Streams, Quota-to-Cash, and Capabilities.
*   **Key Concepts:** Identifies operational risks like the **"Juan Guillermo Problem"** (knowledge silos) and **"Barbacha"** (operational leakage from manual processes).

### B. sales-blueprint (Execution)
A complete system for sales execution based on Winning by Design methodologies.
*   **Discovery Mastery:** Employs the **ACE Opening** (Appreciate, Check, End) and SPICED diagnosis.
*   **Coaching Cadence:** Uses the **REKS Framework** (Results, Effort, Knowledge, Skills) to diagnose performance.
*   **Specialized Agents:**
    *   **SDR Agent:** Performs research, qualifies via SPICED, and prepares 14-day multi-touch outreach.
    *   **Deal Strategist:** Acts as a VP of Sales, providing professional skepticism to identify "happy ears" and pipeline risks.

### C. copywriting-engine (Communication)
A data-backed engine utilizing 50,000+ patterns and 4,000+ psychological triggers.
*   **4-Agent Pipeline:** Sequentially moves through **Research** → **Insight** → **Ideation** → **Copy Output**.
*   **Headline Mastery:** Uses 50 formulas across 10 categories (Curiosity Gap, Power Promise, Social Proof, etc.).
*   **Quality Gate:** High-performance targets (Headlines >7.5/10, CTAs >8.0/10).

---

## 4. Psychological Triggers & Copywriting

The marketplace ranks triggers by "Leverage" based on an analysis of 4,129 instances in high-performing copy.

### The 10 Psychological Triggers
| Rank | Trigger | Leverage | Principle |
| :--- | :--- | :--- | :--- |
| 1 | **Scarcity** | 9.4/10 | Limited availability increases perceived value. |
| 2 | **Urgency** | 9.1/10 | Time pressure accelerates decisions. |
| 3 | **Greed** | 9.0/10 | The desire for more/better results drives purchases. |
| 4 | **Reciprocity** | 8.6/10 | Giving value creates an obligation to return the favor. |
| 5 | **Social Proof** | 7.9/10 | People look to others' actions to decide. |
| 6 | **Loss Aversion** | 7.6/10 | The pain of losing is 2x stronger than the joy of winning. |

---

## 5. Market Insights & Future Roadmap

### Market Validation
*   **Failure of Autonomous AI:** Research indicates **70% of AI SDR users abandon tools within 3 months** due to generic, robotic outreach.
*   **Human-in-the-Loop (HITL):** The marketplace validates the co-pilot model where AI handles research and data prep, but humans handle judgment and relationships.
*   **Target Persona:** The **"GTM Engineer"**—a role combining technical comfort (CLI/Claude Code) with strategic GTM needs.

### Priority MCP Integrations (Model Context Protocol)
To transform static frameworks into data-connected workflows, the following integrations are prioritized:
1.  **HubSpot (Priority 1):** Sourcing contact/company data for automated ICP scoring.
2.  **Apollo.io (Priority 1):** Automated enrichment for prospecting and ICP validation.
3.  **Notion (Priority 1):** Serving as the "output repository" for all skill-generated documents.
4.  **Gong (Priority 2):** A "game-changer" for analyzing real sales calls against the SPICED framework.

---

## 6. Actionable Insights

*   **For Sales Managers:** Implement the **REKS diagnosis** before prescribing training. If "Effort" (activity) is low, coaching "Skills" (how they pitch) will not solve the performance gap.
*   **For Copywriters:** Combine triggers for maximum impact. The most powerful combinations are **Scarcity + Urgency** for closing sales, and **Greed + Social Proof** for landing page headers.
*   **For GTM Leaders:** Use the **ClarQ Assessment** (`/diagnostico`) to identify if your organization is a "Fragile Giant"—a company with high revenue but fragile, hero-dependent operations.
*   **For Deal Strategy:** Avoid "single-threaded" deals. The **3x3 Strategy** (minimum 3 contacts across 3 levels: Executive, Management, User) is mandatory to mitigate the #1 risk in enterprise sales.

---

## 7. Important Quotes with Context

> **"SPICED no es un checklist — es un diagnóstico. Cada dimensión revela una capa de la oportunidad. Sin las 5 dimensiones, no tienes un deal, tienes una esperanza."**
*   *Context:* Found in the SPICED methodology document, emphasizing that incomplete qualification is the root of most pipeline failures.

> **"No entrenes a alguien en skills si el problema es de esfuerzo. No le des un playbook si el problema es que no sabe hacer la llamada."**
*   *Context:* From the REKS framework guide, warning sales managers that 80% of performance issues are misdiagnosed.

> **"Un 'compelling event' tiene fecha pero no consecuencia... Un 'critical event' tiene fecha + consecuencia."**
*   *Context:* A key distinction in the SPICED dimensions to help sales reps identify genuine urgency versus arbitrary deadlines.

> **"85% de los AI SDRs autónomos fallaron en 6 meses... El modelo human-in-the-loop es el que funciona."**
*   *Context:* Strategic market research data justifying the co-pilot architecture of the marketplace versus fully autonomous agents.