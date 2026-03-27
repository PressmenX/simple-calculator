let isDark = localStorage.getItem("theme") === "dark";

const initTheme = () => {
  if (isDark) document.body.classList.add("dark-theme");
};

const toggleTheme = () => {
  isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

export { initTheme, toggleTheme };
