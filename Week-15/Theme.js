const themeToggle = document.querySelector("#themeToggle");

function applyTheme(isDark) {
    document.body.classList.toggle("dark", isDark);
    themeToggle.textContent = isDark ? "Dark mode" : "Light mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
}

applyTheme(localStorage.getItem("theme") === "dark");

themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    applyTheme(isDark);
});
