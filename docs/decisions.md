# Project decisions

This file records durable decisions so future contributors do not have to infer
them from page history.

## Keep the website static

The current site is small, fast, inexpensive, and easy to publish as standalone
HTML and CSS through GitHub Pages. Do not introduce a framework or build system
without a concrete need and explicit approval.

## Keep TELO material direct-link-only

`telo.html` and `telo-concept.html` are intentionally absent from public
navigation and use `noindex, nofollow, noarchive`. This allows targeted sharing
while the outreach is exploratory. It reduces discovery but is not
authentication.

## Use the concise concept page as the primary TELO link

`telo-concept.html` is the preferred first-read page. `telo.html` remains the
more detailed field-partner proposal when additional depth is useful.

## Lead with packaging, not carbon

TELO's strongest relevance to Just Haus is compact packaging: smaller garages,
tighter access, reduced site disturbance, centralized parking, and narrow
service paths. Construction travel and carbon savings are a supporting
scenario, not the headline.

## Keep claims conditional

Payload, towing, range, charging, power export, production hardware, site
impacts, carbon savings, and delivery details must be verified before they are
presented as facts. The checklist in `docs/outreach/claims-to-verify.md` is the
source of truth.

## Disclose concept imagery

AI-generated vehicle and site images are independent visual concepts. Captions
must state that they are unofficial and are not official TELO renderings.

## Keep contact actions off the TELO pages

The direct-link pages are conversation pieces rather than lead-generation
landing pages. Contact details belong in personalized outreach, not in email
buttons or links on these pages.
