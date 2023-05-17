import React, { useState } from 'react';

let Form = ({ location, setLocation }) => {
  let [typedLocation, setTypedLocation] = useState('');

  let inputChange = (e) => {
    setTypedLocation(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setLocation(typedLocation);
    setTypedLocation('');
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="city">
          City:
          <input type="text" value={typedLocation} onChange={inputChange} />
        </label>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

module.exports = Form;