import React, { Component } from 'react';
import './search.css';
import searchIcon from '../../img/search_icon.svg';
import data from '../data.json';

class Search extends Component {
    constructor(props){
      super(props);
      this.filterMovies = this.filterMovies.bind(this);
    }
    filterMovies(e){
      let filmsArr = data.movies.filter(function(item){
         let str = item.title.toLowerCase();
         let inputStr = e.target.value.toLowerCase();
         return str.indexOf(inputStr) === 0;
      });
      this.props.onSignUp(filmsArr);
    }
    render() {
      return (
      <div className='mdb-search'>
        <div className='mdb-search__container'>
          <div className='mdb-search__search-field'>
            <div className='mdb-search__icon-container'>
              <img className='mdb-search__icon' src={searchIcon}></img>
            </div>
            <input className='mdb-search__field' type='text' onChange={this.filterMovies} />
          </div>
        </div>
      </div>
      );
    }
}

export default Search;


