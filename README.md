# Personal Website

A static HTML/CSS/JS personal portfolio site, styled with a custom
sand / rust / olive / navy palette. No build step, no framework —
just three files, so it's a one-click deploy on Vercel.

## 1. Customize your content

Open `index.html` and replace:

- [ ] `Your Name` (appears in the sidebar, hero, footer, and `<title>`)
- [ ] The role/tagline under your name in the sidebar
- [ ] The hero headline and intro paragraph
- [ ] The **About** paragraphs and the four quick facts (based in, studying, focus, open to)
- [ ] The **Skills** tags — only list what you've actually used
- [ ] The two **Projects** — title, problem, solution, your contribution, tech tags, and links
  - Add more `<article class="project">...</article>` blocks if you have more than two
- [ ] **Education & Experience** timeline entries
- [ ] Your email address (appears twice) and GitHub / LinkedIn links in the sidebar

## 2. Add your CV

1. Export your ATS-friendly CV as a PDF.
2. Name it `YourName_CV.pdf` (e.g. `Budi_Juarto_CV.pdf`).
3. Put it inside the `cv/` folder, replacing the placeholder file.
4. Update the three `href="cv/YourName_CV.pdf"` links in `index.html`
   to match your actual file name.
5. Open the file locally in a browser and click **Download CV** to
   confirm the link actually works before you deploy.

## 3. Preview locally

You don't need a build step — just open `index.html` directly in a
browser, or serve it locally:

```bash
npx serve .
```

## 4. Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
cd personal-website
vercel
```
Follow the prompts (choose defaults — this is a static site, no
framework and no build command needed). Vercel will give you a URL
like `https://your-project.vercel.app`.

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import that repo.
3. Framework preset: **Other** (static site). Leave build command
   and output directory empty.
4. Click **Deploy**.

Either way, once deployed, open the URL in an incognito window to
confirm the site — and the Download CV link — work without logging in.

## 5. File structure

```
personal-website/
├── index.html      ← all content lives here
├── styles.css      ← colors, type, and layout
├── script.js       ← mobile menu + active-section highlighting
├── cv/
│   └── YourName_CV.pdf   ← replace with your real CV
└── README.md
```

## Color palette used

| Token   | Hex       | Used for                                    |
|---------|-----------|----------------------------------------------|
| sand    | `#D3C7AD` | Page background                              |
| rust    | `#754437` | Accents, active nav underline, CV button     |
| olive   | `#6B6751` | Secondary text, labels, tags                 |
| navy    | `#28374A` | Sidebar, headings, primary buttons           |

## Notes

- Fully responsive: the left sidebar becomes a top bar with a
  hamburger menu under 900px width.
- Keyboard-accessible focus states and a "skip to content" link are
  included.
- Respects `prefers-reduced-motion`.
- No external dependencies besides Google Fonts (Fraunces, IBM Plex
  Sans, IBM Plex Mono), loaded via `<link>` tags in `index.html`.
