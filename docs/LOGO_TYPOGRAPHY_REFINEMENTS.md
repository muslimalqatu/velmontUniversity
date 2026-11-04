# Logo and navigation typography refinements

4 November 2026. Based on the latest HOMEPAGE_SHARED_UI_REVIEW package.

## Actual changes

1. Restored the exact header logo WebP from immediately before the shared UI pass. It reads **Velmont University**; “Chicago, Illinois” is a location line, not the obsolete institutional name. Restored its prior responsive footprint: 142px desktop, 124px tablet and 108px mobile, with proportional height. The header accommodates that image at the prior corresponding heights.
2. Set only the six main desktop group labels to **600 weight and 14px** (previously inherited 680 weight at approximately 13px). The slight size increase provides prominence while following the requested semi-bold weight. Dropdown item typography and behavior are unchanged.
3. Restored the exact previous footer logo WebP, fitted at 190px wide on a compact white backing within the existing branding column. The shared UI footer grid, columns, links, gaps and responsive rules are unchanged.

The artwork still contains “Turning Knowledge Into Practice”; the site's existing text tagline remains “Turn knowledge into practice.” Neither wording was edited in this pass. Transparent crest assets and the favicon are unchanged.

## Checks performed

- Visually verified both restored images show the correct Velmont University identity before using them.
- Chromium exact-width framed checks at **1440, 1300, 1239 and 1120px**: six visible desktop groups, computed 600/14px styling, no label wrapping, no overlap between group buttons, no collision with Search and no horizontal document overflow.
- Additional checks at **820 and 390px**: expected responsive menu and footer grid; no horizontal overflow or broken images.
- Visually inspected the header and footer on desktop and mobile. Footer retains 23 navigation links and four utilities.
- Checked all six desktop dropdowns with Arrow Down and Escape. At 390px, opened the mobile menu, expanded Programs (five links) and closed it with Escape.
- Verified the two restored image files are byte-identical to their pre-review versions; favicon/touch icon, transparent crest, academic data, HTML pages, page renderer and Search code remain byte-identical to the latest shared UI package. Normalizing only the two branding-markup replacements leaves the shared JavaScript identical, including navigation behavior and Botpress.
- JavaScript syntax and final archive integrity passed.

Physical devices, Safari/Firefox and comprehensive accessibility testing were not performed. No GitHub/Netlify deployment or external Botpress changes were made.
