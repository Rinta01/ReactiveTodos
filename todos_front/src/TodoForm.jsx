import React, { Component } from 'react';
import './App.css';
import LabelSelect from './LabelSelect';

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: '',
      inputLabel: 'General'
    }
    this.handleChangeVal = this.handleChangeVal.bind(this);
    this.handleChangeLabel = this.handleChangeLabel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeVal(e){
    this.setState({
      inputVal: e.target.value,
    })
  }
  handleChangeLabel(input){
    this.setState({
      inputLabel: input
    })
  }
  handleSubmit(e){
    if(e.which === 13 && this.state.inputVal !== ''){
      this.props.addTodo(this.state.inputVal, this.state.inputLabel);
      this.setState({inputVal:'', inputLabel: 'General'});
      document.querySelector("#todoInput").value = '';
    }
  }
  render() {
    return (
      <div className="form">
      {/* <select onChange={this.handleChangeLabel}>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Leisure">Leisure</option>
        <option value="Groceries">Groceries</option>
      </select> */}
      <LabelSelect onSelect={this.handleChangeLabel}/>
      <input
      id="todoInput"
      type="text"
      onChange={this.handleChangeVal}
      placeholder="Insert your task here..."
      onKeyPress={this.handleSubmit}/>
      </div>
      );
    }
  }
  
  export default TodoForm;
  