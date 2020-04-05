import React from 'react';
import styles from '../../../styles/centralPart/content/content.module.css';

import About from './aboutPage/about';

import TasksContainer from './tasks/tasksContainer';
import UpdateTaskContainer from './updateTask/updateTaskContainer';
import {Route} from 'react-router-dom';

const Content = (props) => {
    return(
        <div className={styles.content}>
            <Route exact path="/" render={ () => <About />} />
            <Route exact path="/tasks" render={ () => <TasksContainer />} />
            <Route exact path="/tasks/task_:taskId" render={ () => <UpdateTaskContainer /> }/>
        </div>
    )
};

export default Content;