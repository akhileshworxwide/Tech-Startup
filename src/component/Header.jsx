import React, { useState } from "react";
import "../App.css";
import stantech from "../assets/stantech-ai.png";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon from react-icons

const Header = () => {
  const navigation = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className="header" role="banner">
      <div className="header-container">
        <div className="logo" onClick={() => navigation("/")}>
          <img src={stantech} alt="Tech Startup Logo" height={"50px"} />
          <div>Tech StartUp</div>
        </div>
        <nav className="nav nav-container" role="navigation">
          <span className="home" onClick={() => navigation("/about")}>
            About
          </span>
          <span className="about" onClick={() => navigation("/contact")}>
            Contact
          </span>
          <span className="contact" onClick={() => navigation("/blog")}>
            Blog
          </span>
        </nav>
        <div className="hamburger-icon" onClick={toggleDrawer}>
          <FaBars size={24} />
        </div>
      </div>
      {drawerOpen && (
        <div className="side-drawer">
          <span
            className="home"
            onClick={() => {
              navigation("/about");
              toggleDrawer();
            }}
          >
            About
          </span>
          <span
            className="about"
            onClick={() => {
              navigation("/contact");
              toggleDrawer();
            }}
          >
            Contact
          </span>
          <span
            className="contact"
            onClick={() => {
              navigation("/blog");
              toggleDrawer();
            }}
          >
            Blog
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;
