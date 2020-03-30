import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => {
    return(
        <footer className={styles.footer}>
            <span>&copy; All Rights Reserved, 2020</span>
        </footer>
    )
};

export default Footer;