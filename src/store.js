import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers'
const middlware=[thunk];
const initialState={};
const store=createStore(
rootReducer,
initialState,
composeWithDevTools(applyMiddleware(...middlware)));
export default store;







