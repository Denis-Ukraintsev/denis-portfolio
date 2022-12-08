import React from "react";

import { NavLink } from "react-router-dom";

import "./style.css";

import sun from "../../image/icons/Sun.svg";
import moon from "../../image/icons/Moon.svg";

export default function Navbar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const standartLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Frontender</strong> portfolio
          </NavLink>

          <button className="dark-mode-btn">
            <img src={sun} alt="light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="dark mode" className="dark-mode-btn__icon" />
          </button>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : standartLink
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : standartLink
                }
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : standartLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
