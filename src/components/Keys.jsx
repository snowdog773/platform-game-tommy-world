import React from "react";
import { useSelector } from "react-redux";
const Keys = () => {
  const aHeld = useSelector((state) => state.aHeld.aHeld);
  const dHeld = useSelector((state) => state.dHeld.dHeld);
  const sHeld = useSelector((state) => state.sHeld.sHeld);
  const wHeld = useSelector((state) => state.wHeld.wHeld);
  return (
    <>
      <div>A {aHeld && "active"}</div>
      <div>D {dHeld && "active"}</div>
      <div>W {wHeld && "active"}</div>
      <div>S {sHeld && "active"}</div>
    </>
  );
};

export default Keys;
