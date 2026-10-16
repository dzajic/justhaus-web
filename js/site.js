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
