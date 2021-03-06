import React, { Component } from 'react';
import './lib_message_remove.css';
import successfull from '../../../img/successful.png';
import close from '../../../img/close.png';

class LibMessageRemove extends Component {
    constructor(props){
      super(props);
      this.close=this.close.bind(this);
    }

    close() {
        this.props.closeMessageRemove();
    }

    render() {
        return (
            <div className='mdb-lib-message-remove'>
                <div className={this.props.class}>
                    <img className='mdb-lib-message-remove__pic' src={successfull}></img>
                    <img className='mdb-lib-message-remove__pic-close' src={close} onClick={this.close}></img>
                    <p className='mdb-lib-message-remove__text'>"{this.props.title}" has been removed successfully</p>
                </div>
            </div>
        );
    }
}

export default LibMessageRemove;