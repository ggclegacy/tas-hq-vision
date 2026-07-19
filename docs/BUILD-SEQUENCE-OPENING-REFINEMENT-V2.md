# Build Sequence — Opening Experience Refinement V2

This document defines a strict execution sequence for Codex. Execute exactly one prompt at a time, finish it completely, verify it, update BUILD_STATUS.md, and only then continue to the next prompt.

## Operating Rules

- Preserve all completed work.
- Do not redesign unrelated parts of the project.
- Keep every change surgical and focused on the opening experience.
- Do not proceed to the next prompt until the current prompt is fully verified.
- After each prompt, update BUILD_STATUS.md with a concise completion note and a fresh verification summary.
- Stop only after Prompt 9 is complete and the final QA pass confirms the experience is polished and stable.

## Prompt 1 — Personalization Update

Prompt:

Update the opening experience so it clearly feels created for both executive leaders: Blair Vidrine and Bailey Soileau.

Requirements:
- Replace every reference to Blair Vidrine throughout the experience with Blair Vidrine & Bailey Soileau.
- Update all copy, narration, captions, welcome text, metadata, and any other visible or programmatic references.
- Do not simply append Bailey’s name awkwardly. Rewrite the language so it naturally speaks to both leaders.
- Preserve the existing tone, structure, and hierarchy of the experience while making the personalization feel intentional and premium.

Verification:
- Search the project and confirm every relevant reference now uses Blair Vidrine & Bailey Soileau.
- Confirm the copy reads naturally for both executives rather than feeling forced or appended.

After verification:
- Update BUILD_STATUS.md with a completion note for Prompt 1.

---

## Prompt 2 — Remove Future App References

Prompt:

Remove all references to future app concepts and redirect the experience to a single, focused TAS HQ narrative.

Requirements:
- Remove all references to Apothecary Compass.
- Remove all references to the patient app.
- Remove all references to the community app.
- Remove all references to two connected intelligence systems.
- Remove all references to future platform previews.
- Remove all references to gateway choices between apps.
- Replace this flow with a single cinematic transition directly into TAS HQ.
- Keep the experience focused, intentional, and premium.

Verification:
- Confirm no Compass, patient app, community app, or future-platform references remain.
- Confirm the experience now flows directly into TAS HQ without detouring through app-based framing.

After verification:
- Update BUILD_STATUS.md with a completion note for Prompt 2.

---

## Prompt 3 — Scene One to Scene Two Transition

Prompt:

Completely redesign the transition from Scene One into Scene Two.

Requirements:
- Replace the abrupt, clunky transition with a premium cinematic transition worthy of Apple, Mercury, or Rivian.
- Make the logo feel like it is guiding the user into the next chapter rather than disappearing and cutting.
- Eliminate abrupt fades and obvious page changes.
- Ensure the transition feels like one continuous experience rather than a hard handoff.
- Keep movement elegant, deliberate, and executive in tone.

Verification:
- Confirm the transition is fluid and continuous.
- Confirm there is no abrupt cut, harsh fade, or obvious page swap.

After verification:
- Update BUILD_STATUS.md with a completion note for Prompt 3.

---

## Prompt 4 — TAS HQ Intro Screen Improvements

Prompt:

Elevate the TAS HQ intro screen so it feels polished, cinematic, and immediately immersive.

Requirements:
- Improve the logo reveal so it feels premium and intentional.
- Refine camera movement to feel guided and deliberate.
- Improve lighting, atmosphere, and background depth.
- Adjust timing so the screen arrives with better pacing.
- Improve text entrance so it feels elegant rather than abrupt.
- Make the experience feel like the user has immediately entered TAS HQ.
- Keep the presentation smooth, confident, and executive.

Verification:
- Confirm the second screen feels cinematic rather than static.
- Confirm the pacing feels intentional and the environment clearly communicates TAS HQ.

After verification:
- Update BUILD_STATUS.md with a completion note for Prompt 4.

---

## Prompt 5 — Remove Continue Without Audio State

Prompt:

Correct the post-narration CTA behavior.

Requirements:
- After narration completes, the primary CTA should immediately become Enter the Experience.
- Do not leave Continue Without Audio as the primary action.
- Keep audio controls available elsewhere only if appropriate.
- Make the flow feel natural and progressive into the next chapter.

Verification:
- Confirm Enter the Experience is the primary call to action after narration.
- Confirm Continue Without Audio is no longer emphasized as the primary action.

After verification:
- Update BUILD_STATUS.md with a completion note for Prompt 5.

---

## Prompt 6 — Scene Two to Scene Three Transition

Prompt:

Redesign the transition from Scene Two into Scene Three with a premium cinematic treatment.

Requirements:
- Replace the tiny logo fade-away with a more sophisticated transition.
- Make the logo become part of the environment rather than shrinking away.
- Consider a transition where the logo expands into the environment, the camera passes through emblematic geometry, rings become architectural elements, particles become environment, or a metallic iris opens into the next scene.
- Avoid quick fades, placeholder animation, and temporary miniature logos.
- The transition should feel dimensional, elegant, and intentional.

Verification:
- Confirm the transition feels premium and immersive.
- Confirm there is no cheap mini-logo effect or abrupt visual handoff.

After verification:
- Update BUILD_STATUS.md with a completion note for Prompt 6.

---

## Prompt 7 — Cinematic Polish Pass

Prompt:

Perform a cinematic polish pass across the entire opening experience.

Requirements:
- Refine timing so it feels measured and elegant.
- Improve easing so motion feels naturally premium.
- Improve camera rhythm and motion hierarchy.
- Refine spacing and layout for a more executive presentation.
- Improve lighting, atmosphere, and micro-interactions.
- Increase depth and visual clarity so the experience feels cohesive.
- Ensure every transition feels intentional and every moment feels like part of one premium film.
- Avoid any sensation of separate or disconnected pages.

Verification:
- Review the experience as a single continuous journey.
- Confirm the transitions, motion, and pacing feel deliberate and premium.

After verification:
- Update BUILD_STATUS.md with a completion note for Prompt 7.

---

## Prompt 8 — Mobile Executive Experience

Prompt:

Optimize the opening experience for mobile-first executive viewing.

Requirements:
- Ensure pacing feels comfortable on phones.
- Improve readability for executive audiences on smaller screens.
- Increase touch target size where applicable.
- Preserve premium spacing and safe-area usage.
- Keep animations smooth and stable at 60fps where possible.
- Maintain a polished, executive feel without sacrificing clarity.

Verification:
- Confirm the experience is comfortable and readable on mobile.
- Confirm the presentation remains premium and polished across smaller viewports.

After verification:
- Update BUILD_STATUS.md with a completion note for Prompt 8.

---

## Prompt 9 — Final QA

Prompt:

Run a full final QA pass on the opening experience.

Requirements:
- Verify Blair Vidrine & Bailey Soileau appear everywhere correctly.
- Verify only TAS HQ is presented.
- Verify no Compass references remain.
- Verify no community app references remain.
- Verify transitions are seamless.
- Verify Enter the Experience appears correctly.
- Verify there are no flickers, flashing logos, abrupt fades, or regressions.
- Ensure the opening experience is polished, stable, and presentation-ready.

Verification:
- Perform a full review of content, interactions, transitions, timing, and mobile behavior.
- Confirm no regressions remain and the experience is ready for executive presentation.

After verification:
- Update BUILD_STATUS.md with a final completion note and mark the sequence as complete.
- Stop.
