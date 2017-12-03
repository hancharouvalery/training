import React, { Component } from 'react';
import './genre_board.css';

class GenreBoard extends Component {
    constructor(props) {
      super(props);
      this.state = {array: []};
      this.onCheckChange = this.onCheckChange.bind(this);
    }

    onCheckChange(e) {
        var valueName = e.target.value;
        var targetChecked = e.target.checked;
        this.props.updateGenreBoard(valueName, targetChecked);
    }

    render() {
      return (
        <div className='mdb-form__genre'>
            <p className='mdb-form__genre-name'>Genre</p>
            <div className='mdb-form__genre-cols' onChange={this.onCheckChange}>
                <div className='mdb-form__genre-column'>
                <label><input
                className='mdb-form__genre-type'
                type="checkbox"
                value="28"
                disabled={this.props.disabled}
                checked={this.props.na}
                />
                Action
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="12"
                disabled={this.props.disabled}
                />
                Adventure
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="53"
                disabled={this.props.disabled}
                />
                Thriller
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="35"
                disabled={this.props.disabled}
                />
                Comedy
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="14"
                disabled={this.props.disabled}
                />
                Fantasy
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="10751"
                disabled={this.props.disabled}
                />
                Family
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="36"
                disabled={this.props.disabled}
                />
                History
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="10749"
                disabled={this.props.disabled}
                />
                Romance
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="37"
                disabled={this.props.disabled}
                />
                Western
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="878"
                disabled={this.props.disabled}
                />
                Science fiction
                </label>
                </div>
                <div className='mdb-form__genre-column'>
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="18"
                disabled={this.props.disabled}
                />
                Drama
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="27"
                disabled={this.props.disabled}
                />
                Horror
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="80"
                disabled={this.props.disabled}
                />
                Crime
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="10752"
                disabled={this.props.disabled}
                />
                War
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="99"
                disabled={this.props.disabled}
                />
                Documentary
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="16"
                disabled={this.props.disabled}
                />
                Animation
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="10402"
                disabled={this.props.disabled}
                />
                Music
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="9648"
                disabled={this.props.disabled}
                />
                Mystery
                </label><br />
                <label>
                <input
                className='mdb-form__genre-type'
                type="checkbox"
                value="10770"
                disabled={this.props.disabled}
                />
                TV Movie
                </label>
                </div>
            </div>
        </div>
      );
    }
}

export default GenreBoard;