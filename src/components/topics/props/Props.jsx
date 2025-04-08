import React from 'react'
import { RxDoubleArrowUp } from 'react-icons/rx';

const propsData = {
  title: "🔥 Props in React: A Detailed Explanation",
  sections: [
    {
      id: 1,
      heading: "📌 What are Props in React?",
      description:
        "Props (short for 'Properties') are a way to pass data from a parent component to a child component in React. Props are immutable (read-only) and allow components to be reusable by dynamically changing their values."
    },
    {
      id: 2,
      heading: "🛠 How Do Props Work?",
      points: [
        "Props are passed from a parent component to a child component.",
        "The child component receives props as an argument and can use them inside JSX.",
        "Props cannot be modified inside the child component."
      ]
    },
    {
      id: 3,
      heading: "📝 Basic Example of Props",
      code: `
      const Greeting = (props) => {
        return <h1>Hello, {props.name}!</h1>;
      };

      const App = () => {
        return <Greeting name="John" />;
      };

      export default App;
      `,
      explanation: [
        "Greeting is a child component that receives a prop called name.",
        "The App component passes 'John' as the value of the name prop.",
        "Inside Greeting, we access props.name and display 'Hello, John!' on the screen."
      ]
    },
    {
      id: 4,
      heading: "🔹 Using Props with Multiple Values",
      code: `
      const StudentInfo = (props) => {
        return (
          <div>
            <h2>Student Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Subject: {props.subject}</p>
          </div>
        );
      };

      const App = () => {
        return <StudentInfo name="Alice" age={20} subject="Mathematics" />;
      };

      export default App;
      `,
      explanation: [
        "Props can be used to send multiple values, including strings, numbers, arrays, objects, and even functions.",
        "StudentInfo component receives multiple props: name, age, and subject."
      ]
    },
    {
      id: 5,
      heading: "🎯 Destructuring Props (Cleaner Syntax)",
      code: `
      const StudentInfo = ({ name, age, subject }) => {
        return (
          <div>
            <h2>Student Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Subject: {subject}</p>
          </div>
        );
      };

      const App = () => {
        return <StudentInfo name="Alice" age={20} subject="Mathematics" />;
      };

      export default App;
      `,
      explanation: [
        "Instead of using props.name, props.age, etc., we destructure props in function parameters.",
        "This makes the code cleaner and easier to read."
      ]
    },
    {
      id: 6,
      heading: "📌 Props vs. State",
      comparisonTable: [
        {
          feature: "Definition",
          props: "Used to pass data from parent to child",
          state: "Used to manage a component's local data"
        },
        {
          feature: "Mutability",
          props: "Immutable (cannot be changed by child)",
          state: "Mutable (can be updated using setState)"
        },
        {
          feature: "Usage",
          props: "Passed to child components",
          state: "Used within a component"
        },
        {
          feature: "Example",
          props: `<Greeting name="John" />`,
          state: "const [count, setCount] = useState(0)"
        }
      ]
    }
  ]
};


const Props = ({scrollToTop}) => {
  return (
    <div className="container">
      <h1 className='title'>{propsData.title}</h1>
      <hr />

      {propsData.sections.map((section) => (
        <div key={section.id} className="section">
          <h2>{section.heading}</h2>

          {section.description && <p>{section.description}</p>}

          {section.points && (
            <ul>
              {section.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          {section.code && (
            <pre>
              <pre>{section.code}</pre>
            </pre>
          )}

          {section.explanation && (
            <ul>
              {section.explanation.map((explain, index) => (
                <li key={index}>{explain}</li>
              ))}
            </ul>
          )}

          {section.comparisonTable && (
            <table border="1">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Props</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                {section.comparisonTable.map((row, index) => (
                  <tr key={index}>
                    <td>{row.feature}</td>
                    <td>{row.props}</td>
                    <td>{row.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>

    </div>
  )
}

export default Props