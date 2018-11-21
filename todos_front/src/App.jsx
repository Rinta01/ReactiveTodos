import React, { Component } from 'react';
import './App.css';
import TodoTable from './TodoTable';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBriefcase, faAppleAlt, faBook, faCannabis } from '@fortawesome/free-solid-svg-icons'

library.add(faBriefcase, faAppleAlt, faBook, faCannabis)

class App extends Component {
  render() {
    return (
      <div>
      <header>
      <h1>todo<span>list</span></h1>
      <h2>a simple todo list app built with <strong>node</strong> and <strong>ReactJS!</strong></h2>
      </header>
      <TodoTable/>
      </div>
      );
    }
  }
  
  export default App;
  