# Just Haus website

Static website for [Just Haus](https://justha.us), a design and build practice
in the White Mountains of New Hampshire.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Home. The idea. |
| `approach.html` | Philosophy. |
| `projects.html` | Alpha, the garage, and later intentions. |
| `journal.html` | Experiments. |
| `alpha.html` | Just Haus Alpha, under construction. |
| `about.html` | Daniel, and `hello@justha.us`. |

The site uses standalone HTML and CSS. There is no build step.

## Local preview

From the repository root:

```sh
python3 -m http.server 8081
```

Open `http://127.0.0.1:8081/` or append the page filename.

## Publishing

The site is hosted by GitHub Pages. `CNAME` maps the deployment to
`justha.us`, and pushing `main` triggers publication.

## Project context

- `AGENTS.md`: operating guidance for coding agents and LLMs.
- `docs/project-brief.md`: what the site is for, and the voice.
- `docs/decisions.md`: durable product and technical decisions.
- `docs/handoff.md`: current state and next actions.
- `REDESIGN_PLAN.md`: the redesign record, including what was deleted.
