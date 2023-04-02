import React from "react";
import BlogHeading from "./Write_Blog_Component/BlogHeading";
import "../All_blogs/Write_Blog_Component/blogPageStyle.css";
import mainImage from "../../assets/blog_images/normavsarrowfunction.webp";
import BlogmainImage from "./Write_Blog_Component/BlogmainImage";
import Blogpara from "./Write_Blog_Component/Blogpara";
import Blogcode from "./Write_Blog_Component/Blogcode";

import Tableofcontentheading from "./Write_Blog_Component/Tableofcontentheading";
import Mainpoint from "./Write_Blog_Component/Mainpoint";
import Underpoint from "./Write_Blog_Component/Underpoint";
import Blogheading1 from "./Write_Blog_Component/Blogheading1";
import { CodeBlock } from "react-code-blocks";

const NormalVsArrowFunction = ({ theme }) => {
  (() => {
    window.scrollTo(0, 0);
  })();
  return (
    <main className={`blog ${theme === "dark" ? "dark" : "light"}`}>
      <BlogHeading
        heaaidng="What is difference between this keyword inside an arrow function vs. a regular function in JavaScript?🤔"
        publishedDate="March 02, 2023"
      />

      <BlogmainImage Blogimage={mainImage}></BlogmainImage>

      <div className="table_of_content">
        <Tableofcontentheading text="📃TABLE OF CONTENTS"></Tableofcontentheading>
        <Mainpoint
          text="this keyword inside normal function"
          id="#normal-point-1"
        />

        <Mainpoint
          text="this keyword inside arrow function"
          id="#arrow-point-2"
        />
      </div>

      <Blogheading1
        heaading="What is difference between this inside an arrow function vs. a regular function in JavaScript🤔"
        id="hoisting-point-2"
      ></Blogheading1>

      <Blogpara BlogParagraph="JavaScript provides two ways to declare functions: using the function keyword and using arrow functions (=>). While both can be used to achieve the same result, there is a difference in how they handle the this keyword."></Blogpara>

      <Blogheading1 heaading="" id="normal-point-1"></Blogheading1>
      <Blogpara BlogParagraph="In a regular function declared using the function keyword, the value of this inside the function is determined by how the function is called. If the function is called as a method of an object, this refers to the object. However, if the function is called without any context (i.e., just as a standalone function), this refers to the global object (window in a browser or global in Node.js)."></Blogpara>
      <Blogpara BlogParagraph='On the other hand, with arrow functions, this is determined by the surrounding context (the "lexical scope") when the function is defined. This means that this inside an arrow function will always refer to the same value, regardless of how or where the function is called.'></Blogpara>
      <Blogpara BlogParagraph="For example, consider the following code:"></Blogpara>
      <Blogcode
        language="javascript"
        codeText='
const obj = {
  name: "John",
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};
obj.greet(); // Output: "Hello, my name is John."

const greetFunction = obj.greet;
greetFunction(); // Output: "Hello, my name is undefined."
'
      />

      <Blogheading1 heaading="" id="arrow-point-2"></Blogheading1>
      <Blogpara BlogParagraph="In the second call to greetFunction(), this inside the function refers to the global object, so this.name is undefined."></Blogpara>
      <Blogpara BlogParagraph="In contrast, an arrow function would behave differently in this case:"></Blogpara>
      <Blogcode
        language="javascript"
        codeText='
const obj = {
  name: "John",
  greet: () => {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

obj.greet(); // Output: "Hello, my name is undefined."

const greetFunction = obj.greet;
greetFunction(); // Output: "Hello, my name is undefined."
'
      />
      <Blogpara BlogParagraph="In this case, this inside the arrow function always refers to the global object, so this.name is undefined in both calls."></Blogpara>
      <Blogpara BlogParagraph="In summary, the main difference between this inside a regular function and an arrow function is that the former depends on how the function is called, while the latter depends on where the function is defined. It's important to keep this in mind when deciding which type of function to use in a particular situation."></Blogpara>
    </main>
  );
};

export default NormalVsArrowFunction;
