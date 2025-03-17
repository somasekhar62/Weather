import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css"
import { red } from '@mui/material/colors';
export default function SearchBox({updateinfo}){
    let[city,setcity]=useState("");
    let[Error,SetError]=useState(false);
    const API_KEY="5e53bcd9f6ad20e80338df20d64d9d63";
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    let handleweather= async()=>{
        try{
       let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonreponse= await response.json();
       let result={
        city:jsonreponse.name,
        temp:jsonreponse.main.temp ,
        tempmin:jsonreponse.main.temp_min,
        tempmax:jsonreponse.main.temp_max,
        humidity:jsonreponse.main.humidity,
        feelslike:jsonreponse.main.feels_like,
        condition:jsonreponse.weather[0].description
    };
       console.log(result);
       return result;
  }catch(err){
            throw err;
        }   
};
let handleinput=(event)=>{
        setcity(event.target.value);
    }
    let handlesubmit=async(event)=>{
        try{
        event.preventDefault();
        setcity("")
       let newinfo= await handleweather();
       updateinfo(newinfo);
       SetError(false);
        }catch(err){
            SetError(true);
        }
    };
    return<>
    <div className="SearchBox">
     <h2> Search for City</h2>
     <form onSubmit={handlesubmit}>
     <TextField id="city" label="Search City" variant="outlined" value={city} onChange={handleinput}/>
     <br></br>
     <br></br>
     <Button variant="contained" type='submit'>Search</Button>
     </form>
     {Error && <p style={{color:"red"}}> NO CITY FOUND !</p>}
    </div>
    </>
}