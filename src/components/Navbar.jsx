import React, { useState, useEffect } from "react";
import "../style/navbar.css";
import { Link, useLocation } from "react-router-dom";

import logoWhite from "../assets/logo_white.svg";
import logoDark from "../assets/logo_dark.svg";

import sun from "../assets/sun.webp";
import moon from "../assets/moon.webp";

import menuDark from "../assets/menu_dark.svg";
import menuWhite from "../assets/menu_light.svg";

import close from "../assets/close.svg";

const Navbar = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  const [menuToggler, setMenuToggler] = useState(false);

  const hideShowMenu = () => {
    if (menuToggler) {
      setMenuToggler(false);
    } else {
      setMenuToggler(true);
    }
  };

  return (
    <>
      <nav className="dark">
        <div className="logo">
          <img src={logoWhite} alt="logo" />
        </div>
        <div className="nav-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            about
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${
              location.pathname === "/projects" ? "active" : ""
            }`}
          >
            projects
          </Link>
          <Link
            to="/blogs"
            className={`nav-link ${
              location.pathname === "/blogs" ? "active" : ""
            }`}
          >
            blog
          </Link>
        </div>

        {/* theme toggler */}
        <button className="theme_toggler">
          <img src={sun} alt="theme_toogler" />
        </button>

        {/* responsive menu toggler button */}
        <button onClick={hideShowMenu} className="menu_toggler">
          <img src={menuDark} alt="menu_toggler" />
        </button>

        {/* responsive menubar */}
        <div
          onClick={hideShowMenu}
          className={`responsive_menu ${!menuToggler ? `close_menu` : ""}`}
        >
          <div className="responsive_nav_links">
            <button onClick={hideShowMenu} className="close_menu_btn">
              <img src={close} alt="theme_toogler" />
            </button>
            <Link
              to="/"
              className={`responsive_nav_link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              home
            </Link>
            <Link
              to="/about"
              className={`responsive_nav_link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              about
            </Link>
            <Link
              to="/projects"
              className={`responsive_nav_link ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              projects
            </Link>
            <Link
              to="/blogs"
              className={`responsive_nav_link ${
                location.pathname === "/blogs" ? "active" : ""
              }`}
            >
              blog
            </Link>
            <button className="theme_toggler">
              <img src={sun} alt="theme_toogler" /> change theme
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
