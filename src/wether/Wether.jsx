import React, { useEffect } from "react";
import { useState } from "react";
import "./Wether.css";

const Wether = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState('Ahmedabad');
    
    useEffect(()=>{

        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=appid`;
            const response = await fetch(url);
            const resJSON = await response.json();
            console.log(resJSON);
            setCity(resJSON.main);
        }

        fetchApi();
       
    },[search]);

return (
<>
<div>
<div className="box">
<div className="inputData">
    <input type="search" className="inputFeild" onChange={(e)=>{
         setSearch(e.target.value);
    }}/>
</div>
</div>

{!city ? ( <h1>Data not found</h1>) : (
<div className="info">
    <h2 className="location">
        <i className="fas fa-street-view"></i>{search}
    </h2>
    <h1 className="temp">
{city.temp}* Cel
    </h1>
    <h3 className="tempmin_max">Min: {city.temp_min}* Cel | Max: {city.temp_max}* Cel</h3>
</div>) }



<div className="wavw-one"></div>
<div className="wavw-two"></div>
<div className="wavw-three"></div>
</div>
</>

);
}

export default Wether;
