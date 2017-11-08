import React, { Component } from 'react';
import './navigation.css';
import menu from '../../img/menu.png';
import movies from '../../img/movies.png';
import tvShows from '../../img/tv_shows.png';
import library from '../../img/library.png';
import support from '../../img/support.png';
import logo from '../../img/logo.png';

class NavigationBar extends Component {
    constructor(props) {
      super(props);
      this.state = {class: 'mdb-page-navigation__nav-links'};
      this.press = this.press.bind(this);
    }

    press(){
      let className = this.state.class === 'mdb-page-navigation__nav-links'
      ?'mdb-page-navigation__nav-links mdb-page-navigation__nav-links_hide':
      'mdb-page-navigation__nav-links';
      this.setState({class: className});
    }
    render() {
      return (
      <div className='mdb-page-navigation'>
        <div className='mdb-page-navigation__pseudo-container'>
          <div className='mdb-page-navigation__pseudo-bar'></div>
          <div className={this.state.class}></div>
        </div>
        <div className='mdb-page-navigation__container'>
          <div className='mdb-page-navigation__nav-bar'>
            <img className='mdb-page-navigation__nav-bar-icons-menu' onClick={this.press} src={menu}></img>
            <img className='mdb-page-navigation__nav-bar-icons' src={movies}></img>
            <img className='mdb-page-navigation__nav-bar-icons' src={tvShows}></img>
            <img className='mdb-page-navigation__nav-bar-icons' src={library}></img>
            <img className='mdb-page-navigation__nav-bar-icons' src={support}></img>
          </div>
          <div className={this.state.class}>
            <img className='mdb-page-navigation__nav-logo' src={logo}></img>
            <a className='mdb-page-navigation__nav-link'>Movies</a>
            <a className='mdb-page-navigation__nav-link'>TV Shows</a>
            <a className='mdb-page-navigation__nav-link'>My Library</a>
            <a className='mdb-page-navigation__nav-link'>Support</a>
          </div>
        </div>
      </div>
      );
    }
}

export default NavigationBar;