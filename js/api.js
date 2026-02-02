async function fetchProjects() {
  const url =
    'https://sheets.googleapis.com/v4/spreadsheets/' +
    CONFIG.SHEET_ID +
    '/values/' +
    encodeURIComponent(CONFIG.SHEET_RANGE) +
    '?key=' +
    CONFIG.API_KEY;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Sheets API responded with ' + response.status);
    }
    const data = await response.json();
    const rows = data.values || [];
    return rows.map(parseRow);
  } catch (err) {
    console.error('Failed to fetch projects:', err);
    return [];
  }
}

function parseRow(row) {
  var project = {};
  var cols = CONFIG.COLUMNS;
  var keys = Object.keys(cols);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    project[key] = (row[cols[key]] || '').trim();
  }
  return project;
}
