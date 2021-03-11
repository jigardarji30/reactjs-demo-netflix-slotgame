import React from "react";
import { NavLink } from "react-router-dom";
import "./RouteStyle.css";

const Navbar = () => {

  return (
      <>
      <NavLink exact activeClassName="active_class" to='/'>About us</NavLink>
      <NavLink exact activeClassName="active_class" to='/search'>Search</NavLink>
      <NavLink exact activeClassName="active_class" to='/contact'>Contact us</NavLink>
      <NavLink exact activeClassName="active_class" to='/contact/name'>ContactName</NavLink>
      <NavLink exact activeClassName="active_class" to='/user/name'>User</NavLink>
      
      {/* <a href="/about"></a>
      <a href="/contact"></a> */}
      </>
  );

}

export default Navbar;