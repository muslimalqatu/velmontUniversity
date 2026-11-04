# QA results — 4 November 2026

## Completed checks

| Check | Result |
| --- | --- |
| All retained JavaScript files | `node --check` passed for content, app, pages, search and investor demo. |
| Rendered page audit | 31 non-redirect HTML pages rendered with one H1 each; no stale university name, Fall 2028 or AIU-TECH in rendered content. |
| Internal links and anchors | 2,606 rendered link instances audited in the tablet pass; no missing HTML destination or fragment. PDF destinations separately checked as existing files. Later student-success stage links point to already verified routes. |
| Desktop responsiveness | All 31 pages checked at 1,363 CSS pixels; no horizontal document overflow or broken images in the final pass. |
| Tablet responsiveness | All 31 pages checked at 779 CSS pixels; no horizontal overflow. Homepage, directory and mobile navigation visually inspected. |
| Narrow responsiveness | All 31 pages checked at 340 CSS pixels; no horizontal overflow. Header and logo visually inspected. Tablet/narrow widths used browser zoom rather than device emulation. |
| Desktop navigation | Programs menu opens; Escape closes and restores trigger focus. Tab moves between menu triggers with visible focus. |
| Mobile navigation | Opened menu, expanded Programs and followed Master’s Degrees; directory showed two results. Existing missing initialization call repaired. |
| Degree directory | Graduate query showed two degrees; combining computing college showed one; incompatible Health Informatics combination showed the empty state; reset restored all eight. |
| Search | “returning” produced relevant re-entry/support results with current destination links. Search index derives from current content, college and degree records. |
| Degree structure | All eight pages have required headings. Each bachelor’s has two concentrations and Internship; neither master’s has those sections. |
| College membership | Four degrees per college, six bachelor’s/two master’s overall, twelve concentrations. |
| Legacy routes | Business, information-technology and healthcare query routes redirected to business college, computing college and Health Informatics respectively. |
| Deep links | All required fragment IDs exist; returning-to-study was observed settled at the intended section below the sticky header. |
| Logo | Original JPEG SHA-256 matches the attachment byte-for-byte. Separate WebP sizes and crest icons inspected in browser. No broken images remain. |
| Botpress | Original inject/config URLs preserved; both script elements and visible launcher observed. No scripted advisor file/flow remains. |
| PDFs | Both PDFs regenerated at their original paths; 3 cost-guide pages and 8 academic-guide pages rendered and visually inspected. No obsolete identity/date found in extracted text. |
| Investor material | Direct login/dashboard files and demo disclosures retained; dashboard rendered. Active investor links were repaired. |
| Console review | Inspected errors were from the browser extension; no site JavaScript error was observed in the reviewed log output. |

## Limits and remaining acceptance

- No GitHub commit, Netlify deployment, production-domain smoke test or inspection of external hosting settings was performed. The ZIP supplied no repository metadata or Netlify config.
- External Botpress KB, prompts, workflow, branding and PDF copies were not updated or published. No agent answer accuracy test was performed against a refreshed KB.
- Testing used Chromium in a local preview. Safari, Firefox, physical phones/tablets, touch interactions and real-device viewport heights remain untested. Responsive checks used browser zoom to reach the stated CSS widths, which also reduced viewport height.
- Mobile Escape/focus trapping, full screen-reader acceptance, comprehensive contrast measurement and reduced-motion emulation were not independently exercised. Existing reduced-motion CSS is retained. Keyboard menu opening/closing and visible focus received representative checks, not a complete accessibility certification.
- The investor demo sign-in/logout transition was not independently retested; its existing implementation remains. It is still a client-side demonstration, not a private authentication boundary.
- Institutional authorization/accreditation status, approved policies, contact details and operational readiness require management verification. Website copy states plans and unavailable services rather than claiming approvals.
