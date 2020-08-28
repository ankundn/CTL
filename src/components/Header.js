import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <NavLink className="headername" exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink className="headername" activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink className="headername" activeClassName="active" to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}
export default Header;
