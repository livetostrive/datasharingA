import React from "react";
export default function FormattedDate(timestamp) {
        let date = new Date(timestamp);

        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let day = days[date.getDay()];
        return `${day} ${formatHours(timestamp)}`;
      }
      //////////////////////
      function formatHours(timestamp) {
        let date = new Date(timestamp);
        let hours = date.getHours();
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
                  hours = hours;
                } else {
                  hours = date.getHours();
                }
              }
            }
          }
        }

        let minutes = date.getMinutes();
        if (minutes < 10) {
          minutes = `0${minutes}`;
        }

        let Time = date.getHours();
        if (Time >= 12) {
          Time = "PM";
        } else {
          Time = "AM";
        }

        return `${hours}:${minutes} ${Time} `;
      }