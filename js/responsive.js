(function () {
  "use strict";

  function initResponsiveNavigation() {
    var headerNav = document.querySelector(".header_nav");
    var nav = headerNav && headerNav.querySelector(".nav_div");

    if (!headerNav || !nav || headerNav.querySelector(".mobile-nav-toggle")) {
      return;
    }

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "mobile-nav-toggle";
    toggle.setAttribute("aria-label", "Open navigation menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.innerHTML = "<span aria-hidden=\"true\"></span>";

    nav.setAttribute("aria-label", "Primary navigation");
    headerNav.appendChild(toggle);

    function setOpen(isOpen) {
      headerNav.classList.toggle("is-open", isOpen);
      document.body.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
    }

    toggle.addEventListener("click", function () {
      setOpen(!headerNav.classList.contains("is-open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });

    var desktopQuery = window.matchMedia("(min-width: 1025px)");
    var handleDesktopChange = function (event) {
      if (event.matches) {
        setOpen(false);
      }
    };

    if (typeof desktopQuery.addEventListener === "function") {
      desktopQuery.addEventListener("change", handleDesktopChange);
    } else if (typeof desktopQuery.addListener === "function") {
      desktopQuery.addListener(handleDesktopChange);
    }
  }

  function improveMediaDefaults() {
    var images = document.querySelectorAll("img");

    images.forEach(function (img, index) {
      img.decoding = "async";

      if (
        index > 2 &&
        !img.classList.contains("KTZ_DFLG_logo") &&
        !img.closest(".lb-item.active")
      ) {
        img.loading = "lazy";
      }
    });

    document.querySelectorAll("iframe").forEach(function (frame) {
      frame.loading = "lazy";
      frame.setAttribute("title", frame.getAttribute("title") || "Embedded media");
    });
  }

  function init() {
    initResponsiveNavigation();
    improveMediaDefaults();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
