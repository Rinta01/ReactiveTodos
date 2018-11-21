import React, { Component } from 'react';
import Todo from './Todo';
import Label from "./Label";

class TodoList extends Component {
    
    render() {
        return (
            <div>
            {this.organizeTodos()}    
            </div>
            );
        }
        
        organizeTodos(){
            const labels = Array.from(new Set(this.props.todos.map(t=> t.label)));
            const allItems = [];
            labels.forEach((l,i) => {
                allItems.push(<Label key={i} name={l}/>);
                this.props.todos.forEach(t=>{
                    if(l === t.label)
                    allItems.push(this.createTodo(t))
                });
                });
            return allItems;            
        }
        
        createTodo(todo){
            return(<Todo 
                key={todo._id} {...todo}
                onDelete = {this.props.deleteTodo.bind(this,todo._id)}
                onToggle = {this.props.toggleTodo.bind(this,todo)}/>)
            }
            
        }
        export default TodoList;
        