import React, { Component } from 'react';
import './support.css';
import Links from '../links/links';

class Support extends Component {
    constructor(props){
      super(props);
      this.click = this.click.bind(this);
    }

    click(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className='mdb-support'>
                <div className='mdb-support__links-container'>
                    <Links removeLink={this.props.removeLink}/>
                </div>
                <div className='mdb-support__container'>
                    <div className='mdb-support__header'>
                        <p className='mdb-support__header-text'>Request</p>
                        <hr />
                    </div>
                    <form class="mdb-support__support-form" action="" target="result">
                        <div className='mdb-support__inputs-section'>
                            <input
                            className='mdb-support__name'
                            type='text'
                            name='Name'
                            placeholder='Name'
                            />
                            <textarea
                            name="Description"
                            placeholder='Description'
                            className="mdb-support__description"
                            ></textarea>
                        </div>
                        <div className='mdb-support__buttons-section'>
                            <button
                            type='submit'
                            className='mdb-support__submit-button'
                            onClick={this.click}
                            >Submit</button>
                            <button className='mdb-support__cancel-button' type='reset'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Support;