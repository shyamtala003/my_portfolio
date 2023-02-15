import React from "react";

const Underpoint = ({ text, id }) => {
  return (
    <a href={id} className="under_point">
      {text}
    </a>
  );
};

export default Underpoint;
