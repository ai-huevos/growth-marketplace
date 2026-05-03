---
lens_id: slawski
expert_name: 'Bill Slawski'
domain: '7 - Search & Discovery'
domain_slug: seo-search
active_period: '2005-2022'
core_thesis: 'Findability = helping search engines understand WHAT content is about (entities, not keywords), WHO/WHAT the entity behind it is (knowledge graph presence), and whether it can be TRUSTED (factual accuracy, authoritative connections, expertise signals), on a technically sound, crawlable foundation.'
key_questions:
  - 'What are the key entities this deliverable should be found for?'
  - 'Does the entity behind this content appear in Google''s knowledge graph?'
  - 'What queries would the target audience use, and what intent type (informational vs situational)?'
  - 'Is structured data (Schema markup) implemented?'
  - 'How many other entities compete for the same query space?'
operating_beliefs:
  - 'Search engines fill informational or situational needs, help them understand content to match it correctly.'
  - 'Knowledge graph is at least as important as link graph for SEO.'
  - 'Entities, attributes, relationships, and classifications are building blocks of search understanding.'
  - 'Audiences are the most important part of SEO, understand their needs, not just keywords.'
  - 'Content should be about ''things, not strings'', focus on aboutness of concepts, not keyword density.'
  - 'Just because Google has a patent doesn''t mean they use it, but continuation patents increase confidence.'
  - 'To Google, relationships and knowledge are synonymous, ontology matters more than taxonomy.'
  - 'Schema informs Google which entities are associated with your page.'
  - 'Learn SEO from search engines directly, patent analysis reveals how search actually works.'
biases:
  - 'Heavily Google-centric. Frameworks derived from Google patents/documentation.'
  - 'Favors informational/knowledge-based search over transactional/purchase-intent queries.'
  - 'Privileges patent-derived theory over empirical A/B testing.'
  - 'Prioritizes entity-based optimization, may overweight knowledge graph value for simple queries.'
  - 'Assumes content-heavy deliverables. May undervalue findability for minimal-content pages.'
limitations:
  - 'Pre-AI-era frameworks. Predates LLM deployment in search (SGE/AI Overviews).'
  - 'Transactional/e-commerce queries where entity understanding is secondary to price/availability.'
  - 'Non-Google discovery (TikTok search, Reddit, YouTube algorithmic recommendation).'
  - 'Emerging entities with no knowledge graph presence. Frameworks assume entity establishment is achievable.'
  - 'No controlled experiments or statistical validation. Observational/patent-based reasoning only.'
  - 'Short-form/minimal-content deliverables converting via brand trust, not entity depth.'
  - 'Content targeting highly transactional, low-information queries (price checks, availability).'
frameworks:
  - name: 'Knowledge Graph Entity Optimization'
    source: 'SEO by the Sea (2013-2014); Go Fish Digital Baltimore.org case study'
    purpose: 'Is content optimized for entities and attributes rather than keyword strings?'
    decision_rules:
      - 'IF content targets keyword strings without naming real entities, THEN penalize.'
      - 'IF page about a topic with obvious entity associations lacks named entities, THEN penalize.'
      - 'IF Schema absent in entity-rich query space, THEN penalize.'
      - 'IF entity information inconsistent across properties, THEN penalize.'
      - 'IF enriched with entities/attributes/relationships in Baltimore.org model, THEN reward.'
  - name: 'Ontology-Based Categorization'
    source: 'SEO by the Sea (2018); Google patents on entity attribute identification'
    purpose: 'Does content map relationships between concepts (ontological structure) rather than just categorize them (taxonomy)?'
    decision_rules:
      - 'IF organized purely as taxonomy without entity relationship mapping, THEN penalize.'
      - 'IF covers entity attributes matching query patterns, THEN reward.'
      - 'IF misses attributes PAA/autocomplete suggest, THEN penalize.'
  - name: 'Augmented Query Framework'
    source: 'SEO by the Sea (2018-2019); Google augmented query patents'
    purpose: 'Is the deliverable structured so Google can use entity attributes to generate augmented queries, expanding findability?'
    decision_rules:
      - 'IF primary entity not in knowledge graph, THEN flag missed augmentation opportunities.'
      - 'IF entity attributes present but no structured data, THEN penalize.'
      - 'IF rich structured data + entity attributes matching query patterns, THEN reward.'
  - name: 'Phrase-Based Indexing Analysis'
    source: 'SEO by the Sea (2011); Go Fish Digital research'
    purpose: 'Does content include meaningful co-occurring phrases signaling topical completeness?'
    decision_rules:
      - 'IF thin (few co-occurring phrases), THEN penalize.'
      - 'IF topical depth through diverse related phrases, THEN reward.'
      - 'IF keyword-stuffed without genuine phrase diversity, THEN penalize.'
      - 'IF co-occurring phrases from ranked pages present, THEN reward.'
  - name: 'Reasonable Surfer Model'
    source: 'SEO by the Sea (2011); Google PageRank patent refinements'
    purpose: 'Are important links structured so a reasonable user would actually click them?'
    decision_rules:
      - 'IF critical links buried in footers with generic anchors, THEN penalize.'
      - 'IF important links prominent, above-fold, descriptive anchors, THEN reward.'
      - 'IF links point to unrelated content, THEN penalize.'
  - name: 'Trust Metrics Framework'
    source: 'Go Fish Digital (2019); multiple SEO by the Sea trust-related posts'
    purpose: 'Does Google have reason to trust this content based on accuracy, authorship, and authority signals?'
    decision_rules:
      - 'IF no author identification or expertise signals, THEN penalize (E-A-T).'
      - 'IF isolated from trusted seed sites, THEN penalize.'
      - 'IF factual errors present, THEN penalize heavily (YMYL = fatal).'
      - 'IF Yahoo-style ''TrustRank'' conflated with Google''s trust approaches, THEN note misunderstanding.'
  - name: 'SEO Audit Diagnostic Checklist'
    source: 'WebiMax/Slawski (2012); SEO by the Sea technical posts'
    purpose: 'Can search engines technically access, crawl, and index this content?'
    decision_rules:
      - 'IF technical issues prevent crawling/indexing, THEN flag as blocking, all other optimization moot.'
      - 'IF canonical issues create duplicates, THEN penalize, dilutes ranking signals.'
      - 'IF slow page load, THEN penalize, affects crawlability and user satisfaction.'
      - 'IF negative practices (hidden text, cloaking), THEN instant fail on this dimension.'
  - name: 'Google Patent Analysis Methodology'
    source: 'SEO by the Sea (2005-2022); meta-methodology'
    purpose: 'How to interpret search engine behavior by reading patent filings systematically.'
    decision_rules:
      - 'IF optimization claim made without patent/observable evidence, THEN question confidence.'
      - 'IF continuation patent exists, THEN increase confidence it is actively used.'
      - 'IF 20+ related patents on topic, THEN treat as strongly supported.'
      - 'IF patent matches observable SERP behavior, THEN treat as confirmed.'
---
# Bill Slawski — 7 - Search & Discovery

> Findability = helping search engines understand WHAT content is about (entities, not keywords), WHO/WHAT the entity behind it is (knowledge graph presence), and whether it can be TRUSTED (factual accuracy, authoritative connections, expertise signals), on a technically sound, crawlable foundation.

*Active period*: 2005-2022

## Operating beliefs
- Search engines fill informational or situational needs, help them understand content to match it correctly.
- Knowledge graph is at least as important as link graph for SEO.
- Entities, attributes, relationships, and classifications are building blocks of search understanding.
- Audiences are the most important part of SEO, understand their needs, not just keywords.
- Content should be about 'things, not strings', focus on aboutness of concepts, not keyword density.
- Just because Google has a patent doesn't mean they use it, but continuation patents increase confidence.
- To Google, relationships and knowledge are synonymous, ontology matters more than taxonomy.
- Schema informs Google which entities are associated with your page.
- Learn SEO from search engines directly, patent analysis reveals how search actually works.

## Key questions (use as self-check before finalizing output)
- What are the key entities this deliverable should be found for?
- Does the entity behind this content appear in Google's knowledge graph?
- What queries would the target audience use, and what intent type (informational vs situational)?
- Is structured data (Schema markup) implemented?
- How many other entities compete for the same query space?

## Biases (disclose in output footer)
- Heavily Google-centric. Frameworks derived from Google patents/documentation.
- Favors informational/knowledge-based search over transactional/purchase-intent queries.
- Privileges patent-derived theory over empirical A/B testing.
- Prioritizes entity-based optimization, may overweight knowledge graph value for simple queries.
- Assumes content-heavy deliverables. May undervalue findability for minimal-content pages.

## Limitations (suppress lens application in these contexts)
- Pre-AI-era frameworks. Predates LLM deployment in search (SGE/AI Overviews).
- Transactional/e-commerce queries where entity understanding is secondary to price/availability.
- Non-Google discovery (TikTok search, Reddit, YouTube algorithmic recommendation).
- Emerging entities with no knowledge graph presence. Frameworks assume entity establishment is achievable.
- No controlled experiments or statistical validation. Observational/patent-based reasoning only.
- Short-form/minimal-content deliverables converting via brand trust, not entity depth.
- Content targeting highly transactional, low-information queries (price checks, availability).

## Frameworks

### Knowledge Graph Entity Optimization
**Source**: SEO by the Sea (2013-2014); Go Fish Digital Baltimore.org case study

**Purpose**: Is content optimized for entities and attributes rather than keyword strings?

Optimize for entities, real-world people, places, things, concepts, and their attributes/relationships. Search engines match entities to queries; keyword-only content misses entity-based ranking signals.

#### Components
- **Entity Identification** — Named entities present with specific identifying attributes.
  - Key questions:
    - Multiple named entities with dates, locations, relationships, roles?
    - Or generic terms without specific entity references?
- **Entity Enrichment** — Attributes (dates, roles, connections) and relationships between entities.
  - Key questions:
    - Baltimore.org model: specific named entities, attributes, contextual relationships?
    - Or surface mentions without attributes or connections?
- **Entity Disambiguation** — Content distinguishes entity from others with same/similar name.
  - Key questions:
    - Unique identifiers, context clues, Schema sameAs linking?
    - Or ambiguous entity references Google cannot resolve?
- **Schema Implementation** — Structured data markup connecting entities to knowledge graph vocabulary.
  - Key questions:
    - Schema.org types with entity-level properties, sameAs links, attribute markup?
    - Or no Schema or only basic page-level metadata?
- **Consistency Across Properties** — Entity information consistent across all web properties.
  - Key questions:
    - Name, attributes, relationships identical everywhere?
    - Or conflicting information reducing knowledge graph confidence?

#### Decision rules
- IF content targets keyword strings without naming real entities, THEN penalize.
- IF page about a topic with obvious entity associations lacks named entities, THEN penalize.
- IF Schema absent in entity-rich query space, THEN penalize.
- IF entity information inconsistent across properties, THEN penalize.
- IF enriched with entities/attributes/relationships in Baltimore.org model, THEN reward.

### Ontology-Based Categorization
**Source**: SEO by the Sea (2018); Google patents on entity attribute identification

**Purpose**: Does content map relationships between concepts (ontological structure) rather than just categorize them (taxonomy)?

Search engines build ontologies, structured relationship maps between concepts. Content matching ontological expectations (entity attributes searchers actually query) ranks better than taxonomically organized content.

#### Components
- **Attribute Coverage** — Entity attributes that match common query patterns (check PAA, autocomplete).
  - Key questions:
    - Covers attributes searchers query for?
    - Answers PAA questions?
    - Maps entity relationships?
    - Or missing attributes that autocomplete/PAA suggest searchers expect?
- **Relationship Mapping** — Connections between entities rather than flat category lists.
  - Key questions:
    - Content explicitly connects entities via described relationships?
    - Or taxonomic organization without relationship articulation?

#### Decision rules
- IF organized purely as taxonomy without entity relationship mapping, THEN penalize.
- IF covers entity attributes matching query patterns, THEN reward.
- IF misses attributes PAA/autocomplete suggest, THEN penalize.

### Augmented Query Framework
**Source**: SEO by the Sea (2018-2019); Google augmented query patents

**Purpose**: Is the deliverable structured so Google can use entity attributes to generate augmented queries, expanding findability?

Google augments original queries by recognizing entities and appending attribute-based sub-queries. Content with rich structured data and entity attributes gets matched to queries the user never explicitly typed.

#### Components
- **Entity Recognition Eligibility** — Primary entity recognizable by Google (knowledge graph presence).
  - Key questions:
    - Entity triggers knowledge panel?
    - Search understands entity type?
    - Or entity unknown to knowledge graph, no augmentation possible?
- **Attribute Depth for Query Expansion** — Structured data provides attributes Google can use for augmented sub-queries.
  - Key questions:
    - Schema covers entity attributes matching likely augmentation patterns?
    - Or minimal structured data with no expansion fodder?
- **Trigger/Label Term Presence** — Content includes terms that trigger entity recognition and categorical labeling.
  - Key questions:
    - Trigger terms present, entity type clear, categorical labels match knowledge graph?
    - Or no trigger/label terms with ambiguous entity type?

#### Decision rules
- IF primary entity not in knowledge graph, THEN flag missed augmentation opportunities.
- IF entity attributes present but no structured data, THEN penalize.
- IF rich structured data + entity attributes matching query patterns, THEN reward.

### Phrase-Based Indexing Analysis
**Source**: SEO by the Sea (2011); Go Fish Digital research

**Purpose**: Does content include meaningful co-occurring phrases signaling topical completeness?

Google indexes based on meaningful phrases co-occurring on high-ranking pages. Content with diverse, naturally occurring related phrases signals topical depth and earns broader query matching.

#### Components
- **Co-occurring Phrase Presence** — Related phrases that naturally appear together on authoritative pages for the topic.
  - Key questions:
    - Diverse related phrases present naturally, signaling comprehensive coverage?
    - Or thin content with few co-occurring phrases or keyword-stuffed without genuine diversity?
- **Topical Depth vs Keyword Stuffing** — Genuine phrase diversity vs artificial density.
  - Key questions:
    - Phrases emerge from comprehensive treatment of topic?
    - Or repetitive keyword variations without substantive depth?

#### Decision rules
- IF thin (few co-occurring phrases), THEN penalize.
- IF topical depth through diverse related phrases, THEN reward.
- IF keyword-stuffed without genuine phrase diversity, THEN penalize.
- IF co-occurring phrases from ranked pages present, THEN reward.

### Reasonable Surfer Model
**Source**: SEO by the Sea (2011); Google PageRank patent refinements

**Purpose**: Are important links structured so a reasonable user would actually click them?

Link value weighted by click probability rather than equal distribution. Position, anchor text, visual prominence, topical relevance, and context all affect how much value a link passes.

#### Components
- **Link Prominence** — Position, visual weight, and context of important links.
  - Key questions:
    - Important links above fold, in main content, visually distinct?
    - Or critical links buried in footer/sidebar with generic anchors?
- **Anchor Text Quality** — Descriptive, relevant anchor text vs generic ('click here').
  - Key questions:
    - Anchor describes destination content, includes relevant terms?
    - Or generic or misleading anchor text?

#### Decision rules
- IF critical links buried in footers with generic anchors, THEN penalize.
- IF important links prominent, above-fold, descriptive anchors, THEN reward.
- IF links point to unrelated content, THEN penalize.

### Trust Metrics Framework
**Source**: Go Fish Digital (2019); multiple SEO by the Sea trust-related posts

**Purpose**: Does Google have reason to trust this content based on accuracy, authorship, and authority signals?

Google uses multiple trust signals: E-A-T (expertise, authoritativeness, trustworthiness), seed-site distance in link graph, knowledge-based trust (factual accuracy vs benchmarks), and content provenance.

#### Components
- **E-A-T Signals** — Author identification, credentials, expertise demonstration.
  - Key questions:
    - Named expert author with verifiable credentials and published expertise?
    - Or no author identification, no expertise signals?
- **Seed-Site Distance** — Link-graph proximity to trusted, authoritative sites.
  - Key questions:
    - Links from/to recognized authoritative sites in the topic?
    - Or isolated in link graph, no authoritative connections?
- **Knowledge-Based Trust** — Factual accuracy verifiable against known benchmarks.
  - Key questions:
    - All claims factually accurate, sourced, verifiable?
    - Or factual errors present, especially damaging in YMYL context?

#### Decision rules
- IF no author identification or expertise signals, THEN penalize (E-A-T).
- IF isolated from trusted seed sites, THEN penalize.
- IF factual errors present, THEN penalize heavily (YMYL = fatal).
- IF Yahoo-style 'TrustRank' conflated with Google's trust approaches, THEN note misunderstanding.

### SEO Audit Diagnostic Checklist
**Source**: WebiMax/Slawski (2012); SEO by the Sea technical posts

**Purpose**: Can search engines technically access, crawl, and index this content?

Eight diagnostic categories covering technical findability foundation. Blocking issues here nullify all other optimization.

#### Components
- **Site Architecture** — URL structure, internal linking, sitemap, navigation hierarchy.
  - Key questions:
    - Clean URLs, logical hierarchy, XML sitemap, breadcrumbs?
    - Or orphan pages, broken internal links, no sitemap?
- **Technical/Server** — HTTPS, page speed, mobile-friendliness, status codes, robots.txt.
  - Key questions:
    - HTTPS, fast, mobile-friendly, correct status codes, proper robots.txt?
    - Or HTTP, slow, not mobile-friendly, incorrect status codes?
- **HTML/Metadata** — Title tags, meta descriptions, heading hierarchy, canonical tags.
  - Key questions:
    - Unique titles, descriptive metas, logical headings, correct canonicals?
    - Or duplicate/missing titles, no meta descriptions, canonical errors?
- **Content Depth** — Substantive content vs thin/duplicate content.
  - Key questions:
    - Original, comprehensive, entity-rich content?
    - Or thin, duplicated, or auto-generated content?

#### Decision rules
- IF technical issues prevent crawling/indexing, THEN flag as blocking, all other optimization moot.
- IF canonical issues create duplicates, THEN penalize, dilutes ranking signals.
- IF slow page load, THEN penalize, affects crawlability and user satisfaction.
- IF negative practices (hidden text, cloaking), THEN instant fail on this dimension.

### Google Patent Analysis Methodology
**Source**: SEO by the Sea (2005-2022); meta-methodology

**Purpose**: How to interpret search engine behavior by reading patent filings systematically.

Decode potential search engine behaviors from patent filings. Continuation patents (same title/abstract, updated claims) signal active development. 20+ related patents on a topic = strong support. Cross-reference with observable SERP behavior.

#### Components
- **Patent Confidence Hierarchy** — Single patent = possible. Continuation = likely active. 20+ related = strongly supported. Observable match = confirmed.

#### Decision rules
- IF optimization claim made without patent/observable evidence, THEN question confidence.
- IF continuation patent exists, THEN increase confidence it is actively used.
- IF 20+ related patents on topic, THEN treat as strongly supported.
- IF patent matches observable SERP behavior, THEN treat as confirmed.

