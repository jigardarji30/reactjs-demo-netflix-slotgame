import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {

  return (
  <>
    <h1>404 Error page</h1>
    <p>Page not found</p>
    <NavLink to="/">Go Back</NavLink>
  </>
  ); 

}
 
export default Error;