import React, { Component } from 'react';
import './movie_describe.css';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import Links from '../links/links';
import GenreBoardDisable from '../genre_board_disable/genre_board_disable';

class MoviesDescribe extends Component {
    constructor(props){
      super(props);
    }

    render() {
      var value = +this.props.match.params.id.indexOf('-');
      var valueGenre = value + 1;
      const posterId = +this.props.match.params.id.slice(0, value);
      const genreId = +this.props.match.params.id.slice(valueGenre);
      const useApi = this.props.api;
      console.log(this.props.movieArray);
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
                            return <div className='mdb-movies-describe__overview' key={item.release_date}>
                                      <p className='mdb-movies-describe__title-text' key={item.vote_count}>{item.title}</p>
                                      <p className='mdb-movies-describe__describe-text' key={item.title}>{item.overview}</p>
                                   </div>;
                        })
                }
                </div>
            </div>
            <div className='mdb-movies-describe__genres-and-popular'>
                <div className='mdb-movies-describe__genres'>
                    <GenreBoardDisable movieArray={this.props.movieArray} posterId={posterId}/>
                </div>
                <div className='mdb-movies-describe__popular'>
                    <p className='mdb-movies-describe__describe-title'>Popularity</p>
                    <div className='mdb-movies-describe__pop-container'>
                        {
                            this.props.movieArray
                                .filter((item)=>{
                                    return item.id === posterId;
                                })
                                .map((item)=>{
                                    return <div
                                    key={item.popularity}
                                    className='mdb-movies-describe__popularity mdb-movies-describe__popularity_orange'
                                    style={{width: item.popularity}}
                                    ></div>;
                                })
                        }
                    </div><br />
                    <p className='mdb-movies-describe__describe-title'>Vote average</p>
                    <div className='mdb-movies-describe__pop-container'>
                        {
                            this.props.movieArray
                                .filter((item)=>{
                                    return item.id === posterId;
                                })
                                .map((item)=>{
                                    return <div
                                    key={item.vote_average}
                                    className='mdb-movies-describe__popularity mdb-movies-describe__popularity_green'
                                    style={{width: item.vote_average}}
                                    ></div>;
                                })
                        }
                    </div><br />
                </div>
            </div>
            <div className='mdb-movies-describe__recommend'>
                <p className='mdb-movies-describe__recommend-title'>We also recommended</p>
                <div className='mdb-movies-describe__recommend-container'>
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.genre_ids[0] === genreId && item.id !== posterId;
                            })
                            .map((item)=>{
                                return <NavLink to={`/${useApi}/${item.id}-${item.genre_ids[0]}`}>
                                    <img key={item.id} className='mdb-movies-describe__mini-poster' src={item.poster_path}></img>
                                </NavLink>;
                            })
                    }
                </div>
            </div>
        </div>
      </div>
      );
    }
}

export default MoviesDescribe;


