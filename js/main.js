(function () {
  const grid = document.getElementById("projectsGrid");
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function renderCards(list) {
    grid.innerHTML = "";
    list.forEach(p => {
      const card = document.createElement("a");
      card.href = `project.html?id=${encodeURIComponent(p.id)}`;
      card.className = "card";
      card.innerHTML = `
        <div class="card__thumb">Workflow Preview</div>
        <h3 class="card__title">${p.title}</h3>
        <p class="card__text">${p.summary}</p>
        <ul class="tags">
          ${p.tags.map(t => `<li class="tag">${t}</li>`).join("")}
        </ul>
      `;
      grid.appendChild(card);
    });
  }

  function filterProjects() {
    const q = (searchInput.value || "").toLowerCase();
    const tag = filterSelect.value;
    const filtered = window.PROJECTS.filter(p => {
      const hay = (p.title + " " + p.summary + " " + p.tags.join(" ")).toLowerCase();
      const passQuery = hay.includes(q);
      const passTag = tag === "all" ? true : p.tags.includes(tag);
      return passQuery && passTag;
    });
    renderCards(filtered);
  }

  // initial render
  renderCards(window.PROJECTS);

  // events
  searchInput.addEventListener("input", filterProjects);
  filterSelect.addEventListener("change", filterProjects);
})();
