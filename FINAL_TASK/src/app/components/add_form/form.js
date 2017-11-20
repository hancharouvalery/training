import React, { Component } from 'react';
import './form.css';
import { connect } from 'react-redux';
import { formView } from './../../store/actions';

class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {title: '',
                    overview: '',
                    genres:[],
                    uploadPic: ''
                  };
      this.onTitleChange = this.onTitleChange.bind(this);
      this.onOverviewChange = this.onOverviewChange.bind(this);
      this.onCheckChange = this.onCheckChange.bind(this);
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

    onCheckChange(e) {
      var valueName = e.target.value;
      if(e.target.checked === true) {
        this.setState((array) => ({
          genres: array.genres.concat(valueName)
        }));
      } else {
        this.setState((array) => ({
          genres: array.genres.filter(function(item) {
            return item !== valueName;
        })}));
      }
    }
    uploadPicture(e) {
      this.setState({uploadPic: e.target.value});
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
    addDataToLocal(){
      var movieData = localStorage.getItem("myMovies");
      var movieLocal = `[{'title': ${this.state.title}}, {'overview': ${this.state.overview}}, {'genres': ${this.state.genres}}]`;
      localStorage.setItem("myMovies", movieLocal);
    }
    render() {
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
              <div className='mdb-form__genre'>
                <p className='mdb-form__genre-name'>Genre</p>
                <div className='mdb-form__genre-cols' onChange={this.onCheckChange}>
                  <div className='mdb-form__genre-column'>
                    <label><input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="action"
                    />
                    Action
                    </label><br />
                    <label>
                    <input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="adventure"
                    />
                    Adventure
                    </label><br />
                    <label>
                    <input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="thriller"
                    />
                    Thriller
                    </label><br />
                    <label>
                    <input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="comedy"
                    />
                    Comedy
                    </label><br />
                    <label>
                    <input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="fantasy"
                    />
                    Fantasy
                    </label>
                  </div>
                  <div className='mdb-form__genre-column'>
                    <label>
                    <input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="drama"
                    />
                    Drama
                    </label><br />
                    <label>
                    <input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="horror"
                    />
                    Horror
                    </label><br />
                    <label>
                    <input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="criminal"
                    />
                    Criminal
                    </label><br />
                    <label>
                    <input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="war"
                    />
                    War
                    </label><br />
                    <label>
                    <input
                    className='mdb-form__genre-type'
                    type="checkbox"
                    value="documentary"
                    />
                    Documentary
                    </label>
                  </div>
                </div>
                {this.state.genres.length===0 && <p className='mdb-form__error-checkbox'>Genre is requred</p>}
              </div>
              <div className='mdb-form__upload-pic-container'>
                <input className='mdb-form__upload' id='file' type="file" multiple onChange={this.uploadPicture}/>
              </div>
            </div>
            <div className='mdb-form__conrol-buttons'>
                <button className='mdb-form__add-button' disabled={this.validationForm()} onClick={this.addDataToLocal}>Add</button>
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
  formView: (form) => dispatch(formView(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);


