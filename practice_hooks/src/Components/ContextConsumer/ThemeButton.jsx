import React, { useContext } from "react";
import { ThemeContext } from "../ContextProvider/ThemeContext";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <h2>Theme Changer</h2>
      <button onClick={toggleTheme}>Click</button>
    </div>
  );
};

export default ThemeButton;
