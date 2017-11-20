import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialAction } from './../../store/actions';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch
  } from 'react-router-dom';
import './app.css';
import MainContent from '../main_content/main_content';
import { Scroll } from '../scroll/scroll';
import NavigationBar from '../navigation_bar/navigation';
import { MoviesDescribe } from '../movie_describe/movie_describe';
import { EntityService } from '../../services/entity.service';
/*const genreApi =
'https://api.themoviedb.org/3/genre/movie/list?api_key=0364520972cd3b41c9bcbfd89c7e9832&language=en&append_to_response=credits';*/

class App extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.initialAction();
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
                                render={(props)=><MainContent
                                myMovies={this.props.moviesData}
                                inputValue={this.props.inputText}
                                api='movies' {...props}/>}
                                />
                                <Route exact path={`/shows`}
                                render={(props)=><MainContent
                                myMovies={this.props.showsData}
                                inputValue={this.props.inputText}
                                api='shows' {...props}/>}
                                />
                                <Route
                                path={`/movies/:id`}
                                render={(props)=><MoviesDescribe
                                movieArray={this.props.moviesData}
                                removeLink='mdb-links__header-link_none' {...props}/>}
                                />
                                <Route
                                path={`/shows/:id`}
                                render={(props)=><MoviesDescribe
                                movieArray={this.props.showsData}
                                removeLink='mdb-links__header-link_none' {...props}/>}
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

const mapStateToProps = (state) => {
    const moviesData = state.movies.dataMovies;
    const showsData = state.shows.dataShows;
    const inputText = state.search.inputValue;
    return { moviesData, showsData, inputText };
};

const mapDispatchToProps = (dispatch) => ({
    initialAction: (initial) => dispatch(initialAction(initial))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);




