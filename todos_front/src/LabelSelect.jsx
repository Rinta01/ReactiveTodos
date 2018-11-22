import React, { Component } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

export default class LabelSelect extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      value: 'General',
    };
    this.select = this.select.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  select(event) {
    this.setState({
      value: event.target.innerText,
    },
    ({ onSelect } = this.props, { value } = this.state) => onSelect(value));
  }

  render() {
    const { value, dropdownOpen } = this.state;
    const { select } = this.select;
    return (
      <Dropdown isOpen={dropdownOpen} size="lg" direction="down" toggle={this.toggle}>
        <DropdownToggle caret className="select">
          {value}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={select}>General</DropdownItem>
          <DropdownItem onClick={select}>Work</DropdownItem>
          <DropdownItem onClick={select}>Leisure</DropdownItem>
          <DropdownItem onClick={select}>Groceries</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
