import React, { Component } from 'react';
import './lib_message.css';
import successfull from '../../../img/successful.png';
import close from '../../../img/close.png';

class LibMessage extends Component {
    constructor(props){
      super(props);
      this.close=this.close.bind(this);
    }

    close() {
        this.props.closeMessageAdd();
    }

    render() {
        return (
            <div className='mdb-lib-message'>
                <div className={this.props.class}>
                    <img className='mdb-lib-message__pic' src={successfull}></img>
                    <img className='mdb-lib-message__pic-close' src={close} onClick={this.close}></img>
                    <p className='mdb-lib-message__text'>"{this.props.title}" has been added successfully</p>
                </div>
            </div>
        );
    }
}

export default LibMessage;