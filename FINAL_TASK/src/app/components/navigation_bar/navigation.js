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
import { libraryCountMinus } from './../../store/actions';
import { libraryDisplay } from './../../store/actions';
import {
  WatchFlag
} from './../../services/watchFlag.service';
import { addToLib } from './../../store/actions';
import { removeFromLib } from './../../store/actions';


class NavigationBar extends Component {
    constructor(props) {
      super(props);
      this.state = {class: 'mdb-page-navigation__nav-links',
                    displayClass: 'none'};
      this.press = this.press.bind(this);
      this.click = this.click.bind(this);
      this.clickLibrary = this.clickLibrary.bind(this);
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
    clickLibrary() {
      this.props.libraryDisplay('none');
      this.props.libraryCountMinus(this.props.count);
      this.props.searchFilms('');
      var watchedArr = this.props.libData.map(function(item) {
        return new WatchFlag(item);
      });
      var arr=[];
      this.props.removeFromLib(arr);
      for(var i=0; i< watchedArr.length; i++) {
        this.props.addToLib(watchedArr[i]);
      }
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
            <NavLink
            to={'/library'}
            onClick={this.clickLibrary}
            >
            <img className='mdb-page-navigation__nav-bar-icons' src={library}>
            </img>
            </NavLink>
            <NavLink to={'/support'} onClick={this.click}><img className='mdb-page-navigation__nav-bar-icons' src={support}></img></NavLink>
          </div>
          <div className={this.state.class}>
            <img className='mdb-page-navigation__nav-logo' src={logo}></img>
            <NavLink to={'/movies'} onClick={this.click}><span className='mdb-page-navigation__nav-link'>Movies</span></NavLink>
            <NavLink to={'/shows'} onClick={this.click}><span className='mdb-page-navigation__nav-link'>TV Shows</span></NavLink>
            <NavLink to={'/library'} onClick={this.clickLibrary}><span className='mdb-page-navigation__nav-link'>My Library
            <span className='mdb-page-navigation__lib-count'
            style={{display: this.props.displayCount}}>   ({this.props.count})</span></span></NavLink>
            <NavLink to={'/support'} onClick={this.click}><span className='mdb-page-navigation__nav-link'>Support</span></NavLink>
          </div>
        </div>
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  const values = state.search.inputValue;
  const count = state.library.count;
  const displayCount = state.library.display;
  const libData = state.addLibrary.dataLibrary;
  return { values, count, displayCount, libData };
};

const mapDispatchToProps = (dispatch) => ({
  searchFilms: (search) => dispatch(searchFilms(search)),
  libraryCountMinus: (library) => dispatch(libraryCountMinus(library)),
  libraryDisplay: (library) => dispatch(libraryDisplay(library)),
  addToLib: (addLibrary) => dispatch(addToLib(addLibrary)),
  removeFromLib: (addLibrary) => dispatch(removeFromLib(addLibrary))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
