import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StepOne = props => {

  let [property, setProperty] = useState(''),
    [address, setAddress] = useState(''),
    [city, setCity] = useState(''),
    [state, setLocation] = useState(''),
    [zip, setZip] = useState(0)

  useEffect((prevProps, prevState) => {
    console.log(property)
  }, [property])

  return (
    <div>
      <div>
        <label>Property Name</label>
        <input value={property} onChange={(e) => setProperty(e.target.value)} />

        <label>Address</label>
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>

      <div>
        <label>City</label>
        <input value={city} onChange={(e) => setCity(e.target.value)} />

        <label>State</label>
        <input value={state} onChange={(e) => setLocation(e.target.value)} />

        <label>Zip</label>
        <input value={zip} onChange={(e) => setZip(e.target.value)} />
      </div>

      <div>
        <Link to='/wizard/step#2' >
          <button>Next Step</button>
        </Link>
      </div>
    </div>
  )
};

export default StepOne;