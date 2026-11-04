# Velmont University — November website update

Updated from the user-supplied `velmontchicagouniversity-main.zip` only, against the 3 November 2026 content guide. Static HTML, CSS and vanilla JavaScript; no install/build step, framework, backend or database.

## Source map

- `js/content.js`: university planning copy, colleges, eight degree records, concentrations, page sections and navigation routes.
- `js/app.js`: shared header/footer, menus, homepage components and unchanged Botpress integration URLs.
- `js/pages.js`: informational, college and degree rendering; directory filters.
- `js/search.js`: search index derived from current content records.
- `js/investor-demo.js`: retained investor demonstration, with original client-side access disclosure.
- `assets/brand/velmont-original.jpeg`: unmodified supplied artwork; WebP derivatives and crest icons are separate files.
- `assets/guides/`: updated planning PDFs at the original paths.
- `docs/`: implementation report, requirement coverage, QA record, staff checklist and Botpress handoff.

Open `index.html` directly for basic review, or serve this root through any static HTTP server. Botpress needs a network connection to its external service. The source ZIP had no Netlify configuration; retain the existing GitHub/Netlify integration and use this directory as the static publish root with no build command. Do not deploy a containing ZIP folder accidentally as the publish directory.

## Deployment handoff

This package has not been committed to GitHub or deployed to Netlify. After review, back up the current deployment, replace the static project files, inspect the diff, commit to the intended branch and check the Netlify deploy preview. Remove `js/agent-demo.js` and `assets/brand/velmont-horizontal.webp`, which this update retires. Keep investor pages reachable only through the intended direct route; their existing demo login is not secure authentication.

`academic-area.html?area=business`, `?area=information-technology` and `?area=healthcare` retain client-side redirects to the new college or Health Informatics destinations. No server routing dependency is required.

The external Botpress Knowledge Base and bot workflow require a separate update. See `docs/Botpress_and_PDF_Handoff.md`. No scripted advisor or simulated email flow is restored.

