(function () {
  var button = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!button || !nav) return;

  var wide = window.matchMedia("(min-width: 48em)");

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.textContent = open ? "Close" : "Menu";
    nav.classList.toggle("is-open", open);
  }

  function sync() {
    if (wide.matches) setOpen(false);
  }

  button.addEventListener("click", function () {
    var open = button.getAttribute("aria-expanded") === "true";
    setOpen(!open);
    if (!open) {
      var first = nav.querySelector("a");
      if (first) first.focus();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      button.focus();
    }
  });

  if (wide.addEventListener) wide.addEventListener("change", sync);
  else if (wide.addListener) wide.addListener(sync);
})();

(function () {
  var dialog = document.getElementById("card-welcome");
  if (!dialog || !window.URLSearchParams) return;

  var params;
  try {
    params = new URLSearchParams(window.location.search);
  } catch (error) {
    return;
  }
  if (params.get("ref") !== "card") return;

  var storageKey = "jh-welcome-card";
  try {
    if (window.sessionStorage && sessionStorage.getItem(storageKey) === "1") return;
  } catch (error) {
    /* Private mode can block storage. Still show the note once. */
  }

  var previous = document.activeElement;
  var closeButton = dialog.querySelector(".welcome-close");
  var lookButton = dialog.querySelector("[data-welcome='look']");
  var mailLink = dialog.querySelector("a[href^='mailto:']");

  function remember() {
    try {
      if (window.sessionStorage) sessionStorage.setItem(storageKey, "1");
    } catch (error) {}
  }

  function restore() {
    if (previous && previous !== document.body && typeof previous.focus === "function") {
      previous.focus();
    }
  }

  function finish() {
    if (typeof dialog.close === "function" && dialog.open) dialog.close();
    else dialog.removeAttribute("open");
  }

  function focusable() {
    return Array.prototype.filter.call(
      dialog.querySelectorAll("button, a[href]"),
      function (item) {
        return !item.disabled && item.tabIndex !== -1;
      }
    );
  }

  dialog.addEventListener("close", function () {
    remember();
    restore();
  });

  dialog.addEventListener("cancel", function () {
    remember();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) finish();
  });

  dialog.addEventListener("keydown", function (event) {
    if (event.key !== "Tab") return;
    var items = focusable();
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  if (closeButton) closeButton.addEventListener("click", finish);
  if (lookButton) lookButton.addEventListener("click", finish);
  if (mailLink) {
    mailLink.addEventListener("click", function () {
      remember();
      finish();
    });
  }

  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");

  if (closeButton) closeButton.focus();
})();

(function () {
  var laser = document.querySelector(".laser");
  if (!laser) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches) {
    laser.remove();
    return;
  }
  laser.addEventListener("animationend", function () {
    laser.remove();
  });
})();

(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches) return;
  var led = getComputedStyle(document.documentElement).getPropertyValue("--jh-led");
  if (led && led.trim() === "0") return;
  if (window.CSS && CSS.supports && CSS.supports("animation-timeline", "view()")) return;
  if (!("IntersectionObserver" in window)) return;

  var nodes = document.querySelectorAll(".section, .project, .path, .site-footer");
  if (!nodes.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-lit");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });

  Array.prototype.forEach.call(nodes, function (node) {
    observer.observe(node);
  });
})();

(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches) return;
  var flag = getComputedStyle(document.documentElement).getPropertyValue("--jh-heading-light");
  if (flag && flag.trim() === "0") return;

  var skip = {
    a: 1, an: 1, the: 1, for: 1, to: 1, of: 1, by: 1, is: 1,
    and: 1, or: 1, in: 1, on: 1, it: 1, so: 1, be: 1, at: 1, as: 1
  };

  function bare(word) {
    return word.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, "").toLowerCase();
  }

  Array.prototype.forEach.call(document.querySelectorAll("main h1"), function (heading) {
    if (heading.childNodes.length !== 1 || heading.firstChild.nodeType !== 3) return;
    var text = heading.firstChild.nodeValue;
    var parts = text.split(/(\s+)/);
    var count = 0;
    parts.forEach(function (part) {
      if (!part || /^\s+$/.test(part)) return;
      var word = bare(part);
      if (word && !skip[word]) count += 1;
    });
    if (!count) return;

    var index = 0;
    var frag = document.createDocumentFragment();
    parts.forEach(function (part) {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        frag.appendChild(document.createTextNode(part));
        return;
      }
      var word = bare(part);
      if (!word || skip[word]) {
        frag.appendChild(document.createTextNode(part));
        return;
      }
      var span = document.createElement("span");
      span.className = "light-word";
      span.style.setProperty("--i", String(index));
      span.dataset.w = part;
      index += 1;
      span.textContent = part;
      frag.appendChild(span);
    });
    heading.replaceChild(frag, heading.firstChild);
  });
})();

(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var fine = window.matchMedia("(pointer: fine)");
  var hover = window.matchMedia("(hover: hover)");
  if (reduce.matches || !fine.matches || !hover.matches) return;
  var flag = getComputedStyle(document.documentElement).getPropertyValue("--jh-pointer");
  if (flag && flag.trim() === "0") return;

  var light = document.createElement("div");
  light.className = "pointer-light";
  light.setAttribute("aria-hidden", "true");
  document.body.appendChild(light);

  var frame = 0;
  var x = 0;
  var y = 0;

  function draw() {
    frame = 0;
    if (!light.isConnected) return;
    light.style.transform = "translate3d(" + x + "px," + y + "px,0) translate(-50%, -50%)";
  }

  function place(event) {
    if (!light.isConnected) return;
    if (event.pointerType && event.pointerType !== "mouse") return;
    x = event.clientX;
    y = event.clientY;
    light.classList.add("is-on");
    if (!frame) frame = window.requestAnimationFrame(draw);
  }

  document.addEventListener("pointermove", place, { passive: true });
  document.addEventListener("mousemove", place, { passive: true });

  function hide() {
    light.classList.remove("is-on");
  }

  document.documentElement.addEventListener("mouseleave", hide);
  window.addEventListener("blur", hide);

  document.addEventListener("pointerdown", function (event) {
    if (event.pointerType && event.pointerType !== "mouse") light.remove();
  }, { passive: true });
})();
