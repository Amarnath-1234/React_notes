import React from "react";
// import "./hooks.css";
import { FaCheckCircle, FaCode, FaExclamationTriangle, FaReact } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";

const hookData = {
  title: "React Hooks",
  sections: [
    {
      title: "What are Hooks?",
      icon: <FaCode className="icon" />, 
      content: "Hooks are simple javascript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks."
    },
    {
      title: "Why Hooks?",
      icon: <FaExclamationTriangle className="icon warning" />, 
      content: "Before hooks, functional components were stateless and could only render UI based on props. If you needed state or lifecycle methods, you had to use class components. Hooks eliminate this restriction, making function components more powerful and easier to manage."
    },
    {
      title: "Rules of Hooks",
      icon: <FaCheckCircle className="icon success" />, 
      rules: [
        {
          rule: "Only call hooks at the top level:",
          description: "Hooks should not be used inside loops, conditions, or nested functions.",
          code: `const usestateHook = ()=>{
  const [count, setCount] = useState(0);
  if (count > 5) {
    console.log("Count is greater than 5");
  }
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}`
        },
        {
          rule: "Only call hooks from React functions:",
          description: "Hooks must be used inside function components or custom hooks.",
          code: `const myComponent = ()=>{
  const [count, setCount] = useState(0);
  return <p>{count}</p>;
}`
        },
        {
          rule: "Custom hooks must start with \"use\":",
          description: "Hooks should be prefixed with \"use\" to be recognized by React.",
          code: `const useCustomHook = ()=>{
  const [data, setData] = useState(null);
  return [data, setData];
}`
        },
        {
          rule: "Hooks should be used in the same order in every render:",
          description: "React tracks hooks by their order in the function.",
          code: `const MyComponent = ()=>{
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");
  return <p>{count} - {name}</p>;
}`
        },
        {
          rule: "Hooks must be in functional components or custom hooks:",
          description: "Hooks cannot be used inside class components.",
          code: `const MyComponent = ()=>{
  const [count, setCount] = useState(0);
  return <p>{count}</p>;
}`
        }
      ]
    }
  ]
};

const Hooks = ({scrollToTop}) => {
  return (
    <div className="container">
      <h1 className="title">
        <FaReact className="icon" /> {hookData.title}
      </h1>
      <hr />
      {hookData.sections.map((section, index) => (
        <section key={index} className="section">
          <h2>{section.icon} {section.title}</h2>
          {section.content && <p>{section.content}</p>}
          {section.rules && (
            <ol>
              {section.rules.map((rule, idx) => (
                <li key={idx}>
                  <strong>{rule.rule}</strong> {rule.description}
                  <pre>{rule.code}</pre>
                </li>
              ))}
            </ol>
          )}
        </section>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  );
};

export default Hooks;
