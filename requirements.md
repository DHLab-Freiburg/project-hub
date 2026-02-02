# DH Lab Freiburg – Project Hub Requirements

## Goal
Public-facing project hub displaying metadata about all DH Lab Freiburg projects. Read-only frontend consuming data from a Google Sheet via Google Sheets API.

## Audience
General public, external researchers.

## Core Features
- **Overview page**: Card/list of all projects with name, short description, status
- **Detail view**: Full metadata for a selected project
- **Full-text search**: Across all fields
- **Filter**: Aktueller Stand (Aktiv / Abgeschlossen / etc.)
- **External links**: Each project links out to its own project page where available

## Out of Scope (for now)
- Write access to Google Sheet
- Dynamic schema detection
- Markdown/HTML rendering in fields
- Multiple filters
- Authentication / user accounts

## Tech Stack
| Component | Choice |
|-----------|--------|
| Language | Vanilla JS (no framework) |
| CSS | Bootstrap 5 |
| Data source | Google Sheets API v4 (API key, sheet is not public) |
| Hosting | GitHub Pages (static) |
| Search | Client-side full-text (JS) |

## Constraints
- Columns will change over time → schema is manually maintained in code
- Data is incomplete (many empty cells) → UI must handle missing values gracefully
- Must work as static site (no server-side code)
- API key will be exposed in client JS (acceptable for read-only public data, restricted by HTTP referrer in Google Cloud Console)
