import React, { Component } from 'react';
import TodoGroup from './TodoGroup';

class TodoList extends Component {

    organizeTodos(){
        const labels = Array.from(new Set(this.props.todos.map(t=> t.label)));
        return labels.map((l,i) => {
            return(<TodoGroup
                key={i} 
                label={l}
                todos = {this.props.todos.filter(t =>l === t.label)}
                onDelete={this.props.onDelete}
                onToggle={this.props.onToggle}/>)
            });
        }
        
        render() {
            return (
                <div className="todoList">
                {this.organizeTodos()}    
                </div>
                );
            }
            
        }
        export default TodoList;
        