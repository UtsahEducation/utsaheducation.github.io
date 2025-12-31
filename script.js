// Update year
document.getElementById("year").textContent = new Date().getFullYear();

// ===== DESKTOP / OLD NAV TOGGLE (KEEP SAFE) =====
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// ===== MOBILE MENU LOGIC =====
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuBtn = document.querySelector(".mobile-menu-btn");

  if (!mobileMenu || !menuBtn) return;

  // Close when any menu link is clicked
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
    });
  });

  // Close when user scrolls
  window.addEventListener("scroll", () => {
    mobileMenu.classList.remove("show");
  });

  // Close when tapping outside menu
  document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
      mobileMenu.classList.remove("show");
    }
  });
});
