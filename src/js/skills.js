import React, { Component, PropTypes } from 'react';

export default class Skills extends Component {

 chartSkill(skill){
   return (
     <div className='skill' style={`height: ${skill.height}`}></div>
   )
 }

  render() {
    return (
      <div className='skills-wrapper'>
        <div className='skillChart'>
          { SKILLS.map( this.chartSkill ) }
        </div>
      </div>
    )
  }
}
