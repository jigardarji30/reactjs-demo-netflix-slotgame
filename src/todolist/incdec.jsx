import React,{useState} from "react";
import './incdec.css';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const IncDec = ()=>{

    const [num,setNum] = useState(0);

    const IncNum = () => {
        setNum(num + 1);
    }

    const DecNum = () => {
        if(num > 0){
            setNum(num - 1);
        }

    }

    return(
        <>
        <div className="inc_main_div">
            <div className="inc_center_div">
                <h1 className="inc_h1">{num}</h1>
                <div className="inc_div">

                <Tooltip title="Add" aria-label="add">
                <AddIcon  onClick={IncNum} className="btn_inc" style={{ fontSize: 55 }} />
                </Tooltip>
                

                <Tooltip title="Delete"  aria-label="delete">
                <DeleteIcon onClick={DecNum}  className="btn_dec" style={{ fontSize: 55 }} />
                </Tooltip>
                
              
               
                    {/* <button onClick={IncNum} className="btn_inc">  Increment</button> */}
                    {/* <button onClick={DecNum} className="btn_dec"> Decrement</button> */}
                </div>
            </div>
        </div>
        </>

    )

}

export default IncDec;