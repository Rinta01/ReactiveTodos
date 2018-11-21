import React, { Component } from 'react';
import TodoForm from './TodoForm';
import * as apiCalls from './api';
import './App.css';
import TodoList from './TodoList';

class TodoTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    
    componentWillMount(){
        this.loadTodos();   
    }
    
    async addTodo(val, label){
        // console.log('here')
        console.log(label)
        let newTodo = await apiCalls.createTodo(val, label);
        this.setState({todos: [...this.state.todos, newTodo]})
    }
    
    async deleteTodo(id){
        await apiCalls.removeTodo(id);
        const todos = this.state.todos.filter(t => t._id !== id);
        this.setState({todos});
    }
    
    async toggleTodo(todo){
        let updatedTodo = await apiCalls.updateTodo(todo);
        console.log(updatedTodo)
        const todos = this.state.todos.map(t => 
            (t._id === updatedTodo._id) ? {...t, completed: !t.completed} : t)
            this.setState({todos})
        }
        
        async loadTodos(){
            let todos =  await apiCalls.loadTodos();
            this.setState({todos}) ;
        }
        
        render() {        
            return (
                <div>
                <TodoForm addTodo = {this.addTodo}/>
                <ul className="list">
                <TodoList
                todos = {this.state.todos}
                deleteTodo = {this.deleteTodo}
                toggleTodo = {this.toggleTodo}/>
                </ul>
                </div>
                );
            }
        }
        
        export default TodoTable;