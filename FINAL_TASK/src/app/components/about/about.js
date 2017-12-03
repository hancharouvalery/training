import React, { Component } from 'react';
import './about.css';
import face from '../../../img/face.png';
import one from '../../../img/gallery/1.png';
import two from '../../../img/gallery/2.png';
import three from '../../../img/gallery/3.png';
import four from '../../../img/gallery/4.png';
import five from '../../../img/gallery/5.png';
import six from '../../../img/gallery/6.png';
import seven from '../../../img/gallery/7.png';
import eight from '../../../img/gallery/8.png';
import nine from '../../../img/gallery/9.png';
import ten from '../../../img/gallery/10.png';
import eleven from '../../../img/gallery/11.png';
import twelve from '../../../img/gallery/12.png';
import thirteen from '../../../img/gallery/13.png';
import fourteen from '../../../img/gallery/14.png';
import fifteen from '../../../img/gallery/15.png';

class About extends Component {
    constructor(props){
      super(props);
      this.state={arr: [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen],
                front: two,
                back: one,
                next: three,
                classBack: 'mdb-about__gallery-picture-back',
                classNext: 'mdb-about__gallery-picture-next'};
      this.next=this.next.bind(this);
      this.back=this.back.bind(this);
      this.countFront = 2;
      this.countBack = 1;
      this.countNext = 3;
    }

    next(e) {
        this.setState({classBack: 'mdb-about__gallery-picture-back'});
        this.countFront = this.countFront + 1;
        this.countBack = this.countBack + 1;
        this.countNext = this.countNext + 1;
        if (this.countFront >= this.state.arr.length -1 ) {
            this.countFront = this.state.arr.length - 1;
            this.countBack = this.state.arr.length - 2;
            this.countNext = this.countNext - 2;
            this.setState({classNext: 'mdb-about__gallery-picture-next_hide'});
        }
        this.setState({front: this.state.arr[this.countFront]});
        this.setState({back: this.state.arr[this.countBack]});
        this.setState({next: this.state.arr[this.countNext]});
    }

    back() {
        this.setState({classNext: 'mdb-about__gallery-picture-next'});
        this.countFront = this.countFront - 1;
        this.countBack = this.countBack - 1;
        this.countNext = this.countNext - 1;
        if (this.countFront <= 1 ) {
            this.countFront = 1;
            this.countNext = 2;
            this.countBack = this.countBack + 2;
            this.setState({classBack: 'mdb-about__gallery-picture-back_hide'});
        }
        this.setState({front: this.state.arr[this.countFront]});
        this.setState({back: this.state.arr[this.countBack]});
        this.setState({next: this.state.arr[this.countNext]});
    }

    render() {
        return (
            <div className='mdb-about'>
                <div className='mdb-about__container'>
                    <p className='mdb-about__text-header'>I built this website</p>
                    <div className='mdb-about__container-about'>
                        <p className='mdb-about__text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <img className='mdb-about__selfi' src={face}></img>
                    </div>
                    <div className='mdb-about__gallery-container'>
                        <div className='mdb-about__gallery'>
                            <div className='mdb-about__gallery-pic-back'>
                                <img className={this.state.classBack} src={this.state.back}></img>
                            </div>
                            <div className='mdb-about__gallery-pic-front'>
                                <img className='mdb-about__gallery-picture-front' src={this.state.front}></img>
                            </div>
                            <div className='mdb-about__gallery-pic-next'>
                                <img className={this.state.classNext} src={this.state.next}></img>
                            </div>
                        </div>
                        <div className='mdb-about__arrows'>
                            <span className='mdb-about__left' onClick={this.back}>Prev</span>
                            <span className='mdb-about__right' onClick={this.next}>Next</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;