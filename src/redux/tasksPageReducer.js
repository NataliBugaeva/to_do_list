const SET_TASKS = 'SET-TASKS',
      CHANGE_TEXTAREA_TEXT = 'CHANGE-TEXTAREA-TEXT',
      ADD_NEW_TASK = 'ADD-NEW-TASK',
      REMOVE_ALL_TASKS = 'REMOVE-ALL-TASKS',
      DELETE_TASK = 'DELETE-TASK',
      CHANGE_TASK_STATUS = 'CHANGE-TASK-STATUS';

const id = () => Math.random().toString(36).substr(2, 9);

let initialState = {
    tasks: [],
    newTaskText: '' };

const tasksPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            };

        case CHANGE_TEXTAREA_TEXT:
            let newText = action.textareaText;
            return {
                ...state,
                newTaskText: newText
            };

        case ADD_NEW_TASK:

            let taskText = state.newTaskText,
                newTask = {id: `${id()}`, name: `task${state.tasks.length + 1}`, taskContent: taskText, done: false};

            localStorage.setItem('tasks', JSON.stringify([...JSON.parse(localStorage.getItem('tasks')), newTask]));

            return {
                ...state,
                tasks: [...state.tasks, newTask],
                newTaskText: ''
            };

        case DELETE_TASK:
            let taskId = action.taskId;
            let updatedTasks = JSON.parse(localStorage.getItem('tasks')).filter(elem => elem.id !== taskId ? elem : null);

            localStorage.setItem('tasks', JSON.stringify(updatedTasks));

            return {
                ...state,
                tasks: updatedTasks
            };

        case REMOVE_ALL_TASKS:
            localStorage.setItem('tasks', JSON.stringify([]));

            return {
                ...state,
                tasks: []
            };

        case CHANGE_TASK_STATUS:
            let selectedTaskId = action.taskId;
            let tasksUpdate = JSON.parse(localStorage.getItem('tasks')).map(elem => {
                if (elem.id === selectedTaskId) {
                    elem.done = !elem.done;
                }
                return elem;
            });
            localStorage.setItem('tasks', JSON.stringify(tasksUpdate));

            return {
                ...state,
                tasks: tasksUpdate
            };

        default:
            return state;
    }
};

export const setTasksActionCreator = (tasks) => ({type: SET_TASKS, tasks: tasks});
export const changeTextareaTextActionCreator = (textareaText) => ({type: CHANGE_TEXTAREA_TEXT, textareaText: textareaText});
export const addNewTaskActionCreator = () => ({type: ADD_NEW_TASK});
export const removeAllTasksActionCreator = () => ({type: REMOVE_ALL_TASKS});
export const deleteTaskActionCreator = (taskId) => ({type: DELETE_TASK, taskId: taskId});
export const changeTaskStatusActionCreator = (taskId) => ({type: CHANGE_TASK_STATUS, taskId: taskId});

export default tasksPageReducer;