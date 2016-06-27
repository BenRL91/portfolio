import React, { Component } from 'react';
import Navbar from './navbar';

export default class Home extends Component {
  render(){
    return (
      <div className='home-wrapper'>
        <Navbar/>
        {this.props.children}
      </div>
    )
  }
}
