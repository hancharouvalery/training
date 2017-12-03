import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import './form.css';
import { connect } from 'react-redux';
import { formView } from './../../store/actions';
import { addMovies } from './../../store/actions';
import GenreBoard from './../genre_board/genre_board';
import it from '../../../userImg/it.jpg';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {title: '',
                    overview: '',
                    genres: [],
                    uploadPic: ''
                  };
      this.onTitleChange = this.onTitleChange.bind(this);
      this.updateGenreBoard = this.updateGenreBoard.bind(this);
      this.onOverviewChange = this.onOverviewChange.bind(this);
      this.uploadPicture = this.uploadPicture.bind(this);
      this.validationForm = this.validationForm.bind(this);
      this.closeForm = this.closeForm.bind(this);
      this.addDataToLocal = this.addDataToLocal.bind(this);
    }

    onTitleChange(e) {
      var val = e.target.value;
      this.setState({title: val});
    }

    onOverviewChange(e) {
      var val = e.target.value;
      this.setState({overview: val});
    }

    uploadPicture(e) {
      var fileName = e.target.value;
      var pos = fileName.lastIndexOf("\\");
       if(pos !== -1)
        {
          fileName = fileName.substr(pos+1);
        }
      this.setState({uploadPic: fileName});
    }
    validationForm() {
      var validCheckbox = this.state.genres.length;
      var validTitle = !!this.state.title;
      if (validCheckbox > 0 && validTitle === true) {
        return false;
      }
      return true;
    }
    closeForm(e) {
      e.preventDefault();
      this.props.formView('none');
    }
    addDataToLocal(e){
      console.log(this.state.genres);
      function getRandomFloat(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var id = getRandomFloat(1, 99999);
      var movieLocalObj = {id:id, title: this.state.title,
      overview: this.state.overview,
      genre_ids: this.state.genres,
      poster_path: it,
      vote_average: '0%',
      popularity:'0%',
      add:'block',
      remove:'none',
      borderPlus: 'none'};
      this.props.addMovies(movieLocalObj);
    }

    updateGenreBoard(value, check) {
      if(check === true) {
        this.setState((array) => ({
          genres: array.genres.concat(+value)
        }));
      } else {
        this.setState((array) => ({
          genres: array.genres.filter(function(item) {
            return item !== +value;
        })}));
      }
    }
    render() {
      console.log(this.state.uploadPic);
      return (
      <div className='mdb-form' style={{display: this.props.display}}>
        <div className='mdb-form__container'>
          <form className='mdb-from__content'>
            <div className='mdb-form__content-container'>
              <div className='mdb-form__description'>
                <div className='mdb-from__title-text'>
                  <p className='mdb-from__title-text-name'>Title</p>
                </div>
                <input className="mdb-form__title" name="title" type="text" onChange={this.onTitleChange}/>
                {!this.state.title && <p className='mdb-form__error-title'>Title is required</p>}
                <div className='mdb-from__overview-text'>
                  <p className='mdb-from__overview-text-name'>Overview</p>
                </div>
                <textarea name="overview" rows="8" cols="30" className="mdb-form__overview" onChange={this.onOverviewChange}></textarea>
              </div>
              <div className='mdb-form__genre-container'>
                <GenreBoard updateGenreBoard={this.updateGenreBoard}/>
                {this.state.genres.length===0 && <p className='mdb-form__error-checkbox'>Genre is requred</p>}
              </div>
              <div className='mdb-form__upload-pic-container'>

              </div>
            </div>
            <div className='mdb-form__conrol-buttons'>
                <NavLink to={'/movies'}><button
                className='mdb-form__add-button'
                disabled={this.validationForm()}
                onClick={this.addDataToLocal}
                >Add</button></NavLink>
                <button className='mdb-form__cancel-button' onClick={this.closeForm}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  const display = state.form.display;
  return { display };
};

const mapDispatchToProps = (dispatch) => ({
  formView: (form) => dispatch(formView(form)),
  addMovies: (movies) => dispatch(addMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

//<input className='mdb-form__upload' id='file' type="file" multiple onChange={this.uploadPicture}/>
