import React, { Component } from 'react';
import './links.css';
import { connect } from 'react-redux';
import { formView } from './../../store/actions';

class Links extends Component {
    constructor(props) {
      super(props);
      this.click = this.click.bind(this);
    }
    click() {
      this.props.formView('block');
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

const mapStateToProps = (state) => {
  const display = state.form.display;
  return { display };
};

const mapDispatchToProps = (dispatch) => ({
  formView: (form) => dispatch(formView(form))
});

export default connect(mapStateToProps, mapDispatchToProps)(Links);

