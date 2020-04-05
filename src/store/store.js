import tasksPageReducer from '../reducers/tasksPageReducer';
import updateTaskPageReducer from '../reducers/updateTaskPageReducer';

import {combineReducers, createStore} from 'redux';

let reducers = combineReducers({
    pageTasks: tasksPageReducer,
    pageUpdateTask: updateTaskPageReducer
});

let store = createStore(reducers);
window.store = store;

export default store;