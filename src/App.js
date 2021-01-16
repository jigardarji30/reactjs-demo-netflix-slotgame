import React from 'react';
import ReactDOM from 'react-dom'
import Card from "./Card";
import './index.css';
import data from "./netflixData";
import googleData from "./googleData";
import Counter from './hooks/counter';
import HandlingEvents from './hooks/handlingEvents';
import BasicForm from "./form/basicForm";


const App = () => {

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }

    return (
        <div>

<div className="tab">
  <button className="tablinks" onClick={openCity('London')}>London</button>
  <button className="tablinks" onClick={openCity('Paris')}>Paris</button>
  <button className="tablinks" onClick={openCity('Tokyo')}>Tokyo</button>
</div>

<div id="London" className="tabcontent">
  <h3>London</h3>
  <p>London is the capital city of England.</p>
</div>

<div id="Paris" className="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" className="tabcontent">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>


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
        <div style={{ display: 'block', clear: 'both' }}>
            <h1 className="heading_style">Get Time</h1>

            <Counter/>
           
        </div>
        <div style={{ display: 'block', clear: 'both' }}>

            <HandlingEvents/>
           
        </div>
        <div style={{ display: 'block', clear: 'both' }}>

            <BasicForm/>
           
        </div>

        
        </div>
    )
}


export default App;




