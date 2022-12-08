import React from "react";

import "./style.css";

import vk from "../../image/icons/vk.svg";
import gitHub from "../../image/icons/gitHub.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={vk} alt="link" />
              </a>
            </li>

            <li className="social__item">
              <a href="#!">
                <img src={gitHub} alt="link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 den.from.oz</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
