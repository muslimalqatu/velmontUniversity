# Velmont University — November implementation report

Prepared 4 November 2026 for the Thursday, 5 November deadline. Baseline: the supplied `velmontchicagouniversity-main.zip` only. Requirements source: Website Content Update Guide dated 3 November 2026 and the user’s Botpress/logo instructions.

## Delivered

- Updated institutional identity, conditional Fall 2029 enrollment wording, proposed mission and Illinois-first positioning. Admissions remain closed. IBHE/HLC wording describes intent only.
- Added eight individual degree pages, two exact college pages, all twelve bachelor’s concentrations, draft outcomes explicitly awaiting academic review, and level/college/subject filters. Internships are required on all bachelor’s pages and not on master’s pages.
- Updated admissions, transfer, semester study planning, tuition-only figures, funding, academic model, support and later international expansion content.
- Added student success with six stages, careers, internships, outcomes reporting context, a contact placeholder and a policy-category index with no invented approved policy documents.
- Reorganized desktop/mobile navigation and footer into six guide groups. Removed inactive student-service and investor links from student navigation; investor routes remain available directly. Preserved required anchors and legacy academic-area redirects.
- Preserved the original Botpress integration URLs. Removed the obsolete scripted advisor page interface and script; Ask Velmont now explains the external AI Agent demonstration and human-review boundary.
- Preserved the supplied JPEG without alteration; created cropped/resized WebP variants and crest favicon/touch icons without redrawing the artwork. Website tagline remains “Turn knowledge into practice.” Artwork still reads “Turning Knowledge Into Practice.”
- Updated both PDF planning guides at their original paths and linked them from tuition/transfer pages. Added a complete Botpress KB replacement draft, publication checklist, staff decisions and requirement-by-requirement coverage in this `docs` folder.

The site remains static HTML/CSS/vanilla JavaScript with no framework, build dependencies, backend or database. Existing layouts, design tokens, responsive rules, keyboard behavior, reduced-motion CSS and investor demo disclosures were reused. The ZIP contained no localization system or translated content; its English/LTR settings remain. A pre-existing missing mobile-menu initialization call was repaired.

## Verification

JavaScript syntax, 31 rendered pages, eight-degree structure, twelve concentrations, three legacy redirects, search/filter behavior, internal destinations/fragments and original-logo byte identity passed the checks recorded in `QA_RESULTS.md`. All 31 pages had no horizontal overflow at 1,363, 779 and 340 CSS pixels; tablet/narrow widths used browser zoom. Both PDFs were rendered and visually checked.

No GitHub/Netlify deployment was performed. Physical-device/cross-browser acceptance, full accessibility testing and refreshed Botpress answer testing remain outstanding. The source ZIP did not expose the external Netlify configuration. The investor demo is still explicitly client-side and does not protect confidential information.

## Decisions and external work still required

| Owner | Required decision or action |
| --- | --- |
| Leadership | Confirm the artwork/site tagline difference; approve proposed mission; verify actual IBHE/HLC stage before claiming any milestone. Current wording is intent-only. |
| Academic team | Approve draft outcomes, curricula, prerequisites, concentrations, semester loads, durations, admissions criteria, transfer/prior-learning policy and internship assessment. Accelerated/stackable awards remain proposals. |
| Operations/partners | Confirm internship partners, placement responsibility, locations, hours, supervision and applicable expenses; establish service staffing/hours, engagement, outreach, leave/re-entry procedures and verified contact channels. |
| Finance | Approve billing, required fees, additional costs, accepted-credit treatment, refund/installment terms, funded awards and aid eligibility. No master’s per-credit billing rate is published. |
| Outcomes owner | Define measures, student groups, methods, denominators, cadence and privacy thresholds before reporting numerical results. |
| Botpress administrator | Replace obsolete KB material and PDF uploads, refresh website ingestion/prompts/workflows/branding and publish; validate using `Botpress_and_PDF_Handoff.md`. Website deployment alone does not perform this work. |
| Website owner | Review the package, commit through the existing GitHub workflow, check the Netlify preview and production site, then complete remaining device/browser tests. |

`GUIDE_COVERAGE.md` maps every numbered guide requirement. `STAFF_READINESS_CHECKLIST.md` retains the internal readiness and funding-presentation rules moved off public pages.
