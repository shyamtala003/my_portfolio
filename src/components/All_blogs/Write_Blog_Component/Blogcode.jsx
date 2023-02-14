import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const Blogcode = ({ language, codeText }) => {
  return (
    <>
      <div className="code_block">
        <CopyBlock
          language={language}
          text={codeText}
          //   showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
        />
      </div>
    </>
  );
};

export default Blogcode;
