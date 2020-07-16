import React, { useState, useEffect } from 'react';
import './Wizard.css';
import { Link } from 'react-router-dom';

//Using hooks when I hit cancel how do i 'setState'??

export default Wizard => {

  let [property, setProperty] = useState(''),
    [address, setAddress] = useState(''),
    [city, setCity] = useState(''),
    [state, setLocation] = useState(''),
    [zip, setZip] = useState(0)

  useEffect((prevProps, prevState) => {
    console.log(property)
  }, [property])

  return (
    <div className='wizardHolder'>
      <div className='wizardHeader' >
        <h1>Add New Listing</h1>
        <Link to='/' className='wizLink' >
          <button>Cancel</button>
        </Link>
      </div>

      <div className='wizInputsHolder'>
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
          <button onClick={() => this.addHouse()}>Complete</button>
        </div>
      </div>
    </div>
  )
};