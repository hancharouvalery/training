import React from "react";
import ReactDOM from "react-dom";
import styles from './app.css';

const element = (
    <h1 className="firstElement">First Element</h1>
);

ReactDOM.render(element, document.querySelector('.main'));

