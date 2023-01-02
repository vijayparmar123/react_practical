import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import RootReducer from '../reducers/RootReducer'
const store =  createStore(RootReducer,applyMiddleware(thunkMiddleware));
export default store;