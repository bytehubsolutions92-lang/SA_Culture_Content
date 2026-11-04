// EDIT THIS FILE to change the site's content. No HTML changes needed.
const SITE = {
  email: "you@example.com",
  whatsapp: "27000000000",          // country code + number, no + or spaces
  instagram: "https://instagram.com/yourhandle",
  currency: "R"                      // shown before prices
};

const TOURS = [
  { name: "Half-day highlights", length: "4 hours", price: 1200,
    text: "The main sights, a good lunch stop, and the stories behind them." },
  { name: "Full-day explorer", length: "8 hours", price: 2200,
    text: "Two or three areas at an easy pace, with time to wander and shop." },
  { name: "Sunrise and sunset", length: "3 hours", price: 900,
    text: "The best light of the day at the best viewpoints, camera ready." },
  { name: "Food and markets", length: "3 hours", price: 1000,
    text: "Taste local dishes and meet the people who make them." }
];

const PACKAGES = [
  { name: "Quick portraits", length: "45 minutes", price: 800,
    text: "One location, 15 edited photos. Good for couples and solo visitors." },
  { name: "Tour photographer", length: "During your tour", price: 1500,
    text: "I shoot while we explore. 40 or more edited photos, natural and unposed." },
  { name: "Family or group", length: "90 minutes", price: 1800,
    text: "Group shots and candid moments. 30 edited photos, all in one gallery link." }
];

// tag = filter label. file = file in /images. Leave file empty to show a placeholder.
const PHOTOS = [
  { title: "Golden hour", tag: "Portraits", file: "", tone: "#F2B134" },
  { title: "Market morning", tag: "Places", file: "", tone: "#0F4C5C" },
  { title: "Family on the hill", tag: "Groups", file: "", tone: "#5B8E7D" },
  { title: "Old town lanes", tag: "Places", file: "", tone: "#8C6A5A" },
  { title: "Couple at the viewpoint", tag: "Portraits", file: "", tone: "#C77D4A" },
  { title: "Friends on tour", tag: "Groups", file: "", tone: "#3E6A8A" }
];

const REVIEWS = [
  { who: "Guest name, Country", text: "Replace with a real review. Short and specific works best." },
  { who: "Guest name, Country", text: "Mention what they did and what they liked most." },
  { who: "Guest name, Country", text: "Three reviews is enough to start." }
];
