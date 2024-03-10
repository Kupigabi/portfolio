import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import "./header.css";

function Header() {
  /* ========== Change Background Header ========== */
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    if (this.scrollY >= 200) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /* ========== Toggle Menu ========== */
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={100}
          className="nav__logo"
        >
          Kupeczki
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={100}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={20}
                duration={100}
              >
                <i className="uil uil-user nav__icon"></i> About
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={20}
                duration={100}
              >
                <i className="uil uil-file nav__icon"></i> Skills
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={20}
                duration={100}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={20}
                duration={100}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={22}
                duration={100}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
