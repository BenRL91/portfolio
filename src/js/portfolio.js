import React, { Component, PropTypes } from 'react';
import  PROJECTS  from './projectData';

export default class Portfolio extends Component {

  constructor( ...args ) {
    super( ...args );
    this.state = {}
  }

  createProject( project ){
    let { title, image_url, alt_text, description, team, skillset } = project;
      return (
      <div  className='project-wrapper' key={ project.id }>
        <img src={ image_url } alt={ alt_text }/>
        <p className='one-third'> { description }</p>
        <div className='one-third'>
         <a href={ project.demo_url }>Demo</a>
         <a href={ project.github_url }>See the Code</a>
        </div>
        <ul className='left-list one-third'>
          { team.map( this.createList ) }
        </ul>
        <ul className='right-list one-third'>
          { skillset.map( this.createList ) }
        </ul>
      </div>
      )
  }
  createList( listItem, id, skillset ){

    return (
        <li key={ id }>
          { listItem }
        </li>

    )
  }

  render() {
    console.log( PROJECTS )
    return (
      <div className='overflow-wrapper'>
        <div className='portfolio-wrapper'>
            { PROJECTS.map( this.createProject.bind( this ) ) }
        </div>
      </div>
    )
  }
}
