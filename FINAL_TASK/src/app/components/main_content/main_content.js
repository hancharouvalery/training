import React, { Component } from 'react';
import './main_content.css';
import emptyLib from '../../../img/emptyLib.png';
import { connect } from 'react-redux';
import { initialAction } from './../../store/actions';
import { searchFilms } from './../../store/actions';
import { formView } from './../../store/actions';
import { libraryCount } from './../../store/actions';
import { libraryCountPlus } from './../../store/actions';
import { libraryCountMinus } from './../../store/actions';
import { libraryDisplay } from './../../store/actions';
import { getMovies } from './../../store/actions';
import { getShows } from './../../store/actions';
import { addToLib } from './../../store/actions';
import { removeFromLib } from './../../store/actions';
import { libCount } from './../../store/actions';
import { libCurrent } from './../../store/actions';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import Search from '../search/search';
import Links from '../links/links';
import EmptyLib from '../empty_lib/empty_lib';
import LibMessage from '../lib_message/lib_message';
import LibMessageRemove from '../lib_message_remove/lib_message_remove';
import AdvancedSearch from '../advanced_search/advanced_search';
import Form from '../add_form/form';
import { PostersTape } from '../posters_tape/posters_tape';
import {
  changeIconLib
} from './../../services/changeMovieForLib.service';
const changeIcon = new changeIconLib();

class MainContent extends Component {
    constructor(props){
      super(props);
      this.state = {libMessage: '',
                    titleMessage: '',
                    choice: 0,
                    searchClass: 'mdb-advanced-search__container_hide',
                    advSearchTitle: '',
                    advSearchOverview: '',
                    advSearchGenre: [],
                    advSearchPopularity: '0%',
                    advSearchAdvanced: '0%'
                    };
      this.updateInputSearch = this.updateInputSearch.bind(this);
      this.updateOpenForm = this.updateOpenForm.bind(this);
      this.updateAddIcon = this.updateAddIcon.bind(this);
      this.updateRemoveIcon = this.updateRemoveIcon.bind(this);
      this.addMoviesToLib = this.addMoviesToLib.bind(this);
      this.removeMoviesFromLib = this.removeMoviesFromLib.bind(this);
      this.libMessageAdd = this.libMessageAdd.bind(this);
      this.libMessageRemove = this.libMessageRemove.bind(this);
      this.closeMessageAdd = this.closeMessageAdd.bind(this);
      this.closeMessageRemove = this.closeMessageRemove.bind(this);
      this.openAdvacedSearch = this.openAdvacedSearch.bind(this);
      this.updateClassSearch = this.updateClassSearch.bind(this);
      this.updateAdvSearchInputs = this.updateAdvSearchInputs.bind(this);
    }

    updateAdvSearchInputs(title, overview, genre, pop, ave) {
      console.log(pop);
      this.setState({advSearchTitle: title,
                    advSearchOverview: overview,
                    advSearchGenre: genre,
                    advSearchPopularity: pop,
                    advSearchAdvanced:ave
                    });
    }

    updateInputSearch(text) {
      this.props.searchFilms(text);
    }

    updateOpenForm(display) {
      this.props.formView(display);
    }

    updateAddIcon(id, api, count, display) {
      this.props.libraryCountPlus(count);
      var value = this.props.count;
      this.props.libraryDisplay(display);
      console.log(this.props.count);
      var myArray;
      if (api === 'movies') {
        myArray = this.props.moviesData;
        myArray = changeIcon.addIcon(myArray, id);
        this.props.getMovies(myArray);
      } else {
        myArray = this.props.showsData;
        myArray = changeIcon.addIcon(myArray, id);
        this.props.getShows(myArray);
      }
    }

    updateRemoveIcon(id, api, count) {
      var currentCount = count;
      var positiveArr = this.props.libData.filter(function(item) {
        return item.id === id;
      });
      positiveArr.forEach(function(item) {
        if(item.flag) {
          currentCount = 0;
        }
      });
      this.props.libraryCountMinus(currentCount);
      var myArray;
      if (api === 'movies') {
        myArray = this.props.moviesData;
        myArray = changeIcon.removeIcon(myArray, id);
        this.props.getMovies(myArray);
      } else {
        myArray = this.props.showsData;
        myArray = changeIcon.removeIcon(myArray, id);
        this.props.getShows(myArray);
      }
    }

    addMoviesToLib(obj) {
      this.props.addToLib(obj);
      this.props.libCount(1);
    }

    removeMoviesFromLib(id) {
      var pos = 0;
      var arr = this.props.libData;
      this.props.libData.forEach(function(item, i) {
        if (item.id === id) {pos = i;}
      });
      arr.splice(pos, 1);
      this.props.removeFromLib(arr);
      this.props.libCount(-1);
    }

    libMessageAdd(title) {
      this.setState({libMessage: 'mdb-lib-message__container',
                     titleMessage: title,
                     choice: 1
                    });
    }

    libMessageRemove(title) {
      console.log(title);
      this.setState({libMessage: 'mdb-lib-message-remove__container',
                    titleMessage: title,
                    choice: 2
                    });
    }

    closeMessageAdd() {
      this.setState({libMessage: 'mdb-lib-message__container_hide',
                      choice: 0
                    });
    }

    closeMessageRemove() {
      this.setState({libMessage: 'mdb-lib-message-remove__container_hide',
                    choice: 0
                    });
    }

    openAdvacedSearch(value) {
      this.setState({searchClass: value});
    }

    updateClassSearch() {
      this.setState({searchClass: 'mdb-advanced-search__container_hide'});
    }

    render() {
      return (
      <div className='mdb-main-content'>
        <div className='mdb-main-content__head-content'>
          <Search
          inputText={this.props.inputText}
          updateInputSearch={this.updateInputSearch}
          openAdvacedSearch={this.openAdvacedSearch}
          currentClass={this.state.searchClass}
          />
          <Links updateOpenForm={this.updateOpenForm}/>
        </div>
        <Form />
        <PostersTape
        myMovies={this.props.myMovies}
        inputValue={this.props.inputText}
        api={this.props.api}
        updateAddIcon = {this.updateAddIcon}
        updateRemoveIcon = {this.updateRemoveIcon}
        addMoviesToLib = {this.addMoviesToLib}
        removeMoviesFromLib = {this.removeMoviesFromLib}
        libMessageAdd = {this.libMessageAdd}
        libMessageRemove = {this.libMessageRemove}
        advSearchTitle={this.state.advSearchTitle}
        advSearchOverview={this.state.advSearchOverview}
        advSearchGenre={this.state.advSearchGenre}
        advSearchPopularity={this.state.advSearchPopularity}
        advSearchAdvanced={this.state.advSearchAdvanced}
        />
        {this.props.countLib !== 0 || <EmptyLib />}
        {this.state.choice === 1 && <LibMessage
        title={this.state.titleMessage}
        class={this.state.libMessage}
        closeMessageAdd={this.closeMessageAdd}
        />}
        {this.state.choice === 2 && <LibMessageRemove
        title={this.state.titleMessage}
        class={this.state.libMessage}
        closeMessageRemove={this.closeMessageRemove}
        />}
        <AdvancedSearch
        classSearch={this.state.searchClass}
        updateClassSearch={this.updateClassSearch}
        updateAdvSearchInputs={this.updateAdvSearchInputs}
        />
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  const inputText = state.search.inputValue;
  const display = state.form.display;
  const count = state.library.count;
  const moviesData = state.movies.dataMovies;
  const showsData = state.shows.dataShows;
  const libData = state.addLibrary.dataLibrary;
  const currentLibData = state.current.dataCurrent;
  return { inputText, display, count, moviesData, showsData, libData, currentLibData };
};

const mapDispatchToProps = (dispatch) => ({
  searchFilms: (search) => dispatch(searchFilms(search)),
  formView: (form) => dispatch(formView(form)),
  libraryCountMinus: (library) => dispatch(libraryCountMinus(library)),
  libraryCountPlus: (library) => dispatch(libraryCountPlus(library)),
  libraryDisplay: (library) => dispatch(libraryDisplay(library)),
  getMovies: (movies) => dispatch(getMovies(movies)),
  getShows: (shows) => dispatch(getShows(shows)),
  addToLib: (addLibrary) => dispatch(addToLib(addLibrary)),
  removeFromLib: (addLibrary) => dispatch(removeFromLib(addLibrary)),
  libCount: (addLibrary) => dispatch(libCount(addLibrary))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);


