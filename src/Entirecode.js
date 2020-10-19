import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import WeatherTemperature from "./WeatherTemperature.js";
import "./Entirecode.css";


export default function Entirecode(props) {
  let [city, setCity] = useState(props.city);
  let [displayCity, setdisplayCity] = useState(props.displayCity);
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function citySearched(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temp: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      date: response.data.dt * 1000,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setdisplayCity(`${city}`);
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  if (loaded) {
    return (
      <div className="Entirecode">
        <div className="container">

          <form className="text-form" onSubmit={handleSubmit}>
            <input
              type="search"
              className="text-input"
              placeholder="Enter a city"
              autoComplete="off"
              onChange={citySearched}
            />
            <input type="submit" value="search" />
          </form>
          

          <div className="summary">
            <h4>
              <span className="searchCity"> {displayCity}</span> <br />
              <span className="currentTime"><FormattedDate date={weather.date}/> </span>  <br />
              <span className="currentDescription">{weather.description}</span>
            </h4>
          </div>

          <h1>
            <div className="main_icon">
              <img
                className="MainIcon_Yes"
                src={weather.icon}
                alt=""
                width="40"
              />
            </div>
            <p className="maintemp">
              <em>
               <WeatherTemperature celsius={weather.temp} />
              </em>
            </p>
          </h1>

          <div className="misc">
            <h5>
              Humidity:{" "}
              <span className="currentHumidity">{weather.humidity}</span>%
              <br />
              Wind: <span className="currentWind">{weather.wind}</span>mph
              <br />
            </h5>
          </div>
          <br />
          <br />
          <footer>
            <div className="row"></div>
          </footer>
        </div>

        <p className="endLink">
          This project was created by
          <a
            href="https://www.linkedin.com/in/marludepierrelouis-b7936293/"
            id="mywebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            { } Marlude Pierre-Loius { }
          </a>
          and is open-sourced on { }
          <a
            href="https://github.com/livetostrive/datascience"
            id="myGitHub"
            target="_blank"
            rel="noopener noreferrer"
          > GitHub { }
          </a>
          and hosted on { }
          <a
            href="https://www.netlify.com/"
            id="Netlify"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify.
          </a>
        </p>
      </div>
    );
  } else {
    return (
      <form id="text-form" onSubmit={handleSubmit}>
        <input
          type="search"
          id="text-input"
          placeholder="Enter a city"
          autoComplete="off"
          onChange={citySearched}
        />
        <input type="submit" value="search" />
      </form>
    );
  }
}
