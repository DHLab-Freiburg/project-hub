var allProjects = [];
var debounceTimer = null;

document.addEventListener('DOMContentLoaded', init);

async function init() {
  allProjects = await fetchProjects();
  document.getElementById('loading').classList.add('d-none');
  renderProjects(allProjects);

  document.getElementById('searchInput').addEventListener('input', function () {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(applyFilters, 300);
  });

  document.getElementById('statusFilter').addEventListener('change', applyFilters);
}

function applyFilters() {
  var query = document.getElementById('searchInput').value;
  var statusValue = document.getElementById('statusFilter').value;

  var filtered = searchProjects(allProjects, query);

  if (statusValue) {
    filtered = filtered.filter(function (p) {
      return normalizeStatus(p.status) === statusValue;
    });
  }

  renderProjects(filtered);
}

function normalizeStatus(raw) {
  if (!raw) return '';
  var lower = raw.toLowerCase();
  if (lower.indexOf('aktiv') !== -1 && lower.indexOf('abgeschlossen') === -1) return 'aktiv';
  if (lower.indexOf('abgeschlossen') !== -1) return 'abgeschlossen';
  return 'sonstige';
}

function statusBadge(raw) {
  var norm = normalizeStatus(raw);
  if (norm === 'aktiv') return '<span class="badge badge-aktiv">Aktiv</span>';
  if (norm === 'abgeschlossen') return '<span class="badge badge-abgeschlossen">Abgeschlossen</span>';
  return '';
}

function renderProjects(projects) {
  var container = document.getElementById('projects');
  var noResults = document.getElementById('noResults');
  var countEl = document.getElementById('projectCount');

  if (projects.length === 0) {
    container.innerHTML = '';
    noResults.classList.remove('d-none');
    countEl.textContent = '';
    return;
  }

  noResults.classList.add('d-none');
  countEl.textContent = projects.length + ' Projekt' + (projects.length !== 1 ? 'e' : '') + ' gefunden';

  var html = '';
  for (var i = 0; i < projects.length; i++) {
    html += buildCard(projects[i], i);
  }
  container.innerHTML = html;
}

function buildCard(project, index) {
  var desc = project.description || '';
  var truncated = desc.length > 200 ? desc.substring(0, 200) + '...' : desc;

  var contactLine = '';
  if (project.contact) {
    contactLine = '<p class="card-contact">Ansprechpartner: ' + escapeHtml(project.contact) + '</p>';
  }

  var badge = statusBadge(project.status);

  var externalLink = '';
  if (project.links) {
    externalLink =
      '<a href="' + escapeHtml(project.links) + '" target="_blank" rel="noopener" ' +
      'class="card-external-link" title="Zur Projektseite">' +
      '&#x2197; Projektseite</a>';
  }

  return (
    '<div class="col-md-6 col-lg-4">' +
    '<div class="card project-card">' +
    '<div class="card-body">' +
    '<h5 class="card-title">' + escapeHtml(project.name) + '</h5>' +
    contactLine +
    '<p class="card-text">' + escapeHtml(truncated) + '</p>' +
    '</div>' +
    '<div class="card-footer">' +
    '<span>' + badge + '</span>' +
    '<span>' +
    '<a class="card-detail-link" onclick="showDetail(' + index + ')">Details</a>' +
    (externalLink ? ' &middot; ' + externalLink : '') +
    '</span>' +
    '</div>' +
    '</div>' +
    '</div>'
  );
}

function showDetail(index) {
  var project = getVisibleProjects()[index];
  if (!project) return;

  document.getElementById('detailModalLabel').textContent = project.name;

  var labels = CONFIG.LABELS;
  var keys = Object.keys(labels);
  var html = '<dl>';

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = project[key];
    if (!value || key === 'name') continue;

    if (key === 'links') {
      html += '<dt>' + escapeHtml(labels[key]) + '</dt>';
      html += '<dd><a href="' + escapeHtml(value) + '" target="_blank" rel="noopener">' + escapeHtml(value) + '</a></dd>';
    } else {
      html += '<dt>' + escapeHtml(labels[key]) + '</dt>';
      html += '<dd>' + escapeHtml(value) + '</dd>';
    }
  }

  html += '</dl>';
  document.getElementById('detailModalBody').innerHTML = html;

  var extLink = document.getElementById('detailExternalLink');
  if (project.links) {
    extLink.href = project.links;
    extLink.classList.remove('d-none');
  } else {
    extLink.classList.add('d-none');
  }

  var modal = new bootstrap.Modal(document.getElementById('detailModal'));
  modal.show();
}

function getVisibleProjects() {
  var query = document.getElementById('searchInput').value;
  var statusValue = document.getElementById('statusFilter').value;
  var filtered = searchProjects(allProjects, query);
  if (statusValue) {
    filtered = filtered.filter(function (p) {
      return normalizeStatus(p.status) === statusValue;
    });
  }
  return filtered;
}

function escapeHtml(text) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}
