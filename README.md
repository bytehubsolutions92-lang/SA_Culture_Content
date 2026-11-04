# Tour Guide & Photographer Website

A fast, plain HTML/CSS/JS site. No build step, no frameworks.

## Run it in VS Code
1. Unzip, then File > Open Folder and choose `tour-guide-site`.
2. Install the recommended extension **Live Server** (VS Code will suggest it).
3. Right-click `index.html` > **Open with Live Server**. The page reloads when you save.

## Make it yours
- **Text, prices, tours, reviews, contact details:** edit `js/data.js` only.
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
