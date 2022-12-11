import React from "react";

import "./style.css";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Denis</em>
            </strong>{" "}
            <br />a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating</p>
          </div>
          <a
            href="https://krasnodar.hh.ru/resume/8641e918ff09d9a50a0039ed1f4d74444f5744"
            target="_blank"
            rel="noreferrer"
            className="btn"
            download
          >
            Download CV
          </a>
        </div>
      </header>
    </div>
  );
}
