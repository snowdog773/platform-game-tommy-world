import React, { useState } from "react";
import Tommy from "./Tommy";

const Main = () => {
  const [top, setTop] = useState(500);
  const [left, setLeft] = useState(500);

  //read keys

  document.addEventListener("keydown", function (e) {
    let key = e.key;
    switch (key) {
      case "a":
        setLeft(left - 10);
        break;
      case "d":
        setLeft(left + 10);
        break;
      case "w":
        setTop(top - 10);
        break;
      case "s":
        setTop(top + 10);
        break;
      default:
        break;
    }
  });

  return (
    <div id="gameWindow">
      <Tommy left={left} top={top} />
    </div>
  );
};

export default Main;
