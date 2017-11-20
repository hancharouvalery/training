import React, { Component } from 'react';
import './scroll.css';
import up from '../../../img/up.png';
import down from '../../../img/down.png';



export class Scroll extends Component {
    constructor(props){
      super(props);
      this.scrollDown = this.scrollDown.bind(this);
      this.state = {src: down};
    }
    scrollDown(){
      if (this.state.src === down && document.body.clientHeight > window.innerHeight) {
        this.setState({src: up});
        window.scrollTo(0, document.body.clientHeight);
      } else {
        this.setState({src: down});
        window.scrollTo(0, 0);
      }
    }
    render() {
      return (
      <div className='mdb-scroll__container' onClick={this.scrollDown}>
        <img className='mdb-scroll__container-arrow' src={this.state.src}></img>
      </div>
      );
    }
}

