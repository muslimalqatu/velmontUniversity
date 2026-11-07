# Illinois illustrations and homepage scroll reveal — November 5, 2026

## Changes

- Added the supplied Illinois map/pin beside the homepage H04 text. Desktop uses two columns; widths at or below 900px stack text then image. Original H04 wording and destination are unchanged.
- Added the supplied international illustration to `student-information.html#international-students`, capped at 520px and scaled down on mobile. Preserved SI03 wording and its anchor. Added the requested caption verbatim and descriptive alternative text identifying the illustration as possible future expansion.
- Both supplied PNGs are copied without recompression, cropping or artwork edits; SHA-256 comparisons match the attachments.
- Removed the 420px width cap from the Learning in action image. Its full width now matches the example group, preserving aspect ratio and both existing captions.
- Added an independent homepage script using IntersectionObserver and the Web Animations API. Only the Illinois and Learning in action figures animate: a 480ms opacity fade with 14px upward movement. Elements rearm only after leaving an expanded viewport (80px margin), avoiding repeated triggers at the visible boundary. No headings, cards or links are animated by this script.
- Content is visible by default, including when the enhancement script fails or browser APIs are unavailable. Reduced-motion preferences suppress the animation; changes to that preference cancel running animations.
- Provided static SI03 text/image markup for JavaScript-disabled access. The normal page renderer reuses that figure; no duplicate section or anchor remains after rendering. Other pre-existing dynamic site features still require JavaScript.

## Checks actually performed

Chrome browser checks used exact-width frames, not physical devices.

| Check | Result |
|---|---|
| Homepage and Student Information at 1440, 820, 390 and 360 CSS px | Both new images loaded. No measured horizontal document overflow or image clipping. |
| Learning image versus example-group edges at all four widths | Aligned within 1 CSS px; aspect ratio preserved. |
| International illustration sizing | 520px maximum; shrank to available width on mobile. |
| H04/SI03 copy, caption and anchor | Original copy retained; caption exact; one rendered international anchor. |
| Existing interactive cards | All four decision cards and four principle cards opened/closed with scripted clicks at each tested width. Additional native keyboard Enter checks revealed a principle card and decision card. |
| Scroll fade and replay | A separate visible browser fixture recorded the Illinois animation count increasing from 1 to 2 after scrolling away and returning. Repeating the reveal while already visible kept the count at 2. The settled image returned to full opacity. |
| Small scroll oscillations | No extra animation calls in the automated boundary checks. This does not establish absence of flicker on every device. |
| Reduced motion | Simulated the reduced-motion media-query result in a browser-only fixture; no scroll animation was active. Code checked for both initial preference and subsequent changes. Actual OS preference toggling was not tested. |
| JavaScript disabled | Script-disabled sandbox frames retained the new illustrations, existing Learning image, and static SI03 wording/caption. |
| Space reservation | Image width/height attributes match their source proportions; measured image boxes retained their aspect ratios. No comprehensive cumulative layout-shift benchmark was run. |
| Static validation | Modified JavaScript passed `node --check`; affected local image/script paths exist. H04 text/link and Learning captions compared equal to baseline. |

The rapid multi-width animation fixture was inconclusive for replay because rendering callbacks did not consistently advance between its timed scroll actions. Replay was therefore checked separately with visible, discrete browser actions as described above; it is not claimed to have passed at every width.

## Scope confirmation and limits

Existing files changed: `index.html`, `student-information.html`, `js/pages.js` (only the conditional SI03 figure inclusion), and `css/styles.css` (image-width adjustment and scoped illustration rules). Added `js/home-visuals.js`, two image assets and this report.

`js/content.js` and `js/app.js` are byte-identical to baseline. Navigation, footer, Botpress, Search, program filters, tuition, academic content, investor pages, logo assets and existing card-interaction code were not changed. Other existing files are unchanged.

Physical touch devices, Safari/Firefox, a full-site regression audit and live Botpress behavior were not tested in this pass. No deployment was performed. Stopped for visual review.
