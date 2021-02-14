import React, { useState } from 'react';


const Forecast = () => {
    function getForecast() {
    // weather data fetch function will go here
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
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
        <button onClick={getForecast}>Get Forecast</button>
    </div>
   )
}
export default Forecast;

