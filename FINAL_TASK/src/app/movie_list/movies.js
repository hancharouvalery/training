import React, { Component } from 'react';
import './movies.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Search from '../search/search';
import Links from '../links/links';
import Form from '../add_form/form';

class Movies extends Component {
    constructor(props){
      super(props);
    }
    render() {
      var useApi= this.props.api;
      return (
      <div className='mdb-movies'>
        <div className='mdb-movies__head-content'>
          <Search onSignUp={this.props.onSignUp} api={this.props.api}/>
          <Links updateFormDisplay={this.props.formDisplay}/>
        </div>
        <Form status={this.props.display} updateFormDisplay={this.props.formDisplay}/>
        <div className='mdb-movies__container'>
          {
            this.props.myMovies.map(function(item){
              return (
                <li key={item.id} className='mdb-movies__movieCell'>
                  <NavLink to={`/${useApi}/${item.id}`}>
                    <img src={item.poster_path} key={item.id}></img>
                  </NavLink>
                </li>
              );
            })
          }
        </div>
      </div>
      );
    }
}

export default Movies;
