# Domain Extraction Playbook

## Purpose
Extract the operating domain from user input — verbal description, source materials, or existing documentation — and produce a structured Domain Brief that anchors all subsequent agent generation.

---

## The Six Extraction Questions

Ask these in order. Skip any the user has already answered in their initial request.

### 1. Purpose — What does this agent DO?
Target: a single sentence starting with a verb.

**Probing if vague:**
- "What is the ONE deliverable this agent produces?"
- "If this agent did its job perfectly, what artifact would the user hold at the end?"
- "What verb best describes the transformation: extract, analyze, generate, validate, convert, decompose?"

**Quality test:** Can you fill in: "This agent [verbs] [input] into [output] using [method]"? If not, keep narrowing.

### 2. Inputs — What does it receive?
Target: specific data types with format expectations.

**Common input types:**
| Type | Examples | Format considerations |
|------|---------|---------------------|
| Text documents | Transcripts, reports, specs, emails | Length, structure, language |
| Structured data | CSV, JSON, database exports | Schema, size, quality |
| Code | Source files, repos, configs | Language, framework, size |
| Media | Images, audio, video | Format, duration, resolution |
| Conversations | Chat logs, meeting notes | Speaker attribution, chronology |
| Requirements | User stories, feature requests | Completeness, formality |

**Probing if unclear:**
- "Walk me through what happens right before someone uses this agent. What do they have in hand?"
- "Is the input always the same format, or does the agent handle multiple input types?"

### 3. Outputs — What does it produce?
Target: specific deliverables with format and quality expectations.

**Probing if vague:**
- "What does the user DO with the output? That tells us the format."
- "Who reads/uses the output? Engineers? Executives? Customers?"
- "Is the output a single artifact or a bundle (e.g., a PRD + Epics + User Stories)?"

**Quality test:** Can you describe the output file(s) with specific section headings? If not, the output is underspecified.

### 4. Domain Expertise — What frameworks/methodologies does it encode?
Target: named methodologies, standards, frameworks, or proprietary processes.

**Probing if unclear:**
- "Are there established methodologies in this field? (e.g., Lean, SCRUM, Customer Development)"
- "Is there a book, standard, or framework this agent should follow?"
- "Does your organization have a proprietary process for this? Describe the steps."

**What to extract from source materials:**
If user provides books/docs/methodologies:
1. Core principles (what the methodology believes)
2. Process steps (what it prescribes)
3. Evaluation criteria (what "good" looks like)
4. Common failure modes (what it warns against)
5. Terminology (domain-specific vocabulary)

### 5. Validation Gates — Where does the user need to approve?
Target: specific decision points where the agent pauses for human input.

**Common gate patterns:**
| Pattern | When to use |
|---------|------------|
| Classification gate | Agent must categorize before proceeding (greenfield/brownfield) |
| Extraction gate | Agent presents parsed data for verification before analysis |
| Draft gate | Agent presents draft output before finalizing |
| Quality gate | Agent scores output and presents score before delivery |
| Decomposition gate | Agent breaks down a large artifact and presents structure for approval |

**Probing if unclear:**
- "At what point would bad output be most expensive to fix? Put a gate BEFORE that point."
- "Where in the process does human judgment matter most?"
- "Are there compliance or regulatory review requirements?"

**Rule:** Every agent must have at least ONE gate. Zero-gate agents are uncontrolled generators.

### 6. Failure Modes — What does bad output look like?
Target: specific descriptions of unacceptable output.

**Probing if vague:**
- "What's the worst output this agent could produce? What makes it dangerous or useless?"
- "What would an expert immediately flag as wrong?"
- "What does 'generic AI output' look like in this domain?"

**What to capture:**
- Content failures: wrong information, missing critical elements, hallucinated data
- Structure failures: disorganized, inconsistent formatting, missing sections
- Tone/voice failures: wrong register, inappropriate for audience
- Methodology failures: steps out of order, frameworks incorrectly applied
- Scope failures: too broad, too narrow, off-topic tangents

---

## Source Material Processing

When the user provides books, docs, or reference materials:

### Step 1: Extract Operating Principles
Read the material. Identify the 5-10 core beliefs/principles that drive the methodology. These become the agent's rules.

### Step 2: Extract Process Steps
Identify the sequential workflow prescribed by the methodology. These become the agent's phases.

### Step 3: Extract Evaluation Criteria
Identify how the methodology defines "good" output. These become the agent's evaluation protocol.

### Step 4: Extract Terminology
Identify domain-specific terms. These become the agent's vocabulary — used consistently across all playbooks.

### Step 5: Extract Anti-Patterns
Identify what the methodology warns against. These become the agent's error handling and negative space constraints.

---

## Domain Brief Output Format

```markdown
# Domain Brief: [Agent Name]

## Purpose
[One sentence: This agent [verbs] [input] into [output] using [method].]

## Inputs
| Input | Format | Quality Requirements |
|-------|--------|---------------------|
| [Input 1] | [Format] | [What makes good input] |

## Outputs
| Output | Format | Audience |
|--------|--------|----------|
| [Output 1] | [Format] | [Who uses it] |

## Domain Frameworks
1. [Framework name]: [One-line description of how it's applied]
2. [Framework name]: [One-line description]

## Validation Gates
1. [Gate name] — after Phase [N]: [What the user confirms]
2. [Gate name] — after Phase [N]: [What the user confirms]

## Failure Modes
1. [Failure]: [What it looks like, why it's bad]
2. [Failure]: [What it looks like, why it's bad]

## Key Terminology
| Term | Definition |
|------|-----------|
| [Term] | [Domain-specific meaning] |
```

---

## Extraction Quality Checklist
- [ ] Purpose is one sentence with specific verb, input, output, and method
- [ ] Inputs are specific data types with format expectations
- [ ] Outputs are specific deliverables with section-level descriptions
- [ ] At least one domain framework is identified and described
- [ ] At least one validation gate is defined
- [ ] At least two failure modes are described
- [ ] If source materials provided: principles, process, criteria, terminology, anti-patterns extracted
- [ ] Domain Brief is complete and ready for user confirmation
