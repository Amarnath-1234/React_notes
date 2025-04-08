import React, { Fragment } from 'react'
import { SiWebcomponentsdotorg } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillControl } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import intro_image from "../../../assets/component/component_img1.png"
import difference from "../../../assets/component/difference_comp.png"
import export_import from "../../../assets/component/component_export_import.png"
import { RxDoubleArrowUp } from 'react-icons/rx';


const Comp = ({scrollToTop}) => {

  const compData = {
    topic: "Components In React",
    icon:<SiWebcomponentsdotorg className='iconh1'/> ,
    sub_topics: [
      {
        heading: "What are Components in React?",
        icon:<AiFillApi className='iconh2'/>,
        points: [
          "React components are the building blocks of ReactJS applications.", "They help to break the UI into smaller, reusable chunks, making the code easier to manage & maintain.",
        ],
        image:intro_image
      },
      {
        heading: "Types of components",
        icon:<AiFillEye className='iconh2'/>,
        points: ["Components can be class-based and function-based and each type plays an important role in building dygamic & interactive web applications.", "Functionial components are just live javascript functions that accept properties and return a React element.",
          " Class based components  are more complex than functional components. It requires you to extend from React. Component & create a render function which returns a React element. You can pass date from one class to other class components. You can create a class  by defining a class that extends component and has a render function."],
        image: difference
      },
      {
        heading: "Exporting of Components in React",
        icon:<AiFillControl className='iconh2'/>,
        points: [
          "You can export components in two main ways: default export and named export.", "Default Export : When you use export default, you can import the component without using curly braces.",
          "Named Export : With named exports, you can export multiple components or functions from a single file. You must use curly braces when importing.",
        ],
        image: export_import
      },
      {
        heading: "What is component nesting?",
        icon:<AiFillAndroid className='iconh2'/>,
        points: [
          " Component nesting in React refers to the practice of placing one component inside another component. This allows developers to build complex user interfaces by composing smaller, reusable components together. Nesting components is a fundamental concept in React, as it promotes modularity, reusability, and separation of concerns.",
        ],
      },
      {
        heading: "Pure Components Vs Impure Components",
        icon:<AiFillCheckCircle className='iconh2'/>,
        points: [
          " Pure Components in React are components that only re-render when their props or state change. They implement a shallow comparison of props and state to determine if a re-render is necessary. This can lead to performance optimizations, especially in applications with complex UIs.",
          "Impure components in React are components that do not adhere to the principles of pure functions. A pure function is one that, given the same input, will always return the same output and does not cause any side effects. In the context of React, impure components can lead to unpredictable behavior and make the application harder to debug and maintain."
        ],
      }
    ]
  }

  return (

    <div className='container'>
      <h1 className=''>
      {compData.icon}  {compData.topic}</h1>

      {compData.sub_topics.map((ele, index) => {
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
              <center><img src={ele.image} width="50%"/></center>
            </section>
          </Fragment>
        )
      })}


<button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>
    </div>
  )
}

export default Comp