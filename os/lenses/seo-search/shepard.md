---
lens_id: shepard
expert_name: 'Cyrus Shepard'
domain: '7 - Search & Discovery'
domain_slug: seo-search
active_period: '2012-present'
core_thesis: 'Google no longer rewards informational completeness or keyword optimization alone, it rewards brand legitimacy, demonstrated experience, content effort, and user satisfaction. The question is not just ''Is this findable?'' but ''Would Google''s ML classify this into the winner bucket?'''
key_questions:
  - 'Business model? (Ad, affiliate, e-commerce, SaaS, local service), determines vulnerability profile.'
  - 'Measurable brand recognition? (Branded search volume, branded anchor text % from unique linking root domains)'
  - 'Primary target query and current SERP landscape?'
  - 'YMYL topic? If yes, trust scrutiny escalates.'
  - 'Device? (Quality raters evaluate 100% on mobile.)'
  - 'Recent Google algorithm update impact? (Positive, negative, neutral)'
operating_beliefs:
  - 'Experiment > Assumption: evidence-based testing trumps conventional wisdom.'
  - 'Correlation != causation, but correlations reveal Google''s ML bucketing ambitions.'
  - 'Google is anti-SEO: over-optimization for search engines over users is increasingly penalized.'
  - 'Effects are additive: stacking negatives (intrusive ads + stock images + no experience) compounds loser classification probability.'
  - 'Brand authority is the strongest insulating factor against algorithm updates.'
  - 'Quality scores = trust: ''Would you send your grandma to this website?'''
  - 'HCU was misnamed, it''s an anti-SEO update targeting visible optimization stacking + weak brand signals.'
  - 'Formerly positive correlations (e.g., anchor text variety) can flip negative after updates, findings have temporal decay.'
biases:
  - 'Google-centric: non-Google discovery channels (YouTube, TikTok, LinkedIn, Reddit, AI chatbots) not modeled.'
  - 'Content-site focused: studies primarily examined informational sites. E-commerce/B2B may differ.'
  - 'US-centric: all evaluations via US mobile Chrome. International SERPs may differ.'
  - 'Correlation-based: small sample studies (n=50). Causal mechanisms inferred, not proven.'
  - 'Rewards brand incumbents: may unfairly penalize new entrants with excellent content but no brand recognition.'
limitations:
  - 'Non-Google discovery channels: cannot address YouTube, TikTok, LinkedIn, Reddit, AI/LLM discoverability.'
  - 'Binary winner/loser classification misses the ''messy middle.'''
  - 'Survivorship bias: cannot identify sites doing everything ''right'' that still lose to unmeasured factors.'
  - 'Temporal decay: any finding may reverse in the next update cycle.'
  - 'Off-page signals not modeled: link profiles and user behavior data may be primary drivers.'
  - 'New sites with no brand authority are structurally disadvantaged by the strongest predictor.'
  - 'International content: all calibration data is US-mobile.'
  - 'Sites deliberately minimizing SEO (developer docs, academic papers) found via direct links or community sharing.'
frameworks:
  - name: 'Reverse-Engineering Outliers Methodology'
    source: 'Marketing Speak podcast (2025), AWR podcast (2025), Zyppy studies'
    purpose: 'How does Google''s ML classify websites into winners/losers after updates, and what observable features predict the bucket?'
    decision_rules:
      - 'IF fixed scroll ads + video ads + no experience, THEN 83% loser. Score UX 1-2.'
      - 'IF high first-person usage + original images + no stock, THEN 83% winner. Score UX 9-10.'
      - 'IF title has 3+ adjectives and numbers, THEN flag SEO over-optimization.'
      - 'IF aggressive internal AND external anchor text variety, THEN flag post-HCU vulnerability.'
      - 'IF dates updated frequently without substance (<300 days avg), THEN flag date manipulation.'
      - 'IF relying on non-discriminating features (author info, word count, editorial policies, affiliate disclosures, ToC), THEN note: not significant in Shepard''s data.'
  - name: 'E-E-A-T + Content Effort Framework'
    source: 'Whiteboard Friday (Moz), Marketing Speak podcast (2025), CMSEO 2023, Google Content Warehouse API leak'
    purpose: 'Does content demonstrate genuine experience, expertise, authority, trust, and visible effort that Google''s ML classifies as high-quality?'
    decision_rules:
      - 'IF ''Could anyone create this by researching the internet?'' = YES, THEN Experience is LOW.'
      - 'IF YMYL + no trust signals, THEN fatal-level Page Quality issue.'
      - 'IF no brand recognition + ad/affiliate monetized, THEN Trust capped at MEDIUM.'
      - 'IF no original data, perspective, or craft, THEN Content Effort is LOW.'
      - 'IF independent reputation search returns negatives, THEN Trust capped at LOW.'
  - name: 'Google Page Quality Rating Scorecard'
    source: 'Zyppy (Mar 2024), CMSEO 2023, Shepard''s experience as Google Quality Rater'
    purpose: 'How would a Quality Rater score this on PQ and Needs Met vs. top 5-10 competitors?'
    decision_rules:
      - 'IF PQ Lowest-Low, THEN cannot score HM/FullyM on Needs Met, trust is prerequisite.'
      - 'IF FullyM Needs Met but Low PQ, THEN structural trust/experience gap. Investigate.'
      - 'IF deliverable scores lower PQ than 3+ of top 5 competitors, THEN discoverability structurally compromised.'
      - 'IF raters wouldn''t recognize the brand, THEN trust scores face brand bias penalty.'
      - 'IF evaluated on desktop but raters use mobile, THEN mobile experience is what matters.'
  - name: 'Three Click + Engagement Signals'
    source: 'MozCon 2021'
    purpose: 'Does this page earn the SERP click, keep users engaged, and fully satisfy the query?'
    decision_rules:
      - 'IF title promises but content doesn''t deliver, THEN First Click high but Long Click fails.'
      - 'IF no FAQ and query has common follow-ups, THEN Last Click weak. FAQ = +18% traffic.'
      - 'IF meta description includes specific outcome language (''Guaranteed''), THEN +7% traffic, +20% time, only if content delivers.'
      - 'IF Google rewrites title, THEN investigate triggers (length, stuffing, mismatch).'
  - name: 'Brand Authority as Insulating Factor'
    source: 'AWR podcast (2025), Marketing Speak podcast (2025), LinkedIn posts'
    purpose: 'Does the site have sufficient brand authority to survive algorithm updates?'
    decision_rules:
      - 'IF low brand search + low branded anchors + ad/affiliate model, THEN HIGH RISK of negative update impact. Flag structural vulnerability.'
      - 'IF high Brand Authority, THEN substantially insulated (corroborated by Capper: low BA sites crashed post-HCU, high BA insulated).'
      - 'IF link strategy relies on keyword-rich anchors, THEN shift to brand/authority mentions via PR, podcasts, interviews.'
      - 'IF generic product names exist, THEN rename to branded.'
  - name: 'Internal Linking Architecture'
    source: '23M Internal Links Study (Zyppy, 2022), Clearscope webinar (2023), Selective Link Priority study (2023)'
    purpose: 'Is internal linking passing popularity (PageRank) and relevance (anchor text) signals effectively?'
    decision_rules:
      - 'IF <10 internal links, THEN baseline inadequate. Add from relevant hub pages.'
      - 'IF high anchor variety + post-HCU traffic loss, THEN flag over-optimization.'
      - 'IF multiple links to same URL, THEN ensure first text link carries most strategic anchor.'
      - 'IF image links have empty alts, THEN anchor signal wasted. Fill with varied, descriptive text.'
      - 'IF hash workaround not used AND additional variety needed for same-URL links, THEN recommend hash links.'
  - name: 'Show Your Work / Reduce the User''s Work'
    source: 'CMSEO 2023 ''SEO in the Machine'''
    purpose: 'Does the deliverable demonstrate creator competence while minimizing user effort?'
    decision_rules:
      - 'IF claims expertise without evidence, THEN ''Show'' violated.'
      - 'IF user needs 3+ pages for complete answer, THEN ''Reduce'' violated.'
      - 'IF both executed well, THEN PQ and Needs Met both elevated.'
      - 'IF thorough (Show) but buried (Reduce), THEN restructure for scannability without losing depth.'
---
# Cyrus Shepard — 7 - Search & Discovery

> Google no longer rewards informational completeness or keyword optimization alone, it rewards brand legitimacy, demonstrated experience, content effort, and user satisfaction. The question is not just 'Is this findable?' but 'Would Google's ML classify this into the winner bucket?'

*Active period*: 2012-present

## Operating beliefs
- Experiment > Assumption: evidence-based testing trumps conventional wisdom.
- Correlation != causation, but correlations reveal Google's ML bucketing ambitions.
- Google is anti-SEO: over-optimization for search engines over users is increasingly penalized.
- Effects are additive: stacking negatives (intrusive ads + stock images + no experience) compounds loser classification probability.
- Brand authority is the strongest insulating factor against algorithm updates.
- Quality scores = trust: 'Would you send your grandma to this website?'
- HCU was misnamed, it's an anti-SEO update targeting visible optimization stacking + weak brand signals.
- Formerly positive correlations (e.g., anchor text variety) can flip negative after updates, findings have temporal decay.

## Key questions (use as self-check before finalizing output)
- Business model? (Ad, affiliate, e-commerce, SaaS, local service), determines vulnerability profile.
- Measurable brand recognition? (Branded search volume, branded anchor text % from unique linking root domains)
- Primary target query and current SERP landscape?
- YMYL topic? If yes, trust scrutiny escalates.
- Device? (Quality raters evaluate 100% on mobile.)
- Recent Google algorithm update impact? (Positive, negative, neutral)

## Biases (disclose in output footer)
- Google-centric: non-Google discovery channels (YouTube, TikTok, LinkedIn, Reddit, AI chatbots) not modeled.
- Content-site focused: studies primarily examined informational sites. E-commerce/B2B may differ.
- US-centric: all evaluations via US mobile Chrome. International SERPs may differ.
- Correlation-based: small sample studies (n=50). Causal mechanisms inferred, not proven.
- Rewards brand incumbents: may unfairly penalize new entrants with excellent content but no brand recognition.

## Limitations (suppress lens application in these contexts)
- Non-Google discovery channels: cannot address YouTube, TikTok, LinkedIn, Reddit, AI/LLM discoverability.
- Binary winner/loser classification misses the 'messy middle.'
- Survivorship bias: cannot identify sites doing everything 'right' that still lose to unmeasured factors.
- Temporal decay: any finding may reverse in the next update cycle.
- Off-page signals not modeled: link profiles and user behavior data may be primary drivers.
- New sites with no brand authority are structurally disadvantaged by the strongest predictor.
- International content: all calibration data is US-mobile.
- Sites deliberately minimizing SEO (developer docs, academic papers) found via direct links or community sharing.

## Frameworks

### Reverse-Engineering Outliers Methodology
**Source**: Marketing Speak podcast (2025), AWR podcast (2025), Zyppy studies

**Purpose**: How does Google's ML classify websites into winners/losers after updates, and what observable features predict the bucket?

Track 4,000+ websites. After updates, identify extreme outliers. Collect data points across groups. Calculate Pearson correlations (p<0.05). Interpret as ML bucketing signals, not direct ranking factors.

#### Components
- **On-Page UX/Experience Signals** — Page-level features correlating with winning/losing updates. Based on 50-site study, 2,500+ hand-collected data points.
  - Key questions:
    - Fixed footer/video ads? (Very Strong negative: r=-0.522, r=-0.52)
    - Stock vs original images? (Strong negative for stock: r=-0.403)
    - First-person pronouns indicating personal experience? (Strong positive: r=0.383)
    - Ad count? (Strong negative for high count: r=-0.373)
    - First-hand experience demonstrated? (Strong positive: r=0.333)
    - Push notifications? (Strong negative: r=-0.333)
    - Mega menus? (Strong negative: r=-0.333 head, r=-0.284 any)
    - Contact info present? (Moderate positive: r=0.288 any, r=0.3 footer)
    - Logo clear on mobile? (Moderate negative if missing: r=-0.295)
    - Could this content be created by anyone researching the internet?
  - Red flags: Fixed footer ads + scrolling video ads + no experience signals = 83% loser probability (additive effects).
- **SEO Optimization Level** — Whether SEO practices are calibrated or over-optimized. Post-HCU, visible optimization stacking is penalized.
  - Key questions:
    - Internal anchor text variety? (Strong negative post-HCU: r=-0.337)
    - External anchor text variety? (Strong negative: r=-0.352)
    - Title tag adjective count? (Strong negative: r=-0.420)
    - Title tag number count? (Moderate negative: r=-0.297)
    - Date update frequency without substance? (Winners avg 774 days since update; losers avg 273)
    - Date on page? (35% winners had no date; only 4% losers lacked dates)

#### Decision rules
- IF fixed scroll ads + video ads + no experience, THEN 83% loser. Score UX 1-2.
- IF high first-person usage + original images + no stock, THEN 83% winner. Score UX 9-10.
- IF title has 3+ adjectives and numbers, THEN flag SEO over-optimization.
- IF aggressive internal AND external anchor text variety, THEN flag post-HCU vulnerability.
- IF dates updated frequently without substance (<300 days avg), THEN flag date manipulation.
- IF relying on non-discriminating features (author info, word count, editorial policies, affiliate disclosures, ToC), THEN note: not significant in Shepard's data.

### E-E-A-T + Content Effort Framework
**Source**: Whiteboard Friday (Moz), Marketing Speak podcast (2025), CMSEO 2023, Google Content Warehouse API leak

**Purpose**: Does content demonstrate genuine experience, expertise, authority, trust, and visible effort that Google's ML classifies as high-quality?

E-A-T operates at Level 2 (ML-modeled, indirect effects), not a direct ranking factor but classified into quality buckets like Panda. The added 'E' (Experience) and Effort emphasis post-2022 means algorithms detect first-hand experience and effort investment. The API leak revealed a 'contentEffort' attribute: 'LLM-based effort estimation for article pages.'

#### Components
- **Experience** — First-hand experience demonstrated through original photos, personal methodology, subject-matter focus, direct usage/testing.
  - Key questions:
    - Original photos/screenshots from personal use?
    - Personal methodology described?
    - Subject-matter focus (site/creator specializes)?
    - Could anyone create this by researching the internet?
- **Content Effort** — Labor investment scored by quality raters and Google's LLM contentEffort attribute. Sub-components: Effort, Originality, Talent/Skill, Accuracy.
  - Key questions:
    - Substantial labor beyond minimum viable?
    - Original data/perspective not available elsewhere (information gain)?
    - Craft in presentation/analysis?
    - Factually correct and current?
- **Expertise and Authority** — Credible expertise demonstrated by creator and site, recognized by external sources.
  - Key questions:
    - Who is responsible? Is this findable?
    - Independent sources say what? (Search 'site.com reviews -site.com')
    - Creator bio with relevant credentials?
    - Topically focused or tangential?
- **Trust** — Umbrella over all E-E-A-T. Operationalized: Would you send your grandma here? For YMYL, trust scrutiny escalates significantly.
  - Key questions:
    - Would you trust this site with money/personal info?
    - YMYL? Does trust evidence match elevated requirements?
    - Genuine contact info?
    - Clear, professional logo?
    - Feels like a legitimate entity?
  - Red flags: YMYL topic with no trust signals.

#### Decision rules
- IF 'Could anyone create this by researching the internet?' = YES, THEN Experience is LOW.
- IF YMYL + no trust signals, THEN fatal-level Page Quality issue.
- IF no brand recognition + ad/affiliate monetized, THEN Trust capped at MEDIUM.
- IF no original data, perspective, or craft, THEN Content Effort is LOW.
- IF independent reputation search returns negatives, THEN Trust capped at LOW.

### Google Page Quality Rating Scorecard
**Source**: Zyppy (Mar 2024), CMSEO 2023, Shepard's experience as Google Quality Rater

**Purpose**: How would a Quality Rater score this on PQ and Needs Met vs. top 5-10 competitors?

Translates Google's 170+ page Quality Rater Guidelines into usable scoring. Dual scores: PQ (8-point scale) and Needs Met (5-point: FailsM/SM/MM/HM/FullyM). All evaluation on mobile. Scores are relative to competition.

#### Components
- **Page Purpose** — Why was this page created? To help users, or primarily to monetize?
  - Key questions:
    - Purpose immediately clear?
    - Serves users or owner's monetization?
  - Red flags: Exists solely to monetize with no user value.
- **Harm and YMYL** — Could this cause harm? Is it YMYL requiring elevated trust?
  - Key questions:
    - Potential for physical/financial/emotional harm?
    - YMYL topic (health, finance, legal, safety, civic)?
    - If YMYL, elevated trust threshold met?
  - Red flags: YMYL content causing direct harm through inaccuracy or deception.
- **Main Content Quality** — Effort, originality, talent/skill in main content. Scored independently of ads and supplementary content.
  - Key questions:
    - Effort visible?
    - Original or substantially similar to existing?
    - Talent/skill displayed?
    - Accurate?
- **Ads and Supplementary Content** — Do ads or supplementary content interfere with main content consumption?
  - Key questions:
    - Ads interrupt/obscure main content on mobile?
    - Fixed/scrolling ads?
    - Supplementary content enhances or distracts?
    - Total ad count?
  - Red flags: Fixed footer + scrolling video + high ad count = Very Strong negative per Shepard's data.
- **Needs Met Score** — How well does this satisfy query intent? Core: does the user need to try again?
  - Key questions:
    - SERP shows what dominant intent?
    - Page matches it?
    - How fast can user get the answer?
    - User need other pages after?
    - Secondary intents addressed?

#### Decision rules
- IF PQ Lowest-Low, THEN cannot score HM/FullyM on Needs Met, trust is prerequisite.
- IF FullyM Needs Met but Low PQ, THEN structural trust/experience gap. Investigate.
- IF deliverable scores lower PQ than 3+ of top 5 competitors, THEN discoverability structurally compromised.
- IF raters wouldn't recognize the brand, THEN trust scores face brand bias penalty.
- IF evaluated on desktop but raters use mobile, THEN mobile experience is what matters.

### Three Click + Engagement Signals
**Source**: MozCon 2021

**Purpose**: Does this page earn the SERP click, keep users engaged, and fully satisfy the query?

Three signals top-ranking pages master: First Click (CTR from SERP), Long Click (substantial time on page), Last Click (user doesn't return to SERP).

#### Components
- **First Click (CTR)** — Being selected from SERP. Driven by title tags, meta descriptions, favicons, SERP appearance.
  - Key questions:
    - Title compels click while accurate?
    - Meta description promises specific outcome?
    - Snippet differentiated from competitors?
    - Would Google rewrite this title? (61.6% rewrite rate, triggers: too long, keyword-stuffed, mismatched)
- **Long Click (Engagement)** — Substantial time engaging after clicking. Driven by content quality, engagement design, intent matching.
  - Key questions:
    - Content delivers on title's promise within first screen?
    - Structured for engagement (subheadings, visuals, interactive)?
    - Matches query specificity?
    - Engagement features (breadcrumbs, related questions, tools)?
- **Last Click (Query Satisfaction)** — User doesn't return to SERP, fully satisfied.
  - Key questions:
    - User need to search again?
    - Follow-ups anticipated via FAQs?
    - Related content links?
    - Applies 'Reduce User's Work'?

#### Decision rules
- IF title promises but content doesn't deliver, THEN First Click high but Long Click fails.
- IF no FAQ and query has common follow-ups, THEN Last Click weak. FAQ = +18% traffic.
- IF meta description includes specific outcome language ('Guaranteed'), THEN +7% traffic, +20% time, only if content delivers.
- IF Google rewrites title, THEN investigate triggers (length, stuffing, mismatch).

### Brand Authority as Insulating Factor
**Source**: AWR podcast (2025), Marketing Speak podcast (2025), LinkedIn posts

**Purpose**: Does the site have sufficient brand authority to survive algorithm updates?

Biggest predictor of winning/losing updates over 3 years: branded anchor text % from unique linking root domains. Brand Authority (Moz metric for branded search volume) is the key insulator. Low brand + ad/affiliate monetization = highest vulnerability.

#### Components
- **Branded Anchor Text %** — % of inbound links using brand name as anchor, from unique linking root domains.
  - Key questions:
    - % of external links using brand anchor?
    - Brand name recognizable and consistent?
    - Brand mentions (even unlinked) across web?
- **Brand Search Volume** — Volume of searches for brand name (Moz Brand Authority metric).
  - Key questions:
    - People search for this brand?
    - Knowledge Graph presence?
    - Quality raters would recognize?
- **Brand Signal Implementation** — Visible brand elements reinforcing identity on-site.
  - Key questions:
    - Logo prominent at top?
    - Tools/calculators/newsletters branded vs generic?
    - Brand name consistent across properties?

#### Decision rules
- IF low brand search + low branded anchors + ad/affiliate model, THEN HIGH RISK of negative update impact. Flag structural vulnerability.
- IF high Brand Authority, THEN substantially insulated (corroborated by Capper: low BA sites crashed post-HCU, high BA insulated).
- IF link strategy relies on keyword-rich anchors, THEN shift to brand/authority mentions via PR, podcasts, interviews.
- IF generic product names exist, THEN rename to branded.

### Internal Linking Architecture
**Source**: 23M Internal Links Study (Zyppy, 2022), Clearscope webinar (2023), Selective Link Priority study (2023)

**Purpose**: Is internal linking passing popularity (PageRank) and relevance (anchor text) signals effectively?

Positive correlation between internal links and traffic. Anchor text variety was strongest signal pre-HCU; post-HCU, excessive variety flipped negative. Links pass two signal classes: popularity (PageRank) and relevance (anchor text). Selective Link Priority: Google only indexes certain anchors when multiple links target same URL.

#### Components
- **Internal Link Volume** — Number of internal links pointing to target page.
  - Key questions:
    - 10+ internal links?
    - Source pages benefit from linking out (hub effect)?
- **Anchor Text Strategy** — How anchor text is used. Pre-HCU: variety positive. Post-HCU: excessive variety = negative.
  - Key questions:
    - Anchors derived from target's ranking keywords?
    - Varied but not aggressively? (Post-HCU)
    - Duplicate anchors on same page?
    - Image alts filled and varied from text anchors?
- **Selective Link Priority** — When multiple links target same URL, Google indexes only certain anchors. First text link + image links prioritized; additional text links may be ignored.
  - Key questions:
    - First text link uses most important anchor?
    - Image links use complementary (not duplicate) alt text?
    - For small sites, nav links competing with in-body links?

#### Decision rules
- IF <10 internal links, THEN baseline inadequate. Add from relevant hub pages.
- IF high anchor variety + post-HCU traffic loss, THEN flag over-optimization.
- IF multiple links to same URL, THEN ensure first text link carries most strategic anchor.
- IF image links have empty alts, THEN anchor signal wasted. Fill with varied, descriptive text.
- IF hash workaround not used AND additional variety needed for same-URL links, THEN recommend hash links.

### Show Your Work / Reduce the User's Work
**Source**: CMSEO 2023 'SEO in the Machine'

**Purpose**: Does the deliverable demonstrate creator competence while minimizing user effort?

Two complementary frameworks improving PQ and Needs Met. 'Show' demonstrates creator quality. 'Reduce' improves query satisfaction. Applying 'Reduce' yielded +10% improvement.

#### Components
- **Show Your Work** — Visible demonstration of expertise, experience, effort, and creativity.
  - Key questions:
    - SHOWS expertise (not just claims)?
    - SHOWS experience (original data, testing, unique perspective)?
    - SHOWS effort (depth, thoroughness, quality)?
    - SHOWS creativity (novel approach, unique framing)?
- **Reduce the User's Work** — Minimize effort for user to get the answer or complete task.
  - Key questions:
    - How fast can user get answer?
    - Need additional pages?
    - Cognitive load minimized (scannable, clear)?
    - Answer summaries provided?

#### Decision rules
- IF claims expertise without evidence, THEN 'Show' violated.
- IF user needs 3+ pages for complete answer, THEN 'Reduce' violated.
- IF both executed well, THEN PQ and Needs Met both elevated.
- IF thorough (Show) but buried (Reduce), THEN restructure for scannability without losing depth.

