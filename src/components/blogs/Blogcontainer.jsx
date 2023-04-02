import React from "react";
import blog2Image from "../../assets/blog_images/excecontext.webp";
import blog3Image from "../../assets/blog_images/hoisting.webp";
import blog4Image from "../../assets/blog_images/normavsarrowfunction.webp";
import iife from "../../assets/blog_images/iife.png";
import NormalVsArrowFunction from "../All_blogs/NormalVsArrowFunction";
import { Link } from "react-router-dom";
import Blogcard from "./Blogcard";

const Blogcontainer = ({ theme }) => {
  return (
    <>
      <section
        className={`${theme === "dark" ? "dark" : "light"} blog_section_ main`}
      >
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
            blogHeading="What is Hoisting in JavaScript?"
            blogPublishedDate="April 21,2022"
          ></Blogcard>

          <Blogcard
            blogLink="/NormalVsArrowFunctions"
            blogImage={blog4Image}
            blogHeading="What is difference between this keyword inside an arrow function vs. a regular function in JavaScript?🤔"
            blogPublishedDate="March 02, 2023"
          ></Blogcard>
        </div>
      </section>
    </>
  );
};

export default Blogcontainer;
