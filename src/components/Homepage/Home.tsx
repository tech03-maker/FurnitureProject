import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "../HeroFolder/Hero.css";
import { Hero } from "../HeroFolder/Hero";

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
                <Link
                  className={`nav-link ${
                    activeLink === "Home" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/Home"
                  onClick={() => handleNavLinkClick("Home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "Tables" ? "active" : ""
                  }`}
                  to="/tables"
                  onClick={() => handleNavLinkClick("Tables")}
                >
                  Tables
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "Chairs" ? "active" : ""
                  }`}
                  to="/chair"
                  onClick={() => handleNavLinkClick("Chairs")}
                >
                  Chairs
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "Dining" ? "active" : ""
                  }`}
                  to="/dining"
                  onClick={() => handleNavLinkClick("Dining")}
                >
                  Dining Sets
                </Link>
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
      <Hero />
    </div>
  );
}

export default Home;
