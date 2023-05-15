import { useSelector } from "react-redux";

const Hero = () => {
  const heroPosX = useSelector((state) => state.heroPosX);

  const heroPosY = useSelector((state) => state.heroPosY);

  return <div id="tommy" style={{ top: heroPosY, left: heroPosX }}></div>;
};

export default Hero;
