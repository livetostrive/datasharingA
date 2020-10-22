import React, { useState } from "react";
import fahrenheit_off from "./fahrenheit_off.jpg";
import celcius_on from "./celcius_on.jpg";
import fahrenheit_on from "./fahrenheit_on.jpg";
import celcius_off from "./celcius_off.jpg";


export default function WeatherTemperature(props) {
  
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="currentTemp"> {props.celsius}°C </span>
                
         <section className="iconSection">
            <a href="/" onClick={showFahrenheit} id="cel" className="active">
            <img className="CelPic"
                src={celcius_on}
                alt="CelciusIconOff"
                width="35" />
            </a>
            <a href="/" onClick={showCelsius}  id="fah" className="notactive">
              <img
                className="FahPic"
                src={fahrenheit_off}
                alt="FahrenheitIconOn"
                width="36"
              />
            </a>
          </section>
      </div>
    );
  } else {
    return (
       <div className="WeatherTemperature">
        <span className="currentTemp"> {Math.round((props.celsius * 9) / 5 + 32)}°F </span>
                
         <section className="iconSection">
            <a href="/" onClick={showFahrenheit} id="cel" className="notactive">
              <img className="CelPic"
                src={celcius_off}
                alt="CelciusIconOn"
                width="35" />
            </a>
            <a href="/" onClick={showCelsius} id="fah" className="active">
              <img
              className="FahPic"
                src={fahrenheit_on}
                alt="FahrenheitIconOff"
                width="36"
              />
            </a>
          </section>
      </div>
    );
  }
}