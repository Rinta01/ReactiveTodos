import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBriefcase, faAppleAlt, faBook, faCannabis,
} from '@fortawesome/free-solid-svg-icons';
import TodoTable from './TodoTable';

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
    <TodoTable />
  </div>
);

export default App;
