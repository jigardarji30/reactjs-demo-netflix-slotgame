import React from 'react';
import Card from "./Card";
import './index.css';
import data from "./netflixData";
import googleData from "./googleData";
import Counter from './hooks/counter';
import HandlingEvents from './hooks/handlingEvents';
import BasicForm from "./form/basicForm";
import SlotM from "./SlotM";
import TodoList from "./todolist/todolist";
import Incdec from "./todolist/incdec";
import Google from "./GoogleProduct";

const series = 'netflix';


const App = () => {

  return (
    <div>

      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Card</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Slot Machine</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Counter</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">HandlingEvents</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#tabs-5" role="tab">BasicForm</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#tabs-6" role="tab">TodoList</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#tabs-7" role="tab">Inc Dec</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="tabs-1" role="tabpanel">
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
                <googleData/>
                <Google />

                 {(series === 'netflix') ? 'Netflix' : 'Amazon'}
          </div>
        </div>
        <div className="tab-pane" id="tabs-2" role="tabpanel">
          <div style={{ display: 'block', clear: 'both' }}>
            <SlotM />
          </div>
        </div>

        <div className="tab-pane" id="tabs-3" role="tabpanel">
          <div style={{ display: 'block', clear: 'both' }}>
            <h1 className="heading_style">Get Time</h1>

            <Counter />

          </div>
        </div>
        <div className="tab-pane" id="tabs-4" role="tabpanel">
          <div style={{ display: 'block', clear: 'both' }}>

            <HandlingEvents />

          </div>
        </div>
        <div className="tab-pane" id="tabs-5" role="tabpanel">
          <div style={{ display: 'block', clear: 'both' }}>

            <BasicForm />

          </div>
        </div>
        <div className="tab-pane" id="tabs-6" role="tabpanel">
          <div style={{ display: 'block', clear: 'both' }}>

            <TodoList />
          </div>
        </div>
        <div className="tab-pane" id="tabs-7" role="tabpanel">
          <div style={{ display: 'block', clear: 'both' }}>

            <Incdec />
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;




