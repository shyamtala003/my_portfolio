import React, { useState } from "react";
import validator from "validator";
import axios from "axios";

const NewsLetter = ({ theme }) => {

  // collecting inpuit email
  const [email, setEmail] = useState("");

  // set response from axios request
  const [response_msg, setResponse_msg] = useState(false);

  // change input value on change
  function manageEmailInput(e) {
    setEmail(String(e.target.value).toLowerCase());
  }

  // function for handling on submit 
  async function submitEmail(e) {

    // prevent default action
    e.preventDefault();

    // validate email
    let checkEmail = validator.isEmail(email);
    if (!checkEmail) {
      setEmail("");
      setResponse_msg("Please enter a valid email");
      setTimeout(() => {
        setResponse_msg(false);
      }, 5000);
    }

    try {
      const response = await axios.post("http://localhost:4000/getEmail", {
        email: email,
      });

      // if email stored succesfully in database
      if (response.data.success) {
        setEmail("");
        setResponse_msg(response.data.message);
        setTimeout(() => {
          setResponse_msg(false);
        }, 5000);
      } 
      // if error accurs
      else {
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
      <section className={`${theme === "dark" ? "dark" : "light"} newsletter`}>
        <div className="content">
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
            <input type="submit" value={"Subscribe"} />
            {response_msg && (
              <div className="message_afer_submit">{response_msg}</div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
