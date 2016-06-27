import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render(){
    return (

        <nav>
          <img src='./images/favicon.png'/>
          {/*<span>Benjamin Lee</span>*/}
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/portfolio'>Portfolio</Link>
          <Link to='/skills'>Skills</Link>
          {/*<Link to='/experience'>Experience</Link>*/}
          {/*<Link to='/contact'>Contact</Link>*/}
        </nav>

    )
  }
}
