const API_URL = "https://your-flask-api.onrender.com/api";

async function loadServices() {
  const res = await fetch(`${API_URL}/services`);
  const data = await res.json();
  alert("Services: " + data.services.join(", "));
}
