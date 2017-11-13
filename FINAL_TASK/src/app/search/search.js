import React, { Component } from 'react';
import './search.css';
import searchIcon from '../../img/search_icon.svg';
import loadData from '../request_movie';
const movie =
'https://api.themoviedb.org/3/movie/upcoming?api_key=0364520972cd3b41c9bcbfd89c7e9832&language=en&append_to_response=credits';
const tvShowsApi =
'https://api.themoviedb.org/3/tv/top_rated?api_key=0364520972cd3b41c9bcbfd89c7e9832&language=en&append_to_response=credits';

var dataFilterMovies = new loadData;

class Search extends Component {
    constructor(props){
      super(props);
      this.state = {filterData: [], tvShows: []};
      this.filterMovies = this.filterMovies.bind(this);
      this.onloadData();
      this.onloadShows();
    }

    onloadData(){
      dataFilterMovies.requestData(movie).then(result=>{
          let movieArray = JSON.parse(result).results;
          let finalArray = movieArray.map((item)=>{
             item.poster_path = 'https://image.tmdb.org/t/p/w185'+item.poster_path;
             return item;
          });
          this.setState({filterData: finalArray});
      });
    }

    onloadShows(){
      dataFilterMovies.requestData(tvShowsApi).then(result=>{
          let movieArray = JSON.parse(result).results;
          let finalArray = movieArray.map((item)=>{
              item.poster_path = 'https://image.tmdb.org/t/p/w185'+item.poster_path;
              return item;
          });
          this.setState({tvShows: finalArray});
      });
    }

    filterMovies(e){
      var useData;
      console.log(this.props.api);
      if (this.props.api === 'movies') {
        useData = this.state.filterData;
        let filmsArr = useData.filter(function(item){
          let str = item.title.toLowerCase();
          let inputStr = e.target.value.toLowerCase();
          return str.indexOf(inputStr) === 0;
        });
        this.props.onSignUp(filmsArr);
      } else if (this.props.api === 'shows') {
        useData = this.state.tvShows;
        let filmsArr = useData.filter(function(item){
          let str = item.name.toLowerCase();
          let inputStr = e.target.value.toLowerCase();
          return str.indexOf(inputStr) === 0;
        });
        this.props.onSignUp(filmsArr);
      }
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


