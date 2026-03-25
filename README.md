# Culte Commun — Website

A static clone of [cultecommun.com](https://cultecommun.com) built with vanilla HTML/CSS/JS, ready to host on GitHub Pages with a custom domain.

## Structure

```
/
├── index.html          ← Home (works grid)
├── about.html          ← About page
├── contact.html        ← Contact page
├── shared.css          ← Shared styles (nav, menu, cards, footer)
├── shared.js           ← Shared JS (clock, cursor, menu, works data)
├── works/
│   └── index.html      ← Full works listing
└── CNAME               ← Your custom domain (edit this)
```

## GitHub Pages Setup

1. Push this folder to a GitHub repository (e.g. `yourusername/yourusername.github.io` or any repo).
2. Go to **Settings → Pages**.
3. Set source to `main` branch, root `/`.
4. Edit `CNAME` to contain your domain, e.g. `yourdomain.com`.
5. In your domain registrar's DNS, add:
   - `A` records pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or a `CNAME` record: `www` → `yourusername.github.io`

## Adding Project Images

Each work card in the grid currently shows a dark placeholder.  
To add real images, edit `shared.js` and add an `img` property to each work entry:

```js
{ slug: 'louboutin', title: 'Louboutin – Frozen', img: 'assets/louboutin.jpg', ... }
```

Then update the `work-item` template in `index.html` / `works/index.html`:

```html
<img class="work-thumb" src="${ROOT}assets/${w.img}" alt="${w.title}" loading="lazy" />
```

Images should be placed in `/assets/` at the root.

## Customisation

- **Studio name / copy** — edit directly in each HTML file.
- **Works list** — edit `window.WORKS_DATA` in `shared.js`.
- **Social links** — search for `instagram.com/culte.commun` and replace throughout.
- **Contact email** — edit `contact.html`.
- **Colors** — edit CSS variables in `shared.css` under `:root`.
