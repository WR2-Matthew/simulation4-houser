import React, { useState, useEffect } from 'react';
import './Wizard.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import routes from '../../routes';

//Using hooks when I hit cancel how do i 'setState'??

const Wizard = props => {

  function addHouse() {
    console.log('hit')
    const body = {
      // property,
      // address,
      // city,
      // state,
      // zip
    }
    // console.log(body)
    axios
      .post('/api/add/house', body)
      .then(() => props.history.push('/'))
  }

  return (
    <div className='wizardHolder'>
      <div className='wizardHeader' >
        <h1>Add New Listing</h1>
        <Link to='/' className='wizLink' >
          <button>Cancel</button>
        </Link>
      </div>

      <div>
        {routes}
      </div>

      <div>
        <Link to='wizard/step#1'>
          <button >Complete</button>
        </Link>
      </div>
    </div>
  )
};

export default Wizard;