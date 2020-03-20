import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="log-container">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          Shop
        </NavLink>
        <NavLink className="option" to="/signin">
          Sign In
        </NavLink>
        <NavLink className="option" to="/contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
