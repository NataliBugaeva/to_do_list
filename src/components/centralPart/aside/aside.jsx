import React from 'react';
import styles from './aside.module.css';

import {NavLink} from 'react-router-dom';

const Aside = (props) => {
    return(
        <aside className={styles.aside}>
            <div>
               <NavLink to="/">About</NavLink>
            </div>

            <div>
                <NavLink to="/tasks">App</NavLink>
            </div>
        </aside>
    )
};

export default Aside;