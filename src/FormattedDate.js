import React from "react";

export default function FormattedDate(props) {
  
  let sevendays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = sevendays[props.date.getDay()];
  
  let hours = props.date.getHours();
  if (hours === 0) {
    hours = 12;
  } else {
    if (hours > 12 && hours - 12 < 10) {
      hours = `0${hours - 12}`;
    } else {
      if (hours > 12 && hours - 12 >= 10) {
        hours = hours - 12;
      } else {
        if (hours < 12 && hours < 10) {
          hours = `0${hours}`;
        } else {
          if (hours < 12 && hours >= 10) {
            props.date.getHours();
          }
        }
      }
    }
  }
        let minutes = props.date.getMinutes();
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }

        let Time = props.date.getHours();
        if (Time >= 12) {
          Time = "PM";
        } else {
          Time = "AM";
        }

        return <div>{day} {hours}:{minutes} {Time} </div>;
      }