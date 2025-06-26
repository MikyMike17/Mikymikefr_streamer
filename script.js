// script.js

// Ajoute l'année courante dynamiquement dans le footer
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  document.getElementById("year").textContent = year;
});