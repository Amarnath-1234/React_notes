import React from "react";
import { FaRocket, FaCheckCircle, FaExclamationTriangle, FaSyncAlt, FaBolt, FaListAlt, FaBrain, FaFilter, FaLightbulb, FaBug, FaClipboardList } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";
// import "./usereducer.css";

const useMemoData = {
  title: "useMemo (Performance Optimization)",
  description: "The useMemo hook in React optimizes performance by memoizing expensive calculations. It prevents unnecessary recalculations when a component re-renders, ensuring better efficiency.",
  whyUse: [
    { icon: <FaBolt />, text: "Avoids unnecessary calculations – Only recalculates values when dependencies change." },
    { icon: <FaRocket />, text: "Improves performance – Helps when working with large datasets or expensive computations." },
    { icon: <FaSyncAlt />, text: "Prevents unnecessary re-renders – Ensures that functions return cached results instead of recalculating every time." }
  ],
  syntax: "const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);",
  syntaxExplanation: [
    { icon: <FaBrain />, text: "useMemo caches (memoizes) the result of computeExpensiveValue(a, b)." },
    { icon: <FaClipboardList />, text: "It only recalculates when a or b change." },
    { icon: <FaCheckCircle />, text: "If a and b do not change, it returns the previously stored value, avoiding unnecessary calculations." }
  ],
  example: {
    title: "Example: Optimizing a Slow Function",
    code: `import { useState, useMemo } from "react";

const slowFunction = (num) => {
  console.log("Computing...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  const computedValue = useMemo(() => slowFunction(input), [input]);

  return (
    <div>
      <h2>Computed Value: {computedValue}</h2>
      <input type="number" value={input} onChange={(e) => setInput(Number(e.target.value))} />
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
};

export default MemoExample;`,
    points: [
      { icon: <FaListAlt />, text: "slowFunction(input) is an expensive computation." },
      { icon: <FaCheckCircle />, text: "useMemo caches the result to prevent unnecessary calculations." },
      { icon: <FaRocket />, text: "The function only re-runs when input changes, not on every render." }
    ]
  },
  commonMistakes: [
    { icon: <FaExclamationTriangle />, text: "❌ Using useMemo everywhere – ✅ Only use it when necessary. Premature optimization can make code harder to read." },
    { icon: <FaExclamationTriangle />, text: "❌ Not adding dependencies – ✅ Always specify all dependencies in the dependency array." },
    { icon: <FaExclamationTriangle />, text: "❌ Using useMemo instead of useCallback for functions – ✅ If you need to memoize a function, use useCallback instead." }
  ]
};

const Usememo = ({scrollToTop}) => {
  return (
    <div className="container">
      <h1 className="title">
        <FaSyncAlt /> {useMemoData.title}
      </h1>
      <hr />
      <p>{useMemoData.description}</p>
      <div className="section">
        <h2>🎯 Why Use useMemo?</h2>
        <ul>
          {useMemoData.whyUse.map((item, index) => (
            <li key={index}>{item.icon} {item.text}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>🔹 Basic Syntax of useMemo</h2>
        <pre>{useMemoData.syntax}</pre>
        <ul>
          {useMemoData.syntaxExplanation.map((item, index) => (
            <li key={index}>{item.icon} {item.text}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>🏆 {useMemoData.example.title}</h2>
        <pre>{useMemoData.example.code}</pre>
        <ul>
          {useMemoData.example.points.map((item, index) => (
            <li key={index}>{item.icon} {item.text}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>⚠️ Common Mistakes & Best Practices</h2>
        <ul>
          {useMemoData.commonMistakes.map((item, index) => (
            <li key={index}>{item.icon} {item.text}</li>
          ))}
        </ul>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  );
};

export default Usememo;
