import React from "react"

import sunny from "../assets/Sunny.svg"
import rainy from "../assets/Rainy.svg"
import cloudy from "../assets/Cloudy.svg"
import partlyCloudy from "../assets/PartlyCloudy.svg"

function WeatherCard(props) {
  let icon = sunny;

  if (props.data.forecast === "Rainy") {
    icon = rainy
  } else if (props.data.forecast === "Cloudy") {
    icon = cloudy
  } else if (props.data.forecast === "Partly cloudy") {
    icon = partlyCloudy
  } else {
    icon = sunny
  }

  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img-top" src={icon} alt="Card image cap" id="icon" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{props.data.city}</h3>
        <h5 className="card-text">{props.data.temperature}</h5>
        <h5 className="card-text">{props.data.forecast}</h5>
      </div>
    </div>
  );
}

module.exports = WeatherCard