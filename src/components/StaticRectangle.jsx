import React from "react";
const StaticRectangle = (props) => {
  return (
    <div
      className="static-rectangle"
      style={{
        top: props.top,
        left: props.left,
        width: props.width,
        height: props.height,
      }}
    ></div>
  );
};

export default StaticRectangle;
