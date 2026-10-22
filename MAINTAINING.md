# Maintaining the site

Technical notes for whoever edits the site (most likely me).

One hand-written HTML file: no frameworks, no third-party requests, and only a few lines of
JavaScript for the light/dark toggle (the page works fine without it).

```
index.html              the page (styles inline)
favicon.svg             [m] mark, adapts to light/dark
deangeliscv_2025.pdf    CV
assets/headshot.webp    192 px portrait (+ .jpg fallback)
assets/og.jpg           link-preview image
assets/fonts/           IBM Plex Sans 400/600, Plex Mono 400 (Latin subset, SIL OFL 1.1)
_config.yml             Jekyll settings; lists files that shouldn't be published as pages
```

GitHub Pages builds the site with Jekyll. `index.html` has no front matter, so it is copied
unchanged. Markdown files are turned into pages, except those listed under `exclude` in
`_config.yml` (this file and the README). Add any new repo-only notes to that list.

## Notes

- Light and dark themes follow the visitor's system setting (`prefers-color-scheme`).
- The theme toggle (top right) overrides the system setting and remembers the choice
  in the visitor's browser. Without a saved choice, the page follows the system.
- Links to other sites get the external-link mark automatically, via a CSS rule on
  `a[href^="http"]` that excludes this domain. No markup is needed: just add an ordinary link.
- When the CV changes, update the filename, size and date in the `cv` row of `index.html`,
  and the CV link in `README.md`.
- When the page's content changes, keep `README.md` in step with it.
- The footer promises no cookies, analytics or trackers. Before adding analytics, embedded
  videos, social widgets or fonts/scripts from other sites, revise that statement: most of
  these set cookies or report visits to a third party.
