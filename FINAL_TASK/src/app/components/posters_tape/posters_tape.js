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
      return (
      <div className='mdb-posters-tape'>
        <div className='mdb-posters-tape__container'>
          {
            this.props.myMovies
                .filter((item)=>{
                    return item.title.toLowerCase().indexOf(inputStr) === 0;
                })
                .map((item)=>{
                  return (
                    <Poster key={item.id} id={item.id} posterPath={item.poster_path} api={useApi} />
                  );
                })
          }
        </div>
      </div>
      );
    }
}

/*{
            this.props.myMovies.map(function(item){
              return (
                <Poster key={item.id} id={item.id} posterPath={item.poster_path} api={useApi} />
              );
            })
          }*/
