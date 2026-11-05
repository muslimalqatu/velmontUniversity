# Homepage principles reveal and Learning in action image

November 5, 2026. Baseline: latest delivered ZIP, including the previous H03 flip-card pass.

## Changes

- The four cards beside “A student path designed to be clear” now initially show their existing titles centered vertically and horizontally. Hover lifts the title toward the top and reveals the original body text. Mouse leave restores the centered title. Keyboard-engaged content stays available while focus remains in its card.
- Native reveal buttons provide Enter/Space toggling, Escape close, expanded-state semantics and visible focus outlines. Touch-type activation toggles the same card and closes any previously opened card. Hidden body text is marked hidden to assistive technology and inert. This is a content reveal, not a flip.
- Card height reserves the body space; actual title height is measured and updated on wrapping/font changes. The title and text animate within that space rather than resizing the grid. Reduced-motion CSS removes their transitions for immediate state changes.
- Added an optimized, full-frame 840 × 560 WebP derivative of the attached “Thoughtful learning at home.png.” The image is not regenerated or cropped. It has descriptive illustration alt text, lazy loading and explicit dimensions. Display width is capped at 420px (280px high) on desktop and scales down on mobile.
- Placed the image immediately above the unchanged Business, Information Technology and Health Informatics example blocks. Below the image, the exact sentence “AI supports learning. The learner stays in charge.” is emphasized, followed by the smaller exact note “Illustration of a proposed learning concept, not an enrolled student or a live platform.”

## Tests actually performed

Chrome local static preview, exact-width iframe viewports:

| Width | Principle layout | Card states tested | Illustration displayed size |
| --- | --- | ---: | --- |
| 1440px | Two columns | All four | 420 × 280px |
| 820px | Two columns | All four | 420 × 280px |
| 390px | One column | All four | 347 × 231px |
| 360px | One column | All four | 317 × 211px |

- All **16 card/viewport combinations**: initial title centers matched the card center; body text was hidden initially. Revealed titles moved to approximately 23px below the card top, and every complete original paragraph remained readable without title/body overlap or clipping. Grid heights remained unchanged during reveals. No document horizontal overflow at any requested width.
- Simulated touch-type pointer events and activation through a temporary preview-only harness: each card opened; opening another left exactly one open; repeating activation collapsed it. This is event-path simulation, not a physical-device test. Test controls also finished CSS animations for consistent final-state measurements; ordinary animations were separately inspected during pointer testing.
- Actual mouse movement into and out of each card: all four revealed on hover and collapsed on leave with keyboard focus outside the cards.
- All four native buttons: Enter opened; Space closed and reopened; Escape closed. Expanded states reflected the visible state. Focus indication and the completed animated reveal were visually inspected.
- All four viewport widths: image loaded successfully with correct proportions, correct placement above the examples, both exact captions and all three original example blocks. Desktop and narrow mobile image/caption composition were visually inspected.
- JavaScript syntax, reduced-motion rule and source-scope checks passed. The reduced-motion rule explicitly sets both title/body transitions to none; live system preference emulation was not performed.
- Compared with the previous ZIP: only `index.html`, `js/app.js` and `css/styles.css` changed, plus the new WebP and this report. App changes are confined to `renderPrinciples`; the existing CSS is intact with a scoped block appended. The index change only wraps the existing examples with the new figure. Content data and all other existing files are byte-identical. The earlier H03 flip cards, navigation, footer, Botpress, tuition and unrelated page content are unchanged. ZIP integrity passed.

## Limits

Physical touch devices, Safari/Firefox and screen-reader speech output were not tested. Live reduced-motion emulation is unavailable in this browser environment; its implementation was verified in code, not reported as a live preference test. This pass was not deployed. No external Botpress changes were made.
