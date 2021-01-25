import React,{useState} from "react";
import './basicForm.css';

const BasicForm = ()=>{

    const [fullname, setFullName] = useState({
        fname:'',
        lname:'',
        email:'',
        phone:'',
        qua:''

    });
   

    const inputSubmit = (e) => {
        const {value,name} = e.target;

        setFullName((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }
        
        })
    }
  

    const onSubmit = () => {

    }
    
    return(
        <>
        <div className="basicform-div">
            <h1 className="basicform-h1">Hello {fullname.fname} {fullname.lname}</h1>
            <p>{fullname.email}</p>
            <p>{fullname.phone}</p>
            <p>{fullname.qua}</p>
            <input type="text" className="basicform-input" name="fname" onChange={inputSubmit} placeholder="Enter your name" value={fullname.fname}/>
            <input type="text" className="basicform-input" name="lname" onChange={inputSubmit} placeholder="Enter your last name" value={fullname.lname}/>
            <input type="email" className="basicform-input" name="email" onChange={inputSubmit} placeholder="Enter your email" value={fullname.email}/>
            <input type="number" className="basicform-input" name="phone" onChange={inputSubmit} placeholder="Enter your phone" value={fullname.phone}/>
            <input type="text" className="basicform-input" name="qua" onChange={inputSubmit} placeholder="Enter your qualification" value={fullname.qua}/>
            <button onClick={onSubmit} className="basicform-button">Click me</button>
        
        </div>
        </>

    )

}

export default BasicForm;