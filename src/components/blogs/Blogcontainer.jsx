import React from "react";
import blog2Image from "../../assets/blog_images/glowing_gradient_background_tailwind_banner.webp";
import blog3Image from "../../assets/blog_images/glassmorphism_navbar_banner.webp";
import iife from "../../assets/blog_images/iife.png";
import { Link } from "react-router-dom";
import Blogcard from "./Blogcard";
import "./blog.css";

const Blogcontainer = () => {
  return (
    <>
      <main className="dark blog_section">
        <div className="blogs_container">
          <Blogcard
            blogLink="/"
            blogImage={iife}
            blogHeading="Immediately Invoked Function Expression (IIFE)"
            blogPublishedDate="June 27,2022"
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
      </main>
    </>
  );
};

export default Blogcontainer;
