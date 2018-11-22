import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoGroup from './TodoGroup';

const propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

class TodoList extends Component {
  organizeTodos() {
    const { todos, onDelete, onToggle } = this.props;
    const labels = Array.from(new Set(todos.map(t => t.label)));
    return labels.map((l, i) => (
      <TodoGroup
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        label={l}
        todos={todos.filter(t => l === t.label)}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    ));
  }

  render() {
    return (
      <div className="todoList">
        {this.organizeTodos()}
      </div>
    );
  }
}

TodoList.propTypes = propTypes;

export default TodoList;
