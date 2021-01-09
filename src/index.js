import React from 'react';
import ReactDOM from 'react-dom'
import App from "./App";
import SlotM from "./SlotM";



const series = 'netflix';

ReactDOM.render(
    <>
        <App/> 
        <SlotM/>

    {/* {(series == 'netflix') ? 'Netflix' : 'Amazon'} */}
    </>
    ,document.getElementById('root'));