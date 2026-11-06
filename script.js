// Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Open and close the menu on small screens
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close the menu after tapping a link on mobile
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
