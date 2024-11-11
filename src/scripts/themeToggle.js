// Function to set the theme based on local storage or system preference
const applyTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (systemPrefersDark ? "dark" : "light");

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

// Function to toggle the theme when the button is clicked
const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// Initial theme application on page load
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  setToggleListener();
});

// Re-apply theme after navigation in Astro
document.addEventListener("astro:after-swap", () => {
  applyTheme();
  setToggleListener();
});

// Function to set up the toggle button listener
const setToggleListener = () => {
  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn?.removeEventListener("click", toggleTheme);
  toggleBtn?.addEventListener("click", toggleTheme);
};
