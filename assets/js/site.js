const themeToggle = document.querySelector(".theme-toggle");

function updateThemeControl() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute(
    "aria-label",
    dark ? "Use light theme" : "Use dark theme",
  );
  themeToggle.setAttribute("aria-pressed", String(dark));
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", dark ? "#11151c" : "#ffffff");
}

if (themeToggle) {
  themeToggle.hidden = false;
  updateThemeControl();
  themeToggle.addEventListener("click", () => {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch (_) {}
    updateThemeControl();
  });
}
