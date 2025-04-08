import React, { Fragment } from 'react'
import { BsFiletypeJsx } from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";
import { AiFillCloud } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { AiFillExclamationCircle } from "react-icons/ai";
import { VscCoffee } from "react-icons/vsc";
import image1 from "../../../assets/jsx/jsx_img1.png"
import image2 from "../../../assets/jsx/jsx_img2.png"
import { RxDoubleArrowUp } from 'react-icons/rx';



const JsxComp = ({scrollToTop}) => {

  const jsxData = {
    topic: "JSX (JavaScript XML)",
    icon:<BsFiletypeJsx className='iconh1'/>,
    sub_topics: [
      {
        heading: "What is JSX?",
         icon:<AiFillCar className='iconh2'/>,
        points: [
          "JSX stands for Javascript XML. JSX is used to  write the HTML-like code in Javascript.",
          "JSX is basically a syntax extension of Javascript. React JSX helps us to write HTML in Javascript and forms the basis of React Development. Using JSX isn't compulsory but it is  highly recommended for  programming in React as it makes the development process easier as the code becomes easy to write and read.",
        ],
      },
      {
        heading: "Why JSX is used in React?",
         icon:<AiFillExclamationCircle className='iconh2'/>,
        points: ["It is faster than normal Javascript as it performs optimizations while translating to regular Javascript.",
          "It makes it easier for us to create templates.",
          "Instead of separating the markup and logic in separate files, React uses components for this purpose.",
          " As JSX is an expression, we can use it inside of if statements & for loops, loops, assign  it to variables, accept is an arguments, or return it from functions."],
      },
      {
        heading: "Rules for JSX",
         icon:<AiFillCloud className='iconh2'/>,
        points: ["Each JSX expression must have a single root element. If you need to return multiple elements, you can wrap them in a single parent element, such as a div, or use React Fragments (<>...</>).",
          "JSX uses camelCase for attribute names instead of HTML's lowercase. For example, use className instead of class, and htmlFor instead of for.", " To add comments in JSX, you must use curly braces. Regular JavaScript comments (// or /* ... */) will not work.", "In JSX, we need to close every self-closing tag.", "In JSX,we cannot use javaScript's keyword as attribute inside tag,so that, javascript engine doesnot get confused in understanding the code. For example,in jsx,we use htmlFor attribute instead of for attribute and className instead of class."],
        image: image1
      },
      {
        heading: "Embedding expressions in JSX",
         icon:<AiFillApi className='iconh2'/>,
        points: [
          "The JavaScript part is written before the return statement of the function whereas, the JSX part is written inside the return statement.",
          "JSX allows you to embed JavaScript expressions within curly braces { }.",
        ],
      },
      {
        heading: "JSX vs Regular JavaScript",
         icon:<VscCoffee className='iconh2'/>,
        points: ["JSX allows you to embed JavaScript expressions within curly braces { }. This makes it easy to include dynamic content in your UI.In regular JavaScript, you can use expressions directly, but you cannot embed them in HTML-like syntax. You would typically manipulate the DOM using JavaScript functions.",
          " Comments in JSX must be wrapped in curly braces and use the /* ... / syntax.JavaScript comments can use both single-line (//) and multi-line (/ ... */) syntax.", "In summary, JSX is a syntax extension that allows you to write HTML-like code within JavaScript, primarily for building user interfaces in React. JavaScript, on the other hand, is a programming language used for a wide range of tasks in web development. While they are often used together in React applications, they have distinct roles and syntax."],
        image: image2
      }
    ]
  }

  return (
    <div className='container'>
      <h1 className=''>{jsxData.icon}{jsxData.topic}</h1>


      {jsxData.sub_topics.map((ele, index) => {
        return (
          <Fragment key={index}>
            <h2>{ele.icon}{ele.heading}</h2>
            <section className='section'>
              <ul>
                {ele.points.map((item, index) => {
                  return (
                    <li key={index}>{item}</li>
                  )
                })}
              </ul>
            </section>
<center> <img src={ele.image} width="50%"/></center>
          </Fragment>
        )
      })}
<button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>
    </div>
  )
}

export default JsxComp



