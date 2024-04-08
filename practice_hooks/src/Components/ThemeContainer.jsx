import React, { useContext } from "react";
import { ThemeContext } from "./ContextProvider/ThemeContext";

const ThemeContainer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        background: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
      }}
    >
      <h2>Resizable</h2>
    </div>
  );
};

export default ThemeContainer;
