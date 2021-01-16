import React,{useState} from "react";

const HandlingEvents = ()=>{
    const purple = '#8e44ad';
    const [bg,setBg] = useState(purple);
    const [name,setName] = useState("click me");

    const bgChange = () => {
        let newBg = '#34405e';
        setBg(newBg);
        setName('ohh 😃');
    }

    const bgBack = () => {
        let newBg = purple;
        setBg(newBg);
        setName('Click me');
    }


    return(
        <>
        <div className="handling-div">
        <div style={{backgroundColor:bg, width: '100%',height: '100vh',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
            <button onClick={bgChange} onDoubleClick={bgBack} className="handling-button" style={{padding: '15px 20px',background: '#9b59b6',color:'white',border: '2px solid #ecf0f1',outline:'none',borderRadius:'5px',textTransform: 'uppercase',cursor: 'pointer'}}>{name}</button>

        </div>
        </div>
        </>

    )

}

export default HandlingEvents;