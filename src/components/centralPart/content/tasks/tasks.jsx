import React from 'react';
import styles from './tasks.module.css';

import Task from './task/task';

const Tasks = (props) => {

    let linkOnTextarea = React.createRef();

    let changeText = () => {
        let textareaValue = linkOnTextarea.current.value;
        props.changeTextareaText(textareaValue);
    };

    let removeTasks = () => {
        if (window.confirm('Are you sure you want to remove all tasks?')) {
            props.removeAllTasks();
        }
    };

    return (
        <div className={styles.tasks}>
            <h1>Create new task:</h1>
            <textarea onChange={changeText} ref={linkOnTextarea} name="" id="" cols="30" rows="10"
                      value={props.newTaskText} placeholder="...add new task" />
            <div className={styles.buttons}>
                <button onClick={props.addNewTask} disabled={!props.newTaskText}>Add</button>
                <button onClick={removeTasks} disabled={props.tasks.length === 0}>Clear</button>
            </div>

            <div className={styles.daily_tasks}>
                {
                    (props.tasks.length !== 0) ?
                        props.tasks.map((elem) => {
                            return <Task taskName={elem.name} taskContent={elem.taskContent} id={elem.id}
                                         done={elem.done}
                                         key={elem.id} deleteTask={props.deleteTask} changeStatus={props.changeStatus}/>
                        }) : null
                }
            </div>
        </div>
    )
};

export default Tasks;