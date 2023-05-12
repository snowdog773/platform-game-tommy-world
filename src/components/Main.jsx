import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tommy from "./Tommy";
import Keys from "./Keys";

const Main = () => {
  // const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [top, setTop] = useState(500);
  const [left, setLeft] = useState(500);

  //Control key states
  const [aHeld, setAHeld] = useState(false);
  const [dHeld, setDHeld] = useState(false);
  const [wHeld, setWHeld] = useState(false);
  const [sHeld, setSHeld] = useState(false);

  //Event states

  const downHandler = (key) => {
    key === "a" && dispatch({ type: "A_DOWN" });
    key === "d" && dispatch({ type: "D_DOWN" });
    key === "w" && dispatch({ type: "W_DOWN" });
    key === "s" && dispatch({ type: "S_DOWN" });
  };

  const upHandler = (key) => {
    key === "a" && dispatch({ type: "A_UP" });
    key === "d" && dispatch({ type: "D_UP" });
    key === "w" && dispatch({ type: "W_UP" });
    key === "s" && dispatch({ type: "S_UP" });
  };

  const tommyJump = () => {
    // s = ut + 1/2 at**2
    //initialise s and u and t, a is 10 constant
    let initPosition = top;
    console.log("jump ran");
    let dist = 0;
    let velInit = 30;
    let time = 0;

    const jump = setInterval(() => {
      dist = velInit * time - time ** 2;
      setTop(top - dist);
      time += 1;
      console.log(time, dist);
      if (dist < 0 && time > 1) {
        clearInterval(jump);
        setTop(initPosition);
      }
    }, 10); //redraw every 10 ms
  };

  //read keys
  useEffect(() => {
    document.addEventListener("keydown", (e) => downHandler(e.key));
    document.addEventListener("keyup", (e) => upHandler(e.key));
    // console.log(aHeld, dHeld, wHeld, sHeld);
  }, []);

  if (aHeld === true) {
    setTimeout(() => dispatch({ type: "TOMMY_LEFT" }), 20);
  }
  if (dHeld === true) {
    setTimeout(() => setLeft(left + 10), 20);
  }
  if (wHeld === true) {
    tommyJump();
  }
  if (sHeld === true) {
    setTimeout(() => setTop(top + 10), 20);
  }

  return (
    <div id="gameWindow">
      <Tommy left={left} top={top} />
      <Keys />
    </div>
  );
};

export default Main;
