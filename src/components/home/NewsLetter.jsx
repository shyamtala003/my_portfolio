import React, { useState, useEffect } from "react";
import newsletterImg from "../../assets/newsletter.webp";
import validator from "validator";
import axios from "axios";

import { useAnimation, motion, delay } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const imageVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, scale: 0.5 },
};

const NewsLetter = ({ theme }) => {
  // code for framer motion animations
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
    // prevent default action
    e.preventDefault();
    setLoading(true);

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
        setLoading(false);
        setEmail("");
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
    <>
      <motion.section
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className={`${theme === "dark" ? "dark" : "light"} newsletter`}
      >
        <div className="content">
          <motion.img
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={imageVariants}
            className="back_layer"
            src={newsletterImg}
            alt=""
          />
          <div className="text_content">
            <h4 className="content_heading">
              Updates delivered to your inbox!
            </h4>
            <p className="content_description">
              A periodic update about my life, recent blog posts, how-tos, and
              discoveries.
            </p>

            <p className="note">No spam - unsubscribe at any time!</p>
          </div>

          <form
            method="Post"
            onSubmit={submitEmail}
            className="news_subscription"
          >
            <input
              type="email"
              name="email"
              placeholder="bobbyjoshi@gmail.com"
              required
              onInput={manageEmailInput}
              value={email}
            />

            {loading ? (
              <button type="button" className="loading_button_newsletter">
                Subscribe <span className="ring"></span>
              </button>
            ) : (
              <input type="submit" value="Subscribe" />
            )}

            {response_msg && (
              <div className="message_afer_submit">{response_msg}</div>
            )}
          </form>
        </div>
      </motion.section>
    </>
  );
};

export default NewsLetter;
