import React,{useState} from "react";
import './todolist.css';

const ToDoList = ()=>{

   
    
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1 className="todo_h1">ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a Items" className="todo_input"/>
                <button className="todo_button">+</button>
                <ol className="todo_ol">
                    <li className="todo_li">Buy mango</li>
                </ol>
            </div>
        </div>
        </>

    )

}

export default ToDoList;