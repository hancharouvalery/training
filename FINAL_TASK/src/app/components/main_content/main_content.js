import React, { Component } from 'react';
import './main_content.css';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Search from '../search/search';
import Links from '../links/links';
import Form from '../add_form/form';
import { PostersTape } from '../posters_tape/posters_tape';

class MainContent extends Component {
    constructor(props){
      super(props);
    }

    render() {
      var useApi= this.props.api;
      return (
      <div className='mdb-main-content'>
        <div className='mdb-main-content__head-content'>
          <Search/>
          <Links />
        </div>
        <Form />
        <PostersTape myMovies={this.props.myMovies} inputValue={this.props.inputValue} api={this.props.api} />
      </div>
      );
    }
}

export default MainContent;


