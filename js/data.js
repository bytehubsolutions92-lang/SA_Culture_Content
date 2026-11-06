// SINGLE SOURCE OF TRUTH. Edit prices, tours, photos, reviews here only.
window.siteData = {
    whatsapp: [
    { label: "WhatsApp 061 447 5266", number: "27614475266" }
  ],
  phone: { label: "Call 084 908 1725", number: "+27849081725" }, // calls only, not WhatsApp
  email: "hello@yourdomain.com", // TODO real address
  web3formsKey: "PLACEHOLDER_ACCESS_KEY", // TODO get a free key at web3forms.com
  rates: { USD: 0.055, EUR: 0.05, GBP: 0.043 }, // PLACEHOLDER approx. ZAR conversion rates
  heroImage: "images/hero-placeholder.svg", // PLACEHOLDER: replace with your photo
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
    { name: "Full Day Soweto Apartheid Museum and Lunch", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 1550, singleRate: 1900 },
    { name: "Soweto Half Day Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 990, singleRate: 1400 },
    { name: "Ultimate Johannesburg Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 1550, singleRate: 1850 },
    { name: "Lion Park Half Day Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 1550, singleRate: 1850 },
    { name: "Lesedi Cultural Village Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 2400, singleRate: 2800 },
    { name: "Cradle of Humankind and Sterkfontein Caves Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 2500, singleRate: 2800 },
    { name: "Pretoria Half Day Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 1200, singleRate: 1500 },
    { name: "Pretoria and Lion Park Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 2800, singleRate: 3100 },
    { name: "Elephant and Monkey Sanctuaries Half Day Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 3000, singleRate: 3500 },
    { name: "Pretoria Diamond Mine Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 2500, singleRate: 2800 },
    { name: "Johannesburg City Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 1200, singleRate: 1500 },
    { name: "Apartheid Museum Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 800, singleRate: 1200 },
    { name: "Soweto and Lunch Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 1400, singleRate: 1800 },
    { name: "Ann van Dyk Cheetah Centre Tour", includes: "Transport, entry fees, food", pickup: "Airport or hotel", groupSize: "1-16", sharedRate: 3500, singleRate: 3500, note: "" } // TODO: add a note about why shared and single are the same
  ]
};