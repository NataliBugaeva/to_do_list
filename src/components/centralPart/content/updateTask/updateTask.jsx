import React, {createRef} from 'react';
import style from '../../../../styles/centralPart/content/updateTask/updateTask.module.css';

import {NavLink} from 'react-router-dom';

const UpdateTask = (props) => {

    let linkOnInput = createRef();

    let changeText = () => {
        let text = linkOnInput.current.value;
        props.changeInputText(text);
    };

    let save = () => {
        let id = props.task.id;
        props.saveChanges(id);
    };

    return (
        <div className={style.k}>
            <h1>Update "{props.task.name}"</h1>
            <textarea onChange={changeText} ref={linkOnInput} value={props.inputText}/>

            <div className={style.buttons}>
                <NavLink to="/tasks">
                    <button onClick={save}>Save</button>
                </NavLink>

                <NavLink to="/tasks">
                    <button>Back</button>
                </NavLink>
            </div>
        </div>
    )
};

export default UpdateTask;
