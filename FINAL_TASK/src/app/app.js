import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import './app.css';
import Movies from './movie_list/movies';
import Scroll from './scroll/scroll';
import NavigationBar from './navigation_bar/navigation';
import MoviesDescribe from './movie-describe/movie-describe';
import loadData from './request_movie';
const movieApi =
'https://api.themoviedb.org/3/movie/upcoming?api_key=0364520972cd3b41c9bcbfd89c7e9832&language=en&append_to_response=credits';
const tvShowsApi =
'https://api.themoviedb.org/3/tv/top_rated?api_key=0364520972cd3b41c9bcbfd89c7e9832&language=en&append_to_response=credits';
/*const genreApi =
'https://api.themoviedb.org/3/genre/movie/list?api_key=0364520972cd3b41c9bcbfd89c7e9832&language=en&append_to_response=credits';*/
var dataMovies = new loadData;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {display: 'none', data: [], dataTvShows:[]};
        this.updateFilter = this.updateFilter.bind(this);
        this.updateFilterShows = this.updateFilterShows.bind(this);
        this.updateFormDisplay = this.updateFormDisplay.bind(this);
        this.onloadData();
        this.onloadDataShows();
    }

    onloadData(){
        dataMovies.requestData(movieApi).then(result=>{
            let movieArray = JSON.parse(result).results;
            let finalArray = movieArray.map((item)=>{
                item.poster_path = 'https://image.tmdb.org/t/p/w185'+item.poster_path;
                return item;
            });
            this.setState({data: finalArray});
        });
    }
    onloadDataShows(){
        dataMovies.requestData(tvShowsApi).then(result=>{
            let movieArray = JSON.parse(result).results;
            let finalArray = movieArray.map((item)=>{
                item.poster_path = 'https://image.tmdb.org/t/p/w185'+item.poster_path;
                return item;
            });
            this.setState({dataTvShows: finalArray});
        });
    }

    updateFormDisplay(display) {
        this.setState({display: display});
    }

    updateFilter(a) {
        this.setState({data: a});
    }
    updateFilterShows(a) {
        this.setState({dataTvShows: a});
    }
    render() {
      return (
        <Router>
            <div className='mdb-page'>
                <div className='mdb-page__container'>
                    <NavigationBar />
                    <div className='mdb-page__main-content'>
                        <div className='mdb-page__movies-content'>
                            <Scroll />
                            <Switch>
                                <Route exact path={`/movies`}
                                render={(props)=><Movies
                                myMovies={this.state.data}
                                onSignUp={this.updateFilter}
                                formDisplay={this.updateFormDisplay}
                                display={this.state.display}
                                api='movies' {...props}/>}
                                />
                                <Route exact path={`/shows`}
                                render={(props)=><Movies
                                myMovies={this.state.dataTvShows}
                                onSignUp={this.updateFilterShows}
                                formDisplay={this.updateFormDisplay}
                                display={this.state.display}
                                api='shows' {...props}/>}
                                />
                                <Route
                                path={`/movies/:id`}
                                render={(props)=><MoviesDescribe
                                movieArray={this.state.data}
                                removeLink='mdb-links__header-link_none' {...props}
                                />}
                                />
                                <Route
                                path={`/shows/:id`}
                                render={(props)=><MoviesDescribe
                                movieArray={this.state.dataTvShows}
                                removeLink='mdb-links__header-link_none' {...props}
                                />}
                                />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
      );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));

