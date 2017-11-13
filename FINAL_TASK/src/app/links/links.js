import React, { Component } from 'react';
import './links.css';

class Links extends Component {
    constructor(props) {
      super(props);
      this.click = this.click.bind(this);
    }
    click() {
      this.props.updateFormDisplay('block');
    }
    render() {
    return (
    <div className='mdb-links'>
      <ul className='mdb-links__container'>
        <li className={this.props.removeLink || 'mdb-links__header-link'} onClick={this.click}>Add Movie</li>
        <li className='mdb-links__header-link'>About</li>
        <li className='mdb-links__header-link'>Pricing</li>
        <li className='mdb-links__header-link mdb-links__header-link_final-link'>Blog</li>
      </ul>
    </div>
    );
  }
}

export default Links;