/* Beachside Recruitment Explainer — renders the page from window.EXPLAINER_CONFIG. */
(function () {
  "use strict";

  var C = window.EXPLAINER_CONFIG;
  if (!C) return;

  var root = document.documentElement;
  if (C.brand.accent) root.style.setProperty("--blue", C.brand.accent);
  if (C.brand.accentBright) root.style.setProperty("--bright", C.brand.accentBright);

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function mmss(t) {
    var m = Math.floor(t / 60);
    var s = Math.floor(t % 60);
    return m + ":" + (s < 10 ? "0" : "") + s;
  }

  var steps = C.steps
    .map(function (s, i) {
      var cls = "step reveal" + (i === C.steps.length - 1 ? " highlight" : "");
      var lis = s.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
      return (
        '<article class="' + cls + '" style="transition-delay:' + i * 70 + 'ms">' +
        '<div class="n">' + esc(s.n) + "</div>" +
        "<h3>" + esc(s.title) + "</h3>" +
        '<div class="sub">' + esc(s.sub) + "</div>" +
        "<ul>" + lis + "</ul>" +
        "</article>"
      );
    })
    .join("");

  var chapters = C.video.chapters
    .map(function (ch) {
      return (
        '<button class="chapter" type="button" data-t="' + ch.t + '">' +
        '<span class="t">' + mmss(ch.t) + "</span><span>" + esc(ch.label) + "</span></button>"
      );
    })
    .join("");

  var downloads = C.downloads
    .map(function (d) {
      return (
        '<a class="download" href="' + esc(d.href) + '" download>' + esc(d.label) +
        '<span class="n">' + esc(d.note) + "</span></a>"
      );
    })
    .join("");

  var scope = C.scope
    .map(function (p, i) {
      var lis = p.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
      return (
        '<div class="panel ' + (p.tone === "on" ? "on" : "") + ' reveal" style="transition-delay:' + i * 90 + 'ms">' +
        '<div class="ph">' + esc(p.tag) + "</div>" +
        "<h3>" + esc(p.title) + "</h3>" +
        "<ul>" + lis + "</ul></div>"
      );
    })
    .join("");

  var notes = C.notes
    .map(function (n) { return '<div class="note"><p>' + esc(n) + "</p></div>"; })
    .join("");

  var html =
    '<section class="hero"><div class="wrap">' +
      '<div class="kicker reveal">' + esc(C.hero.kicker) + "</div>" +
      '<h1 class="reveal">' + esc(C.hero.title) + '<span class="accent">' + esc(C.hero.titleAccent) + "</span></h1>" +
      '<p class="lede reveal">' + esc(C.hero.lede) + "</p>" +
      '<p class="secondary reveal">' + esc(C.hero.secondary) + "</p>" +
      '<div class="hero-foot reveal">' +
        "<span>" + esc(C.video.duration) + " runtime</span><span class=\"dot\"></span>" +
        "<span>Narrated</span><span class=\"dot\"></span>" +
        "<span>Captioned</span><span class=\"dot\"></span>" +
        "<span>" + esc(C.meta.preparedFor) + "</span>" +
      "</div>" +
    "</div></section>" +

    '<div class="player"><div class="wrap">' +
      '<div class="player-shell reveal">' +
        '<video id="film" controls playsinline preload="metadata" poster="' + esc(C.video.poster) + '">' +
          '<source src="' + esc(C.video.src) + '" type="video/mp4">' +
        "</video>" +
      "</div>" +
      '<div class="chapters">' + chapters + "</div>" +
      '<div class="downloads">' + downloads + "</div>" +
    "</div></div>" +

    '<section id="process"><div class="wrap">' +
      '<div class="section-head reveal">' +
        '<div class="kicker">The whole line</div>' +
        "<h2>Four steps, one conversation.</h2>" +
        "<p>Each step hands off to the next. The website already carries steps one and two; the recruitment system is what connects the rest.</p>" +
      "</div>" +
      '<div class="steps">' + steps + "</div>" +
      '<div class="goal reveal"><span class="tag">The goal</span><p>A steadier line of people who are right for the work — and stay.</p></div>' +
    "</div></section>" +

    '<section id="board"><div class="wrap">' +
      '<div class="section-head reveal">' +
        '<div class="kicker">One page</div>' +
        "<h2>The board behind the video.</h2>" +
      "</div>" +
      '<figure class="board reveal">' +
        '<img src="' + esc(C.board.src) + '" alt="Beachside recruitment process: discovery, Join the Crew, Tony\'s HR workflow, and the custom recruitment MVP." loading="lazy">' +
        "<figcaption><span>" + esc(C.board.caption) + '</span><a href="' + esc(C.board.href) + '" target="_blank" rel="noopener">Open full size</a></figcaption>' +
      "</figure>" +
    "</div></section>" +

    '<section id="scope"><div class="wrap">' +
      '<div class="section-head reveal">' +
        '<div class="kicker">Keeping it honest</div>' +
        "<h2>What's covered — and what isn't.</h2>" +
      "</div>" +
      '<div class="scope">' + scope + "</div>" +
      '<div class="notes">' + notes + "</div>" +
    "</div></section>" +

    '<section id="next"><div class="wrap">' +
      '<div class="next reveal">' +
        "<div>" +
          '<div class="label">' + esc(C.next.label) + "</div>" +
          "<p>" + esc(C.next.text) + "</p>" +
          '<div class="contact">' + esc(C.next.contact) + "</div>" +
        "</div>" +
        '<div class="actions">' +
          (C.links.preview
            ? '<a class="btn" href="' + esc(C.links.preview) + '">' + esc(C.links.previewLabel) +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M9 7h8v8"/></svg></a>'
            : '') +
          '<a class="btn ghost" href="#top">Back to the film</a>' +
        "</div>" +
      "</div>" +
    "</div></section>";

  var mount = document.getElementById("explainer");
  mount.innerHTML = html;

  /* header + footer from config */
  var wm = document.getElementById("wordmark");
  wm.innerHTML = '<span class="b">' + esc(C.brand.word) + '</span><span class="r">' + esc(C.brand.sub) + "</span>";
  wm.setAttribute("aria-label", C.brand.word + " " + C.brand.sub);
  document.getElementById("header-meta").innerHTML =
    esc(C.meta.label) + "<br>" + esc(C.meta.date);
  document.getElementById("footer-left").textContent = C.footer.left;
  document.getElementById("footer-right").textContent = C.footer.right;

  /* video + chapters */
  var film = document.getElementById("film");
  var chapterEls = Array.prototype.slice.call(document.querySelectorAll(".chapter"));

  function seek(t) {
    if (!film) return;
    film.currentTime = t;
    var p = film.play();
    if (p && p.catch) p.catch(function () {});
    film.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  chapterEls.forEach(function (el) {
    el.addEventListener("click", function () { seek(parseFloat(el.dataset.t)); });
  });

  if (film) {
    film.addEventListener("timeupdate", function () {
      var t = film.currentTime, active = 0;
      for (var i = 0; i < chapterEls.length; i++) {
        if (t >= parseFloat(chapterEls[i].dataset.t) - 0.25) active = i;
      }
      chapterEls.forEach(function (el, i) { el.classList.toggle("active", i === active); });
    });

  }

  /* reveal on scroll */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }
})();
