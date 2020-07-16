import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getHouses } from '../../redux/actionCreators';

class House extends Component {
  constructor() {
    super();

    this.state = {

    };
  };

  deleteHouse = (id) => {
    // console.log(id)
    axios
      .delete(`/api/houses/delete/${id}`)
      .then(() => {
        this.props.retrieve()
      })
  }

  render() {

    const { name, address, city, state, zip, id } = this.props

    return (
      <div className='houseHolder'>
        <div>
          <p>Property Name: {name}</p>
          <p>Address: {address}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
        </div>
        <div>
          <button onClick={() => this.deleteHouse(id)} >X</button>
        </div>
      </div>
    )
  };
};

export default connect(null, { getHouses })(House);