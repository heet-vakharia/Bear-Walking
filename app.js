const walkingBear = new TimelineMax();
const teddy = new TimelineMax();
const BearAnimation = () => {
  const tl = new TimelineMax();
  tl.add("walk");
  tl.to(".CurrentFrame", 20, {
    repeat: -1,
    backgroundPosition: "-3001px bottom",
    force3D: true,
    rotation: 0.01,
    z: 0.01,
    autoRound: false,
    ease: Linear.easeNone,
  });
  tl.to(
    "#LegForward1",
    1,
    {
      rotation: 70,
      x: 1,
      ease: Circ.easeIn,
      repeat: -1,
      yoyo: true,
    },
    "walk=+.5"
  );
  tl.to(
    "#LegForward2",
    1,
    {
      rotation: -70,
      x: 3,
      y: 150,
      ease: Circ.easeIn,
      repeat: -1,
      yoyo: true,
    },
    "walk"
  );
  tl.to(
    "#LegBackward1",
    1,
    {
      rotation: 70,
      transformOrigin: "top",
      ease: Circ.easeIn,
      repeat: -1,
      yoyo: true,
    },
    "walk"
  );
  tl.to(
    "#LegBackward2",
    1,
    {
      rotation: -50,
      transformOrigin: "top",
      ease: Circ.easeIn,
      repeat: -1,
      yoyo: true,
    },
    "walk"
  );
  return tl;
};
walkingBear.add(BearAnimation);
const teddyAnimation = () => {
  const tl = new TimelineMax();
  tl.set("#smile", {
    scale: 0,
  });
  tl.set(".Eyes", {
    rotate: 20,
  });
  tl.add("teddy");
  tl.from(
    "#TeddyFace",
    2,
    {
      repeat: 3,
      yoyo: true,
      rotation: -30,
      transformOrigin: "center",
    },
    "teddy"
  );
  tl.to(
    "#TeddyFace",
    1,
    {
      rotation: -10,
    },
    "teddy+=8"
  );
  tl.to(
    "#smile",
    0.5,
    {
      scale: 1,
      transformOrigin: "center",
      ease: Power3.easeIn,
    },
    "teddy+=8.5"
  );
  tl.to(
    ".Eyes , .lionEyes",
    0.5,
    {
      scaleY: 0.1,
      transformOrigin: "50% 70%",
      repeat: -1,
      repeatDelay: 0.5,
      yoyo: true,
      ease: Sine.easeOut,
    },
    "teddy+=3"
  );
  return tl;
};
teddy.add(teddyAnimation);
const lion = new TimelineMax();
const lionAnimation = () => {
  const tl = new TimelineMax();
  tl.set("#lionSmile", {
    scale: 0,
  });
  tl.add("lion");
  tl.delay(-0.5);
  tl.fromTo(
    "#LionFace",
    2,
    {
      repeat: 3,
      yoyo: true,
      rotate: 20,
      transformOrigin: "center",
    },
    {
      repeat: 3,
      yoyo: true,
      rotate: -20,
      transformOrigin: "center",
    },
    "lion"
  );
  tl.to(
    "#LionFace",
    2,
    {
      rotate: 0,
      transformOrigin: "center",
    },
    "lion+=6"
  );
  tl.to(
    "#lionSmile",
    0.5,
    {
      scale: 1,
      transformOrigin: "center",
      ease: Power3.easeIn,
    },
    "lion+=8.5"
  );

  return tl;
};
lion.add(lionAnimation);
