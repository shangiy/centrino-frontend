// Replace this URL with your actual Render API URL
const API_URL = "https://centrino-backend.onrender.com/api";

async function loadServices() {
  const res = await fetch(`${API_URL}/services`);
  const data = await res.json();

  const list = document.getElementById("services-list");
  list.innerHTML = ""; // clear previous

  data.services.forEach(service => {
    const li = document.createElement("li");
    li.textContent = service;
    list.appendChild(li);
  });

  // Smooth scroll to services section
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}

async function loadAbout() {
  const res = await fetch(`${API_URL}/about`);
  const data = await res.json();
  document.getElementById("about-text").textContent = data.about;
}

async function loadCareers() {
  const res = await fetch(`${API_URL}/careers`);
  const data = await res.json();

  const list = document.getElementById("careers-list");
  list.innerHTML = "";

  data.positions.forEach(job => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${job.title}</strong> — ${job.type} (${job.location})`;
    list.appendChild(li);
  });
}

// Auto-load sections on page load
document.addEventListener("DOMContentLoaded", () => {
  loadAbout();
  loadCareers();
});
