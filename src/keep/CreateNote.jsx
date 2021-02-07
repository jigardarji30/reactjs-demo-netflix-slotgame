import React,{useState} from "react";
import {Button} from "@material-ui/core";
import {Add} from "@material-ui/icons";

const CreateNote = (props)=>{

    const [note,setNote] = useState({
        title:'',
        content:''
    });

    const InputEvent = (e) => {

        const {value,name} = e.target;

        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            }
        })
    }

    const addSaveNote = () => {
props.passNote(note);        
    }

   

return (
    <>
<div className="main_note">
    <form action="">
        <input type="text" 
        name="title" 
        id="" 
        value={note.title} 
        onChange={InputEvent} 
        placeholder="Title" 
        autoComplete="off"/>
       
        <textarea 
        name="content" 
        id="" 
        cols="30" 
        rows="10" 
        value={note.content} 
        onChange={InputEvent}
        placeholder="keep note">
         </textarea>
        
<Button onClick={addSaveNote}>
    <Add className="plus_sign"/>
</Button>
    </form>
    </div>    
    </>
);
    
}

export default CreateNote;