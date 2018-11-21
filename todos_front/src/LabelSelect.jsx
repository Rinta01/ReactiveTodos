import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class LabelSelect extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      value: 'General'
    };
    this.select = this.select.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  select(event) {
    this.setState({
      value: event.target.innerText
    },
    () => this.props.onSelect(this.state.value));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} size="lg" direction="down" toggle={this.toggle}>
        <DropdownToggle caret className="select">
          {this.state.value}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.select}>General</DropdownItem>
          <DropdownItem onClick={this.select}>Work</DropdownItem>
          <DropdownItem onClick={this.select}>Leisure</DropdownItem>
          <DropdownItem onClick={this.select}>Groceries</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}