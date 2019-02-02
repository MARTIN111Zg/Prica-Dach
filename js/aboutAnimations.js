import ScrollMagic from "scrollmagic";

const controller = new ScrollMagic.Controller();
const trig = document.querySelectorAll(".project");
trig.forEach(section => {
  const over = section.querySelector(".overlay__img");
  const info = section.querySelector(".project__info");
  const title = section.querySelector(".small__title");
  const pLink = section.querySelector(".project__link");
  const animateIn = new TimelineMax();
  animateIn
    .fromTo(
      over,
      1.5,
      { skewX: 30, scale: 2 },
      {
        skewX: 0,
        xPercent: 100,
        scale: 1,
        tranformOrigin: "0% 100%",
        ease: Power2.easeOut
      }
    )
    .from(info, 1, { scaleY: 0, tranformOrigin: "bottom left" }, "-=1.5")
    .from(title, 0.5, { autoAlpha: 0, y: 30, ease: Power4.easeOut }, "-=0.8")
    .from(pLink, 0.5, { autoAlpha: 0, y: 30, ease: Power4.easeOut }, "-=0.8");

  const scene = new ScrollMagic.Scene({
    triggerElement: section
  })
    .setTween(animateIn)
    .addTo(controller);
});
