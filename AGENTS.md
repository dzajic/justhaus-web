# Just Haus agent guidance

Read this file before changing the repository. Then read `README.md` and, for
active work, `docs/handoff.md`. For branding, copy, imagery, page structure or
company positioning, also read `BRAND.md`, `docs/brand/just-haus-brief.md`,
and `docs/brand/decisions.md`. These distinguish the founder's words from
approved suggestions, historical plans and unresolved questions.

## Project

Just Haus is an early-stage design-build venture in Franconia, New Hampshire,
focused on compact, highly efficient homes, durable construction, resilient
energy systems, and low-impact site planning.

This repository is a dependency-free static website hosted by GitHub Pages at
`https://justha.us`. Pages share `css/site.css`. Preserve that simple
architecture unless the user explicitly approves a broader migration.

## Page map

- `index.html`: public homepage.
- `approach.html`: philosophy.
- `projects.html`: Alpha, the garage, and later intentions, each with a status.
- `journal.html`: experiments. Linked in the nav as Experiments.
- `alpha.html`: the Alpha project. Under construction.
- `about.html`: Daniel, and `hello@justha.us`.

`presentations/` is the Science on Screen deck. Leave it untouched, and do not
link it from the public nav.

## Brand memory

- `BRAND.md` is the concise working identity and messaging guide.
- `docs/brand/just-haus-brief.md` is historical/strategic context, not a list of settled claims.
- `docs/brand/decisions.md` tracks brand decisions and unanswered questions.
- Preserve quotes, certainty labels and the distinction between built, in progress, and proposed.
- Do not publish private family, financial, location or security information from historical context.
- The existing `docs/decisions.md` still governs site/technical decisions.

## Product and editorial rules

- Write in a quiet, architectural, practical voice: concise, credible, and
  specific. Avoid hype, luxury language, and generic sustainability claims.
- The site documents the company and the work. It does not offer services,
  quotes, pricing, or a sales call to action.
- Compactness is about land, materials, energy, cost, and operational
  efficiency.
- Treat vehicle capabilities, environmental outcomes, and site-planning
  benefits as hypotheses until verified. Do not publish costs, specifications,
  or performance figures.
- Contact on the site is `hello@justha.us` only, unless the user adds a phone
  number. No form.

## Imagery

- Use real construction photographs already in the repository.
- Do not use stock imagery, and do not add claims in captions.
- AI-generated concepts must be disclosed as independent and unofficial.
- Do not commit unused image-generation drafts.

## Working practices

- Preserve unrelated user changes in a dirty worktree.
- Inspect references before deleting or renaming assets.
- Stage explicit paths only.
- Keep public pages responsive and accessible, including useful alt text,
  readable contrast, and sensible mobile stacking.
- Phone first: base CSS for a small screen, then `min-width` queries. Tap
  targets at least 44px.

## Preview and validation

Preview from the repository root:

```sh
python3 -m http.server 8081
```

Then open the relevant page under `http://127.0.0.1:8081/`.

Before committing:

1. Parse or otherwise validate changed HTML.
2. Confirm every referenced local asset exists.
3. Run `git diff --check`.
4. Review the exact staged diff.

Pushing `main` publishes through GitHub Pages. Verify the affected URL after the
Pages deployment completes.
