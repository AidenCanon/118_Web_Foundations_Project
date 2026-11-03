const themeSelect = document.querySelector("#themeSelect");
const status = document.querySelector("#status");

function applyTheme(theme) {
document.body.className = "";

    if (theme !== "light") {
        document.body.classList.add(theme);
}

    status.textContent = `Current theme: ${theme}`;
}

function saveTheme(theme) {
localStorage.setItem("demoTheme", theme);
}

function loadSavedTheme() {
const savedTheme = localStorage.getItem("demoTheme") || "light";
themeSelect.value = savedTheme;
applyTheme(savedTheme);
}

themeSelect.addEventListener("change", function () {
const selectedTheme = themeSelect.value;
applyTheme(selectedTheme);
saveTheme(selectedTheme);
});

loadSavedTheme();