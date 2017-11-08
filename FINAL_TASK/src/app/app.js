import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import './app.css';
import data from './data.json';
import NavigationBar from './navigation_bar/navigation';
import Search from './search/search';
import Links from './links/links';
import Movies from './movie_list/movies';
import Scroll from './scroll/scroll';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {movieArray: data.movies};
        this.updateData = this.updateData.bind(this);
    }

    updateData(a) {
        this.setState({movieArray: a});
    }

    render() {
      return (
        <div className='mdb-page'>
            <div className='mdb-page__container'>
                <NavigationBar />
                <div className='mdb-page__main-content'>
                    <div className='mdb-page__head-content'>
                        <Search arrayy={this.state.movieArray} onSignUp={this.updateData} />
                        <Links />
                    </div>
                    <div className='mdb-page__movies-content'>
                        <Scroll />
                        <Movies myMovies={this.state.movieArray}/>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));