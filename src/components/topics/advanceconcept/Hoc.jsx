import React from 'react';
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { RxDoubleArrowUp } from 'react-icons/rx';
import Hocc from "../../../assets/Hoc.webp"

const Hoc = ({scrollToTop}) => {
  const data = {
    topic: "Higher-Order Components (HOC)",
    sub_topics: [
      {
        heading: "What is a Higher-Order Component (HOC)?",
        points: [
          "A Higher-Order Component (HOC) is a function that takes a component as input and returns an enhanced component.",
          "It follows the higher-order function pattern in JavaScript.",
          "HOCs are not built-in but are a pattern for reusing component logic."
        ]
      },
      {
        heading: "Why Use Higher-Order Components?",
        points: [
          "✅ Code Reusability – Share logic across multiple components.",
          "✅ Separation of Concerns – Keep UI and logic separate.",
          "✅ Enhancing Components Dynamically – Add features like authentication, logging, or performance tracking."
        ],
        image: Hocc
      },
      {
        heading: "Important Notes on HOCs",
        points: [
          "📌 Avoid modifying the original component directly. Always return a new component.",
          "📌 Preserve Props – Use ...props to pass down all original props.",
          "📌 Use Meaningful Names – Wrap components with names like withAuth, withLogging, etc.",
          "📌 Can Be Nested – Multiple HOCs can be applied to a single component."
        ]
      },
      {
        heading: "HOCs vs. Custom Hooks",
        points: [
          "Feature: Higher-Order Component (HOC) vs. Custom Hook",
          "✅ Code Reusability – Yes for both.",
          "⚠ Performance – HOCs can cause extra renders, Custom Hooks are more efficient.",
          "⚠ Readability – HOCs can be harder to debug, Custom Hooks are easier to read.",
          "✅ Composition – Both can be combined for complex logic."
        ]
      },
      {
        heading: "When to Use HOCs?",
        points: [
          "✅ When you need to add the same behavior to multiple components (e.g., logging, authentication, analytics).",
          "✅ When modifying a component’s props dynamically without modifying its code.",
          "✅ When adding lifecycle methods to functional components (before hooks were introduced)."
        ]
      }
    ]
  };

  return (
    <div className='container'>
      <h1 className='title'><MdOutlineAutoFixHigh />      {data.topic}</h1>
      <hr />
      {data.sub_topics.map((ele, index) => (
        <section key={index} className='section'>
          {ele.heading && <h2>{ele.heading}</h2>}
          {ele.points && (
            <ul>
              {ele.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
          <center>{ele.image && <img className='advimg' src={ele.image} alt='' />}</center>
        </section>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>
    </div>
  );
};

export default Hoc;