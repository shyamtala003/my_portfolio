import React from "react";

const Mainpoint = ({ text, id }) => {
  return (
    <a href={id} className="main_point">
      {text}
    </a>
  );
};

export default Mainpoint;
