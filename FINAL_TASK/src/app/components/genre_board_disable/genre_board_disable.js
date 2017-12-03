import React, { Component } from 'react';
import './genre_board_disable.css';

class GenreBoardDisable extends Component {
    constructor(props){
      super(props);
    }

    render() {
      const posterId = this.props.posterId;
      return (
        <div className='mdb-genre-disable'>
            <div className='mdb-genre-disable__genre-cols'>
                <div className='mdb-genre-disable__genre-column'>
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Action"
                                    disabled
                                    checked={item.genre_ids.indexOf(28) >=0 ? 'checked' : ''}
                                    />
                                    Action
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Adventure"
                                    disabled
                                    checked={item.genre_ids.indexOf(12) >=0 ? 'checked' : ''}
                                    />
                                    Adventure
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Thriller"
                                    disabled
                                    checked={item.genre_ids.indexOf(53) >=0 ? 'checked' : ''}
                                    />
                                    Thriller
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Comedy"
                                    disabled
                                    checked={item.genre_ids.indexOf(35) >=0 ? 'checked' : ''}
                                    />
                                    Comedy
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Fantasy"
                                    disabled
                                    checked={item.genre_ids.indexOf(14) >=0 ? 'checked' : ''}
                                    />
                                    Fantasy
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Family"
                                    disabled
                                    checked={item.genre_ids.indexOf(10751) >=0 ? 'checked' : ''}
                                    />
                                    Family
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="History"
                                    disabled
                                    checked={item.genre_ids.indexOf(36) >=0 ? 'checked' : ''}
                                    />
                                    History
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Romance"
                                    disabled
                                    checked={item.genre_ids.indexOf(10749) >=0 ? 'checked' : ''}
                                    />
                                    Romance
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Western"
                                    disabled
                                    checked={item.genre_ids.indexOf(37) >=0 ? 'checked' : ''}
                                    />
                                    Western
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Science Fiction"
                                    disabled
                                    checked={item.genre_ids.indexOf(878) >=0 ? 'checked' : ''}
                                    />
                                    Science Fiction
                                </label>;
                            })
                    }
                </div>
                <div className='mdb-form__genre-column'>
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Drama"
                                    disabled
                                    checked={item.genre_ids.indexOf(18) >=0 ? 'checked' : ''}
                                    />
                                    Drama
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Horror"
                                    disabled
                                    checked={item.genre_ids.indexOf(27) >=0 ? 'checked' : ''}
                                    />
                                    Horror
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Crime"
                                    disabled
                                    checked={item.genre_ids.indexOf(80) >=0 ? 'checked' : ''}
                                    />
                                    Crime
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="War"
                                    disabled
                                    checked={item.genre_ids.indexOf(10752) >=0 ? 'checked' : ''}
                                    />
                                    War
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Documentary"
                                    disabled
                                    checked={item.genre_ids.indexOf(99) >=0 ? 'checked' : ''}
                                    />
                                    Documentary
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Animation"
                                    disabled
                                    checked={item.genre_ids.indexOf(16) >=0 ? 'checked' : ''}
                                    />
                                    Animation
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Music"
                                    disabled
                                    checked={item.genre_ids.indexOf(10402) >=0 ? 'checked' : ''}
                                    />
                                    Music
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="Mystery"
                                    disabled
                                    checked={item.genre_ids.indexOf(9648) >=0 ? 'checked' : ''}
                                    />
                                    Mystery
                                </label>;
                            })
                    }
                    <br />
                    {
                        this.props.movieArray
                            .filter((item)=>{
                                return item.id === posterId;
                            })
                            .map((item)=>{
                                return <label>
                                    <input
                                    key={item.id}
                                    className='mdb-genre-disable__genre-type'
                                    type="checkbox"
                                    value="TV Movie"
                                    disabled
                                    checked={item.genre_ids.indexOf(10770) >=0 ? 'checked' : ''}
                                    />
                                    TV Movie
                                </label>;
                            })
                    }
                </div>
            </div>
        </div>
      );
    }
}

export default GenreBoardDisable;
