const btn = document.querySelector(".btn");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

function themeSwitch() {
  sun.classList.toggle("animate");
  moon.classList.toggle("animate");
}

btn.addEventListener("click", themeSwitch);
