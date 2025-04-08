import React from "react";
import { FaRocket, FaCheckCircle, FaExclamationTriangle, FaSyncAlt, FaBolt, FaListAlt, FaBrain, FaFilter, FaLightbulb, FaBug, FaClipboardList } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";
// import "./usereducer.css";

const useMemoData = {
  title: "useMemo (Performance Optimization)",
  description: "The useMemo hook in React optimizes performance by memoizing expensive calculations. It prevents unnecessary recalculations when a component re-renders, ensuring better efficiency.",
  reasons: [
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
  examples: [
    {
      title: "Optimizing a Slow Function",
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
      explanation: [
        { icon: <FaListAlt />, text: "slowFunction(input) is an expensive computation (simulated with a loop)." },
        { icon: <FaCheckCircle />, text: "useMemo caches the result to prevent unnecessary calculations." },
        { icon: <FaRocket />, text: "The function only re-runs when input changes, not on every render." },
        { icon: <FaSyncAlt />, text: "Clicking 'Re-render' updates count but does not trigger slowFunction again." }
      ]
    },
    {
      title: "Optimizing a Large List Filtering",
      code: `import { useState, useMemo } from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" }
];

const FilterList = () => {
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
    return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <div>
      <input type="text" placeholder="Search users..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;`,
      explanation: [
        { icon: <FaFilter />, text: "Every time the user types in the search bar, query updates." },
        { icon: <FaBrain />, text: "useMemo ensures that the list is only filtered when query changes." },
        { icon: <FaRocket />, text: "Without useMemo, every re-render would re-run users.filter(), even if query is the same." },
        { icon: <FaSyncAlt />, text: "This improves performance, especially when handling large lists." }
      ]
    }
  ],
  commonMistakes: [
    { icon: <FaExclamationTriangle />, text: "❌ Using useMemo everywhere. ✅ Only use it when necessary. Premature optimization can make code harder to read." },
    { icon: <FaExclamationTriangle />, text: "❌ Not adding dependencies. ✅ Always specify all dependencies in the dependency array." },
    { icon: <FaExclamationTriangle />, text: "❌ Using useMemo instead of useCallback for functions. ✅ If you need to memoize a function, use useCallback instead of useMemo." }
  ]
};

const Usememo = ({scrollToTop}) => {
  return (
    <div className="container">
      <h1 className="title">{useMemoData.title}</h1>
      <hr />
      <p>{useMemoData.description}</p>
      <hr />

      <div className="section">
        <h2>🎯 Why Use useMemo?</h2>
        <ul>
          {useMemoData.reasons.map((reason, index) => (
            <li key={index}>{reason.icon} {reason.text}</li>
          ))}
        </ul>
      </div>
      
      <div className="section">
        <h2>🔹 Basic Syntax</h2>
        <pre>{useMemoData.syntax}</pre>
        <ul>
          {useMemoData.syntaxExplanation.map((item, index) => (
            <li key={index}>{item.icon} {item.text}</li>
          ))}
        </ul>
      </div>
      
      {useMemoData.examples.map((example, index) => (
        <div className="section" key={index}>
          <h2>{example.title}</h2>
          <pre>{example.code}</pre>
          <ul>
            {example.explanation.map((exp, expIndex) => (
              <li key={expIndex}>{exp.icon} {exp.text}</li>
            ))}
          </ul>
        </div>
      ))}
      
      <div className="section">
        <h2>⚠️ Common Mistakes & Best Practices</h2>
        <ul>
          {useMemoData.commonMistakes.map((mistake, index) => (
            <li key={index}>{mistake.icon} {mistake.text}</li>
          ))}
        </ul>
      </div>
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  );
};

export default Usememo;
