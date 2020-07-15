import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  // constructor() {
  //   super();

  //   this.state = {

  //   };
  // };

  render() {

    return (
      <div className='headerHolder' >
        <div className='headerInfo' >
          <img className='headerImg' alt='home' />
          <h1 className='houser' >Houser</h1>
        </div>
      </div>
    )
  };
};

export default Header;