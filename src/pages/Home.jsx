import React from "react";
import Header from "../components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, ReactJS, Redux, HTML, CSS, YARN, NPM,
                StyledComponents
              </p>
            </li>
            <li className="content-list__item"></li>
          </ul>
        </div>
      </main>
    </>
  );
}
