import React, { Component } from 'react';
import './links.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

class Links extends Component {
    constructor(props) {
      super(props);
      this.click = this.click.bind(this);
    }
    click() {
      this.props.updateOpenForm('block');
    }
    render() {
    return (
    <div className='mdb-links'>
      <ul className='mdb-links__container'>
        <li className={this.props.removeLink || 'mdb-links__header-link'} onClick={this.click}>Add Movie</li>
        <NavLink to={'/about'}><li className='mdb-links__header-link-border'>About</li></NavLink>
      </ul>
    </div>
    );
  }
}

export default Links;

