import React from "react";
import { Navlink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar">
      <div>
        <h1>Je suis la navbar</h1>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/disclaimer">Disclaimer</Navlink>
      </div>
    </nav>
  );
}

export default Nav;
