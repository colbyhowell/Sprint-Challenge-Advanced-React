import React from "react";
import useDarkmode from "./useDarkMode";

function NavBar() {
  const [darkMode, setDarkMode] = useDarkmode(false);
  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="nav-bar">
      <h1>Player Data</h1>
      <button
        onClick={toggleDarkMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      >
        Toggle Dark Mode
      </button>
    </nav>
  );
}

export default NavBar;
