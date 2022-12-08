const btnDarkMode = document.querySelector(".dark-mode-btn");

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
};

// Альтернативный вариант записи

// btnDarkMode.addEventListener("click", () => {
//   btnDarkMode.classList.toggle("dark-mode-btn--active");
// });
