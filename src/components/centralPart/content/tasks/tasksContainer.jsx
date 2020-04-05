import React from 'react';
import {connect} from 'react-redux';

import Tasks from './tasks';
import {setTasksActionCreator, changeTextareaTextActionCreator, addNewTaskActionCreator,
        deleteTaskActionCreator, removeAllTasksActionCreator, changeTaskStatusActionCreator} from '../../../../reducers/tasksPageReducer';

class TasksClassContainer extends React.Component {

    componentDidMount() {
        //будем брать из LS
        if (!localStorage.tasks) {
            localStorage.setItem('tasks', JSON.stringify([]));
        }
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        this.props.setTasks(tasks);
    }

    render() {
        return <Tasks {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    tasks: state.pageTasks.tasks,
    newTaskText: state.pageTasks.newTaskText
});

let mapDispatchToProps = (dispatch) => ({

    setTasks: (tasks) => {
        dispatch(setTasksActionCreator(tasks));
    },

    changeTextareaText: (textareaText) => {
        dispatch(changeTextareaTextActionCreator(textareaText));
    },

    addNewTask: () => {
        dispatch(addNewTaskActionCreator());
    },

    deleteTask: (taskId) => {
        dispatch(deleteTaskActionCreator(taskId));
    },

    changeStatus: (taskId) => {
        dispatch(changeTaskStatusActionCreator(taskId));
    },

    removeAllTasks: () => {
        dispatch(removeAllTasksActionCreator());
    }
});

const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(TasksClassContainer);

export default TasksContainer;