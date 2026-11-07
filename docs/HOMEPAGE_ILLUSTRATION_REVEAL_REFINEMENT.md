# Homepage illustration and reveal refinement — November 6, 2026

## Changes

- Learning in Action now uses a shared white frame for the illustration and both exact existing captions, with a 1px border, rounded corners and modest padding. The frame remains aligned with the example-card group.
- Applied a CSS-only 5:3 crop using `object-fit: cover` and `object-position: 50% 14%`. This removes mostly background from the bottom and a small amount from the top; the learner’s face, hands, notebook and laptop remain visible. The source image is byte-identical to the baseline.
- Refined selected entrances to 760ms for content and 920ms for illustrations, with 20px upward motion, natural ease-out timing and 150ms stagger steps.
- The path panel introduces its branding/intro first, followed by its four points at 150, 300, 450 and 600ms. Why Velmont introduces its heading before its text group and four cards. Explore academics introduces its heading/intro before the two college cards. The Illinois and Learning illustrations retain selected entrance effects.
- Card entrance motion uses outer wrappers; existing inner card interactions remain intact. Focus or pointer activation cancels a running entrance in that group so controls respond immediately.
- Elements rearm after fully leaving an expanded viewport (80px buffer). A minimum visible foothold prevents the 20px translation from causing entry/exit loops at that outer boundary. Content has a visible base state; reduced motion suppresses entrances and cancels current motion.

## Tests performed

Chrome checks used exact-width browser frames. Browser-only instrumentation and test fixtures are excluded from the ZIP.

| Width | Frame and example-group width | Image height, before → after | Result |
|---|---:|---:|---|
| 1440px | 670.25px | 446.83 → 384.63px | Aligned; no horizontal document overflow |
| 820px | 773px | 515.33 → 450.80px | Aligned; no horizontal document overflow |
| 390px | 347px | 231.33 → 195.48px | Aligned; no horizontal document overflow |
| 360px | 317px | 211.33 → 177.48px | Aligned; no horizontal document overflow |

Additional verification:

- Visually inspected the loaded crop and white frame at all four widths. Both captions remain exact, readable and inside the frame. Important image subjects remain visible.
- Compared college and principle-card widths/heights with the prior build at all four widths: they match. Example-group dimensions also match. No measured clipping or new overflow was found in these checks.
- All four decision cards and four principle cards passed scripted open/close clicks at each width. Native Enter, Space and Escape checks also passed on representative principle and decision controls.
- Instrumented the actual entrance calls: observed the path panel’s initial page-load sequence, 150ms point delays, coordinated academic/Why entrances, and completed 760/920ms animations.
- Verified scroll-away/return replay: the path sequence ran twice, then settled with zero active animations. Repeating the reveal while the section remained visible did not add a run. No flicker was seen during the observed transitions; this is not a guarantee for every device or scroll pattern.
- Simulated reduced motion both at page load and after initialization. The initial reduced-motion load produced zero entrance animations; the preference-change check suppressed further entrances and left content visible.
- With the entrance script omitted, generated homepage content remained visible. With all scripts disabled in a sandbox frame, existing static illustration/captions, path points and other HTML content remained visible. Existing generated program and principle records still require JavaScript, as in the baseline.
- JavaScript syntax validation passed. Reviewed the rendered homepage link destinations; the HTML and content/navigation scripts defining those destinations are unchanged. No new links were introduced.
- File comparison: only `css/styles.css` and `js/home-visuals.js` changed among existing files, plus this new report. HTML, academic/institutional copy, source images, example records, navigation, footer, Botpress, filters, tuition, investor pages and other pages are unchanged.

## Limits

Physical touch devices, Safari/Firefox, actual OS reduced-motion settings and a comprehensive layout-shift performance benchmark were not tested. No full-site regression or Botpress answer-quality test was performed. No deployment was made. Stopped for visual review.
