/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import TodoForm from './TodoForm';
import * as apiCalls from './api';
import './App.css';
import TodoList from './TodoList';

class TodoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  componentWillMount() {
    this.loadTodos();
  }

  async onDelete(id, { todos } = this.state) {
    await apiCalls.removeTodo(id);
    const updatedTodos = todos.filter(t => t._id !== id);
    this.setState({ todos: updatedTodos });
  }

  async onToggle(todo, { todos } = this.state) {
    const updatedTodo = await apiCalls.updateTodo(todo);
    // eslint-disable-next-line max-len
    const updatedTodos = todos.map(t => ((t._id === updatedTodo._id) ? { ...t, completed: !t.completed } : t));
    this.setState({ todos: updatedTodos });
  }

  async addTodo(val, label, { todos } = this.state) {
    const newTodo = await apiCalls.createTodo(val, label);
    this.setState({ todos: [...todos, newTodo] });
  }

  async loadTodos() {
    const todos = await apiCalls.loadTodos();
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <ul className="list">
          <TodoList
            todos={todos}
            onDelete={this.onDelete}
            onToggle={this.onToggle}
          />
        </ul>
      </div>
    );
  }
}

export default TodoTable;
