import React, { useState } from "react";
import validator from "validator";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/footer.css";

const Footer = ({ theme }) => {
  // collecting inpuit email
  const [email, setEmail] = useState("");

  // set response from axios request
  const [response_msg, setResponse_msg] = useState(false);

  // state for displaying loading button
  const [loading, setLoading] = useState(false);

  // change input value on change
  function manageEmailInput(e) {
    setEmail(String(e.target.value).toLowerCase());
  }

  // function for handling on submit
  async function submitEmail(e) {
    setLoading(true);
    // prevent default action
    e.preventDefault();

    // validate email
    let checkEmail = validator.isEmail(email);
    if (!checkEmail) {
      setLoading(false);
      setEmail("");
      setResponse_msg("Please enter a valid email");
      setTimeout(() => {
        setResponse_msg(false);
      }, 5000);
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://newsletter-subscription-app.onrender.com/getEmail",
        {
          email: email,
        }
      );

      // if email stored succesfully in database
      if (response.data.success) {
        setEmail("");
        setLoading(false);
        setResponse_msg(response.data.message);
        setTimeout(() => {
          setResponse_msg(false);
        }, 5000);
      }
      // if error accurs
      else {
        setLoading(false);
        setEmail("");
        setResponse_msg(response.data.message);
        setTimeout(() => {
          setResponse_msg(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

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
            <Link
              to="/"
              className="link link_under_construction"
              title="Page Under Construction"
            >
              changelog
            </Link>
            <Link
              to="/"
              className="link link_under_construction"
              title="Page Under Construction"
            >
              meet up
            </Link>
            <Link
              to="/"
              className="link link_under_construction"
              title="Page Under Construction"
            >
              newsletter
            </Link>
            <a
              href="https://drive.google.com/file/d/1B3-N6XL3d9pr4vzTtHyIicLiGnaoLf_4/view"
              className="link"
              title="Resume"
            >
              resume
            </a>
            <Link
              to="/"
              className="link link_under_construction"
              title="Page Under Construction"
            >
              snippets
            </Link>
          </div>

          <div className="link_list">
            <p className="link_heading">specifics</p>
            <Link
              to="/"
              className="link link_under_construction"
              title="Page Under Construction"
            >
              stats
            </Link>
            <Link
              to="/"
              className="link link_under_construction"
              title="Page Under Construction"
            >
              toolbox
            </Link>
          </div>
        </div>

        <form method="POST" onSubmit={submitEmail} className="footer_form">
          <p>newsletter</p>
          <p>Get new articles delivered to your inbox!</p>
          <div className="input_types">
            <input
              type="email"
              placeholder="shyamtala003@gmail.com"
              name="email"
              required
              onInput={manageEmailInput}
              value={email}
            />

            {loading ? (
              <button type="button" className="loading_button">
                Subscribe <span className="ring"></span>
              </button>
            ) : (
              <input type="submit" value="Subscribe" />
            )}

            {response_msg && (
              <div className="message_on_submit">{response_msg}</div>
            )}
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
