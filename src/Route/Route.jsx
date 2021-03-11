import React, { useState } from "react";
import { Redirect, Route,Switch, useHistory, useLocation, useParams } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";

const RouteDemo = () => {

  const searchBar = {
    width:'50%',
    height:'auto',
    margin:'0 auto',
    textAlign:'center'
  }

  const Sresult = (props) => {
    const img = `https://source.unsplash.com/400x300/?${props.name}`;
    return (
      <>
      <div>
        <img src={img} alt="demo"/>
      </div>
      </>
    );
  }


    const Name = ()=>{
      const location = useLocation();
      const history = useHistory();
        return( 
        <>
        <h1>This is name page</h1>
        {location.pathname}
        <button onClick={()=>history.goBack()}>Go Back</button>
        <button onClick={()=>history.goForward()}>Go Next</button>
        <button onClick={()=>history.push('/')}>Homepage</button>
        </>);
    }

    const User = ()=>{
      const {name} = useParams();
    
      return( 
      <>
      <h1>This is user {name} page</h1>
      </>);
    }

    const Search = ()=>{
    const [img,setImg] = useState('');
      return( 
      <>
      <div style={searchBar}>
     <input type="text" placeholder="search..." value={img} onChange={
       (e)=>{
         const data = e.target.value;
         setImg(data); 
       }
     }/>
     <Sresult name={img}/>
      </div>
      </>);
    }

  return (
    <>
    <Navbar/>
    <Switch>

         <Route exact path='/' component={About}/>
         <Route exact path='/search' component={Search}/>
         <Route exact path='/contact' render={()=> <Contact name="contact"/>}/>
         <Route exact path='/contact/name' component={Name}/>
         <Route exact path='/user/:name' component={User}/>
         {/* <Route component={Error}/> */}
         <Redirect to="/"/>
{/* 
        <About/>
        <Contact/> */}
    </Switch>
    
    </>

  );

}

export default RouteDemo;