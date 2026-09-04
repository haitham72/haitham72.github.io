# CLAUDE.md — Portfolio

Static single-page portfolio for Haitham Mohamed. Zero build. Routing key only — state and
detail live in `README.md`. Local folder is named `ihisam.github.io`, but the repo actually
deploys as `haitham72.github.io` (see README's Deploy section for why).

- **Stack:** plain HTML/CSS/JS, no framework, no build. Deploys as-is to GitHub Pages.
- **Files:** `index.html` (content + structure), `css/styles.css` (design system, tokens as
  CSS vars), `js/main.js` (reveal + nav, no deps). See `README.md` for full map.
- **Content source of truth:** `../G42 hiring/cv/Haitham_Ibrahim_AI_Engineer_CV_2026.md`.
  Honesty guardrails apply — no invented latency/cost numbers; reranker is *built/tested*, not
  a wired-in production stage.
- **Add a project:** copy the commented `<li class="project">` template in the Work section of
  `index.html`. Don't hand-roll a new component.
- **Deploy / run locally / design tokens:** all in `README.md`. Read it before non-trivial edits.
- **Editing content?** Match the CV first, then edit HTML. Don't drift the two apart.
