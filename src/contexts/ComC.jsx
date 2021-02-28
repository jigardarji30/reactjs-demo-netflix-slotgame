import React, { useContext } from "react";
import { FirstName, LastName } from "./ContenxtCom";

const ComC = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (<h1>My name is {fname} {lname}</h1>)
// return (

//     // <FirstName.Consumer >
//     // {(fname)=>{
//     // return <h1>My name is {fname}</h1>
//     // }}
//     // </FirstName.Consumer>
// )
}

export default ComC;