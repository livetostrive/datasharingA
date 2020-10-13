import React, { useState } from "react";
import "./Entirecode.css";
import axios from "axios";

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
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
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
          <section className="iconSection">
            <a href="/" id="cel" className="notactive">
              <img
                id="CelPic"
                src="./celcius_on.jpg"
                alt="CelciusIconOff"
                width="35"
              />
            </a>
            <a href="/" id="fah" className="active">
              <img
                id="FahPic"
                src="fahrenheit_off.jpg"
                alt="FahrenheitIconOn"
                width="36"
              />
            </a>
          </section>
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
          <form className="current-form">
            <input type="submit" value="Current Location" />
          </form>
          <span className="recent">
            <h5>
              <em>
                <strong>Most Recent (Current Temp): </strong> <br />
                <span className="recentCity">Lauderhill, FL</span> &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="recentCityTemp">20°C</span>
                <br />
                <span className="recentCity">Washington, D.C</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="recentCityTemp">18°C</span>
                <br />
                <span className="recentCity">San Diego, CA</span> &nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="recentCityTemp">15°C</span>
                <br />
                <span className="recentCity">Tampa, FL</span> &nbsp;
                &nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="recentCityTemp">19°C</span>
              </em>
            </h5>
          </span>
          <div className="summary">
            <h4>
              <span className="searchCity"> {displayCity}</span> <br />
              <span className="currentTime"></span> {weather.date} <br />
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
                <span className="currentTemp">
                  {Math.round(weather.temp)}°C
                </span>
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
          <br />
          <footer>
            <div className="row"></div>
          </footer>

          <span className="weatherUpdate">Last Updated Date:</span>
          <span className="weatherUpdateDt">{weather.updateTime}</span>
        </div>

        <p className="endLink">
          This project was created by
          <a
            href="https://www.linkedin.com/in/marludepierrelouis-b7936293/"
            id="mywebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            Marlude Pierre-Loius
          </a>
          and is open-sourced on
          <a
            href="https://github.com/livetostrive/datascience"
            id="myGitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          and hosted on
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
