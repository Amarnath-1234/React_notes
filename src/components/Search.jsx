import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Search.css";
import { ImCross } from "react-icons/im";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const pages = [
    "",
    "component",
    "conditional",
    "features",
    "gettingstarted",
    "jsx",
    "formhandling",
    "fragments",
    "props",
    "hooks",
    "usestate",
    "forwardref",
    "usecallback",
    "usecontext",
    "useeffect",
    "usememo",
    "usenavigate",
    "usereducer",
    "useref",
    "advanceconcept",
    "axios",
    "hoc",
    "privaterouting",
    "reactmemo",
    "routing"
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toUpperCase());
  };

  const handleClick = () => {
    setSearchTerm("");
    setShowPopup(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showPopup && !event.target.closest(".search-popup-content")) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showPopup]);

  return (
    <div className="search-container">
      <button className="search-button" onClick={() => setShowPopup(true)}>
        Search
      </button>
      {showPopup && (
        <div className="search-popup">
          <div className="search-popup-content">
            <button className="close-button" onClick={() => setShowPopup(false)}>
              <ImCross />
            </button>
            <p>Find the Content</p>
            <input
              type="text"
              id="search"
              className="search-bar"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm && (
              <ul id="list" className="search-list">
                {pages
                  .filter((page) => page.toUpperCase().includes(searchTerm))
                  .map((page, index) => (
                    <li key={index} className="search-item">
                      <Link to={`${page.toLowerCase().replace(/ /g, "-")}`} onClick={handleClick}>
                        {page}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;