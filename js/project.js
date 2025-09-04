(function () {
  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const project = (window.PROJECTS || []).find(p => p.id === id);
  if (!project) {
    document.querySelector(".container").innerHTML = `
      <h2>Project not found</h2>
      <p>Return to <a href="index.html#projects">all projects</a>.</p>
    `;
    return;
  }

  // Head (title + tags)
  const head = document.getElementById("projectHead");
  head.innerHTML = `
    <h1 class="project-title">${escapeHtml(project.title)}</h1>
    <ul class="tags">${project.tags.map(t => `<li class="tag">${escapeHtml(t)}</li>`).join("")}</ul>
  `;

  // Media
  const img = document.getElementById("projectImage");
  img.src = project.image || "assets/placeholder.png";
  img.alt = `${project.title} screenshot`;

  // Text fields
  document.getElementById("projectProblem").textContent = project.problem || "";
  document.getElementById("projectImpact").textContent = project.impact || "";

  // Flow
  const flowEl = document.getElementById("projectFlow");
  flowEl.innerHTML = project.flow.map(step => `<li>${escapeHtml(step)}</li>`).join("");

  // Nodes
  const nodesEl = document.getElementById("projectNodes");
  nodesEl.innerHTML = (project.nodes || []).map(n => `<li class="tag">${escapeHtml(n)}</li>`).join("");

  // Links
  const repoLink = document.getElementById("repoLink");
  const demoLink = document.getElementById("demoLink");
  repoLink.href = (project.links && project.links.repo) ? project.links.repo : "#";
  demoLink.href = (project.links && project.links.demo) ? project.links.demo : "#";

  // small helper to avoid injecting raw HTML accidentally
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
})();
