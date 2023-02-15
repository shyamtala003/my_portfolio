import React from "react";

const Blogheading1 = ({ heaading, id }) => {
  return (
    <h1 className="blog_headin_1" id={id}>
      {heaading}
    </h1>
  );
};

export default Blogheading1;
