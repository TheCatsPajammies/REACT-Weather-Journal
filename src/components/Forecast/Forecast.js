import React, { useState } from 'react';
import Conditions from "../Conditions/Conditions.js";
import classes from './Forecast.module.css';


const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const uriEncodedCity = encodeURIComponent(city);

    

    function getForecast(e) {
        e.preventDefault();
        if (city.length === 0) {
            return setError(true);
        }

    // weather data fetch function will go here
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-key": process.env.REACT_APP_API_KEY,
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	    }
    })
    .then(response => response.json())
    .then(response => {
        setResponseObj(response)
        console.log(JSON.stringify(responseObj))
        if (response.cod !== 200) {
            throw new Error()
        }
    })
    .catch(err => {
        console.error(err);
            setError(true);
            setLoading(false);
            console.log(err.message);
    });

   }
   return (
    // JSX code will go here    
    <div>
        <h2>Find Current Weather Conditions</h2>
        {/*<div> // This is the original display of the actual object that's received when making the API call
            {JSON.stringify(responseObj)}
        </div>*/}
        <form onSubmit={getForecast}>
            <input
                type="text"
                placeholder="Enter City"
                maxLength="50"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={classes.TextInput}
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
                    type="radio"
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
            error={error} //new
            loading={loading} //new
            />
    </div>
   )
}
export default Forecast;

