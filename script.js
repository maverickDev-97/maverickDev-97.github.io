// Theme toggle
const initThemeFromLocalStorage = localStorage.getItem("mode");

if (!initThemeFromLocalStorage) {
    const currentHour = new Date().getHours();
    const defaultTheme = currentHour > 18 || currentHour < 8 ? "dark" : "light";
    localStorage.setItem("mode", defaultTheme);
    document.body.classList.add(defaultTheme);
} else {
    document.body.classList.add(initThemeFromLocalStorage)
}

const themeToggleElement = document.querySelector(".theme-toggle");

const toggleTheme = () => {
    const mode = localStorage.getItem("mode");
    const newMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", newMode);
    if (newMode === "dark") {
        document.body.classList.replace("light", "dark");
    } else {
        document.body.classList.replace("dark", "light");
    }
}

themeToggleElement.addEventListener("click", toggleTheme)

// Navigation
const isHomepage = !document.URL.includes("projects");
const navigationItems = document.querySelectorAll(".navigation__item");
navigationItems[isHomepage ? 0 : 1].classList.add("navigation__item--active");