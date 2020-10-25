import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="col-2">
     <div className="card-text1"> {hours()}</div>
      <WeatherIcon code={props.data.weather[0].icon} />
     <div className="card-text1"> {temperature()}</div>
    </div>
  );
}