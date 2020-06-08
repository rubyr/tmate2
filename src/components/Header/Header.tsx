import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div className="nav-links">
        <NavLink exact to="/" activeClassName="nav-active">
          <h1>TMATE2</h1>
        </NavLink>
        <NavLink to="/stats" activeClassName="nav-active">
          <h3>STATS</h3>
        </NavLink>
        <NavLink to="/about" activeClassName="nav-active">
          <h3>ABOUT</h3>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
