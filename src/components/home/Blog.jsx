import React from "react";
import blog1Image from "../../assets/blog_images/tailwind-autocomplate.webp";
import blog2Image from "../../assets/blog_images/glowing_gradient_background_tailwind_banner.webp";
import blog3Image from "../../assets/blog_images/glassmorphism_navbar_banner.webp";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section className="dark">
        <h1>I love to share my knowledge through writing.</h1>
        <h3>Check out a few of my recent publishings.</h3>

        <div className="blogs_container">
          <Link to="/" className="blog_card">
            <div className="card_img">
              <img src={blog1Image} alt="blog"></img>
            </div>
            <div className="blog_text">
              <h1 className="blog_heading">
                Enable Autocomplate for Tailwind CSS in VSCode
              </h1>
              <p className="blog_published_date">April 27,2022</p>
            </div>
          </Link>

          <Link to="/" className="blog_card">
            <div className="card_img">
              <img src={blog3Image} alt="blog"></img>
            </div>
            <div className="blog_text">
              <h1 className="blog_heading">
                Build a Glassmorphic Navbar with TailwindCSS backdrop-filter &
                backdrop-blur
              </h1>
              <p className="blog_published_date">April 21,2022</p>
            </div>
          </Link>

          <Link to="/" className="blog_card">
            <div className="card_img">
              <img src={blog2Image} alt="blog"></img>
            </div>
            <div className="blog_text">
              <h1 className="blog_heading">
                Tailwind Gradients - How to Make a Glowing Gradient Background
              </h1>
              <p className="blog_published_date">February 8,2022</p>
            </div>
          </Link>
        </div>

        <Link to="/blog" className="blog_link">
          See all articles<i className="ri-arrow-right-s-line"></i>
        </Link>
      </section>
    </>
  );
};

export default Blog;
