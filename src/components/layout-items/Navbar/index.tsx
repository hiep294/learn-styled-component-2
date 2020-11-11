import React from "react";
import {
  Bars,
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
} from "./index.elements";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <img src={require("../../../images/logo.svg").default} alt="logo" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/" activeStyle={{}}>
          About
        </NavLink>
        <NavLink to="/" activeStyle={{}}>
          Services
        </NavLink>
        <NavLink to="/" activeStyle={{}}>
          Contact Us
        </NavLink>
        <NavLink to="/" activeStyle={{}}>
          Sign Up
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
