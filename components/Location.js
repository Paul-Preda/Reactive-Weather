import React from 'react';
import WeatherCard from './WeatherCard';
import cities from "../data"

function Location({ location }) {
  let cityData = cities.find((city) => city.city === location);

  if (!cityData) {
    return <p>Location not found</p>;
  }

  return <WeatherCard data={cityData} />;
}

module.exports = Location;