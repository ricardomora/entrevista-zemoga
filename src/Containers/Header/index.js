import React from "react";
import {Link } from "react-router-dom";
import Hero from "../../Components/Hero"
import "./index.scss";

const Header = () => {
  return (
    <div>
      <header className="header">
          <h2 className="title-header"><a href="#">Rule of Thumb</a></h2>
          <nav>
              <li><a href="#"><Link to="/trials">Past Trials</Link></a></li>
              <li><a href="#"><Link to="/how-it-work">How It Works</Link></a></li>
              <li><a href="#"><Link to="/login">Log In / Sign Up</Link></a></li>
              <li><a href="#"><Link to="/search">Search</Link></a></li>
          </nav>
      </header>
        <Hero />
    </div>
  );
};

export default Header;
