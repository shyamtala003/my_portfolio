import React from "react";
import { Link } from "react-router-dom";

const Blogcard = ({ blogLink, blogImage, blogHeading, blogPublishedDate }) => {
  return (
    <>
      <Link to={blogLink} className="blog_card">
        <div className="card_img">
          <img src={blogImage} alt="blog"></img>
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
