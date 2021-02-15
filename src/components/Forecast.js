import React, { useState } from 'react';
import Conditions from "./Conditions.js";
import classes from './Forecast.module.css';


const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});

    const uriEncodedCity = encodeURIComponent(city);

    

    function getForecast(e) {
        e.preventDefault();

    // weather data fetch function will go here
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-key": "586cde8f2bmsh773806964ddeecbp183380jsn5c8b0fe47099",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	    }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
    })
    .catch(err => {
        console.error(err);
    });

   }
   return (
    // JSX code will go here    
    <div>
        <h2>Find Current Weather Conditions</h2>
        <div>
            {JSON.stringify(responseObj)}
        </div>
        <form onSubmit={getForecast}>
            <input
                type="text"
                placeholder="Enter City"
                maxLength="50"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={classes.textInput}
                />
            <label>
                <input
                    className={classes.Radio}
                    type="radio"
                    name="units"
                    checked={unit === "imperial"}
                    value="imperial"
                    onChange={(e) => setUnit(e.target.value)}
                    />
                Fahrenheit
            </label>
            <label>
                <input
                    className={classes.Radio}
                    ype="radio"
                    name="units"
                    checked={unit === "metric"}
                    value="metric"
                    onChange={(e) => setUnit(e.target.value)}
                    />
                Celcius
            </label>
            <button className={classes.Button} type="submit">Get Forecast</button>
        </form>
        <Conditions
            responseObj={responseObj}
            />
    </div>
   )
}
export default Forecast;

