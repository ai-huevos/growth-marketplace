# ICP Extraction Playbook: From Vague Idea to Specific Customer

## Overview
This document contains the question sequences, frameworks, and decision logic for extracting a precise Ideal Customer Profile from a beginner's vague business idea. ICP is not demographics — it is a specific person in a specific situation who urgently wants a specific outcome. The GPT should use these methods conversationally, adapting based on what the user reveals.

## Core Principle: ICP Is Defined by Urgency and Situation, Not Demographics
A strong ICP answers: "Who is actively trying to solve this problem RIGHT NOW, has the ability to pay, and can be reached?" Generic avatars (age, gender, hobbies) produce generic offers. Situation-based ICPs (a specific person facing a specific trigger) produce offers people actually buy.

## The Four ICP Filters (Screen Before Going Deep)
Before detailed extraction, the idea must pass four filters. If any filter fails, help the user pivot:

1. **Pain**: Are real people experiencing this problem and actively seeking solutions? (Not "would people like this?" but "are people already searching, complaining, or paying for alternatives?")
2. **Purchasing Power**: Can the target afford to pay enough to sustain a business? (A broke college student wanting free fitness tips ≠ a viable ICP)
3. **Easy to Target**: Can you find and reach these people? (If you can't describe where they hang out online or offline, the ICP is too abstract)
4. **Growing**: Is this market stable or expanding? (Shrinking markets create headwinds beginners can't overcome)

Source: Hormozi's market selection criteria from $100M Offers.

## Question Sequence 1: The Narrowing Funnel (Hormozi-Derived)
Use when the user has a broad skill or topic ("I want to help people with fitness / marketing / productivity").

**Step 1 — Start broad, then niche multiple levels:**
- "What general area do you want to work in?"
- "Within that, who specifically struggles most?"
- "Within THAT group, who has the most urgent version of the problem?"
- "What trigger makes them start looking for help RIGHT NOW?"

**Step 2 — Validate the niche passes the four filters:**
- "Can these people pay? What do they already spend on this problem?"
- "Where do they congregate? Can you name 3 places you could find them this week?"
- "Is this problem getting worse or more common?"

**Example narrowing:** "Help people with fitness" → "Weight loss" → "Weight loss for new moms" → "New moms who want to lose pregnancy weight before returning to work (trigger: approaching return-to-work date)."

## Question Sequence 2: The Lighthouse Client Method (Rmosh)
Use when the user has some experience or can identify ONE person they'd love to help.

**Step 1 — Identify the lighthouse:**
- "Think of one specific person — real or hypothetical — who would be your DREAM client. Describe them."
- "What problem are they actively trying to solve right now?"
- "What outcome would they pay for immediately — not eventually, but THIS MONTH?"

**Step 2 — Document three specifics:**
1. Client type (role, situation, life stage — not age/gender)
2. Problem they're solving NOW (with urgency indicator)
3. Outcome they'd pay for IMMEDIATELY

**Step 3 — Test the lighthouse:**
- "Could you find 10 more people exactly like this within a week?"
- "Would they pay $500+ to solve this? $1000+?"
- "What would they Google or post on Reddit about this problem?"

Source: Kenya Rmosh's validate-offers framework.

## Question Sequence 3: The Switch-Moment Method (JTBD/Thomson)
Use when the user's idea involves replacing something people already do (competing with existing solutions, apps, services).

**Step 1 — Find the switch story:**
- "Who recently STOPPED using one solution and started looking for something new?"
- "What made the old way stop working? What was the breaking point?"

**Step 2 — Map the Four Forces:**
- **Push**: "What made their current situation unbearable?"
- **Pull**: "What promise would make them switch?"
- **Anxiety**: "What would almost stop them from trying something new?"
- **Habit**: "What routines or tools would they have to give up?"

**Step 3 — Derive the ICP statement:**
"People who [experienced this push], are now actively looking for [this pull], but are held back by [this anxiety] and attached to [this habit]."

**Why this is powerful for beginners:** The ICP becomes a story, not a spreadsheet. The offer naturally emerges from removing anxieties and replacing habits.

Source: Customer Science / Gabrielle Thomson's switch interview playbook.

## Question Sequence 4: Differentiation-First ICP (Dunford)
Use when the user has a specific skill or method that's different from the mainstream.

**Step 1 — Extract unique attributes:**
- "What do you do differently from how most people approach this?"
- "What's your unusual background, method, or perspective?"

**Step 2 — Translate to value:**
- "What outcome does your different approach make possible that the standard approach doesn't?"

**Step 3 — Find who cares most:**
- "If your business depended on closing as many deals as possible THIS MONTH, who would you focus on and why?"
- "Who would feel the difference between your approach and the generic approach most acutely?"

**Step 4 — Choose the right frame:**
- "What category should people put you in so your strengths are obvious? What category would make you look generic?"

Source: April Dunford's positioning exercise.

## Question Sequence 5: The Micro Offer ICP (Dan Koe)
Use when the user is completely stuck and can't even articulate a market. Works from the user's own behavior.

**Step 1 — Mine personal history:**
- "What topics fill your search history, YouTube watch history, and podcast queue?"
- "What have you spent money learning in the last 2 years?"
- "What do people already ask you for help with?"

**Step 2 — Extract the micro offer:**
- "What's a specific problem you could help someone solve in 30 days?"
- "What's the simplest version of that help — 4 weekly calls? A template pack? A done-for-you deliverable?"

**Step 3 — Qualifying questionnaire (use to filter ICP):**
- "What are your biggest struggles with [topic]?"
- "Where do you want to be 30 days from now?"
- "On a scale of 1-10, how serious are you about solving this?"
- "Have you invested money in solving this before?"

Source: Dan Koe's minimalist creator business framework.

## ICP Output Format
After extraction, the GPT should produce a clear ICP statement with these components:

**ICP Statement Template:**
"[Specific person/role] who is [in this situation/life stage], experiencing [this specific problem/trigger], who wants [this outcome] within [this timeframe], and is willing to pay [$X range] because [this urgency driver]."

**Example:** "Freelance web designers who just lost their biggest client and need to replace that income within 60 days. They're willing to invest $500-2000 in a system for getting clients because the alternative is going back to a 9-to-5."

## When to Challenge the User's ICP
The GPT should push back when:
- The ICP is "everyone" or "anyone who..." → Force narrowing
- The ICP is defined only by demographics → Push for situation/urgency
- The ICP can't pay → Challenge purchasing power
- The ICP can't be found → Ask "where do they hang out online?"
- The user picks ICP based on passion alone → Validate demand exists

## Key Signals That ICP Extraction Is Complete
- User can describe ONE specific person (not a category)
- That person has an urgent problem (not a nice-to-have)
- That person can pay (has purchasing power)
- That person can be found (user can name where to reach them)
- The problem has a clear trigger (what makes them start looking NOW)
