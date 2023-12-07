import React, { useState } from "react";
import "./Home.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavLinkClick = (link: React.SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            Daemon<span>ex</span>
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon ">
              {/* <FontAwesomeIcon icon = {faBars} /> */}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "Home" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#"
                  onClick={() => handleNavLinkClick("Home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "Tables" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => handleNavLinkClick("Tables")}
                >
                  Tables
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "Chairs" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => handleNavLinkClick("Chairs")}
                >
                  Chairs
                </a>
              </li>

              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "Dining" ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => handleNavLinkClick("Dining")}
                >
                  Dining Sets
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <a href="#">
                <button type="button">Contact</button>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
