// Google Sheets API Configuration
// Setup: see design-context.md for instructions on getting an API key

const CONFIG = {
  SHEET_ID: '18QHr1QYNfuq4QRieHECApGVnX5oeJDGhO-bzmc3SlB0',
  API_KEY: 'AIzaSyCxNZinKkwc0l933FzK9GKfzRXEyX8pKu8',
  SHEET_RANGE: 'Datenbestand!A2:N', // Skip header row

  // Column index mapping — update when columns change
  COLUMNS: {
    name: 0,
    description: 1,
    contact: 2,
    data: 3,
    sourceFormat: 4,
    targetFormat: 5,
    volume: 6,
    status: 7,
    requirements: 8,
    priority: 9,
    type: 10,
    standards: 11,
    open: 12,
    links: 13
  },

  // Human-readable labels for each column (German)
  LABELS: {
    name: 'Projektname',
    description: 'Projektbeschreibung',
    contact: 'Ansprechpartner',
    data: 'Datenbestand',
    sourceFormat: 'Ausgangsformat',
    targetFormat: 'Zielformat',
    volume: 'Datenmenge (geschätzt)',
    status: 'Aktueller Stand',
    requirements: 'Besondere Anforderungen',
    priority: 'Priorität',
    type: 'Typ',
    standards: 'Standards',
    open: 'Alles offen?',
    links: 'Links'
  }
};
