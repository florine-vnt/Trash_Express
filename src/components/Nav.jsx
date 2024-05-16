import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/disclaimer">Disclaimer</NavLink>
    </nav>
  );
}

export default Nav;
