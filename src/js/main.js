import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Navigation from './navigation';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Skills from './skills';
import Contact from './contact';

render((
  <Router history={hashHistory}>
      <Route   path='/'          component={ Navigation }>
        <IndexRoute              component={ Home }/>
        <Route path='/about'     component={ About }/>
        <Route path='/portfolio' component={ Portfolio }/>
        <Route path='/skills'    component={ Skills }/>
        <Route path='/contact'   component={ Contact }/>
      </Route>
  </Router>
), document.querySelector('.app'));
