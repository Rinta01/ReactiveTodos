/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string.isRequired,
};

export default class Label extends Component {
  loadIcon({ name } = this.props) {
    switch (name) {
      case 'General':
        return (<FontAwesomeIcon className="logo" icon="book" />);
      case 'Work':
        return (<FontAwesomeIcon className="logo" icon="briefcase" />);
      case 'Leisure':
        return (<FontAwesomeIcon className="logo" icon="cannabis" />);
      case 'Groceries':
        return (<FontAwesomeIcon className="logo" icon="apple-alt" />);
      default:
        return (<FontAwesomeIcon className="logo" icon="book" />);
    }
  }

  render() {
    const { name } = this.props;

    return (
      <div className="task label">
        <strong>{name}</strong>
        {' '}
        {this.loadIcon()}
      </div>
    );
  }
}

Label.propTypes = propTypes;
