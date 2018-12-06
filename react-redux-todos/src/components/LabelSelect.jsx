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
    this.selectLabel = this.selectLabel.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  selectLabel(event) {
    this.setState({
      value: event.target.innerText,
    },
    ({ onSelect } = this.props, { value } = this.state) => onSelect(value));
  }

  render() {
    const { value, dropdownOpen } = this.state;
    return (
      <Dropdown isOpen={dropdownOpen} size="lg" direction="down" toggle={this.toggle}>
        <DropdownToggle caret className="select">
          {value}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.selectLabel}>General</DropdownItem>
          <DropdownItem onClick={this.selectLabel}>Work</DropdownItem>
          <DropdownItem onClick={this.selectLabel}>Leisure</DropdownItem>
          <DropdownItem onClick={this.selectLabel}>Groceries</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
