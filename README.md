# Just Haus website

Static website for [Just Haus](https://justha.us), an early-stage design-build
venture in Franconia, New Hampshire.

## Structure

| File | Purpose | Visibility |
| --- | --- | --- |
| `index.html` | Main Just Haus landing page | Public and navigable |
| `alpha.html` | Just Haus Alpha project | Public and navigable |
| `telo.html` | Detailed TELO field-partner proposal | Direct link only; `noindex` |
| `telo-concept.html` | Concise TELO compact-site concept | Direct link only; `noindex` |
| `docs/outreach/` | TELO outreach copy, research, and verification notes | Repository documentation |

The site intentionally uses standalone HTML and CSS with no build system or
runtime dependencies.

## Local preview

From the repository root:

```sh
python3 -m http.server 8081
```

Open `http://127.0.0.1:8081/` or append the page filename.

## Publishing

The site is hosted by GitHub Pages. `CNAME` maps the deployment to
`justha.us`, and pushing `main` triggers publication.

Before publishing, verify changed HTML, local asset references, responsive
layout, robots metadata for unlisted pages, and the staged diff.

## Project context

- `AGENTS.md`: operating guidance for coding agents and LLMs.
- `docs/project-brief.md`: mission, audiences, voice, and positioning.
- `docs/decisions.md`: durable product and technical decisions.
- `docs/handoff.md`: current state and next actions.
- `docs/outreach/claims-to-verify.md`: claims that must be confirmed before
  external outreach.
