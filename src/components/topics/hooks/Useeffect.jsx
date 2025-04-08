import React from "react";
// import "./useeffect.css";
import { FaSync, FaCode, FaClipboardList, FaBolt, FaRocket, FaExclamationTriangle } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";

const useEffectData = {
  title: "useEffect Hook",
  sections: [
    {
      heading: "What is useEffect?",
      icon: <FaCode className="icon" />,
      description: "useEffect is a React hook that allows you to perform side effects in functional components.",
      sideEffects: ["Fetching data from an API", "Updating the DOM", "Subscribing to events", "Setting up timers"],
      lifecycleMethods: [
        "componentDidMount (Runs when component mounts)",
        "componentDidUpdate (Runs when component updates)",
        "componentWillUnmount (Runs before unmounting)"
      ],
      note: "The useEffect hook replaces all these lifecycle methods in functional components."
    },
    {
      heading: "Basic Syntax",
      icon: <FaClipboardList className="icon success" />,
      code: `import { useEffect } from "react";

useEffect(() => {
  // Code to run when the component renders or updates

  return () => {
    // Cleanup function (runs before re-executing the effect or when the component unmounts)
  };
}, [dependencies]);`,
      details: [
        "First argument: A function where you write side effects.",
        "Second argument ([] dependency array): Determines when the effect runs."
      ]
    },
    {
      heading: "Different Ways to Use useEffect",
      icon: <FaBolt className="icon warning" />,
      cases: [
        {
          title: "Run on Every Render (No Dependency Array)",
          code: `useEffect(() => {
  console.log("Component rendered!");
});`,
          useCase: "Execute logic on every render."
        },
        {
          title: "Run Only Once (on Mount) ([] as Dependency)",
          code: `useEffect(() => {
  console.log("Runs only once!");

  return () => {
    console.log("Cleanup before unmounting.");
  };
}, []);`,
          useCase: "Fetching data, setting up event listeners, initializing third-party libraries."
        },
        {
          title: "Run When a State/Prop Changes (With Dependencies)",
          code: `const [count, setCount] = useState(0);

useEffect(() => {
  console.log(\`Count changed to: \${count}\`);
}, [count]);`,
          useCase: "Watching state changes and reacting dynamically."
        },
        {
          title: "Cleanup Function in useEffect",
          code: `useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running every second...");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);`,
          useCase: "Removing event listeners, stopping intervals, closing WebSocket connections."
        }
      ]
    },
    {
      heading: "Real-World Example: Fetching Data",
      icon: <FaRocket className="icon highlight" />,
      code: `import { useState, useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/notes")
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error("Error fetching notes:", error));
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map(note => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;`,
      note: "The fetch request should run only once when the component mounts."
    },
    {
      heading: "Common Mistakes & Best Practices",
      icon: <FaExclamationTriangle className="icon danger" />,
      mistakes: [
        {
          issue: "Avoid setting state inside useEffect without dependencies",
          example: `useEffect(() => {
  setCount(count + 1); // ❌ Infinite loop
}, []);`,
          fix: "This will cause an infinite loop."
        },
        {
          issue: "Forgetting to clean up effects",
          fix: "Always clean up timers, listeners, or subscriptions in the return function."
        }
      ]
    }
  ]
};

const Useeffect = ({scrollToTop}) => {
  return (
    <div className="container">
      <h1 className="title">
        <FaSync className="icon" /> {useEffectData.title}
      </h1>
      <hr />
      {useEffectData.sections.map((section, index) => (
        <section key={index} className="section">
          <h2>{section.icon} {section.heading}</h2>
          {section.description && <p>{section.description}</p>}
          {section.sideEffects && <ul>{section.sideEffects.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
          {section.lifecycleMethods && <ul>{section.lifecycleMethods.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
          {section.note && <p><strong>Note:</strong> {section.note}</p>}
          {section.code && <pre>{section.code}</pre>}
          {section.details && <ul>{section.details.map((detail, idx) => <li key={idx}>{detail}</li>)}</ul>}
          {section.cases && section.cases.map((useCase, idx) => (
            <div key={idx}>
              <h3>{useCase.title}</h3>
              <pre>{useCase.code}</pre>
              <p><strong>📌 Use Case:</strong> {useCase.useCase}</p>
            </div>
          ))}
          {section.mistakes && section.mistakes.map((mistake, idx) => (
            <div key={idx}>
              <p><strong>❌ {mistake.issue}</strong></p>
              {mistake.example && <pre>{mistake.example}</pre>}
              <p>✅ {mistake.fix}</p>
            </div>
          ))}
        </section>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  );
};

export default Useeffect;
