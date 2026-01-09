import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};

export default Navbar;
