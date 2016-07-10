import React, { Component, PropTypes } from 'react';

export default class Contact extends Component {

  render() {
    return (
      <div className='contacts-wrapper'>
        <div className='contacts-border'>
          <div className='github-contact'>
            <a href= 'http://www.github.com/BenRL91'>Link to Github</a>
          </div>
          <div className='phone-contact'>
            <span>862-432-6657</span>
          </div>
          <div className='email-contact'>
            <span>benlee.eelned@gmail.com</span>
          </div>
          </div>
        </div>
    )
  }
}
