const SET_TASK = 'SET-TASK',
      SET_INPUT_TEXT = 'SET-INPUT-TEXT',
      CHANGE_INPUT_TEXT = 'CHANGE-INPUT-TEXT',
      SAVE_CHANGES = 'SAVE-CHANGES';

let initialState = {
    task: {},
    inputText: '' };

const updateTaskPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_TASK:
            return {
                ...state,
                task: action.task
            };

        case SET_INPUT_TEXT:
            return {
                ...state,
                inputText: action.text
            };

        case CHANGE_INPUT_TEXT:
            let text = action.text;
            return {
                ...state,
                inputText: text
            };

        case SAVE_CHANGES:
            let taskId = action.id;

           let updatedTasks = JSON.parse(localStorage.getItem('tasks')).map( elem => {
                if (taskId === elem.id) {
                    elem.taskContent = state.inputText;
                }
                return elem;
            });

           localStorage.setItem("tasks", JSON.stringify(updatedTasks));

           return {
               ...state
           };

        default: return state;
    }
};

export const setTaskActionCreator = (task) => ({type: SET_TASK, task: task});
export const setInputTextActionCreator = (text) => ({type: SET_INPUT_TEXT, text: text});
export const changeInputTextActionCreator = (text) => ({type: CHANGE_INPUT_TEXT, text: text});
export const saveChangesActionCreator = (id) => ({type: SAVE_CHANGES, id: id});

export default updateTaskPageReducer;