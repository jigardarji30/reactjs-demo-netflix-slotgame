import React from 'react';
import ReactDOM from 'react-dom'
import App from "./App";
import Google from "./GoogleProduct";



const series = 'netflix';

ReactDOM.render(
    <>
        <App />
        {/* <Google /> */}

        {/* {(series == 'netflix') ? 'Netflix' : 'Amazon'} */}
    </>
    , document.getElementById('root'));