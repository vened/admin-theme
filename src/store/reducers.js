import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import UI from './UI/reducer';

export default combineReducers({
  routing: routerReducer,
  UI,
});
