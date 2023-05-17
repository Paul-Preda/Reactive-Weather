import React, { useState } from 'react';
import cities from "./data.js";
import WeatherCard from "./components/WeatherCard.js";
import Location from "./components/Location.js";
import Form from "./components/Form.js"

function App() {
  let [location, setLocation] = useState("");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form location={location} setLocation={setLocation} />
      <div className='app'><Location location={location} /></div>
      <div className="app">
        {cities.map((city) => (
          <WeatherCard key={city.id} data={city} />
        ))}
      </div>
    </>
  );
}

module.exports = App;