const navigation = () => {
  const btn = document.querySelector(".nav__btn");
  const overlay = document.querySelector(".overlay__wrapper");
  const links = document.querySelectorAll(".overlay__link__li");
  btn.addEventListener("click", () => {
    overlay.classList.toggle("active");
    btn.classList.toggle("toogle");
    links.forEach((link, index) => {
      link.style.animation = `movelink 1s ease  ${index / 5}s`;
    });
  });
};
navigation();
