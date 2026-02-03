# Data Schema

## Source
Google Sheet: `18QHr1QYNfuq4QRieHECApGVnX5oeJDGhO-bzmc3SlB0`

## Current Columns (14)

| # | Column | Used in overview | Used in detail | Filterable | Notes |
|---|--------|:---:|:---:|:---:|-------|
| A | Projektname | x | x | | Primary identifier |
| B | Projektbeschreibung | truncated | x | | Can be very long (500+ words) |
| C | Ansprechpartner | x | x | | Sometimes empty |
| D | Datenbestand (Was?) | | x | | |
| E | Ausgangsformat | | x | | |
| F | Zielformat | | x | | |
| G | Datenmenge (geschätzt) | | x | | No consistent unit |
| H | Aktueller Stand | x | x | x | Values: Aktiv, Abgeschlossen, free text |
| I | Besondere Anforderungen | | x | | Can be very long |
| J | Priorität | | x | | Hoch (1), Mittel (2), Niedrig (3), empty |
| K | Typ | | x | | Mostly empty |
| L | Standards | | x | | Mostly empty |
| M | Alles offen? | | x | | Mostly empty |
| N | Links | link-out | x | | URLs to external project pages |

## Data Characteristics
- 25 projects currently
- Many empty cells, especially columns K-N
- Descriptions contain embedded URLs (plain text, not hyperlinks)
- "Aktueller Stand" has mixed values: structured (Aktiv/Abgeschlossen) and free text
- Schema will evolve as new columns are added

## Column Mapping in Code
Columns mapped by index (A=0, B=1, ...) in a config object for easy updates when schema changes.
