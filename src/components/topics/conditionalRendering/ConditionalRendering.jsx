import React, { Fragment } from 'react'
import { FaMapPin } from "react-icons/fa";
import { MdOutlineAutorenew } from "react-icons/md";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { PiNumberSquareTwo } from "react-icons/pi";
import { PiNumberSquareOne } from "react-icons/pi";
import { PiNumberSquareOneFill } from "react-icons/pi";
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { PiNumberSquareThreeFill } from "react-icons/pi";
import { PiNumberSquareFourFill } from "react-icons/pi";
import { PiNumberSquareFiveFill } from "react-icons/pi";
import conditional_image from "../../../assets/conditional/conditional_render.png"
import { RxDoubleArrowUp } from 'react-icons/rx';



const ConditionalRendering = ({scrollToTop}) => {

  const conditionalRenderingData = {
    topic: "Conditional Rendering",
     icon:< FaMapPin className='iconh1'/>,
    sub_topics: [
      {
        heading: "What is Conditional Rendering in React ?",
        icon:< MdOutlineAutorenew className='iconh2'/>,
        points: [
          "Conditional rendering in React refers to the ability to render different components or elements based on certain conditions.",
          "This is similar to how conditional statements work in JavaScript, where you can execute different code blocks based on specific criteria",
          "In React, you can use conditional rendering to display different UI elements based on the state of your application, user interactions, or any other conditions.", "There are several common ways to implement conditional rendering in React :",
        ],
        image:conditional_image,
        code: `import React, { useState } from 'react';

const App=()=>{
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      {/* Conditional rendering based on isLoggedIn state */}
      {isLoggedIn ? (
        <h2>Welcome back, User!</h2>
      ) : (
        <h2>Please log in.</h2>
      )}

      {/* Button to toggle login state */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

export default App;`,
      },
      {
        heading: " Using if-else statements :",
        icon:< PiNumberSquareOneFill className='iconh2'/>,
        points: [
          "You can use standard JavaScript if statements to determine what to render.",
        ],
        code: `const MyComponent=({ isLoggedIn })=>{
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}`,

      },
      {
        heading: "Using ternary operators :",
        icon:< PiNumberSquareTwoFill className='iconh2'/>,
        points: [
          "A more concise way to handle conditional rendering is to use the ternary operator."
        ],
        code: `const MyComponent=({ isLoggedIn })=>{
  return (
    <h1>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h1>
  );
}`,
        
      },
      {
        heading: "Using logical && operator : ",
        icon:< PiNumberSquareThreeFill className='iconh2'/>,
        points: [
          "You can also use the logical && operator to conditionally render elements.",
          "This is useful when you want to render something only if a condition is true."
        ],
        code: `const MyComponent=({ isLoggedIn })=>{
  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
      {!isLoggedIn && <h1>Please log in.</h1>}
    </div>
  );
}`,

      },
      {
        heading: " Using switch statements : ",
        icon:< PiNumberSquareFourFill className='iconh2'/>,
        points: [
          "For more complex conditions, you might use a switch statement."
        ],
        code: `const MyComponent=({ status })=>{
  switch (status) {
    case 'loading':
      return <h1>Loading...</h1>;
    case 'error':
      return <h1>Error occurred!</h1>;
    case 'success':
      return <h1>Data loaded successfully!</h1>;
    default:
      return null;
  }
}`,

      },
      {
        heading: " Rendering different components : ",
        icon:<PiNumberSquareFiveFill className='iconh2'/>,
        points: [
          "You can also conditionally render different components based on the state or props."
        ],
        code: `const MyComponent=({ view })=>{
  return (
    <div>
      {view === 'grid' ? <GridView /> : <ListView />}
    </div>
  );
}`,

      },
      {
        heading: "What is Short-Circuit Evaluation in React ?",
        icon:< BsArrowRightSquareFill className='iconh2'/>,
        points: [
          "Short-circuit evaluation is a JavaScript logical operation where expressions are evaluated from left to right, and the evaluation stops (or 'short-circuits') as soon as the final result is determined.", "It is commonly used in React for Conditional Rendering using && (AND) and || (OR) operators."
        ],
        code: `const MyComponent=({ view })=>{
  return (
    <div>
      {view === 'grid' ? <GridView /> : <ListView />}
    </div>
  );
}`,

      },
      {
        heading: "Short-Circuit Evaluation Using the Logical AND (&&) Operator : ",
        icon:< PiNumberSquareOne className='iconh2'/>,
        points: [
          "In this example, we will conditionally render a message based on whether a user is logged in.", "If isLoggedIn is true, the message Welcome back! will be rendered.", "If isLoggedIn is false, the message Please login will be rendered."
        ],
        code: `const UserGreeting=({ isLoggedIn })=>{
  return (
    <div>
      {isLoggedIn && <h1>Welcome back!</h1>}
      {!isLoggedIn && <h1>Please log in.</h1>}
    </div>
  );
}
// Usage:-
// <User Greeting isLoggedIn={true} />  // Renders: Welcome back!
// <User Greeting isLoggedIn={false} /> // Renders: Please log in.`,

      },
      {
        heading: "Short-Circuit Evaluation Using the Logical OR (||) Operator : ",
        icon:< PiNumberSquareTwo className='iconh2'/>,
        points: [
          "In this example, we will provide a default value for a username. If the username is not provided (i.e., it is null or undefined), we will display Guest.", "If userName is a truthy value (like Aryan), it will be displayed.", "If userName is falsy (like null), the default value Guest will be displayed."
        ],
        code: `const Greeting=({ userName })=>{
  return (
    <h1>Hello, {userName || 'Guest'}!</h1>
  );
}

// Usage:-
// <Greeting userName="Aryan" /> // Renders: Hello, Aryan!
// <Greeting userName={null} />   // Renders: Hello, Guest!`,

      }
    ]
  }


  return (
    
      <div className='container'>
        <h1 className=''>{conditionalRenderingData.icon}{conditionalRenderingData.topic}</h1>

        {conditionalRenderingData.sub_topics.map((ele, index) => {
          return (
            <Fragment key={index}>
              <h2>{ele.icon}{ele.heading}</h2>
              <section className='section'>
                <ul>
                  {ele.points.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    )
                  })}

                </ul>
<center>  <img src={ele.image} width='50%'/></center>
              </section>
              <pre>{ele.code}</pre>
            </Fragment>
          )
        })}

<button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>
      </div>
    
  )
}

export default ConditionalRendering