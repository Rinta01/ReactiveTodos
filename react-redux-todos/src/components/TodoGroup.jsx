/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Label from './Label';
import Todo from './Todo';

class TodoGroup extends Component {
  createTodos({ todos } = this.props) {
    return todos.map(todo => (
      <Todo
        key={todo._id}
        {...todo}
        onDelete={this.props.onDelete.bind(this, todo._id)}
        onToggle={this.props.onToggle.bind(this, todo)}
      />
    ));
  }

  render() {
    return (
      <div>
        <Label name={this.props.label} />
        {this.createTodos()}
      </div>
    );
  }
}

export default TodoGroup;
