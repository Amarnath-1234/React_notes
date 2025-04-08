import React, { createContext, useContext, useState } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
// import "./usereducer.css";

// Context Data
const contextData = {
  introduction: {
    title: "useContext (Managing Global State)",
    description:
      "The useContext hook in React provides a way to share state or data between multiple components without manually passing props down at every level (prop drilling). It allows components to consume values from a React Context.",
  },
  whyUse: [
    "🚀 Avoids prop drilling – No need to pass props through multiple components.",
    "🚀 Centralized state management – Stores global data that multiple components can access.",
    "🚀 Improves code readability – Cleaner and more maintainable structure.",
  ],
  syntax: {
    create: "const MyContext = createContext();",
    provider:` const MyProvider = ({ children }) => { 
      const value = 'Hello from Context'; 
      return <MyContext.Provider value={value}>{children}</MyContext.Provider>; 
    };`,
    consume: `const ChildComponent = () => { 
      const contextValue = useContext(MyContext);
       return <h2>{contextValue}</h2>; 
      };`,
  },
  themeExample: {
    title: "🏆 Step-by-Step Example of useContext",
    createContext: "export const ThemeContext = createContext(null);",
    provider:
      `const [theme, setTheme] = useState('light'); 
      const toggleTheme = () => { 
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
       };
       return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;`,
    consume: `const { theme, toggleTheme } = useContext(ThemeContext); 
    return <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
    <h2>Current Theme: {theme}</h2>
    <button onClick={toggleTheme}>Toggle Theme</button>
    </div>;`,
  },
  whenToUse: [
    "🔹 For global state – Themes, authentication, user preferences, language settings.",
    "🔹 When avoiding prop drilling – If a deeply nested component needs access to a state.",
    "🔹 For managing configurations – API settings, environment variables.",
  ],
  bestPractices: [
    "❌ Using useContext inside a provider instead of a consumer - ✅ Always call useContext inside child components, not inside the provider.",
    "❌ Modifying context state directly - ✅ Modify state using functions provided in the context, never by changing contextValue.current.",
    "❌ Using useContext for every piece of state - ✅ Use it only for global states. For local states, prefer useState.",
  ],
  comparison: [
    { feature: "Used for", useContext: "Sharing global state", useState: "Local state management", useReducer: "Complex state logic" },
    { feature: "Prop drilling avoided?", useContext: "✅ Yes", useState: "❌ No", useReducer: "✅ Yes" },
    { feature: "Best for", useContext: "Themes, Auth, Language", useState: "Component-specific state", useReducer: "Managing multiple state changes" },
  ],
};

// Context Creation
const MyContext = createContext();
const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const Usecontext = ({scrollToTop}) => {
  return (
    <div className="container">
      <h1 className="title">{contextData.introduction.title}</h1>
      <hr />
      <p>{contextData.introduction.description}</p>
      <h2>🎯 Why Use useContext?</h2>
      <ul>
        {contextData.whyUse.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <h2>🛠 Syntax</h2>
      <pre>{contextData.syntax.create}</pre>
      <pre>{contextData.syntax.provider}</pre>
      <pre>{contextData.syntax.consume}</pre>
      <h2>{contextData.themeExample.title}</h2>
      <pre>{contextData.themeExample.createContext}</pre>
      <pre>{contextData.themeExample.provider}</pre>
      <pre>{contextData.themeExample.consume}</pre>
      <h2>🎯 When Should You Use useContext?</h2>
      <ul>
        {contextData.whenToUse.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <h2>⚠️ Best Practices</h2>
      <ul>
        {contextData.bestPractices.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <h2>🎯 Key Differences: useContext vs useState vs useReducer</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Feature</th>
            <th>useContext</th>
            <th>useState</th>
            <th>useReducer</th>
          </tr>
        </thead>
        <tbody>
          {contextData.comparison.map((row, index) => (
            <tr key={index}>
              <td>{row.feature}</td>
              <td>{row.useContext}</td>
              <td>{row.useState}</td>
              <td>{row.useReducer}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  );
};

export default Usecontext;
