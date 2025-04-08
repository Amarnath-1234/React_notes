import React from "react";
import { FaRocket, FaCheckCircle, FaExclamationTriangle, FaSyncAlt, FaBolt, FaListAlt, FaBrain, FaFilter, FaLightbulb, FaBug, FaClipboardList } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";
// import "./usereducer.css";

const data = {
  title: "useCallback (Optimizing Functions)",
  description: "The useCallback hook in React memoizes functions, preventing unnecessary re-creations during re-renders. This is useful when passing functions as props to child components or when using dependencies inside useEffect or event handlers.",
  sections: [
    {
      title: "Why Use useCallback?",
      items: [
        { icon: <FaBolt />, text: "Optimizes performance – Prevents functions from being re-created on every render." },
        { icon: <FaRocket />, text: "Avoids unnecessary re-renders – Helps when passing functions as props to memoized child components." },
        { icon: <FaSyncAlt />, text: "Works well with useEffect and event handlers – Prevents infinite loops in effects." }
      ]
    },
    {
      title: "Basic Syntax of useCallback",
      code: "const memoizedFunction = useCallback(() => { \n  // Function logic here \n}, [dependencies]);",
      items: [
        { icon: <FaBrain />, text: "useCallback returns a memoized function that only changes if its dependencies change." },
        { icon: <FaClipboardList />, text: "If dependencies don’t change, the function reference stays the same." }
      ]
    },
    {
      title: "Step-by-Step Example of useCallback",
      subtitle: "Example: Preventing Unnecessary Function Re-Creation",
      code: `import { useState, useCallback } from "react";\n\nconst Counter = ({ increment }) => {\n  console.log("Counter component re-rendered");\n  return <button onClick={increment}>Increment</button>;\n};\n\nconst MemoizedCounter = React.memo(Counter);\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n\n  // 🔥 Memoizing function using useCallback\n  const increment = useCallback(() => {\n    setCount((prev) => prev + 1);\n  }, []);\n\n  return (\n    <div>\n      <h2>Count: {count}</h2>\n      <MemoizedCounter increment={increment} />\n    </div>\n  );\n};\n\nexport default App;`,
      items: [
        { icon: <FaListAlt />, text: "The increment function is memoized using useCallback." },
        { icon: <FaCheckCircle />, text: "The Counter component is wrapped in React.memo to prevent unnecessary re-renders." },
        { icon: <FaRocket />, text: "useCallback prevents function re-creation across renders." }
      ]
    },
    {
      title: "Optimizing useEffect with useCallback",
      subtitle: "Example: Fetching Data Without Infinite Loops",
      code: `import { useState, useEffect, useCallback } from "react";\n\nconst FetchData = () => {\n  const [data, setData] = useState([]);\n\n  // 🔥 Memoizing fetch function with useCallback\n  const fetchData = useCallback(() => {\n    console.log("Fetching data...");\n    fetch("https://jsonplaceholder.typicode.com/posts")\n      .then((response) => response.json())\n      .then((json) => setData(json.slice(0, 5)));\n  }, []);\n\n  useEffect(() => {\n    fetchData();\n  }, [fetchData]); // ✅ Only runs once, avoids infinite loop\n\n  return (\n    <div>\n      {data.map((post) => (\n        <p key={post.id}>{post.title}</p>\n      ))}\n    </div>\n  );\n};\n\nexport default FetchData;`,
      items: [
        { icon: <FaFilter />, text: "fetchData is memoized using useCallback." },
        { icon: <FaBrain />, text: "useEffect runs only once, avoiding an infinite loop." }
      ]
    },
    {
      title: "When Should You Use useCallback?",
      items: [
        { icon: <FaCheckCircle />, text: "When passing functions as props to memoized child components (React.memo)." },
        { icon: <FaClipboardList />, text: "When using functions inside useEffect to avoid infinite loops." },
        { icon: <FaBolt />, text: "When handling event listeners inside components." },
        { icon: <FaBrain />, text: "When optimizing performance-sensitive applications." }
      ]
    },
    {
      title: "Common Mistakes & Best Practices",
      items: [
        { icon: <FaExclamationTriangle />, text: "❌ Using useCallback everywhere - ✅ Only use it when a function causes unnecessary re-renders." },
        { icon: <FaExclamationTriangle />, text: "❌ Not adding dependencies - ✅ Always include all dependencies in the dependency array." },
        { icon: <FaExclamationTriangle />, text: "❌ Using useCallback instead of useMemo - ✅ Use useMemo for memoizing values, useCallback for memoizing functions." }
      ]
    }
  ]
};

const UseCallback = ({scrollToTop}) => {
  return (
    <div className="container">
      <h1 className="title">
        <FaSyncAlt /> {data.title}
      </h1>
      <hr />
      <p>{data.description}</p>
      {data.sections.map((section, index) => (
        <div className="section" key={index}>
          <h2>{section.title}</h2>
          {section.subtitle && <h3>{section.subtitle}</h3>}
          {section.code && <pre>{section.code}</pre>}
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx}>{item.icon} {item.text}</li>
            ))}
          </ul>
        </div>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  );
};

export default UseCallback;
