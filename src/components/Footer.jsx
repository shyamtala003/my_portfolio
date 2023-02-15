import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.css";

const Footer = ({ theme }) => {
  return (
    <footer className={`${theme === "dark" ? "dark" : "light"}`}>
      <hr />
      <div className="footer_content">
        <div className="footer_links">
          <div className="link_list">
            <p className="link_heading">general</p>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/about" className="link">
              about
            </Link>
            <Link to="/projects" className="link">
              projects
            </Link>
            <Link to="/blogs" className="link">
              blogs
            </Link>
          </div>

          <div className="link_list">
            <p className="link_heading">extra</p>
            <Link to="/" className="link">
              changelog
            </Link>
            <Link to="/" className="link">
              meet up
            </Link>
            <Link to="/" className="link">
              newsletter
            </Link>
            <Link to="/" className="link">
              resume
            </Link>
            <Link to="/" className="link">
              snippets
            </Link>
          </div>

          <div className="link_list">
            <p className="link_heading">specifics</p>
            <Link to="/" className="link">
              stats
            </Link>
            <Link to="/" className="link">
              toolbox
            </Link>
          </div>
        </div>

        <form method="POST" className="footer_form">
          <p>newsletter</p>
          <p>Get new articles delivered to your inbox!</p>
          <div className="input_types">
            <input
              type="email"
              placeholder="shyamtala003@gmail.com"
              name="email"
              id=""
            />
            <input type="submit" value="Subscribe" />
          </div>
        </form>
      </div>

      <div className="footer_bottom">
        <p className="author">© {new Date().getFullYear()} Shyam Tala</p>
        <div className="social_links">
          <Link to="https://github.com/shyamtala003">
            <i className="ri-github-fill"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/shyam-tala-666828169/">
            <i className="ri-linkedin-fill"></i>
          </Link>
          <Link to="https://m.facebook.com/100011975868953/">
            <i className="ri-facebook-fill"></i>
          </Link>
          <Link to="https://www.instagram.com/shyamtala_official/">
            <i className="ri-instagram-line"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
