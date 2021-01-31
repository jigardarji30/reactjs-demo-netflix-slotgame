import React,{useState} from "react";
import './todolist.css';

const ToDoList = ()=>{

   const [inputList,setinputList] = useState(''); 
   const [items,setItems] = useState([]); 

    const itenEvent = (e) => {
        console.log(e);
        setinputList(e.target.value);
    }

    const listOfItems = () =>{
        setItems((oldValue)=>{
            return [...oldValue,inputList];
        })

    }

    const deleteItems = (id) => {
setItems((oldItems)=>{
    return oldItems.filter((arr,index)=>{
return index !== id;
    })
})
    }

    
    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1 className="todo_h1">ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a Items" className="todo_input" onChange={itenEvent}/>
                <button className="todo_button" onClick={listOfItems}>+</button>
                <ol className="todo_ol">
                    {/* <li className="todo_li">{inputList}</li> */}

                    {items.map((itemVal,i)=>{
                        return <> 
                         <div className="todo_style">
                        <i className="fa fa-times" aria-hidden="true" onClick={()=>{
                            deleteItems(i)
                        }}/>
                        <li className="todo_li">{itemVal}</li>
                    </div>
                    </>;
                    })}

                    
                    
                </ol>
            </div>
        </div>
        </>

    )

}

export default ToDoList;