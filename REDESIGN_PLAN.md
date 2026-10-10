# Just Haus website redesign

This plan covers the public site at `justha.us`. The site documents Just Haus Alpha, the house Daniel Zajic is building in Franconia, New Hampshire, and the reasons for the way it is built. It is not a client-services or sales site. He is not taking clients. The pages do not include pricing, service offerings, or calls to hire him.

The house is called **Just Haus Alpha**. Kinsman House is an old name and is not used.

## Review of open PR #3

[PR #3](https://github.com/dzajic/justhaus-web/pull/3), branch `brand/justhaus-system-v1`, adds four files and does not change a live page:

| File | What it is |
| --- | --- |
| `brand/BRAND.md` | Draft principles, logo rules, palette, type, and application notes, including a business-card layout |
| `brand/logo.svg` | A small vector drawing of a house outline |
| `brand/tokens.css` | Color, type, radius, and measure tokens |
| `brand/preview.html` | A one-page business-card preview |

Nothing in that pull request changes copy, components, or pages on the live site. There is no merge conflict with the HTML that was on `main`. The overlap with this redesign is the `brand/` directory and the decision to style the site from those tokens. If both branches are merged, `brand/tokens.css` will conflict. This branch does not merge PR #3.

Quality is mixed, and the split is useful:

- The palette holds up. Charcoal `#191A18`, warm ivory `#F3EFE6`, taupe `#B7A58E`, ink `#242421`, and hairline `#C9BFB0` match the project brief’s restrained black, white, gray, and warm natural accents. The 2px radius is a useful correction to the old site’s heavy rounding and shadows.
- The voice in `BRAND.md` is close to the brief: quiet, practical, willing to show process. Some of the draft is a practice identity (“Design · Build · Systems”, a client-ready card) rather than a record of one house.
- `preview.html` is a sketch, not production markup. It puts Form Health and `danielzajic@gmail.com` on the card. The live site’s public address is `justhaus.us@gmail.com`. Those card lines are not used here.
- `logo.svg` is labeled in the pull request as an interpretation. Compared with the real artwork it should not become the mark.

### Logo: the SVG against the real artwork

The authoritative files are `just-haus-logo.png` (the lockup, black on transparent) and `logo-only-outline.png` (the house only, black on white).

The real mark is a heavy, symmetrical house outline: a pitched roof, no chimney, and a centered door cut out of the bottom edge. The stroke is thick and even. There are no slats. The lockup places that house above the words **JUST HAUS**, in a wide, geometric, outlined face.

`brand/logo.svg` on PR #3 differs in kind, not just in polish:

- It is a thin stroke (`stroke-width: 5` on a 160-unit viewBox), not the heavy outline.
- It adds three vertical slats on the right side. The real outline has none. `BRAND.md` treats slats as an optional detail; the master files do not include them.
- The door and roof proportions are a redraw, not a trace of the PNG.
- It has no wordmark. `BRAND.md` also names `JUSTHA.US` as the primary wordmark. The artwork says `JUST HAUS`.

An automatic trace of the PNG was tried for a crisp SVG and did not hold the door and the letterforms. It was discarded. This branch uses optimized PNGs made from the real files, plus a favicon drawn from the house mark. A hand-drawn vector, checked against the PNG, is still worth doing later. It is not required for the pages to use the real mark.

## Inventory of the current site

Static HTML and CSS, no build, published by GitHub Pages from `main`. `CNAME` is `justha.us`.

### Pages

| File | Role before this branch | Visibility |
| --- | --- | --- |
| `index.html` | Short poetic homepage, grayscale rendering, email and phone, links to Alpha and a photo album | Public |
| `alpha.html` | Earlier essay on the Alpha project, with an invitation to discuss a project | Public |
| `telo.html` | Detailed TELO field-partner proposal | Unlisted, `noindex, nofollow, noarchive` |
| `telo-concept.html` | Shorter TELO site concept | Unlisted, same robots rules |

Each page carried its own `<style>` block. Shared tokens did not exist. The public pages used a light neutral palette, system sans-serif, large rounded cards, and a grayscale filter on the master-plan rendering.

The old homepage offered to “be your guide” and to start a conversation. That is the client-services voice this redesign leaves behind. The sentences are in git history. They are not kept on the page.

### Other files that must keep working

- `presentations/science on the screen.md` — the Reveal deck “Science the House Out of It.” It is not a public HTML page. Its image URLs point at `raw.githubusercontent.com` on `main`. This branch does not edit the deck, the scripts, or the data.
- `presentations/images/science on the screen/` and `small/` — photographs and charts. The new pages only link to files that already exist, using the `small/` copies where they do.
- `presentations/data/science-on-screen/` — the PVGIS solar model, CSV, and notes. The data page quotes that model and labels it as a model.
- `presentations/scripts/render-solar-comparison.py` — chart regeneration. Untouched.
- `images/` — the Alpha master-plan rendering and the two TELO concept images.
- `docs/` — brief, decisions, handoff, and TELO outreach notes. Untouched. `docs/handoff.md` still describes the older TELO-first next steps and should be updated after this direction is accepted.

Some filenames in the presentation folder do not match the photographs. Captions on the new pages follow the pictures, not the filenames. In particular, `canopy-destroyed.jpg` is a site rendering, `foam-blown-around.jpg` shows an energy-recovery ventilator, and `garage-foundation-october.jpg` and `foam-wind-1.jpg` show the house with vertical solar panels. Those last files are not used as illustrations, so a misleading filename is not published as a caption.

## Brand application

**Palette.** Ivory page, charcoal and ink for text and rules, taupe only as a short decorative rule. Supporting text is `#756959` rather than the draft’s `#746F67`, so body-size type clears WCAG AA on ivory (about 4.7:1). Taupe on ivory is about 2:1 and is not used for words.

**Type.** The brand draft names Inter, and asks that licensing be checked before distribution. This branch does not download or self-host a font file. The stack is Inter, then Helvetica Neue, Helvetica, and Arial. On a machine without Inter, the page uses the next face in that list. Headlines are medium weight, large, and tightly tracked. Body copy stays in a measure of about 40rem.

**Logo.** Header: the real house mark and the real `JUST HAUS` wordmark, as separate PNGs, on ivory. Favicon and Apple touch icon are the house. The touch icon is ivory on charcoal. The full lockup is kept at `brand/logo-lockup.png` for later use. The mark is not redrawn, recolored in the artwork, or given slats.

**Layout.** One column, a full-width hairline under the header and above the footer, generous space, square photographs (no grayscale, no heavy shadow, no large radius). Navigation is text, not buttons: Home, Journal, Approach, Data, About.

**What is not in the nav.** The TELO pages stay unlisted. `alpha.html` stays at its URL and is not a nav item. There is no sales button and no form.

## Page by page

### Home (`index.html`)

What Just Haus Alpha is, and why the project exists. Hero photograph of the wood-clad house. Short account from the talk: renovations, four architects, then his own drawing, one builder, two years in, a garage underway. Low cost and a house that produces more energy than it uses are named as goals, not as results. Links into the journal, the approach, and the data. The master-plan image is captioned as a rendering.

### Build journal (`journal.html`)

Progress and experiments, using photographs from the talk:

- Frost-protected shallow foundation and Fox Blocks forms. The wind-destroyed canopy is mentioned from the talk notes; there is no photograph of that damage in use here.
- Exterior foam (about 6 inches of EPS and 1 inch of polyiso, on the order of R-33) and the trouble keeping it on the building. Photograph of wood siding going on over the foam.
- Interior wood, and Maine wood-fiber batts, with an explicit note that the exterior coat is foam and that a wood-fiber carbon story is a different assembly.
- October progress and a later sheathing view. The photo album already linked from the old site stays here as a way to follow along.

### Approach (`approach.html`)

The why, organized as the talk’s five experiments, plus repairability:

- Shallow foundation instead of a basement. The page says plainly that the house has a foundation.
- Insulation outside the frame.
- Wood and wood fiber, for repair, not as a carbon claim.
- Healthy air: no drywall as an experiment, an energy-recovery ventilator, and the seasonal humidity and temperature summary. Winter is still ahead.
- All-electric operation and vertical solar as the aim, including the reported brief peak around 110 percent of rated output, pointed at the data page for the model.
- Adaptable finishes. The page does not claim that wiring and plumbing can be changed without damage.

### Data (`data.html`)

- Indoor conditions: near 55 percent relative humidity and about 70–75°F in spring, summer, and fall. No invented chart. A winter series is named as missing.
- Solar: the PVGIS comparison, labeled as a model at 45° N, not a meter in Franconia. The roof curve is a comparison case, not panels on this roof. Monthly chart, June daily chart, and a rounded table taken from `solar-monthly.csv`. The January–March zero-roof case is described as an assumption. The 110 percent peak is kept separate from the model.

### About (`about.html`)

Daniel Zajic, Franconia, New Hampshire, and how to write. Email and phone are the ones already published. The photo album is linked again. The page says there is no newsletter. It does not offer a service.

### Earlier project note (`alpha.html`)

The essays and the rendering stay. The invitation to discuss a project of one’s own is removed, along with the “start a conversation” button. A note at the top points to the new pages. The page is not in the nav.

### TELO pages

Unchanged except for a favicon link. They stay out of navigation, keep `noindex, nofollow, noarchive`, and still have no email link or contact button.

## Claims

Talking points that read as targets or as unverified outcomes are not stated as facts. Left out on purpose: 50 percent cheaper, about $200 per square foot, six months to occupancy, reduced property taxes, a maximized return, 100 percent renewable as an accomplished state, no radon mitigation, no VOCs, smart air monitoring, near-zero maintenance, a 50–100 year metal roof, and cladding composted after 20–30 years.

“No foundation” is not used as a description of the built house. The talk and the photographs show a frost-protected shallow foundation with insulated concrete forms. The page says that, and says the basement was the thing he decided against.

Where the talk states a goal, the site calls it a goal: one builder, high performance, low cost, and more energy produced than used. The embodied-carbon notes in the talk (BEAM as an initial estimate only; a wood-fiber scenario that is not this foam-insulated house) are respected by not publishing a carbon number.

## What this branch implements

- `brand/tokens.css`, adapted from PR #3, with the muted-text adjustment above.
- Real logo files, a web-sized lockup, header mark and wordmark, `favicon.ico`, a 32px PNG, and an Apple touch icon.
- `css/site.css` and the pages above.
- Favicon links on the two TELO pages.
- `presentations/` is unmodified.

## Deletion candidates

Do not delete these until Daniel says so.

| Candidate | Why it is a candidate |
| --- | --- |
| `alpha.html` | The home page now carries Just Haus Alpha. This file keeps an earlier, more promotional essay so the old URL still resolves. |

Nothing else is a deletion candidate. The TELO pages, the presentation deck, the image folders, `docs/`, and `images/` stay. PR #3’s `logo.svg` is not on `main`; the recommendation is to not adopt it, not to delete a file from this branch.

## Left to do

- A winter record of indoor humidity and temperature, and measured production from the wall panels, when those records exist.
- A newsletter only if Daniel chooses a tool. Email is the follow-along path for now.
- A checked vector of the real mark, if print or embroidery needs one.
- Self-hosting Inter, after licensing is confirmed. Until then the system stack is intentional.
- Visual alignment of the TELO pages with this palette, as a separate pass. They were left alone so the outreach pages do not change under him.
- Update `docs/handoff.md` once this direction is the one he wants to keep.
- Further image weight, if the journal feels heavy on a phone. The pages already use the `small/` copies.

## Open questions

1. Is `justhaus.us@gmail.com` still the public address, or should the site use `danielzajic@gmail.com` from the brand-card draft?
2. Should the phone number stay on the about page?
3. The Form Health line on the brand-card draft is not on the site. Confirm it stays off.
4. The artwork says JUST HAUS. The brand draft prefers JUSTHA.US as the wordmark. This site follows the artwork.
5. Is email enough, or is there a newsletter or list to link?
6. May `alpha.html` be removed once this structure is accepted?
7. Should the four architect studies from the talk be shown, or only described?
8. Are the talk’s indoor figures (about 55 percent relative humidity, 70–75°F) approved to stay on the public site?
9. Are the PVGIS charts and the rounded table approved to stay, with the caveats as written?
10. Are the photographs used here, especially `future-vision.jpg` and `exterior-wood-house-today.jpg`, the ones he wants as the public face of the house?
11. The talk says a separate garage is underway. The filename that suggests a garage photograph does not show one. Is the sentence still right?
12. How should the Maine wood-fiber batts be described: a material in the record, or something already installed in a named part of the wall?
13. Should the TELO pages pick up this visual system later, or stay as they are through the outreach?
