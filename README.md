# ihisam.github.io — Haitham Mohamed, Portfolio

Personal portfolio site for **Haitham Mohamed**, AI Engineer (Dubai). Static, single-page,
zero build. Deploys directly to GitHub Pages.

**Live (once deployed):** https://haitham72.github.io

---

## Design

Swiss International Style grounded in a bilingual (English/Arabic) identity — the signature
is the **bilingual masthead** where "Haitham Mohamed" and "هيثم محمد" share one lockup,
treating Arabic as a real second voice (Haitham's Arabic-NLP edge), not decoration.

| Token | Value | Role |
|-------|-------|------|
| Paper | `#FAFAF7` | Background |
| Ink | `#14181F` | Primary text |
| Muted | `#6B7280` | Secondary text |
| Line | `#DDDBD2` | Hairline rules |
| Accent | `#1F3A5F` | Single accent (echoes the navy suit) |

**Type** (Google Fonts): [Archivo](https://fonts.google.com/specimen/Archivo) (grotesque
display + body) · [IBM Plex Sans Arabic](https://fonts.google.com/specimen/IBM+Plex+Sans+Arabic)
(Arabic voice) · [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
(eyebrows, labels, tech tags).

Motion is restrained: scroll-reveal, a hero keyword ticker, hover states. All disabled under
`prefers-reduced-motion`.

## Structure

```
index.html          Single page: hero · about · work · experience · capabilities · education · contact
css/styles.css      Full design system (CSS custom properties as tokens)
js/main.js          Scroll-reveal (IntersectionObserver), mobile nav, footer year — no dependencies
assets/
  haitham.jpg       Portrait (900×1200, optimized from the CV PNG)
  favicon.svg       "HM" monogram
.nojekyll           Tells GitHub Pages to skip Jekyll processing
```

## Content source

Copy is derived from the canonical CV at
`../G42 hiring/cv/Haitham_Ibrahim_AI_Engineer_CV_2026.md`. Keep the two honest:
**do not** invent latency/cost numbers, and frame the Hamdan reranker as *built and tested*,
not as a wired-in production stage (it isn't yet).

## Adding a project

Open `index.html`, find the **Selected Work** section. Copy the commented `<li class="project">`
template block, paste it before the closing `</ul>`, and fill in title, org, description,
tags, and stack. Remove the `project--soon` placeholder card when you have enough real work.

## Run locally

```bash
# any static server works; from this folder:
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just `open index.html` (fonts load from the network).

## Deploy to GitHub Pages

Deploys under the real, active account: **`haitham72`**, as the user-page repo
`haitham72.github.io` (a separate `ihisam` account was considered — `haitham72`
already exists and is what `gh` is authenticated as, so that's the live target).

```bash
cd ihisam.github.io
git init && git add -A && git commit -m "Portfolio site"
git branch -M main
gh repo create haitham72.github.io --public --source=. --remote=origin --push
# or, manually: create the repo on github.com, then:
#   git remote add origin https://github.com/haitham72/haitham72.github.io.git
#   git push -u origin main
```

For a `<user>.github.io` repo, GitHub Pages serves the `main` branch root automatically —
live at https://haitham72.github.io within ~1 minute. No Actions/build needed.

### Custom domain (optional, later)

Add a `CNAME` file containing your domain (e.g. `haithammohamed.com`), configure DNS, and set
the domain in the repo's Pages settings.

## Accessibility & performance

Semantic landmarks, skip link, visible focus states, alt text, reduced-motion support.
No JS framework, ~1 image, 3 font families — fast by construction.
