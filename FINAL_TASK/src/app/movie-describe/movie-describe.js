import React, { Component } from 'react';
import './movie-describe.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import Links from '../links/links';

class MoviesDescribe extends Component {
    constructor(props){
      super(props);
    }
    render() {
      const posterId = +this.props.match.params.id;
      return (
      <div className='mdb-movies-describe'>
        <div className='mdb-movies-describe__links-container'>
            <Links removeLink={this.props.removeLink}/>
        </div>
        <div className='mdb-movies-describe__container'>
            <div className='mdb-movies-describe__poster-and-text'>
                <div className='mdb-movies-describe__poster'>
                {
                    this.props.movieArray
                        .filter((item)=>{
                            return item.id === posterId;
                        })
                        .map((item)=>{
                            return <img src={item.poster_path} key={item.id}></img>;
                        })
                }
                </div>
                <div className='mdb-movies-describe__text'>
                {
                    this.props.movieArray
                        .filter((item)=>{
                            return item.id === posterId;
                        })
                        .map((item)=>{
                            return <div className='mdb-movies-describe__overview' key={item.vote_count}>
                            <p className='mdb-movies-describe__title-text' key={item.id}>{item.title || item.name}</p>
                            <p className='mdb-movies-describe__describe-text' key={item.title}>{item.overview}</p>
                            </div>;
                        })
                }
                </div>
            </div>
            <div className='mdb-movies-describe__genres-and-popular'>
                <div className='mdb-movies-describe__genres'></div>
                <div className='mdb-movies-describe__popular'></div>
            </div>
            <div className='mdb-movies-describe__recommend'></div>
        </div>
      </div>
      );
    }
}

export default MoviesDescribe;