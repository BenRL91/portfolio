import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render(){
    return (

        <nav>
          <img                           src='./images/favicon.png'/>
          {/*<div className='img-wrapper'><img  className='contact-icon' src='./images/github.png'/></div>*/}
          {/*<div className='img-wrapper'><img  className='contact-icon' src='./images/email.png'/></div>*/}
          {/*<div className='img-wrapper'><img  className='contact-icon' src='./images/phone.png'/></div>*/}
          <Link className='navlink' to='/'>Home</Link>
          <Link className='navlink' to='/about'>About</Link>
          <Link className='navlink' to='/portfolio'>Portfolio</Link>
          <Link className='navlink' to='/skills'>Skills</Link>
        </nav>

    )
  }
}
