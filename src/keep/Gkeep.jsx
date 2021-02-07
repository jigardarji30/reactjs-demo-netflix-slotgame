import React,{useState} from "react";
import "../keep/Keep.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Gkeep = ()=>{
    const [addItem,setAddItem] = useState([]);

    const addNote = (note) => {
        setAddItem((prevData)=>{
            return [...prevData,note]
        });
    }

    const onDelete = (id) => {
        setAddItem((oldval)=>{
            oldval.filter((currData,index)=>{
              return index !== id;
            })
        })
    }

return (
    <>
    <Header/>
    <CreateNote passNote={addNote}/>
    {/* <Note/> */}


{
((addItem.length != 0) ? addItem.map((val,index)=>{
    return <Note 
    key={index} 
    id={index} 
    title={val.title} 
    content={val.content}
    deleteItem={onDelete}
    />;
}) : '')}

    <Footer/>
    </>
);
    
}

export default Gkeep;