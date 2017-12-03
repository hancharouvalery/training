import React, { Component } from 'react';
import './search.css';
import searchIcon from '../../../img/search_icon.svg';

class Search extends Component {
    constructor(props){
      super(props);
      this.onchange = this.onchange.bind(this);
      this.openAdvSearch = this.openAdvSearch.bind(this);
    }

    onchange(e) {
      let inputStr = e.target.value.toLowerCase();
      this.props.updateInputSearch(inputStr);
    }

    openAdvSearch() {
      if (this.props.currentClass === 'mdb-advanced-search__container') {
      this.props.openAdvacedSearch('mdb-advanced-search__container_hide');
      } else {
        this.props.openAdvacedSearch('mdb-advanced-search__container');
      }
    }

    render() {
      return (
      <div className='mdb-search'>
        <div className='mdb-search__container'>
          <div className='mdb-search__search-field'>
            <input className='mdb-search__field' type='text' value={this.props.inputText} onChange={this.onchange} />
            <div className='mdb-search__icon-container' onClick={this.openAdvSearch}>
              <img className='mdb-search__icon' src={searchIcon}></img>
            </div>
          </div>
        </div>
      </div>
      );
    }
}

export default Search;




