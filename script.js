function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to toggle between dark and light modes
function toggleMode() {
  const body = document.body;
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  }
}

// Check the user's preferred mode on page load (optional)
window.addEventListener('DOMContentLoaded', () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: light)').matches;
  const body = document.body;
  
  if (prefersDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.add('light-mode');
  }
});

