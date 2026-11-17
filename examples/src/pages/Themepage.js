import React from "react";
import useTheme from "../hooks/useTheme";

function Themepage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>{theme.toUpperCase()} MODE</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Themepage;