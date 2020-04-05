import React from 'react';
import styles from '../../styles/header/header.module.css';

import logo from '../../images/Logo2.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt=""/>
            </div>

            <div className={styles.buttons}>
                    <NavLink to="/">About</NavLink>
                    <NavLink to="/tasks">App</NavLink>
            </div>
        </header>
    )
};

export default Header;