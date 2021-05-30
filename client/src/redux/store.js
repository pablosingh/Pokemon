import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import combineReducers from './combineReducers';

const store = createStore(
    combineReducers, 
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;