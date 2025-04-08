import React from 'react';
import { LuRoute } from "react-icons/lu";
import router1 from "../../../assets/router.gif"
import { RxDoubleArrowUp } from 'react-icons/rx';

const Routing = ({scrollToTop}) => {
  const data = {
    topic: "React Router",
    sub_topics: [
      {
        heading: "What is React Router?",
        points: [
          "React Router is a library for handling navigation in React applications.",
          "It enables Single Page Applications (SPA) to have multiple views without reloading.",
          "Supports dynamic routes and nested routing."
        ]
      },
      {
        heading: "Installation of React Router",
        points: [
          "To install React Router, run the command:",
          "npm install react-router-dom or",
          
          "yarn add react-router-dom"
        ]
      },
      {
        heading: "Key Components of React Router",
        points: [
          "BrowserRouter: Enables routing in a React app.",
          "Routes: Wrapper for defining multiple routes.",
          "Route: Defines a path and the component to render.",
          "Link: Used for navigation without full page reload.",
          "useNavigate: Allows programmatic navigation.",
          "useParams: Gets dynamic route parameters."
        ]
      },
      {
        heading: "Basic Example: Creating Routes",
        code: `import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;`,
        explanation: [
          "BrowserRouter wraps the entire app to enable routing.",
          "Routes groups all route definitions.",
          "Route defines paths (/ for Home and /about for About) and renders the corresponding component."
        ]
      },
      {
        image:router1
      },
      {
        heading: "Navigating Between Pages Using Link",
        code: `import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link> |  
    <Link to="/about">About</Link>
  </nav>
);

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default App;`,
        explanation: [
          "Link is used instead of <a> to prevent full page reloads.",
          "Navbar contains links to navigate between Home and About pages.",
          "Clicking a Link updates the URL while keeping the SPA behavior."
        ]
      },
      {
        heading: "Dynamic Routing with useParams",
        code: `import React from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
};

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/user/101">Go to User 101</Link> <br />
    <Link to="/user/202">Go to User 202</Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  </BrowserRouter>
);

export default App;`,
        explanation: [
          "useParams() extracts the dynamic id from the URL.",
          "Visiting /user/101 will display User ID: 101.",
          "The Home component contains links to dynamically navigate to different user pages."
        ]
      }
    ]
  };

  return (
    <div className='container'>
      <h1 className='title'><LuRoute />{data.topic}</h1>
      <hr />
      {data.sub_topics.map((ele, index) => (
        <section key={index} className='section'>
          {ele.heading && <h2>{ele.heading}</h2>}
          {ele.points && (
            <ul>
              {ele.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}
          {ele.code && <pre>{ele.code}</pre>}
          {ele.explanation && (
            <ul>
              {ele.explanation.map((exp, idx) => (
                <li key={idx}>{exp}</li>
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

export default Routing;