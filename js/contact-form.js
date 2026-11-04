// Contact form: builds a WhatsApp message from the form and opens it.
(function () {
  var form = document.getElementById("enquiryForm");
  if (!form) return;

  var WHATSAPP_NUMBER = "27849081725"; // 084 908 1725
  var status = document.getElementById("formStatus");
  var tourField = document.getElementById("f-tour");
  var dateField = document.getElementById("f-date");

  // No past dates
  var today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  dateField.min = today.toISOString().slice(0, 10);

  // Preselect a tour from the link, e.g. contact.html?tour=Soweto%20Half%20Day%20Tour
  var wanted = new URLSearchParams(window.location.search).get("tour");
  if (wanted) {
    Array.prototype.forEach.call(tourField.options, function (o) {
      if (o.value === wanted) tourField.value = wanted;
    });
  }

  // Shared rate only applies to 2+ guests
  var guestsField = form.elements.guests;
  var sharedRadio = form.querySelector('input[name="rate"][value="Shared"]');
  var singleRadio = form.querySelector('input[name="rate"][value="Single"]');
  var rateHint = document.getElementById("rateHint");
  var userPickedRate = false;

  Array.prototype.forEach.call(form.querySelectorAll('input[name="rate"]'), function (r) {
    r.addEventListener("change", function () { userPickedRate = true; });
  });

  function updateRateOptions() {
    var guests = parseInt(guestsField.value, 10);
    var canShare = guests >= 2;
    sharedRadio.disabled = !canShare;
    rateHint.hidden = canShare;
    if (!canShare) {
      singleRadio.checked = true;
    } else if (!userPickedRate) {
      sharedRadio.checked = true; // sensible default for groups
    }
  }
  guestsField.addEventListener("input", updateRateOptions);
  guestsField.addEventListener("change", updateRateOptions);
  updateRateOptions();

  function formatDate(value) {
    if (!value) return "Not decided yet";
    var p = value.split("-");
    var d = new Date(p[0], p[1] - 1, p[2]);
    return d.toLocaleDateString("en-ZA", { day: "numeric", month: "long", year: "numeric" });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = form.elements.name.value.trim();
    var phone = form.elements.phone.value.trim();
    var tour = form.elements.tour.value;
    var guests = parseInt(form.elements.guests.value, 10);

    if (!name || !phone || !tour || !(guests >= 1)) {
      status.textContent = "Please fill in your name, phone number, tour and number of guests.";
      status.className = "form-status is-error";
      var first = !name ? form.elements.name : !phone ? form.elements.phone : !tour ? tourField : form.elements.guests;
      first.focus();
      return;
    }

    var lines = [
      "Hello SA Culture Content, I would like to enquire about a tour.",
      "",
      "Name: " + name,
      "Phone: " + phone,
      "Tour: " + tour,
      "Preferred date: " + formatDate(form.elements.date.value),
      "Guests: " + guests,
      "Rate: " + form.elements.rate.value
    ];
    var msg = form.elements.message.value.trim();
    if (msg) lines.push("", "Message: " + msg);

    var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
    status.textContent = "Opening WhatsApp. Press send there to finish your enquiry.";
    status.className = "form-status is-ok";
    window.open(url, "_blank", "noopener");
  });
})();
