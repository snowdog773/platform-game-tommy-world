import React from "react";
import { useSelector } from "react-redux";

const Tommy = (props) => {
  const tommyLeft = useSelector((state) => state.tommyLeft.tommyLeft);
  return <div id="tommy" style={{ top: props.top, left: tommyLeft }}></div>;
};

export default Tommy;
