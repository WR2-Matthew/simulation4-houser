import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { getHouses } from '../../redux/actionCreators';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {

    };
  };

  componentDidMount = () => {
    this.retrieveHouses()
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   const { houses } = this.props
  //   if (prevProps.houses !== houses) {
  //     this.retrieveHouses()
  //   }
  // }

  retrieveHouses = () => {
    axios
      .get('/api/houses')
      .then(res => this.props.getHouses(res.data))
  }

  render() {
    const { houses } = this.props;
    console.log(houses)


    const mapped = houses.map((e, i) => {
      return (
        <House key={i}
          name={e.prop_name}
          address={e.address}
          city={e.city}
          state={e.state}
          zip={e.zip}
          id={e.id}
          retrieveHouses={this.retrieveHouses}
        />
      )
    })


    return (
      <div className='dashboardHolder' >
        <div className='dashHeader' >
          <h1 className='dashH1' >DASHBOARD</h1>
          <Link to='/wizard'>
            <button className='linkHolder' >Add New Property</button>
          </Link>
        </div>
        {mapped}
      </div>
    )
  };
};

function mapStateToProps(state) {
  return {
    houses: state.houses
  }
}

export default connect(mapStateToProps, { getHouses })(Dashboard);