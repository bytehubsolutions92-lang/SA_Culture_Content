const $ = (s) => document.querySelector(s);
const money = (n) => `${SITE.currency}${n.toLocaleString()}`;

function card(item) {
  return `<article class="card">
    <h3>${item.name}</h3>
    <p class="meta">${item.length} · from ${money(item.price)} per group</p>
    <p>${item.text}</p>
    <a href="#book" data-pick="${item.name}">Ask about this</a>
  </article>`;
}

$("#tour-list").innerHTML = TOURS.map(card).join("");
$("#package-list").innerHTML = PACKAGES.map(card).join("");
$("#review-list").innerHTML = REVIEWS.map(r =>
  `<blockquote class="card"><p>${r.text}</p><footer>${r.who}</footer></blockquote>`).join("");

// Booking dropdown
$("#interest").innerHTML = [...TOURS, ...PACKAGES].map(i => `<option>${i.name}</option>`).join("")
  + "<option>Not sure yet</option>";
document.addEventListener("click", (e) => {
  const pick = e.target.closest("[data-pick]");
  if (pick) $("#interest").value = pick.dataset.pick;
});

// Gallery with filters and lightbox
const tags = ["All", ...new Set(PHOTOS.map(p => p.tag))];
$("#filters").innerHTML = tags.map((t, i) =>
  `<button type="button" data-tag="${t}" aria-pressed="${i === 0}">${t}</button>`).join("");

function photoHTML(p) {
  const bg = p.file ? `background-image:url('images/${p.file}')` : `background:${p.tone}`;
  return `<button class="shot" style="${bg}" data-title="${p.title}" data-file="${p.file}" aria-label="Open photo: ${p.title}">
    <span>${p.title}</span></button>`;
}
function renderGallery(tag = "All") {
  $("#gallery-grid").innerHTML = PHOTOS.filter(p => tag === "All" || p.tag === tag).map(photoHTML).join("");
}
renderGallery();

$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  renderGallery(b.dataset.tag);
});

const box = $("#lightbox");
$("#gallery-grid").addEventListener("click", (e) => {
  const s = e.target.closest(".shot"); if (!s) return;
  $("#lightbox-body").innerHTML = s.dataset.file
    ? `<img src="images/${s.dataset.file}" alt="${s.dataset.title}">`
    : `<p class="empty">Add this photo to the images folder and set its file name in js/data.js.</p>`;
  box.showModal();
});
box.addEventListener("click", (e) => { if (e.target === box || e.target.classList.contains("close")) box.close(); });

// Booking form: opens the visitor's email app with the details filled in
$("#booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  if (!f.get("name") || !/\S+@\S+\.\S+/.test(f.get("email"))) {
    $("#form-status").textContent = "Enter your name and a valid email address.";
    return;
  }
  const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nDate: ${f.get("date") || "flexible"}\nGroup size: ${f.get("size")}\nInterested in: ${f.get("interest")}\n\n${f.get("notes")}`;
  location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Visit enquiry from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  $("#form-status").textContent = "Your email app should open. If it doesn't, write to " + SITE.email;
});

$("#whatsapp").href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I'd like to plan a visit.")}`;
$("#mail-link").href = `mailto:${SITE.email}`;
$("#ig-link").href = SITE.instagram;
$("#year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", () => {
  const open = document.body.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", open);
});
$("#nav").addEventListener("click", () => { document.body.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", false); });
