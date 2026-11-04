# Botpress and PDF handoff

The deployed Botpress bot is external to the static website. Its existing inject/config URLs are unchanged. No bot account access or Knowledge Base write was performed.

1. Review `Botpress_Knowledge_Base_Replacement.md` against management decisions.
2. In the existing bot workspace, replace old university-name, Fall 2028, academic-area-only, unpriced-tuition and international-market sources. Remove the retired scripted-demo material and simulated email instructions. Keep the new material together with its planning and human-review limits.
3. Replace any uploaded copies of both PDF guides with the PDFs in `assets/guides/`. Website PDF paths have been preserved; externally hosted copies require separate replacement.
4. If using website ingestion, refresh/re-index the updated program, college, tuition, transfer, support, success and status URLs after the new site is deployed. Remove the old academic-area page sources so obsolete copy cannot compete with new degree content.
5. Update agent welcome text, suggested questions, workflows and branding separately if they contain the former name/date, unavailable advisor handoffs, application links or automated credit/funding promises. Keep the supplied logo artwork intact.
6. Publish the bot update and verify the response scenarios below. Website ZIP deployment alone does not update an uploaded KB source or a bot workflow.

## Post-publish answer checks

| Question | Required answer boundary |
| --- | --- |
| What is the university called and when will it open? | Velmont University; conditional Fall 2029; admissions closed. |
| What can I study? | Eight exact degree titles, two exact colleges, twelve correctly mapped bachelor’s concentrations. |
| How much is tuition? | Bachelor’s $45,000 / 120 credits; master’s $20,000 / 36 credits; tuition only, other expenses separate. |
| Do all programs require an internship? | All six bachelor’s degrees do; neither master’s has that requirement in the guide. |
| Is learning self-paced? | Online instruction in semester terms; attendance/workload details remain under development. |
| Can I transfer credits or get credit for work? | Proposed academic evaluation of demonstrated learning; no automatic award, fixed duration or guaranteed tuition saving. |
| Can I return after a break? | Proposed re-entry planning and updated requirements; no permanent-credit promise or operational application route. |
| Are scholarships or federal/state aid available? | No award offered through preview; aid eligibility not established. |
| Are you accredited? | Intended IBHE authorization pathway followed by HLC accreditation; no granted approval/candidacy/application-status claim. |
| Can international students enroll now? | No; international expansion is later, Illinois is the initial focus. |
| Can an advisor contact me or send the guide? | Verified contact channels remain pending; link to current PDFs without claiming an email was sent. |

The local preview confirmed the existing external scripts and visible Botpress launcher. Answer correctness, production-domain availability and the bot publication must be checked after this separate update.
