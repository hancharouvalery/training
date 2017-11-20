import React, { Component } from 'react';
import './navigation.css';
import menu from '../../../img/menu.png';
import movies from '../../../img/movies.png';
import tvShows from '../../../img/tv_shows.png';
import library from '../../../img/library.png';
import support from '../../../img/support.png';
import logo from '../../../img/logo.png';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import { searchFilms } from './../../store/actions';

class NavigationBar extends Component {
    constructor(props) {
      super(props);
      this.state = {class: 'mdb-page-navigation__nav-links'};
      this.press = this.press.bind(this);
      this.click = this.click.bind(this);
    }

    press(){
      let className = this.state.class === 'mdb-page-navigation__nav-links'
      ?'mdb-page-navigation__nav-links mdb-page-navigation__nav-links_hide':
      'mdb-page-navigation__nav-links';
      this.setState({class: className});
    }
    click() {
      this.props.searchFilms('');
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
            <NavLink to={'/movies'} onClick={this.click}><img className='mdb-page-navigation__nav-bar-icons' src={movies}></img></NavLink>
            <NavLink to={'/shows'} onClick={this.click}><img className='mdb-page-navigation__nav-bar-icons' src={tvShows}></img></NavLink>
            <img className='mdb-page-navigation__nav-bar-icons' src={library}></img>
            <img className='mdb-page-navigation__nav-bar-icons' src={support}></img>
          </div>
          <div className={this.state.class}>
            <img className='mdb-page-navigation__nav-logo' src={logo}></img>
            <NavLink to={'/movies'} onClick={this.click}><span className='mdb-page-navigation__nav-link'>Movies</span></NavLink>
            <NavLink to={'/shows'} onClick={this.click}><span className='mdb-page-navigation__nav-link'>TV Shows</span></NavLink>
            <a className='mdb-page-navigation__nav-link'>My Library</a>
            <a className='mdb-page-navigation__nav-link'>Support</a>
          </div>
        </div>
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  const values = state.search.inputValue;

  return { values };
};

const mapDispatchToProps = (dispatch) => ({
  searchFilms: (search) => dispatch(searchFilms(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
