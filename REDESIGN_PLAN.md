# Just Haus website redesign

Updated October 11, 2026, from Daniel’s briefing. Where this file disagrees with the earlier draft of the plan, the briefing wins.

The site is about Just Haus, the company: a system for discovering better ways to build houses. Just Haus Alpha is the first project, not the whole site. The Science on Screen talk is not a section and is not the narrative. The pages do not offer services, quotes, or a sales call to action.

## What changed from the previous draft

The first pass treated the site as a record of Alpha and organized Journal, Approach, and Data around the talk. That was the wrong path. This pass:

- Leads with the company and the philosophy of removal, experiments, and extreme minimalism.
- Puts Alpha on a projects list, with room for later work, and labels every item’s status.
- Drops performance figures, costs, specifications, and credentials.
- Uses the real house mark. The header pairs it with JUSTHA.US. The hero is the mark alone, then the idea. The footer is one line: © Just Haus LLC and the email.
- Uses a warm near-black ground, birch for type, and a soft honey for hairlines and light. The page is phone-first.
- Leaves the phone off. Contact is `hello@justha.us`, which forwards to Daniel.

## Review of PR #3

[PR #3](https://github.com/dzajic/justhaus-web/pull/3) adds `brand/BRAND.md`, `brand/logo.svg`, `brand/tokens.css`, and `brand/preview.html`. It does not change a live page. This branch does not merge it.

The palette in that draft is the starting point. This pass uses a charred-wood near-black, `#161210`. Type is birch, `#F3EEE4`. Hairlines and the light strip are oiled-pine honey, `#C6A56E`.

`logo.svg` is not the mark. The real artwork is a heavy pitched-roof outline, one door cut out of the base, no windows, no slats, with JUST HAUS underneath. The SVG is a thin redraw and adds slats. Daniel has liked a slatted treatment as an extension. It is not on the site. The original geometry is what the pages use.

`JUSTHA.US` was accepted as a wordmark because it is also the URL. On the site it appears once, in the header, next to the house mark. The JUST HAUS wordmark file stays in `brand/` and is not repeated on the page. The footer uses the legal name, Just Haus LLC, in ordinary type. The business-card lines in PR #3 (a different email, a software job title) are not used.

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
| `presentations/` | Untouched. The deck is not linked from the public nav. |
| `images/` | Compressed copies of two real construction photographs, plus a small linen-grain tile. |
| `docs/` | Brief, decisions, and handoff. The TELO outreach notes are gone. |

Two real photographs are used. The home hero is Alpha with vertical solar panels set into the wood walls. The home page and the Alpha page also show the light wood cladding. No photograph in the repo is charred cladding, so none is labeled that way. The page structure does not come from the talk. Charts, yields, and the talk’s indoor measurements are not on the site.

## Brand on the pages

**Logo.** Header: the real house PNG, recolored birch so it reads on the dark ground, plus `JUSTHA.US` in letterspaced type. Home hero: the house mark only, then the idea. No second wordmark under it. Footer: `© Just Haus LLC · hello@justha.us`, with no logo. Favicon and the Apple icon are the birch house on `#161210`. Other pages use the same header and footer, and do not repeat the name as a lockup.

**Color.** Warm char ground `#161210`, birch type `#F3EEE4`, honey `#C6A56E` for hairlines, the light strip, and hover glow. Birch on the ground is about 16:1. Honey is not used for body type. A 13KB repeating tile adds a light linen grain on the dark surfaces. It is not applied over the photographs.

**Light.** A short warm strip sits under the header, with a faint cool edge at one end, and breathes on a nine-second cycle. The house mark has a soft glow that strengthens on hover. Focus states pick up the same light. Section rules carry a thin warm leak, and one groove in the hero’s slats is lit. `prefers-reduced-motion` stops the breathing and the hero fade. No script drives the light.

**Type.** No face has been chosen. The site uses Helvetica Neue, Helvetica, Arial. Headlines are large and calm. The letterspacing stays on the small header wordmark and the menu.

**Layout.** Phone first. Base CSS is the small screen. From 48em, the menu becomes a row and the column shifts left, leaving open space on the right. The phone menu is a Menu control; each link is at least 48px tall, and the other controls are at least 44px. Photographs use `srcset`. The home hero is full-bleed, with the type on a dark scrim.

## Pages

**Home.** A full-bleed photograph of Alpha, the house mark, the mission sentence, “Nature sets the forces. Just Haus applies leverage.”, and a second photograph of the wood cladding. Removal is the idea. Alpha is the first project, not the subject.

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

**About and contact.** Daniel Zajic, Just Haus LLC, the White Mountains. He also works in software. No job title, no employer, no years, no phone. Email: `hello@justha.us`, which forwards to Daniel. No form.

**Data.** The old figures were removed. The URL remains so the file is not deleted. It is `noindex` and absent from the nav.

## Claims left off

Costs, savings, square footage, R-values, energy yields, indoor measurements, code status, durability lifetimes, passive-house certification, a catalog, a team, licensed architect or engineering credentials, and any settled business model. “No foundation” is not stated. The foundation question is marked as being tested.

Family details, a street address, schedules, and finances are omitted. The town is not used; the place line is the White Mountains of New Hampshire.

## Deleted

Daniel approved removing anything that is not the company, the philosophy, and the record of the work. There was no sitemap file and no public nav entry for these.

| Removed | Why |
| --- | --- |
| `telo.html` | TELO field-partner proposal. A partner pitch, not the company site. |
| `telo-concept.html` | Shorter TELO concept page. Same reason. |
| `images/telo-just-haus-winter-concept-v4.png` | Image used only by the TELO pages. |
| `images/telo-just-haus-cabin-development-rear-trail.png` | Image used only by the TELO concept page. |
| `docs/outreach/` | TELO emails, talking points, claims checklist, and image notes. They pointed at the deleted pages. |
| `data.html` | Empty of figures on purpose. It published nothing. |

`alpha.html` stays. It is the project page. `presentations/` stays and is not linked from the nav.

Kept, and not linked from a page: `images/just-haus-alpha-master-plan.jpg` is an Alpha site rendering, not a TELO asset. The original brand files in `brand/` stay as source artwork. The live header uses `brand/logo-mark-light.png`.

## Left to do

- Decide whether a phone number is printed. The contact email is `hello@justha.us`.
- The header lockup is the house mark plus JUSTHA.US. The JUST HAUS wordmark stays off the pages. A slatted line is only a graphic in the hero, not a change to the mark.
- Confirm Greek-letter names before they become a system.
- Decide where the photo album lives, and whether experiments grow into a real journal.
- A checked vector of the mark, if print needs one.
- A typeface, when one is chosen.
- `docs/handoff.md` now matches this page list.

## Open questions

1. The phone number is off the site. Should it stay off?
2. JUSTHA.US is only in the header. The JUST HAUS wordmark is not on the pages. Is that the right long-term relationship?
3. Are later Greek letters a convention to keep showing, even as unsettled?
4. Is one construction photo enough, and is the photo album link wanted on Alpha?
5. How much of the failure record belongs on Experiments, beyond the one foam line?
6. The ground is warm char `#161210`, type is birch `#F3EEE4`, and the accent is honey `#C6A56E`. Lock them?
