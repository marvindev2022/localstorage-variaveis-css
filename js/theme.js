const root = document.querySelector(":root");
const btnTheme = document.querySelector("#btn-theme");

function applyCurrentTheme() {
  const currentTheme = localStorage.getItem("theme");

  if (!currentTheme || currentTheme === "light") {
    btnTheme.src = "assets/sun.svg";
    root.style.setProperty("--bg-color", "white");
    root.style.setProperty("--text-color", "black");

    root.style.setProperty("--header-footer-bg-color", "purple");
    return;
  }

  btnTheme.src = "assets/moon.svg";

  root.style.setProperty("--bg-color", "black");
  root.style.setProperty("--text-color", "white");

  root.style.setProperty("--header-footer-bg-color", "#515050");
}

applyCurrentTheme();

btnTheme.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");

  if (!currentTheme || currentTheme === "light") {
    localStorage.setItem("theme", "dark");
    applyCurrentTheme();
    return;
  }

  localStorage.setItem("theme", "light");
  applyCurrentTheme();
});
