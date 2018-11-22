import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import LabelSelect from './LabelSelect';

const propTypes = {
  addTodo: PropTypes.func.isRequired,
};


class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      inputLabel: 'General',
    };
    this.handleChangeVal = this.handleChangeVal.bind(this);
    this.handleChangeLabel = this.handleChangeLabel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeVal(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleChangeLabel(input) {
    this.setState({
      inputLabel: input,
    });
  }

  handleSubmit(e) {
    const { inputVal, inputLabel } = this.state;
    const { addTodo } = this.props;
    if (e.which === 13 && inputVal !== '') {
      addTodo(inputVal, inputLabel);
      this.setState({ inputVal: '', inputLabel: 'General' });
      // document.querySelector('#todoInput').value = '';
      this.input.value = '';
    }
  }

  render() {
    return (
      <div className="form">
        <LabelSelect onSelect={this.handleChangeLabel} />
        <input
          id="todoInput"
          type="text"
          onChange={this.handleChangeVal}
          placeholder="Insert your task here..."
          onKeyPress={this.handleSubmit}
          ref={(input) => { this.input = input; }}
        />
      </div>
    );
  }
}

TodoForm.propTypes = propTypes;

export default TodoForm;
