import React, { Component } from 'react';
import '../styles/App.css';
import PropTypes from 'prop-types';
import LabelSelect from '../components/LabelSelect';
import { withRouter } from 'react-router-dom';

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
      this.setState({ inputVal: '' , inputLabel });
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
          // onClick={() => this.props.history.push('todos/new')}
          placeholder="Insert your task here..."
          onKeyPress={this.handleSubmit}
          ref={(input) => { this.input = input; }}
        />
      </div>
    );
  }
}

TodoForm.propTypes = propTypes;

export default withRouter(TodoForm);
