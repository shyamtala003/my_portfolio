import React from "react";
import BlogHeading from "./Write_Blog_Component/BlogHeading";
import "../All_blogs/Write_Blog_Component/blogPageStyle.css";
import mainImage from "../../assets/blog_images/iife.png";
import BlogmainImage from "./Write_Blog_Component/BlogmainImage";
import Blogpara from "./Write_Blog_Component/Blogpara";
import Blogcode from "./Write_Blog_Component/Blogcode";

const Iife = () => {
  // code for scroll top on component render
  (() => {
    window.scrollTo(0, 0);
  })();
  return (
    <main className="blog dark">
      <BlogHeading
        heaaidng="Immediately Invoked Function Expression (IIFE)"
        publishedDate="June 11, 2022"
      />

      <BlogmainImage Blogimage={mainImage}></BlogmainImage>

      <Blogpara BlogParagraph="An immediately invoked function expression or IIFE, is a function written in javascript that is… invoke immediately as soon as it is defined."></Blogpara>
      <Blogpara BlogParagraph='IIFE stands for Immediately Invoked Function Expression, and it is a common programming pattern in JavaScript. It involves wrapping a function in parentheses, which then creates a function expression. The function expression is then immediately invoked using the "()" operator.'></Blogpara>
      <Blogpara BlogParagraph="Here is an example of an IIFE:"></Blogpara>

      <Blogcode
        language="javascript"
        codeText="(function() {
    // code here
})();"
      />

      <Blogpara BlogParagraph="In this example, the function is immediately invoked and the code inside the function is executed. This is a useful technique for initializing variables and executing code once when a script is loaded."></Blogpara>

      <Blogpara BlogParagraph="IIFEs can also take arguments and return values, just like regular functions. For example:"></Blogpara>

      <Blogcode
        language="js"
        codeText="var result = (function(num1, num2) {
  return num1 + num2;
})(3, 4);

console.log(result); // output: 7
"
      ></Blogcode>

      <Blogpara BlogParagraph='In this example, the IIFE takes two arguments and returns their sum. The function is immediately invoked and the result is assigned to the "result" variable.'></Blogpara>

      <Blogpara BlogParagraph="Overall, IIFEs are a useful tool for creating self-contained, modular code in JavaScript. They allow for better variable scoping and encapsulation, and can help improve the organization and readability of your code."></Blogpara>
    </main>
  );
};

export default Iife;
