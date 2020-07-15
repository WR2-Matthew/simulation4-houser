import React, { Component } from 'react';
import './Wizard.css';
import { Link } from 'react-router-dom';

class Wizard extends Component {
  constructor() {
    super();

    this.state = {
      property: '',
      address: '',
      city: '',
      state: '',
      zip: null
    };
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    const { property, address, city, state, zip } = this.state;
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
            <input name='property' value={property} onChange={(e) => this.handleChange(e)} />

            <label>Address</label>
            <input name='address' value={address} onChange={(e) => this.handleChange(e)} />
          </div>

          <div>
            <label>City</label>
            <input name='city' value={city} onChange={(e) => this.handleChange(e)} />

            <label>State</label>
            <input name='state' value={state} onChange={(e) => this.handleChange(e)} />

            <label>Zip</label>
            <input name='zip' value={zip} onChange={(e) => this.handleChange(e)} />
          </div>
        </div>
      </div>
    )
  };
};

export default Wizard;