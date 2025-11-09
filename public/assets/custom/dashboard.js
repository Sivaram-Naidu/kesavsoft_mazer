// FILENAME: public/assets/custom/dashboard.js

// Function to get the correct base path
function getAssetPath(path) {
  // UPDATED: Added the leading slash /
  return `/${path}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // UPDATED: Added the leading slash /
  const dataPath = "/assets/custom/data.json";

  // Fetch and populate project data
  fetch(dataPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      populateProjects(data.projects);
      populateTeam(data.team);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      const projectList = document.getElementById("project-list");
      const teamList = document.getElementById("team-list");
      if (projectList)
        projectList.innerHTML =
          '<p class="text-danger p-3">Error loading projects. Please check console.</p>';
      if (teamList)
        teamList.innerHTML =
          '<p class="text-danger p-3">Error loading team. Please check console.</p>';
    });
});

function populateProjects(projects) {
  const projectList = document.getElementById("project-list");
  if (!projectList) return;

  projectList.innerHTML = ""; // Clear "Loading..."
  projects.forEach((project) => {
    const projectCol = document.createElement("div");
    projectCol.className = "col-lg-6 col-md-12 mb-4";
    projectCol.innerHTML = `
      <div class="card shadow-sm h-100">
        <div class="card-body">
          <h5 class="card-title">${project.name}</h5>
          <p class="card-text">${project.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="badge ${project.status === "In Progress" ? "bg-primary" : "bg-success"}">${project.status}</span>
            <small class="text-muted">${project.dueDate}</small>
          </div>
        </div>
      </div>
    `;
    projectList.appendChild(projectCol);
  });
}

function populateTeam(team) {
  const teamList = document.getElementById("team-list");
  if (!teamList) return;

  teamList.innerHTML = ""; // Clear "Loading..."
  team.forEach((member) => {
    const memberDiv = document.createElement("div");
    memberDiv.className = "team-member";
    memberDiv.innerHTML = `
      <img src="${getAssetPath(member.avatar)}" alt="${member.name}">
      <div class="team-member-info">
        <h6>${member.name}</h6>
        <span>${member.role}</span>
      </div>
    `;
    teamList.appendChild(memberDiv);
  });
}
