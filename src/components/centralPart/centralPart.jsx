import React from 'react';
import styles from '../../styles/centralPart/centralPart.module.css';

import Aside from './aside/aside';
import Content from './content/content';

const CentralPart = (props) => {
    return(
        <div className={styles.central_part}>
            <Aside />
            <Content />
        </div>
    )
};

export default CentralPart;