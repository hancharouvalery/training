import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initialAction } from './../../store/actions';
import { getMovies } from './../../store/actions';
import {
    HashRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
  } from 'react-router-dom';
import './app.css';
import MainContent from '../main_content/main_content';
import { Scroll } from '../scroll/scroll';
import NavigationBar from '../navigation_bar/navigation';
import MoviesDescribe from '../movie_describe/movie_describe';
import About from '../about/about';
import Support from '../support/support';


class App extends Component {
    constructor(props){
        super(props);
        this.state={arr:[]};
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
                                api='movies' {...props}/>}
                                />
                                <Route exact path={`/shows`}
                                render={(props)=><MainContent
                                myMovies={this.props.showsData}
                                api='shows' {...props}/>}
                                />
                                <Route exact path={`/library`}
                                render={(props)=><MainContent
                                myMovies={this.props.libraryData}
                                countLib={this.props.countLib}
                                {...props}/>}
                                />
                                <Route exact path={`/about`}
                                render={(props)=><About
                                {...props}/>}
                                />
                                <Route exact path={`/support`}
                                render={(props)=><Support
                                removeLink='mdb-links__header-link_none'
                                {...props}/>}
                                />
                                <Route
                                path={`/movies/:id`}
                                render={(props)=><MoviesDescribe
                                movieArray={this.props.moviesData}
                                genresArray={this.props.genresData}
                                api='movies'
                                removeLink='mdb-links__header-link_none' {...props}/>}
                                />
                                <Route
                                path={`/shows/:id`}
                                render={(props)=><MoviesDescribe
                                movieArray={this.props.showsData}
                                genresArray={this.props.genresData}
                                api='shows'
                                removeLink='mdb-links__header-link_none' {...props}/>}
                                />
                                <Redirect from='/' to='/movies' />
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
    //const genresData = state.genres.dataGenres;
    const libraryData = state.addLibrary.dataLibrary;
    const countLib = state.addLibrary.count;
    return { moviesData, showsData, libraryData, countLib };
};

const mapDispatchToProps = (dispatch) => ({
    initialAction: (initial) => dispatch(initialAction(initial)),
    getMovies: (movies) => dispatch(getMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);




