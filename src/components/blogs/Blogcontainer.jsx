import React from "react";
import blog2Image from "../../assets/blog_images/excecontext.webp";
import blog3Image from "../../assets/blog_images/hoisting.webp";
import iife from "../../assets/blog_images/iife.png";
import { Link } from "react-router-dom";
import Blogcard from "./Blogcard";

const Blogcontainer = () => {
  return (
    <>
      <section className="dark blog_section_ main">
        <div className="blogs_container">
          <Blogcard
            blogLink="/iife"
            blogImage={iife}
            blogHeading="Immediately Invoked Function Expression (IIFE)"
            blogPublishedDate="June 27,2022"
          ></Blogcard>

          <Blogcard
            blogLink="/Excecontext"
            blogImage={blog2Image}
            blogHeading="What is an Execution Context in JavaScript?"
            blogPublishedDate="February 8,2022"
          ></Blogcard>

          <Blogcard
            blogLink="/hoisting"
            blogImage={blog3Image}
            blogHeading="What is Hoisting in JavaScript"
            blogPublishedDate="April 21,2022"
          ></Blogcard>
        </div>
      </section>
    </>
  );
};

export default Blogcontainer;
