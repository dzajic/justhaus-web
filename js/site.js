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
