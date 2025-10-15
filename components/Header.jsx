import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <div className="container header__container" >
          <nav className="header__nav">
            <Link to="/" className="header__logo" class="mx-auto bg-yellow">Chibaz Electricals</Link>
            <div className="nav_links">
              <NavLink to="/" className="nav_link">Home</NavLink>
              <NavLink to="/contact" className="nav_link">Contact</NavLink>
              <NavLink to="/about" className="nav_link">About</NavLink>
              <NavLink to="signup" className="nav_link">Sign Up</NavLink>
            </div>
          </nav>
        </div>
    </header>
  );
}