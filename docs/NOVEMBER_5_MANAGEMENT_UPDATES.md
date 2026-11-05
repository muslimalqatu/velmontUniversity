# November 5, 2026 — management review implementation

Baseline: latest delivered Velmont University build, including the shared UI review and subsequent logo/typography refinements. This pass contains five changed implementation files and this report. HTML, CSS and vanilla JavaScript architecture retained; no dependencies added.

## Changes

- **Programs navigation:** desktop and mobile now contain exactly three links: Explore All Programs, College of Computer Science and Information Technology, and College of Business Administration and Health Sciences. College names and URLs are unchanged. Bachelor’s and Master’s links remain in the footer and the degree-level filters remain available.
- **Dependent program filters:** Level and College options derive from the program records and constrain each other. Subject options derive from the records matching both parents. Invalid values reset automatically; valid subjects remain selected. A status announcement explains when Subject resets. Reset restores all eight records. Existing URL-based filters remain supported.
- **Chat invitations:** the homepage secondary CTA and shared footer utility now read “Chat with Us.” The Ask Velmont product/page name and historical documents remain unchanged.
- **Botpress:** ordinary CTA clicks call the existing widget’s open method after its initialization event. The installed injection/configuration URLs and floating launcher are preserved. If the widget is unavailable, still loading, or throws an error, the real link continues to ask-velmont.html. That page now clearly instructs visitors to click the floating chat bubble. AI demonstration and human-review disclosures remain unchanged. No external Knowledge Base or workflow edits were made.
- **Admissions navigation:** desktop/mobile now contain Admissions Overview; Become a Student; International Students; Transfer Credit and Prior Learning; Returning to Study. Become a Student retains student-information.html#local-students; International Students uses student-information.html#international-students. Existing footer Admissions links are retained. No international content was expanded.

## Documented guide differences

The November 5 management instruction supersedes the relevant **N01–N02** menu requirements: the Programs dropdown is reduced from five entries to three and All Programs is renamed Explore All Programs; Illinois and US Students is renamed Become a Student and International Students is added to Admissions. These changes apply to desktop/mobile navigation. Footer degree links and the existing Illinois-first institutional language are preserved.

The interactive Ask Velmont · Demo label is replaced by Chat with Us as separately directed on November 5; the AI demonstration status is still disclosed on the destination page. No academic or institutional policy change is implied.

## Tests actually performed

### Browser: Chrome, local static preview

- Exercised Programs and Admissions dropdown toggles at **1440, 1300, 1120, 820 and 390px** in an exact-width iframe harness. Verified three Programs entries and five Admissions entries in both desktop/mobile DOMs, with correct labels. Also measured navigation at 1239px.
- Followed all three Programs and all five Admissions links in the browser. Correct pages loaded; local-students, international-students and returning-to-study anchor targets existed. Followed Explore All Programs through the mobile menu and verified the menu closed.
- Checked homepage and Programs document widths: no horizontal overflow at the five requested widths. Programs filter controls remained within the viewport; desktop navigation labels retained consistent single-line heights. Visually inspected the 390px mobile menu and filtered Programs layout.
- Tested desktop Enter to expand, Tab into Explore All Programs and Escape to close; mobile Enter to operate menu/group controls and Escape to close. Keyboard End selected the master’s level (two results); keyboard activation of Reset restored eight.
- Exercised every Subject option, including All subjects, under all nine Level/College contexts: **37 filter states**, all with the expected program URLs and counts.

| Level | College | Subject states tested | All-subject result count |
| --- | --- | ---: | ---: |
| All | All | 7 | 8 |
| All | Computing | 4 | 4 |
| All | Business/Health | 4 | 4 |
| Bachelor’s | All | 7 | 6 |
| Bachelor’s | Computing | 4 | 3 |
| Bachelor’s | Business/Health | 4 | 3 |
| Master’s | All | 3 | 2 |
| Master’s | Computing | 2 | 1 |
| Master’s | Business/Health | 2 | 1 |

- Verified invalid-subject resets: Cybersecurity → Business/Health college; Financial Technology → master’s; Data Science → master’s. Verified Business Analytics and Artificial Intelligence selections survive valid level changes. An incompatible URL subject (master’s/computing/Health Informatics) reset to All subjects and returned the correct one program.
- Homepage and footer Chat with Us clicks opened the live existing Botpress widget without leaving the homepage. Closed and reopened it using the floating launcher. No chat message was submitted.
- Deliberately blocked external scripts on a temporary preview-only test page: the CTA navigated to ask-velmont.html, where the floating-bubble instruction and disclosures were verified. Temporary test pages are excluded from the ZIP.

### Source/package checks

- JavaScript syntax checks passed for app.js, content.js and pages.js.
- Compared against the immediate prior ZIP: only index.html, ask-velmont.html, js/app.js, js/content.js and js/pages.js changed; the other 53 existing files are byte-identical.
- The full academic portfolio is identical: **eight programs and twelve bachelor’s concentrations**. All other content data is identical after accounting for the requested navigation/CTA edits and footer-specific menu copies. Page renderers outside the Programs renderer are unchanged.
- Checked 41 unique local file destinations from HTML assets/links, content URLs and route mappings: none missing. Browser checks above additionally verified the changed navigation anchors.
- Logo assets, favicon, CSS, PDFs, tuition/status content, investor files, deployment configuration and external Botpress script URLs are unchanged. ZIP integrity checked during packaging.

## Limits and follow-up

Responsive checks used Chrome with exact-width frames, not physical touch devices. Safari, Firefox, screen-reader speech output, live Netlify deployment and Botpress answer quality were not tested. Direct chat opening was verified with the service available; external service/network availability can still trigger the fallback. The empty-state message is implemented, but current dependent options offer no legitimate zero-result combination, so that branch was reviewed in code rather than demonstrated with altered academic data. This was a targeted regression check, not a complete site-wide accessibility audit.

No new management approval item is required to complete this pass. Previously documented deferred content/approval matters remain outside this scope. No deployment performed.

Technical reference: https://botpress.com/docs/webchat/interact/reference/ and https://botpress.com/docs/webchat/interact/listen-to-events/ (open method and initialized event).
