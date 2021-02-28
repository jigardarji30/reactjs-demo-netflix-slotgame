import React, { createContext, useEffect, useState } from "react";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

const ContextCom = () => {
    const [num,setNum] = useState(0);
    const [nums,setNums] = useState(0);

    useEffect(()=>{
        alert('clicked');
    },[num])
    
return (
<>
<button onClick={()=>{
    setNum(num+1);
}}>click {num}</button>
<button onClick={()=>{
    setNums(nums+1);
}}>click {nums}</button>
<FirstName.Provider value={"JD"}>
<LastName.Provider value={"D"}>
<ComA/> 
</LastName.Provider>
</FirstName.Provider>

</>
)
}

export default ContextCom;
export {FirstName,LastName};