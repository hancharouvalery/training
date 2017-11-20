import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchFilms } from './../../store/actions';
import './search.css';
import searchIcon from '../../../img/search_icon.svg';

class Search extends Component {
    constructor(props){
      super(props);
      this.onchange = this.onchange.bind(this);
    }

    onchange(e) {
      let inputStr = e.target.value.toLowerCase();
      this.props.searchFilms(inputStr);
    }

    render() {
      return (
      <div className='mdb-search'>
        <div className='mdb-search__container'>
          <div className='mdb-search__search-field'>
            <div className='mdb-search__icon-container'>
              <img className='mdb-search__icon' src={searchIcon}></img>
            </div>
            <input className='mdb-search__field' type='text' value={this.props.values} onChange={this.onchange} />
          </div>
        </div>
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  const values = state.search.inputValue;

  return { values };
};

const mapDispatchToProps = (dispatch) => ({
  searchFilms: (search) => dispatch(searchFilms(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);




