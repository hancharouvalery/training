import React, { Component } from 'react';
import './posters_tape.css';
import { Poster } from './../poster/poster';

export class PostersTape extends Component {
    constructor(props){
      super(props);
    }

    render() {
      var useApi = this.props.api;
      var inputStr = this.props.inputValue;
      var advSearchTitle= localStorage.getItem('title') || this.props.advSearchTitle;
      var advSearchOverview= localStorage.getItem('overview') || this.props.advSearchOverview;
      var advSearchGenre= this.props.advSearchGenre;
      var advSearchPopularity=localStorage.getItem('popular') || this.props.advSearchPopularity;
      var advSearchAdvanced=localStorage.getItem('average') || this.props.advSearchAdvanced;
      //var userMovie=JSON.parse(localStorage.getItem('myMovies')) || false;
      //console.log(userMovie);
      return (
      <div className='mdb-posters-tape'>
        <div className='mdb-posters-tape__container'>
          {
            this.props.myMovies
                .filter((item)=>{
                    return item.title.toLowerCase().indexOf(inputStr.toLowerCase()) === 0;
                })
                .filter((item)=>{
                  return item.title.toLowerCase().indexOf(advSearchTitle.toLowerCase()) === 0;
                })
                .filter((item)=>{
                  return item.overview.toLowerCase().indexOf(advSearchOverview.toLowerCase()) === 0;
                })
                .filter((item)=>{
                  return parseFloat(advSearchPopularity) <= parseFloat(item.popularity);
                })
                .filter((item)=>{
                  return parseFloat(advSearchAdvanced) <= parseFloat(item.vote_average);
                })
                .filter((item)=>{
                  if (!advSearchGenre[0]) {
                    return true;
                  } else if (item.genre_ids.indexOf(+advSearchGenre[0]) === 0) {
                    return true;
                  } else {return false;}
                })
                .map((item)=>{
                  return (
                    <Poster
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    overview={item.overview}
                    genre={item.genre_ids[0]}
                    posterPath={item.poster_path}
                    vote={item.vote_average}
                    popularity={item.popularity}
                    add={item.add}
                    remove={item.remove}
                    borderPlus={item.borderPlus}
                    borderMinus={item.borderMinus}
                    api={useApi || item.api}
                    updateAddIcon = {this.props.updateAddIcon}
                    updateRemoveIcon = {this.props.updateRemoveIcon}
                    addMoviesToLib = {this.props.addMoviesToLib}
                    removeMoviesFromLib = {this.props.removeMoviesFromLib}
                    libMessageAdd = {this.props.libMessageAdd}
                    libMessageRemove = {this.props.libMessageRemove}
                    />
                  );
                })
          }
        </div>
      </div>
      );
    }
}

var title = localStorage.getItem('title');
var overview = localStorage.getItem('overview');
var genres = localStorage.getItem('genres');
var popular = localStorage.getItem('popular');
var average = localStorage.getItem('average');
var remember = localStorage.getItem('remember');
