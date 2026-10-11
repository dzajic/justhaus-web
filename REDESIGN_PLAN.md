# Just Haus website redesign

Updated October 11, 2026, from Daniel’s briefing. Where this file disagrees with the earlier draft of the plan, the briefing wins.

The site is about Just Haus, the company: a system for discovering better ways to build houses. Just Haus Alpha is the first project, not the whole site. The Science on Screen talk is not a section and is not the narrative. The pages do not offer services, quotes, or a sales call to action.

## What changed from the previous draft

The first pass treated the site as a record of Alpha and organized Journal, Approach, and Data around the talk. That was the wrong path. This pass:

- Leads with the company and the philosophy of removal, experiments, and extreme minimalism.
- Puts Alpha on a projects list, with room for later work, and labels every item’s status.
- Drops performance figures, costs, specifications, and credentials.
- Uses the real house mark, keeps the JUST HAUS wordmark, and sets JUSTHA.US beside it.
- Uses charcoal `#111111`, ivory `#F3EFE6`, and taupe `#B7A58E`.
- Leaves the phone off. Contact is the email already on the current site.

## Review of PR #3

[PR #3](https://github.com/dzajic/justhaus-web/pull/3) adds `brand/BRAND.md`, `brand/logo.svg`, `brand/tokens.css`, and `brand/preview.html`. It does not change a live page. This branch does not merge it.

The palette in that draft is close. This pass uses `#111111` for charcoal instead of `#191A18`. Ivory and taupe match.

`logo.svg` is not the mark. The real artwork is a heavy pitched-roof outline, one door cut out of the base, no windows, no slats, with JUST HAUS underneath. The SVG is a thin redraw and adds slats. Daniel has liked a slatted treatment as an extension. It is not on the site. The original geometry is what the pages use.

`JUSTHA.US` was accepted as a wordmark because it is also the URL. JUST HAUS is not dropped. The header and the home page show both, and the relationship is still open. The business-card lines in PR #3 (a different email, a software job title) are not used.

## Inventory

Static HTML and CSS. GitHub Pages from `main`. `CNAME` is `justha.us`. No build step.

| File | Role now |
| --- | --- |
| `index.html` | Home. The idea. |
| `approach.html` | Philosophy. |
| `projects.html` | Alpha, the garage, and later intentions. |
| `alpha.html` | The Alpha project. Under construction. |
| `journal.html` | Experiments. Questions in play, not a talk recap. |
| `about.html` | Daniel, and a contact email. |
| `data.html` | Unlisted stub. No figures. `noindex`. Deletion candidate. |
| `telo.html`, `telo-concept.html` | Unlisted. `noindex, nofollow, noarchive`. No contact link. Favicon only. |
| `presentations/` | Untouched. The deck is not linked from the public nav. |
| `images/`, `docs/` | Untouched. |

One construction photograph is used, on the Alpha page, because it shows a real unfinished building. The page structure does not come from the talk. Charts, yields, and the talk’s indoor measurements are not on the site.

## Brand on the pages

**Logo.** Header: the real house PNG plus `JUSTHA.US` in letterspaced type. Home: the same mark, `JUSTHA.US` at display size, and the real `JUST HAUS` wordmark PNG under it. Favicon is the house. The Apple icon is ivory on `#111111`.

**Color.** Ivory ground, charcoal text, taupe rules. Taupe is not used for small type. No fourth gray.

**Type.** No face has been chosen. The site uses Helvetica Neue, Helvetica, Arial.

**Layout.** One column, hairline rules, almost no chrome. The nav is Home, Approach, Projects, Experiments, About. Five text links, no buttons.

## Pages

**Home.** The mission sentence, “Nature sets the forces. Just Haus applies leverage.”, removal as the idea, Alpha named as the first project rather than the subject, and “Always becoming more.”

**Approach.** Subtraction, experiments (including “a dozen” at once), lessons passing to the next building, warmth from materials and light, repair without demolition, a real winter without performance numbers, technology that should simplify, and failure as evidence. Foam in the yard is one line, not a case study.

**Projects.** Each item has a status.

| Item | Status |
| --- | --- |
| Just Haus Alpha | Under construction |
| Detached garage, still being designed as it is built | Under construction |
| A single-story house | Long-term intention |
| A smaller dwelling | Long-term intention |
| A project for someone else | Long-term intention |

Greek letters after Alpha are described as unsettled. The page says the site is not taking commissions. Studio, Works, and Build are not published as divisions.

**Alpha.** Status: under construction. One photograph. The cube is named as a nickname. No dimensions, assemblies, or yields. A link to the existing photo album.

**Experiments.** Six questions, each marked “Being tested”: foundation, insulation (including the foam that left), interiors that come apart, air, energy for a snowy season, and sequence. No results and no numbers.

**About and contact.** Daniel Zajic, Just Haus LLC, the White Mountains. He also works in software. No job title, no employer, no years, no phone. Email: `justhaus.us@gmail.com`. No form.

**Data.** The old figures were removed. The URL remains so the file is not deleted. It is `noindex` and absent from the nav.

## Claims left off

Costs, savings, square footage, R-values, energy yields, indoor measurements, code status, durability lifetimes, passive-house certification, a catalog, a team, licensed architect or engineering credentials, and any settled business model. “No foundation” is not stated. The foundation question is marked as being tested.

Family details, a street address, schedules, and finances are omitted. The town is not used; the place line is the White Mountains of New Hampshire.

## Deletion candidates

Do not delete these until Daniel says so.

| Candidate | Why |
| --- | --- |
| `data.html` | Kept only so the file is not removed. It publishes nothing and is noindex. |

`alpha.html` stays. It is the project page. The TELO pages, the deck, and the image folders stay.

## Left to do

- Decide the public email and whether a phone number is printed.
- Decide how `JUSTHA.US` and `JUST HAUS` share the lockup, and whether slats are ever added without losing the original geometry.
- Confirm Greek-letter names before they become a system.
- Decide where the photo album lives, and whether experiments grow into a real journal.
- A checked vector of the mark, if print needs one.
- A typeface, when one is chosen.
- TELO pages left visually as they are.
- `docs/handoff.md` still describes the older next steps.

## Open questions

1. Is `justhaus.us@gmail.com` the public address, or the address on the October card?
2. The phone number is off the site. Should it stay off?
3. Is the JUSTHA.US plus JUST HAUS pairing on the home page the right relationship?
4. Are later Greek letters a convention to keep showing, even as unsettled?
5. Is one construction photo enough, and is the photo album link wanted on Alpha?
6. Should `data.html` be deleted once this structure is accepted?
7. How much of the failure record belongs on Experiments, beyond the one foam line?
8. Colors are the ones specified for this pass. The briefing still marks them as proposed. Lock them?
