import React from 'react';
import UpdateTask from './updateTask';
import {connect} from 'react-redux';

import {setTaskActionCreator, setInputTextActionCreator, changeInputTextActionCreator, saveChangesActionCreator} from '../../../../redux/updateTaskPageReducer';
import {withRouter} from 'react-router-dom';

class UpdateTaskClassContainer extends React.Component {

    componentDidMount() {
        let taskId = this.props.match.params.taskId;
        let task = JSON.parse(localStorage.getItem('tasks')).find( elem => elem.id===taskId ? elem : null);

        this.props.setTask(task);
        this.props.setInputText(task.taskContent);
    }

    render() {
        return <UpdateTask {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    task: state.pageUpdateTask.task,
    inputText: state.pageUpdateTask.inputText
});

let mapDispatchToProps = (dispatch) => ({

    setTask: (task) => {
        dispatch(setTaskActionCreator(task))
    },

    setInputText: (text) => {
        dispatch(setInputTextActionCreator(text))
    },

    changeInputText: (text) => {
        dispatch(changeInputTextActionCreator(text))
    },

    saveChanges: (id) => {
        dispatch(saveChangesActionCreator(id))
    }
});

const UpdateTaskClassContainerWithUrl = withRouter(UpdateTaskClassContainer);

const UpdateTaskContainer = connect(mapStateToProps, mapDispatchToProps)(UpdateTaskClassContainerWithUrl);

export default UpdateTaskContainer;