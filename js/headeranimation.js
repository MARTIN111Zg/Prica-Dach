TweenMax.from(".nav__logo img", 1.6, {
  delay: 0.8,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".nav__logo__text", 1.6, {
  delay: 1,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".nav__btn", 1.4, {
  delay: 1.4,
  opacity: 0,
  y: 20,
  ease: Expo.easeInOut
});

TweenMax.from(".moto__h3", 1.4, {
  delay: 1,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.from(".moto__h4", 1.4, {
  delay: 1,
  opacity: 0,
  y: -40,
  ease: Expo.easeInOut
});

TweenMax.from(".unternehmen", 2, {
  delay: 1.6,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.from(".year", 2, {
  delay: 1.6,
  opacity: 0,
  x: -40,
  ease: Expo.easeInOut
});

TweenMax.from(".icon-plus", 2, {
  delay: 1,
  opacity: 0,
  x: -40,
  rotation: 90,
  ease: Expo.easeInOut
});

TweenMax.from(".line", 2, {
  delay: 2.8,
  opacity: 0,
  x: 40,
  ease: Expo.easeInOut
});

TweenMax.from(".line2", 2, {
  delay: 2.8,
  opacity: 0,
  x: -40,
  ease: Expo.easeInOut
});

TweenMax.from(".gold__line", 2, {
  delay: 2.8,
  opacity: 0,
  x: -30,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(
  ".icons li",
  2,
  {
    delay: 2.8,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
  },
  0.2
);
