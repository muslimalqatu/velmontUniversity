# Homepage H03 flip cards — November 5, 2026

## Changes

Converted only the four cards under “Four answers should never be hard to find.” into flip cards. Fronts show Completion Time, Cost, Scholarships & Funding and Career Path. Backs use the complete existing `decisionFactors` text and original CTA labels/destinations from the same data; no copy was duplicated or rewritten.

- Mouse hover reveals a back; leaving returns to the front. Keyboard-engaged content remains available while focus is inside its card.
- Native buttons support Enter/Space and expose expanded state. Tab reaches the independent CTA; Escape closes and returns focus to the reveal control. Hidden backs are inert and excluded from the accessibility tree. Visible focus outlines are provided.
- Touch activation toggles the same card; opening another closes the previous one. CTA links remain normal independent links, with no navigation assigned to the reveal button.
- A 380ms 3D rotation preserves the existing grid, colors, spacing and corner treatment. Both faces contribute to the card’s intrinsic size, so opening a card does not resize the grid. Reduced-motion CSS disables the rotation/transition and switches face visibility immediately.
- Changes are scoped to the homepage decision-card renderer and CSS selectors under `#decision-grid`. No dependencies added.

## H03 preservation

Compared the existing four body texts and destinations with H03 in the November 3 guide. All are retained verbatim in the unchanged content data:

| Card | Original destination retained |
| --- | --- |
| Completion Time | transfer.html#completion-planning |
| Cost | tuition-fees.html |
| Scholarships & Funding | scholarships.html |
| Career Path | careers.html |

## Tests actually performed

Browser: Chrome, local static preview.

- Checked **1440, 820, 390 and 360px** using exact-width iframe viewports. For each width, revealed all four cards: **16 card/width combinations**. Verified complete text, original links, one open card at a time, and no measured content clipping or paragraph/CTA overlap.
- Measured grid height and the following section’s position before/after each reveal: unchanged within each viewport. No horizontal overflow at any requested width. Existing two-column arrangement remains at 1440/820px and one column at 390/360px. Visually inspected the section and the longest back at 360px.
- Moved the actual mouse into and out of each of the four cards: all opened on hover and closed on leave when keyboard focus was outside the card.
- Tested Enter and Space reveal, Space close, Tab into the Completion Time CTA, Escape close/focus return, and keyboard CTA navigation to the correct completion-planning anchor. Checked hidden-back inert state.
- Followed every card CTA after reveal; all four original destination pages loaded, including the Completion Time anchor. A single link activation was sufficient.
- In a temporary preview-only harness, dispatched touch-type pointer events followed by activation. All four cards opened individually, opening another closed the previous card, and repeating activation closed the last card. This verifies the touch event-handling path; it is **simulated touch**, not a physical-device test.
- Browser testing exposed and resolved a focusout timing issue and a CTA stacking issue. Keyboard traversal and CTA navigation were rerun successfully after the fixes.
- JavaScript syntax and source-scope checks passed. Compared with the immediate previous delivered ZIP: only `js/app.js` and `css/styles.css` changed, plus this new report. The app.js changes are confined to `renderDecisionFactors`; the existing CSS is intact with a scoped block appended. HTML, content data, other JavaScript, navigation/footer/Botpress functions, assets, PDFs and deployment files are unchanged. ZIP integrity passed.

## Verification limits

The reduced-motion media rule was verified in code; live preference emulation was unavailable because browser DevTools are disabled in this environment. No physical touch device, Safari/Firefox, or screen-reader speech test was performed. These are not reported as passed. No deployment or external Botpress changes were made.

This pass is ready for the requested visual review; no unrelated redesign was performed.
