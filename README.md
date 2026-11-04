# Tour Guide & Photographer Website

A fast, plain HTML/CSS/JS site. No build step, no frameworks.

## Run it in VS Code
1. Unzip, then File > Open Folder and choose `tour-guide-site`.
2. Install the recommended extension **Live Server** (VS Code will suggest it).
3. Right-click `index.html` > **Open with Live Server**. The page reloads when you save.

## Make it yours
- **Prices, tours, photos, reviews, trust badges, email:** edit `js/data.js` only (tours table and contact dropdown are generated from it). `js/site.js` holds all behaviour.
- **Before launch:** replace `https://www.example.com/` (canonical/OG tags) and `hello@yourdomain.com`.
- **Your photos:** put them in `images/`, then set `file: "name.jpg"` for each item in `PHOTOS` (js/data.js).
  Add `portrait.jpg` and `hero.jpg`, and see the comments in `css/style.css` (.hero) and `index.html` (.portrait).
- **Name and bio:** search `Your Name` in `index.html` and replace.
- **Colors and fonts:** change the variables at the top of `css/style.css`.

## Publish it
Drag the folder onto Netlify Drop, or push to GitHub and turn on GitHub Pages. Both are free.
Tip: resize photos to about 1600px wide (use squoosh.app) so the site loads fast on phones.

## Later upgrades
- Contact form that sends without opening an email app: Formspree or Web3Forms.
- Online payments: Stripe Payment Links or PayFast.
- Photo delivery: Pixieset or a private Google Drive link per client.

## Tour pages, sitemap, launch
- After editing `js/data.js`, run `python3 build_tours.py` to regenerate one page per tour, `sitemap.xml` and `robots.txt` (also set `BASE` at the top of that script).
- Replace everything marked PLACEHOLDER (search the folder for it), including the `og-image.png` (1200x630 photo) and the FAQ on `contact.html`.
- Web3Forms: get a free key at web3forms.com and put it in `web3formsKey` in `data.js`.
- Replace `https://www.example.com/` in all HTML files with your real domain (search and replace).
- Create a Google Business Profile, then deploy to Netlify Drop or GitHub Pages.
