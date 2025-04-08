import React from 'react';
import { SiPrivateinternetaccess } from "react-icons/si";
import privatee from "../../../assets/private.webp"
import { RxDoubleArrowUp } from 'react-icons/rx';

const PrivateRouting = ({scrollToTop}) => {
  const data = {
    topic: "Private Routing in React",
    sub_topics: [
      {
        heading: "What is Private Routing?",
        points: [
          "Private Routing restricts access to certain routes based on authentication.",
          "It ensures only authorized users can access specific pages.",
          "Useful for features like user dashboards, admin panels, and profile pages."
        ]
      },
      {
        heading: "How Private Routes Work?",
        points: [
          "Private routes check authentication before rendering a component.",
          "If the user is authenticated, the component is displayed; otherwise, they are redirected.",
          "Commonly used with React Router and authentication mechanisms."
        ],
        code: `import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;`
      },
      {
          image:privatee
      },
      {
        heading: "Implementing Private Routes",
        points: [
          "Wrap protected components with a PrivateRoute component.",
          "Use authentication state to determine if access is allowed.",
          "Redirect unauthorized users to the login page."
        ],
        code: `import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

const PrivateRoute = ({ isAuthenticated }) => 
  isAuthenticated ? <Outlet /> : <Navigate to="/login" />;

const App = () => {
  const isAuthenticated = false; // Change to true when logged in

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
`
      },
      {
        heading: "Benefits of Private Routing",
        points: [
          "Enhances security by preventing unauthorized access.",
          "Improves user experience by directing users appropriately.",
          "Essential for applications with authentication-based content."
        ]
      }
    ]
  };

  return (
    <div className='container'>
      <h1 className='title'><SiPrivateinternetaccess />      {data.topic}</h1>
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
          <center>{ele.image && <img className='advimg' src={ele.image} alt='' />}</center>
        </section>
      ))}
      <button className="scroll-to-top" onClick={scrollToTop}><RxDoubleArrowUp /></button>
    </div>
  );
};

export default PrivateRouting;