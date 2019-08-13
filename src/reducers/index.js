import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import authReducer from './authReducer';
const loggerMiddleware = createLogger()
const reducer = combineReducers({
    auth: authReducer
});
export default createStore(reducer, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));