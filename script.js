const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Default theme (light)
body.setAttribute("data-theme", "light");

toggleBtn.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
});
