import React from "react";
import {Link } from "react-router-dom";
import "./index.scss";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
          <nav>
              <li><a href="#"><Link to="/terms">Terms and Conditios</Link></a></li>
              <li><a href="#"><Link to="/privacy">Privacy Policy</Link></a></li>
              <li><a href="#"><Link to="/contact">Contact Us</Link></a></li>
              <li><a href="#"><Link to="/search">Search</Link></a></li>
          </nav>
          <nav>
              <li><a href="#"><Link to="/follow">Follow us</Link></a></li>
              <li><a href="#"><Link to="/Facebook">Facebook</Link></a></li>
          </nav>
      </footer>
    </div>
  );
};

export default Footer;
