import React from "react";
import blog1Image from "../../assets/blog_images/iife.png";
import blog2Image from "../../assets/blog_images/excecontext.webp";
import blog3Image from "../../assets/blog_images/hoisting.webp";
import { Link } from "react-router-dom";
import Blogcard from "./Blogcard";

const Blog = () => {
  return (
    <>
      <section className="dark blog_section">
        <h1>I love to share my knowledge through writing.</h1>
        <h3>Check out a few of my recent publishings.</h3>

        <div className="blogs_container">
          <Blogcard
            blogLink="/iife"
            blogImage={blog1Image}
            blogHeading="Immediately Invoked Function Expression (IIFE)"
            blogPublishedDate="June 11, 2022"
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
            blogHeading="What is Hoisting in JavaScript?🤔"
            blogPublishedDate="April 21,2022"
          ></Blogcard>
        </div>

        <Link to="/blog" className="blog_link">
          See all articles<i className="ri-arrow-right-s-line"></i>
        </Link>
      </section>
    </>
  );
};

export default Blog;
