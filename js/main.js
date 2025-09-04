(function () {
  const grid = document.getElementById("projectsGrid");
  const searchInput = document.getElementById("searchInput");
  const filterSelect = document.getElementById("filterSelect");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render card list
  function renderCards(list) {
    grid.innerHTML = "";
    if (!list.length) {
      grid.innerHTML = '<p class="muted">No projects match your search.</p>';
      return;
    }
    list.forEach(p => {
      const a = document.createElement("a");
      a.className = "card";
      a.href = `project.html?id=${encodeURIComponent(p.id)}`;
      a.innerHTML = `
        <div class="card-thumb">${p.title.split(' ')[0]}</div>
        <h3 class="card-title">${p.title}</h3>
        <p class="card-text">${p.summary}</p>
        <ul class="tags">${p.tags.map(t=>`<li class="tag">${t}</li>`).join('')}</ul>
      `;
      grid.appendChild(a);
    });
  }

  // Filter logic
  function filterProjects() {
    const q = (searchInput.value || "").trim().toLowerCase();
    const tag = filterSelect.value;
    const filtered = (window.PROJECTS || []).filter(p => {
      const hay = (p.title + " " + p.summary + " " + p.tags.join(" ")).toLowerCase();
      const passesQuery = q ? hay.includes(q) : true;
      const passesTag = tag === "all" ? true : p.tags.includes(tag);
      return passesQuery && passesTag;
    });
    renderCards(filtered);
  }

  // initial render
  renderCards(window.PROJECTS || []);

  // events
  searchInput.addEventListener("input", throttle(filterProjects, 150));
  filterSelect.addEventListener("change", filterProjects);

  // basic throttle utility to limit how often filter runs as user types
  function throttle(fn, wait) {
    let t = null;
    return function(...args) {
      if (t) return;
      t = setTimeout(()=>{ fn.apply(this,args); t=null; }, wait);
    };
  }
})();
