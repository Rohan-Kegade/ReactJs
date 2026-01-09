import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div>Theme: {theme}</div>
    </>
  );
};

export default Card;