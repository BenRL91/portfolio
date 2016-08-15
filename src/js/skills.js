import React, { Component, PropTypes } from 'react';
import skills from './skillsData';

let that;
const COLORS = ['#e8623c', '#098aa4', '#82bebf'];
// const COLORS = ['grey', 'lightgrey', 'darkgrey']
export default class Skills extends Component {

constructor( ...args ){
  super( ...args );
  that = this;
  that.state = {
     loaded: false,
     sortedSkills: skills.sort(that.compare)
  }
}

compare( skill_one, skill_two ) {
 if ( skill_one.height > skill_two.height ) {
   return -1;
 }
 if ( skill_one.height < skill_two.height ) {
   return 1;
 }
 return 0;
}

 addBackgroundColor(skill){
   let x = that.state.sortedSkills.indexOf(skill);
   return COLORS[x % 3];
 }

 chartSkill( skill ){
   let x = 0;

   let splitSkill = skill.skill.split( ' ' );

   function oneLetterToALine( word ){
    return <span key={ ++x }>{ word }</span>
   }
   return (
     <div key = { skill.id }
          className={ `skill ${ skill.skill }` }
          style={ {
            height: that.state.loaded
                    ? `${skill.height}%`
                    : '0%',
            // backgroundColor: skill.id % 2 === 0 ? 'grey' : 'white'
            // backgroundColor: skill.backgroundColor
            backgroundColor: that.addBackgroundColor(skill)
          } }>
          { splitSkill.map( oneLetterToALine ) }
     </div>
   )
 }

 revealChart(){

   that.timeoutID = setTimeout( function(){

     that.setState( {
       loaded: true
     } )

   }, 500 )

 }

  componentDidMount(){
    that.revealChart();
  }

  render() {
    let { sortedSkills } = that.state;
    console.log('i am rendering')
    return (
      <div className='skills-wrapper'>
        <div className='skill-chart'>
          { sortedSkills.map( this.chartSkill ) }
        </div>
      </div>
    )
  }
}
