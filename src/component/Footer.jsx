import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook">
            Facebook
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            Twitter
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
        <div className="contact-info">
          <p>Contact us: info@techstartup.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
