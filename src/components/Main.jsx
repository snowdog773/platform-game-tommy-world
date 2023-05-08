import React, { useState, useEffect } from "react";
import Tommy from "./Tommy";

const Main = () => {
  const [top, setTop] = useState(500);
  const [left, setLeft] = useState(500);

  //Control key states
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

  //read keys
  useEffect(() => {
    document.addEventListener("keydown", (e) => downHandler(e.key));
    document.addEventListener("keyup", (e) => upHandler(e.key));
    // console.log(aHeld, dHeld, wHeld, sHeld);
  }, []);

  if (aHeld === true) {
    setTimeout(() => setLeft(left - 5), 10);
  }
  if (dHeld === true) {
    setTimeout(() => setLeft(left + 5), 10);
  }
  if (wHeld === true) {
    setTimeout(() => setTop(top - 5), 10);
  }
  if (sHeld === true) {
    setTimeout(() => setTop(top + 5), 10);
  }
  // let key = e.key;

  // switch (key) {
  //   case "a":
  //     setLeft(left - 10);
  //     break;
  //   case "d":
  //     setLeft(left + 10);
  //     break;
  //   case "w":
  //     setTop(top - 10);
  //     break;
  //   case "s":
  //     setTop(top + 10);
  //     break;
  //   default:
  //     break;
  // }

  return (
    <div id="gameWindow">
      <Tommy left={left} top={top} />
    </div>
  );
};

export default Main;
