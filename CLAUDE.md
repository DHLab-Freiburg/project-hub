# CLAUDE.md

## Project Overview

Project hub frontend for DH Lab Freiburg. Displays project metadata from a Google Sheet. Static site hosted on GitHub Pages.

## Tech Stack

- Vanilla JS (no framework, no build step)
- Bootstrap 5 via CDN
- Google Sheets API v4 (read-only, API key auth)

## Key Files

- `js/config.js` — API key placeholder, sheet ID, column mapping, labels. **This is the file to edit when the Google Sheet schema changes.**
- `js/api.js` — Fetches and parses sheet data
- `js/search.js` — Client-side full-text search
- `js/app.js` — Main application: rendering, filtering, detail modal
- `css/style.css` — Custom theme matching DH Lab colors (`#2a2a2a`, `#fbe978`, `#E8E8E8`)
- `.github/workflows/deploy.yml` — Deploys to Pages, injects API key from secret

## Important Patterns

- Column mapping lives in `CONFIG.COLUMNS` (index-based: A=0, B=1, ...). When columns are added/removed/reordered in the sheet, update this object and `CONFIG.LABELS`.
- The API key is `__GOOGLE_SHEETS_API_KEY__` in source — replaced by `sed` in the deploy workflow. For local dev, temporarily paste the real key.
- Status normalization: `normalizeStatus()` in `app.js` maps free-text "Aktueller Stand" values to `aktiv` / `abgeschlossen` / `sonstige` by keyword matching.
- All HTML output is escaped via `escapeHtml()` to prevent XSS.

## Design Docs (Promptotyping)

All in `knowledge/`:

- `requirements.md` — Goals, features, scope
- `data-schema.md` — Column definitions, data characteristics
- `design-a.md` — Design A: colors, file structure, API setup
- `design-b.md` — Design B: warm editorial theme brief
- `Datenbestand.csv` — Data snapshot for reference

## Commands

No build or test commands. Open `index.html` in a browser.

Deploy: push to `main` → GitHub Actions handles it.
