import React, { Component } from 'react';
import './poster.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

export class Poster extends Component {
    constructor(props){
      super(props);
    }

    render() {
      var useApi = this.props.api;
      return (
      <div className='mdb-poster'>
        <li key={this.props.id} className='mdb-poster__posterCell'>
          <NavLink to={`/${useApi}/${this.props.id}`}>
            <img src={this.props.posterPath} key={this.props.id}></img>
          </NavLink>
        </li>
      </div>
      );
    }
}


