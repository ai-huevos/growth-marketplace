# 02 — Gap Research (Phase 2)

**Inputs**: approved `01-aarrr-map.md` (operator confirmed map + locked EXTEND-GrowthOS decision).
**Rule applied**: research ONLY gaps repo evidence cannot answer. Every finding = insight + fetched source URL + epistemic tag. Findings without a verifiable source were discarded by the researchers. Vendor bias noted inline.

**G6 (manual/client-scoped sales pipeline loop): NO RESEARCH NEEDED** — repo evidence is sufficient (`os/skills/sales-orchestrator` is fully specified; the fix is de-scoping paths from `clients/kai-partners/` to install variables). Carried to Phase 3 as a design decision. [EVIDENCE]

---

## G1 — Acquisition loops (no running content/outbound loop)

| Finding | Source URL | Tag | Applicability |
|---|---|---|---|
| FutureSearch runs a real Claude Code marketing pipeline on a weekday-8am schedule: source scanners → classifier agent (13-question rubric, 1–5 score) → proposer agent drafts → opens a PR for human review (~14 min autonomous, $5–8/run), with a self-updating `learnings.md` that drops dead channels and doubles down on winners | https://futuresearch.ai/blog/marketing-pipeline-using-claude-code/ | EVIDENCE (practitioner; mild self-promo) | Directly portable: skill + scheduled routine + learnings file; PR-as-approval-queue fits this git-native repo |
| Solo practitioner runs a 15-agent content loop (Signal Discovery → Weekly Plan → Two-Wave Production → Review → Publish → Analytics → loop) on launchd cron, 10–12 pieces/week, with a hard gate: if the human hasn't touched the calendar, the producer does nothing | https://doneyli.substack.com/p/how-i-automated-my-wifes-content | EVIDENCE (independent practitioner) | Two-wave pattern (expensive model creates, cheap model repurposes) + calendar-touch gate map to content-strategy skill + hooks |
| Claude Code officially supports three scheduling tiers — `/loop` (session-scoped), Desktop tasks (local files, 1-min interval), cloud Routines (autonomous, no permission prompts, min 1-hour interval, fresh clone = **no local file access**) | https://code.claude.com/docs/en/scheduled-tasks | EVIDENCE (official docs) | Hard constraint: cloud Routines can't read GCO YAML at `~/.growthos/contexts` — loops need Desktop tasks or Supabase-backed state |
| HITL consensus: approval gates only at irreversible points (publish, send, spend); high-confidence outputs auto-execute, low-confidence branches to review queue | https://blog.n8n.io/human-in-the-loop-automation/ | PATTERN (n8n + FutureSearch + doneyli) | Maps to Agentic Constitution zones: drafting/analytics = Green (auto), publishing/outreach = Red (HITL) |

**Unresolved [GAP]**: no credible source demonstrates closed-loop attribution (published content → measured pipeline revenue → strategy change); the "Claude Code content automation" vendor-SEO blog cluster was excluded.

## G4 — Retention loops (no health monitoring / re-engagement)

| Finding | Source URL | Tag | Applicability |
|---|---|---|---|
| Pylon's B2B model: 0–100 score, four action bands (80–100 healthy → expansion play, 60–79 stable → friction review, 40–59 at-risk → recovery plan, 0–39 critical → intervention), weights calibrated to what predicted YOUR past renewals | https://www.usepylon.com/blog/b2b-customer-health-score | EVIDENCE (CS-vendor bias) | Band thresholds → Supabase trigger + hook firing renewal/re-engagement commands per band |
| Vitally's 4-metric score keeps a human signal first-class: Setup 20% + Usage 40% + NPS 20% + CSM Pulse 20% (frontline judgment, 0/5/10), with alerts on score DROPS, not just absolute levels | https://www.vitally.io/post/how-to-create-a-customer-health-score-with-four-metrics | EVIDENCE (vendor) | CSM Pulse = weekly 1-question founder check-in; delta-based triggers suit low-volume accounts where absolutes are noisy |
| Gainsight: when product telemetry is thin, redistribute weight to relationship signals — usage 40% / support 25% / sentiment 20% / exec engagement 15%, QBR-cadence adherence as scoreable input auto-triggering playbooks | https://www.gainsight.com/blog/customer-health-scores/ | EVIDENCE (strong vendor bias) | Services firms have no telemetry: score from meeting cadence (Fireflies bridge exists), response latency, CSM pulse — stored in GCO |

**Unresolved [GAP]**: no credible source addresses health-loop design for low-volume B2B services firms (5–20 clients, no usage data); entire evidence base is SaaS CS-platform vendors. Requires first-party validation via dog-fooding.

## G2/G3 — Activation (no onboarding agent/skill)

| Finding | Source URL | Tag | Applicability |
|---|---|---|---|
| TTFV = days between contract signing and first meaningful use, measured as a trend; go-live is a hard gate validated by readiness checklists | https://www.rocketlane.com/blogs/client-onboarding | EVIDENCE (vendor) | Defines the metric the G3 skill tracks from kickoff-call date |
| Agency practitioners define "activated" as 4 checkable conditions: scope sign-off + first quick win received (due day 3–5) + recurring cadence established + KPIs aligned | https://www.unkoa.com/client-onboarding-best-practices/ | EVIDENCE | Gives the G2 agent a concrete 4-item activation contract for services clients |
| 30-60-90 milestone plans with dated health checkpoints (day 3–4 dependency check, day 7 CSAT, TTV as KPI, reviews at 30/60/90) | rocketlane.com + unkoa.com (above) | PATTERN (2 sources) | Maps onto the existing 90-day roadmap output — G3 skill = execution layer over it with dated gates |
| Copilot→autonomous graduation: AI drafts, humans accept/edit/reject; teams replay past cases to measure quality before promoting to autonomy | https://www.eesel.ai/blog/best-ai-customer-onboarding-tools | EVIDENCE (vendor) | Precedent for constitution's HITL→HOTL graduation applied to onboarding, incl. replay-on-historical-data as promotion test |

**Unresolved [GAP]**: no fetched agency-published "agent runs onboarding end-to-end" case (two candidates returned HTTP 403); no source defines activation thresholds (gate values = own design decision).

## G5 — Revenue HITL (proposal/pricing agent seam unstaffed)

| Finding | Source URL | Tag | Applicability |
|---|---|---|---|
| Approval rule: require approval when the next action is irreversible, costly, regulated, or high blast radius; reviewers get "evidence packs" decidable in 10–30s; "approve with edits" avoids restarts; timeout escalation | https://www.stackai.com/insights/human-in-the-loop-ai-agents-how-to-design-approval-workflows-for-safe-and-scalable-automation | EVIDENCE (vendor, single-source figures) | Proposal agent emits evidence pack (pricing rationale, deal context, diff vs pricing grid) + approve-with-edits |
| Production draft-review-send: agent drafts entirely alone, human steps in before send; two gate modes — `required` blocks execution, `audit` logs post-hoc | https://www.agno.com/blog/how-to-add-human-in-the-loop-controls-to-ai-agents-that-actually-run-in-production | EVIDENCE (vendor) | required/audit modes = runtime encoding of red-zone (blocking) vs yellow-zone (logged) |
| Propose/execute seam is a first-class primitive across ≥2 agent frameworks (Agno `requires_confirmation` + resume; LangGraph `interrupt()` with approve/reject AND review-and-edit of args) | agno.com (above) + https://docs.langchain.com/oss/python/langgraph/interrupts | PATTERN (2 sources) | Constitution's HITL seam matches industry convergence; review-and-edit (human adjusts price, agent continues) is the strongest fit for proposals |

**Unresolved [GAP]**: no pricing-specific agent deployment at a services firm documented anywhere fetched; dual-approval and 10–30s figures are single-vendor, uncorroborated.

## G8 — AARRR instrumentation (metrics documented, never measured)

| Finding | Source URL | Tag | Applicability |
|---|---|---|---|
| For low-volume B2B, instrument Activation + Retention FIRST, not Acquisition; recommended acquisition metric = ICP-qualified signups, revenue metric = MRR | https://posthog.com/product-engineers/aarrr-pirate-funnel | EVIDENCE (vendor) | Write `icp_score` at signup (diagnostic_results exists) and churn/NRR before any acquisition metrics |
| Convergent practice: fix Retention before scaling Acquisition (GRR<85% → stop) and cap at ONE headline metric per stage (CAC/channel, activation rate, monthly churn, NPS, LTV:CAC) | https://fatgraphs.com/blogs/aarrr-framework/ + posthog (above) | PATTERN (2 sources) | Justifies a minimal 5-row phase_metrics model (one metric per stage) instead of full event analytics; churn<10% gate = Retention row |
| Segment's open B2B SaaS spec: exactly 10 named lifecycle events with account via `groupId` on every event — a copyable open schema for low-volume B2B | https://raw.githubusercontent.com/segmentio/segment-docs/master/src/connections/spec/b2b-saas.md (canonical page 403'd) | EVIDENCE | Copy the pattern: small enum of lifecycle events + `organization_id` on every row in a new Supabase `events` table |
| Low-volume B2B funnels = stage-transition conversions between a fixed set of named stages, one count metric each — not page/product events | https://www.unusual.vc/field-guide/gtm-funnel-stages-metrics-goals-for-b2b-startups | EVIDENCE | GrowthOS phases become the stage enum; phase exit = a transition event row; win-rate>30% computed from CONVERTIR transitions |
| OpenTelemetry GenAI conventions cover agent spans + token/duration metrics but explicitly NOT task success or business outcomes — outcome measurement is application-layer | https://opentelemetry.io/blog/2026/genai-observability/ | EVIDENCE | Confirms `ai_execution_logs` (tokens/latency) can never satisfy G8 alone — an outcome layer is required |
| Business outcomes logged as separate score/feedback records `{key, score|value, comment}` linked by run ID, populated by human annotation, code rules, or LLM-as-judge | https://langfuse.com/docs/scores/overview + https://docs.langchain.com/langsmith/evaluation-concepts | PATTERN (2 sources, vendor bias) | Add `execution_scores` FK'd to `ai_execution_logs`; constitution quality gates become score keys; phase-exit checks read aggregates |

**Unresolved [GAP]**: no agent-framework builder publishes a pattern tying agent runs to downstream revenue (win rate, NRR) — the AARRR joins must be built first-party in Supabase.

## G7 — Referral (entire stage empty)

| Finding | Source URL | Tag | Applicability |
|---|---|---|---|
| Ask for referrals at peak-satisfaction moments — post-onboarding win, milestone delivery, high NPS, or renewal — not at contract end | https://www.zonkafeedback.com/blog/using-nps-for-referrals + https://customergauge.com/blog/b2b-referral-program-best-practices | PATTERN (2 sources) | Trigger in GCO: fire "referral-ready" flag when phase = ESCALAR + NPS≥9 or milestone complete |
| NPS 9-10 promoters are the systematic targeting mechanism for advocacy — segment before outreach, never broadcast | https://www.zonkafeedback.com/blog/using-nps-for-referrals | EVIDENCE | New advocacy-scoring sub-skill reusing PULSO's scoring-model pattern (NPS → tiered referral eligibility) |
| B2B referral incentives must be relationship-scaled, non-cash (account credit, exclusive access, donation) — small discounts read as insulting in high-value B2B | https://customergauge.com/blog/b2b-referral-program-best-practices | EVIDENCE | Per-client incentive-bank template (mirrors existing pricing-grid pattern) rather than a generic coupon field |
| Referred-lead handoff needs an SLA (same/next business day) or leads go cold; referred customers get expedited "golden ticket" onboarding | https://customergauge.com/blog/b2b-referral-program-best-practices | EVIDENCE | Supabase-backed handoff timer tied to a referral-intake command, mirroring discovery→pipeline handoff |
| Case studies/testimonials captured only after deployment + proven usage, ideally asked by a non-seller party, video captured fast before specifics fade | https://www.napierb2b.com/2023/02/how-to-get-great-case-studies-from-b2b-customers/ | EVIDENCE | Case-study-engine skill: trigger on ESCALAR milestone completion; distinct from the sales follow-up VoC capture |
| Referred leads convert ~4x higher with larger purchases; 90%+ of B2B buyers trust peers over vendor reps | https://influitive.com/blog/customer-advocacy-software/ | EVIDENCE (vendor) | The business case for prioritizing G7 in the pilot decision |
| Realistic ramp: first referral activity in 60-90 days, measurable revenue impact in 3-6 months given B2B cycles | https://customergauge.com/blog/b2b-referral-program-best-practices | EVIDENCE | `/roadmap` expectation copy so the referral loop isn't scored "failed" inside a 90-day window |

### UpViral mechanics (operator-directed lead)

| Finding | Source URL | Tag | Applicability / mismatch |
|---|---|---|---|
| 7 named campaign mechanics: point-based giveaway, multi-tier milestone rewards, sweepstake, waiting-list-urgency, dual-sided incentive, behavior-triggered evergreen, exclusive-community/status | https://saaspartout.com/blog/upviral-guide-7-viral-referral-mechanics/ (independent) + https://www.upviral.com/about-us (vendor-primary) | PATTERN | **Translates**: dual-sided incentive + milestone-unlock ladder (1 referral = case-study feature, 3 = discounted engagement, 5 = co-marketing partner). **Does NOT translate**: sweepstakes + waiting-list urgency assume mass consumer audiences |
| Automated point accrual triggers automated reward delivery on threshold, with built-in fraud detection | https://www.upviral.com/about-us | EVIDENCE (vendor) | Automation-on-threshold reusable (Supabase trigger fires asset generation when referral count crosses value); fraud detection irrelevant at B2B scale |
| "Multiple email triggers" central to engaging leads over campaign lifecycle | https://ruizhidong.com/upviral-viral-referral-platform-wilco-de-kreij-review/ + upviral.com/about-us | PATTERN | Confirms event-triggered sequences exist, but NOT the specific revenue-focused sequencing — see unresolved |

**Unresolved [GAP]**: (1) UpViral's actual revenue-focused email content/sequencing logic could not be independently verified — the operator's claim stands as OPERATOR-ASSERTED, not externally evidenced; closing it needs Wilco de Kreij's long-form writing or a practitioner case with real sequences. (2) No B2B services champion-program case with hard revenue numbers was found — champion-program ROI is directionally supported, not quantified.

---

## Gate check — PASSED
27 findings across G1, G2/G3, G4, G5, G7, G8 — every finding traces to a fetched source URL and a flagged gap from `01-aarrr-map.md` §3. G6 explicitly excluded (repo evidence sufficient). Researchers discarded unverifiable material (vendor-SEO cluster, 403'd pages, snippet-only figures). 8 unresolved items remain tagged GAP and carry into Phase 3 as explicit design decisions — including one OPERATOR-ASSERTED claim (UpViral revenue-communication mechanics) flagged for the architecture to treat as a design input, not evidence.
