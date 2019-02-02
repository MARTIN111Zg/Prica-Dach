const btn = document.querySelector(".nav__btn");
const overlay = document.querySelector(".overlay__wrapper");
const start = document.querySelector(".start");
const uber = document.querySelector(".uber");
const kontakt = document.querySelector(".kontakt");
const social = document.querySelector(".social");

start.addEventListener("click", () => {
  overlay.classList.toggle("active");
  btn.classList.toggle("toogle");
  window.location.replace("/");
});
uber.addEventListener("click", () => {
  overlay.classList.toggle("active");
  btn.classList.toggle("toogle");
  window.location.replace("about.html");
});
kontakt.addEventListener("click", () => {
  overlay.classList.toggle("active");
  btn.classList.toggle("toogle");
  window.location.replace("kontakt.html");
});
social.addEventListener("click", () => {
  overlay.classList.toggle("active");
  btn.classList.toggle("toogle");
  window.location.replace("social.html");
});
