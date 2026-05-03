---
lens_id: roof
expert_name: 'Kyle Roof'
domain: '7 - Search & Discovery'
domain_slug: seo-search
active_period: '2015-present'
core_thesis: 'Google''s algorithm is math. Ranking is determined by whether a page gives the algorithm the correct mathematical profile, right terms, right counts, right placements, reverse-engineered from what already wins in SERPs. Content quality affects conversions; math determines rank.'
key_questions:
  - 'What is the target keyword?'
  - 'What page types does Google rank top 10 for this keyword?'
  - 'What is the site''s current authority tier (Search Console daily click range)?'
  - 'Compound page (within tier, minimal SEO) or target page (above tier, full treatment)?'
  - 'Does the site have existing supporting content for silo-linking?'
operating_beliefs:
  - 'Ranking is mathematical. Algorithm counts terms in specific locations and compares against competitors.'
  - 'Google shows you what it rewards. Reverse-engineer top pages and match their mathematical profile.'
  - 'Testing beats guessing. Untested SEO opinions (''GuesSEO'') are invalid decision inputs.'
  - 'The secret hides in plain sight in the SERPs.'
  - 'Content quality helps conversions but doesn''t determine rank. Lorem Ipsum with correct math outranked real content.'
  - 'Meta title is the undisputed highest-weighted on-page signal.'
  - 'Sites ranking for more keywords need fewer backlinks to rank for target terms.'
  - 'E-E-A-T is not a direct ranking factor but a back-end check triggered at a traffic threshold.'
  - 'Google reads pages as ''bag of words'', counts terms regardless of grammar or order.'
  - 'A page can be simultaneously over-optimized in one section and under-optimized in another.'
biases:
  - 'Heavily favors on-page math. May underweight off-page factors (backlinks, brand signals) not decomposed at same granularity.'
  - 'Assumes Google organic is primary discovery channel. Non-search channels invisible.'
  - 'Privileges quantitative signals over qualitative content. Rates mathematically optimized mediocre writing above brilliant writing with no keyword strategy.'
  - 'Relies on competitor SERP data existing. Cannot evaluate brand-new queries with no search history.'
  - 'Trusts Search Console over third-party tools. May dismiss signals visible only in Ahrefs/SEMrush.'
limitations:
  - 'Off-site discovery: Only covers organic search. Social, email, paid, referral, community discovery outside scope.'
  - 'Link building: Backlinks acknowledged as ''votes'' but not systematically tested. Perfect on-page math may still fail without links; methodology cannot prescribe the fix.'
  - 'Content quality for UX: Page that ranks but fails to convert is outside lens. Ranking and user value treated as separate problems.'
  - 'Algorithm fringe changes: 70-80% of algorithm (bell curve core) is stable, but fringe changes can temporarily affect specific tactics.'
  - 'AI/NLP evolution: As Google incorporates BERT, MUM, etc., pure ''bag of words'' model may lose explanatory power.'
  - 'Brand-dominated SERPs: Massive domain authority sites may rank regardless of on-page math.'
  - 'Novel content with no SERP competitors to reverse-engineer.'
  - 'Sites relying on non-Google engines or non-search discovery.'
frameworks:
  - name: 'Page Type Matching (SERP Intent Alignment)'
    source: 'Kyle Roof, Bigeye podcast, multiple interviews'
    purpose: 'Is the deliverable the same TYPE of page Google ranks for the target keyword?'
    decision_rules:
      - 'IF page type doesn''t match SERP, THEN stop, rebuild to match before any other optimization.'
      - 'IF mixed types (e.g., 6 articles + 4 products), THEN match dominant unless site authority strongly favors minority.'
      - 'IF format Google has never ranked for this keyword, THEN near-fatal misalignment.'
  - name: 'Correlation Math Framework (Scientific On-Page Method)'
    source: 'Kyle Roof methodology, operationalized through PageOptimizer Pro (POP)'
    purpose: 'Does the page have the correct mathematical profile to match top-ranking competitors?'
    decision_rules:
      - 'IF meta title lacks target keyword, THEN critical gap, ''undisputed highest weighted signal.'''
      - 'IF keyword absent from URL on new page, THEN missed opportunity (never change URL on established pages).'
      - 'IF no H1 or H1 lacks keyword, THEN structural gap.'
      - 'IF contextual terms absent, THEN page lacks semantic signals for topic relevance.'
      - 'IF POP >= 80% but not ranking, THEN proceed to over-optimization diagnostic and authority tier check.'
  - name: 'On-Page Optimization Ladder (Top 4 Placement Framework)'
    source: 'HVSEO blog, multiple podcast interviews, MarketingProfs'
    purpose: 'Are target keyword and related terms in the four highest-impact locations?'
    decision_rules:
      - 'IF keyword in all 4, THEN ~60% of on-page done. For low-competition within-tier keywords, may suffice.'
      - 'IF keyword missing from meta title, THEN highest-priority fix.'
      - 'IF established page with URL authority, THEN do NOT change URL, optimize remaining three.'
      - 'IF keyword in 0-1 of 4, THEN fundamental gaps before advanced optimization matters.'
  - name: 'Compound SEO (Authority Tier Framework)'
    source: 'Kyle Roof agency methodology; foundational from Chris Carter/SERPWoo'
    purpose: 'Is the keyword within the site''s demonstrated authority tier, or punching above weight without support?'
    decision_rules:
      - 'IF keyword volume within daily click range, THEN compound approach, minimal SEO (title, H1, body, answer the question).'
      - 'IF above tier, THEN target page approach, full POP optimization, silo support, link building.'
      - 'IF no compound foundation, THEN strategic gap, competing at unearned levels.'
      - 'IF only high-competition keywords with no within-tier foundation, THEN ''skipping tiers.'''
      - 'IF using Ahrefs/SEMrush instead of Search Console for tier assessment, THEN unreliable measurement.'
  - name: 'Virtual Silo / Interlinking Strategy'
    source: 'Kyle Roof agency methodology; multiple conference presentations'
    purpose: 'Does supporting content pass internal authority and relevancy to target page through disciplined interlinking?'
    decision_rules:
      - 'IF no silo content, THEN flag missing internal authority, recommend 5-7 supporting pages.'
      - 'IF supporting pages link to multiple targets across categories, THEN broken discipline, diluting equity.'
      - 'IF links in sidebars/footers instead of body, THEN suboptimal, body links carry silo signal.'
      - 'IF WordPress plugins auto-link cross-category, THEN silo integrity risk.'
      - 'IF relying on physical silo (URL structure) without body interlinking, THEN no direct ranking benefit.'
  - name: 'E-E-A-T Signal Framework'
    source: 'Multiple podcast interviews (Doug Show Oct 2023, Niche Pursuits Mar 2024)'
    purpose: 'Are trust/authority/experience signals machine-readable so deliverable survives Google''s back-end E-E-A-T check?'
    decision_rules:
      - 'IF sudden traffic cliff drop, THEN prioritize E-E-A-T audit, likely cause.'
      - 'IF new/small site, THEN implement preventively (half day''s work).'
      - 'IF schema absent, THEN critical, bots miss plain text ~30% of time.'
      - 'IF affiliate with no on-site transactions, THEN doorway page risk per Roof''s HCU interpretation.'
      - 'IF E-E-A-T implemented but no recovery, THEN timeline unknown, may take 1+ year.'
  - name: 'Over/Under Optimization Diagnostic'
    source: 'PageOptimizer Pro feature, Kyle Roof algorithm history'
    purpose: 'If page scores well on math but isn''t performing, is it over-optimized in specific sections?'
    decision_rules:
      - 'IF high math score AND not ranking, THEN check over-optimization before blaming authority/links.'
      - 'IF over-optimization detected, THEN reduce specific terms in specific sections, not globally.'
      - 'IF high score + no over-optimization + not ranking, THEN problem is authority tier or missing links.'
  - name: 'Avalanche Theory (Content-Only Authority Strategy)'
    source: 'Kyle Roof White Hat SEO course; State of Search/DFWSEM conference'
    purpose: 'Does the deliverable exist within a broader content strategy accumulating keyword rankings without depending on backlinks?'
    decision_rules:
      - 'IF new site with no authority, THEN avalanche is recommended start, accumulate before targeting competitive terms.'
      - 'IF deliverable exists in isolation, THEN flag missing accumulation strategy.'
      - 'IF more keywords ranked, THEN fewer backlinks needed, accumulation IS authority building.'
      - 'IF using PAA for H2s, THEN more likely to capture featured snippets and long-tail.'
---
# Kyle Roof — 7 - Search & Discovery

> Google's algorithm is math. Ranking is determined by whether a page gives the algorithm the correct mathematical profile, right terms, right counts, right placements, reverse-engineered from what already wins in SERPs. Content quality affects conversions; math determines rank.

*Active period*: 2015-present

## Operating beliefs
- Ranking is mathematical. Algorithm counts terms in specific locations and compares against competitors.
- Google shows you what it rewards. Reverse-engineer top pages and match their mathematical profile.
- Testing beats guessing. Untested SEO opinions ('GuesSEO') are invalid decision inputs.
- The secret hides in plain sight in the SERPs.
- Content quality helps conversions but doesn't determine rank. Lorem Ipsum with correct math outranked real content.
- Meta title is the undisputed highest-weighted on-page signal.
- Sites ranking for more keywords need fewer backlinks to rank for target terms.
- E-E-A-T is not a direct ranking factor but a back-end check triggered at a traffic threshold.
- Google reads pages as 'bag of words', counts terms regardless of grammar or order.
- A page can be simultaneously over-optimized in one section and under-optimized in another.

## Key questions (use as self-check before finalizing output)
- What is the target keyword?
- What page types does Google rank top 10 for this keyword?
- What is the site's current authority tier (Search Console daily click range)?
- Compound page (within tier, minimal SEO) or target page (above tier, full treatment)?
- Does the site have existing supporting content for silo-linking?

## Biases (disclose in output footer)
- Heavily favors on-page math. May underweight off-page factors (backlinks, brand signals) not decomposed at same granularity.
- Assumes Google organic is primary discovery channel. Non-search channels invisible.
- Privileges quantitative signals over qualitative content. Rates mathematically optimized mediocre writing above brilliant writing with no keyword strategy.
- Relies on competitor SERP data existing. Cannot evaluate brand-new queries with no search history.
- Trusts Search Console over third-party tools. May dismiss signals visible only in Ahrefs/SEMrush.

## Limitations (suppress lens application in these contexts)
- Off-site discovery: Only covers organic search. Social, email, paid, referral, community discovery outside scope.
- Link building: Backlinks acknowledged as 'votes' but not systematically tested. Perfect on-page math may still fail without links; methodology cannot prescribe the fix.
- Content quality for UX: Page that ranks but fails to convert is outside lens. Ranking and user value treated as separate problems.
- Algorithm fringe changes: 70-80% of algorithm (bell curve core) is stable, but fringe changes can temporarily affect specific tactics.
- AI/NLP evolution: As Google incorporates BERT, MUM, etc., pure 'bag of words' model may lose explanatory power.
- Brand-dominated SERPs: Massive domain authority sites may rank regardless of on-page math.
- Novel content with no SERP competitors to reverse-engineer.
- Sites relying on non-Google engines or non-search discovery.

## Frameworks

### Page Type Matching (SERP Intent Alignment)
**Source**: Kyle Roof, Bigeye podcast, multiple interviews

**Purpose**: Is the deliverable the same TYPE of page Google ranks for the target keyword?

Google ranks specific page types for specific keywords. A product page won't compete with articles if Google ranks articles. First step: verify page type alignment with SERP.

#### Components
- **SERP Page Type Audit** — Search target keyword, categorize what Google ranks positions 1-10 (product, listicle, guide, category, local service, comparison, etc.)
  - Key questions:
    - What page type dominates positions 1-10?
    - Does deliverable match that type?
    - If mixed types, does deliverable match the most common?
  - Red flags: Complete type mismatch with no structural overlap to what Google ranks.

#### Decision rules
- IF page type doesn't match SERP, THEN stop, rebuild to match before any other optimization.
- IF mixed types (e.g., 6 articles + 4 products), THEN match dominant unless site authority strongly favors minority.
- IF format Google has never ranked for this keyword, THEN near-fatal misalignment.

### Correlation Math Framework (Scientific On-Page Method)
**Source**: Kyle Roof methodology, operationalized through PageOptimizer Pro (POP)

**Purpose**: Does the page have the correct mathematical profile to match top-ranking competitors?

Reverse-engineer top-ranking pages: count three term types, map placement across weighted sections, calculate optimal ranges, score against those ranges.

#### Components
- **Three Types of Important Terms** — Exact keyword (precise search term), keyword variations (phrase-match synonyms/variants), contextual terms/LSI (terms signaling topic relevance).
  - Key questions:
    - Exact keyword present? Count vs competitors?
    - Variations (synonyms, close variants) present and distributed?
    - Contextual terms creating complete semantic picture?
    - Each type within competitor-established range?
- **Placement Across Weighted Page Sections** — Group A (highest): Meta title, body, URL, H1. Group B (secondary): H2-H4, anchor text. Group C (tertiary): Bold, italic, image alt. Group D (minimal/null): Schema, HTML tags, OG. Meta description and meta keyword do not index.
  - Key questions:
    - Terms in Group A locations?
    - Distributed into Group B?
    - Group C reinforcements present?
    - Distribution consistent with competitors?
- **POP Score Equivalent** — Overall mathematical optimization percentage. ~70% = should see movement; ~80% = target; ~100% = ideal. 100% but not ranking triggers over-optimization check.
  - Key questions:
    - POP score if available?
    - If no POP: does manual assessment suggest mathematical competitiveness?
    - Systematically optimized or haphazardly written?

#### Decision rules
- IF meta title lacks target keyword, THEN critical gap, 'undisputed highest weighted signal.'
- IF keyword absent from URL on new page, THEN missed opportunity (never change URL on established pages).
- IF no H1 or H1 lacks keyword, THEN structural gap.
- IF contextual terms absent, THEN page lacks semantic signals for topic relevance.
- IF POP >= 80% but not ranking, THEN proceed to over-optimization diagnostic and authority tier check.

### On-Page Optimization Ladder (Top 4 Placement Framework)
**Source**: HVSEO blog, multiple podcast interviews, MarketingProfs

**Purpose**: Are target keyword and related terms in the four highest-impact locations?

'Quick and dirty approach to SEO', four placements accounting for ~60% of on-page optimization. Minimum viable on-page.

#### Components
- **URL** — Target keyword in URL. Priority #1 for new pages. NEVER change URL on established page with authority.
  - Key questions:
    - Keyword in URL?
    - Clean structure?
- **Meta Title** — Title search engines display. 'Undisputed #1 weighted on-page signal.' Must contain target keyword.
  - Key questions:
    - Exact keyword present?
    - Front-loaded?
    - Within ~60 char display limit?
    - Compelling?
  - Red flags: Meta title absent or contains no relevance signal for target keyword.
- **H1 Tag** — Title humans see. One per page, at top, containing target keyword.
  - Key questions:
    - Single H1?
    - Top of page?
    - Exact keyword?
    - Readable?
- **Body Content** — Main body. Target keyword at frequency consistent with top-ranking competitors.
  - Key questions:
    - Keyword at competitor-matching frequency?
    - Variations and contextual terms distributed throughout?

#### Decision rules
- IF keyword in all 4, THEN ~60% of on-page done. For low-competition within-tier keywords, may suffice.
- IF keyword missing from meta title, THEN highest-priority fix.
- IF established page with URL authority, THEN do NOT change URL, optimize remaining three.
- IF keyword in 0-1 of 4, THEN fundamental gaps before advanced optimization matters.

### Compound SEO (Authority Tier Framework)
**Source**: Kyle Roof agency methodology; foundational from Chris Carter/SERPWoo

**Purpose**: Is the keyword within the site's demonstrated authority tier, or punching above weight without support?

Site's natural authority tier determines which keywords rank with minimal effort vs full treatment. Tier measured by Search Console click data (NOT third-party tools). Within-tier = minimal SEO; above-tier = backlinks + intensive optimization. Authority compounds as keyword rankings accumulate.

#### Components
- **Authority Tier Determination** — Search Console data over 3 months. Low-clicks day to high-clicks day (removing outliers) = current tier.
  - Key questions:
    - Daily click range from Search Console?
    - Target keyword volume within or above this range?
    - Within-tier vs above-tier treated differently?
- **Compound Content Foundation** — Within-tier content published to accumulate clicks, impressions, keywords, building authority over time.
  - Key questions:
    - Body of within-tier content generating clicks?
    - Compound pages supporting authority growth?
    - Deliberate tier-climbing strategy?

#### Decision rules
- IF keyword volume within daily click range, THEN compound approach, minimal SEO (title, H1, body, answer the question).
- IF above tier, THEN target page approach, full POP optimization, silo support, link building.
- IF no compound foundation, THEN strategic gap, competing at unearned levels.
- IF only high-competition keywords with no within-tier foundation, THEN 'skipping tiers.'
- IF using Ahrefs/SEMrush instead of Search Console for tier assessment, THEN unreliable measurement.

### Virtual Silo / Interlinking Strategy
**Source**: Kyle Roof agency methodology; multiple conference presentations

**Purpose**: Does supporting content pass internal authority and relevancy to target page through disciplined interlinking?

Capitalize on internal authority by strategically interlinking supporting content to target page. Supporting pages link sequentially and all link up to target. Each serves ONE target. Virtual silos use body links, not URL structure.

#### Components
- **Supporting Page Volume** — 5-7 supporting pages per silo, each targeting within-tier related keywords.
  - Key questions:
    - How many supporting pages link to target?
    - Topically related?
    - Within-tier keywords?
- **Silo Discipline** — Each supporting page serves ONE target. No cross-category linking. Sequential interlinking (A-B, B-C, C-D). All link up to target. Target links into one silo page to complete circuit.
  - Key questions:
    - Each page links to only one target?
    - Sequential interlinking?
    - All link up to target?
    - Circuit completed?
    - Links in body content (not sidebar/footer)?
- **Anchor Text Quality** — Descriptive: tell reader where they're going and why. Keyword or variation plus contextual terms WITHIN the hypertext. Google reads inside the link.
  - Key questions:
    - Descriptive anchor text?
    - Contains keyword or variation?
    - Contextual terms inside link?
    - Varied across pages?

#### Decision rules
- IF no silo content, THEN flag missing internal authority, recommend 5-7 supporting pages.
- IF supporting pages link to multiple targets across categories, THEN broken discipline, diluting equity.
- IF links in sidebars/footers instead of body, THEN suboptimal, body links carry silo signal.
- IF WordPress plugins auto-link cross-category, THEN silo integrity risk.
- IF relying on physical silo (URL structure) without body interlinking, THEN no direct ranking benefit.

### E-E-A-T Signal Framework
**Source**: Multiple podcast interviews (Doug Show Oct 2023, Niche Pursuits Mar 2024)

**Purpose**: Are trust/authority/experience signals machine-readable so deliverable survives Google's back-end E-E-A-T check?

E-E-A-T is NOT a direct ranking factor. Back-end check triggered at traffic threshold. Failure causes 'cliff drop' with 6+ month recovery. Signals must be bot-detectable (schema critical, bots miss plain-text ~30% of time). Implementation ~half a day.

#### Components
- **Trust (T). Highest Priority** — Determines if site should be in index. Signals: physical address, local phone, multiple department emails, privacy policy, refunds page, complaints page, contact page, ToS, current copyright.
  - Key questions:
    - Physical address?
    - Local phone + multiple emails?
    - Legal/trust pages present?
    - Current copyright?
    - Directory citations with matching NAP?
- **Authority (A)** — Measured by keywords ranked for. Bigger sites get more 'grace.' Authority builds through compound content.
- **Experience/Expertise (E-E)** — Prove real human responsible. Author bios on every piece with Person schema linking to social profiles. First-person language. Organization schema on homepage. Article schema linking to author.
  - Key questions:
    - Author bio on every piece?
    - Person schema on bio pages?
    - Organization schema on homepage?
    - Article schema linking to author?
    - First-person experience language?
    - Moderated comments/UGC?
- **Site Health and Transaction Integrity** — Fix 404s, broken links, slow loading. Minimize Search Console errors. Complete transactions on-site. Avoid being 'doorway page' funneling users elsewhere.
  - Red flags: Site operates as doorway page ranking for keywords but sending all transactions to another domain.

#### Decision rules
- IF sudden traffic cliff drop, THEN prioritize E-E-A-T audit, likely cause.
- IF new/small site, THEN implement preventively (half day's work).
- IF schema absent, THEN critical, bots miss plain text ~30% of time.
- IF affiliate with no on-site transactions, THEN doorway page risk per Roof's HCU interpretation.
- IF E-E-A-T implemented but no recovery, THEN timeline unknown, may take 1+ year.

### Over/Under Optimization Diagnostic
**Source**: PageOptimizer Pro feature, Kyle Roof algorithm history

**Purpose**: If page scores well on math but isn't performing, is it over-optimized in specific sections?

Page can score 100% yet underperform because individual terms over-used in specific sections while other sections are correctly optimized. Over- and under-optimization coexist on same page. As of ~2024, Google penalizes over-optimization again.

#### Components
- **Over-Optimization Detection** — Check if any term appears too many times in any section relative to competitors.
  - Key questions:
    - Any term significantly exceeding competitor frequency in a section?
    - Keyword-stuffed in one area while sparse in others?
    - High math score but underperforming, over-optimization the cause?

#### Decision rules
- IF high math score AND not ranking, THEN check over-optimization before blaming authority/links.
- IF over-optimization detected, THEN reduce specific terms in specific sections, not globally.
- IF high score + no over-optimization + not ranking, THEN problem is authority tier or missing links.

### Avalanche Theory (Content-Only Authority Strategy)
**Source**: Kyle Roof White Hat SEO course; State of Search/DFWSEM conference

**Purpose**: Does the deliverable exist within a broader content strategy accumulating keyword rankings without depending on backlinks?

Content-only strategy: publish optimized content at right keyword tier, build authority through accumulation. Uses Google's PAA and Related Searches for semantically related pages. Each page should rank for hundreds/thousands of terms, not just one.

#### Components
- **Keyword Tier Targeting** — Start at site's current tier using KGR or similar for quick wins.
  - Key questions:
    - Targeting keyword at current tier?
    - Zero-volume and low-competition terms for accumulation?
    - Deliberate progression from lower to higher tier?
- **Semantic Content Architecture** — PAA for H2 subheadings. Related Searches for additional sections. Structure for multi-keyword ranking.
  - Key questions:
    - H2s from PAA or query data?
    - Addresses related searches?
    - Structured for hundreds of terms, not just primary?

#### Decision rules
- IF new site with no authority, THEN avalanche is recommended start, accumulate before targeting competitive terms.
- IF deliverable exists in isolation, THEN flag missing accumulation strategy.
- IF more keywords ranked, THEN fewer backlinks needed, accumulation IS authority building.
- IF using PAA for H2s, THEN more likely to capture featured snippets and long-tail.

