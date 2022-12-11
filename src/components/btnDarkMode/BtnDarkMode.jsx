import React, { useState, useEffect, useRef } from "react";
import sun from "./Sun.svg";
import moon from "./Moon.svg";
import "./style.css";

export default function BtnDarkMode() {
  const [darkMode, setDarkMode] = useState("light");
  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((curr) => {
      return curr === "light" ? "dark" : "light";
    });
  };

  const btnNormal = "dark-mode-btn";
  const btnDarkMode = "dark-mode-btn dark-mode-btn--active";

  return (
    <button
      className={darkMode === "dark" ? btnDarkMode : btnNormal}
      onClick={toggleDarkMode}
      ref={btnRef}
    >
      <img src={sun} alt="light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
