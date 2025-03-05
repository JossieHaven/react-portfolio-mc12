import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="https://github.com/JossieHaven" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/jossie-haven-6607191b6/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
