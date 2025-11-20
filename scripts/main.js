const checkbox = document.querySelector(".theme-switch__checkbox");
const body = document.body;

// Объект для системной темы
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

let userSetPreference = false;

// Функция для установки темы
function applyTheme(theme, savePreference = false) {
  if (theme === "dark") {
    body.classList.add("dark");
    checkbox.checked = true;
  } else {
    body.classList.remove("dark");
    checkbox.checked = false;
  }
  if (savePreference) {
    localStorage.setItem("theme", theme);
    userSetPreference = true;
  }
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  applyTheme(savedTheme, true);
} else {
  const systemPrefersDark = prefersDarkScheme.matches ? "dark" : "light";
  applyTheme(systemPrefersDark);
}

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    applyTheme("dark", true);
  } else {
    applyTheme("light", true);
  }
});

prefersDarkScheme.addEventListener("change", (e) => {
  if (!userSetPreference) {
    const newTheme = e.matches ? "dark" : "light";
    applyTheme(newTheme);
  }
});

const burgerButton = document.querySelector(".nav-button");
const menu = document.querySelector(".header__menu");

burgerButton.addEventListener("click", () => {
  menu.classList.toggle("show");
  burgerButton.classList.toggle("change");
});
