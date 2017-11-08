import React, { Component } from 'react';
import './movies.css';

class Movies extends Component {
    constructor(props){
      super(props);
    }
    render() {
      const myArray = this.props.myMovies;
      console.log(myArray);
      return (
      <div className='mdb-movies'>
        <div className='mdb-movies__container'>
          {
            myArray.map(function(item){
              return (
                <img className='mdb-movies__movieCell' src={item.poster_path} key={item.id}></img>
              );
            })
          }
        </div>
      </div>
      );
    }
}

export default Movies;
