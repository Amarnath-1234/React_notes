import React from "react";
// import "./usestate.css";
import { FaCode, FaLightbulb, FaSync, FaArrowRight } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";

const data = {
  title: {
    icon: <FaLightbulb className="icon" />, 
    text: "useState Hook"
  },
  sections: [
    {
      icon: <FaCode className="icon" />, 
      title: "What is useState?",
      content: (
        <>
          <p>
            <strong>useState</strong> is a React hook that allows functional components to <strong>declare state variables</strong> and manage their values. 
            It returns an <strong>array</strong> containing:
          </p>
          <ul>
            <li><strong>The current state value</strong></li>
            <li><strong>A function to update the state</strong></li>
          </ul>
          <p>Whenever the state updates, React <strong>re-renders</strong> the component to reflect the changes in the UI.</p>
          
        </>
      )
    },
    {
      icon: <FaCode className="icon" />, 
      title: "Usestate Features",
      content: (
        <>
          <p>Whenever the state updates, React <strong>re-renders</strong> the component to reflect the changes in the UI.</p>
          <p>Hooks are used in <strong>Functional based components</strong> only. <strong>Usestate</strong> helps to store datas and update it <strong>dynamically</strong></p>
          <p>
            Usestate always returns an array consist of 2 elements <strong>[initial value, update function]</strong>.
          </p>
          <p>Usestate helps to make react unidirectional</p>


        </>
      )
    },
    {
      icon: <FaSync className="icon success" />, 
      title: "Syntax",
      content: (
        <>
          <p>The <code>useState</code> hook is imported from React and used inside functional components:</p>
          <pre>
            {`import React, { useState } from "react";

const Counter= ()=> {
  const [count, setCount] = useState(0); // Initial state: 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;`}
          </pre>
          <p>
            <FaArrowRight className="icon highlight" /> Here, <code>count</code> is the <strong>state variable</strong>, 
            <code>setCount</code> is the <strong>updater function</strong>, and <code>useState</code> initializes the state with <strong>0</strong>.
          </p>
        </>
      )
    },
    {
      icon: <FaLightbulb className="icon warning" />, 
      title: "Functional Updates (Updater Function)",
      content: (
        <>
          <p>
            When using <code>useState</code>, passing a <strong>function</strong> to the <strong>setState function</strong> ensures you always get the <strong>latest</strong> state value.
            This is useful when <strong>multiple updates</strong> might occur simultaneously.
          </p>
          <pre>
            {`import React, { useState } from "react";

const Counter= ()=> {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`}
          </pre>
          <p>
            <FaArrowRight className="icon success" /> Using <code>prevCount</code> inside the function ensures that <strong>React always works with the most recent state</strong>.
          </p>
        </>
      )
    }
  ]
};

const Usestate = ({scrollToTop}) => {
  return (
    <div className="container">
      <h1 className="title">{data.title.icon} {data.title.text}</h1>
      <hr />
      {data.sections.map((section, index) => (
        <section className="section" key={index}>
          <h2>{section.icon} {section.title}</h2>
          {section.content}
        </section>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  );
};

export default Usestate;