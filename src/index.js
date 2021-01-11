import React from 'react';
import ReactDOM from 'react-dom'
import App from "./App";
import SlotM from "./SlotM";
import Google from "./GoogleProduct";



const series = 'netflix';

ReactDOM.render(
    <>
        <App />
        {/* <Google /> */}
        <SlotM />

        {/* {(series == 'netflix') ? 'Netflix' : 'Amazon'} */}
    </>
    , document.getElementById('root'));