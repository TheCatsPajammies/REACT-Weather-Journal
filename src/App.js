import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast.js";

function App(props) {
 return (
   <div className="App">
     <header className="App-header">
       <h1>React Weather App</h1>
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       Page created by Paul Thompson
     </footer>
   </div>
 );
}
export default App;
