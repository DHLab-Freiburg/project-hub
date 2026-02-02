# Design & Technical Context

## Visual Identity (from digitalhumanities.uni-freiburg.de)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-dark` | `#2a2a2a` | Page background |
| `--text-light` | `#ffffff` | Body text on dark bg |
| `--accent` | `#fbe978` | Links, highlights, active states |
| `--panel-bg` | `#E8E8E8` | Card backgrounds |
| `--panel-text` | `#2A2A2A` | Text on cards |
| `--muted` | `#666666` | Secondary text |

## Bootstrap 5 Customization
- Override Bootstrap's primary color with accent yellow
- Dark navbar and footer matching `--bg-dark`
- Cards with `--panel-bg` background for project entries
- Responsive: cards stack on mobile

## File Structure
```
/
├── index.html          # Single page application
├── css/
│   └── style.css       # Custom overrides on Bootstrap
├── js/
│   ├── config.js       # API key, sheet ID, column mapping
│   ├── api.js          # Google Sheets API fetch
│   ├── search.js       # Full-text search logic
│   └── app.js          # Main: render, filter, detail view
├── Datenbestand.csv    # Local reference copy
├── requirements.md
├── data-schema.md
└── design-context.md
```

## Google Sheets API Setup (for maintainers)
1. Go to https://console.cloud.google.com/
2. Create project (or use existing)
3. Enable "Google Sheets API"
4. Create API key (Credentials → Create Credentials → API Key)
5. Restrict key: HTTP referrers only (your GitHub Pages domain)
6. Put key in `js/config.js`

## Architecture
- Single HTML page, no routing library
- Overview = default view, detail = modal or expanded section
- Fetch sheet data on page load, cache in memory
- Search filters the in-memory data (no re-fetch)
- Filter by "Aktueller Stand" as dropdown
