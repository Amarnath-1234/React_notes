import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import "./firstpage.css"
import {motion, AnimatePresence } from 'framer-motion';
import useFirstPageHook from './customHooks/FirstPageHook';
import {Tooltip} from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const FirstPage = () => {
  const [activeId, setActiveId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [index,setIndex] = useState(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // const [buttonVisible,setButtonVisible] = useState(false)


  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Store user preference
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setButtonVisible((prev) => !prev);
  //   }, 5000); // Toggle every 5 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  const headings = [
    { id: 1, title: 'Introduction to React', content: 'React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.' },
    { id: 2, title: 'JSX in React', content: 'JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement().' },
    { id: 3, title: 'React Components', content: 'Components are the building blocks of a React application. They can be class-based or functional and allow you to split the UI into independent, reusable pieces.' },
  ];

  useFirstPageHook(() => {
    setActiveId(headings[currentIndex].id);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % headings.length);
  }, 4000);


  const images = [
    { image: 'https://www.icoderzsolutions.com/blog/wp-content/uploads/2024/05/Major-Advantages-of-React-JS.webp' },
    { image: 'https://www.icoderzsolutions.com/blog/wp-content/uploads/2024/05/React-JS-Use-Cases.webp' },
    // { image: 'https://miro.medium.com/v2/resize:fit:1200/1*Sd09cMNCbyj42bRUnCxdZA.png' },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length); 
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const navLinks = [
    {
      name: 'Components',
      description: 'Components are the fundamental building blocks in React. They allow developers to break down complex UIs into manageable, reusable pieces, promoting modularity and maintainability in application development.',
    },
    {
      name: 'JSX',
      description: 'JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code within React components, making the code more readable and easier to write.',
    },
    {
      name: 'Fragments',
      description: 'Fragments let you group multiple elements without adding extra nodes to the DOM. This is useful for returning multiple elements from a component without introducing unnecessary wrapper elements.',
    },
    {
      name: 'Form Handling',
      description: 'Form handling in React involves managing user inputs, form submissions, and validation. React provides controlled components to handle form data, allowing for fine-grained control over user interactions.',
    },
    {
      name: 'Props',
      description: 'Props, short for properties, are read-only attributes used to pass data from parent components to child components. They facilitate communication and data sharing between components in a React application.',
    },
    {
      name: 'Hooks',
      description: 'Hooks are functions that let you use state and other React features in functional components. They enable the use of lifecycle methods and state management without the need for class components.',
    },
    {
      name: 'useState',
      description: 'The useState Hook allows you to add state to functional components. It returns an array with the current state value and a function to update it, enabling dynamic and interactive UI elements.',
    },
    {
      name: 'useRef',
      description: 'The useRef Hook provides a way to access DOM nodes or persist values across renders without causing re-renders. It is commonly used to reference DOM elements directly or store mutable values.',
    },
    {
      name: 'Context API',
      description: 'The Context API enables the sharing of data across multiple components without passing props through every level of the component tree. It is useful for global data like themes or user authentication.',
    },
    {
      name: 'HOC',
      description: 'Higher-Order Components (HOCs) are functions that take a component and return a new component with enhanced capabilities. They are used for reusing component logic and adding cross-cutting concerns.',
    },
    {
      name: 'useMemo',
      description: 'The useMemo Hook memoizes the result of a computation, recomputing it only when its dependencies change. This optimization helps prevent unnecessary calculations and improves performance.',
    },
    {
      name: 'Routing',
      description: 'Routing in React involves managing navigation between different components or views. Libraries like React Router provide declarative routing solutions, allowing for dynamic and nested routes.',
    },
    {
      name: 'Axios',
      description: 'Axios is a promise-based HTTP client for making requests to servers. It simplifies tasks like fetching data, handling responses, and managing errors in React applications.',
    },
    {
      name: 'Redux',
      description: 'Redux is a state management library for JavaScript applications. It provides a centralized store for application state, enabling predictable state transitions and easier debugging.',
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // For screens larger than 1920px
      breakpoint: { max: 4000, min: 1920 },
      items: 1,
    },
    desktop: {
      // For screens between 1024px and 1920px
      breakpoint: { max: 1920, min: 1024 },
      items: 1,
    },
    tablet: {
      // For screens between 464px and 1024px
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      // For screens less than 464px
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  

  return (
    
    <div className='firstpage'>
        <div className="scrolling-navbar">
      <div className="menu">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href="#"
            data-tooltip-content={link.description}
            data-tooltip-id={`tooltip-${index}`}
          >
            {link.name}
          </a>
        ))}
      </div>
      {navLinks.map((link, index) => (
        <Tooltip
          key={index}
          id={`tooltip-${index}`}
          place="top"
          effect="solid"
          className="custom-tooltip"
        />
      ))}
    </div>
        
        <div className="textbox">
               <h4>Welcome to React Learning</h4>
               <h1>Build Interactive User Interfaces with Ease Using ReactJS</h1>

          <p>Discover the power of React and how it can help you create dynamic and responsive web applications efficiently.
          React's component-based architecture allows for reusable code, making development more streamlined and maintainable. Its virtual DOM ensures high performance by updating only the necessary parts of the user interface.</p>
          {isButtonVisible && (
        <button className="popup">
          <Link to="/home" className="btnlink">Explore More</Link>
        </button>
      )}    </div>

        <div className="gif1">
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*X_dgAtE9LaY4gjRC.gif" alt="" />
        </div>
        <div className="colorbox"></div>

        <div className="textbox2">
        {headings.map(({ id, title, content }) => (
        <div key={id} className="section">
          <h2
            onMouseEnter={() => setActiveId(id)}
            onMouseLeave={() => setActiveId(null)}
          >
            {title}
          </h2>
          <div className={`content-box ${activeId === id ? "show" : ""}`}>
            <div className="top-bar"></div>
            <p className="content">{content}</p>
            <div className="bottom-bar"></div>
          </div>
        </div>
      ))}
        </div>
        <div className="sliderbox">
        <div className="slider">
        <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        showDots={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((image, index) => (
          <div key={index} className="skillbox">
            <img src={image.image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
        <div className="slidertext">
        <h1> React's modular approach to UI development, performance, scalability, and adaptability has quickly become a go-to choice for web development.</h1>
        </div>
        </div>
        <div className="textbox3">
        <h1>Ready to Dive into React? Start Your Journey with Our Comprehensive Tutorials and Hands-On Projects!</h1>
        <button className="button-pulse">
          <Link to="/home" className="btnlink">Let's Code</Link>
        </button>
        </div>
        <div className="firstpage-footer">
        <div className="footer-content">
        <div className="footer-section about">
          <h2>About This Project</h2>
          <p>
            This React Notes Website is designed to help users learn and explore React concepts efficiently.
          </p>
        </div>
        <div className="footer-section ">
          <h2>Contact Us</h2>
          <p>Email: reactscript@gmail.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ReactScript | All Rights Reserved
      </div>
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  )
}

export default FirstPage
