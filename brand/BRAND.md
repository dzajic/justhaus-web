# JUST HAUS — Brand System v1.0 (draft)

**Positioning:** A design-and-build practice with an engineer's curiosity: thoughtful spaces, practical systems, sustainable materials, and experimentation. The brand also represents Daniel Zajic's wider work as an engineer and builder.

**Primary mark:** `JUSTHA.US` — intentionally functions as both the brand wordmark and the website address. Use uppercase with generous tracking. In prose, write **Just Haus**; the legal business name is **Just Haus LLC**.

## Brand principles

1. **Minimal, not empty.** Remove ornament, preserve character.
2. **Built, not rendered.** Prefer real projects, materials, and process photography to generic stock imagery.
3. **Practical experimentation.** Engineering and iteration are strengths, not hidden behind polished marketing.
4. **Warm precision.** Clear geometry balanced with tactile textures and earthy colors.
5. **Consistent, not identical.** Applications may simplify the mark for small sizes and fabrication.

## Logo system

- **Core symbol:** classic symmetrical pitched-roof cabin outline, no chimney; centered rectangular doorway *cut out of the lower perimeter*.
- **Optional detail:** fine vertical slats on the right side, inspired by timber cladding; omit slats below ~18 mm symbol height or whenever the printing/embroidery process cannot reproduce them.
- **Primary lockup:** icon above `JUSTHA.US`; secondary small line: `Design · Build · Systems`.
- **Secondary lockup:** icon alone for embroidery, favicons, stamps, fasteners, or tiny placements.
- **Clear space:** at least the height of the door opening around symbol and wordmark.
- **Avoid:** gradients, drop shadows, clip art, heavily stylized roof forms, and crammed small text.
- **Note:** `logo.svg` is a new vector interpretation of the agreed concept, **not an extracted copy of the original logo**. Confirm against the existing master mark before declaring canonical.

## Color palette

| Token | Hex | Usage |
| --- | --- | --- |
| Charcoal | `#191A18` | Primary dark background, clothing, signage |
| Warm ivory | `#F3EFE6` | Paper, primary light background, reverse logo |
| Taupe | `#B7A58E` | Accent lines, subtle architectural details |
| Ink | `#242421` | Body text on ivory |
| Muted | `#746F67` | Supporting type |
| Hairline | `#C9BFB0` | Dividers and topographic linework |

Ensure body text meets legibility and contrast requirements. Taupe is primarily decorative, not for small type on ivory.

## Typography

- **Working family:** Inter (or comparable clean sans-serif); verify font licensing for distribution and print.
- **Wordmark:** uppercase, letterspacing about `0.21em`; reproduce as editable vector outlines for final printing.
- **Headlines:** light to regular; decisive scale, generous whitespace.
- **Body text:** regular, high contrast; avoid excessive letterspacing at small sizes.
- **Details:** small caps or uppercase selectively, not everywhere.

## Graphic language

- Geometric linework referencing roof, framing, and cladding.
- Sparse contour lines and evergreens as **secondary** motifs, never competing with information.
- Matte surfaces, paper grain, stone and wood textures; no faux luxury foils by default.
- Architecture and process imagery should be authentic, with room for imperfections and work-in-progress documentation.

## Voice

Curious, direct, grounded, quietly confident. Show the experiment, explain the tradeoffs, avoid grandiose claims.

**Working messages (not finalized):**
- Design · Build · Systems
- Rethinking how we build.
- Minimal spaces. Smart systems. Better building.

## Applications

### Business card
- US standard trim 3.5 × 2 inches; bleed per printer (MOO example 3.66 × 2.16 inches).
- Front: charcoal, centered warm-ivory symbol + `JUSTHA.US`, small descriptor.
- Back: warm ivory with dark contact information, restrained topographic motif on right.
- Daniel Zajic · Engineer · Builder · Systems Thinker
- Just Haus LLC · Principal Engineer, Form Health
- Franconia, NH · 503-332-3412 · danielzajic@gmail.com · justha.us
- Confirm the wording and professional affiliations before printing.

### Website
- Header: simplified logo and compact nav (Approach, Projects, Experiments, About, Contact).
- Hero: strong statement, dark background, authentic project photo.
- Alternating generous charcoal/ivory sections; accent lines and understated motion only.
- Project documentation is the primary proof; show construction details, failures, and iteration.
- Responsive, accessible, and fast, with consistent reusable CSS tokens.

### Letterhead
- Ivory or white uncoated stock; small cabin symbol and `JUSTHA.US` top-left.
- Thin taupe rule; large printable margin; concise contact line in footer.
- Black-only version must work on office printers.

### Clothing
- Dark charcoal or natural canvas garments.
- Small monochrome cabin icon on left chest; large `JUSTHA.US` wordmark optional on back.
- Single-color embroidery/screenprint variant without slats for clean reproducibility.

### Signage / vehicles
- High-contrast one-color lockup, no hairline graphics at distance.
- Domain can stand alone as the identity and call to action.

## Files / next iteration

- `logo.svg`: preliminary vector logo; compare to the original artwork before adoption.
- `tokens.css`: palette and typography primitives for the website.
- `preview.html`: browser preview to test lockups and surfaces.

**Next decisions:** confirm exact logo outline from original, finalize typography, approve logo slat/no-slat variants, validate printer-safe exports, then implement in the website repository on a review branch.