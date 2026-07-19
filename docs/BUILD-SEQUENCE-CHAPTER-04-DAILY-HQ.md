# Build Sequence — Chapter 04: Daily Headquarters

This document guides Codex through building the next major section of the TAS HQ executive vision experience. Execute the following small, surgical prompts in sequence.

## Operating Rules for Codex

1. Execute exactly one prompt at a time, in order.
2. Complete and minimally validate the current prompt before moving forward.
3. Preserve all completed opening, transition, narration, personalization, and Vision Overview work.
4. Do not redesign unrelated sections.
5. Update BUILD_STATUS.md after every completed prompt.
6. Keep reports brief. Record only:

   - What was completed
   - Files changed
   - Validation performed
   - Any unresolved issue
7. Continue automatically to the next prompt after validation unless the current prompt exposes a blocking issue.
8. Do not create placeholder interfaces or disconnected mockups.
9. Build Chapter 04 as a convincing interactive product demonstration.
10. Maintain the existing Next.js, TypeScript, Motion, responsive, accessibility, and visual architecture.
11. Blair Vidrine and Bailey Soileau are the intended executive viewers.
12. The presentation is only for TAS HQ. Do not add Apothecary Compass, a patient platform, a community app, or any second-product concept.

## Prompt 01 — Define the Chapter Transition

Build a seamless transition from the completed TAS HQ Vision Overview into Chapter 04 — Daily Headquarters.

Current problem:

The experience currently reaches a Chapter 03 completion overlay instead of continuing into the product demonstration.

Replace that dead end with a premium transition into the Daily Headquarters environment.

Requirements:

- Preserve the existing four-pillar overview.
- Change the final CTA to lead into Daily Headquarters.
- Remove language saying the next chapter is awaiting approval.
- Make the transition feel like entering the operating system itself.
- Reuse the TAS HQ emblem, precision rings, architectural lines, or pillar signals as transition material.
- Avoid a standard fade-to-black page change.
- Avoid briefly showing a miniature logo.
- Avoid abrupt layout replacement.
- Let the existing world transform into the Daily Headquarters interface.
- Add a clear Chapter 04 progress state.
- Support reduced-motion behavior.

The emotional effect should be:

“The philosophy has now become a working system.”

Validate the forward transition, return behavior, reduced-motion state, and mobile viewport.

## Prompt 02 — Build the App Shell

Build the foundational Daily Headquarters application shell.

Create a polished operating-system interface with:

- TAS HQ identity
- compact chapter indicator
- primary navigation
- contextual top bar
- employee profile area
- notification indicator
- Onyx access point
- responsive main content region
- mobile navigation behavior

Recommended navigation:

- Headquarters
- Knowledge
- Standard
- Training
- Team
- Growth

Do not make this look like a generic SaaS admin dashboard.

The shell should feel proprietary to The Apothecary Shoppe and visually connected to the cinematic presentation.

Visual direction:

- obsidian and deep charcoal foundation
- controlled Apothecary green
- warm amber or orange accents
- dimensional antique or muted gold
- warm ivory typography
- restrained glass and metallic surfaces
- subtle architectural depth
- high contrast and strong readability
- executive-grade refinement

Avoid:

- excessive cards
- bright neon
- generic purple technology gradients
- oversized sidebar navigation
- cramped analytics dashboards
- decorative complexity without purpose

Build the shell with reusable components and typed navigation data.

Validate desktop, tablet, mobile, keyboard navigation, and active states.

## Prompt 03 — Build the Daily Welcome Hero

Build the primary Daily Headquarters welcome area.

The hero should immediately establish that employees begin their day here.

Include realistic demonstration content such as:

- “Good morning, Bailey”
- current date
- location or store context
- shift context
- a concise daily focus
- leadership message
- a calm TAS HQ system-status signal
- a direct Ask Onyx action

Use realistic but clearly demonstration-oriented Apothecary content.

Suggested message direction:

“Everything your team needs to begin informed, aligned, and ready.”

The hero should not consume the entire screen. It should introduce the day and guide the user toward action.

Add restrained motion:

- environmental illumination
- subtle text entrance
- controlled system pulse
- Onyx activity signal
- optional light sweep

Do not use a large marketing headline that makes the app feel like another landing page.

Validate hierarchy, readability, mobile fit, and reduced motion.

## Prompt 04 — Build the Daily Brief

Build an interactive Daily Brief section.

The Daily Brief should collect the highest-value information an employee needs before or during a shift.

Include demonstration items for:

- Today’s Focus
- Important Announcement
- Product Spotlight
- Training Due
- Store Update
- Leadership Priority

Each item should communicate:

- category
- concise headline
- short explanation
- priority or status
- relevant action

Use intentional hierarchy rather than six identical cards.

One item should clearly be the dominant priority.

Add useful interactions:

- mark reviewed
- expand detail
- open the relevant area
- preserve reviewed state during the session
- show progress through the brief

Do not build a decorative news feed.

The section should answer:

“What must I know today?”

Validate interaction state, keyboard use, screen-reader labels, and mobile layout.

## Prompt 05 — Build Leadership Communication

Build a leadership communication module that demonstrates how Blair Vidrine and Bailey Soileau can communicate clearly with the team.

Include:

- leadership message
- sender identity
- role
- timestamp
- message category
- acknowledgement action
- optional audio-message treatment
- previous-message preview

Use Blair and Bailey naturally.

Do not present Bailey as an afterthought. The module should show that leadership communication may come from either Blair or Bailey depending on the operational context.

Example message themes:

- patient-care standard
- team appreciation
- operational priority
- upcoming training
- company milestone

The design should feel human, respected, and important—not like a social-media post.

Add an acknowledgement state such as:

“Read and understood”

Do not add public comments or community-feed behavior.

Validate acknowledgement state and responsive presentation.

## Prompt 06 — Build Team Wins

Build a restrained Team Wins and Recognition module.

Its purpose is to demonstrate that TAS HQ reinforces culture, recognition, and shared momentum.

Include realistic examples such as:

- employee recognition
- patient-service win
- training milestone
- store achievement
- leadership acknowledgement

The module should feel professional and meaningful.

Avoid:

- social-media reactions
- popularity metrics
- childish gamification
- confetti
- public ranking
- competitive leaderboards

Create a premium recognition interaction that lets the employee view the reason behind each recognition.

The takeaway should be:

“Strong work becomes visible.”

Validate accessibility, content density, and mobile interaction.

## Prompt 07 — Build Today’s Actions

Build a Today’s Actions module.

Include a small, realistic set of employee actions:

- review a new SOP
- complete a short product lesson
- acknowledge a leadership update
- prepare for a scheduled coaching session
- review a product spotlight

Each action should include:

- title
- context
- expected duration
- status
- due timing
- destination
- completion behavior

Allow the user to complete at least one demonstration action and visibly update progress.

Do not turn this into a heavy project-management system.

The module should feel calm, achievable, and focused.

Validate completion state, progress calculation, and refresh-safe behavior where practical.

## Prompt 08 — Build Product Intelligence

Build a compact Product Intelligence spotlight within Daily Headquarters.

This is not the full Knowledge chapter.

It should demonstrate how current product knowledge reaches employees during daily work.

Include one realistic product or product-category example with:

- product name
- category
- key cannabinoids or attributes where appropriate
- terpene or formulation highlights
- concise employee guidance
- patient-conversation considerations
- compliance-safe language
- Ask Onyx action
- link to deeper knowledge

Do not make medical claims.

Do not present AI-generated information as verified company policy without a visible approved-source treatment.

Add a small “Approved Knowledge” or source-status indicator.

Validate content hierarchy and mobile usability.

## Prompt 09 — Embed Onyx

Build the Daily Headquarters Onyx entry point and quick-action layer.

This is an introduction to Onyx, not the full Meet Onyx chapter.

Onyx should appear as an embedded digital coworker available throughout the interface.

Include quick actions such as:

- Find an SOP
- Explain a product
- Prepare for a patient conversation
- Summarize today’s updates
- Help me complete training

Build one polished demonstration interaction.

Recommended demonstration:

The employee asks:

“What should I know before helping a first-time patient?”

Onyx returns a concise, structured response grounded in approved TAS knowledge, including:

- preparation
- questions to ask
- service principles
- compliance boundary
- relevant knowledge links

The interaction must not look like a generic empty chatbot.

Use:

- contextual panel
- structured answer
- source indicators
- suggested next action
- calm intelligence signal

Include a clear disclosure that Onyx supports employees and does not replace licensed professional judgment or company policy.

Validate open, close, focus management, keyboard use, mobile behavior, and reduced motion.

## Prompt 10 — Build Daily Progress Summary

Build a concise daily progress summary.

Show how the employee is moving through the day without turning work into a game.

Include:

- Daily Brief reviewed
- leadership message acknowledged
- actions completed
- training status
- remaining priority

Use a refined progress visualization.

Avoid:

- points
- streak pressure
- badges
- cartoon achievement systems
- competitive scoring

The message should be:

“You are informed, aligned, and ready.”

Validate state updates from the modules already built.

## Prompt 11 — Add Guided Demonstration Mode

Add a guided demonstration layer for Blair Vidrine and Bailey Soileau.

Because this is an executive vision experience, the Daily Headquarters chapter must explain itself without requiring random exploration.

Add restrained guidance that introduces the major areas in a deliberate sequence.

Possible implementation:

- a short Onyx-guided walkthrough
- contextual focus states
- captions
- subtle spotlighting
- optional narration
- next and previous controls
- skip walkthrough

Do not cover the screen with tutorial bubbles.

Do not make the experience feel like product onboarding software.

The guided mode should briefly communicate:

1. This is where the team begins the day.
2. Leadership communication becomes clear and visible.
3. Knowledge reaches employees at the moment it matters.
4. Daily development becomes part of the work.
5. Onyx connects the entire system.

Allow Blair and Bailey to exit guided mode and freely explore the interface.

Validate focus sequence, audio state, captions, skip behavior, and mobile fit.

## Prompt 12 — Create the Chapter Conclusion

Build the conclusion for Chapter 04.

The conclusion should emerge from the working interface instead of interrupting it with a generic modal.

Suggested message:

“One place to begin informed, aligned, and ready.”

Supporting message:

“Daily Headquarters turns leadership communication, company knowledge, training, recognition, and intelligent support into one clear starting point for the team.”

Include two actions:

- Explore Daily Headquarters
- Continue to Meet Onyx

The Continue to Meet Onyx action may lead to a controlled next-chapter boundary if Chapter 05 is not yet built, but it must not claim the feature is complete.

Do not use “awaiting approval” or internal build language in the executive-facing UI.

Provide a polished return path to the Vision Overview.

Validate all navigation paths.

## Prompt 13 — Responsive Polish

Perform a dedicated responsive pass for the entire Daily Headquarters chapter.

Mobile is a primary presentation surface.

Verify and refine:

- 320px minimum width
- modern iPhone widths
- large phones
- tablets
- laptop
- desktop
- portrait and landscape where relevant
- safe-area spacing
- fixed navigation behavior
- scroll containment
- touch targets
- readable typography
- Onyx panel behavior
- walkthrough controls
- reduced-motion experience

Do not merely stack every desktop card vertically.

Create a deliberate mobile composition with priority-based content ordering.

Keep animations smooth and avoid expensive effects that cause jank.

## Prompt 14 — Visual Refinement Pass

Perform a dedicated visual refinement pass.

Compare the quality of Chapter 04 against the completed executive opening.

The Daily Headquarters chapter must feel like the product contained inside the cinematic world—not a quality drop into a standard dashboard.

Refine:

- spacing rhythm
- typography scale
- surface hierarchy
- metallic and glass restraint
- Apothecary color balance
- lighting
- shadows
- edge treatments
- animation easing
- hover and press states
- system signals
- Onyx presence
- loading and transition states
- visual continuity with the TAS HQ emblem

Remove anything that feels:

- templated
- cluttered
- overly card-based
- cheaply futuristic
- visually noisy
- inconsistent with the opening

Do not change working information architecture unless necessary for quality.

## Prompt 15 — Final QA

Run final QA on Chapter 04 and its integration with the existing presentation.

Verify:

- Blair Vidrine and Bailey Soileau are represented correctly.
- The presentation remains exclusively about TAS HQ.
- No Apothecary Compass references remain.
- No patient-platform or community-app references remain.
- Chapter 03 transitions correctly into Chapter 04.
- Daily Headquarters feels like interactive software.
- Every primary action works.
- Session states update correctly.
- Onyx opens and closes correctly.
- The guided demonstration works.
- Return navigation works.
- Audio and caption controls remain functional.
- Reduced-motion behavior works.
- Keyboard navigation works.
- Mobile presentation is polished.
- No flickers, temporary miniature logos, layout jumps, dead buttons, or abrupt fades remain.
- TypeScript passes.
- Lint passes.
- Production build passes.
- Relevant Playwright coverage is added or updated.

Update BUILD_STATUS.md with the final Chapter 04 status.

## Completion Standard

Chapter 04 is complete only when Blair and Bailey can watch the transition, understand the Daily Headquarters concept, interact with meaningful product behavior, experience Onyx in context, and clearly imagine The Apothecary Shoppe team using TAS HQ every day.
