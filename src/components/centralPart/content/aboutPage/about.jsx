import React from 'react';
import styles from '../../../../styles/centralPart/content/aboutPage/about.module.css';

import {NavLink} from 'react-router-dom';

const About = (props) => {
    return(
        <div className={styles.about}>
            <h1 className={styles.h1}>Welcome to our app!</h1>
            <p>It has been designed to help you get organized, achieve your goals and never forget a thing.</p>
            <NavLink exact to="/tasks">
                <button>Start</button>
            </NavLink>

        </div>
    )
};

export default About;