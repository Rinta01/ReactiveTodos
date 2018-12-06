import React from 'react';
import '../styles/App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase, faAppleAlt, faBook, faCannabis,
} from '@fortawesome/free-solid-svg-icons';
import TodoTable from '../containers/TodoTable';
import { Route, Redirect } from 'react-router-dom';

library.add(faBriefcase, faAppleAlt, faBook, faCannabis);

const App = () => (
  <div>
    <header>
      <h1>
  todo
        <span>list</span>
      </h1>
      <h2>
  a simple todo list app built with
        {' '}
        <strong>node</strong>
        {' '}
  and
        {' '}
        <strong>ReactJS!</strong>
      </h2>
    </header>
        <Route path="/todos" component={TodoTable} />
        <Route exact path="/" render={() => <Redirect to="/todos" />} />
  </div>
);

export default App;
