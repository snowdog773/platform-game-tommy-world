import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "./Hero";
import StaticRectangle from "./StaticRectangle";
const Main = () => {
  const dispatch = useDispatch();
  ///////////////////////////////////////////////////////////////////////////////////////////
  //set key states
  const [aHeld, setAHeld] = useState(false);
  const [dHeld, setDHeld] = useState(false);
  const [wHeld, setWHeld] = useState(false);
  const [sHeld, setSHeld] = useState(false);

  const downHandler = (key) => {
    key === "a" && setAHeld(true);
    key === "d" && setDHeld(true);
    key === "w" && setWHeld(true);
    key === "s" && setSHeld(true);
  };

  const upHandler = (key) => {
    key === "a" && setAHeld(false);
    key === "d" && setDHeld(false);
    key === "w" && setWHeld(false);
    key === "s" && setSHeld(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => downHandler(e.key));
    document.addEventListener("keyup", (e) => upHandler(e.key));
  }, []);
  //States from the Store
  const isLanded = useSelector((state) => state.landed);
  const heroPosX = useSelector((state) => state.heroPosX);
  const heroPosY = useSelector((state) => state.heroPosY);
  const rectangles = useSelector((state) => state.staticRectangles); //top left width height
  ////////////////////////////////////////////////////////////////////////////
  //GRAVITY????????????????????????????????????????????????????????????????????????

  useEffect(() => {
    if (!isLanded) {
      setTimeout(() => dispatch({ type: "MOVE_Y", payload: 10 }), 100);
      rectangles.forEach((e) => {
        if (heroPosX > e[1] && heroPosX < e[1] + e[2] && heroPosY >= e[0]) {
          dispatch({ type: "LANDED" });
          return;
        }
      });
    }
  }, [isLanded, heroPosY]);
  const timerA = useRef(); //hook creates immutable object that survives as long as the component is live
  const timerD = useRef();
  useEffect(() => {
    if (dHeld) {
      timerD.current = setInterval(() => {
        dispatch({ type: "MOVE_X", payload: 10 });
      }, 20);
    } else {
      clearInterval(timerD.current);
    }

    return () => {
      clearInterval(timerD.current); //cleanup
    };
  }, [dHeld]);

  useEffect(() => {
    if (aHeld) {
      timerA.current = setInterval(() => {
        dispatch({ type: "MOVE_X", payload: -10 });
      }, 20);
    } else {
      clearInterval(timerA.current);
    }
    return () => {
      clearInterval(timerA.current); //cleanup
    };
  });

  /////////////////////////////////////////////////////////////////////////////////////////////

  //Event states

  // const tommyJump = () => {
  //   // s = ut + 1/2 at**2
  //   //initialise s and u and t, a is 10 constant
  //   let initPosition = top;
  //   console.log("jump ran");
  //   let dist = 0;
  //   let velInit = 30;
  //   let time = 0;

  //   const jump = setInterval(() => {
  //     dist = velInit * time - time ** 2;
  //     setTop(top - dist);
  //     time += 1;
  //     console.log(time, dist);
  //     if (dist < 0 && time > 1) {
  //       clearInterval(jump);
  //       setTop(initPosition);
  //     }
  //   }, 10); //redraw every 10 ms
  // };

  //read keys

  return (
    <div id="gameWindow">
      <Hero />

      {rectangles.map((e) => {
        return (
          <StaticRectangle top={e[0]} left={e[1]} width={e[2]} height={e[3]} />
        );
      })}
    </div>
  );
};

export default Main;

//SETTING KEY STATES TO REDUX

//redux key states
// const aHeld = useSelector((state) => state.aHeld.aHeld);
// const dHeld = useSelector((state) => state.dHeld.dHeld);
// const sHeld = useSelector((state) => state.sHeld.sHeld);
// const wHeld = useSelector((state) => state.wHeld.wHeld);

// const downHandler = (key) => {
//   key === "a" && dispatch({ type: "A_DOWN" });
//   key === "d" && dispatch({ type: "D_DOWN" });
//   key === "w" && dispatch({ type: "W_DOWN" });
//   key === "s" && dispatch({ type: "S_DOWN" });
// };

// const upHandler = (key) => {
//   key === "a" && dispatch({ type: "A_UP" });
//   key === "d" && dispatch({ type: "D_UP" });
//   key === "w" && dispatch({ type: "W_UP" });
//   key === "s" && dispatch({ type: "S_UP" });
// };
