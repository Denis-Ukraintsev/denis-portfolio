import React from "react";

export default function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Conacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Sochi, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel: +7 (999) 651-49-01"> +7 (999) 651-49-01</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:den.from.oz@gmail.com">den.from.oz@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
