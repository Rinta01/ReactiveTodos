/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

const Todo = ({
  name, completed, onDelete, onToggle,
}) => (
  <li
    className={`task ${completed ? 'done' : 'none'}`}
    onClick={onToggle}
  >
    <span>
      {name}
    </span>
    <span
      onClick={(e) => {
        e.stopPropagation();
        onDelete();
      }}
      role="presentation"
    >
X

    </span>
  </li>
);

Todo.propTypes = propTypes;

export default Todo;
