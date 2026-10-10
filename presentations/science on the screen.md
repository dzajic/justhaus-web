---
title: Science the House Out of It
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
<h1>Science the House Out of It</h1>
<h2>Building a dream, twelve experiments at a time.</h2>
<p><strong>Science on Screen — The Martian</strong></p>
<p>Daniel Zajic</p>
</div>
<div class="title-photo-stack">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/foam-animal-damage.jpg')"></div>
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/foam-blown-around.jpg')"></div>
</div>
</div>

<aside class="notes">
<ul>
<li>Quick overview: what I’m building, why, how it’s going</li>
<li>Lifelong habit: take things apart, make them better</li>
<li>Solo project + deliberate constraints</li>
<li>Martian connection: use what you have, solve the next problem</li>
</ul>
</aside>

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
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/architect-concept-1.jpeg')"></div>
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/architect-concept-2.jpeg')"></div>
</div>
<div class="architect-row">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/architect-concept-3.jpeg')"></div>
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/architect-concept-4.jpeg')"></div>
</div>
<div class="tile design-wide" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/my-design.jpg')"></div>
</div>
</div>

<aside class="notes">
<ul>
<li>Paid 4 architects → eventually designed it myself</li>
<li>Renovations made me want to start from scratch</li>
<li>Goal: comfort, access, fewer future problems</li>
<li>Original fantasy: custom house in 6 months</li>
<li>“How hard can this be?”</li>
</ul>
</aside>

---

<div class="split">
<div class="media">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/construction-progress.jpg')"></div>
</div>
<div class="copy">
<h1>The Challenge</h1>
<h2>Could one person build a high-performance house at very low cost?</h2>
<p><strong>One builder · Low cost · High performance</strong></p>
<p><em>Goal: a carbon-negative home that produces more energy than it uses.</em></p>
</div>
</div>

<aside class="notes">
<ul>
<li>Constraints: low cost, one builder, high performance</li>
<li>Start from first principles</li>
<li>BEAM = initial embodied carbon estimate only</li>
<li>Solar + all-electric + low demand = operational goal</li>
<li>Net-positive energy still a goal, not yet proven</li>
<li>Wood-fiber negative-carbon scenario ≠ this foam-built house</li>
</ul>
</aside>

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
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/home-systems-schematic.jpeg')"></div>
</div>
</div>

<aside class="notes">
<ul>
<li>Roadmap: five experiments</li>
<li>For each: question → choice → result / still testing</li>
</ul>
</aside>

---

<div class="split">
<div class="media photo-grid hero-grid">
<div class="tile hero" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/foundation-icf-blocks.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/foundation-footings.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/canopy-destroyed.jpg')"></div>
</div>
<div class="copy">
<h1>Why do I need a basement?</h1>
<h2>Frost-protected shallow foundation</h2>
<p><em>Protect against frost with insulation.</em></p>
<p>Less excavation. Less concrete. Easier for one person to build.</p>
</div>
</div>

<aside class="notes">
<ul>
<li>Basement fought every goal: cost, labor, concrete, moisture</li>
<li>Ask: do I need one?</li>
<li>Frost-protected shallow foundation = insulation protects soil</li>
<li>Wind-cident #1: canopy destroyed in 2 days</li>
<li>“A bad omen. It gets worse…”</li>
</ul>
</aside>

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
<div class="tile hero" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/exterior%20insulation.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/foam-wind-1.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/foam-wind-3.jpg')"></div>
</div>
</div>

<aside class="notes">
<ul>
<li>House = giant Yeti cooler</li>
<li>6″ EPS + 1″ polyiso ≈ R-33 foam layers</li>
<li>Problem: keep the foam on the property</li>
<li>Wind-cidents #2–4: 4×8 sheets flying</li>
<li>Reveal: then the roof panels blew off</li>
</ul>
</aside>

---

<div class="split">
<div class="media photo-grid hero-grid">
<div class="tile hero" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/interior-wood.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/exterior-wood-house-today.jpg')"></div>
<div class="tile small" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/wood-fiber-insulation.jpg')"></div>
</div>
<div class="copy">
<h1>I love wood. Outside and inside.</h1>
<h2>Removable. Repairable. Beautiful. </h2>
<p><strong>Local pine · Wood fiber insulation from Maine · Domestic lumber</strong></p>
<p>Why build a wall that has to be destroyed just to see what is behind it?</p>
</div>
</div>

<aside class="notes">
<ul>
<li>Wood everywhere: cladding, panels, doors, floors, ceiling</li>
<li>Local pine, Maine insulation, domestic lumber</li>
<li>Repairable + removable beats disposable</li>
<li>Renovation memory: plaster, lath, dust, destruction</li>
<li>“The next person could be me.”</li>
</ul>
</aside>

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

<aside class="notes">
<ul>
<li>ERV = fresh air + heat/moisture recovery</li>
<li>Tight house, controlled ventilation</li>
<li>So far: ~55% RH, 70–75°F spring/summer/fall</li>
<li>Winter is the next real test</li>
</ul>
</aside>

---

<div class="split">
<div class="media contain">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/solar-seasonal.png')"></div>
</div>
<div class="copy">
<h1>Solar panels - but vertical</h1>
<h2>Optimize for winter production, dual purpose</h2>
<p><strong>Makes less energy annually — but a snow covered roof makes none.</strong></p>
<p>They are siding too.</p>
<p><em>My vertical panels have briefly reached 110% of rated output from snow reflection.</em></p>
</div>
</div>

<aside class="notes">
<ul>
<li>Roof estimate: 13 MWh/yr</li>
<li>Vertical walls: 9.1 MWh/yr</li>
<li>Snowy roof scenario narrows gap to ~16%</li>
<li>Wall array briefly hit 110% from snow reflection</li>
<li>Panels are siding too</li>
<li>Optimize for when I need power, not annual peak</li>
</ul>
</aside>

---

<div class="split">
<div class="copy">
<h1>What's next?</h1>
<h2>Two years in, still experimenting.</h2>
<p>The house is finally becoming the thing I imagined.</p>
<p><strong>So naturally, I started another building.</strong></p>
</div>
<div class="media photo-grid" style="grid-template-columns:1fr 1fr; grid-template-rows:220px 330px; gap:10px;">
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/house-progress-october.jpg'); background-size:cover; background-position:center;"></div>
<div class="tile" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/garage-foundation-october.jpg'); background-size:cover; background-position:center;"></div>
<div class="tile wide" style="background-image:url('https://raw.githubusercontent.com/dzajic/justhaus-web/main/presentations/images/science%20on%20the%20screen/optimized/future-vision.jpg'); background-size:cover; background-position:center;"></div>
</div>
</div>

<aside class="notes">
<ul>
<li>House is finally becoming the thing I imagined</li>
<li>Still unfinished, still evolving</li>
<li>Separate garage is already underway</li>
<li>“So naturally, I started another building.”</li>
<li>Pause for laugh</li>
</ul>
</aside>

---

<div class="closing">
<h1>What I’ve learned</h1>
<ul>
<li>Doing anything different is hard, very hard.</li>
<li>Mistakes are frustrating but essential for progress.</li>
<li>Have fun and keep going. That's what really matters.</li>
</ul>
</div>

<aside class="notes">
<ul>
<li>Question the usual way of building</li>
<li>Take risks — never with safety</li>
<li>Learn by doing; let recoverable failures teach you</li>
<li>Remember the dream and the fun</li>
<li>Close: “What could possibly go wrong?”</li>
</ul>
</aside>
