import React from "react";

const BlogmainImage = ({ Blogimage }) => {
  return (
    <>
      <img className="blog_image" src={Blogimage} alt="blog_image" />
    </>
  );
};

export default BlogmainImage;
