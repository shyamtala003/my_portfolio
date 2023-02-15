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
  // usestate for navbar open close
  let [navbarDisplay, setNavbarDisplay] = useState(false);

  // code for setting dynamic document title
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Shyam Tala-Frontend Developer";
    } else {
      let getLocation = String(location.pathname).slice(1);
      getLocation =
        getLocation.slice(0, 1).toUpperCase() + getLocation.slice(1);
      document.title = `Shyam Tala - ${getLocation}`;
    }
  }, [location]);

  // code for hide and show navba ron scroll
  const [show, setShow] = useState(true);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  const [menuToggler, setMenuToggler] = useState(false);

  const hideShowMenu = () => {
    if (menuToggler) {
      setMenuToggler(false);
    } else {
      setMenuToggler(true);
    }
  };

  let getTheme = "dark";
  const themeToggler = () => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
      getTheme = dark;
    }

    if (localStorage.getItem("theme")) {
      getTheme = localStorage.getItem("theme");
    }
  };
  themeToggler();

  return (
    <>
      <nav className={`dark ${!show && "hide_navbar"}`} id="navbar">
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
