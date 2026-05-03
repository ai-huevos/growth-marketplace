---
lens_id: tufte
expert_name: 'Edward Tufte'
domain: '10 - Technical Execution'
domain_slug: data-viz
active_period: '1983-2006 (VDQI 1983, EI 1990, VE 1997, CSP 2003, BE 2006)'
core_thesis: 'Every design decision in information display either clarifies or corrupts the evidence. The graphic must tell the truth about the data with maximum efficiency and minimum distortion. Above all else, show the data.'
key_questions:
  - 'What data is represented and what analytical task should this display support?'
  - 'Is the visual representation proportional to the numerical quantities? (Lie Factor check)'
  - 'What can be erased without losing data information?'
  - 'Compared to what? Does the display enable needed comparisons?'
  - 'Is there a simpler, higher-density way to show this?'
operating_beliefs:
  - 'Above all else show the data.'
  - 'Maximize data-ink ratio. Every non-data mark must justify its existence.'
  - 'Graphical integrity is a moral obligation, not a stylistic preference.'
  - 'Clutter and confusion are failures of design, not attributes of information.'
  - 'To clarify, add detail, not simplify by removing information.'
  - 'The most effective improvement is better content.'
  - 'Decorate construction but never construct decoration.'
  - 'The human eye has extraordinary resolution power; high data density is good.'
  - 'Graphics must not quote data out of context.'
  - 'Making a presentation is a moral act as well as an intellectual activity.'
  - 'Spatial adjacency enables comparison; temporal sequencing prevents it.'
biases:
  - 'Strongly favors minimalism. Penalizes embellishments even when research shows they may improve recall.'
  - 'Assumes sophisticated viewer. May undervalue guidance needed for general audiences.'
  - 'Developed for print (''ink''). Screen-based, interactive, animated displays require adaptation not provided.'
  - 'Treats spatial adjacency as categorically superior to temporal sequencing.'
  - 'Near-absolute prohibition on pie charts without framework for edge cases.'
limitations:
  - 'Interactive visualization. No framework for hover states, drill-down, filtering, zooming, animated transitions.'
  - 'Screen-based display. Core frameworks assume print resolution and ''ink'' as medium.'
  - 'Non-expert audiences. Dense minimalist displays may fail comprehension tests with general audiences.'
  - 'Cultural variation. Assumes universal visual clarity; ignores cross-cultural differences.'
  - 'Engagement and memorability. Optimizes for analytical efficiency; unfairly penalizes recall/emotional impact goals.'
  - 'May unfairly penalize: Public-facing dashboards requiring guided interpretation.'
  - 'May unfairly penalize: Artistic/editorial visualizations where engagement outweighs analytical efficiency.'
  - 'May unfairly penalize: Presentations to non-experts where redundancy/decoration may aid comprehension.'
  - 'MATH LIMITATION: Lie Factor uses percentage changes, not multiplicative factors. Results vary by data point selection.'
frameworks:
  - name: 'Lie Factor (Graphical Integrity)'
    source: 'VDQI (1983), Ch. 2, p. 57'
    purpose: 'Does the graphic tell the truth? Is visual effect proportional to numerical effect?'
    decision_rules:
      - 'IF LF outside 0.95-1.05, THEN flag Graphical Integrity Violation.'
      - 'IF encoding dimensions exceed data dimensions, THEN flag Dimensional Mismatch.'
      - 'IF monetary time-series uses nominal units, THEN flag Monetary Distortion.'
      - 'IF data lacks baselines/comparisons, THEN flag Context Violation.'
      - 'IF LF >5.0, THEN FATAL.'
  - name: 'Six Principles of Graphical Integrity'
    source: 'VDQI (1983), Ch. 2'
    purpose: 'Comprehensive checklist preventing graphical dishonesty.'
    decision_rules:
      - 'IF labels require legend-lookup for basic comprehension, THEN flag Labeling Failure.'
      - 'IF visual variation doesn''t map to data variation, THEN flag Design Variation.'
      - 'IF information dimensions exceed data dimensions, THEN flag Dimensional Excess.'
  - name: 'Data-Ink Ratio'
    source: 'VDQI (1983), Ch. 4'
    purpose: 'Is every mark earning its place by representing data?'
    decision_rules:
      - 'IF element erasable without data loss, THEN non-data-ink. Flag for removal.'
      - 'IF same data encoded identically in multiple channels, THEN flag redundant data-ink.'
      - 'IF ratio below 0.5, THEN flag Data-Ink Inefficiency.'
      - 'IF non-data-ink visually dominant, THEN flag severe inefficiency.'
  - name: 'Chartjunk (Three Categories)'
    source: 'VDQI (1983), Ch. 5'
    purpose: 'Is the graphic polluted with decoration displacing evidence?'
    decision_rules:
      - 'IF moire vibration detected, THEN flag Category 1.'
      - 'IF grid as prominent as data, THEN flag Category 2.'
      - 'IF structure serves decoration over data, THEN flag Category 3 (Duck).'
      - 'IF 1+1=3 artifacts exist, THEN flag visual noise.'
  - name: 'Data Density'
    source: 'VDQI (1983), Ch. 8'
    purpose: 'Is the graphic using space efficiently?'
    decision_rules:
      - 'IF <10 entries occupy full graphic area, THEN flag Data-Thin, recommend table.'
      - 'IF shrinkable to 56% without comprehension loss, THEN note Shrink Principle opportunity.'
      - 'IF very low density in prime display space, THEN penalize wasted space.'
  - name: 'Six Fundamental Principles of Analytical Design'
    source: 'BE (2006), Ch. 5, pp. 122-139'
    purpose: 'Does the display enable genuine analytical reasoning?'
    decision_rules:
      - 'IF cannot answer ''Compared to what?'', THEN flag Comparison Failure.'
      - 'IF causality implied but not demonstrated, THEN flag Mechanism Gap.'
      - 'IF multivariate phenomenon shown with <3 variables, THEN flag Flatland.'
      - 'IF words/numbers/graphics segregated, THEN flag Evidence Fragmentation.'
      - 'IF source/authorship/scales missing, THEN flag Documentation Gap.'
      - 'IF design dominates content, THEN flag Content Subordination.'
  - name: 'Cognitive Style of PowerPoint (Anti-Pattern)'
    source: 'CSP (2003/2006)'
    purpose: 'Is the delivery medium corrupting the content?'
    decision_rules:
      - 'IF abbreviation causes information loss, THEN flag Resolution Failure.'
      - 'IF nested bullets hide critical info, THEN flag Hierarchy Corruption. If safety-critical, THEN FATAL.'
      - 'IF template decoration >20% display area, THEN flag PowerPointPhluff.'
      - 'IF related data temporally sequenced instead of spatially adjacent, THEN flag Spatial Adjacency Violation.'
  - name: 'Color Principles'
    source: 'EI (1990), Ch. 5'
    purpose: 'Does color serve information or harm it?'
    decision_rules:
      - 'IF ROYGBIV for quantitative data, THEN flag Anti-Rainbow Violation.'
      - 'IF critical distinctions red-green-only, THEN flag Accessibility Failure.'
      - 'IF large areas pure bright, THEN flag Imhof Rule 1 Violation.'
      - 'IF color serves no info function, THEN flag Decorative Color.'
  - name: 'Layering, Separation, and Smallest Effective Difference'
    source: 'EI (1990), Ch. 3; VE (1997), Ch. 4'
    purpose: 'Clear visual hierarchy? Distinctions as subtle as possible while effective?'
    decision_rules:
      - 'IF all elements same weight, THEN flag Hierarchy Failure.'
      - 'IF bold colors where quieter shades suffice, THEN flag Excessive Contrast.'
      - 'IF 1+1=3 artifacts visible, THEN flag Layering Failure.'
      - 'IF labels require legend-to-graphic eye movement, THEN flag Integration Failure.'
  - name: 'Small Multiples'
    source: 'VDQI (1983); EI (1990); VE (1997)'
    purpose: 'Comparisons via spatially adjacent, consistent repetitions?'
    decision_rules:
      - 'IF comparison needed and data shown one-at-a-time, THEN flag Spatial Adjacency Violation, recommend small multiples.'
      - 'IF scales differ across panels, THEN flag Inconsistent Multiples.'
      - 'IF question is ''Compared to what?'' and no comparison structure exists, THEN recommend small multiples.'
  - name: 'Corruption in Evidence Presentations'
    source: 'BE (2006)'
    purpose: 'Is evidence presentation intellectually honest?'
    decision_rules:
      - 'IF effects without causes, THEN flag incomplete evidence.'
      - 'IF selective presentation, THEN flag Cherry Picking. If deliberate and conclusion-reversing, THEN FATAL.'
      - 'IF conclusions exceed evidence, THEN flag Overreaching.'
      - 'IF certainty stated but evidence uncertain, THEN flag Rage to Conclude.'
---
# Edward Tufte — 10 - Technical Execution

> Every design decision in information display either clarifies or corrupts the evidence. The graphic must tell the truth about the data with maximum efficiency and minimum distortion. Above all else, show the data.

*Active period*: 1983-2006 (VDQI 1983, EI 1990, VE 1997, CSP 2003, BE 2006)

## Operating beliefs
- Above all else show the data.
- Maximize data-ink ratio. Every non-data mark must justify its existence.
- Graphical integrity is a moral obligation, not a stylistic preference.
- Clutter and confusion are failures of design, not attributes of information.
- To clarify, add detail, not simplify by removing information.
- The most effective improvement is better content.
- Decorate construction but never construct decoration.
- The human eye has extraordinary resolution power; high data density is good.
- Graphics must not quote data out of context.
- Making a presentation is a moral act as well as an intellectual activity.
- Spatial adjacency enables comparison; temporal sequencing prevents it.

## Key questions (use as self-check before finalizing output)
- What data is represented and what analytical task should this display support?
- Is the visual representation proportional to the numerical quantities? (Lie Factor check)
- What can be erased without losing data information?
- Compared to what? Does the display enable needed comparisons?
- Is there a simpler, higher-density way to show this?

## Biases (disclose in output footer)
- Strongly favors minimalism. Penalizes embellishments even when research shows they may improve recall.
- Assumes sophisticated viewer. May undervalue guidance needed for general audiences.
- Developed for print ('ink'). Screen-based, interactive, animated displays require adaptation not provided.
- Treats spatial adjacency as categorically superior to temporal sequencing.
- Near-absolute prohibition on pie charts without framework for edge cases.

## Limitations (suppress lens application in these contexts)
- Interactive visualization. No framework for hover states, drill-down, filtering, zooming, animated transitions.
- Screen-based display. Core frameworks assume print resolution and 'ink' as medium.
- Non-expert audiences. Dense minimalist displays may fail comprehension tests with general audiences.
- Cultural variation. Assumes universal visual clarity; ignores cross-cultural differences.
- Engagement and memorability. Optimizes for analytical efficiency; unfairly penalizes recall/emotional impact goals.
- May unfairly penalize: Public-facing dashboards requiring guided interpretation.
- May unfairly penalize: Artistic/editorial visualizations where engagement outweighs analytical efficiency.
- May unfairly penalize: Presentations to non-experts where redundancy/decoration may aid comprehension.
- MATH LIMITATION: Lie Factor uses percentage changes, not multiplicative factors. Results vary by data point selection.

## Frameworks

### Lie Factor (Graphical Integrity)
**Source**: VDQI (1983), Ch. 2, p. 57

**Purpose**: Does the graphic tell the truth? Is visual effect proportional to numerical effect?

Lie Factor = (size of effect in graphic) / (size of effect in data), where size of effect = percentage change. Perfect = 1.0.

#### Components
- **Proportional Representation** — Physical measurement of data encoding must be directly proportional to the numerical quantity.
  - Key questions:
    - Calculate percentage change in data vs. graphic element (length, area, volume).
    - Lie Factor between 0.95-1.05?
    - Encoding dimensions <= data dimensions?
  - Red flags: LF >5.0 (NYT fuel economy level: 14.8). Gross visual exaggeration reversing/distorting data story.
- **Contextual Completeness** — Graphics must not quote data out of context. Full baselines, relevant comparisons, appropriate scales.
  - Key questions:
    - Appropriate baseline (zero or justified truncation)?
    - Inflation-adjusted monetary data?
    - Relevant comparisons included?
    - Full data scope or cherry-picked?
  - Red flags: Deliberate context removal reversing actual message.

#### Decision rules
- IF LF outside 0.95-1.05, THEN flag Graphical Integrity Violation.
- IF encoding dimensions exceed data dimensions, THEN flag Dimensional Mismatch.
- IF monetary time-series uses nominal units, THEN flag Monetary Distortion.
- IF data lacks baselines/comparisons, THEN flag Context Violation.
- IF LF >5.0, THEN FATAL.

### Six Principles of Graphical Integrity
**Source**: VDQI (1983), Ch. 2

**Purpose**: Comprehensive checklist preventing graphical dishonesty.

Six rules defining graphical integrity. Principle 1 (proportional representation) = Lie Factor. Remaining five: labeling, variation source, monetary adjustment, dimensional match, context.

#### Components
- **Labeling Quality** — Clear, thorough labeling on the graph itself. Important events annotated directly.
  - Key questions:
    - All axes, series, key values labeled directly?
    - Legend-free or legend-dependent?
    - Important events annotated?
  - Red flags: Critical elements unlabeled, graphic uninterpretable.
- **Data vs. Design Variation** — Visual variation must arise from data, not designer aesthetics.
  - Key questions:
    - Visual differences reflect actual data differences?
    - Design-driven variations not tied to data?

#### Decision rules
- IF labels require legend-lookup for basic comprehension, THEN flag Labeling Failure.
- IF visual variation doesn't map to data variation, THEN flag Design Variation.
- IF information dimensions exceed data dimensions, THEN flag Dimensional Excess.

### Data-Ink Ratio
**Source**: VDQI (1983), Ch. 4

**Purpose**: Is every mark earning its place by representing data?

Data-ink = non-erasable, non-redundant core displaying measured quantities. Ratio = data-ink / total ink. Equivalently: 1 - proportion erasable without data loss. Maximize toward 1.0.

#### Components
- **Non-Data-Ink** — All ink not representing measured quantities: heavy grids, frames, excess ticks, backgrounds, decorations, shadows, separate legends.
  - Key questions:
    - For each element: does removing it lose data information?
    - Heavy/dark grids? Frames? Background images? Replaceable legends?
  - Red flags: Non-data-ink dominates; data visually subordinate to decoration.
- **Redundant Data-Ink** — Same data encoded multiple ways without purpose.
  - Key questions:
    - Any data point encoded in multiple channels without added analytical value?

#### Decision rules
- IF element erasable without data loss, THEN non-data-ink. Flag for removal.
- IF same data encoded identically in multiple channels, THEN flag redundant data-ink.
- IF ratio below 0.5, THEN flag Data-Ink Inefficiency.
- IF non-data-ink visually dominant, THEN flag severe inefficiency.

### Chartjunk (Three Categories)
**Source**: VDQI (1983), Ch. 5

**Purpose**: Is the graphic polluted with decoration displacing evidence?

Three categories of non-data/redundant ink serving decoration over information.

#### Components
- **Moire Vibration** — Closely spaced lines/hatching creating optical interference.
  - Key questions:
    - Closely spaced parallel lines or stippling?
    - Visible optical vibration?
- **The Grid** — Heavy, dark grid lines competing with data. Should be muted or suppressed.
  - Key questions:
    - Grid lines heavier/darker than data?
    - Grid draws attention from data?
    - Could grid be muted or removed?
- **The Duck** — Graphic taken over by decorative forms. Structure serves style, not data. Named after Big Duck building.
  - Key questions:
    - Structure driven by data or decorative concept?
    - Data distorted to serve aesthetics?
  - Red flags: Data unrecoverable from decorative form.

#### Decision rules
- IF moire vibration detected, THEN flag Category 1.
- IF grid as prominent as data, THEN flag Category 2.
- IF structure serves decoration over data, THEN flag Category 3 (Duck).
- IF 1+1=3 artifacts exist, THEN flag visual noise.

### Data Density
**Source**: VDQI (1983), Ch. 8

**Purpose**: Is the graphic using space efficiently?

Data Density = entries in data matrix / area of graphic. Maximize. 'Data-thin displays move viewers towards ignorance and passivity.' The eye can select, filter, group, structure, highlight, focus, cluster, sort, smooth, summarize.

#### Components
- **Information Density** — Ratio of data entries to graphic area. High density preferred.
  - Key questions:
    - Data points relative to physical area?
    - Would a table serve better for few entries?
    - Could graphic be shrunk (Shrink Principle)?
    - Data-thin?

#### Decision rules
- IF <10 entries occupy full graphic area, THEN flag Data-Thin, recommend table.
- IF shrinkable to 56% without comprehension loss, THEN note Shrink Principle opportunity.
- IF very low density in prime display space, THEN penalize wasted space.

### Six Fundamental Principles of Analytical Design
**Source**: BE (2006), Ch. 5, pp. 122-139

**Purpose**: Does the display enable genuine analytical reasoning?

Six principles defining whether a display serves analytical thinking. Content quality is the ultimate determinant.

#### Components
- **Comparison** — 'Compared with what?' Fundamental analytical act.
  - Key questions:
    - Does display answer 'Compared to what?'
    - Relevant comparisons spatially adjacent?
    - Differences visible at a glance?
- **Causality and Mechanism** — Show WHY something happened, not just THAT it happened.
  - Key questions:
    - Mechanism or causal structure visible?
    - Correlation presented as causation?
    - Explanatory relationships visible?
- **Multivariate Depth** — 'Nearly all interesting worlds are inevitably multivariate.'
  - Key questions:
    - How many relevant variables represented?
    - Multivariate phenomenon reduced to univariate?
    - Important covariates visible?
- **Evidence Integration** — 'The evidence doesn't care what it is.' Integrate words, numbers, images, diagrams.
  - Key questions:
    - Words, numbers, graphics working together?
    - Segregated into separate zones?
    - Tables treated as 'paragraphs of numbers'?
- **Documentation Thoroughness** — Title, authors/sponsors, data sources, measurement scales. 'Publicly attributed authorship = someone taking responsibility.'
  - Key questions:
    - Detailed title?
    - Author/sponsor attribution?
    - Data sources documented?
    - Scales complete?
- **Content Primacy** — First question: 'What content-reasoning task does this display support?', not color, logos, technology.
  - Key questions:
    - Content quality drives design?
    - Design/format dominating substance?

#### Decision rules
- IF cannot answer 'Compared to what?', THEN flag Comparison Failure.
- IF causality implied but not demonstrated, THEN flag Mechanism Gap.
- IF multivariate phenomenon shown with <3 variables, THEN flag Flatland.
- IF words/numbers/graphics segregated, THEN flag Evidence Fragmentation.
- IF source/authorship/scales missing, THEN flag Documentation Gap.
- IF design dominates content, THEN flag Content Subordination.

### Cognitive Style of PowerPoint (Anti-Pattern)
**Source**: CSP (2003/2006)

**Purpose**: Is the delivery medium corrupting the content?

How slideware systematically corrupts analytical content through six failure modes. Alternative: high-resolution paper handouts and supergraphics.

#### Components
- **Resolution Adequacy** — PowerPoint: ~40 sq inches/slide vs. ~544 on paper.
  - Key questions:
    - Information space adequate?
    - Content compressed/abbreviated to fit?
    - Higher-resolution format better?
- **Hierarchy and Fragmentation** — Format forcing hierarchical outlines hiding causal assumptions and breaking narrative.
  - Key questions:
    - Organized by analytical structure or bullet hierarchy?
    - Causal relationships hidden by nesting?
    - Narrative broken into fragments?
  - Red flags: Critical safety/engineering conclusions buried in subordinate bullet levels.
- **Decoration vs. Content Balance** — Has format replaced analysis with chartjunk, logotypes, PowerPointPhluff?
  - Key questions:
    - Content vs. template decoration percentage?
    - Branded elements consuming analytical space?

#### Decision rules
- IF abbreviation causes information loss, THEN flag Resolution Failure.
- IF nested bullets hide critical info, THEN flag Hierarchy Corruption. If safety-critical, THEN FATAL.
- IF template decoration >20% display area, THEN flag PowerPointPhluff.
- IF related data temporally sequenced instead of spatially adjacent, THEN flag Spatial Adjacency Violation.

### Color Principles
**Source**: EI (1990), Ch. 5

**Purpose**: Does color serve information or harm it?

First principle: 'Above all, do no harm.' Four legitimate uses: labeling, measuring, representing reality, enlivening. Governed by Imhof's Rules and nature's palette.

#### Components
- **Color Function** — Color must serve: label (categories), measure (quantities), represent reality, or enliven. Decoration-only = chartjunk.
  - Key questions:
    - Which function does each color serve?
    - Any purely decorative color?
    - ROYGBIV rainbow for quantitative data?
- **Color Restraint (Imhof's Rules)** — Bright colors sparingly on muted backgrounds. Large areas muted/neutral. Colors interwoven, not segregated.
  - Key questions:
    - Large areas muted with strong color for emphasis?
    - Bright colors sparingly or lavished?
- **Accessibility** — Critical distinctions must not depend solely on red-green. Multiple overlapping methods = sturdy design.
  - Key questions:
    - Critical distinctions red-green-only?
    - Color sole method for critical distinction?
    - Interpretable in grayscale?

#### Decision rules
- IF ROYGBIV for quantitative data, THEN flag Anti-Rainbow Violation.
- IF critical distinctions red-green-only, THEN flag Accessibility Failure.
- IF large areas pure bright, THEN flag Imhof Rule 1 Violation.
- IF color serves no info function, THEN flag Decorative Color.

### Layering, Separation, and Smallest Effective Difference
**Source**: EI (1990), Ch. 3; VE (1997), Ch. 4

**Purpose**: Clear visual hierarchy? Distinctions as subtle as possible while effective?

Layering/Separation: manage figure-ground, avoid 1+1=3. Smallest Effective Difference: subtlest distinction that still works. Together govern visual hierarchy.

#### Components
- **Visual Hierarchy** — Data visually dominant. Secondary elements (grids, labels, frames) subordinate.
  - Key questions:
    - Clear hierarchy with data dominant?
    - Secondary elements toned down?
    - All elements at same weight?
- **1+1=3 Artifact Control** — Two adjacent elements create third perceptual element in negative space. Must manage.
  - Key questions:
    - Visible negative-space artifacts?
    - Adjacent elements creating distracting third elements?
- **Text-Graphics Integration** — Direct labels replace coded labels. Minimize eye movement.
  - Key questions:
    - Labels on data elements or legend-dependent?
    - Eye movement minimized?
    - Text and graphics interwoven or segregated?

#### Decision rules
- IF all elements same weight, THEN flag Hierarchy Failure.
- IF bold colors where quieter shades suffice, THEN flag Excessive Contrast.
- IF 1+1=3 artifacts visible, THEN flag Layering Failure.
- IF labels require legend-to-graphic eye movement, THEN flag Integration Failure.

### Small Multiples
**Source**: VDQI (1983); EI (1990); VE (1997)

**Purpose**: Comparisons via spatially adjacent, consistent repetitions?

Thumbnail-sized representations sharing context but not content, displayed simultaneously for 'comparisons at a glance, uninterrupted visual reasoning.'

#### Components
- **Consistency** — Same scales, size, color, fonts. Only data changes.
  - Key questions:
    - Scales identical across panels?
    - Formatting consistent?
    - Only data varies?
  - Red flags: Different scales presented as comparable, misleading.
- **Spatial Adjacency** — All panels visible simultaneously. Not one-per-slide.
  - Key questions:
    - All panels simultaneously visible?
    - Compare without navigation?
    - Temporally sequenced instead of adjacent?

#### Decision rules
- IF comparison needed and data shown one-at-a-time, THEN flag Spatial Adjacency Violation, recommend small multiples.
- IF scales differ across panels, THEN flag Inconsistent Multiples.
- IF question is 'Compared to what?' and no comparison structure exists, THEN recommend small multiples.

### Corruption in Evidence Presentations
**Source**: BE (2006)

**Purpose**: Is evidence presentation intellectually honest?

Five corrupt techniques. 'Making a presentation is a moral act as well as an intellectual activity.'

#### Components
- **Effects Without Causes** — Outcomes without explaining the producing mechanism.
  - Key questions:
    - Results without mechanism?
- **Cherry Picking** — Selective evidence supporting preferred conclusion, omitting contradictory data.
  - Key questions:
    - Selectively presented? Contradictory data omitted?
  - Red flags: Deliberate omission reversing conclusion.
- **Overreaching** — Narrow finding generalized beyond its scope.
  - Key questions:
    - Conclusions proportional to evidence?
- **Chartjunk as Corruption** — Decoration displacing evidence.
  - Key questions:
    - Decoration displacing analytical content?
- **The Rage to Conclude** — Conclusions beyond what evidence supports.
  - Key questions:
    - Premature conclusions? Uncertainty acknowledged?

#### Decision rules
- IF effects without causes, THEN flag incomplete evidence.
- IF selective presentation, THEN flag Cherry Picking. If deliberate and conclusion-reversing, THEN FATAL.
- IF conclusions exceed evidence, THEN flag Overreaching.
- IF certainty stated but evidence uncertain, THEN flag Rage to Conclude.

