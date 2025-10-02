import React from "react";  
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg scrolled">
      <div className="container-fluid">

        {/* Left-side Logos */}
        <div className="navbar-logos">
          {/* KJEI Logo */}
          <a 
            href="https://www.kjei.edu.in/kjcoemr/"   
            className="logo-link kjei-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="images/main.png"   // ✅ updated filename
              className="kjei-logo" 
              alt="KJEI Logo"
            />
          </a>

          {/* Team Varcas Logo */}
          <a 
            href="/"   
            className="logo-link team-link"
          >
            <img 
              src="images/mb.png"   // ✅ updated filename
              className="team-logo" 
              alt="Team Varcas Logo"
            />
          </a>
        </div>

        {/* Navbar Toggle for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["/", "/about", "/sponsor", "/team", "/Gallery", "/contact"].map((path, i) => {
              const names = ["Home", "About", "Sponsor", "Team", "Gallery", "Join us"];
              return (
                <li className="nav-item" key={path}>
                  <Link
                    className={`nav-link ${location.pathname === path ? "active-link" : ""}`}
                    to={path}
                  >
                    {names[i]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
