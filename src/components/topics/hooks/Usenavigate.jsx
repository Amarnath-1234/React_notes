import React from "react";
import { FaLocationArrow, FaCode, FaClipboardList, FaRocket, FaExclamationTriangle } from "react-icons/fa";
import { RxDoubleArrowUp } from "react-icons/rx";

const useNavigateData = {
  title: "useNavigate Hook",
  sections: [
    {
      heading: "What is useNavigate?",
      icon: <FaLocationArrow className="icon" />,
      description: "useNavigate is a hook from React Router (v6+) that enables programmatic navigation.",
      features: [
        "Navigate to different routes/pages dynamically",
        "Replace the older useHistory hook",
        "Supports passing state data and dynamic parameters",
        "Allows back, forward, and replace navigation"
      ],
      note: "Ensure react-router-dom is installed before using useNavigate."
    },
    {
      heading: "Basic Syntax",
      icon: <FaClipboardList className="icon success" />,
      code: `import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/new-route");`,
      details: [
        "Import useNavigate from react-router-dom",
        "Call navigate(\"/route\") to redirect users dynamically"
      ]
    },
    {
      heading: "Different Ways to Use useNavigate",
      icon: <FaRocket className="icon highlight" />,
      cases: [
        {
          title: "Navigating to a New Page",
          code: `const navigate = useNavigate();

<button onClick={() => navigate("/about")}>Go to About</button>;`,
          useCase: "Redirect users to a different page on button click."
        },
        {
          title: "Navigating with Dynamic Parameters",
          code: `const userId = 123;

<button onClick={() => navigate(\`/user/{userId}\`)}>Go to Profile</button>;`,
          useCase: "Pass dynamic values in the URL while navigating."
        },
        {
          title: "Navigating with State (Passing Data)",
          code: `navigate("/profile", { state: { name: "Shanu" } });`,
          useCase: "Pass additional data without modifying the URL."
        },
        {
          title: "Navigating Back and Forward",
          code: `navigate(-1); // Go back
navigate(1);  // Go forward`,
          useCase: "Navigate between previously visited pages."
        },
        {
          title: "Replacing Current Route (No History)",
          code: `navigate("/dashboard", { replace: true });`,
          useCase: "Prevent users from going back to the previous page."
        }
      ]
    },
    {
      heading: "Common Mistakes & Best Practices",
      icon: <FaExclamationTriangle className="icon danger" />,
      mistakes: [
        {
          issue: "Forgetting to Wrap Components with BrowserRouter",
          fix: "Ensure that all components using useNavigate are wrapped inside <BrowserRouter>."
        },
        {
          issue: "Using navigate inside an event where it's not needed",
          fix: "Only use navigate when a user action requires redirection."
        }
      ]
    }
  ]
};

const Usenavigate = ({ scrollToTop }) => {
  return (
    <div className="container">
      <h1 className="title">
        <FaLocationArrow className="icon" /> {useNavigateData.title}
      </h1>
      <hr />
      {useNavigateData.sections.map((section, index) => (
        <section key={index} className="section">
          <h2>{section.icon} {section.heading}</h2>
          {section.description && <p>{section.description}</p>}
          {section.features && <ul>{section.features.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
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

export default Usenavigate;
