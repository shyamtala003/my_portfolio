import React from "react";
import blog1Image from "../../assets/blog_images/iife.png";
import blog2Image from "../../assets/blog_images/glowing_gradient_background_tailwind_banner.webp";
import blog3Image from "../../assets/blog_images/glassmorphism_navbar_banner.webp";
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
            blogLink="/"
            blogImage={blog2Image}
            blogHeading="Tailwind Gradients - How to Make a Glowing Gradient Background"
            blogPublishedDate="February 8,2022"
          ></Blogcard>

          <Blogcard
            blogLink="/"
            blogImage={blog3Image}
            blogHeading="Build a Glassmorphic Navbar with TailwindCSS backdrop-filter &
            backdrop-blur"
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
