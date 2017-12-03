import React, { Component } from 'react';
import './empty_lib.css';
import emptyLib from '../../../img/emptyLib.png';

class EmptyLib extends Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
            <div className='mdb-empty-lib'>
                <div className='mdb-empty-lib__empty-lib-container'>
                    <img className='mdb-empty-lib__empty-lib-pic' src={emptyLib}></img>
                    <p className='mdb-empty-lib__empty-lib-text'>No movies in library</p>
                </div>
            </div>
        );
    }
}

export default EmptyLib;