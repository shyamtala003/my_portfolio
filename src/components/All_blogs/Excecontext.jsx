import React from "react";
import BlogHeading from "./Write_Blog_Component/BlogHeading";
import mainImage from "../../assets/blog_images/excContext.avif";
import BlogmainImage from "./Write_Blog_Component/BlogmainImage";
import Blogpara from "./Write_Blog_Component/Blogpara";
import Blogcode from "./Write_Blog_Component/Blogcode";
import "../All_blogs/Write_Blog_Component/blogPageStyle.css";
import Blogheading1 from "./Write_Blog_Component/Blogheading1";
import img1 from "../../assets/blog_images/context.avif";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Excecontext = () => {
  // code for scroll top on component render
  (() => {
    window.scrollTo(0, 0);
  })();
  return (
    <>
      <Navbar />
      <main className="blog dark">
        <BlogHeading
          heaaidng="What is an Execution Context in JavaScript?"
          publishedDate="June 11, 2022"
        />

        <BlogmainImage Blogimage={mainImage}></BlogmainImage>

        <Blogpara BlogParagraph="So, what is an execution context? Whenever you write some code, your code is in a space that space is called the “execution context”."></Blogpara>
        <Blogpara BlogParagraph="“ Everything in JavaScript happens inside an Execution Context.”"></Blogpara>
        <Blogpara BlogParagraph="JavaScript is a synchronous, single-threaded language. It is because it can only execute one command at a time and in a specific order."></Blogpara>
        <Blogpara BlogParagraph="You can consider the Execution context as a big container, invoked when the browser wants to run javascript code."></Blogpara>
        <Blogpara BlogParagraph="In this container, there are two components"></Blogpara>

        <Blogpara BlogParagraph={`1. Memory component`}></Blogpara>
        <Blogpara BlogParagraph="2. Code component"></Blogpara>
        <Blogpara BlogParagraph="The memory component is also known as the variable environment. In this memory component, variables and functions are stored as key-value pairs."></Blogpara>
        <Blogpara BlogParagraph="A code component is a place in the container where code is executed one line at a time. This code component also has a fancy name, namely ‘Thread of Execution'. I think it sounds cool!"></Blogpara>

        <Blogcode
          language="javascript"
          codeText="var a = 2;
var b = 4;

var sum = a + b;

console.log(sum);
        "
        />

        <Blogpara BlogParagraph="Let’s take a simple example,"></Blogpara>
        <Blogpara
          BlogParagraph="In this simple example, we initialize two variables, a and b, and store 2 and 4, respectively.
        
        Then we add the value of a and b and store it in the sum variable.

The browser creates a global execution context with two components, namely memory and code components."
        ></Blogpara>
        <Blogpara BlogParagraph="The Browser will execute the JavaScript code in two-phase"></Blogpara>
        <Blogpara BlogParagraph="1> Memory Creation Phase"></Blogpara>
        <Blogpara BlogParagraph="2> Code Execution Phase"></Blogpara>

        <Blogheading1 heaading="Memory Creation Phase"></Blogheading1>

        <Blogpara BlogParagraph="In the memory creation phase, JavaScript will scan through all the code and allocate memory to all the variables and functions in the code.For variables, JavaScript will store undefined in the memory creation phase, and for functions, it will keep the entire function code, which we will be looking at the following example."></Blogpara>

        <BlogmainImage Blogimage={img1}></BlogmainImage>
        <Blogheading1 heaaidng="Code Execution Phase"></Blogheading1>
        <Blogpara BlogParagraph="Now, in the 2nd phase, i.e. code execution, it starts going through the whole code line by line."></Blogpara>
        <Blogpara BlogParagraph="As it encounters var a = 2, it assigns 2 to ‘a’ in memory. Until now, the value of ‘a’ was undefined."></Blogpara>
        <Blogpara BlogParagraph="Similarly, it does the same thing for the b variable. It assigns 4 to ‘b’. Then it calculates and stores the value of the sum in memory which is 6. Now, in the last step, it prints the sum value in the console and then destroys the global execution context as our code is finished."></Blogpara>

        <Blogheading1 heaading="Types of Execution Context"></Blogheading1>
        <Blogpara BlogParagraph="There are three types of execution context in JavaScript."></Blogpara>
        <Blogpara BlogParagraph="1 Global Execution Context"></Blogpara>
        <Blogpara
          BlogParagraph="
After loading and parsing the JavaScript code, the JS engine enters the default execution environment. The window object and the this object are created in the global memory by default once the JS engine is inside the global execution environment.

The window object refers to or is connected to the global object, which is always created before the JS engine enters the global execution environment and contains properties and methods like localStorage, innerWidth, and event handlers, among others.

The this object (in the global execution context) is an object that points to or is hooked to the window object.

So, what happens if the JavaScript code has declared variables and functions?

It will search all of the code for all variable and function declarations (variables and functions that are not nested to any other function) and place them in the global memory alongside the window and this object."
        ></Blogpara>

        <Blogpara BlogParagraph="2 Local/Function Execution Context"></Blogpara>
        <Blogpara BlogParagraph="Every time a function is invoked, a brand new execution context is created for that function. Each function has its own execution context, but it’s created when the function is invoked or called. There can be any number of function execution contexts. Whenever a new execution context is created, it goes through a series of steps in a defined order."></Blogpara>
        <Blogpara BlogParagraph="3. Eval Function Execution Context"></Blogpara>
        <Blogpara
          BlogParagraph="The eval function is a function that should be avoided at all costs. An execution context is constructed and pushed into the call stack whenever the JS engine encounters an eval() function. It evaluates a string that is passed as an argument.

As a result, if you mistakenly sent harmful code as an argument, or if a hostile party uses this area of your code, your website might be badly harmed. This function is not recommended because there are better alternatives."
        ></Blogpara>
      </main>
      <Footer />
    </>
  );
};

export default Excecontext;
