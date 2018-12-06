import React, { Component } from 'react';
import TodoForm from './TodoForm';
import '../styles/App.css';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { getTodos, addTodo, removeTodo, updateTodo } from '../actions/actionCreators';
// import { Route } from "react-router-dom";

class TodoTable extends Component {
  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  componentDidMount() {
    this.props.getTodos();
  }

  async onDelete(id) {
    this.props.removeTodo(id);
  }

  async onToggle(todo) {
    this.props.updateTodo(todo);
  }

  async addTodo(val, label) {
    this.props.addTodo(val, label);
  }

  render() {
    const { todos } = this.props;
    console.log(todos);
    return (
      <div>
        {/* <Route path="/todos/new" component={ () => <TodoForm addTodo={this.addTodo} />} /> */}
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

function mapStateToProps(reduxState){
  console.log(reduxState);
  return {
    todos: reduxState.todos
  }
}

export default connect(mapStateToProps, { getTodos, addTodo, removeTodo, updateTodo })(TodoTable);