import React, { Component } from 'react';
import './links.css';

class Links extends Component {
    render() {
      return (
      <div className='mdb-links'>
        <div className='mdb-links__container'>
          <a className='mdb-links__header-link' href='#'>Add Movie</a>
          <a className='mdb-links__header-link' href='#'>About</a>
          <a className='mdb-links__header-link' href='#'>Pricing</a>
          <a className='mdb-links__header-link mdb-links__header-link_final-link' href='#'>Blog</a>
        </div>
      </div>
      );
    }
}

export default Links;