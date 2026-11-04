document.addEventListener("DOMContentLoaded", function () {
  var D = window.siteData, $ = function (s) { return document.querySelector(s); };
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; };
  var money = function (n) { if (cur !== "ZAR") return "≈ " + SYM[cur] + Math.round(n * D.rates[cur]).toLocaleString("en-ZA"); return "R" + n.toLocaleString("en-ZA").replace(/\s/g, "\u00a0"); };
  var wa = function (n, t) { return "https://wa.me/" + n + "?text=" + encodeURIComponent(t); };
  var slug = function (n) { return n.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); };
  var cur = "ZAR", SYM = { USD: "$", EUR: "€", GBP: "£" };
  var NUM = D.whatsapp[0].number;

  // Mobile menu (button, aria-expanded, Escape closes)
  var toggle = $(".menu-toggle"), nav = $(".nav");
  if (toggle && nav) {
    var setOpen = function (o) { nav.classList.toggle("open", o); toggle.setAttribute("aria-expanded", o); toggle.setAttribute("aria-label", o ? "Close navigation" : "Open navigation"); };
    toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("open")); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); toggle.focus(); } });
  }
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();
  Array.prototype.forEach.call(document.querySelectorAll("[data-tour-count]"), function (e) { e.textContent = D.tours.length; });

  // Hero photo, trust strip, gallery, reviews (only shown when filled in data.js)
  var art = $(".hero-art");
  if (art && D.heroImage) { art.classList.add("has-photo"); art.style.backgroundImage = "url('" + D.heroImage + "')"; }
  var ts = $("#trustStrip");
  if (ts && D.trust.length) ts.innerHTML = D.trust.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("");
  var g = $("#gallery");
  if (g && D.photos.length) { g.hidden = false; g.querySelector(".gallery").innerHTML = D.photos.map(function (p) { return '<img loading="lazy" src="' + esc(p.file) + '" alt="' + esc(p.alt || "") + '">'; }).join(""); }
  var r = $("#reviews");
  if (r && D.reviews.length) { r.hidden = false; r.querySelector(".reviews").innerHTML = D.reviews.map(function (v) { return '<blockquote class="review"><p>“' + esc(v.text) + '”</p><footer>' + esc(v.name) + (v.source ? " · " + esc(v.source) : "") + "</footer></blockquote>"; }).join(""); }

  // Tours table, rendered from data
  var tbody = $("#tourRows");
  if (tbody) {
    var notes = [];
    function draw() { notes = []; tbody.innerHTML = D.tours.map(function (t) {
      var mark = "";
      if (t.note) { notes.push(t.note); mark = "<sup>" + notes.length + "</sup>"; }
      var meta = [t.duration, t.groupSize && "Group: " + t.groupSize, t.pickup && "Pickup: " + t.pickup, t.includes && "Includes: " + t.includes].filter(Boolean).map(esc).join(" · ");
      return "<tr><td><a href=\"" + slug(t.name) + ".html\">" + esc(t.name) + "</a>" + (meta ? '<span class="tour-meta">' + meta + "</span>" : "") + "</td><td>" + money(t.sharedRate) + mark + "</td><td>" + money(t.singleRate) + mark + '</td><td><button type="button" class="enquire-button" data-tour="' + esc(t.name) + '">Enquire</button></td></tr>';
    }).join("");
    var fn = $("#tourNotes"); if (fn) fn.innerHTML = notes.map(function (n, i) { return "<sup>" + (i + 1) + "</sup> " + esc(n); }).join("<br>"); }
    draw(); var cs = $("#currency");
    if (cs) cs.addEventListener("change", function () { cur = cs.value; draw(); if (si) si.dispatchEvent(new Event("input")); });
    var si = $("#tourSearch"), nr = $("#noResults");
    si.addEventListener("input", function () {
      var q = si.value.toLowerCase().trim(), n = 0;
      Array.prototype.forEach.call(tbody.rows, function (row) { var ok = row.cells[0].textContent.toLowerCase().indexOf(q) > -1; row.hidden = !ok; if (ok) n++; });
      if (nr) nr.hidden = n !== 0;
    });
    tbody.addEventListener("click", function (e) {
      var b = e.target.closest(".enquire-button"); if (!b) return;
      window.location.href = "contact.html?tour=" + encodeURIComponent(b.dataset.tour) + "#enquiry";
    });
  }

  // Floating WhatsApp button
  var fw = document.createElement("a"); fw.className = "float-wa"; fw.target = "_blank"; fw.rel = "noopener";
  fw.href = wa(NUM, "Hello SA Culture Content, I would like to enquire about a tour."); fw.textContent = "WhatsApp us"; fw.setAttribute("aria-label", "Chat on WhatsApp");
  document.body.appendChild(fw);

  // Enquiry form
  var form = $("#enquiryForm"); if (!form) return;
  var status = $("#formStatus"), tour = $("#f-tour"), date = $("#f-date");
  tour.insertAdjacentHTML("beforeend", D.tours.map(function (t) { return '<option value="' + esc(t.name) + '">' + esc(t.name) + "</option>"; }).join("") + '<option value="Not sure yet / custom or photography request">Not sure yet / custom or photography request</option>');
  var now = new Date(); now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); date.min = now.toISOString().slice(0, 10);
  var wanted = new URLSearchParams(location.search).get("tour"); if (wanted) tour.value = wanted;

  var gf = form.elements.guests, shared = form.querySelector('input[value="Shared"]'), single = form.querySelector('input[value="Single"]'), hint = $("#rateHint"), picked = false;
  Array.prototype.forEach.call(form.querySelectorAll('input[name="rate"]'), function (x) { x.addEventListener("change", function () { picked = true; }); });
  function rates() { var can = parseInt(gf.value, 10) >= 2; shared.disabled = !can; hint.hidden = can; if (!can) single.checked = true; else if (!picked) shared.checked = true; }
  gf.addEventListener("input", rates); gf.addEventListener("change", rates); rates();

  function build() {
    var name = form.elements.name.value.trim(), phone = form.elements.phone.value.trim(), g = parseInt(gf.value, 10);
    if (!name || !phone || !tour.value || !(g >= 1)) {
      status.textContent = "Please fill in your name, phone number, tour and number of guests."; status.className = "form-status is-error";
      (!name ? form.elements.name : !phone ? form.elements.phone : !tour.value ? tour : gf).focus(); return null;
    }
    var d = date.value ? new Date(date.value + "T00:00").toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" }) : "Not decided yet";
    var L = ["Hello SA Culture Content, I would like to enquire about a tour.", "", "Name: " + name, "Phone: " + phone, "Tour: " + tour.value, "Preferred date: " + d, "Guests: " + g, "Rate: " + form.elements.rate.value];
    var m = form.elements.message.value.trim(); if (m) L.push("", "Message: " + m);
    return L.join("\n");
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault(); var t = build(); if (!t) return;
    status.textContent = "Opening WhatsApp. Press send there to finish your enquiry."; status.className = "form-status is-ok";
    window.open(wa(NUM, t), "_blank", "noopener");
  });
  var ab = $("#apiBtn");
  if (ab) ab.addEventListener("click", function () {
    var t = build(); if (!t) return;
    if (!D.web3formsKey || D.web3formsKey.indexOf("PLACEHOLDER") === 0) { status.textContent = "The online form is not set up yet. Please use WhatsApp or email."; status.className = "form-status is-error"; return; }
    status.textContent = "Sending..."; status.className = "form-status";
    fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: D.web3formsKey, subject: "Tour enquiry: " + tour.value, name: form.elements.name.value, message: t }) })
      .then(function (r) { return r.json(); })
      .then(function (d) { status.textContent = d.success ? "Thank you! We will reply soon." : "Something went wrong. Please try WhatsApp or email."; status.className = "form-status " + (d.success ? "is-ok" : "is-error"); })
      .catch(function () { status.textContent = "Network error. Please try WhatsApp or email."; status.className = "form-status is-error"; });
  });
  var eb = $("#emailBtn");
  if (eb) eb.addEventListener("click", function () {
    var t = build(); if (!t) return;
    status.textContent = "Opening your email app."; status.className = "form-status is-ok";
    location.href = "mailto:" + D.email + "?subject=" + encodeURIComponent("Tour enquiry: " + tour.value) + "&body=" + encodeURIComponent(t);
  });
});
