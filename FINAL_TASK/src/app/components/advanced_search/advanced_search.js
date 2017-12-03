import React, { Component } from 'react';
import './advanced_search.css';
import slider from '../../../img/slider.jpg';
import GenreBoard from './../genre_board/genre_board';


class AdvancedSearch extends Component {
    constructor(props){
        super(props);
        this.state = {title: '',
                    overview: '',
                    genres: [],
                    remember: false,
                    popularity: '0%',
                    average: '0%'
                     };
        this.onTitleChange = this.onTitleChange.bind(this);
        this.updateGenreBoard = this.updateGenreBoard.bind(this);
        this.onOverviewChange = this.onOverviewChange.bind(this);
        this.searchClick=this.searchClick.bind(this);
        this.checkChange=this.checkChange.bind(this);
    }

    componentWillMount() {
        var title = localStorage.getItem('title');
        if (title) {
            this.setState({title: title});
        }
        var overview = localStorage.getItem('overview');
        if (overview) {
            this.setState({overview: overview});
        }
        /*var genres = localStorage.getItem('genres');
        if (genres) {
            this.setState({genres: genres});
        }*/
        var popular = localStorage.getItem('popular');
        if (popular) {
            this.setState({popularity: popular});
        }
        var average = localStorage.getItem('average');
        if (average) {
            this.setState({average: average});
        }
        var remember = localStorage.getItem('remember');
        if (remember) {
            this.setState({remember: remember});
        }
    }

    updateGenreBoard(value, check) {
        if(check === true) {
            this.setState((array) => ({
              genres: array.genres.concat(value)
            }));
          } else {
            this.setState((array) => ({
              genres: array.genres.filter(function(item) {
                return item !== value;
            })}));
         }
    }

    checkChange(e) {
        var targetChecked = e.target.checked;
        this.setState({remember: targetChecked});
    }

    onTitleChange(e) {
        var val = e.target.value;
        this.setState({title: val});
      }

    onOverviewChange(e) {
        var val = e.target.value;
        this.setState({overview: val});
    }

    componentDidMount() {
        var firstcont = document.querySelector('.mdb-advanced-search__popularity-first');
        var sliderElem = document.querySelector('.mdb-advanced-search__popularity');
        var thumbElem = document.querySelector('.mdb-advanced-search__slider');

        var firstcontVote = document.querySelector('.mdb-advanced-search__vote-first');
        var sliderElemVote = document.querySelector('.mdb-advanced-search__vote');
        var thumbElemVote = document.querySelector('.mdb-advanced-search__slider-vote');


        thumbElem.onmousedown = function(e) {
          var thumbCoords = getCoords(thumbElem);
          var shiftX = e.pageX - thumbCoords.left;

          var sliderCoords = getCoords(sliderElem);

          firstcont.style.width = e.pageX - sliderCoords.left + "px";

          document.onmousemove = function(e) {
            var newLeft = e.pageX - shiftX - sliderCoords.left;
            var newWidth = e.pageX - sliderCoords.left;

            if (newLeft < 0) {
              newLeft = 0;
              newWidth = 0;
            }
            var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
            if (newLeft > rightEdge) {
              newLeft = rightEdge;
              newWidth = rightEdge;
            }

            thumbElem.style.left = newLeft + 'px';
            firstcont.style.width = newWidth + "px";
          };

          document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
          };

          return false; // disable selection start (cursor change)
        };

        thumbElem.ondragstart = function() {
          return false;
        };

        thumbElemVote.onmousedown = function(e) {
            var thumbCoords = getCoords(thumbElemVote);
            var shiftX = e.pageX - thumbCoords.left;

            var sliderCoords = getCoords(sliderElemVote);

            firstcontVote.style.width = e.pageX - sliderCoords.left + "px";

            document.onmousemove = function(e) {
              var newLeft = e.pageX - shiftX - sliderCoords.left;
              var newWidth = e.pageX - sliderCoords.left;

              if (newLeft < 0) {
                newLeft = 0;
                newWidth = 0;
              }
              var rightEdge = sliderElemVote.offsetWidth - thumbElemVote.offsetWidth;
              if (newLeft > rightEdge) {
                newLeft = rightEdge;
                newWidth = rightEdge;
              }

              thumbElemVote.style.left = newLeft + 'px';
              firstcontVote.style.width = newWidth + "px";
            };

            document.onmouseup = function() {
              document.onmousemove = document.onmouseup = null;
            };

            return false; // disable selection start (cursor change)
          };

          thumbElemVote.ondragstart = function() {
            return false;
          };

        function getCoords(elem) {
          var box = elem.getBoundingClientRect();

          return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
          };

        }
    }

    searchClick() {
        var firstcontVote = document.querySelector('.mdb-advanced-search__vote-first');
        var sliderElemVote = document.querySelector('.mdb-advanced-search__vote');
        var firstcont = document.querySelector('.mdb-advanced-search__popularity-first');
        var sliderElem = document.querySelector('.mdb-advanced-search__popularity');

        var computed1 = getComputedStyle(firstcont);
        var computed2 = getComputedStyle(sliderElem);
        var computed3 = getComputedStyle(firstcontVote);
        var computed4 = getComputedStyle(sliderElemVote);

        var pop = parseFloat(computed1.width)/parseFloat(computed2.width)*100 + '%';
        var ave = parseFloat(computed3.width)/parseFloat(computed4.width)*100 + '%';

        this.props.updateAdvSearchInputs(this.state.title,
                                        this.state.overview,
                                        this.state.genres,
                                        pop,
                                        ave
                                    );
        if(this.state.remember) {
            localStorage.getItem;
            localStorage.setItem('title', this.state.title);
            localStorage.setItem('overview', this.state.overview);
            //localStorage.setItem('genres', this.state.genres);
            localStorage.setItem('popular', pop);
            localStorage.setItem('average', ave);
            localStorage.setItem('remember', this.state.remember);
            for(var i=0; i<= this.state.genres.length; i++) {
                localStorage.setItem(this.state.genres[i], 'true');
            }
        } else {localStorage.clear();}
        this.props.updateClassSearch();
    }

    render() {
        console.log(this.state.action);
        return (
            <div className='mdb-advanced-search'>
                <div className={this.props.classSearch}>
                    <div className='mdb-advanced-search__header'>
                        <p className='mdb-advanced-search__header-text'>Advanced Search</p>
                        <hr />
                    </div>
                    <div className='mdb-advanced-search__section'>
                        <div className='mdb-advanced-search__section-content'>
                            <input
                            className='mdb-advanced-search__title'
                            type='text'
                            placeholder='Title'
                            value={this.state.title}
                            onChange={this.onTitleChange}/>
                            <textarea
                            name="searchoverview"
                            placeholder='Overview'
                            value={this.state.overview}
                            className="mdb-advanced-search__overview"
                            onChange={this.onOverviewChange}
                            ></textarea>
                        </div>
                        <div className='mdb-advanced-search__section-content'>
                            <p className='mdb-advanced-search__popularity-text'>Popularity</p>
                            <div className="mdb-advanced-search__popularity">
                                <div
                                className="mdb-advanced-search__popularity-first"
                                style={{width: this.state.popularity}}
                                >
                                </div>
                                <img className="mdb-advanced-search__slider" src={slider}
                                style={{left: this.state.popularity}} />
                            </div>
                            <br />
                            <p className='mdb-advanced-search__vote-text'>Vote Average</p>
                            <div className="mdb-advanced-search__vote">
                                <div className="mdb-advanced-search__vote-first"
                                style={{width: this.state.average}}>
                                </div>
                                <img className="mdb-advanced-search__slider-vote" src={slider}
                                style={{left: this.state.average}} />
                            </div>
                        </div>
                    </div>
                    <div className='mdb-advanced-search__section'>
                        <div className='mdb-advanced-search__section-content-genre'>
                            <GenreBoard updateGenreBoard={this.updateGenreBoard} />
                        </div>
                        <div className='mdb-advanced-search__section-content-button'>
                            <div className='mdb-advanced-search__section-button'>
                                <label>
                                    <input
                                    className='mdb-advanced-search__remember'
                                    type="checkbox"
                                    value="remember"
                                    checked={this.state.remember}
                                    onChange={this.checkChange}
                                    />
                                    Remember inputs
                                </label>
                            </div>
                                <button className='mdb-advanced-search__button' onClick={this.searchClick}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdvancedSearch;