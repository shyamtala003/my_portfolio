import React from "react";
import BlogHeading from "./Write_Blog_Component/BlogHeading";
import "../All_blogs/Write_Blog_Component/blogPageStyle.css";
import mainImage from "../../assets/blog_images/hoisting.webp";
import BlogmainImage from "./Write_Blog_Component/BlogmainImage";
import Blogpara from "./Write_Blog_Component/Blogpara";
import Blogcode from "./Write_Blog_Component/Blogcode";

import Tableofcontentheading from "./Write_Blog_Component/Tableofcontentheading";
import Mainpoint from "./Write_Blog_Component/Mainpoint";
import Underpoint from "./Write_Blog_Component/Underpoint";
import Blogheading1 from "./Write_Blog_Component/Blogheading1";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Hoisting = () => {
  (() => {
    window.scrollTo(0, 0);
  })();

  return (
    <>
      <Navbar></Navbar>
      <main className="blog dark">
        <BlogHeading
          heaaidng="What is Hoisting in JavaScript?🤔"
          publishedDate="June 24, 2022"
        />

        <BlogmainImage Blogimage={mainImage}></BlogmainImage>

        <div className="table_of_content">
          <Tableofcontentheading text="📃TABLE OF CONTENTS"></Tableofcontentheading>
          <Mainpoint
            text="What is Hoisting in JavaScript?"
            id="#hoisting-point-2"
          />
          <Mainpoint text="Variable Hoisting" id="#hoisting-point-3" />
          <Underpoint text="Var Hoisting" id="#hoisting-point-4" />
          <Underpoint text="Const and Let Hoisting" id="#hoisting-point-5" />
          <Underpoint text="Function Hoisting" id="#hoisting-point-6" />
          <Underpoint text="Arrow Function Hoisting" id="#hoisting-point-7" />
        </div>

        <Blogheading1
          heaading="What is Hoisting in JavaScript?🤔"
          id="hoisting-point-2"
        ></Blogheading1>

        <Blogpara BlogParagraph="Hoisting is a very important process in JavaScript that’s made by the interpreter. The interpreter moves the declaration of functions and variables to the top of their scope, prior to the execution of the code. This feature is known as hoisting in JavaScript."></Blogpara>

        <Blogheading1
          heaading="Variable Hoisting"
          id="hoisting-point-3"
        ></Blogheading1>

        <Blogpara BlogParagraph="In JavaScript, we can declare variables with const, let, and var. I will explain in detail each variable declaration type individually because the behavior is not the same when hosting."></Blogpara>

        <Blogheading1
          heaading="var hoisting 🧐"
          id="hoisting-point-4"
        ></Blogheading1>

        <Blogpara BlogParagraph="Let’s look at some 😉examples to understand hoisting in the case of var variables."></Blogpara>

        <Blogcode
          language="javascript"
          codeText="
        console.log(a); // outputs 'undefined'
        var a = 3;
        "
        />

        <Blogpara BlogParagraph="We expected 3 but instead got undefined. Why?"></Blogpara>
        <Blogpara BlogParagraph="Remember JavaScript only hoists declarations, not initializations. That is, during compile time, JavaScript only stores function and variable declarations in the memory, not their assignments (value)."></Blogpara>

        <Blogpara BlogParagraph="But why undefined?🧐"></Blogpara>
        <Blogpara BlogParagraph="When the JavaScript engine finds a var variable declaration during the compile phase, it will add that variable to the lexical environment and initialize it with undefined, and later during the execution when it reaches the line where the actual assignment is done in the code, it will assign that value to the variable."></Blogpara>
        <Blogpara BlogParagraph="So the initial lexical environment for the above code will look something like this:"></Blogpara>

        <Blogcode
          language="javascript"
          codeText="
        lexicalEnvironment = {
            a: undefined
        }
          "
        />

        <Blogpara BlogParagraph="That’s why we got undefined instead of 3. And when the engine reaches the line (during execution) where the actual assignment is done, it will update the value of the variable in its lexical environment. So the lexical environment after the assignment will look like this:"></Blogpara>

        <Blogcode
          language="javascript"
          codeText="
        lexicalEnvironment = {
            a: 3
        }
        "
        />
        <Blogpara BlogParagraph="Why it’s helpful?🥸"></Blogpara>
        <Blogpara BlogParagraph="It’s helpful because we will not receive the error of Uncaught ReferenceError: a is not defined, and instead of it, we will receive undefined as the returned value."></Blogpara>
        <Blogpara BlogParagraph="What are the differences?🥸"></Blogpara>
        <Blogpara BlogParagraph="When we receive the error of Uncaught ReferenceError: a is not defined, it means that the variable a is never declared, and when we receive a return value of undefined, it means that the variable is declared but not initialized or assigned to the value 3 as it happens somewhere in the code; instead, the hoisting process initialized the a variable to the default value undefined."></Blogpara>

        <Blogheading1
          heaading="Const & Let Hoisting💥"
          id="hoisting-point-5"
        ></Blogheading1>
        <Blogpara BlogParagraph="So are let and const variables not hoisted?🤫"></Blogpara>
        <Blogpara BlogParagraph="The answer is a bit more complicated than that. All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized."></Blogpara>
        <Blogpara BlogParagraph="Here come the big differences between var and const/let hoisting. Behind the scenes, variables that are declared with let and const are also hoisted, but unlike var, they do not receive the default value of undefined."></Blogpara>

        <Blogpara BlogParagraph="So what happens if we call const/let variables before they are initialized?🤔 We will get an error: Uncaught ReferenceError: can’t access lexical declaration ‘myName’ before initialization."></Blogpara>

        <Blogcode
          language="javascript"
          codeText='
        console.log(myName); // Uncaught ReferenceError: can’t access...
        function message(){
          console.log("Hello World!");
        }
        const myName="chhakuli zingare";
        '
        />

        <Blogheading1
          heaading="Function Hoisting💥"
          id="hoisting-point-6"
        ></Blogheading1>

        <Blogpara BlogParagraph="This type of hosting is very important and really makes our code safer. Let’s illustrate it by an example."></Blogpara>

        <Blogcode
          language="javascript"
          codeText='
        message(); //Will print to the console "Hello World".
        function message(){
          console.log("Hello World");
        }        
        '
        ></Blogcode>

        <Blogpara
          BlogParagraph="As we can see in the example above, we call a function that’s not yet declared, but still, it will work absolutely fine. That’s because ‘function hosting’ is involved. Behind the scenes, the declaration of the function message is moved to the top of the JavaScript file. This means that actually, the function call is made after the declaration and not before it.

This magic protects our code from wrong calls that may be made before the function declaration.🥸"
        ></Blogpara>
        <Blogheading1
          heaading="Arrow Function Hosting 🏹"
          id="hoisting-point-7"
        ></Blogheading1>

        <Blogpara BlogParagraph="The hosting behavior of arrow functions and regular functions are not the same. Let’s take a look at the example below:"></Blogpara>

        <Blogcode
          codeText='
        message(); //Uncaught TypeError: printSomething is not a function.
        var message=> (){
          console.log("Hello World");
        }
        
      '
          language="javascript"
        ></Blogcode>

        <Blogpara BlogParagraph="Why does that happen?"></Blogpara>
        <Blogpara BlogParagraph="The hosting behavior of arrow functions are like the keywords const, var, let and when we try to call the message function, we receive the error Uncaught TypeError: message is not a function. Let’s think about the steps behind the scenes:"></Blogpara>
        <Blogpara BlogParagraph="•The message is a var variable, so because of that, it goes to the top of the JavaScript file."></Blogpara>
        <Blogpara BlogParagraph="•The variable message received the default value of undefined."></Blogpara>
        <Blogpara
          BlogParagraph="•We try to call the arrow function message, but it’s still defined with the value of undefined.
"
        ></Blogpara>
        <Blogpara BlogParagraph="•The error Uncaught TypeError: message is not a function occurs."></Blogpara>
      </main>
      <Footer />
    </>
  );
};
export default Hoisting;
