/* Phase 1B CSI — client-side access gate.
   Loaded from <head> on every real page. Hides content until credentials are
   entered, and asks again on every load: nothing is persisted anywhere.
   This is obfuscation, not security — the pages ship to the browser regardless. */
(function () {
  "use strict";

  var SALT = "csi-1b::";
  var USER_HASH = "1u9r6yt";
  var PASS_HASH = "qycixw";

  /* FNV-1a, 32-bit, base36. Short and non-reversible by eye. */
  function hash(str) {
    var x = 0x811c9dc5;
    for (var i = 0; i < str.length; i++) {
      x ^= str.charCodeAt(i);
      x = Math.imul(x, 0x01000193) >>> 0;
    }
    return x.toString(36);
  }

  var root = document.documentElement;
  if (root.hasAttribute("data-csi-auth")) return;
  root.setAttribute("data-csi-auth", "");

  /* Two-stage hiding. `csi-booting` blanks the body outright while the overlay
     does not exist yet; once it is in the DOM we drop to `csi-locked`, which
     hides only the page's own children. No frame ever paints the content. */
  root.className += (root.className ? " " : "") + "csi-booting csi-locked";

  var css = document.createElement("style");
  css.textContent = [
    "html.csi-booting body { display: none !important; }",
    "html.csi-locked body > *:not(#csi-auth) { display: none !important; }",
    "html.csi-locked body { overflow: hidden !important; }",
    "#csi-auth {",
    "  position: fixed; inset: 0; z-index: 2147483647;",
    "  display: grid; place-items: center; padding: 1.5rem;",
    "  background: linear-gradient(135deg, #0b6e8f, #0a4b63);",
    "  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;",
    "  line-height: 1.55; color: #1c2733;",
    "}",
    "#csi-auth .csi-card {",
    "  width: 100%; max-width: 22rem; background: #fff;",
    "  border: 1px solid #dde5ec; border-radius: 12px;",
    "  padding: 1.6rem 1.5rem; box-shadow: 0 12px 34px rgba(10,42,67,.28);",
    "}",
    "#csi-auth .csi-kicker {",
    "  text-transform: uppercase; letter-spacing: .12em; font-size: .72rem;",
    "  color: #5a6b7b; margin: 0 0 .4rem;",
    "}",
    "#csi-auth h1 { margin: 0 0 1.2rem; font-size: 1.15rem; color: #0b6e8f; }",
    "#csi-auth label {",
    "  display: block; font-size: .78rem; font-weight: 600;",
    "  color: #5a6b7b; margin: 0 0 .3rem;",
    "}",
    "#csi-auth input {",
    "  width: 100%; margin: 0 0 .9rem; padding: .55rem .7rem;",
    "  font: inherit; font-size: .95rem; color: #1c2733;",
    "  background: #f5f7fa; border: 1px solid #dde5ec; border-radius: 8px;",
    "}",
    "#csi-auth input:focus {",
    "  outline: none; border-color: #0b6e8f; background: #fff;",
    "  box-shadow: 0 0 0 3px #e3f1f6;",
    "}",
    "#csi-auth button {",
    "  width: 100%; margin: .3rem 0 0; padding: .6rem 1rem;",
    "  font: inherit; font-size: .95rem; font-weight: 600; color: #fff;",
    "  background: #0b6e8f; border: 0; border-radius: 8px; cursor: pointer;",
    "  transition: background .12s ease;",
    "}",
    "#csi-auth button:hover { background: #0a4b63; }",
    "#csi-auth .csi-error {",
    "  margin: .9rem 0 0; font-size: .82rem; color: #a12828;",
    "}",
    "#csi-auth .csi-error[hidden] { display: none; }"
  ].join("\n");
  (document.head || root).appendChild(css);

  function build() {
    var overlay = document.createElement("div");
    overlay.id = "csi-auth";
    overlay.innerHTML =
      '<form class="csi-card" autocomplete="off">' +
      '<p class="csi-kicker">Phase 1B CSI</p>' +
      "<h1>Sign in to continue</h1>" +
      '<label for="csi-user">Username</label>' +
      '<input id="csi-user" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" />' +
      '<label for="csi-pass">Password</label>' +
      '<input id="csi-pass" type="password" autocomplete="new-password" />' +
      "<button type=\"submit\">Unlock</button>" +
      '<p class="csi-error" id="csi-error" role="alert" hidden>Incorrect username or password.</p>' +
      "</form>";

    document.body.appendChild(overlay);
    root.className = root.className.replace(/\bcsi-booting\b/, "").trim();

    var form = overlay.querySelector("form");
    var userField = overlay.querySelector("#csi-user");
    var passField = overlay.querySelector("#csi-pass");
    var error = overlay.querySelector("#csi-error");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var user = hash(SALT + userField.value.trim().toLowerCase());
      var pass = hash(SALT + passField.value);
      if (user === USER_HASH && pass === PASS_HASH) {
        unlock(overlay);
        return;
      }
      error.hidden = false;
      passField.value = "";
      passField.focus();
    });

    userField.focus();
  }

  function unlock(overlay) {
    overlay.parentNode.removeChild(overlay);
    root.className = root.className.replace(/\bcsi-locked\b/, "").trim();
    root.setAttribute("data-csi-unlocked", "");
    /* Let pages that size themselves on load settle after the overlay goes. */
    window.dispatchEvent(new Event("resize"));
  }

  /* A page restored from the back/forward cache keeps its unlocked DOM, so
     force a fresh load and a fresh prompt. */
  window.addEventListener("pageshow", function (event) {
    if (event.persisted) window.location.reload();
  });

  if (document.body) build();
  else document.addEventListener("DOMContentLoaded", build);
})();
