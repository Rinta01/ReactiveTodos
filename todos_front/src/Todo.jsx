import React from 'react';
import './App.css';

const Todo = ({name, completed, onDelete, onToggle}) => (
    <li 
    className={`task ${completed? 'done': 'none'}`}
    onClick={onToggle}>
      <span>
      {name}
      </span>
      <span onClick={(e)=>{
          e.stopPropagation();
          onDelete()}}>X</span>
    </li>
    )
    
    export default Todo;
    