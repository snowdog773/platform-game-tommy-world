import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Hero = () => {
  //redux key states
  // const aHeld = useSelector((state) => state.aHeld.aHeld);
  // const dHeld = useSelector((state) => state.dHeld.dHeld);
  // const sHeld = useSelector((state) => state.sHeld.sHeld);
  // const wHeld = useSelector((state) => state.wHeld.wHeld);
  const heroPosX = useSelector((state) => state.heroPosX);

  const heroPosY = useSelector((state) => state.heroPosY);
  // console.log(heroPosX, heroPosY, "from component");
  // //component position states
  // const [heroX, setHeroX] = useState(500);
  // const [heroY, setHeroY] = useState(500);

  // // //jump function

  // // // s = ut + 1/2 at**2
  // // //initialise s and u and t, a is 10 constant
  // // let initPosition = heroY;
  // // console.log("jump ran");
  // // let dist = 0;
  // // let velInit = 30;
  // // let time = 0;

  // // const jump = setInterval(() => {
  // //   dist = velInit * time - time ** 2;
  // //   setHeroY(heroY - dist);

  // //   console.log(time, dist);
  // //   if (heroY > 500 && time > 1) {
  // //     clearInterval(jump);
  // //     setHeroY(initPosition);
  // //   }
  // //   time += 1;
  // // }, 10); //redraw every 10 ms

  // //function for X movement

  // if (aHeld) {
  //   setTimeout(() => setHeroX(heroX - 10), 20);
  // }

  // if (dHeld) {
  //   setTimeout(() => setHeroX(heroX + 10), 20);
  // }

  // if (wHeld) {
  //   // heroJump();
  // }

  return <div id="tommy" style={{ top: heroPosY, left: heroPosX }}></div>;
};

export default Hero;
