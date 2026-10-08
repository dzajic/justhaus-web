---
title: What Could Possibly Go Wrong?
slideOptions:
  theme: black
  transition: fade
  slideNumber: true
  width: 1280
  height: 720
  margin: 0.04
---

<style>
body { background:#111; }

.reveal {
  color:#f1eee7;
  font-family:Inter,Helvetica,Arial,sans-serif;
  font-size:21px;
}
.reveal .slides { text-align:left; }
.reveal h1,.reveal h2,.reveal h3 {
  text-transform:none;
  letter-spacing:-0.02em;
  font-weight:700;
}
.reveal h1 {
  color:#d66a3a;
  font-size:42px;
  line-height:1.05;
  margin:0 0 14px;
}
.reveal h2 {
  color:#d8b38a;
  font-size:26px;
  line-height:1.15;
  margin:0 0 20px;
}
.reveal p,
.reveal li {
  font-size:21px;
  line-height:1.35;
}
.reveal p { margin:0 0 16px; }
.reveal li { margin:0 0 8px; }
.reveal strong { color:#d66a3a; }
.reveal em { color:#d8b38a; }
.reveal a { color:#d66a3a; }
.reveal .slide-number { color:#777; }

/* Build everything against Reveal's fixed 1280×720 canvas. */
.reveal .split {
  display:flex;
  width:100%;
  height:600px;
  gap:36px;
  align-items:stretch;
}
.reveal .split > .copy,
.reveal .split > .media,
.reveal .split > .stat-panel {
  flex:1 1 0;
  width:0;
  min-width:0;
}
.reveal .copy {
  display:flex;
  flex-direction:column;
  justify-content:center;
  box-sizing:border-box;
  padding:22px 18px;
}
.reveal .copy ul,
.reveal .copy ol {
  margin:4px 0 0 28px;
  padding:0;
}

.reveal .media {
  height:600px;
  box-sizing:border-box;
  overflow:hidden;
  border-radius:10px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.reveal .media > .tile {
  width:100%;
  height:560px;
}
.reveal .media.contain > .tile {
  width:100%;
  height:560px;
}

/* Multi-photo half-slide: two columns; landscape images can span both. */
.reveal .photo-grid {
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-auto-rows:175px;
  gap:10px;
  align-content:center;
  height:600px;
  width:100%;
  box-sizing:border-box;
}
.reveal .photo-grid.hero-grid {
  grid-template-rows:360px 220px;
}
.reveal .tile {
  background-repeat:no-repeat;
  background-position:center center;
  background-size:contain;
  min-width:0;
  min-height:0;
  border-radius:6px;
}
.reveal .photo-grid .tile {
  width:100%;
  height:100%;
}
.reveal .photo-grid .wide {
  grid-column:1 / span 2;
}
.reveal .photo-grid.hero-grid .hero {
  grid-column:1 / span 2;
  grid-row:1;
}
.reveal .photo-grid.hero-grid .small {
  grid-row:2;
}

.reveal .systems-graphic {
  position:relative;
  width:100%;
  height:600px;
  box-sizing:border-box;
}
.reveal .center-box {
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
  width:220px;
  height:220px;
  border:2px solid #d8b38a;
  border-radius:14px;
  background:#151515;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
}
.reveal .center-title {
  color:#f1eee7;
  font-size:34px;
  font-weight:700;
  line-height:1.05;
  letter-spacing:0.02em;
}
.reveal .center-subtitle {
  color:#d8b38a;
  font-size:20px;
  margin-top:8px;
}
.reveal .system-node {
  position:absolute;
  width:180px;
  text-align:center;
}
.reveal .system-node .symbol {
  color:#d66a3a;
  font-size:34px;
  line-height:1;
  margin-bottom:8px;
}
.reveal .system-node .label {
  color:#f1eee7;
  font-size:20px;
  font-weight:600;
  line-height:1.15;
}
.reveal .system-node .sub {
  color:#d8b38a;
  font-size:16px;
  margin-top:4px;
  line-height:1.2;
}
.reveal .node-top {
  left:50%;
  top:24px;
  transform:translateX(-50%);
}
.reveal .node-left {
  left:8px;
  top:205px;
}
.reveal .node-right {
  right:8px;
  top:205px;
}
.reveal .node-bottom-left {
  left:40px;
  bottom:28px;
}
.reveal .node-bottom-right {
  right:40px;
  bottom:28px;
}
.reveal .connector {
  position:absolute;
  background:#8f7a66;
  opacity:0.9;
}
.reveal .connector.top {
  left:50%;
  top:112px;
  transform:translateX(-50%);
  width:2px;
  height:86px;
}
.reveal .connector.left {
  left:180px;
  top:300px;
  width:150px;
  height:2px;
}
.reveal .connector.right {
  right:180px;
  top:300px;
  width:150px;
  height:2px;
}
.reveal .connector.bottom-left {
  left:250px;
  bottom:158px;
  width:110px;
  height:2px;
  transform:rotate(28deg);
  transform-origin:left center;
}
.reveal .connector.bottom-right {
  right:250px;
  bottom:158px;
  width:110px;
  height:2px;
  transform:rotate(-28deg);
  transform-origin:right center;
}

.reveal .stat-panel {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:600px;
  box-sizing:border-box;
  border:1px solid #333;
  border-radius:10px;
  text-align:center;
  background:#171717;
}
.reveal .stat-panel .big {
  color:#d66a3a;
  font-size:56px;
  font-weight:700;
  line-height:1;
}
.reveal .stat-panel .label {
  color:#d8b38a;
  font-size:20px;
  margin-top:10px;
}

.reveal .title-split {
  display:flex;
  width:100%;
  height:600px;
  gap:24px;
  align-items:stretch;
}
.reveal .title-split .title-copy {
  flex:0 0 42%;
}
.reveal .title-split .title-photo-stack {
  flex:1 1 auto;
}
.reveal .title-photo-stack {
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:10px;
  height:600px;
  box-sizing:border-box;
}
.reveal .title-photo-stack .tile {
  width:100%;
  height:295px;
  flex:0 0 295px;
  background-size:cover;
  background-position:center center;
}

.reveal .architect-stack {
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:10px;
  height:600px;
  width:100%;
  box-sizing:border-box;
}
.reveal .architect-row {
  display:flex;
  gap:10px;
  width:100%;
  height:185px;
}
.reveal .architect-row .tile {
  flex:1 1 0;
  height:185px;
  background-size:contain;
  background-position:center center;
}
.reveal .architect-stack .design-wide {
  width:100%;
  height:185px;
  flex:0 0 185px;
  background-size:contain;
  background-position:center center;
}
.reveal .title-copy {
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:600px;
  box-sizing:border-box;
  padding:0 8px 0 18px;
}
.reveal .title-copy h1 {
  font-size:58px;
  line-height:1.02;
  margin:0 0 18px;
}
.reveal .title-copy h2 {
  font-size:30px;
  line-height:1.15;
  margin:0 0 24px;
}

.reveal .title-slide,
.reveal .closing {
  display:flex;
  flex-direction:column;
  justify-content:center;
  height:600px;
  box-sizing:border-box;
  padding:0 70px;
  max-width:1050px;
}
.reveal .title-slide h1 { font-size:60px; }
.reveal .title-slide h2 { font-size:30px; }
.reveal .closing h1 { font-size:46px; }
.reveal .closing li { font-size:24px; margin-bottom:14px; }
</style>

<div class="title-split">
<div class="title-copy">
<h1>What Could Possibly Go Wrong?</h1>
<h2>Building a dream, one experiment at a time.</h2>
<p><strong>Science on Screen — The Martian</strong></p>
<p>Daniel Zajic</p>
</div>
<div class="title-photo-stack">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/foam-animal-damage.jpg')"></div>
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/foam-blown-around.jpg')"></div>
</div>
</div>

<!-- NOTES:
Text-only title slide.
Opening: “I could easily spend an hour on any one of these topics. Tonight is a quick overview: what I’m building, why I’m doing it, and how it’s going.”
“Since I was a child, I’ve been taking things apart—sometimes because I broke them—and trying to make them better.”
A multi-year solo project: an ideal, deliberate constraints, and learning through real problems.
The Martian connection: use what you have, test ideas, solve the next problem.
-->

---

<div class="split">
<div class="copy">
<h1>The Dream</h1>
<h2>Four architects. Then me.</h2>
<p>After years of renovating old houses, I wanted to start from scratch.</p>
<p><strong>Comfort. Simplicity. Accessibility. Fewer inherited problems.</strong></p>
</div>
<div class="media architect-stack">
<div class="architect-row">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/architect-concept-1.jpeg')"></div>
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/architect-concept-2.jpeg')"></div>
</div>
<div class="architect-row">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/architect-concept-3.jpeg')"></div>
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/architect-concept-4.jpeg')"></div>
</div>
<div class="tile design-wide" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/my-design.jpg')"></div>
</div>
</div>

<!-- NOTES:
“I paid four separate architects to develop concepts. Eventually, I realized I had to design it myself—and that turned into doing everything myself.”
Twenty years of renovations made me want to start from scratch: comfort, accessible infrastructure, and fewer problems handed to the next person.
The original ambition: a custom house built in six months. “How hard can this be? One person should be able to do this much more quickly if they just keep it simple.”
The first designs were more than six years ago. Let the renderings show the dream.
-->

---

<div class="split">
<div class="media">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/construction-progress.jpg')"></div>
</div>
<div class="copy">
<h1>The Challenge</h1>
<h2>Could one person build a high-performance house at very low cost?</h2>
<p><strong>One builder · Low cost · High performance</strong></p>
<p><em>Goal: a carbon-negative home that produces more energy than it uses.</em></p>
</div>
</div>

<!-- NOTES:
Cost, comfort, sustainability, efficiency, simplicity.
“One person, very low cost, high performance” were deliberate constraints. They forced me to question the usual choices and ask what was truly necessary.
Housing faces cost and labor pressures; this is my attempt to find better answers by starting from first principles.
I used BEAM (Building Emissions Accounting for Materials) to estimate initial embodied carbon from the building materials. This is a material-production estimate, not a lifetime carbon assessment.
Solar generation, all-electric operation, and low energy demand are intended to improve the operational carbon picture over time. That expectation is separate from the BEAM estimate.
Producing more energy than the house uses remains a goal until production and consumption can be compared.
The negative BEAM scenario refers to the planned wood-fiber exterior insulation. It was not ready in time for this house; I may use it on the garage. Do not present that scenario as the result for the foam-insulated house as built.
BEAM methodology: https://www.buildersforclimateaction.org/beam-estimator.html
-->

---

<div class="split">
<div class="copy">
<h1>Five experiments</h1>
<ol>
<li>Foundation</li>
<li>Exterior insulation</li>
<li>No drywall</li>
<li>Controlled ventilation</li>
<li>Solar panel walls</li>
</ol>
</div>
<div class="media contain">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/home-systems-schematic.jpeg')"></div>
</div>
</div>

<!-- NOTES:
A quick roadmap so the audience knows what is coming.
For each experiment: the question, the choice, and what I have observed or still need to test.
-->

---

<div class="split">
<div class="media photo-grid hero-grid">
<div class="tile hero" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/foundation-icf-blocks.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/foundation-footings.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/canopy-destroyed.jpg')"></div>
</div>
<div class="copy">
<h1>Why do I need a basement?</h1>
<h2>Frost-protected shallow foundation</h2>
<p><em>Protect against frost with insulation.</em></p>
<p>Less excavation. Less concrete. Easier for one person to build.</p>
</div>
</div>

<!-- NOTES:
Basements are expensive, difficult to keep dry and warm, hard to build alone, and use a lot of concrete with an upfront carbon cost.
“A basement made all four of my goals harder. So I questioned whether I needed one at all.”
Strategically placed insulation keeps the supporting soil from freezing, allowing a shallower foundation.
Wind-cident #1: my shade canopy was destroyed in about two days.
“A bad omen. It gets worse…”
Reference: https://www.huduser.gov/Publications/PDF/FPSFguide.pdf
-->

---

<div class="split">
<div class="copy">
<h1>I built a Yeti cooler</h1>
<h2>7 inches of exterior foam</h2>
<p><strong>6″ EPS + 1″ polyiso · About R-33</strong></p>
<p>The simple idea: put almost all of the insulation outside the structure.</p>
<p><em>The harder problem: keeping it on the property.</em></p>
</div>
<div class="media photo-grid hero-grid">
<div class="tile hero" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/exterior%20insulation.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/foam-wind-1.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/foam-wind-3.jpg')"></div>
</div>
</div>

<!-- NOTES:
“I was wrapping the whole house in a cooler. But first, I had to keep the insulation on the property.”
Six inches at R-4.5 per inch plus one inch at R-6 gives about R-33 for the foam layers, rather than a whole-wall rating.
Wind-cidents #2, #3, and #4: strong gusts lifted the 4-by-8-foot panels and tossed them around the site.
“It got worse.” Pause. “Then the roof panels blew off.” Wind-cident #5. No roof photos; deliver that reveal aloud.
-->

---

<div class="split">
<div class="media photo-grid hero-grid">
<div class="tile hero" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/interior-wood.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/exterior-wood-house-today.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/wood-fiber-insulation.jpg')"></div>
</div>
<div class="copy">
<h1>I love wood. Outside and inside.</h1>
<h2>Removable. Repairable. Beautiful. </h2>
<p><strong>Local pine · Wood fiber insulation from Maine · Domestic lumber</strong></p>
<p>Why build a wall that has to be destroyed just to see what is behind it?</p>
</div>
</div>

<!-- NOTES:
Wood cladding, interior panels, doors, flooring, ceilings, and wood fiber insulation under the roof.
Wood stores carbon while it remains in the building. Local sourcing, durability, repair, and reuse matter to the lifetime impact.
All the pine is local, the insulation is from Maine, and the lumber is domestic. Birch plywood is imported; its origin is unconfirmed.
One brief renovation memory: plaster embedded in metal lath, wallpaper removal, or dust that never stays contained.
“Why build something new that must be destroyed to change it?” Removable panels give access to infrastructure and reduce future demolition.
“I don’t want to make the next person’s job harder. The next person could be me.”
-->

---

<div class="split">
<div class="copy">
<h1>24/7 fresh air with no downsides</h1>
<h2>Energy Recovery Ventilators (ERV)</h2>
<p>A super tight envelope allows for better control, efficiency.</p>
<p><strong>Stable indoor conditions so far.</strong></p>
</div>
<div class="stat-panel">
<div class="big">≈55%</div>
<div class="label">relative humidity</div>
<div class="big" style="margin-top:0.55em;">70–75°F</div>
<div class="label">spring · summer · fall</div>
</div>
</div>

<!-- NOTES:
An ERV exchanges indoor and outdoor air while recovering some heat and moisture from the outgoing air, reducing the conditioning load.
Indoor conditions have been very stable: around 55% relative humidity and 70–75°F during spring, summer, and fall. These observations do not isolate the ERV’s contribution.
“These are the indoor conditions I’ve tracked so far. Winter is the next test.”
-->

---

<div class="split">
<div class="media contain">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/solar-seasonal.png')"></div>
</div>
<div class="copy">
<h1>Solar panels - but vertical</h1>
<h2>Optimize for winter production, dual purpose</h2>
<p><strong>Makes less energy annually — but a snow covered roof makes none.</strong></p>
<p>They are siding too.</p>
<p><em>My vertical panels have briefly reached 110% of rated output from snow reflection.</em></p>
</div>
</div>

<!-- NOTES:
PVGIS estimates 13 MWh/year for the roof and 9.1 for the walls. If snow leaves the roof at zero January–March, the roof estimate drops to 10.8; the walls produce 2.1 in those months. Snow reflection has briefly pushed the wall array to 110% of rated power, though that peak doesn’t tell us the seasonal energy gain. Under the snow scenario, the annual gap is about 16%, before counting that boost. The panels are siding too: less cladding and painting, with their weight and mounts off the roof. I want power when I need it.
-->

---

<div class="split">
<div class="copy">
<h1>What's next?</h1>
<h2>Two years in, still experimenting.</h2>
<p>The house is finally becoming the thing I imagined.</p>
<p><strong>So naturally, I started another building.</strong></p>
</div>
<div class="media">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/codex/science-on-screen-complete/presentations/images/science%20on%20the%20screen/exterior-wood-house-today.jpg')"></div>
</div>
</div>

<!-- NOTES:
Show the outside: a prototype still in progress, two-plus years in, with more work ahead.
Talk about the decision to build a separate garage.
“Then I decided to build a separate garage. That’s what I’m working on now. Another beginning!”
Pause for the laugh.
-->

---

<div class="closing">
<h1>What I’ve learned</h1>
<ul>
<li>Take risks—never with safety.</li>
<li>If you aren’t failing, you aren’t making progress.</li>
<li>Remember why you started: to have fun.</li>
</ul>
</div>

<!-- NOTES:
Return to the promise of the talk: “What if a home could give back more than it takes? And if that’s within reach, why aren’t we already building this way?”
“I’m still testing how close I can get. But questioning the usual way of building has already opened up possibilities.”
Take risks, but never with safety. Be willing to begin before feeling like an expert and learn by doing. Let recoverable failures teach you.
Remember the dream and the fun that got this started.
Close: “What could possibly go wrong?” Then take questions.
-->
