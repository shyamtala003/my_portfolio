import React from "react";

const BlogHeading = ({ heaaidng, publishedDate }) => {
  return (
    <>
      <h1 className="blog_main_heading">{heaaidng}</h1>;
      <p className="published_date">Published Date {publishedDate}</p>
    </>
  );
};

export default BlogHeading;
