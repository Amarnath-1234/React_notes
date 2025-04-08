import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About This Project</h2>
          <p>
            This React Notes Website is designed to help users learn and explore React concepts efficiently.
          </p>
        </div>
        

        <div className="footer-section links">
          <ul>
            <li><a href="/home/introduction">Introduction</a></li>
            <li><a href="/home/fragments">Fragments</a></li>
            <li><a href="/home/hooks">Hooks</a></li>
            <li><a href="/home/form">Form Handling</a></li>
          </ul>
        </div>
        <div className="footer-section links">
          <ul>
            <li><a href="/home/routing">Routing</a></li>
            <li><a href="/home/props">Props</a></li>
            <li><a href="/home/conditionalrendering">Conditional Rendering</a></li>  
            <li><a href="/home/advanceconcept">Advance Concepts</a></li>
            </ul>
        </div>
        <div className="footer-section ">
          <h2>Contact Us</h2>
          <p>Email: abcd@reactscript.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ReactScript | All Rights Reserved
      </div>
      
    </footer>
  );
};

export default Footer;
