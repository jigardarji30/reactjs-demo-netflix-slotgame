import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosDemo = () => {
    
    const [num,setNum] = useState();
    const [name,setName] = useState();
    const [moves,setMoves] = useState();

    useEffect(()=>{

        const axiosValue = axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then((res)=>{

            setName(res.data.name);
            setMoves(res.data.moves.length);
        });
    })


return (
<>

<h1>Selected value is: {num}</h1>
<h1>Name is: {name}</h1>
<h1>Moves is: {moves}</h1>

<select name="" id="" onChange={(e)=>{
    setNum(e.target.value);
}}>
    <option value="1">1</option>
    <option value="25">25</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>
</>
)
}

export default AxiosDemo;