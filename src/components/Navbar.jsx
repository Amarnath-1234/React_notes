import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setShowOptions(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (e) => {
    if (!e.target.closest('.navbar') && menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  return (
    <nav className='navbar'>
      <div className="logo">
        <Link to="/">
          <img src="logo4.png" alt="Logo" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <li><Link to="/about" className='link'>About</Link></li>
        <li><Link to="/contact" className='link'>Contact</Link></li>
        <li><Link to="/login" className='link'>Login</Link></li>

        {/* Theme Toggle Button (Visible only in mobile view) */}
        <li className="theme-toggle-mobile">
          <button id="theme-button" onClick={() => setShowOptions(!showOptions)}>
            🌗 Theme
          </button>
          {showOptions && (
            <div className="theme-options">
              <button onClick={() => handleThemeChange("light")}>☀️ Light</button>
              <button onClick={() => handleThemeChange("dark")}>🌙 Dark</button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
