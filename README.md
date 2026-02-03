# DH Lab Freiburg – Projekthub

Public-facing project hub displaying metadata about all Digital Humanities Lab Freiburg projects. Reads project data from a Google Sheet via the Google Sheets API.

**Live:** https://dhlab-freiburg.github.io/project-hub/

## Features

- Browse all DH Lab projects as cards
- Full-text search across all metadata fields
- Filter by project status (Aktiv / Abgeschlossen)
- Detail view with full metadata per project
- Links out to external project pages
- Responsive design (Bootstrap 5) matching DH Lab visual identity

## Architecture

Static single-page application — vanilla JS, no build step, no framework.

```
├── index.html              # Design A (dark theme)
├── css/style.css           # Design A styles
├── designs/
│   └── b/                  # Design B (warm editorial theme)
│       ├── index.html
│       └── css/style.css
├── js/                     # Shared application logic
│   ├── config.js           # API config + column mapping
│   ├── api.js              # Google Sheets API fetch
│   ├── search.js           # Client-side full-text search
│   └── app.js              # Rendering, filtering, detail modal
├── knowledge/              # Promptotyping docs + reference data
│   ├── requirements.md     # Goals, features, constraints
│   ├── data-schema.md      # Column mapping, data characteristics
│   ├── design-a.md         # Design A: visual identity, architecture
│   ├── design-b.md         # Design B: warm editorial brief
│   └── Datenbestand.csv    # Data snapshot for reference
└── .github/workflows/
    └── deploy.yml          # GitHub Pages deployment (injects API key)
```

Data source: [Google Sheet](https://docs.google.com/spreadsheets/d/18QHr1QYNfuq4QRieHECApGVnX5oeJDGhO-bzmc3SlB0)

## Setup

### Google Sheets API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project or use an existing one
3. Enable **Google Sheets API**
4. Create an API key (Credentials → Create Credentials → API Key)
5. Recommended: restrict the key to Google Sheets API only

### Local Development

Replace the placeholder in `js/config.js` with your API key:

```js
API_KEY: 'your-key-here',
```

Then open `index.html` in a browser. No build step needed.

**Do not commit the key.** The deployed site gets the key injected via GitHub Actions (see below).

### Deployment

The site deploys automatically to GitHub Pages on every push to `main`.

The API key is stored as a repository secret (`GOOGLE_SHEETS_API_KEY`) and injected at deploy time by `.github/workflows/deploy.yml`.

To update the key:
```
gh secret set GOOGLE_SHEETS_API_KEY --body "your-key" --repo DHLab-Freiburg/project-hub
```

## Updating the Schema

When columns change in the Google Sheet, update `js/config.js`:

- `COLUMNS` — maps semantic names to column indices (A=0, B=1, ...)
- `LABELS` — German display labels for each column
- `SHEET_RANGE` — adjust if column count changes (e.g. `A2:N` → `A2:P`)

See `knowledge/data-schema.md` for the current column documentation.

## Methodology

This project was built using the [Promptotyping](https://github.com/DigitalHumanitiesCraft/promptotyping-skill) methodology. The `knowledge/` folder contains the design documents:

- `knowledge/requirements.md` — goals, features, constraints
- `knowledge/data-schema.md` — column mapping and data characteristics
- `knowledge/design-a.md` — Design A: visual identity, file structure, architecture
- `knowledge/design-b.md` — Design B: warm editorial theme brief
