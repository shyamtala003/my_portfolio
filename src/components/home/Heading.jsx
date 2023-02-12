import React from "react";
import devImage from "../../assets/shyam tala.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Heading = () => {
  return (
    <main className="dark">
      <div className="heading">
        <h1 className="heading_text">
          I'm <span>Shyam</span>. I'm a passionate frontend developer and
          blogger from India.
        </h1>
        <div className="devloper_img">
          <LazyLoadImage alt="shyam tala" effect="blur" src={devImage} />
        </div>
      </div>
      <div className="btn_group">
        <Link to="/blog" className="blog_link">
          Read the blogs <i className="ri-arrow-right-s-line"></i>
        </Link>
        <Link to="/about" className="about_link">
          More about me <i className="ri-arrow-right-s-line"></i>
        </Link>
      </div>

      <h1 className="heading_end">~~~</h1>
    </main>
  );
};

export default Heading;
