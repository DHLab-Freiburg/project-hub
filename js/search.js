function searchProjects(projects, query) {
  if (!query) return projects;
  var q = query.toLowerCase();
  return projects.filter(function (project) {
    var keys = Object.keys(project);
    for (var i = 0; i < keys.length; i++) {
      if (project[keys[i]].toLowerCase().indexOf(q) !== -1) {
        return true;
      }
    }
    return false;
  });
}
