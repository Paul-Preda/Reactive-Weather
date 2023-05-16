import React from 'react';
import WeatherCard from './WeatherCard';
import cities from "../data"

function Location({ data, location }) {
  let cityData = cities.find((city) => city.city === location);

  if (!cityData) {
    return
  }

  return <WeatherCard data={cityData} />;
}

export default Location;
