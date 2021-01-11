import React from 'react';
import ReactDOM from 'react-dom'
import Card from "./Card";
import './index.css';
import data from "./netflixData";
import googleData from "./googleData";


const App = () => {
    return (
        <div style={{ display: 'block', clear: 'both' }}>
            <h1 className="heading_style">List of top nexflix series in 2021</h1>


            {data.map((val) => {
                console.log(val);
                return (
                    <Card
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link} />

                );
            })}
        </div>
    )
}


export default App;




