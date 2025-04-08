import React, { Fragment } from 'react';
import { SiAxios } from "react-icons/si";
import axioss from "../../../assets/axioss.gif"
import axiosss from "../../../assets/axiosss.gif"
import { RxDoubleArrowUp } from 'react-icons/rx';

const Axios = ({scrollToTop}) => {
  const data = {
    topic: "Axios in React",
    sub_topics: [
      {
        heading: "What is Axios?",
        points: [
          "Axios, which is a popular library, is mainly used to send asynchronous HTTP requests to REST endpoints.",
          "This library is very useful to perform CRUD operations.",
          "Axios supports the Promise API, native to JS ES6.",
          "Using Axios, we make API requests in our application and get the data in return to use in our project.",
          "Axios is very popular among developers with 78k+ stars on GitHub."
        ]
      },
      {
        heading: "Need of Axios in React",
        points: [
          "Axios allows you to communicate with APIs in your React project.",
          "While AJAX can perform the same tasks, Axios provides more functionality and features.",
          "Axios is a promise-based library, so you need to implement promise-based asynchronous HTTP requests."
        ],
        image: axioss
      },
      {
        heading: "Advantages of using Axios in React",
        points: [
          "Simplicity: Clean API with Promises for asynchronous operations.",
          "Flexibility: Supports interceptors, cancellation, and global error handling.",
          "Compatibility: Works seamlessly in browsers and Node.js.",
          "Security: Built-in CSRF protection and JSON data handling.",
          "Community: Large support base with extensive documentation."
        ]
      },
      {
        heading: "CRUD Operations Using Axios",
        points: [
          "Create: Use the Axios POST method to send a request to the server with the new item’s data.",
          "Read: Use the Axios GET method to fetch data from the server.",
          "Update: Use the Axios PUT method to send a request to the server with the updated item’s data.",
          "Delete: Use the Axios DELETE method to send a request to the server with the item’s ID."
        ]
      },
      {
        image: axiosss
      }
    ]
  };

  return (
    <div className='container'>
      <h1 className='title'><SiAxios />      {data.topic}</h1>
      <hr />
      {data.sub_topics.map((ele, index) => (
        <section className='section' key={index}>
          {ele.heading && <h2>{ele.heading}</h2>}
          {ele.points && (
            <ul>
              {ele.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
          <center>{ele.image && <img className='advimg' src={ele.image} alt='' />}</center>
        </section>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>
    </div>
  );
};

export default Axios;