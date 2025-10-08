// Replace with your actual Render backend URL
const API_BASE = "https://centrino-backend.onrender.com/api";

async function fetchServices() {
  try {
    const res = await fetch(`${API_BASE}/services`);
    const data = await res.json();

    const list = document.getElementById('services-list');
    list.innerHTML = '';
    data.services.forEach(service => {
      const li = document.createElement('li');
      li.textContent = service;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Failed to fetch services", err);
  }
}

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

fetchServices();
