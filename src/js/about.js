import React, { Component, PropTypes } from 'react';

export default class About extends Component {

  render() {
    return (
      <div className='about-wrapper'>
        <div className='info-wrapper'>
          <div className='contact-wrapper'>
            <img src='./images/benbw4.jpg' alt='Photo of Benjamin Lee'/>
          </div>
          <p>
          Prior to code I was a blue collar worker getting by performing manual labor.
          Realizing that no matter where I went I always tried to solve problems with my mind rather than my body, I decided to learn how to program.
          Since acquiring this skill, which I've come to thoroughly enjoy, the tech world has become a place I want to spend my time and to which I also want to contribute my knowledge.
          </p>
        </div>
      </div>
    )
  }
}
