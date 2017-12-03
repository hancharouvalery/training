import React, { Component } from 'react';
import './poster.css';
import info from '../../../img/info.png';
import add from '../../../img/add.png';
import remove from '../../../img/remove.png';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

export class Poster extends Component {
    constructor(props){
      super(props);
      this.state={backClass: 'mdb-poster__back-pos_hide',
                  infoClass: 'mdb-poster__overview-info_hide'
                 };
      this.mouseOver=this.mouseOver.bind(this);
      this.mouseOut=this.mouseOut.bind(this);
      this.infoOver=this.infoOver.bind(this);
      this.infoOut=this.infoOut.bind(this);
      this.addToLib=this.addToLib.bind(this);
      this.removeFromLib=this.removeFromLib.bind(this);
    }

    mouseOver() {
      this.setState({backClass: 'mdb-poster__back-pos'});
    }

    mouseOut() {
      this.setState({backClass: 'mdb-poster__back-pos_hide'});
    }

    infoOver() {
      this.setState({infoClass: 'mdb-poster__overview-info'});
    }

    infoOut() {
      this.setState({infoClass: 'mdb-poster__overview-info_hide'});
    }

    addToLib(e) {
      this.props.updateAddIcon(this.props.id, this.props.api, 1, 'inline');
      var currentObj = {
        id : this.props.id,
        title : this.props.title,
        poster_path : this.props.posterPath,
        genre_ids : [this.props.genre],
        overview : this.props.overview,
        vote_average : this.props.vote,
        popularity : this.props.popularity,
        add : 'none',
        remove : 'block',
        api : this.props.api
      };
      if (localStorage.getItem('library')) {
        var arr = JSON.parse(localStorage.getItem('library'));
        arr.push(currentObj);
        var str = JSON.stringify(arr);
        localStorage.setItem('library', str);
      } else {
        var curArr = [];
        curArr.push(currentObj);
        var curStr = JSON.stringify(curArr);
        localStorage.setItem('library', curStr);
      }
      this.props.addMoviesToLib(currentObj);
      this.props.libMessageAdd(this.props.title);
      e.preventDefault();
    }

    removeFromLib(e) {
      this.props.updateRemoveIcon(this.props.id, this.props.api, 1);
      this.props.removeMoviesFromLib(this.props.id);
      this.props.libMessageRemove(this.props.title);
      var arr = JSON.parse(localStorage.getItem('library'));
      var curId = this.props.id;
      arr = arr.filter(function(item) {
        return item.id !== curId;
      });
      var str = JSON.stringify(arr);
      localStorage.setItem('library', str);
      e.preventDefault();
    }

    render() {
      var useApi = this.props.api;
      return (
      <div className='mdb-poster' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        <div key={this.props.id} className='mdb-poster__posterCell' style={{border: this.props.borderPlus}}>
          <NavLink to={`/${useApi}/${this.props.id}-${this.props.genre}`}>
            <div className={this.state.backClass}>
              <div className='mdb-poster__header'>
                <div className='mdb-poster__info-container' onMouseOver={this.infoOver} onMouseOut={this.infoOut}>
                  <img className='mdb-poster__info' src={info}></img>
                  <div className={this.state.infoClass}>
                    <div className='mdb-poster__overview-info-text'>
                      {this.props.overview}
                    </div>
                    <div className='mdb-poster__next'><p className='mdb-poster__next-dots'>...</p></div>
                  </div>
                </div>
                <div className='mdb-poster__add-container' style={{display: this.props.add}} onClick={this.addToLib}>
                  <img className='mdb-poster__add' src={add}></img>
                </div>
                <div className='mdb-poster__add-container' style={{display: this.props.remove}} onClick={this.removeFromLib}>
                  <img className='mdb-poster__add' src={remove}></img>
                </div>
              </div>
              {this.props.title}
            </div>
            <img className='mdb-poster__poster'
            src={this.props.posterPath}
            key={this.props.id}
            ></img>
          </NavLink>
        </div>
      </div>
      );
    }
}


