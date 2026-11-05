# Content compliance correction — AD02, TF02 and AM03

November 5, 2026. Baseline: latest delivered build, including the homepage flip cards, principle-card reveals, illustration and November 5 management-approved navigation. The November 3 guide was recovered and read directly for the three requirements.

## Exact changes

**AD02 — admissions.html:** Moved the five existing journey links into the corresponding step records and rendered them inside those steps. The six headings/descriptions and their order are unchanged. The separate duplicate link area is removed.

| Step | Existing link retained |
| --- | --- |
| 1 — Explore a planned degree | programs.html |
| 2 — Review eligibility and preparation | #requirements |
| 3 — Discuss previous learning and support needs | transfer.html |
| 4 — Review your study and financial plan | tuition-fees.html |
| 5 — Apply when admissions open | No application link |
| 6 — Prepare to begin | student-success.html#registration-planning |

**TF02 — tuition-fees.html:** Replaced the mixed program-link list with two clearly headed groups: six Bachelor’s Degrees links and two Master’s Degrees links. Both groups use the existing program records, filtered by level; no program data is duplicated. The existing table markup is unchanged: $45,000 / 120 credits and $20,000 / 36 credits. All tuition-only and additional-expense text is unchanged.

**AM03 — academic-model.html:** Corrected the shared content-card renderer to display a supplied subject (`area`) as its H3 heading and the existing example title as H4. Business, Information Technology and Health Informatics now all display. The original example paragraphs are unchanged, including synthetic health records, information quality and secure exchange/reporting improvement. Records without a subject retain their previous rendering.

Only `js/content.js` and `js/pages.js` changed, plus this report. No HTML, CSS, assets, navigation/footer/Botpress code, Search, investor files, PDFs or deployment configuration changed. The content-data change only relocates AD02’s existing link objects; all approved copy and academic records are unchanged.

## Tests actually performed

Chrome local static preview:

- Verified all six Admissions headings and complete descriptions, in order; link counts by step are 1, 1, 1, 1, 0, 1. Followed all five links. Correct pages loaded, and both requirements and registration-planning anchors existed. Keyboard Enter activated the requirements link successfully. No application destination was added.
- Verified tuition link groups contain exactly six bachelor’s links and two master’s links. Followed all eight; each loaded the correct degree page and H1. Confirmed the displayed table amounts/credits and unchanged tuition-only paragraph. Keyboard traversal continued from the final degree link to the existing PDF link.
- Verified all three AI subject headings and corresponding example titles/paragraphs. Health Informatics displays its complete required synthetic-records example.
- Checked all three affected pages at **1440, 820, 390 and 360px** (12 page/width combinations) using exact-width iframe viewports. No document horizontal overflow or clipped affected cards/link groups was measured. Visually reviewed desktop/mobile layouts, including Admissions link placement, degree groups and AI examples. Existing tuition-table narrow-screen word wrapping was retained; the table was not redesigned.
- Homepage regression smoke check: the existing decision flip and principle reveal controls both opened with Enter; the illustration’s exact supporting statement remained present. Shared navigation still has six groups, three Programs links and five Admissions links.
- JavaScript syntax checks passed. A ZIP-baseline comparison confirmed all other existing files are byte-identical, including homepage HTML, CSS, shared app.js and illustration assets. The academic portfolio, tuition data, model examples and navigation records are identical. Admissions data is identical after reversing only the link relocation. All six step descriptions match the guide verbatim.
- Checked local HTML/content/route destinations for missing files; none found. ZIP integrity passed. Temporary preview/test files are excluded from the archive.

Limits: Chrome with framed responsive widths only; physical devices, Safari/Firefox and screen-reader speech were not tested. This was a targeted regression pass, not a new full-site functionality audit. No deployment or external Botpress changes performed. Scope stops after AD02, TF02 and AM03.
