import React from 'react';
import styles from './task.module.css';
import {NavLink} from 'react-router-dom';

const Task = (props) => {

    let deleteTask = () => {
        let taskId = props.id;
        if (window.confirm(`Are you sure you want to remove ${props.taskName} "${props.taskContent}"?`)) {
            props.deleteTask(taskId);
        }
    };

    let changeStatus = () => {
        let taskId = props.id;
        props.changeStatus(taskId);
    };

    return (
        <div className={styles.task}>
            <h2>{props.taskName}:</h2>
            <div className={props.done ? `${styles.task_content} ${styles.done}` : `${styles.task_content}`}>
                {props.taskContent}
            </div>

            <div className={styles.buttons}>
                <NavLink exact to={`tasks/task_${props.id}`}>
                    <button disabled={props.done}>Update</button>
                </NavLink>

                <button onClick={deleteTask}>Delete</button>

                <button onClick={changeStatus}>Done</button>
            </div>
        </div>
    )
};

export default Task;