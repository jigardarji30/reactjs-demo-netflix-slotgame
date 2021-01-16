import React,{useState} from "react";
import './basicForm.css';

const BasicForm = ()=>{

    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");

    const inputSubmit = (e) => {
        setName(e.target.value);
    }

    const onSubmit = () => {
        setFullName(name);
    }

    return(
        <>
        <div className="basicform-div">
            <h1 className="basicform-h1">Hello {fullName}</h1>
            <input type="text" className="basicform-input" onChange={inputSubmit} placeholder="Enter your name" value={name}/>
            <button onClick={onSubmit} className="basicform-button">Click me</button>
        
        </div>
        </>

    )

}

export default BasicForm;