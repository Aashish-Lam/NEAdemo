import React, { useEffect, useState } from "react";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import '../styles/theme.css';  // Import the CSS file

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaLightbulb className="text-white" size={18} />
      <div
        className={`absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-900 ease-in-out ${darkMode ? 'toggle-left' : 'toggle-right'}`}
      ></div>
      <FaRegLightbulb className="ml-auto text-yellow-400" />
    </div>
  );
};

export default ThemeToggle;
