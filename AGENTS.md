# Just Haus agent guidance

Read this file before changing the repository. Then read `README.md` and, for
active work, `docs/handoff.md`.

## Project

Just Haus is an early-stage design-build venture in Franconia, New Hampshire,
focused on compact, highly efficient homes, durable construction, resilient
energy systems, and low-impact site planning.

This repository is a dependency-free static website hosted by GitHub Pages at
`https://justha.us`. Pages contain their own HTML and CSS. Preserve that simple
architecture unless the user explicitly approves a broader migration.

## Page map

- `index.html`: public homepage.
- `alpha.html`: public Just Haus Alpha project page.
- `telo.html`: detailed TELO field-partner proposal; intentionally unlisted.
- `telo-concept.html`: concise TELO site concept; intentionally unlisted.

The TELO pages must remain absent from public navigation and retain
`noindex, nofollow, noarchive` unless the user explicitly changes the
publication strategy. Direct-link-only is not access control.

## Product and editorial rules

- Write in a quiet, architectural, practical voice: concise, credible, and
  specific. Avoid hype, luxury language, and generic sustainability claims.
- Compactness is about land, materials, energy, cost, and operational
  efficiency—not novelty or deprivation.
- The TELO story leads with packaging efficiency: useful pickup capability in
  a smaller footprint, smaller garages, tight construction access, reduced
  grading and clearing, centralized parking, and narrow service paths.
- Solar-powered solo construction and reduced transportation emissions are
  supporting benefits, not the central TELO pitch.
- Treat vehicle capabilities, environmental outcomes, and site-planning
  benefits as hypotheses until verified. Use conditional language and preserve
  the verification checklist in `docs/outreach/claims-to-verify.md`.
- Do not add email links or contact buttons to either TELO page.
- Keep Tesla comparisons factual and grounded in Daniel's direct winter
  experience. Relevant issues include deep cold, cold-soaked batteries,
  windshield clearing, wipers and sprayers, frozen handles and latches, and
  tailgate operation.
- Daniel is willing to contribute testing time and structured feedback without
  consulting fees. This does not imply paying for a vehicle, program expenses,
  insurance, liability, or formal testing obligations.

## Imagery

- Production concept images are listed in `docs/outreach/concept-imagery.md`.
- AI-generated concepts must be disclosed as independent and unofficial.
- Never imply that generated imagery is official TELO material or depicts
  confirmed production features.
- Do not commit unused image-generation drafts.

## Working practices

- Preserve unrelated user changes in a dirty worktree.
- Inspect references before deleting or renaming assets.
- Stage explicit paths only.
- Keep public pages responsive and accessible, including useful alt text,
  readable contrast, and sensible mobile stacking.
- Do not link the TELO pages from `index.html` or `alpha.html`.

## Preview and validation

Preview from the repository root:

```sh
python3 -m http.server 8081
```

Then open the relevant page under `http://127.0.0.1:8081/`.

Before committing:

1. Parse or otherwise validate changed HTML.
2. Confirm every referenced local asset exists.
3. Check that TELO pages remain unlisted and retain their robots metadata.
4. Run `git diff --check`.
5. Review the exact staged diff.

Pushing `main` publishes through GitHub Pages. Verify the affected URL after the
Pages deployment completes.
