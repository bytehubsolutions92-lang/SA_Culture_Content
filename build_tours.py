#!/usr/bin/env python3
"""Run `python3 build_tours.py` after editing js/data.js. Regenerates one page per tour, sitemap.xml and robots.txt."""
import json, re, subprocess, html
BASE = "https://www.example.com/"  # TODO real domain
D = json.loads(subprocess.check_output(["node","-e",'global.window={};eval(require("fs").readFileSync("js/data.js","utf8"));console.log(JSON.stringify(window.siteData))']))
slug = lambda n: re.sub(r"[^a-z0-9]+","-",n.lower()).strip("-")
e = html.escape
src = open("tours.html",encoding="utf8").read()
header = re.search(r"<header.*?</header>",src,re.S).group(0)
footer = re.search(r"<footer.*?</footer>",src,re.S).group(0)
money = lambda n: "R"+f"{n:,}".replace(","," ")
urls = ["index.html","tours.html","about.html","contact.html"]
for t in D["tours"]:
    s = slug(t["name"]); f = s+".html"; urls.append(f)
    desc = t.get("description") or "PLACEHOLDER: describe this tour in 2 to 3 sentences: what guests see, the story behind it and the highlights."
    steps = t.get("itinerary") or ["PLACEHOLDER: pickup from your hotel","PLACEHOLDER: main stop and what happens there","PLACEHOLDER: lunch or final stop, then drop-off"]
    facts = [("Duration",t.get("duration")),("Includes",t.get("includes")),("Pickup",t.get("pickup")),("Group size",t.get("groupSize"))]
    facts = "".join(f"<div><dt>{k}</dt><dd>{e(v)}</dd></div>" for k,v in facts if v)
    note = f'<p class="small-print">{e(t["note"])}</p>' if t.get("note") else ""
    imgs = "".join(f'<img loading="lazy" src="{e(p["file"])}" alt="{e(p["alt"])}">' for p in D["photos"][:3])
    ld = {"@context":"https://schema.org","@type":"TouristTrip","name":t["name"],"description":desc,"touristType":"Cultural tourism",
          "provider":{"@type":"LocalBusiness","name":"SA Culture Content","url":BASE},
          "offers":{"@type":"Offer","price":t["sharedRate"],"priceCurrency":"ZAR","url":BASE+f}}
    short = e(desc[:150])
    page = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="{short}">
<title>{e(t["name"])} | SA Culture Content</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="icon" type="image/jpeg" href="images/logo.jpeg">
<link rel="canonical" href="{BASE}{f}">
<meta property="og:type" content="website"><meta property="og:site_name" content="SA Culture Content">
<meta property="og:title" content="{e(t["name"])}"><meta property="og:description" content="{short}">
<meta property="og:url" content="{BASE}{f}"><meta property="og:image" content="{BASE}images/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json">{json.dumps(ld)}</script>
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/pages.css">
</head>
<body>
{header}
<main>
<section class="page-hero"><div class="section-wrap">
<p class="crumbs"><a href="tours.html">Tours &amp; Prices</a> / {e(t["name"])}</p>
<h1>{e(t["name"])}</h1></div></section>
<section class="section-wrap tour-page">
<div>
<p>{e(desc)}</p>
<h2>Itinerary</h2><ol>{"".join(f"<li>{e(x)}</li>" for x in steps)}</ol>
<dl class="tour-facts">{facts}</dl>
<div class="gallery">{imgs}</div>
</div>
<aside class="price-cards">
<div class="price-card"><span>Shared rate (2+ guests)</span><strong>{money(t["sharedRate"])}</strong></div>
<div class="price-card"><span>Single rate</span><strong>{money(t["singleRate"])}</strong></div>
{note}
<a class="button button-primary" href="contact.html?tour={e(t["name"].replace(" ","%20"))}#enquiry">Enquire about this tour</a>
<p class="small-print">Prices in ZAR. Please confirm availability before booking.</p>
</aside>
</section>
</main>
{footer}
<script src="js/data.js"></script>
<script src="js/site.js"></script>
</body>
</html>
'''
    open(f,"w",encoding="utf8").write(page)
open("sitemap.xml","w").write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+"".join(f"<url><loc>{BASE}{u}</loc></url>\n" for u in urls)+"</urlset>\n")
open("robots.txt","w").write(f"User-agent: *\nAllow: /\nSitemap: {BASE}sitemap.xml\n")
print(len(D["tours"]),"tour pages built")
