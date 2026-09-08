(() => {
  const storageKey = "theme";
  const darkClass = "dark-mode";

  function applyTheme(theme) {
    document.body.classList.toggle(darkClass, theme === "dark");
  }

  function getStoredTheme() {
    return localStorage.getItem(storageKey) === "dark" ? "dark" : "light";
  }

  function createToggle(theme) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.setAttribute("aria-label", "Bytt mellom lys og mørk modus");
    button.textContent = theme === "dark" ? "☀️ Lys" : "🌙 Mørk";
    return button;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const currentTheme = getStoredTheme();
    applyTheme(currentTheme);

    const toggleButton = createToggle(currentTheme);
    toggleButton.addEventListener("click", () => {
      const isDark = document.body.classList.toggle(darkClass);
      const nextTheme = isDark ? "dark" : "light";
      localStorage.setItem(storageKey, nextTheme);
      toggleButton.textContent = isDark ? "☀️ Lys" : "🌙 Mørk";
    });

    document.body.appendChild(toggleButton);
  });
})();
