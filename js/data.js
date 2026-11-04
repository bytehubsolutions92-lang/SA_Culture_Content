// SINGLE SOURCE OF TRUTH. Edit prices, tours, photos, reviews here only.
window.siteData = {
  whatsapp: [
    { label: "WhatsApp 084 908 1725", number: "27849081725", note: "Bookings" },     // TODO rename roles
    { label: "WhatsApp 061 447 5266", number: "27614475266", note: "Questions" }
  ],
  email: "hello@yourdomain.com", // TODO real address
  web3formsKey: "PLACEHOLDER_ACCESS_KEY", // TODO get a free key at web3forms.com
  rates: { USD: 0.055, EUR: 0.05, GBP: 0.043 }, // PLACEHOLDER approx. ZAR conversion rates, update occasionally
  heroImage: "images/hero-placeholder.svg", // PLACEHOLDER: replace with your photo                 // e.g. "images/hero.jpg" (hero shows photo when set)
  trust: [ "PLACEHOLDER: Registered tour guide, reg. no. 000000", "PLACEHOLDER: Rated 5.0 on Google", "PLACEHOLDER: Fully insured vehicles" ],
  photos: [ // PLACEHOLDERS: replace files and alt text
    { file: "images/gallery-1-placeholder.svg", alt: "Placeholder: Soweto street" },
    { file: "images/gallery-2-placeholder.svg", alt: "Placeholder: Apartheid Museum" },
    { file: "images/gallery-3-placeholder.svg", alt: "Placeholder: Johannesburg skyline" },
    { file: "images/gallery-4-placeholder.svg", alt: "Placeholder: Lion Park" },
    { file: "images/gallery-5-placeholder.svg", alt: "Placeholder: Cradle of Humankind" },
    { file: "images/gallery-6-placeholder.svg", alt: "Placeholder: Guide with guests" }
  ],
  reviews: [ // PLACEHOLDERS: replace with real reviews
    { name: "Guest name, Country", text: "Placeholder review: a short, specific line about the tour and the guide.", source: "Google" },
    { name: "Guest name, Country", text: "Placeholder review: mention what they enjoyed most, like the food or the history.", source: "TripAdvisor" },
    { name: "Guest name, Country", text: "Placeholder review: say how easy the booking and pickup were.", source: "Google" }
  ],
  // Optional per tour: duration, includes, pickup, groupSize, note (shown as a footnote)
  tours: [
    { name: "Full Day Soweto Apartheid Museum and Lunch", duration: "Placeholder: 8 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 1550, singleRate: 1900 },
    { name: "Soweto Half Day Tour", duration: "Placeholder: 4 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 990, singleRate: 1400 },
    { name: "Ultimate Johannesburg Tour", duration: "Placeholder: 8 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 1550, singleRate: 1850 },
    { name: "Lion Park Half Day Tour", duration: "Placeholder: 4 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 1550, singleRate: 1850 },
    { name: "Lesedi Cultural Village Tour", duration: "Placeholder: 8 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 2400, singleRate: 2800 },
    { name: "Cradle of Humankind and Sterkfontein Caves Tour", duration: "Placeholder: 8 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 2500, singleRate: 2800 },
    { name: "Pretoria Half Day Tour", duration: "Placeholder: 4 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 1200, singleRate: 1500 },
    { name: "Pretoria and Lion Park Tour", duration: "Placeholder: 8 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 2800, singleRate: 3100 },
    { name: "Elephant and Monkey Sanctuaries Half Day Tour", duration: "Placeholder: 4 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 3000, singleRate: 3500 },
    { name: "Pretoria Diamond Mine Tour", duration: "Placeholder: 8 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 2500, singleRate: 2800 },
    { name: "Johannesburg City Tour", duration: "Placeholder: 4 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 1200, singleRate: 1500 },
    { name: "Apartheid Museum Tour", duration: "Placeholder: 4 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 800, singleRate: 1200 },
    { name: "Soweto and Lunch Tour", duration: "Placeholder: 4 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 1400, singleRate: 1800 },
    { name: "Ann van Dyk Cheetah Centre Tour", duration: "Placeholder: 8 hours", includes: "Placeholder: transport, guide, entry fees", pickup: "Placeholder: Johannesburg & Pretoria hotels", groupSize: "Placeholder: 1-8", sharedRate: 3500, singleRate: 3500, note: "" } // TODO confirm: same price shared/single? add a note
  ]
};
