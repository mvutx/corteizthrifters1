import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "10px 15px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
        boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
        zIndex: 1000
      }}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeSwitcher;