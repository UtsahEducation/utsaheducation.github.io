// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

