import React, { useRef, useState, useEffect } from "react";
// import "./useref.css";
import { FaRegLightbulb, FaCode, FaClock, FaExclamationCircle } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";

const useRefData = {
  title: "useRef (Accessing DOM elements and persisting values)",
  description: "The useRef hook in React is used to create a mutable reference that persists across renders without causing re-renders.",
  useCases: [
    "✅ Accessing and manipulating DOM elements (e.g., focusing an input field)",
    "✅ Storing previous state values without triggering re-renders",
    "✅ Keeping track of intervals, timers, or event listeners"
  ],
  syntax: {
    title: "Basic Syntax of useRef",
    code: `import { useRef } from "react";

const myRef = useRef(initialValue);`,
    points: [
      "🔹 myRef.current holds the reference value.",
      "🔹 It does not trigger a re-render when updated."
    ]
  },
  examples: [
    {
      title: "Accessing and Manipulating the DOM",
      code: `import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Focuses the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;`
    },
    {
      title: "Storing Previous State Values",
      code: `import { useState, useRef, useEffect } from "react";

const PreviousCount = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCountRef.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default PreviousCount;`
    }
  ],
  comparisonTable: {
    title: "Key Differences: useRef vs useState vs useEffect",
    headers: ["Feature", "useRef", "useState", "useEffect"],
    rows: [
      ["Triggers re-render?", "❌ No", "✅ Yes", "❌ No"],
      ["Persists across renders?", "✅ Yes", "✅ Yes", "✅ Yes"],
      ["Used for DOM manipulation?", "✅ Yes", "❌ No", "✅ Yes"],
      ["Stores previous values?", "✅ Yes", "✅ Yes", "❌ No"],
      ["Best for side effects?", "❌ No", "❌ No", "✅ Yes"]
    ]
  }
};

const Useref = ({scrollToTop}) => {
  return (
    <div className="container">
      <h1 className="title"><FaRegLightbulb className="icon" /> {useRefData.title}</h1>
      <hr />
      <p>{useRefData.description}</p>
      <ul>
        {useRefData.useCases.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="section">
        <h2><FaCode className="icon" /> {useRefData.syntax.title}</h2>
        <pre>{useRefData.syntax.code}</pre>
        <ul>
          {useRefData.syntax.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      {useRefData.examples.map((example, index) => (
        <div className="section" key={index}>
          <h2><FaCode className="icon" /> {example.title}</h2>
          <pre>{example.code}</pre>
        </div>
      ))}
      <div className="section">
        <h2><FaExclamationCircle className="icon danger" /> {useRefData.comparisonTable.title}</h2>
        <table>
          <thead>
            <tr>
              {useRefData.comparisonTable.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {useRefData.comparisonTable.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  );
};

export default Useref;
