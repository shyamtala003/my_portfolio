import React from "react";
import "../style/heading.css";

const Heading = ({ heading, description }) => {
  return (
    <>
      <h1 className="project_page_heading">{heading}</h1>
      <h2 className="project_page_heading_2">{description}</h2>
    </>
  );
};

export default Heading;
