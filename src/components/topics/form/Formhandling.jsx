import React, { Fragment } from 'react'
import { PiNumberSquareTwoFill } from "react-icons/pi";
import { SiPreact } from "react-icons/si";
import { FcSalesPerformance } from "react-icons/fc";
import { PiNumberSquareOneFill } from "react-icons/pi";
import difference from "../../../assets/form/form_difference.jpg"
import uncontrolled from "../../../assets/form/uncontrolled-form.jpg"
import controlled from "../../../assets/form/controlled-form.jpg"
import { RxDoubleArrowUp } from 'react-icons/rx';

const Formhandling = ({scrollToTop}) => {


  const FormHandlingData = {
    topic: "Form Handling in React",
        icon:< SiPreact className='iconh1'/>,
    
    sub_topics: [
      {
        heading: "What is Form handling in React ?",
            icon:< FcSalesPerformance className='iconh2'/>,
        
        points: [
          " Form handling in React involves managing the state of form elements and responding to user input. ",
          "Uncontrolled Form Handling is a method of managing form data where the form elements maintain their own state. Instead of using React's state to control the input values, uncontrolled components rely on the DOM to handle the form data",
          "React also provides a way to handle forms using controlled components called Controlled Form Handling, where form data is handled by the component's state. This approach allows for better control over the form data and makes it easier to validate and manipulate.",
        ],
        code: `import React from 'react';

const ReactForm=()=>{
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Access the input values directly from the DOM
    const name = e.target.name.value; // Accessing the input value directly
    const email = e.target.email.value; // Accessing the input value directly

    console.log('Form Data Submitted:', { name, email });
    // You can add your API call here to send the data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default reactForm;`,
        image:difference
      },
      {
        heading: " Uncontrolled Forms",
            icon:< PiNumberSquareOneFill className='iconh2'/>,
        
        points: ["Uncontrolled forms in React are a way of managing form data where the form elements maintain their own state. ",
          " Instead of using React's state to control the input values, uncontrolled components rely on the DOM to handle the form data. This approach can be useful for simpler forms or when integrating with non-React libraries.", "In uncontrolled components, you can use the ref attribute to access the DOM elements directly. This allows you to read the input values when needed, such as during form submission.", "Unlike controlled components, uncontrolled components do not store the input values in the component's state. Instead, the values are retrieved directly from the DOM.", "Uncontrolled components can be simpler to implement for basic forms, especially when you don't need to manage the form data dynamically.", "Uncontrolled forms can be beneficial when integrating with third-party libraries that manipulate the DOM directly, as they do not interfere with React's state management."
        ],

        code: `import React, { useRef } from 'react';

const UncontrolledForm=()=>{
  // Create refs for the input fields
  const nameRef = useRef();
  const emailRef = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Access the input values using refs
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log('Form Data Submitted:', { name, email });
    // You can add your API call here to send the data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            ref={nameRef} // Attach ref to the input
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            ref={emailRef} // Attach ref to the input
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default UncontrolledForm;`,

        image: uncontrolled
      },
      {
        heading: " Controlled Forms",
            icon:< PiNumberSquareTwoFill className='iconh2'/>,
        
        points: ["Controlled forms in React are a way of managing form data where the form elements (like input fields) derive their values from the component's state. This means that the component is responsible for handling the form data, making it easier to manage, validate, and manipulate.",
          " The form data is stored in the component's state using the useState hook. This ensures that the input fields always reflect the current state of the data.",
          "The onChange event handler is used to update the state whenever the user types in the input fields. This allows for real-time updates to the form data.", "Each input field's value is controlled by the component's state. This means that the input field will always display the current value from the state.", "The form submission can be handled using an event handler that prevents the default form submission behavior. This allows you to process the form data as needed (e.g., sending it to an API).", "Controlled forms make it easier to implement validation logic. You can check the state of the form data before allowing submission.", "You can conditionally render elements based on the form data or user input. This allows for a more interactive user experience."
        ],
        code: `import React, { useState } from 'react';

const ControlledForm=()=>{
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Form Data Submitted:', formData);
    // You can add your API call here to send formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;`,

        image: controlled

      }

    ]
  }


  return (
    <div className='container'>
      <h1 className=''>{FormHandlingData.icon}{FormHandlingData.topic}</h1>

      {FormHandlingData.sub_topics.map((ele, index) => {
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
<center>   <img src={ele.image} width='40%' /></center>
            </section>
            <pre>{ele.code}</pre>
          </Fragment>

        )
      })}

<button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>
    </div>

  )
}

export default Formhandling