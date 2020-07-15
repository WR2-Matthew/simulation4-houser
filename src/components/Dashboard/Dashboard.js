import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { houses } from '../../redux/actionCreators';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {

    };
  };

  componentDidMount = () => {
    axios
      .get('/api/houses')
      .then(res => this.props.houses(res.data))
  }

  render() {

    return (
      <div className='dashboardHolder' >
        <div className='dashHeader' >
          <h1 className='dashH1' >DASHBOARD</h1>
          <Link to='/wizard'>
            <button className='linkHolder' >Add New Property</button>
          </Link>
        </div>
      </div>
    )
  };
};

function mapStateToProps(state) {
  return {
    houses: state.houses
  }
}

export default connect(mapStateToProps, { houses })(Dashboard);