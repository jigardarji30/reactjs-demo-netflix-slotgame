import React,{useState} from "react";
import './counter.css';

let count = 0;
let dateTime;
let timeOnRefresh;

const Counter = ()=>{

    // const state = useState();
   const [count,setCount] = useState(0)
   const [time,setTime] = useState(dateTime);
  
const [timeOnTime, setTimeOnTime] = useState(timeOnRefresh)

const IncNum = () => {
    setCount(count+1);
}

const getTime = () => {
    const dateTime = new Date().toLocaleTimeString();
    setTime(dateTime);
}

const getTimeOnTime = () => {
    let timeOnRefresh = new Date().toLocaleTimeString();
    setTimeOnTime(timeOnRefresh);
    
}
setInterval(getTimeOnTime,1000);
    return(
        <>
        <div className="counter-div">
            <h1>{count}</h1>
            <button onClick={IncNum} className="counter-button">Click me</button>
            <h1>{time}</h1>
            <button onClick={getTime} className="counter-button">Get Time</button>

            <h1>{timeOnTime}</h1>
        </div>
        </>

    )

}

export default Counter;