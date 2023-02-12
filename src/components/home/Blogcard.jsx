import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Blogcard = ({ blogLink, blogImage, blogHeading, blogPublishedDate }) => {
  return (
    <>
      <Link to={blogLink} className="blog_card">
        <div className="card_img">
          {/* <img src={blogImage} alt="blog"></img> */}
          <LazyLoadImage
            className="blog_image"
            alt={blogHeading}
            effect="blur"
            src={blogImage}
          />
        </div>
        <div className="blog_text">
          <h1 className="blog_heading">{blogHeading}</h1>
          <p className="blog_published_date">{blogPublishedDate}</p>
        </div>
      </Link>
    </>
  );
};

export default Blogcard;
