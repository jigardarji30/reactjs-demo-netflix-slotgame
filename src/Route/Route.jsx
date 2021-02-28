import React from "react";
import { Route,Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

const RouteDemo = () => {

    const Name = ()=>{
        return <h1>This is name page</h1>
    }

  return (
    <>
    <Navbar/>
    <Switch>

         <Route exact path='/about' component={About}/>
         <Route exact path='/contact' component={Contact}/>
         <Route exact path='/contact/name' component={Name}/>
         <Route component={Error}/>
{/* 
        <About/>
        <Contact/> */}
    </Switch>
    
    </>

  );

}

export default RouteDemo;