import './App.css';
import ForCastWeather from './components/forcastweather';
import CurrentWeather from './components/currentweather';

import axios from "axios";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
 
    const [city, setcity] = useState("");
    const [weatherData, setweatherData] = useState(null);
  
    const weatherDetail = (e) => {
      e.preventDefault();
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=4af925ee88cfd0aab4c5364a4982488e`
        )
        .then((response) => {
         
          setweatherData(response.data);
          
        })
        .catch((err) => {
          console.log("err", err);
        });
        setcity("")
    };
    return (
      <div className='mainforApp'>
        <form onSubmit={weatherDetail} className='formweather'>
        <TextField type="text"
            placeholder="City Name"
            required
            onChange={(e) => {
              setcity(e.target.value);
            }}
            value={city} id="outlined-basic" label="city"  variant="outlined" size="small" 
            sx={{
              input:{
                  color: 'red'
              },
              height:"40px"
          }}
      
            />
      
          {/* <input type="submit" value={"get weather"} /> */}
          <Button variant="outlined" type="submit" style={{height:"40px"}}>Check</Button>
        </form>
        {
          weatherData === null? null:(
            <>
            <CurrentWeather data={weatherData}/>
            <ForCastWeather data={weatherData}/>
            </>
          )
        }
      </div>
    );
}

export default App;
