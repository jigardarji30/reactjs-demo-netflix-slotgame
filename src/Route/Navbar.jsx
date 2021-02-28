import React from "react";
import { NavLink } from "react-router-dom";
import "./RouteStyle.css";

const Navbar = () => {

  return (
      <>
      <NavLink exact activeClassName="active_class" to='/about'>About us</NavLink>
      <NavLink exact activeClassName="active_class" to='/contact'>Contact us</NavLink>
      {/* <a href="/about"></a>
      <a href="/contact"></a> */}
      </>
  );

}

export default Navbar;